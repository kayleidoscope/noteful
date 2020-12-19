import React from 'react';
import ReactDOM from 'react-dom';
import NoteInfo from './NoteInfo';
import { MemoryRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <MemoryRouter>
          <NoteInfo noteContent="Test content" />
          </MemoryRouter>,
      div
    );
  ReactDOM.unmountComponentAtNode(div);
});