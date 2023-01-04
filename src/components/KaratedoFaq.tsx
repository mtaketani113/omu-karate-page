const KaratedoFaq = () => {
  const answerStyle = {
    paddingLeft: '1em',
    textIndent: '-1em',
    paddingBottom: '1em',
  };
  return (
    <>
      <h4>Q.学業やアルバイトとの両立は可能でしょうか？</h4>
      <div style={answerStyle}>
        A.学生ですので学業が最優先です。稽古は、現在、週に2・3回、
        テスト期間中は稽古も休みで、現役部員もアルバイトと両立しています。
        もちろん、もっと空手をもっとやりたい方は師範、監督、OBでサポートします。
      </div>
      <h4>Q.始めるのにどれくらいかかる？</h4>
      <div style={answerStyle}>
        A.始めるための道着は共用のものやOB会がサポートしていただけるのでお金はかかりません。
      </div>
    </>
  );
};

export default KaratedoFaq;
