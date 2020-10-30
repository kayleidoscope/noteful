import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import NoteList from '../NoteList/NoteList';
import './FoldersPage.css';

class FoldersPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          folder: "",
        };
    }

    folderSelect = (folder) => {
        console.log("folder clicked!")
        this.setState({
            folder
        })
        console.log(this.state.folder)
    }

    render() {
        return (
            <div className="folders-page-group">
            <Sidebar
                dummyStore={this.props.dummyStore}
                handleFolderSelect={this.folderSelect}
                currentFolder={this.state.folder}
            />
            <NoteList
                dummyStore={this.props.dummyStore}
                currentFolder={this.state.folder}
                handleNoteSelect={this.props.handleNoteSelect}
            />
            </div>
        );
        }
}

export default FoldersPage;