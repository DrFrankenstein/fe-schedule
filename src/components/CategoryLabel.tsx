import React, { useContext } from "react";
import { EventContext } from "../context/EventContext";
import { useCategoryItem } from "../queries/category";

export interface CategoryLabelProps {
    itemId: number;
}

export const CategoryLabel: React.FC<CategoryLabelProps> = props => {
    const domain = useContext(EventContext);
    const categoryQuery = useCategoryItem(domain, props.itemId);
    const category = categoryQuery.categoryItem;

    if (categoryQuery.isPending) {
        return <>&hellip;</>;
    }

    if (categoryQuery.isError || category === undefined) {
        return <>(not found)</>;
    }

    return <>{category.name}</>;
}
