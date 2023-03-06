import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { EventContext } from "../context/EventContext";
import { useSpeaker } from "../queries/speaker";

export interface SpeakerLabelProps {
    id: string;
}

export const SpeakerLabel: React.FC<SpeakerLabelProps> = props => {
    const domain = useContext(EventContext);
    const speakerQuery = useSpeaker(domain, props.id);
    const speaker = speakerQuery.speaker;

    if (speakerQuery.isLoading) {
        return <>&hellip;</>;
    }

    if (speakerQuery.isError || speaker === undefined) {
        return <>(not found)</>;
    }

    return <Link to={`/speaker/${props.id}`}>
        {speaker.fullName}
    </Link>
}
