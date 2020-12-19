import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom'
import FoldersPage from './FoldersPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
          <FoldersPage  match={{params: {folderName: "test"}}} />
      </MemoryRouter>,
      div
    );
  ReactDOM.unmountComponentAtNode(div);
});