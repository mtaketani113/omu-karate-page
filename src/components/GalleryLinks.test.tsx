import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import GalleryLinks from './GalleryLinks';
import TrainingMenu from './TrainingMenu';

describe('GalleryLinks init', () => {
  it('init', async () => {
    render(
      <BrowserRouter>
        <GalleryLinks />
      </BrowserRouter>,
    );

    expect(screen.getByTestId('open_training_menu0')).toBeInTheDocument();
  });

  it('open training menu', async () => {
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
          <Route path="/TrainingMenu/:date" element={<TrainingMenu />} />
        </Routes>
      </MemoryRouter>,
    );

    // 開くボタンを押した場合にトレーニングメニューに遷移すること
    await userEvent.click(screen.getByTestId('open_training_menu0'));
    expect(screen.queryByTestId('open_training_menu0')).not.toBeInTheDocument();
    expect(screen.getByTestId('breadcrumbs')).toBeInTheDocument();
    // 最新の練習を開いているため、前へのリンクはあるが次へのリンクはない。
    expect(screen.getByTestId('pre_top_button')).toBeInTheDocument();
    expect(screen.queryByTestId('next_top_button')).not.toBeInTheDocument();
    expect(screen.getByTestId('pre_bottom_button')).toBeInTheDocument();
    expect(screen.queryByTestId('next_bottom_button')).not.toBeInTheDocument();
  });
});
