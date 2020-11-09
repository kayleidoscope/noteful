import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import NoteList from '../NoteList/NoteList';
import PropTypes from 'prop-types';
import Context from '../context';
import './FoldersPage.css';

class FoldersPage extends Component {
    static contextType = Context;

    render() {
        const dummyFolders = this.context.foldersStore;
        const folderName = this.props.match.params.folderName;
        const currentFolder = dummyFolders.find(folder => folder.name === folderName);

        return currentFolder ? (
            <div className="folders-page-group">
            <Sidebar
                folderSidebar={true}
                folderName={currentFolder.name}
            />
            <NoteList
                match={this.props.match}
                history={this.props.history}
            />
            </div>
        ) : 'Folder not found';
        }
}

FoldersPage.propTypes = {
    folderSidebar: PropTypes.bool,
    folderName: PropTypes.string,
    match: PropTypes.object,
    history: PropTypes.object,
}

export default FoldersPage;