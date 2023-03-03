import type { CategoryField } from "./category";
import type { Room } from "./room";
import type { Session } from "./session";
import type { Speaker } from "./speaker";

export interface Schedule {
    sessions: Session[];
    categories: CategoryField[];
    speakers: Speaker[];
    rooms: Room[];
}
