import React, { useContext } from 'react';

import quizContext from '../../context/quizContext';
import Button from '../UI/button';

interface Iprops {
    label: string,
    correct: boolean
}

function Option({ label, correct }: Iprops) {
  const {
    score,
    setScore,
    step,
    setStep,
  } = useContext(quizContext);

  const onAnswer = (): void => {
    if (correct) setScore(score + 1);
    setStep(step + 1);
  };

  return (
    <Button
      large
      title={label}
      callback={onAnswer}
      outline
    />
  );
}

export default Option;
