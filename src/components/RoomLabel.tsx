import React, { useContext } from "react";
import { EventContext } from "../context/EventContext";
import { useRoom } from "../queries/room";

export interface RoomLabelProps {
    roomId: number;
}

export const RoomLabel: React.FC<RoomLabelProps> = props => {
    const domain = useContext(EventContext);
    const roomQuery = useRoom(domain, props.roomId);
    const room = roomQuery.room;

    if (roomQuery.isPending) {
        return <>&hellip;</>;
    }

    if (roomQuery.isError || room === undefined) {
        return <>(not found)</>;
    }

    return <>{room.name}</>;
}
