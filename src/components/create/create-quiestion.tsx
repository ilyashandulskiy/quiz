import React, { useContext } from 'react';
import CreateOptionList from './create-option-list';

import newContext from '../../context/newContext';
import Input from '../UI/input';

interface Iprops {
    index: number
}

function CreateQuestion({ index }: Iprops) {
  const { questions, setQuestions } = useContext(newContext);

  const onChange = (value: string) => {
    const newQuestions = [...questions];

    newQuestions[index].title = value;
    setQuestions(newQuestions);
  };

  return (
    <div className="card">
      <Input callback={onChange} placeholder="Введите вопрос" />
      <CreateOptionList questionIndex={index} />
    </div>
  );
}

export default CreateQuestion;
