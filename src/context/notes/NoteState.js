import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const s1 = {
        "name": "Tanjiro",
        "class": "5b"
    }
    const [state, setState] = useState(s1);
    const updateState = () => {
        setTimeout(() => {
            setState({
                "name": "Zenitsu",
                "class": "5b"
            })
        }, 5000);
    }
    return (
        <NoteContext.Provider value = {{state, updateState}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
// in NoteState.js we will define our state aftr writing a common boilerplate code