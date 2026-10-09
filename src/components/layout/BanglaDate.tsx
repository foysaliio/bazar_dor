"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => {
  return () => {};
};

const BanglaDate = () => {
  const isClient = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  if (!isClient) {
    return <p className="mt-1.5 h-3 text-[11px] text-bazar-muted">&nbsp;</p>;
  }

  const date = new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).format(new Date());

  return (
    <p className="mt-1.5 text-[11px] leading-none text-bazar-muted">{date}</p>
  );
};

export default BanglaDate;
