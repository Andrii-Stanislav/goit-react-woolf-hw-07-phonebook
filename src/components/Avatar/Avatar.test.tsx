import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Avatar from './Avatar';

describe('Avatar', () => {
  test('correct render', async () => {
    render(<Avatar size="small" name="User" />);
    const user = screen.getByText('U');
    expect(user).toBeInTheDocument();
  });

  test('click event', async () => {
    render(<Avatar size="small" name="User" />);
    const wrapper = screen.getByTestId('wrapper');
    expect(screen.queryByTestId('plus')).toBeNull();

    userEvent.click(wrapper);
    expect(await screen.findByTestId('plus')).toBeInTheDocument();

    userEvent.click(wrapper);
    expect(screen.queryByTestId('plus')).toBeNull();
  });
});
