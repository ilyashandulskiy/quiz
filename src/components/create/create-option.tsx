import React, { useContext } from 'react';

import newContext from '../../context/newContext';
import CheckBox from '../UI/checkbox';
import Input from '../UI/input';

interface Iprops {
    optionIndex: number,
    questionIndex: number
}

function CreateOption({ optionIndex, questionIndex }: Iprops) {
  const { questions, setQuestions } = useContext(newContext);

  const onLabelChange = (value: string) => {
    const newQuestions = [...questions];

    newQuestions[questionIndex].options[optionIndex].label = value;
    setQuestions(newQuestions);
  };

  const onCorrectChange = (value: boolean) => {
    const newQuestions = [...questions];

    newQuestions[questionIndex].options[optionIndex].correct = value;
    setQuestions(newQuestions);
  };

  return (
    <div>
      <Input callback={onLabelChange} placeholder="Введите вариант ответа" />
      <CheckBox callback={onCorrectChange} title="Правильный ответ" />
    </div>
  );
}

export default CreateOption;
