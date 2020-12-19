import React, { Component} from 'react';
import Context from '../context';
import ValidationError from '../ValidationError/ValidationError';
import PropTypes from 'prop-types';
// import moment from 'moment';
import './AddNote.css';
import config from '../config';

class AddNote extends Component {
    static contextType = Context;

    constructor(props) {
        super(props);
        this.state = {
            note: {
                name: "",
                touched: false,
            },
            folder: {
                name: 0,
                touched: false,
            },
            content: {
                copy: "",
                touched: false,
            }
        };
      }

    noteNameChanged(noteName) {
          this.setState({
              note: {
                  name: noteName,
                  touched: true,
              }
          })
    }

    noteFolderChanged(noteFolder) {
        this.setState({
            folder: {
                name: noteFolder,
                touched: true,
            }
        })
    }

    noteContentChanged(noteContent) {
        this.setState({
            content: {
                copy: noteContent,
                touched: true,
            }
        })
    }

    validateName() {
        const name = this.state.note.name.trim();
        if (name.length === 0) {
            return "Note name is required."
        }
    }

    validateFolder() {
        const folder = parseInt(this.state.folder.name);
        if (typeof folder !== "number") {
            return "Please select a folder."
        }
    }

    validateContent() {
        const content = this.state.content.copy.trim();
        if (content.length === 0) {
            return "Please write content for your note."
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const noteName = this.state.note.name;
        const noteFolder = this.state.folder.name;
        const noteContent = this.state.content.copy;
        const newNote = {
            content: noteContent,
            folder: noteFolder,
            name: noteName,
        }
        
        fetch(`${config.API_ENDPOINT}api/notes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
              },
            body: JSON.stringify(newNote), 
          })
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status)
            }
            return res.json()
        })
        .then(data => {
            this.context.handleAddNote(data)
        })
        .catch(error => {
            console.error(error)
          });
        this.props.handleFormToButton(e);
    }

    render() {
        const folderDropdown = Object.keys(this.context.foldersStore).map((folder, i) => {
            const id = this.context.foldersStore[i].id;
            const name = this.context.foldersStore[i].name;
            return <option value={id} key={id}>{name}</option>
        })

        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <fieldset>
                    <legend>Create new note</legend>
                    <label htmlFor="note-name">Note name: </label>
                    <input
                        type="text"
                        id="note-name"
                        name="new-note"
                        onChange={e => this.noteNameChanged(e.target.value)}
                    />
                    <br />
                    {this.state.note.touched && (
                        <ValidationError message={this.validateName()} />
                    )}
                    <br />
                    <label htmlFor="note-folder">Folder: </label>
                    <select id="note-folder" name="new-note" onChange={e => this.noteFolderChanged(e.target.value)}>
                    <option value="">--select a folder--</option>
                        {folderDropdown}
                    </select>
                    <br />
                    {this.state.folder.touched && (
                        <ValidationError message={this.validateFolder()} />
                    )}
                    <br />
                    <label htmlFor="note-content">Content:</label>
                    <textarea
                        id="note-content"
                        name="new-note"
                        rows="4"
                        cols="50"
                        onChange={e => this.noteContentChanged(e.target.value)}
                    />
                    {this.state.content.touched && (
                        <ValidationError message={this.validateContent()} />
                    )}
                    <br />
                    <div className="button-group">
                        <button
                            type="submit"
                            className="new-folder-buttons"
                            disabled={
                                this.validateName() ||
                                this.validateFolder() ||
                                this.validateContent()
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

AddNote.propTypes = {
    handleFormToButton: PropTypes.func,
}

export default AddNote;