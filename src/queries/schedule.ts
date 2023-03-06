import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import type { Schedule } from "../models/schedule";
import { Session } from "../models/session";

export const useSchedule = (domain: string) =>
    useQuery<Schedule>([domain, "schedule"]);

const filterEvent = (event: Session, filter?: string) =>
    filter === undefined || filter === ""
    || event.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase());

export const useEvents = (domain: string, filter?: string) => {
    const schedule = useSchedule(domain);

    const events = useMemo(() => schedule.data?.sessions.filter(
        session => !session.isServiceSession && filterEvent(session, filter)
    ), [schedule.data, filter]);

    return { ...schedule, events }
}

export const useServices = (domain: string) => {
    const schedule = useSchedule(domain);

    const services = useMemo(() => schedule.data?.sessions.filter(
        session => session.isServiceSession
    ), [schedule.data]);

    return { ...schedule, services };
}
