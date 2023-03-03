// {
//     "webSiteUrl": "https://furnalequinox.com/",
//     "announcements": [],
//     "links": [],
//     "error": null,
//     "timezone": "Eastern Standard Time",
//     "socialLinks": {
//       "twitter": "https://twitter.com/furnalequinox",
//       "facebook": "https://www.facebook.com/FurnalEquinox/"
//     },
//     "ratings": null
//   }

export interface EventData {
    webSiteUrl: string;
    announcements: string[]; // probably
    links: string[]; // probably
    error: {} | null; // idk
    timezone: string;
    socialLinks: SocialLinks;
    ratings: {} | null; // idk either
}

export interface SocialLinks {
    twitter: string;
    facebook: string;
    // maybe more
}