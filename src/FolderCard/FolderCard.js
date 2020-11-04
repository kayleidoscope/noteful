import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context';
import './FolderCard.css';

class FolderCard extends Component {
  static contextType = Context;

  render() {
    const folderName = this.props.folderName;
    const folderId = this.props.folderId;
    const currentFolderId = this.props.currentFolderId;
  return (
    <li>
        <Link 
          to={`/folder/${folderName}`}
          onClick={() => {this.context.handleFolderSelect(this.props.folderId)}}
          className={`folder-card ${(folderId === currentFolderId) ? "selected" : ""}`}
        >
          {folderName}
        </Link>
    </li>
  );
  }
}

export default FolderCard;