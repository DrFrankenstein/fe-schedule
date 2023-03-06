import React, { useContext, useMemo } from "react";
import { SessionTable } from "../components/SessionTable";
import { EventContext } from "../context/EventContext";
import type { Schedule } from "../models/schedule";
import { useSchedule } from "../queries/schedule";

const getServicesSchedule = (schedule?: Schedule) =>
    schedule?.sessions.filter(session => session.isServiceSession);

export const ServicesSchedule: React.FC = () => {
    const domain = useContext(EventContext);
    const scheduleQuery = useSchedule(domain);
    const schedule = scheduleQuery.data;
    const sessions = useMemo(() => getServicesSchedule(schedule), [schedule]);

    if (scheduleQuery.isLoading) {
        return <div>Loading&hellip;</div>;
    }

    if (scheduleQuery.isError || sessions === undefined) {
        return <div>oh no :(</div>;
    }

    return <>
        <h1>Services:</h1>
        <SessionTable sessions={sessions} />
    </>;
};
