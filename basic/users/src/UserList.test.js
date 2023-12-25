import { render, screen,within } from '@testing-library/react'
import user from '@testing-library/user-event';
import UserList from './UserList';

test('render a row per user', () => {
    const users = [{
        name: 'Jane',
        email:"Jane@gmail.com"
    }, {
        name: 'John',
        email:'John@gmail.com'
    }];
    render(<UserList users={users} />);
    const allRows = within(screen.getByTestId("users")).getAllByRole('row');
    expect(allRows).toHaveLength(2);
});

test('verify email and name of user', () => {
     const users = [{
        name: 'Jane',
        email:"Jane@gmail.com"
    }, {
        name: 'John',
        email:'John@gmail.com'
    }];
    render(<UserList users={users} />);
    
    for (var user of users) {
        const name = screen.getByRole('cell', { name: user.name });
        const email = screen.getByRole('cell', { name: user.email })
        
        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }
});