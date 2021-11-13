import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';

import App from './App';
import { GLOBAL_STYLE } from './styledSystem';

ReactDOM.render(
  <>
    <Global styles={GLOBAL_STYLE} />
    <App />
  </>,
  document.getElementById('root')
);
