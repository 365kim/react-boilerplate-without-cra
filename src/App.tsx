import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import { HomePage } from 'pages';
import { Button, Icon, Input } from 'styled-system';

const AboutPage = lazy(() => import(/* webpackChunkName: "AboutPage" */ './pages/AboutPage'));

const App = (): JSX.Element => {
  return (
    <Router>
      <Suspense fallback={''}>
        <div>
          <Button color="gradient" shape="pill" shine>
            <Link to="">Pill</Link>
          </Button>
          <Button>
            <Link to="about">Default</Link>
          </Button>
          <Button color="secondary" shape="square">
            <Link to="about">Square</Link>
          </Button>
          <Input label="이름" />
          <Input label="문제없서연" isSuccess />
          <Input label="에러났서연" isError />
          <Icon type="check"></Icon>
          <Icon type="arrowUp" color="secondary"></Icon>
          <Icon type="arrowLeftSimple" color="primary"></Icon>
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
