import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "68d77b4f1f9da16d0c65fb98",
            "user": "68d57ff74bdd292847919651",
            "title": "A New Day",
            "description": "Wakeup for a new morning",
            "tag": "reminder",
            "date": "2025-09-27T05:51:11.413Z",
            "__v": 0
        },
        {
            "_id": "68d77b511f9da16d0c65fb9a",
            "user": "68d57ff74bdd292847919651",
            "title": "A New Day",
            "description": "Wakeup for a new morning",
            "tag": "reminder",
            "date": "2025-09-27T05:51:13.951Z",
            "__v": 0
        },
        {
            "_id": "68d77b521f9da16d0c65fb9c",
            "user": "68d57ff74bdd292847919651",
            "title": "A New Day",
            "description": "Wakeup for a new morning",
            "tag": "reminder",
            "date": "2025-09-27T05:51:14.198Z",
            "__v": 0
        },
        {
            "_id": "68d77b521f9da16d0c65fb9e",
            "user": "68d57ff74bdd292847919651",
            "title": "A New Day",
            "description": "Wakeup for a new morning",
            "tag": "reminder",
            "date": "2025-09-27T05:51:14.378Z",
            "__v": 0
        },
        {
            "_id": "68d77b521f9da16d0c65fba0",
            "user": "68d57ff74bdd292847919651",
            "title": "A New Day",
            "description": "Wakeup for a new morning",
            "tag": "reminder",
            "date": "2025-09-27T05:51:14.582Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
// in NoteState.js we will define our state after writing a common boilerplate code