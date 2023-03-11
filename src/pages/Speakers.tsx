import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { EventContext } from "../context/EventContext";
import { Speaker } from "../models/speaker";
import { useSpeakers } from "../queries/speaker";

export const Speakers: React.FC = () => {
    const domain = useContext(EventContext);
    const speakersQuery = useSpeakers(domain);
    const speakers = speakersQuery.speakers;

    if (speakersQuery.isLoading) {
        return <>Loading&hellip;</>;
    }

    if (speakersQuery.isError) {
        return <>oh no :(</>;
    }

    const renderSpeaker = (speaker: Speaker) => <li key={speaker.id}>
        <Link to={`/speaker/${speaker.id}`}>
            <img src={speaker.profilePicture} style={{height:"2rem"}}/>
            {speaker.fullName}
        </Link> &mdash; <em>{speaker.tagLine}</em>
    </li>;

    return <ul>
        {speakers?.map(renderSpeaker)}
    </ul>;
}
