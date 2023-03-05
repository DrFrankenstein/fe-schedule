import React from "react";
import { useSchedule } from "../queries/schedule";
import { SessionTable } from "./SessionTable";

export interface ScheduleProps {
    domain: string;
}

export const Schedule: React.FC<ScheduleProps> = props => {
    const scheduleQuery = useSchedule(props.domain);

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
}
