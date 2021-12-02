import { css } from '@emotion/react';

const ABSOLUTE = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

// export const buttonCover = css`
// ${ABSOLUTE}
//     height: 100px;
//     margin: 20px;
//     background-color: #fff;
//     box-shadow: 0 10px 20px -8px #c5d6d6;
//     border-radius: 4px;

//     &::before
//     {
//         counter-increment: button-counter;
//         content: counter(button-counter);
//         position: absolute;
//         right: 0;
//         bottom: 0;
//         color: #d7e3e3;
//         font-size: 12px;
//         line-height: 1;
//         padding: 5px;
//     }
//     `

export const button = css`
  position: relative;
  top: 50%;
  width: 74px;
  height: 36px;
  margin: -20px auto 0 auto;
  overflow: hidden;
  border-radius: 100px;
`;

export const input = css`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
`;

export const knobs = css`
  ${ABSOLUTE}
  z-index: 2;
  &::before {
    content: 'YES';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 10px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    background-color: #03a9f4;
    border-radius: 50%;
    transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
  }
`;

export const knobsChecked = css`
  &::before {
    content: 'NO';
    left: 42px;
    background-color: #f44336;
  }
`;

export const container = css`
  ${ABSOLUTE}
  width: 100%;
  background-color: #ebf7fc;
  transition: 0.3s ease all;
  z-index: 1;
  border-radius: 100px;
`;

export const containerChecked = css`
  background-color: #fcebeb;
`;

// #button-3 .checkbox:active + .knobs:before
// {
//     width: 46px;
//     border-radius: 100px;
// }

// #button-3 .checkbox:checked:active + .knobs:before
// {
//     margin-left: -26px;
// }
