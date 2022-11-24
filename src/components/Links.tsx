import { Helmet } from 'react-helmet';

const Links = () => {
  return (
    <>
      <Helmet>
        <title>リンク集 | 大阪公立大学空手道部 応援ページ</title>
      </Helmet>
      <h2>Twitter</h2>
      <li>
        <a href="https://twitter.com/omu_karatedo">大阪公立大学のTwitter</a>
      </li>
      <h2>合併前のホームページ</h2>
      <li>
        <a href="http://ocukaratedo.web.fc2.com/">大阪市立大学空手道部</a>
      </li>
      <li>
        <a href="https://opu-karatedo-life.jimdofree.com/">大阪府立大学空手道部</a>
      </li>
      <h2>空手道関連</h2>
      <li>
        <a href="https://www.jkf.ne.jp/">全日本空手道連盟</a>
      </li>
      <li>
        <a href="https://www.jukf.org/">全日本学生空手道連盟</a>
      </li>
    </>
  );
};

export default Links;
