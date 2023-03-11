import { useSchedule } from "./schedule";

export const useSpeakers = (domain: string) => {
    const scheduleQuery = useSchedule(domain);
    const speakers = scheduleQuery.data?.speakers;

    return { ...scheduleQuery, speakers };
}

export const useSpeaker = (domain: string, id: string) => {
    const speakersQuery = useSpeakers(domain);
    const speaker = speakersQuery.speakers?.find(
        spk => spk.id === id
    );

    return { ...speakersQuery, speaker };
}
