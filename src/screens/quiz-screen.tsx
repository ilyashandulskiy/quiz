import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ScreenTitle from '../components/app/screen-title';
import instance from '../libs/instance';
import { Iquiz, IquizContext } from '../types';
import Question from '../components/quiz/question';
import quizContext from '../context/quizContext';
import Result from '../components/quiz/result';
import ScreenLoader from '../hoc/screen-loader';

interface Idata {
    data: Iquiz
}

function QuizScreen() {
  const [error, setError] = useState<boolean>(false);
  const [quiz, setQuiz] = useState<Iquiz>();
  const [step, setStep] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const { id } = useParams();

  const context: IquizContext = {
    quiz,
    step,
    setStep,
    score,
    setScore,
  };

  useEffect(() => {
    instance.get(`getQuiz?id=${id}`)
      .then((data: Idata) => setQuiz(data.data))
      .catch(() => setError(true));
  }, []);

  const content = quiz ? (
    <div className="screen quiz-screen">
      <quizContext.Provider value={context}>
        <ScreenTitle title={quiz.title} />

        {step >= quiz.questions.length
          ? <Result />
          : <Question />}

      </quizContext.Provider>
    </div>
  ) : null;

  return (
    <ScreenLoader reqired={quiz} isError={error} content={content} />
  );
}

export default QuizScreen;
