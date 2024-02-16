import React, { useContext } from "react";
import { SessionTable } from "../components/SessionTable";
import { EventContext } from "../context/EventContext";
import { useServices } from "../queries/schedule";

export const ServicesSchedule: React.FC = () => {
    const domain = useContext(EventContext);
    const servicesQuery = useServices(domain);
    const services = servicesQuery.services;

    if (servicesQuery.isPending) {
        return <div>Loading&hellip;</div>;
    }

    if (servicesQuery.isError || services === undefined) {
        return <div>oh no :(</div>;
    }

    return <>
        <h1>Services:</h1>
        <SessionTable sessions={services} />
    </>;
};
