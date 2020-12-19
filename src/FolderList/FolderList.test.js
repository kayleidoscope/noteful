import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom'
import FolderList from './FolderList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
          <FolderList />
      </MemoryRouter>,
      div
    );
  ReactDOM.unmountComponentAtNode(div);
});