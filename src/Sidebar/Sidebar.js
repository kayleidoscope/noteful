import React, { Component } from 'react';
import FolderList from '../FolderList/FolderList';
import Context from '../context';
import GoBack from '../GoBack/GoBack';
import '../Page/Page.css';
import './Sidebar.css';

class Sidebar extends Component {
  static contextType = Context;

  render() {
    if (this.props.canGoBack) {
      return (
        <aside className="page-sidebar">
          <GoBack history={this.props.history} />
        </aside>
      );
    } else if (this.props.folderSidebar) {
      const folderName = this.props.folderName;
      return (
        <aside className="page-sidebar">
          <FolderList/>
          <h3 className="sidebar-folder-name">
            Folder selected: <br/>
            {folderName}</h3>
        </aside>
      );
    } else {
      return (
        <aside className="page-sidebar">
          <FolderList/>
        </aside>
      );
    }
  }
}

export default Sidebar;