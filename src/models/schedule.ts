import type { CategoryField } from "./category";
import type { Room } from "./room";
import type { Session } from "./session";

export interface Schedule {
    sessions: Session[];
    categories: CategoryField[];
    rooms: Room[];
}