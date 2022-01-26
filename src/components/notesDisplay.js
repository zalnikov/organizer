import React from "react";
import NotesText from "./notexText";
import NotesButtons from "./notesButtons";

function NotesDisplay ({ selectDay, setNotes, notes }) {
    return <div>
        <NotesText />
        <NotesButtons selectDay={selectDay} setNotes={setNotes} notes={notes} />
    </div>
}

export default NotesDisplay;