import { useQuery } from "@tanstack/react-query";
import type { Schedule } from "../models/schedule";

export const useSchedule = () => useQuery<Schedule>(["schedule"]);
