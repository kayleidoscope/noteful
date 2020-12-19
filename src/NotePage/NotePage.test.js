import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom'
import NotePage from './NotePage';


it.only('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
          <NotePage match={{params: {noteName: "test"}}} />
      </MemoryRouter>,
      div
    );
  ReactDOM.unmountComponentAtNode(div);
});