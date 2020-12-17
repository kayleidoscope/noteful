import React, { Component} from 'react';
import Context from '../context';
import './AddFolder.css';
import ValidationError from '../ValidationError/ValidationError';
import PropTypes from 'prop-types';

class AddFolder extends Component {
    static contextType = Context;

    constructor(props) {
        super(props);
        this.state = {
            folderName: "",
            folderTouched: false,
        };
      }

    folderNameChanged(folderName) {
          this.setState({
              folderName,
              folderTouched: true,
          })
    }

    validateFolder() {
        const name = this.state.folderName.trim();
        if (name.length === 0) {
            return "Folder name is required."
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newId = Math.random().toString(36).substring(2, 4)
        + Math.random().toString(36).substring(2, 4);
        const newName = this.state.folderName;
        const newFolder = {
            name: newName,
            id: newId,
        }
        fetch("http://localhost:8000/api/folders", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
              },
            body: JSON.stringify(newFolder), 
          })
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status)
            }
            return res.json()
        })
        .then(data => {
            this.context.handleAddFolder(data);
        })
        .catch(error => {
            console.error(error)
          });
        this.props.handleFormToButton(e);
    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <fieldset>
                    <legend>Create new folder</legend>
                    <label htmlFor="folder-name">Folder name:</label>
                    <input
                        type="text"
                        id="folder-name"
                        name="new-folder"
                        onChange={e => this.folderNameChanged(e.target.value)}
                    />
                    {this.state.folderTouched && (
                        <ValidationError message={this.validateFolder()} />
                    )}
                    <div className="button-group">
                        <button
                            type="submit"
                            className="new-folder-buttons"
                            disabled={
                                this.validateFolder()
                            }
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            className="new-folder-buttons"
                            onClick={e => this.props.handleFormToButton(e)}
                        >
                            Cancel
                        </button>
                    </div>
                </fieldset>
            </form>

        )
    }
}

AddFolder.propTypes = {
    message: PropTypes.string,
}

export default AddFolder;