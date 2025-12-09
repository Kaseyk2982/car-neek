import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //1 Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  //2 if there is no auth user redirect to login page
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/login");
    }
  }, [isLoading, isAuthenticated, navigate]);

  //3 show a spinner while loading
  if (isLoading) return <Spinner className="fixed" />;

  //4 if there is a user render the app
  if (isAuthenticated) return children;
}
