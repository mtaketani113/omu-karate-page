import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * パス変更時にスクロール位置をトップに戻すためダミーJSX
 *
 * @returns null
 */
const ScrollTopForPathChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollTopForPathChange;
