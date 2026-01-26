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

    // カレンダーが出ていることを確認
    expect(screen.getByTestId('fullCalendar')).toBeInTheDocument();
  });

  it('日付指定のテスト', async () => {
    const route = '/schedule?initDate=20221101';
    render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </MemoryRouter>,
    );
    // カレンダーが出ていることを確認
    expect(screen.getByTestId('fullCalendar')).toBeInTheDocument();
  });
});
