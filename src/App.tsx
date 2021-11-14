import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import { HomePage } from 'pages';
import { Button, FlexBox, Icon, Input } from 'components';
import { ArrowLeftSimple, ArrowUp, Check } from 'icons';

const AboutPage = lazy(() => import(/* webpackChunkName: "AboutPage" */ './pages/AboutPage'));

const App = (): JSX.Element => {
  return (
    <Router>
      <Suspense fallback={''}>
        <FlexBox dir="row" gap="20px" mt="150px">
          <Button color="gradient" shape="pill" shine>
            <Link to="">Pill</Link>
          </Button>
          <Button>
            <Link to="about">Default</Link>
          </Button>
          <Button color="secondary" shape="square">
            <Link to="about">Square</Link>
          </Button>
        </FlexBox>
        <FlexBox dir="row" gap="20px" mt="50px">
          <Input label="이름" />
          <Input label="문제없서연" isSuccess />
          <Input label="에러났서연" isError />
        </FlexBox>
        <FlexBox dir="row" gap="20px" mt="50px">
          <Icon icon={Check}></Icon>
          <Icon icon={ArrowUp} color="secondary"></Icon>
          <Icon icon={ArrowLeftSimple} color="primary"></Icon>
        </FlexBox>

        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/about'} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
