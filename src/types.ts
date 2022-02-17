export interface Iquiz {
    title: string,
    questions: Iquestion[]
}

export interface Iquestion {
    title: string,
    options: Ioption[],
    id: string,
}

export interface Ioption {
    label: string,
    correct: boolean,
    id: string
}

export interface IquizContext {
    quiz: Iquiz | undefined,
    step: number,
    setStep: (step: number) => void,
    score: number,
    setScore: (score: number) => void
}

export interface InewContext {
    questions: Iquestion[],
    setQuestions: (questions: Iquestion[]) => void
}
