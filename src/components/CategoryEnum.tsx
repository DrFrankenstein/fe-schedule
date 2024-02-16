import React, { Fragment, useContext } from "react";
import { EventContext } from "../context/EventContext";
import { useCategories } from "../queries/category";
import { CategoryLabel } from "./CategoryLabel";

export interface CategoryEnumProps {
    fieldId?: number;
    itemIds: number[];
}

type Part = ReturnType<typeof Intl.ListFormat.prototype.formatToParts>[number]

function renderPart(part: Part, idx: number) {
    switch (part.type) {
        case "element": 
            return <CategoryLabel itemId={Number.parseInt(part.value)} key={part.value} />;
        case "literal":
            return <Fragment key={idx}>{part.value}</Fragment>;
    }
}

export const CategoryEnum: React.FC<CategoryEnumProps> = props => {
    const domain = useContext(EventContext);
    const categoriesQuery = useCategories(domain, props.itemIds, props.fieldId);
    const categories = categoriesQuery.categories ?? [];

    if (categoriesQuery.isPending) {
        return <>Loading&hellip;</>;
    }

    if (categoriesQuery.isError) {
        return <>(failed to load)</>;
    }

    const listFormatter = new Intl.ListFormat();
    const parts = listFormatter.formatToParts(categories.map(cat => cat.id.toString()));

    return <>{parts.map(renderPart)}</>;
}
