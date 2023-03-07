import React, { useContext } from "react";
import { EventContext } from "../context/EventContext";
import { useCategory } from "../queries/category";

export interface CategoryLabelProps {
    id: number;
}

export const CategoryLabel: React.FC<CategoryLabelProps> = props => {
    const domain = useContext(EventContext);
    const categoryQuery = useCategory(domain, props.id);
    const category = categoryQuery.category;

    if (categoryQuery.isLoading) {
        return <>&hellip;</>;
    }

    if (categoryQuery.isError || category === undefined) {
        return <>(not found)</>;
    }

    return <>{category.title}</>;
}
