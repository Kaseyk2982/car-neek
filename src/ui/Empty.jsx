import { HiOutlineFaceFrown } from "react-icons/hi2";

export default function Empty({ resourceName }) {
  return (
    <div className="flex justify-center items-center text-4xl font-semibold mt-20">
      No {resourceName} could be found
      <span>
        <HiOutlineFaceFrown className="text-5xl ml-6 text-yellow-500" />
      </span>
    </div>
  );
}
