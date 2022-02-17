import React, { useContext } from 'react';

import quizContext from '../../context/quizContext';
import Options from './options';

function Question() {
  const { quiz, step, setStep } = useContext(quizContext);

  const content = !quiz ? null : (
    <div>
      <h2>{quiz.questions[step].title}</h2>
      <Options />
    </div>
  );

  return (
    <div className="question">
      {content}
    </div>
  );
}

export default Question;
