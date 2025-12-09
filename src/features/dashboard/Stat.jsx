import Heading from "../../ui/Heading";

export default function Stat({ value, title, icon }) {
  return (
    <div
      className="bg-gray-50 rounded-md border border-gray-200 p-6 
                    grid grid-cols-[6.4rem_1fr] grid-rows-[auto_auto] 
                    gap-x-5 gap-y-3"
    >
      <div className="row-span-2 flex items-center justify-center">
        <div className="aspect-square w-full flex items-center justify-center">
          {icon}
        </div>
      </div>

      <h5 className="self-end text-xl uppercase font-semibold text-gray-500">
        {title}
      </h5>

      <p className="text-4xl font-semibold text-gray-900">{value}</p>
    </div>
  );
}
