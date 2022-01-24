import React from "react";
import NotesText from "./notexText";
import NotesButtons from "./notesButtons";

function NotesDisplay ({selectDay}) {
    return <div>
        <NotesText />
        <NotesButtons selectDay={selectDay}/>
    </div>
}

export default NotesDisplay;