import usePageTracking from './useTracking';

/**
 * Google　Analyticsを導入するためのダミーヘッダー
 *
 * @returns
 */
const DummyHeader = () => {
  usePageTracking();
  return <></>;
};

export default DummyHeader;
