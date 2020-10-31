import React, { Component } from 'react';
import FolderCard from '../FolderCard/FolderCard';
import './FolderList.css';

class FolderList extends Component {
  render() {
    const dummyStore = this.props.dummyStore;
    const dummyFolders = dummyStore.folders;
    const folderCardList = Object.keys(dummyFolders).map((folder, i) => {
      return <FolderCard
        folderName={dummyFolders[i].name}
        key={dummyFolders[i].id}
        folderId={dummyFolders[i].id}
        handleFolderSelect={this.props.handleFolderSelect}
        currentFolderId={this.props.currentFolderId}
      />
    })
    return (
      <div>
        <ul className="folder-list">
          {folderCardList}
        </ul>
        <button className="addfolder-button">
          Add Folder
        </button>
      </div>
    );
  }
}

export default FolderList;