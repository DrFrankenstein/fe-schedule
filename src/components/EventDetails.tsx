import React from "react";
import { useEventData } from "../queries/eventdata";

export interface EventDetailsProps {
    domain: string;
}

export const EventDetails: React.FC<EventDetailsProps> = props => {
    const eventQuery = useEventData(props.domain);

    if (eventQuery.isPending) {
        return <div>Loading&hellip;</div>;
    }

    if (eventQuery.isError) {
        return <div>oh no :(</div>;
    }

    const event = eventQuery.data;

    return <>
        <h1>Announcements:</h1>
        <div>{event.announcements}</div>
    </>;
};
