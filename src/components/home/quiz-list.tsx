import React, { useEffect, useState } from 'react';
import instance from '../../libs/instance';

import QuizItem from './quiz-item';
import ScreenLoader from '../../hoc/screen-loader';

type Ilist = Iitem[]

interface Iitem {
    title: string,
    length: number,
    id: string
}

interface Idata {
    data: Ilist
}

function QuizList() {
  const [list, setList] = useState<Ilist>([]);

  useEffect(() => {
    instance.get('getQuizList')
      .then((data: Idata) => setList(data.data));
  }, []);

  const content = list ? (
    <div className="home__cards">

      {list.map((item: Iitem) => (
        <QuizItem
          id={item.id}
          key={item.id}
          title={item.title}
          length={item.length}
        />
      ))}

    </div>
  ) : null;

  return (
    <ScreenLoader content={content} reqired={list.length} />
  );
}

export default QuizList;
