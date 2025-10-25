import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = [];  // state variable noteInitial

    // get notes function
    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchAllNotes`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhkNTdmZjc0YmRkMjkyODQ3OTE5NjUxIn0sImlhdCI6MTc1ODg5NDU0NX0.jAFEOS18ZqHHGED4z7x3LHbF_2ZGe9EihCOrLRJTlnA"
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
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhkNTdmZjc0YmRkMjkyODQ3OTE5NjUxIn0sImlhdCI6MTc1ODg5NDU0NX0.jAFEOS18ZqHHGED4z7x3LHbF_2ZGe9EihCOrLRJTlnA"
            },
            body: JSON.stringify({ title, description, tag })
        })
        const json = await response.json();
        console.log(json);

        const note = {
            "_id": "68d77b521f9dia16d0c65fba0",
            "user": "68d57ff74bdd292847919651",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2025-09-27T05:51:14.582Z",
            "__v": 0
        }
        setNotes(notes.concat(note));
    }

    // delete note function
    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => { return (note._id !== id) });
        setNotes(newNotes);
    }

    // edit note function
    const editNote = async (id, title, description, tag) => {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhkNTdmZjc0YmRkMjkyODQ3OTE5NjUxIn0sImlhdCI6MTc1ODg5NDU0NX0.jAFEOS18ZqHHGED4z7x3LHbF_2ZGe9EihCOrLRJTlnA"
            },
            body: JSON.stringify({ title, description, tag })
        })
        const json = await response.json();
        console.log(json);

        for (let i = 0; i < notes.length; i++) {    // iteratively searching through notes to find the note to be edited
            const element = notes[i];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
                break;
            }
        }

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