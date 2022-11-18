import { useEffect } from 'react';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    adsbygoogle: any;
  }
}

export const AdsDisplay = () => {
  //in-feedを例にしたためAdsInFeedとしています。
  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  }, []);
  return (
    <ins
      className={'adsbygoogle'} //''はバッククォートに置き換えてください。$直後のスペースは不要です。
      style={{ display: 'block' }}
      data-ad-client="ca-pub-7157586794981334"
      data-ad-slot="7436630218"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};
