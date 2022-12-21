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
    expect(screen.getByTestId('home')).toBeInTheDocument();
    expect(screen.getByTestId('member')).toBeInTheDocument();
    expect(screen.getByTestId('schedule')).toBeInTheDocument();
    expect(screen.getByTestId('schedule')).toBeInTheDocument();
    expect(screen.getByTestId('galleryLinks')).toBeInTheDocument();
    expect(screen.getByTestId('place')).toBeInTheDocument();
    expect(screen.getByTestId('links')).toBeInTheDocument();
    expect(screen.getByTestId('inquiry')).toBeInTheDocument();
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
    expect(screen.getByTestId('sugimoto')).toBeInTheDocument();
    expect(screen.getByTestId('nakamozu')).toBeInTheDocument();
    expect(screen.getByTestId('time')).toBeInTheDocument();
  });
});
