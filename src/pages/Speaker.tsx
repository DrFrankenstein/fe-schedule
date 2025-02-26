import React, { useContext } from "react";
import { useParams } from "react-router";
import { SessionTable } from "../components/SessionTable";
import { EventContext } from "../context/EventContext";
import { useSessionsForSpeaker } from "../queries/schedule";
import { useSpeaker } from "../queries/speaker";

interface SpeakerSessionsProps {
    speakerId: string;
}

const SpeakerSessions: React.FC<SpeakerSessionsProps> = props => {
    const domain = useContext(EventContext);
    const sessionsQuery = useSessionsForSpeaker(domain, props.speakerId);
    const sessions = sessionsQuery.sessions;

    if (sessionsQuery.isPending) {
        return <>Loading sessions&hellip;</>;
    }

    if (sessionsQuery.isError || sessions === undefined) {
        return <>oh no :(</>;
    }

    return <SessionTable sessions={sessions} />
}

export const Speaker: React.FC = () => {
    const params = useParams();
    if (params.id === undefined) {
        return <>which speaker!?</>;
    }

    const domain = useContext(EventContext);
    const speakerQuery = useSpeaker(domain, params.id);
    const speaker = speakerQuery.speaker;

    if (speakerQuery.isPending) {
        return <>Loading&hellip;</>;
    }

    if (speakerQuery.isError || speaker === undefined) {
        return <>oh no :(</>;
    }

    return <>
        <h1>
            <img src={speaker.profilePicture} />
            {speaker.fullName}
        </h1>
        <p><em>{speaker.tagLine}</em></p>
        <p>{speaker.bio}</p>
        <ul>{speaker.questionAnswers.map(answer => <li key={answer.questionId}>{answer.answerValue}</li>)}</ul>
        <h2>Sessions:</h2>
        <SpeakerSessions speakerId={speaker.id} />
    </>;
}
