import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import TrainingMenue from './TrainingMenue';
import userEvent from '@testing-library/user-event';
import MainPageRoutes from '../MainPageRoutes';

describe('TrainingMenue init', () => {
  beforeAll(() => {
    window.matchMedia =
      window.matchMedia ||
      function () {
        return {
          matches: false,
          addListener: function () {},
          removeListener: function () {},
        };
      };
  });
  it('init', async () => {
    const route = '/trainingMenue/2022-12-10';
    render(
      <MemoryRouter initialEntries={[route]}>
        <MainPageRoutes />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('breadcrumbs')).toHaveTextContent('2022-12-10');
    expect(screen.getByTestId('pre_button')).toBeInTheDocument();
    expect(screen.getByTestId('next_button')).toBeInTheDocument();
  });

  it('pre', async () => {
    const route = '/trainingMenue/2022-12-10';
    render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="/trainingMenue/:date" element={<TrainingMenue />}></Route>
        </Routes>
      </MemoryRouter>,
    );

    const preButton = screen.getByTestId('pre_button');
    userEvent.click(preButton);
    expect(screen.getByTestId('breadcrumbs')).toHaveTextContent('2022-12-08');
  });

  it('next', async () => {
    const route = '/trainingMenue/2022-12-10';
    render(
      <MemoryRouter initialEntries={[route]}>
        <MainPageRoutes />
      </MemoryRouter>,
    );

    const nextButton = screen.getByTestId('next_button');
    userEvent.click(nextButton);
    expect(screen.getByTestId('breadcrumbs')).toHaveTextContent('2022-12-15');
  });
});
