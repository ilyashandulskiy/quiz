import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import ScreenTitle from '../components/app/screen-title';
import instance from '../libs/instance';
import newContext from '../context/newContext';
import CreateList from '../components/create/create-list';
import { Iquestion, InewContext } from '../types';
import Button from '../components/UI/button';
import Input from '../components/UI/input';
import { createID } from '../libs/helpers';
import validateQuiz from '../libs/validateQuiz';

interface Idata {
    data: Iquestion
}

function CreateScreen() {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState<Iquestion[]>([]);
  const [title, setTitle] = useState<string>('Новый тест');

  const context : InewContext = {
    questions,
    setQuestions,
  };

  const onNewQuestion = () => {
    const newQuestions = [...questions];
    const newId = createID();
    newQuestions.push({ title: '', options: [], id: newId });
    setQuestions(newQuestions);
  };

  const onQuizDone = () => {
    const quizData = { title, questions };

    if (validateQuiz(quizData)) {
      instance.post('newQuiz', quizData)
        .then((data : Idata) => navigate(`../quiz/${data.data}`));
    } else {
      alert('Не все поля были заполнены, либо не у каждого вопроса есть вариант ответа');
    }

    console.log(quizData);
  };

  return (
    <div className="screen create-screen">
      <ScreenTitle title="Создать новый тест" />

      <newContext.Provider value={context}>
        <Input
          callback={setTitle}
          placeholder="Название теста"
          defaultValue={title}
        />
        <CreateList />
        <Button
          title="Добавить вопрос"
          outline
          callback={onNewQuestion}
        />
        <Button
          title="Закончить создание теста"
          callback={onQuizDone}
        />
      </newContext.Provider>
    </div>
  );
}

export default CreateScreen;
