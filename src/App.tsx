import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import { HomePage } from 'pages';
import { Button, Checkbox, FlexBox, Icon, Input, useModal } from 'components';
import { ArrowLeftSimple, ArrowUp, Check } from 'icons';

const AboutPage = lazy(() => import(/* webpackChunkName: "AboutPage" */ './pages/AboutPage'));

const App = (): JSX.Element => {
  const { Modal: TestModal, open } = useModal({ id: 'test-modal' });

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
          <Icon icon={Check} />
          <Icon icon={ArrowUp} color="secondary" />
          <Icon icon={ArrowLeftSimple} color="primary" />
        </FlexBox>

        <FlexBox>
          <Checkbox id="test-checkbox1">선택해 주세요.</Checkbox>
          <Checkbox id="test-checkbox2">
            <a href="#">약관</a>을 읽고 선택해 주세요.
          </Checkbox>
        </FlexBox>

        <FlexBox>
          <Button size="lg" onClick={open}>
            모달을 만들었어요
          </Button>
        </FlexBox>

        <TestModal slideDirection="center" hasCloseButton>
          <>
            <h2>제목을 써요</h2>
            <p>모달 내용을 써요.</p>
          </>
        </TestModal>

        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/about'} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
