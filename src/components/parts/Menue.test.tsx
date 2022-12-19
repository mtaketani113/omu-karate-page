import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Menue from './Menue';
import userEvent from '@testing-library/user-event';

describe('Menue', () => {
  it('init', async () => {
    render(
      <BrowserRouter>
        <Menue />
      </BrowserRouter>,
    );
    // メニューの項目が存在するか確認
    screen.getByTestId('home');
    screen.getByTestId('member');
    screen.getByTestId('schedule');
    screen.getByTestId('schedule');
    screen.getByTestId('galleryLinks');
    screen.getByTestId('place');
    screen.getByTestId('links');
    screen.getByTestId('inquiry');
    expect(screen.queryByTestId('sugimoto')).toBeNull()
    expect(screen.queryByTestId('nakamozu')).toBeNull()
    expect(screen.queryByTestId('time')).toBeNull()
  });

  it('open places', async () => {
    render(
      <BrowserRouter>
        <Menue />
      </BrowserRouter>,
    );
    // 練習場所をクリックすると練習場所と時間のリンクが表示される
    const placeButton = screen.getByTestId('place');
    userEvent.click(placeButton);
    screen.getByTestId('sugimoto');
    screen.getByTestId('nakamozu');
    screen.getByTestId('time');
  });
});
