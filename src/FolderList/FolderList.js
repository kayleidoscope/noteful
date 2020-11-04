import React, { Component } from 'react';
import FolderCard from '../FolderCard/FolderCard';
import Context from '../context';
import './FolderList.css';

class FolderList extends Component {
  static contextType = Context;

  render() {
    const dummyFolders = this.context.foldersStore;
    const folderCardList = Object.keys(dummyFolders).map((folder, i) => {
      return <FolderCard
        folderName={dummyFolders[i].name}
        key={dummyFolders[i].id}
        folderId={dummyFolders[i].id}/>
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