import React from 'react';
import { useNavigate } from 'react-router';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main>
      <div>Hello, world.</div>
      <button onClick={() => navigate(-1)}>To back</button>
    </main>
  );
};

export default HomePage;
