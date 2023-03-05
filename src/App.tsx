import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";

import { createQueryClient } from "./queries/query-client";
import { EventDetails } from "./components/EventDetails";
import { Schedule } from "./components/Schedule";

const DOMAIN = "furnal-equinox-2023-tales-from-the-taver";

const queryClient = createQueryClient();

export const App: React.FC = () =>
    <QueryClientProvider client={queryClient}>
        <EventDetails domain={DOMAIN} />
        <Schedule domain={DOMAIN} />
    </QueryClientProvider>;
