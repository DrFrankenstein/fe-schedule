import React, { useContext } from "react";
import { SessionTable } from "../components/SessionTable";
import { EventContext } from "../context/EventContext";
import { useEvents } from "../queries/schedule";

export const EventsSchedule: React.FC = () => {
    const domain = useContext(EventContext);
    const eventsQuery = useEvents(domain);
    const events = eventsQuery.events;

    if (eventsQuery.isLoading) {
        return <div>Loading&hellip;</div>;
    }

    if (eventsQuery.isError || events === undefined) {
        return <div>oh no :(</div>;
    }

    return <>
        <h1>Sessions:</h1>
        <SessionTable sessions={events} />
    </>;
};
