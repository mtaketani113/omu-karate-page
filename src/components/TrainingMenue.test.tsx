import { render, screen } from '@testing-library/react';
import {MemoryRouter, Route, Routes} from 'react-router-dom'
import TrainingMenue from './TrainingMenue';

describe('TrainingMenue init', () => {
  it('init', async () => {
    const route = '/trainingMenue/2022-12-10'
    render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
        <Route path='/trainingMenue/:date' element={<TrainingMenue />}>
        </Route>
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByTestId("breadcrumbs")).toBeInTheDocument();
    expect(screen.getByTestId("pre_button")).toBeInTheDocument();
    expect(screen.getByTestId("next_button")).toBeInTheDocument();
  });
});
