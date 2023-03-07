import { useSchedule } from "./schedule"

export const useRoom = (domain: string, id: number) => {
    const scheduleQuery = useSchedule(domain);
    const room = scheduleQuery.data?.rooms
        .find(r => r.id === id);

    return { ...scheduleQuery, room };
}
