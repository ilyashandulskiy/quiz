import { Iquestion, Iquiz } from "../types"


const validateQuiz = (quiz: Iquiz): boolean => {

    if (!quiz.title) return false;
    if (!quiz.questions.length) return false
    
    const questionCheck = quiz.questions.map((question: Iquestion) => {
        if (!question.title) return true
        if (!question.options.length) return true
    })[0]

    if(questionCheck) return false
    
    return true

}

export default validateQuiz