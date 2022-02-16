import { render, fireEvent } from '@testing-library/react-native';

import SignInForm from '../../components/SignInForm'


describe('Form', () => {
  it.skip('calls function provided by onSubmit prop after pressing the submit button', () => {
    const onSubmit = jest.fn();
    const { getByPlaceholderText, getByText } = render(<SignInForm onSubmit={onSubmit} />);

    fireEvent.changeText(getByPlaceholderText('Username'), 'kalle');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password');
    fireEvent.press(getByText('Sign in'));

    expect(onSubmit).toHaveBeenCalledTimes(1);

    // onSubmit.mock.calls[0][0] contains the first argument of the first call
    expect(onSubmit.mock.calls[0][0]).toEqual({
      username: 'kalle',
      password: 'password',
    });
  });
});