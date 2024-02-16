import { useQuery } from "@tanstack/react-query";
import type { EventData } from "../models/eventdata";

export const useEventData = (domain: string) => useQuery<EventData>({ queryKey: [domain, "data"] });
