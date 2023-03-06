import React from "react";
import { Session } from "../models/session";
import { SessionHeader, SessionRow } from "./SessionRow";

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
