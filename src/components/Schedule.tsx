import React from "react";
import { useSchedule } from "../queries/schedule";

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

    return <>

    </>;
}
