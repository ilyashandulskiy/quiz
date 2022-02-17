import React from 'react';
import Spinner from '../components/UI/spinner';

interface Iprops {
    reqired: unknown,
    isError?: boolean,
    content: JSX.Element | null
}

function ScreenLoader({ reqired, isError = false, content }: Iprops) {
  if (isError) return <h2>ERROR</h2>;
  if (reqired) return <div className="page">{content}</div>;

  return <Spinner />;
}

export default ScreenLoader;
