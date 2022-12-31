import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Schedule from './Schedule';

describe('Schedule init', () => {
  it('日付指定を指定しないテスト', async () => {
    const route = '/schedule';
    render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </MemoryRouter>,
    );

    var today = new Date();
    //現在の年・月を取得
    var year = today.getFullYear();
    var month = today.getMonth() + 1;

    // 現在の年・月を表示することを確認
    expect(screen.getByText(year + '年' + month + '月')).toBeInTheDocument();
  });

  it('日付指定のテスト', async () => {
    const route = '/schedule?initDate=2022-11-01';
    render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </MemoryRouter>,
    );
    // 指定した年・月を表示することを確認
    expect(screen.getByText('2022年11月')).toBeInTheDocument();
  });
});
