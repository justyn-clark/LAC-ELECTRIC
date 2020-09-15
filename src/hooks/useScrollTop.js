import { useEffect, useState } from 'react';

export default () => {
  const [isScrollTop, setIsScrollTop] = useState(false);
  const handleToggleScrollTop = () => {
    window.pageYOffset > 1500 ? setIsScrollTop(true) : setIsScrollTop(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleToggleScrollTop);
    return () => {
      window.removeEventListener('scroll', handleToggleScrollTop);
    };
  });

  return isScrollTop;
};
