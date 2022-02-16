import { Iquestion } from "../../types";
import { useContext } from 'react'
import quizContext from '../../context/quizContext'
import Options from "./options";

const Question = () => {
    
    const {quiz, step, setStep} = useContext(quizContext);

    return (
        <div className="question">
            {!quiz ? null :
                <div>
                    <h2>{quiz.questions[step].title}</h2>
                    <Options />
                </div>
            }
        </div>
    )

}

export default Question