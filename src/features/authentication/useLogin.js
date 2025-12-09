import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useUser } from "./useUser";

export function useLogin() {
  const { user } = useUser();

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      navigate("/dashboard", { replace: true });
      queryClient.setQueryData(["user"], user.user);
      toast.success(`Welcome back ${user.user.user_metadata.fullName}`);
    },
    onError: (err) => {
      console.log("Error:", err), toast.error("Incorrect password or email");
    },
  });
  return { login, isLoggingIn };
}
