import { PAGE_MAIN_TITLE } from "./parts/constants";

const Links = () => {
  return (
    <>
      <title>リンク集 | {PAGE_MAIN_TITLE}</title>
      <h2 data-testid="omu_karate_twitter">Twitter</h2>
      <li>
        <a href="https://twitter.com/omu_karatedo">大阪公立大学のTwitter</a>
      </li>
      <h2>Facebook</h2>
      <li>
        <a href="https://www.facebook.com/%E5%A4%A7%E9%98%AA%E5%B8%82%E7%AB%8B%E5%A4%A7%E5%AD%A6%E7%A9%BA%E6%89%8B%E9%81%93%E9%83%A8-%E7%B7%91%E9%85%92%E4%BC%9A-219030714869828/">
          大阪市立大学空手道部　＋緑酒会
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/people/%E5%A4%A7%E9%98%AA%E5%BA%9C%E7%AB%8B%E5%A4%A7%E5%AD%A6-%E7%A9%BA%E6%89%8B%E9%81%93%E9%83%A8/100069070396872/">
          大阪府立大学空手道部
        </a>
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
