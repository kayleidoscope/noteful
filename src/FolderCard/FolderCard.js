import React from 'react';
import './FolderCard.css';

function FolderCard(props) {
    const folderName = props.folderName;
    const folderId = props.folderId;
    const currentFolder = props.currentFolder;
  return (
    <li>
        <button 
          onClick={() => {props.handleFolderSelect(props.folderId)}}
          className={`folder-card ${(folderId === currentFolder) ? "selected" : ""}`}
        >
          {folderName}
        </button>
    </li>
  );
}

export default FolderCard;