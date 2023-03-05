import { useQuery } from "@tanstack/react-query";
import type { Schedule } from "../models/schedule";

export const useSchedule = (domain: string) => useQuery<Schedule>([domain, "schedule"]);
