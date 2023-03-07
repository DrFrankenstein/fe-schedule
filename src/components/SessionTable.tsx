import React from "react";
import { FieldIds } from "../models/category";
import { Session } from "../models/session";
import { CategoryEnum } from "./CategoryEnum";
import { RoomLabel } from "./RoomLabel";
import { SpeakerEnum } from "./SpeakerEnum";

export interface SessionTableProps {
    sessions: Session[];
}

export const SessionTable: React.FC<SessionTableProps> = props => {
    return <table>
        <SessionHeader />
        <tbody>
            {props.sessions.map(session => <SessionRow key={session.id} session={session} />)}
        </tbody>
    </table>
}

export interface SessionRowProps {
    session: Session;
}

export const SessionHeader: React.FC = () => <thead>
    <tr>
        <th>Time</th>
        <th>Title</th>
        <th>Speakers</th>
        <th>Track</th>
        <th>Format</th>
        <th>Venue</th>
    </tr>
</thead>;

export const SessionRow: React.FC<SessionRowProps> = props => {
    const { session } = props;

    const dateFormatter = new Intl.DateTimeFormat(undefined, {
        hour: "numeric",
        minute: "numeric"
    });
    const start = new Date(session.startsAt);
    const end = new Date(session.endsAt);

    return <tr>
        <td>{dateFormatter.formatRange(start, end)}</td>
        <td><strong>{session.title}</strong></td>
        <td><SpeakerEnum ids={session.speakers}/></td>
        <td><CategoryEnum itemIds={session.categoryItems} fieldId={FieldIds.Track} /></td>
        <td><CategoryEnum itemIds={session.categoryItems} fieldId={FieldIds.Format} /></td>
        <td><RoomLabel roomId={session.roomId} /></td>
    </tr>;
}
