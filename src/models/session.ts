// {
//   "id": "a163907e-dfc6-4d9c-8319-ef9cc6a090a4",
//   "title": "Quiet Room - Accessibility",
//   "description": null,
//   "startsAt": "2023-03-16T16:00:00",
//   "endsAt": "2023-03-16T23:00:00",
//   "isServiceSession": true,
//   "isPlenumSession": false,
//   "speakers": [],
//   "categoryItems": [],
//   "questionAnswers": [],
//   "roomId": 32452,
//   "liveUrl": null,
//   "recordingUrl": null
// },

// {
//   "id": "436194",
//   "title": "Furnal Kickoff",
//   "description": "The one and only panel you don't want to miss! Talented DJs from all over, are guaranteed to get your tails shaking, with non-stop beats! ",
//   "startsAt": "2023-03-16T22:00:00",
//   "endsAt": "2023-03-17T00:00:00",
//   "isServiceSession": false,
//   "isPlenumSession": false,
//   "speakers": [
//     "f1babb2f-c1fc-4848-a8fc-a9a7687979e1"
//   ],
//   "categoryItems": [
//     166558,
//     166565,
//     167664
//   ],
//   "questionAnswers": [],
//   "roomId": 32043,
//   "liveUrl": null,
//   "recordingUrl": null
// },

export interface Session {
    id: string;
    title: string;
    description: string;
    startsAt: string;
    endsAt: string;
    isServiceSession: boolean;
    isPlenumSession: boolean;
    speakers: string[];
    categoryItems: number[];
    questionAnswers: unknown[]; // idk
    roomId: number;
    liveUrl: string | null;
    recordingUrl: string | null;
}