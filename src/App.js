import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import { Button, Input } from './styled-system';

const AboutPage = lazy(() =>
  import(/* webpackChunkName: "AboutPage" */ './pages/AboutPage')
);

const App = () => {
  return (
    <Router>
      <Suspense fallback={''}>
        <div>
          <Button>
            <Link to="">Home</Link>
          </Button>
          <Button>
            <Link to="about">About</Link>
          </Button>
          <Input label="이름" />
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
