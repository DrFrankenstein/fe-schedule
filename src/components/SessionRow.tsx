import React from "react";
import { Session } from "../models/session";

export interface SessionRowProps {
    session: Session;
}

export const SessionRow: React.FC<SessionRowProps> = props => {
    const { session } = props;

    return <tr>
        <td>{session.title}</td>
    </tr>;
}
