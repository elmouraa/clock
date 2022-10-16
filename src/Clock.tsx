import { useTime } from "./use-time";

export const Clock = () => {
  const { time, timezoneOffset } = useTime();

  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <p className="text-white text-7xl">{time}</p>
      <p className="text-white text-3xl">{timezoneOffset}</p>
    </div>
  );
};
