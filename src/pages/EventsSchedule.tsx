import React, { useContext, useMemo } from "react";
import groupBy from "lodash.groupby";
import { SessionTable } from "../components/SessionTable";
import { EventContext } from "../context/EventContext";
import { useEvents } from "../queries/schedule";

export const EventsSchedule: React.FC = () => {
    const domain = useContext(EventContext);
    const eventsQuery = useEvents(domain);
    const events = eventsQuery.events ?? [];

    const dateFormatter = new Intl.DateTimeFormat(undefined, {
        dateStyle: "full"
    });

    const eventsByDate = useMemo(
        () => groupBy(events, event => dateFormatter.format(new Date(event.startsAt))),
        [events]
    );

    if (eventsQuery.isLoading) {
        return <div>Loading&hellip;</div>;
    }

    if (eventsQuery.isError) {
        return <div>oh no :(</div>;
    }

    return <>
        <h1>Sessions:</h1>
        {Object.entries(eventsByDate).map(([date, dateEvents]) => <div key={date}>
            <h2>{date}</h2>
            <SessionTable sessions={dateEvents} />
        </div>)}
    </>;
};
