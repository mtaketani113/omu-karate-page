import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Menu } from '../index';
import userEvent from '@testing-library/user-event';
import MainPageRoutes from '../../MainPageRoutes';
import axios from 'axios';

describe('Menu', () => {
  it('init', async () => {
    render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>,
    );
    // メニューの項目が存在するか確認
    expect(screen.getByTestId('home')).toBeInTheDocument();
    expect(screen.getByTestId('member')).toBeInTheDocument();
    expect(screen.getByTestId('schedule')).toBeInTheDocument();
    expect(screen.getByTestId('galleryLinks')).toBeInTheDocument();
    expect(screen.getByTestId('place')).toBeInTheDocument();
    expect(screen.getByTestId('links')).toBeInTheDocument();
    expect(screen.getByTestId('inquiry')).toBeInTheDocument();
    expect(screen.getByTestId('privacy_policy')).toBeInTheDocument();
    expect(screen.queryByTestId('sugimoto')).toBeNull();
    expect(screen.queryByTestId('nakamozu')).toBeNull();
    expect(screen.queryByTestId('time')).toBeNull();
    expect(screen.queryByTestId('about')).toBeNull();
    expect(screen.queryByTestId('annualEvents')).toBeNull();
    expect(screen.queryByTestId('faq')).toBeNull();
  });

  it('open places', async () => {
    window.matchMedia =
      window.matchMedia ||
      function () {
        return {
          matches: false,
          addListener: function () {},
          removeListener: function () {},
        };
      };
    render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>,
    );
    // 練習場所をクリックすると練習場所と時間のリンクが表示される
    const placeButton = screen.getByTestId('place');
    userEvent.click(placeButton);
    expect(screen.getByTestId('sugimoto')).toBeInTheDocument();
    expect(screen.getByTestId('nakamozu')).toBeInTheDocument();
    expect(screen.getByTestId('time')).toBeInTheDocument();
  });

  it('open introduction', async () => {
    window.matchMedia =
      window.matchMedia ||
      function () {
        return {
          matches: false,
          addListener: function () {},
          removeListener: function () {},
        };
      };
    render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>,
    );

    // 空手道部紹介をクリックしたときにリンクが表示される
    const karatedoButton = screen.getByTestId('karatedo');
    userEvent.click(karatedoButton);
    expect(screen.getByTestId('about')).toBeInTheDocument();
    expect(screen.getByTestId('annualEvents')).toBeInTheDocument();
    expect(screen.getByTestId('faq')).toBeInTheDocument();
  });

  it('transition', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({
      data: [
        { tag_name: '1.0.0', name: 'リリース' },
        { tag_name: '1.0.1', name: '修正' },
      ],
    });

    const route = '/';
    render(
      <MemoryRouter initialEntries={[route]}>
        <Menu />
        <MainPageRoutes />
      </MemoryRouter>,
    );
    // 部員紹介をクリック
    userEvent.click(screen.getByTestId('member'));
    expect(screen.getByTestId('player')).toBeInTheDocument();

    // 練習予定をクリック
    userEvent.click(screen.getByTestId('schedule'));
    expect(screen.getByTestId('schedule_title')).toBeInTheDocument();

    // 練習場所・時間をクリック
    userEvent.click(screen.getByTestId('place'));
    expect(screen.getByTestId('place_title')).toBeInTheDocument();

    // リンク集をクリック
    userEvent.click(screen.getByTestId('links'));
    expect(screen.getByTestId('omu_karate_twitter')).toBeInTheDocument();

    // お問い合わせをクリック
    userEvent.click(screen.getByTestId('inquiry'));
    expect(screen.getByTestId('inquiry_title')).toBeInTheDocument();
    expect(screen.getByTestId('change_log_title')).toBeInTheDocument();
    expect(await screen.findByText('1.0.0')).toBeInTheDocument();
    expect(await screen.findByText('1.0.1')).toBeInTheDocument();

    // プライバシーポリシー
    userEvent.click(screen.getByTestId('privacy_policy'));
    expect(screen.getByTestId('privacy_policy_title')).toBeInTheDocument();

    // 練習メニュー・風景をクリック
    userEvent.click(screen.getByTestId('galleryLinks'));
    expect(screen.getByTestId('practice_title')).toBeInTheDocument();

    // ホームをクリック
    userEvent.click(screen.getByTestId('home'));
    expect(screen.getByTestId('event_title')).toBeInTheDocument();

    // 空手道部紹介をクリック
    userEvent.click(screen.getByTestId('karatedo'));
    expect(screen.getByTestId('karatedo_title')).toBeInTheDocument();
    expect(screen.getByTestId('aboutDetails')).not.toBeVisible();
    expect(screen.getByTestId('annualEventsDetails')).not.toBeVisible();
    expect(screen.getByTestId('faqDetails')).not.toBeVisible();

    // 空手道部についてをクリック
    userEvent.click(screen.getByTestId('about'));
    expect(screen.getByTestId('aboutDetails')).toBeVisible();
    expect(screen.getByTestId('annualEventsDetails')).not.toBeVisible();
    expect(screen.getByTestId('faqDetails')).not.toBeVisible();

    // 年間行事をクリック
    userEvent.click(screen.getByTestId('annualEvents'));
    expect(screen.getByTestId('annualEventsDetails')).toBeVisible();

    // FAQをクリック
    userEvent.click(screen.getByTestId('faq'));
    expect(screen.getByTestId('faqDetails')).toBeVisible();
  });
});
