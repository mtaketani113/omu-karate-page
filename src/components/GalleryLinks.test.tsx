import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import GalleryLinks from './GalleryLinks';
import TrainingMenue from './TrainingMenue';

describe('GalleryLinks init', () => {
  it('init', async () => {
    render(
      <BrowserRouter>
        <GalleryLinks />
      </BrowserRouter>,
    );

    expect(screen.getByTestId('open_training_menue0')).toBeInTheDocument();
  });

  it('open training menue', async () => {
    window.matchMedia =
      window.matchMedia ||
      function () {
        return {
          matches: false,
          addListener: function () {},
          removeListener: function () {},
        };
      };
    const route = '/galleryLinks';
    render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="/galleryLinks" element={<GalleryLinks />} />
          <Route path="/trainingMenue/:date" element={<TrainingMenue />} />
        </Routes>
      </MemoryRouter>,
    );

    // 開くボタンを押した場合にトレーニングメニューに遷移すること
    userEvent.click(screen.getByTestId('open_training_menue0'));
    expect(screen.queryByTestId('open_training_menue0')).not.toBeInTheDocument();
    expect(screen.getByTestId('breadcrumbs')).toBeInTheDocument();
    // 最新の練習を開いているため、前へのリンクはあるが次へのリンクはない。
    expect(screen.getByTestId('pre_button')).toBeInTheDocument();
    expect(screen.queryByTestId('next_button')).not.toBeInTheDocument();
  });
});
