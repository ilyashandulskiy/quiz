import { useContext } from "react"
import newContext from "../../context/newContext"
import { Iquestion } from "../../types"
import CreateQuestion from "./create-quiestion"


const CreateList = () => {

    const { questions } = useContext(newContext)
    
    return (
        <div>
            {questions.map((question : Iquestion, index: number) => <CreateQuestion key={question.id} index={index} />)}
        </div>
    )

    
}

export default CreateList