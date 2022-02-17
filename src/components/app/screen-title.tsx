import React from 'react';

interface Iprops {
    title: string
}

function ScreenTitle({ title } : Iprops) {
  return (
    <h1 className="screen-title display-6">{title}</h1>
  );
}

export default ScreenTitle;
