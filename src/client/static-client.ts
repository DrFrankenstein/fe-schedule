import * as data from "../data/data.json";
import * as schedule from "../data/schedule.json";

export async function fetchResource<T>(_domain: string, name: string): Promise<T> {
    switch (name) {
        case "data": return data as T;
        case "schedule": return schedule as T;
        default: throw new Error(`unsupported static endpoint ${name}`);
    }
}
