import React, { Fragment } from "react";
import { SpeakerLabel } from "./SpeakerLabel";

export interface SpeakerEnumProps {
    ids: string[]
}

type Part = ReturnType<typeof Intl.ListFormat['prototype']['formatToParts']>[number];

function renderPart(part: Part, idx: number) {
    switch (part.type) {
        case "element": return <SpeakerLabel id={part.value} key={part.value} />;
        case "literal": return <Fragment key={idx}>{part.value}</Fragment>;
    }
}

export const SpeakerEnum: React.FC<SpeakerEnumProps> = props => {
    const listFormatter = new Intl.ListFormat();
    const parts = listFormatter.formatToParts(props.ids);

    return <>{parts.map(renderPart)}</>;
};
