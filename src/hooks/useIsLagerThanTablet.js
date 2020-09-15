import { useEffect, useState } from 'react';
import { debounce } from '../helper';

export const useIsLagerThanTablet = (cb) => {
  const [isLagerThanTablet, setIsLagerThanTablet] = useState(false);
  const handler = debounce(() => {
    if (window.innerWidth > 768) {
      cb();
      setIsLagerThanTablet(true);
    }
  }, 60);
  useEffect(() => {
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return isLagerThanTablet;
};
