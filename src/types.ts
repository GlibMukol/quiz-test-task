export type TOnSelectVariant = (quiz: TQuiz, item:number ) => void;
export type TOnNextQuiz = () => void; 
export type TOnHandleDone = () => void;

export type TQuiz = {
    id: number,
    question: string;
    variant: Array<[number, number]>;
    answer: number;
}

export type TAnswers = TQuiz & { checked: number };
