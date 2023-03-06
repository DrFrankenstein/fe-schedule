import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import type { Schedule } from "../models/schedule";

export const useSchedule = (domain: string) => useQuery<Schedule>([domain, "schedule"]);

export const useEvents = (domain: string) => {
    const schedule = useSchedule(domain);

    const events = useMemo(() => schedule.data?.sessions.filter(
        session => !session.isServiceSession
    ), [schedule.data]);

    return { ...schedule, events }
}

export const useServices = (domain: string) => {
    const schedule = useSchedule(domain);

    const services = useMemo(() => schedule.data?.sessions.filter(
        session => session.isServiceSession
    ), [schedule.data]);

    return { ...schedule, services };
}
