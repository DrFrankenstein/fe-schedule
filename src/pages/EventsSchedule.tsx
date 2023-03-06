import React, { useContext } from "react";
import { SessionTable } from "../components/SessionTable";
import { EventContext } from "../context/EventContext";
import { useSchedule } from "../queries/schedule";

export const EventsSchedule: React.FC = () => {
    const domain = useContext(EventContext);
    const scheduleQuery = useSchedule(domain);

    if (scheduleQuery.isLoading) {
        return <div>Loading&hellip;</div>;
    }

    if (scheduleQuery.isError) {
        return <div>oh no :(</div>;
    }

    const schedule = scheduleQuery.data;

    return <>
        <h1>Sessions:</h1>
        <SessionTable sessions={schedule.sessions} />
    </>;
};
