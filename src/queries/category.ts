import { useMemo } from "react";
import { CategoryField } from "../models/category";
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

function getCategoryItems(categoryFields: CategoryField[] | undefined, itemIds: number[], fieldId?: number) {
    const allCategories = fieldId === undefined?
        categoryFields?.flatMap(field => field.items) :
        categoryFields?.find(field => field.id === fieldId)?.items;

    return allCategories?.filter(cat => itemIds.includes(cat.id));
}

export const useCategories = (domain: string, itemIds: number[], fieldId?: number) => {
    const scheduleQuery = useSchedule(domain);
    const categories = useMemo(() =>
        getCategoryItems(scheduleQuery.data?.categories, itemIds, fieldId),
        [scheduleQuery.data, itemIds, fieldId]
    );

    return { ...scheduleQuery, categories };
}
