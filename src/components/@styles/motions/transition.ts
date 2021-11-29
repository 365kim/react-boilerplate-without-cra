import { css, keyframes } from '@emotion/react';

export const SHOW = css`
  visibility: visible;
`;

export const HIDE = css`
  visibility: hidden;
`;

const fadeInKeyFrames = `
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
export const FADE_IN = css`
  @-webkit-keyframes fadeIn {
    ${fadeInKeyFrames}
  }
  @-moz-keyframes fadeIn {
    ${fadeInKeyFrames}
  }
  @-o-keyframes fadeIn {
    ${fadeInKeyFrames}
  }
  @keyframes fadeIn {
    ${fadeInKeyFrames}
  }
  opacity: 1;
  -webkit-animation: fadeIn 300ms; /* Safari 4+ */
  -moz-animation: fadeIn 300ms; /* Fx 5+ */
  -o-animation: fadeIn 300ms; /* Opera 12+ */
  animation: fadeIn 300ms; /* IE 10+, Fx 29+ */
`;

const fadeOutKeyFrames = `
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
export const FADE_OUT = css`
  @-webkit-keyframes fadeOut {
    ${fadeOutKeyFrames}
  }
  @-moz-keyframes fadeOut {
    ${fadeOutKeyFrames}
  }
  @-o-keyframes fadeOut {
    ${fadeOutKeyFrames}
  }
  @keyframes fadeOut {
    ${fadeOutKeyFrames}
  }
  opacity: 0;
  -webkit-animation: fadeOut 300ms; /* Safari 4+ */
  -moz-animation: fadeOut 300ms; /* Fx 5+ */
  -o-animation: fadeOut 300ms; /* Opera 12+ */
  animation: fadeOut 300ms; /* IE 10+, Fx 29+ */
`;

const topSlideInKeyFrames = `
  0% {
    transform: translateY(-300%);
  }
  100% {
    transform: translateY(0);
  }
`;
export const TOP_SLIDE_IN = css`
  @-webkit-keyframes topSlideIn {
    ${topSlideInKeyFrames}
  }
  @-moz-keyframes topSlideIn {
    ${topSlideInKeyFrames}
  }
  @-o-keyframes topSlideIn {
    ${topSlideInKeyFrames}
  }
  @keyframes topSlideIn {
    ${topSlideInKeyFrames}
  }
  -webkit-animation: topSlideIn 300ms; /* Safari 4+ */
  -moz-animation: topSlideIn 300ms; /* Fx 5+ */
  -o-animation: topSlideIn 300ms; /* Opera 12+ */
  animation: topSlideIn 300ms; /* IE 10+, Fx 29+ */
`;

const topSlideOutKeyFrames = `
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-300%);
  }
`;
export const TOP_SLIDE_OUT = css`
  @-webkit-keyframes topSlideOut {
    ${topSlideOutKeyFrames}
  }
  @-moz-keyframes topSlideOut {
    ${topSlideOutKeyFrames}
  }
  @-o-keyframes topSlideOut {
    ${topSlideOutKeyFrames}
  }
  @keyframes topSlideOut {
    ${topSlideOutKeyFrames}
  }
  -webkit-animation: topSlideOut 300ms; /* Safari 4+ */
  -moz-animation: topSlideOut 300ms; /* Fx 5+ */
  -o-animation: topSlideOut 300ms; /* Opera 12+ */
  animation: topSlideOut 300ms; /* IE 10+, Fx 29+ */
`;

const bottomSlideInKeyFrames = `
  0% {
    transform: translateY(+300%);
  }
  100% {
    transform: translateY(0);
  }
`;
export const BOTTOM_SLIDE_IN = css`
  @-webkit-keyframes bottomSlideIn {
    ${bottomSlideInKeyFrames}
  }
  @-moz-keyframes bottomSlideIn {
    ${bottomSlideInKeyFrames}
  }
  @-o-keyframes bottomSlideIn {
    ${bottomSlideInKeyFrames}
  }
  @keyframes bottomSlideIn {
    ${bottomSlideInKeyFrames}
  }
  -webkit-animation: bottomSlideIn 300ms; /* Safari 4+ */
  -moz-animation: bottomSlideIn 300ms; /* Fx 5+ */
  -o-animation: bottomSlideIn 300ms; /* Opera 12+ */
  animation: bottomSlideIn 300ms; /* IE 10+, Fx 29+ */
`;

const bottomSlideOutKeyFrames = `
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(+300%);
  }
`;
export const BOTTOM_SLIDE_OUT = css`
  @-webkit-keyframes bottomSlideOut {
    ${bottomSlideOutKeyFrames}
  }
  @-moz-keyframes bottomSlideOut {
    ${bottomSlideOutKeyFrames}
  }
  @-o-keyframes bottomSlideOut {
    ${bottomSlideOutKeyFrames}
  }
  @keyframes bottomSlideOut {
    ${bottomSlideOutKeyFrames}
  }
  -webkit-animation: bottomSlideOut 300ms; /* Safari 4+ */
  -moz-animation: bottomSlideOut 300ms; /* Fx 5+ */
  -o-animation: bottomSlideOut 300ms; /* Opera 12+ */
  animation: bottomSlideOut 300ms; /* IE 10+, Fx 29+ */
`;

const leftSlideInKeyFrames = `
  0% {
    transform: translateX(-300%);
  }
  100% {
    transform: translateX(0);
  }
`;
export const LEFT_SLIDE_IN = css`
  @-webkit-keyframes leftSlideIn {
    ${leftSlideInKeyFrames}
  }
  @-moz-keyframes leftSlideIn {
    ${leftSlideInKeyFrames}
  }
  @-o-keyframes leftSlideIn {
    ${leftSlideInKeyFrames}
  }
  @keyframes leftSlideIn {
    ${leftSlideInKeyFrames}
  }
  -webkit-animation: leftSlideIn 300ms; /* Safari 4+ */
  -moz-animation: leftSlideIn 300ms; /* Fx 5+ */
  -o-animation: leftSlideIn 300ms; /* Opera 12+ */
  animation: leftSlideIn 300ms; /* IE 10+, Fx 29+ */
`;

const leftSlideOutKeyFrames = `
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-300%);
  }
`;
export const LEFT_SLIDE_OUT = css`
  @-webkit-keyframes leftSlideOut {
    ${leftSlideOutKeyFrames}
  }
  @-moz-keyframes leftSlideOut {
    ${leftSlideOutKeyFrames}
  }
  @-o-keyframes leftSlideOut {
    ${leftSlideOutKeyFrames}
  }
  @keyframes leftSlideOut {
    ${leftSlideOutKeyFrames}
  }
  -webkit-animation: leftSlideOut 300ms; /* Safari 4+ */
  -moz-animation: leftSlideOut 300ms; /* Fx 5+ */
  -o-animation: leftSlideOut 300ms; /* Opera 12+ */
  animation: leftSlideOut 300ms; /* IE 10+, Fx 29+ */
`;

const rightSlideInKeyFrames = `
  0% {
    transform: translateX(+300%);
  }
  100% {
    transform: translateX(0);
  }
`;
export const RIGHT_SLIDE_IN = css`
  @-webkit-keyframes rightSlideIn {
    ${rightSlideInKeyFrames}
  }
  @-moz-keyframes rightSlideIn {
    ${rightSlideInKeyFrames}
  }
  @-o-keyframes rightSlideIn {
    ${rightSlideInKeyFrames}
  }
  @keyframes rightSlideIn {
    ${rightSlideInKeyFrames}
  }
  -webkit-animation: rightSlideIn 300ms; /* Safari 4+ */
  -moz-animation: rightSlideIn 300ms; /* Fx 5+ */
  -o-animation: rightSlideIn 300ms; /* Opera 12+ */
  animation: rightSlideIn 300ms; /* IE 10+, Fx 29+ */
`;

const rightSlideOutKeyFrames = `
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(+300%);
  }
`;
export const RIGHT_SLIDE_OUT = css`
  @-webkit-keyframes rightSlideOut {
    ${rightSlideOutKeyFrames}
  }
  @-moz-keyframes rightSlideOut {
    ${rightSlideOutKeyFrames}
  }
  @-o-keyframes rightSlideOut {
    ${rightSlideOutKeyFrames}
  }
  @keyframes rightSlideOut {
    ${rightSlideOutKeyFrames}
  }
  -webkit-animation: rightSlideOut 300ms; /* Safari 4+ */
  -moz-animation: rightSlideOut 300ms; /* Fx 5+ */
  -o-animation: rightSlideOut 300ms; /* Opera 12+ */
  animation: rightSlideOut 300ms; /* IE 10+, Fx 29+ */
`;

const scaleInKeyFrames = `
  0% {
    transform: scale(0.95);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;
export const SCALE_IN = css`
  @-webkit-keyframes scaleIn {
    ${scaleInKeyFrames}
  }
  @-moz-keyframes scaleIn {
    ${scaleInKeyFrames}
  }
  @-o-keyframes scaleIn {
    ${scaleInKeyFrames}
  }
  @keyframes scaleIn {
    ${scaleInKeyFrames}
  }
  -webkit-animation: scaleIn 250ms ease-out; /* Safari 4+ */
  -moz-animation: scaleIn 250ms ease-out; /* Fx 5+ */
  -o-animation: scaleIn 250ms ease-out; /* Opera 12+ */
  animation: scaleIn 250ms ease-out; /* IE 10+, Fx 29+ */
`;
