import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows two inputs and a button', () => {
    //Render Component
    render(<UserForm />); 
    
    //Find Element
    const input = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    //Assert
    expect(input).toHaveLength(2);
    expect(button).toBeInTheDocument();
});

test('call on user add', () => {

    const mock = jest.fn();
    //render
    render(<UserForm onUserAdd={mock} />); 
    
    //Find Element
    const nameInput = screen.getByRole('textbox', {
        name: /name/i
    });
    const emailInput = screen.getByRole('textbox', {
        name: /email/i
    });

    user.click(nameInput); //click name input
    user.keyboard('Jane'); //Type in name input
    user.click(emailInput); //click email input
    user.keyboard('Jane@gmail.com');//Type in email input
    const button = screen.getByRole('button');
    user.click(button);

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({name:'Jane',email:"Jane@gmail.com"});

});

test('empties the two inputs when form is submitted', async () => {
  render(<UserForm onUserAdd={() => {}} />);

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const button = screen.getByRole('button');

  await user.click(nameInput);
  await user.keyboard('jane');
  await user.click(emailInput);
  await user.keyboard('jane@jane.com');

  await user.click(button);

  expect(nameInput).toHaveValue('');
  expect(emailInput).toHaveValue('');
});
