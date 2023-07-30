import './App.css';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Inquiry,
  Links,
  Member,
  Place,
  PrivacyPolicy,
  Schedule,
  TrainingMenu,
  GalleryLinks,
  Karatedo,
  PrefectureObList,
} from './components/index';

const MainPageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* ホーム */}
      <Route path="/member" element={<Member />} /> {/* 部員紹介 */}
      <Route path="/schedule" element={<Schedule />} /> {/* 練習予定 */}
      <Route path="/place" element={<Place />} /> {/* 練習場所・時間 */}
      <Route path="/links" element={<Links />} /> {/* リンク集 */}
      <Route path="/inquiry" element={<Inquiry />} />
      {/* お問い合わせ */}
      <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
      {/* プライバシーポリシー */}
      <Route path="/trainingMenu/:date" element={<TrainingMenu />} />
      {/* 練習メニュー */}
      <Route path="/galleryLinks" element={<GalleryLinks />} />
      {/* 練習メニュー・風景 */}
      <Route path="/karatedo" element={<Karatedo />} />
      {/* 空手道部紹介 */}
      <Route path="/prefectureObList" element={<PrefectureObList />} />
      {/* 空手道部紹介 */}
      <Route path="/*" element={<Home />} />
      {/* その他のURLはHomeを遷移 */}
    </Routes>
  );
};

export default MainPageRoutes;
