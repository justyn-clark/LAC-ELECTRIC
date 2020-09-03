import { useEffect } from 'react';

export const useIsLagerThanTablet = (cb) => {
  const handler = (e) => {
    if (e.matches) cb();
  };

  useEffect(() => {
    let mql = window.matchMedia('(min-width: 768px)');
    mql.addEventListener('change', handler);
    return () => {
      mql.removeEventListener('change', handler);
    };
  });
};
