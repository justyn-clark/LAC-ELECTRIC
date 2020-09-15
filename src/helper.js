import { css } from 'styled-components';
import { breakpoints } from './_variables';

export const respondTo = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {},
);

export const fetchAllImageContent = (arr, item, name) => {
  return arr.edges.find(
    (element) => element.node.fluid.originalName === item[name],
  );
};

export const debounce = (fn, ms) => {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
};
