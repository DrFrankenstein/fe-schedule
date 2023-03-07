import { useSchedule } from "./schedule"

export const useCategory = (domain: string, id: number) => {
    const scheduleQuery = useSchedule(domain);
    const category = scheduleQuery.data?.categories.find(
        cat => cat.id === id
    );

    return { ...scheduleQuery, category };
}
