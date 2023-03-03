import { useQuery } from "@tanstack/react-query/build/lib/useQuery";
import type { EventData } from "../models/eventdata";

export const useEventData = () => useQuery<EventData>(["data"]);
