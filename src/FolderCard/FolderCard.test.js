import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom'
import FolderCard from './FolderCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
          <FolderCard />
      </MemoryRouter>,
      div
    );
  ReactDOM.unmountComponentAtNode(div);
});