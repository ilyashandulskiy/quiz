import CreateOptionList from "./create-option-list"
import { useContext } from 'react';
import newContext from '../../context/newContext'
import Input from "../UI/input";

interface Iprops {
    index: number
}

const CreateQuestion = ({ index }: Iprops) => {

    const {questions, setQuestions} = useContext(newContext);
    
    const onChange = (value: string) => {
        const newQuestions = [...questions]

        newQuestions[index].title = value;
        setQuestions(newQuestions)

    }

    return (
        <div className="card">
            <Input callback={onChange} placeholder="Введите вопрос" />
            <CreateOptionList questionIndex={index} />
        </div>
    )

}

export default CreateQuestion