import React, { useContext, useMemo, useState } from "react";
import groupBy from "lodash.groupby";
import { SessionTable } from "../components/SessionTable";
import { EventContext } from "../context/EventContext";
import { useSessions } from "../queries/schedule";

export const SessionsSchedule: React.FC = () => {
    const [filter, setFilter] = useState("");

    const domain = useContext(EventContext);
    const sessionsQuery = useSessions(domain, filter);
    const sessions = sessionsQuery.sessions ?? [];

    const dateFormatter = new Intl.DateTimeFormat(undefined, {
        dateStyle: "full"
    });

    const sessionsByDate = useMemo(
        () => groupBy(sessions, event => dateFormatter.format(new Date(event.startsAt))),
        [sessions]
    );

    if (sessionsQuery.isPending) {
        return <div>Loading&hellip;</div>;
    }

    if (sessionsQuery.isError) {
        return <div>oh no :(</div>;
    }

    return <>
        <h1>Sessions:</h1>
        <label>
            Search:
            <input type="search" value={filter} onChange={e => setFilter(e.target.value)}/>
        </label>
        {Object.entries(sessionsByDate).map(([date, dateEvents]) => <div key={date}>
            <h2>{date}</h2>
            <SessionTable sessions={dateEvents} showSpeakers />
        </div>)}
    </>;
};
