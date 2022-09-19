import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const useOriginPath = () => {
  const {pathname} = useLocation();
  const originPath = useRef(pathname);
  useEffect(() => {
    if (originPath.current !== '') return;
    originPath.current = pathname;
  }, [pathname]);
  return originPath.current
}
