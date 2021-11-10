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
          <Button color="gradient" shape="pill">
            <Link to="">Home</Link>
          </Button>
          <Button>
            <Link to="about">About</Link>
          </Button>
          <Button color="secondary" shape="square">
            <Link to="about">About</Link>
          </Button>
          <Input label="이름" />
          <Input label="이름" isSuccess />
          <Input label="이름" isError />
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
