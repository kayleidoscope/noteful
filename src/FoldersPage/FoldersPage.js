import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import NoteList from '../NoteList/NoteList';
import './FoldersPage.css';

class FoldersPage extends Component {
    
    render() {
        const dummyFolders = this.props.dummyStore.folders;
        const folderName = this.props.match.params.folderName;
        const currentFolder = dummyFolders.find(folder => folder.name === folderName);

        return (
            <div className="folders-page-group">
            <Sidebar
                dummyStore={this.props.dummyStore}
                handleFolderSelect={this.props.handleFolderSelect}
                currentFolderId={this.props.currentFolder}
                folderSidebar={true}
                folderName={currentFolder.name}
            />
            <NoteList
                dummyStore={this.props.dummyStore}
                currentFolder={this.props.currentFolder}
                handleNoteSelect={this.props.handleNoteSelect}
            />
            </div>
        );
        }
}

export default FoldersPage;