import { useSchedule } from "./schedule"

export const useCategoryField = (domain: string, id: number) => {
    const scheduleQuery = useSchedule(domain);
    const categoryField = scheduleQuery.data?.categories
        .find(field => field.id === id);

    return { ...scheduleQuery, categoryField };
}

export const useCategoryItem = (domain: string, id: number) => {
    const scheduleQuery = useSchedule(domain);
    const categoryItem = scheduleQuery.data?.categories
        .flatMap(field => field.items)
        .find(item => item.id === id);

    return { ...scheduleQuery, categoryItem };
}
