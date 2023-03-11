import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { SessionTable } from "../components/SessionTable";
import { EventContext } from "../context/EventContext";
import { useSessionsForSpeaker } from "../queries/schedule";
import { useSpeaker } from "../queries/speaker";

export const Speaker: React.FC = props => {
    const params = useParams();
    if (params.id === undefined) {
        return <>which speaker!?</>;
    }

    const domain = useContext(EventContext);
    const speakerQuery = useSpeaker(domain, params.id);
    const speaker = speakerQuery.speaker;

    const sessionsQuery = useSessionsForSpeaker(domain, speaker?.id);
    const sessions = sessionsQuery.sessions;

    if (speakerQuery.isLoading || sessionsQuery.isLoading) {
        return <>Loading&hellip;</>;
    }

    if (speakerQuery.isError || speaker === undefined || sessions === undefined) {
        return <>oh no :(</>;
    }

    return <>
        <h1>
            <img src={speaker.profilePicture} />
            {speaker.fullName}
        </h1>
        <h2>Sessions:</h2>
        <SessionTable sessions={sessions} />
    </>;
}
