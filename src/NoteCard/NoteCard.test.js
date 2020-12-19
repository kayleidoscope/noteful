import React from 'react';
import ReactDOM from 'react-dom';
import NoteCard from './NoteCard';
import { MemoryRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <MemoryRouter>
          <NoteCard noteName="test"/>
          </MemoryRouter>,
      div
    );
  ReactDOM.unmountComponentAtNode(div);
});