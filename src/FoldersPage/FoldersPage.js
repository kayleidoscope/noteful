import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import NoteList from '../NoteList/NoteList';
import Context from '../context';
import './FoldersPage.css';

class FoldersPage extends Component {
    static contextType = Context;

    render() {
        const dummyFolders = this.context.foldersStore;
        const folderName = this.props.match.params.folderName;
        const currentFolder = dummyFolders.find(folder => folder.name === folderName);

        return (
            <div className="folders-page-group">
            <Sidebar
                folderSidebar={true}
                folderName={currentFolder.name}
            />
            <NoteList/>
            </div>
        );
        }
}

export default FoldersPage;