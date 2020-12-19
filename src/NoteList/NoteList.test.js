import React from 'react';
import ReactDOM from 'react-dom';
import NoteList from './NoteList';
import { MemoryRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <MemoryRouter>
          <NoteList />
          </MemoryRouter>,
      div
    );
  ReactDOM.unmountComponentAtNode(div);
});