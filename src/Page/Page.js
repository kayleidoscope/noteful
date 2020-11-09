import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Context from '../context';
import NoteList from '../NoteList/NoteList';
import PropTypes from 'prop-types';
import './Page.css';

class Page extends Component {
  static contextType = Context;

  render() {
    return (
      <div className="page-group">
        <Sidebar/>
        <NoteList
          match={this.props.match}
          history={this.props.history}
        />
      </div>
    );
  }
}

Page.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
}


export default Page;