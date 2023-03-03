// {
//   "id": 48801,
//   "title": "Session format",
//   "items": [
//     {
//       "id": 166555,
//       "name": "Workshop",
//       "sort": 1
//     },
//     {
//       "id": 166556,
//       "name": "Panel",
//       "sort": 2
//     },
//     {
//       "id": 166557,
//       "name": "Social",
//       "sort": 3
//     },
//     {
//       "id": 166558,
//       "name": "Performance",
//       "sort": 4
//     }
//   ],
//   "sort": 0,
//   "type": "session"

export interface CategoryField {
    id: number;
    title: string;
    items: CategoryItem[];
    sort: number;
    type: string;
}

export interface CategoryItem {
    id: number;
    name: string;
    sort: number;
}