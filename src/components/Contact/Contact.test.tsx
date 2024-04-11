import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Contact from './Contact';
import { render } from '../../tests';

describe('Contact', () => {
  test('on delete and cancel', async () => {
    render(<Contact id="1" name="Awesome name" phone="(+123)-456-7890" />);
    const nullConfirmDeleteBtn = screen.queryByText('Delete');
    expect(nullConfirmDeleteBtn).not.toBeVisible();
    const deleteStartBtn = screen.getByTestId('start-delete');
    userEvent.click(deleteStartBtn);
    const confirmDeleteBtn = await screen.findByText('Delete');
    expect(confirmDeleteBtn).toBeVisible();
  });
});
