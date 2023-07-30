import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Member from './Member';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PrefectureObList from './PrefectureObList';

describe('Member init', () => {
  it('init', async () => {
    const route = '/member';
    render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="/member" element={<Member />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByTestId('player')).toBeInTheDocument();
    expect(screen.getByTestId('coach')).toBeInTheDocument();
    expect(screen.getByTestId('ob')).toBeInTheDocument();
    expect(screen.queryByTestId('open_image')).toBeNull();
  });

  it('open and close modal', async () => {
    const route = '/member';
    render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="/member" element={<Member />} />
        </Routes>
      </MemoryRouter>,
    );
    

    // 開くボタンを押した場合にモーダルが表示されるかを確認
    userEvent.click(screen.getByTestId('open_coach0'));
    expect(screen.getByTestId('open_image')).toBeInTheDocument();

    // 閉じるボタンを押した場合にモーダルが非表示になることを確認
    userEvent.click(screen.getByTestId('close'));
    expect(screen.getByTestId('open_image')).not.toBeVisible();
  });

  it('open prefecture ob list', async () => {
    const route = '/member';
    render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="/member" element={<Member />} />
          <Route path="/prefectureObList" element={<PrefectureObList />} />
        </Routes>
      </MemoryRouter>,
    );
    
    // 府大OBリストをクリックしたときに遷移することを確認
    userEvent.click(screen.getByTestId('prefectureObListLink'));
    expect(screen.getByTestId('ob_title')).toBeInTheDocument();

  });
});
