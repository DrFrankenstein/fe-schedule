import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { createQueryClient } from "./queries/query-client";

const queryClient = createQueryClient("furnal-equinox-2023-tales-from-the-taver");

export const App: React.FC = () =>
    <QueryClientProvider client={queryClient}>
        Hello, World!
    </QueryClientProvider>;
