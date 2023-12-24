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

    const argsList = [];
    const callback = (...args) => {
        argsList.push(args);
    }
    //render
    render(<UserForm onUserAdd={callback} />); 
    
    //Find Element
    const [nameInput, emailInput] = screen.getAllByRole('textbox');
    user.click(nameInput); //click name input
    user.keyboard('Jane'); //Type in name input
    user.click(emailInput); //click email input
    user.keyboard('Jane@gmail.com');//Type in email input
    const button = screen.getByRole('button');
    user.click(button);

    expect(argsList).toHaveLength(1);

});