import React from 'react';
import { Link } from 'react-router-dom';
import './FolderCard.css';

function FolderCard(props) {
    const folderName = props.folderName;
    const folderId = props.folderId;
    const currentFolder = props.currentFolder;
  return (
    <li>
        <Link 
          to={`/folder/${folderName}`}
          onClick={() => {props.handleFolderSelect(props.folderId)}}
          className={`folder-card ${(folderId === currentFolder) ? "selected" : ""}`}
        >
          {folderName}
        </Link>
    </li>
  );
}

export default FolderCard;