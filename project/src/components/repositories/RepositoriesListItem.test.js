import { render, screen } from '@testing-library/react';
import RepositoriesListItem from './RepositoriesListItem';
import {MemoryRouter} from 'react-router-dom';


test('link to github repo is present', async () => {
    const repo = {
        full_name:"FB/react",
        language:"JS",
        description:"FBLib",
        owner:"zuckerberg",
        name: "React",
        html_url:"github.com"
    }
    render(
        <MemoryRouter>
            <RepositoriesListItem repository={repo}/>
        </MemoryRouter>
    );

    await screen.findAllByRole('img', { name: "JS" });

    const link = screen.getByRole('link',{name:"gitRepo"});
    expect(link).toHaveAttribute('href','github.com');
});

test('shows a correct file icon', async () => {
     const repo = {
        full_name:"FB/react",
        language:"JS",
        description:"FBLib",
        owner:"zuckerberg",
        name: "React",
        html_url:"github.com"
    }
    render(
        <MemoryRouter>
            <RepositoriesListItem repository={repo}/>
        </MemoryRouter>
    );
    const icon = await screen.findByRole('img', { name: "JS" });
    expect(icon).toHaveClass('js-icon');
    
})