import { useContext } from "react"
import { Ioption } from "../../types"
import quizContext from "../../context/quizContext"
import Option from "./option"

const Options = () => {

    const { step, quiz } = useContext(quizContext)
    
    const question = quiz?.questions[step];

    const content = quiz && question ?
        <div className="options">
            {question.options.map((option: Ioption) => 
                <Option key={option.id} label={option.label} correct={option.correct} />
            )}
        </div> : null

    return content

}

export default Options