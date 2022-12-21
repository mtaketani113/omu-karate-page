import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Member from './Member';

describe('Member init', () => {
  it('init', async () => {
    render(<Member />);

    expect(screen.getByTestId('player')).toBeInTheDocument();
    expect(screen.getByTestId('coach')).toBeInTheDocument();
    expect(screen.getByTestId('ob')).toBeInTheDocument();
    expect(screen.queryByTestId('open_image')).toBeNull();
  });

  it('open and close modal', async () => {
    render(<Member />);

    // 開くボタンを押した場合にモーダルが表示されるかを確認
    userEvent.click(screen.getByTestId('open_coach0'));
    expect(screen.getByTestId('open_image')).toBeInTheDocument();

    // 閉じるボタンを押した場合にモーダルが非表示になることを確認
    userEvent.click(screen.getByTestId('close'));
    expect(screen.getByTestId('open_image')).not.toBeVisible();
  });
});
