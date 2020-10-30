import React from 'react';
import Header from './Header/Header';
import Page from './Page/Page';
import FoldersPage from './FoldersPage/FoldersPage';
import NotePage from './NotePage/NotePage';
import dummyStore from './dummy-store';

function App() {
  return (
    <main className='App'>
      <Header />
      {/* <Page
        dummyStore={dummyStore}
      /> */}
      {/* <FoldersPage
        dummyStore={dummyStore}
      /> */}
      <NotePage
        dummyStore={dummyStore}
      />
    </main>
  );
}

export default App;