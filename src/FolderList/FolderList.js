import React, { Component } from 'react';
import FolderCard from '../FolderCard/FolderCard';
import AddFolder from '../AddFolder/AddFolder';
import Context from '../context';
import FolderError from '../errorPages/FolderError';
import PropTypes from 'prop-types';
import './FolderList.css';

class FolderList extends Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
        newFolderForm: false,
    };
  }

  buttonToForm = (e) => {
    e.preventDefault();
    this.setState({
      newFolderForm: true,
    })
  }

  formToButton = (e) => {
    e.preventDefault();
    this.setState({
      newFolderForm: false,
    })
  }

  render() {
    const dummyFolders = this.context.foldersStore;

    const folderCardList = dummyFolders.map((folder, i) => {
      return (
        <FolderError
          key={dummyFolders[i].id}
        >
          <FolderCard
          folderName={dummyFolders[i].name}
          folderId={dummyFolders[i].id}
          />
        </FolderError>
      )
    })

    // for (let i = 0; i < dummyFolders.length; i++) {
    //   return (
    //     <FolderError
    //       key={dummyFolders[i].id}
    //     >
    //       <FolderCard
    //       folderName={dummyFolders[i].name}
    //       folderId={dummyFolders[i].id}
    //       />
    //     </FolderError>
    //   )
    // }
    

    if (this.state.newFolderForm) {
      return dummyFolders ? (
        <div>
          <ul className="folder-list">
            {folderCardList}
          </ul>
          <AddFolder
            handleFormToButton={this.formToButton}
          />
        </div>
      ) : "Folders not found";
    } else {
    return dummyFolders ? (
      <div>
        <ul className="folder-list">
          {folderCardList}
        </ul>
        <form onSubmit={e => this.buttonToForm(e)}>
          <button className="addfolder-button">
            Add Folder
          </button>
        </form>
      </div>
    ) : "Folders not found";
    }
  };
}

FolderList.propTypes = {
  folderName: PropTypes.string,
  key: PropTypes.string,
  folderId: PropTypes.string,
  handleFormToButton: PropTypes.func,
}

export default FolderList;