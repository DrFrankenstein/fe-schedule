import React, { Fragment } from "react";
import { CategoryLabel } from "./CategoryLabel";

export interface CategoryEnumProps {
    ids: number[];
}

type Part = ReturnType<typeof Intl.ListFormat.prototype.formatToParts>[number]

function renderPart(part: Part, idx: number) {
    switch (part.type) {
        case "element": 
            return <CategoryLabel id={Number.parseInt(part.value)} key={part.value} />;
        case "literal":
            return <Fragment key={idx}>{part.value}</Fragment>;
    }
}

export const CategoryEnum: React.FC<CategoryEnumProps> = props => {
    const listFormatter = new Intl.ListFormat();
    const parts = listFormatter.formatToParts(props.ids.map(id => id.toString()));

    return <>{parts.map(renderPart)}</>;
}
