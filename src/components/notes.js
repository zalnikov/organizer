import React, { useState } from "react";
import NotesText from "./notexText";
import NotesButtons from "./notesButtons";
import NotesList from "./notesList";


function Notes( { selectDay, notes, setNotes } ) {
    const [text, setText] = useState('');
    const [editMode, setEditMode] = useState(null);

    return <div className="notesMainWrap">
        <NotesText text={text} setText={setText}/>
        <NotesButtons selectDay={selectDay} setNotes={setNotes} notes={notes} text={text} setText={setText} editMode={editMode} setEditMode={setEditMode} />
        <NotesList notes={notes} setNotes={setNotes} selectDay={selectDay} text={text} setText={setText} setEditMode={setEditMode}/>
    </div> 
}

export default Notes;