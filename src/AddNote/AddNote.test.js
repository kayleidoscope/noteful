import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom'
import AddNote from './AddNote';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
          <AddNote />
      </MemoryRouter>,
      div
    );
  ReactDOM.unmountComponentAtNode(div);
});