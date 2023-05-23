
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import NotFoundPage from './pages/NotFoundPage';
import React from 'react';

interface AppProps {
  tab: string;
}

function App({ tab }: AppProps) {

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team/:teamId" element={<TeamPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}}

export default App;
