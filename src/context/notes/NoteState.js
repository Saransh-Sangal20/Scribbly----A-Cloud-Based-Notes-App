import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "https://scribbly-backend-bwyp.onrender.com";
    const notesInitial = [];  // state variable noteInitial

    // get notes function
    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchAllNotes`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
        })
        const json = await response.json();
        setNotes(json);
    }

    // add note function
    const addNote = async (title, description, tag) => {
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ title, description, tag })
        })
        const note = await response.json();
        setNotes(notes.concat(note));
    }

    // delete note function
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
        })
        const json = await response.json();
        console.log(json);

        const newNotes = notes.filter((note) => { return (note._id !== id) });
        setNotes(newNotes);
    }

    // edit note function
    const editNote = async (id, title, description, tag) => {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ title, description, tag })
        })
        const json = await response.json();
        console.log(json);

        let newNotes = JSON.parse(JSON.stringify(notes));  // deep copy of notes state

        for (let i = 0; i < newNotes.length; i++) {    // iteratively searching through notes to find the note to be edited
            let element = newNotes[i];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
                newNotes[i] = element;
                break;
            }
        }
        console.log(newNotes);
        setNotes(newNotes);  // updating the state with the edited note
    }

    const [notes, setNotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value={{ notes, getNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
// in NoteState.js we will define our state after writing a common boilerplate code