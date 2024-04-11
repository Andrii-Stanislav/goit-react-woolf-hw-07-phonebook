import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from './ContactForm';
import { render } from '../../tests';

describe('ContactForm', () => {
  test('1', () => {
    render(<ContactForm showAlert={() => {}} />);
    const input = screen.getByPlaceholderText('Awesome name');
    const phoneInput = screen.getByPlaceholderText('Cool phone number');
    const btn = screen.getByRole('button');
    expect(input).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });

  test('2', () => {
    render(<ContactForm showAlert={() => {}} />);
    const input = screen.getByPlaceholderText('Awesome name');
    fireEvent.input(input, { target: { value: 'qwe' } });
    expect(input).toHaveValue('qwe');
    const phoneInput = screen.getByPlaceholderText('Cool phone number');
    fireEvent.input(phoneInput, { target: { value: '1234567890' } });
    expect(phoneInput).toHaveValue('(+123)-456-7890');
  });

  test('3', () => {
    render(<ContactForm showAlert={() => {}} />);
    const phoneInput = screen.getByPlaceholderText('Cool phone number');
    userEvent.type(phoneInput, '1234567890');
    expect(phoneInput).toHaveValue('(+123)-456-7890');
  });
});
