// {
//   "id": 48803,
//   "question": "Pronouns",
//   "questionType": "Short_Text",
//   "sort": 11
// }

export interface Question {
    id: number;
    question: string;
    questionType: string;
    sort: number;
}

export interface QuestionAnswer {
    questionId: number;
    answerValue: string; // probably other things too but we've only got strings here
}