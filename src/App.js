import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';

const AboutPage = lazy(() => import(/* webpackChunkName: "AboutPage" */ './pages/AboutPage'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={''}>
        <div>
          <Link to="" style={{ marginRight: 16 }}>
            Home
          </Link>
          <Link to="about">About</Link>
        </div>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/about'} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
