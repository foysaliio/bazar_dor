"use client";

import { useEffect, useState } from "react";

const HeroDate = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const formattedDate = new Intl.DateTimeFormat("bn-BD", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Dhaka",
      }).format(new Date());

      setDate(formattedDate);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return <span>{date || "\u00A0"}</span>;
};

export default HeroDate;
