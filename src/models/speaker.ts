// {
//   "id": "68425d01-720b-47e8-9eb6-d4d178210ec8",
//   "firstName": "",
//   "lastName": "",
//   "bio": "Performer, Masquerade Host, Artistan, and Co-Chair of CanFURence. \r\n\r\nJust a fun loving Tiger who enjoys showcasing the talent the amazing fandom has, and giving back to the community. In my down time I create chainmaille jewrly and art, play Videogames, and collect coins. ",
//   "tagLine": "Masquerade Host - Fursuit Performer.",
//   "profilePicture": "https://sessionize.com/image/de88-400o400o2-c4149eba-9988-44a2-9df4-856faf01c3b2.jpg",
//   "isTopSpeaker": false,
//   "links": [
//     {
//       "title": "Twitter",
//       "url": "http://twitter.com/BT_ARMISTICE",
//       "linkType": "Twitter"
//     }
//   ],
//   "sessions": [
//     436395,
//     436393
//   ],
//   "fullName": "BT",
//   "categoryItems": [],
//   "questionAnswers": []
// }

import { QuestionAnswer } from "./question";

export interface Speaker {
    id: string;
    firstName: string;
    lastName: string;
    fullName: string;
    bio: string;
    tagLine: string;
    profilePicture: string;
    isTopSpeaker: boolean;
    links: SpeakerLink[];
    sessions: number[];
    categoryItems: unknown[];
    questionAnswers: QuestionAnswer[];
}

export interface SpeakerLink {
    title: string;
    url: string;
    linkType: string;
}
