import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom'
import AddFolder from './AddFolder';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
          <AddFolder />
      </MemoryRouter>,
      div
    );
  ReactDOM.unmountComponentAtNode(div);
});