import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom'
import GoBack from './GoBack';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
          <GoBack  match={{params: {folderName: "test"}}} />
      </MemoryRouter>,
      div
    );
  ReactDOM.unmountComponentAtNode(div);
});