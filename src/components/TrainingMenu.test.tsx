import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import TrainingMenu from './TrainingMenu';
import userEvent from '@testing-library/user-event';
import MainPageRoutes from '../MainPageRoutes';

describe('TrainingMenu init', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it('init', async () => {
    const route = '/trainingMenu/2022-12-10';
    render(
      <MemoryRouter initialEntries={[route]}>
        <MainPageRoutes />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('breadcrumbs')).toHaveTextContent('2022-12-10');
    expect(screen.getByTestId('pre_top_button')).toBeInTheDocument();
    expect(screen.getByTestId('next_top_button')).toBeInTheDocument();
    expect(screen.getByTestId('pre_bottom_button')).toBeInTheDocument();
    expect(screen.getByTestId('next_top_button')).toBeInTheDocument();
  });

  it('pre', async () => {
    const route = '/trainingMenu/2022-12-10';
    render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="/trainingMenu/:date" element={<TrainingMenu />}></Route>
        </Routes>
      </MemoryRouter>,
    );

    const preTopButton = screen.getByTestId('pre_top_button');
    await userEvent.click(preTopButton);
    expect(screen.getByTestId('breadcrumbs')).toHaveTextContent('2022-12-08');
    const preBottomButton = screen.getByTestId('pre_bottom_button');
    await userEvent.click(preBottomButton);
    expect(screen.getByTestId('breadcrumbs')).toHaveTextContent('2022-12-03');
  });

  it('next', async () => {
    const route = '/trainingMenu/2022-12-10';
    render(
      <MemoryRouter initialEntries={[route]}>
        <MainPageRoutes />
      </MemoryRouter>,
    );

    const nextTopButton = screen.getByTestId('next_top_button');
    await userEvent.click(nextTopButton);
    expect(screen.getByTestId('breadcrumbs')).toHaveTextContent('2022-12-15');
    const nextBottomButton = screen.getByTestId('next_bottom_button');
    await userEvent.click(nextBottomButton);
    expect(screen.getByTestId('breadcrumbs')).toHaveTextContent('2022-12-17');
  });
});
