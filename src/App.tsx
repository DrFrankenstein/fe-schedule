import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";

import { createQueryClient } from "./queries/query-client";
import { FutureConfig, HashRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { EventContext } from "./context/EventContext";
import { SessionsSchedule } from "./pages/SessionsSchedule";
import { ServicesSchedule } from "./pages/ServicesSchedule";
import { Speakers } from "./pages/Speakers";
import { Speaker } from "./pages/Speaker";

const queryClient = createQueryClient();

let routerFuture: Partial<FutureConfig> = {
    v7_relativeSplatPath: true,
    v7_startTransition: true
};

export const App: React.FC = () =>
    <HashRouter future={routerFuture}>
        <QueryClientProvider client={queryClient}>
            <EventContext.Provider value="">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="sessions" element={<SessionsSchedule/>} />
                        <Route path="services" element={<ServicesSchedule/>} />
                        <Route path="speakers" element={<Speakers/>} />
                        <Route path="speaker/:id" element={<Speaker />} />
                    </Route>
                </Routes>
            </EventContext.Provider>
        </QueryClientProvider>
    </HashRouter>;
