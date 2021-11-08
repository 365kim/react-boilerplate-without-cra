import React from 'react';
import { useNavigate } from 'react-router';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <main>
      <div>About life.</div>
      <button onClick={() => navigate(-1)}>To back</button>
    </main>
  );
};

export default AboutPage;
