import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import quizContext from '../../context/quizContext';
import Button from '../UI/button';
import { countPercent } from '../../libs/helpers';

function Result() {
  const navigate = useNavigate();

  const {
    quiz,
    score,
    setScore,
    setStep,
  } = useContext(quizContext);

  const result = !quiz ? null : countPercent(score, quiz.questions.length);

  const onRestart = () => {
    setScore(0);
    setStep(0);
  };

  const content = !quiz ? null : (
    <div className="screen">
      <h4 className="result-label">Ваш результат:</h4>
      <p className="display-2 result-text">{result}</p>

      <Button
        outline
        title="Пройти еще раз"
        callback={onRestart}
      />
      <Button
        large
        title="Вернуться на главную"
        callback={() => navigate('/')}
      />
    </div>
  );

  return (
    <div className="screen">
      {content}
    </div>
  );
}

export default Result;
