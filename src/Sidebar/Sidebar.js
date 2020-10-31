import React, { Component } from 'react';
import FolderList from '../FolderList/FolderList';
import GoBack from '../GoBack/GoBack';
import '../Page/Page.css';
import './Sidebar.css';

class Sidebar extends Component {
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
          <FolderList
            dummyStore={this.props.dummyStore}
            handleFolderSelect={this.props.handleFolderSelect}
            currentFolderId={this.props.currentFolderId}
          />
          <h3 className="sidebar-folder-name">
            Folder selected: <br/>
            {folderName}</h3>
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