import React, { useContext } from 'react';
import CreateOption from './create-option';

import newContext from '../../context/newContext';
import { Ioption } from '../../types';
import Button from '../UI/button';
import { createID } from '../../libs/helpers';

interface Iprops {
    questionIndex: number
}

function CreateOptionList({ questionIndex }: Iprops) {
  const { questions, setQuestions } = useContext(newContext);

  const onNewOption = () => {
    const newQuestions = [...questions];
    const newId = createID();

    newQuestions[questionIndex].options.push({
      label: '',
      correct: false,
      id: newId,
    });

    setQuestions(newQuestions);
  };

  return (
    <div className="card">

      {questions[questionIndex].options.map((option: Ioption, optionIndex: number) => (
        <CreateOption
          key={option.id}
          optionIndex={optionIndex}
          questionIndex={questionIndex}
        />
      ))}

      <Button title="Добавить вариант ответа" outline callback={onNewOption} />
    </div>
  );
}

export default CreateOptionList;
