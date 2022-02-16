import { useContext } from "react"
import quizContext from "../../context/quizContext"
import Button from "../UI/button"
import { useNavigate } from "react-router-dom"

const Result = () => {

    const navigate = useNavigate()

    const { quiz, score, setScore, setStep } = useContext(quizContext)

    const result = !quiz ? 0 : Math.round((score / quiz.questions.length) * 100)
    
    const onRestart = () => {
        setScore(0);
        setStep(0)
    }

    return (
        <div className="screen">
            {!quiz ? null :
                <div className="screen">
                    <h4 className="result-label">Ваш результат:</h4>
                    <p className="display-2 result-text">{result}%</p>
                    <Button outline title="Пройти еще раз" callback={onRestart} />
                    <Button large title="Вернуться на главную" callback={() => navigate('/')} />
                </div>
            }
        </div>
    )

}

export default Result