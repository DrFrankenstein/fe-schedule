import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";

import { createQueryClient } from "./queries/query-client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { EventContext } from "./context/EventContext";
import { SessionsSchedule } from "./pages/SessionsSchedule";
import { ServicesSchedule } from "./pages/ServicesSchedule";
import { Speakers } from "./pages/Speakers";

const queryClient = createQueryClient();

export const App: React.FC = () =>
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <EventContext.Provider value="">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="sessions" element={<SessionsSchedule/>} />
                        <Route path="services" element={<ServicesSchedule/>} />
                        <Route path="speakers" element={<Speakers/>} />
                    </Route>
                </Routes>
            </EventContext.Provider>
        </QueryClientProvider>
    </BrowserRouter>;
