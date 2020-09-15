import { useEffect, useState } from 'react';

export const useIsLagerThanTablet = (cb) => {
  const [isMobile, setIsMobile] = useState(false);
  const handler = (e) => {
    if (e.matches) {
      cb && cb();
      setIsMobile(true);
    } else setIsMobile(false);
  };

  useEffect(() => {
    let mql = window.matchMedia('(max-width: 768px)');
    mql.addEventListener('change', handler);
    return () => {
      mql.removeEventListener('change', handler);
    };
  }, []);

  return isMobile;
};
