import { useState, useEffect } from "react";
import { formatTime, formatTimezoneOffset } from "./utils";

export const useTime = () => {
  const [time, setTime] = useState(formatTime(new Date()));
  const [timezoneOffset] = useState(formatTimezoneOffset(new Date()));

  useEffect(() => {
    const id = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return { time, timezoneOffset };
};
