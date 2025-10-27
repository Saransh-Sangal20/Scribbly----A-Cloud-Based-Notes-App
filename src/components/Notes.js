import React from 'react'
import { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

export default function Notes() {
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;
    const [note, setnote] = useState({etitle: "", edescription: "", etag: ""});  // initially each field of each note is empty

    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, [])

    const refbtn = useRef(null);  // useRef is used to reference an element directly
    const refClose = useRef(null);
    const updatenote = (currentNote) => {
        refbtn.current.click();  // programmatically clicking the button to open the modal
        setnote({etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
    }

    const handleUpdateNote = (e) => {
        e.preventDefault();  // to prevent the default behaviour of form submission which reloads the page
        console.log(note);
        refClose.current.click();  // programmatically clicking the close button to close the modal
    }

    const handleChange = (e) => {
        setnote({...note, [e.target.name]: e.target.value});  // this means copy the existing note state and update the field which is changed
    }

    return (
        <>
            <AddNote />
            <button type="button" ref={refbtn} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={handleChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleUpdateNote}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-3'>
                <h2>Your Notes</h2>
                {notes.map((note) => {
                    return <NoteItem key={note._id} updatenote={updatenote} note={note} />
                })}
            </div>
        </>
    )
}
