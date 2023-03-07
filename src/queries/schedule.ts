import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import type { Schedule } from "../models/schedule";
import { Session } from "../models/session";

export const useSchedule = (domain: string) =>
    useQuery<Schedule>([domain, "schedule"]);

const filterSession = (session: Session, filter?: string) =>
    filter === undefined || filter === ""
    || session.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase());

export const useSessions = (domain: string, filter?: string) => {
    const schedule = useSchedule(domain);

    const sessions = useMemo(() => schedule.data?.sessions.filter(
        session => !session.isServiceSession && filterSession(session, filter)
    ), [schedule.data, filter]);

    return { ...schedule, sessions }
}

export const useServices = (domain: string) => {
    const schedule = useSchedule(domain);

    const services = useMemo(() => schedule.data?.sessions.filter(
        session => session.isServiceSession
    ), [schedule.data]);

    return { ...schedule, services };
}
