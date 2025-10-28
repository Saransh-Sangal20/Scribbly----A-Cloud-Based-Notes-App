import React from 'react'
import { useContext, useState} from 'react';
import noteContext from '../context/notes/noteContext';

export default function AddNote() {
    const context = useContext(noteContext);
    const {addNote} = context;
    const [note, setnote] = useState({title: "", description: "", tag: ""});  // initially each field of each note is empty

    const handleAddNote = (e) => {
        e.preventDefault();  // to prevent the default behaviour of form submission which reloads the page
        addNote(note.title, note.description, note.tag);
        setnote({title: "", description: "", tag: ""});  // clear the form after adding the note
    }

    const handleChange = (e) => {
        setnote({...note, [e.target.name]: e.target.value});  // this means copy the existing note state and update the field which is changed
    }
    return (
        <div>
            <div className='container my-3'>
                <h2>Add a Note</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={handleChange} />
                    </div>
                    <button disabled={(note.title.length===0 || note.description.length===0 || note.tag.length===0)} type="submit" className="btn btn-primary" onClick={handleAddNote}>Add Note</button>
                </form>
            </div>
        </div>
    )
}
