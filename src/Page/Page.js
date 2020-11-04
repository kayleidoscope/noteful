import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Context from '../context';
import NoteList from '../NoteList/NoteList';
import './Page.css';

class Page extends Component {
  static contextType = Context;

  render() {
    return (
      <div className="page-group">
        <Sidebar/>
        <NoteList />
      </div>
    );
  }
}

export default Page;