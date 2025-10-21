import React from 'react'

export default function NoteItem(props) {
    return (
        <div className='col-md-3 my-3'>
            <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{props.note.title}</h5>
                        <p className="card-text">{props.note.description}</p>
                        <i className="fa-solid fa-pen-to-square"></i>
                        <i className="fa-solid fa-trash mx-2"></i>
                    </div>
            </div>
        </div>
    )
}
