import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import EditModal from './EditModal';
import { render } from '../../tests';

describe('Contact', () => {
  test('on edit contact', async () => {
    render(<EditModal id="1" name="Awesome name" number="(+123)-456-7890" />);
    const editButton = screen.getByTestId('edit-button');
    userEvent.click(editButton);
    const editModal = await screen.findByTestId('edit-modal');
    expect(editModal).toBeInTheDocument();
  });
});
