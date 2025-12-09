import Empty from "../../ui/Empty";
import Heading from "../../ui/Heading";
import PickupItem from "./PickupItem";

export default function PickupDisplay({ todaysPickups, isGettingPickups }) {
  return (
    <div className="h-full bg-gray-50 border border-solid border-gray-100 rounded-md px-14 py-12 flex flex-col gap-6 overflow-auto">
      <div className="flex justify-start">
        <Heading as="h2">Todays Pickups</Heading>
      </div>
      {/* {todaysPickups?.length > 0 ? (
        <ul>
          {todaysPickups.map((pickup) => (
            <PickupItem pickup={pickup} key={pickup.id} />
          ))}
        </ul>
      ) : (
        <Empty resourceName="pickups" />
      )} */}
      {!isGettingPickups ? (
        todaysPickups?.length > 0 ? (
          <>
            <ul>
              {todaysPickups.map((pickup) => (
                <PickupItem pickup={pickup} key={pickup.id} />
              ))}
            </ul>
            <div className="font-semibold text-3xl text-left mt-6">
              <p>Please make sure all vehicles are cleaned and ready to go!</p>
            </div>
          </>
        ) : (
          <Empty resourceName="pickups" />
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
}
