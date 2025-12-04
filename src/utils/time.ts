import { WORK_HOURS } from "@/config/work-hours";


/**
 * Determines online/offline status based on a given time and working hours.
 *
 * @param {Date} tzDate - The current date and time in the target timezone.
 * @param {number} [workStartHour=9] - The hour (0-23) when the workday starts. Default is 9 AM.
 * @param {number} [workEndHour=18] - The hour (0-23) when the workday ends. Default is 6 PM.
 * @param {number} [lunchStart=13] - The hour (0-23) when lunch break starts. Default is 1 PM.
 * @param {number} [lunchEnd=14] - The hour (0-23) when lunch break ends. Default is 2 PM.
 * @returns {"online" | "offline"} - Returns "online" if the time is within working hours and not during lunch; otherwise returns "offline".
 *
 * @example
 * const now = new Date();
 * const status = getOnlineStatus(now);
 * console.log(status); // "online" or "offline"
 */
export function getOnlineStatus(
  tzDate: Date,
  workStartHour = WORK_HOURS.start,
  workEndHour = WORK_HOURS.end,
  lunchStart = WORK_HOURS.lunchStart,
  lunchEnd = WORK_HOURS.lunchEnd
): "online" | "offline" {
  const hour = tzDate.getHours();

  // Online if within working hours but outside lunch break
  if (hour >= workStartHour && hour < workEndHour) {
    if (hour >= lunchStart && hour < lunchEnd) return "offline";
    return "online";
  }

  return "offline";
}

/** Compute next online time based on WORK_HOURS */
export function getNextOnlineTime(tzDate: Date): Date {
  const { start, end, lunchStart, lunchEnd } = WORK_HOURS;
  const hour = tzDate.getHours();
  const next = new Date(tzDate);

  if (hour < start) {
    next.setHours(start, 0, 0, 0);
  } else if (hour >= end || (hour >= lunchStart && hour < lunchEnd)) {
    if (hour >= lunchStart && hour < lunchEnd) {
      next.setHours(lunchEnd, 0, 0, 0);
    } else {
      next.setDate(next.getDate() + 1);
      next.setHours(start, 0, 0, 0);
    }
  }

  return next;
}