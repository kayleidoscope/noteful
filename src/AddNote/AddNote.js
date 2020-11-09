import React, { Component} from 'react';
import Context from '../context';
import ValidationError from '../ValidationError/ValidationError';
import PropTypes from 'prop-types';
import moment from 'moment';
import './AddNote.css';

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
                name: "",
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
        console.log("noteContentChanged ran")
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
        const folder = this.state.folder.name.trim();
        if (folder.length === 0) {
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
        const newId = Math.random().toString(36).substring(2, 4)
        + Math.random().toString(36).substring(2, 4);
        const noteName = this.state.note.name;
        const noteFolder = this.state.folder.name;
        const noteContent = this.state.content.copy;
        const dateModified = moment().format()
        const newNote = {
            content: noteContent,
            folderId: noteFolder,
            id: newId,
            modified: dateModified,
            name: noteName,
        }
        fetch("http://localhost:9090/notes", {
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
            this.context.handleAddNote(data);
        });
        this.props.handleFormToButton(e);
    }

    render() {
        const folderDropdown = Object.keys(this.context.foldersStore).map((folder, i) => {
            const id = this.context.foldersStore[i].id;
            const name = this.context.foldersStore[i].name;
            return <option value={id}>{name}</option>
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
    message: PropTypes.string,
}

export default AddNote;