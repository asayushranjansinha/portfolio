"use client";

import { useEffect, useState } from "react";
import { TZDate } from "@date-fns/tz";
import { format } from "date-fns";
import Link from "next/link";

import { USER } from "@/config/user";
import { WORK_HOURS } from "@/config/work-hours";
import { getNextOnlineTime, getOnlineStatus } from "@/utils/time";

import { IntroItem, IntroItemContent, IntroItemIcon } from "./IntroItem";

export function CurrentOnlineStatusItem() {
  const [status, setStatus] = useState<"online" | "offline">("offline");
  const [nextOnline, setNextOnline] = useState<Date | null>(null);

  useEffect(() => {
    const updateStatus = () => {
      const tzDate = TZDate.tz(USER.timeZone);
      const currentStatus = getOnlineStatus(
        tzDate,
        WORK_HOURS.start,
        WORK_HOURS.end,
        WORK_HOURS.lunchStart,
        WORK_HOURS.lunchEnd
      );
      setStatus(currentStatus);

      if (currentStatus === "offline") {
        setNextOnline(getNextOnlineTime(tzDate));
      } else {
        setNextOnline(null);
      }
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60_000); // every minute
    return () => clearInterval(interval);
  }, []);

  const isOnline = status === "online";

  return (
    <IntroItem>
      <IntroItemIcon>
        <span
          className={`relative flex h-3 w-3 items-center justify-center ${
            isOnline ? "text-green-500" : "text-red-500"
          }`}
        >
          <span
            className={`absolute inline-flex h-3 w-3 rounded-full ${
              isOnline ? "bg-green-500/30 animate-ping" : "bg-red-500/30"
            }`}
          />
          <span
            className={`relative inline-flex h-2 w-2 rounded-full ${
              isOnline ? "bg-green-500" : "bg-red-500"
            }`}
          />
        </span>
      </IntroItemIcon>

      <IntroItemContent>
        {isOnline ? (
          "Online Now"
        ) : nextOnline ? (
          <>Offline Now (Will be online at {format(nextOnline, "hh:mm a")})</>
        ) : (
          <>
            Offline Now <Link href="/#contact" className="text-emerald-500">Send a message</Link>
          </>
        )}
      </IntroItemContent>
    </IntroItem>
  );
}
