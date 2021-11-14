import { css } from '@emotion/react';

export const GLOBAL_STYLE = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    letter-spacing: -0.03rem;
    outline-color: #000;
    font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', Pretendard, Roboto, 'Noto Sans KR',
      'Segoe UI', 'Malgun Gothic', sans-serif;
    font-size: 14px;
  }

  html,
  body {
    height: 100%;
    cursor: default;
  }
  main {
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    &:link,
    &:visited,
    &:hover,
    &:active,
    &:focus {
      text-decoration: none;
      color: inherit;
    }
  }

  h2 {
    padding: 20px 0;

    font-size: 18px;
    font-weight: 600;
    line-height: 1.1rem;
    text-align: center;
    letter-spacing: -0.1rem;
  }

  ul,
  ol {
    list-style-type: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
    &:disabled {
      cursor: default;
    }
  }

  textarea {
    width: 100%;
    height: 100%;
    padding: 16px;

    border-radius: 6px;
    border: 1px solid #ccc;
    white-space: normal;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    resize: none;
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
    background-color: transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;
