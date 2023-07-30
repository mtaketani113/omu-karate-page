import { render, screen } from '@testing-library/react';
import PrefectureObList from './PrefectureObList';

describe('PrefectureObList init', () => {
  it('init', async () => {
    render(<PrefectureObList />);

    expect(screen.getByTestId('ob_title')).toBeInTheDocument();
    expect(screen.getByTestId('S32年')).toBeInTheDocument();
  });
});
