import { useSchedule } from "./schedule";

export const useSpeaker = (domain: string, id: string) => {
    const scheduleQuery = useSchedule(domain);
    const speaker = scheduleQuery.data?.speakers.find(
        spk => spk.id === id
    );

    return { ...scheduleQuery, speaker };
}
