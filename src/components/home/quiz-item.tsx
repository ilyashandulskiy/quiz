import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/button';

interface Iprops {
    title: string,
    length: number,
    id: string
}

function QuizItem({ title, length, id }: Iprops) {
  const path = `/quiz/${id}`;
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {length}
          {' '}
          вопросов
        </p>
        <Button title="Пройти тест" outline callback={() => navigate(path)} />
      </div>
    </div>
  );
}

export default QuizItem;
