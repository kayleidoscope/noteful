import React, { Component } from 'react';
import FolderList from '../FolderList/FolderList';
import GoBack from '../GoBack/GoBack';
import '../Page/Page.css';
import './Sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goBack: false,
    };
  }

  render() {
    if (this.state.goBack) {
      return (
        <aside className="page-sidebar">
          <GoBack />
        </aside>
      );
    } else {
      return (
        <aside className="page-sidebar">
          <FolderList
            dummyStore={this.props.dummyStore}
            handleFolderSelect={this.props.handleFolderSelect}
            currentFolder={this.props.currentFolder}
          />
        </aside>
      );
    }
  }
}

export default Sidebar;