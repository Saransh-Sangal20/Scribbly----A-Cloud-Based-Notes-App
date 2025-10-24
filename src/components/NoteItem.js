import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

export default function NoteItem(props) {
    const context = useContext(noteContext);
    const {deleteNote} = context
    const handleDeleteNote = (id) => {
        deleteNote(id);
    }
    return (
        <div className='col-md-3 my-3'>
            <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{props.note.title}</h5>
                        <p className="card-text">{props.note.description}</p>
                        <i className="fa-solid fa-pen-to-square"></i>
                        <i className="fa-solid fa-trash mx-2" onClick = {()=> {handleDeleteNote(props.note._id)}}></i>
                        {/* onclick is written in such a way that it calls the function only when clicked */}
                    </div>
            </div>
        </div>
    )
}
