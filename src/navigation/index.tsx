import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomeScreen from '../screens/home-screen';
import CreateScreen from '../screens/create-screen';
import QuizScreen from '../screens/quiz-screen';

function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/create" element={<CreateScreen />} />
      <Route path="/quiz/:id" element={<QuizScreen />} />
      <Route path="/*" element={<HomeScreen />} />
    </Routes>
  );
}

export default Navigation;
