import React from "react";
import { Session } from "../models/session";

export interface SessionRowProps {
    session: Session;
}

export const SessionHeader: React.FC = props => <thead>
    <tr>
        <th>Start</th>
        <th>End</th>
        <th>Title</th>
    </tr>
</thead>;

export const SessionRow: React.FC<SessionRowProps> = props => {
    const { session } = props;

    return <tr>
        <td>{session.startsAt}</td>
        <td>{session.endsAt}</td>
        <td>{session.title}</td>
    </tr>;
}
