import React from "react";
import { nanoid } from 'nanoid'

function NotesList( { notes, setNotes, selectDay, text, setText, editMode, setEditMode } ) {
    let notesSelectDay = notes.filter(note => {
        if (note.year === selectDay.year && note.month === selectDay.month && note.day === selectDay.day) {
            return true;
        } else {
            return false;
        }
    })

    function editText(note) {
        setEditMode(note.id);
        setText(note.text);
    }

    function delNote(note) {
        setNotes(notes.filter(noteInNotes => {
            if (noteInNotes.id === note.id) {
                return false
            } else {
                return true
            }
        }))
        setText('');
        setEditMode(null);
    }

    let result = notesSelectDay.map(note => {
        return <div key={nanoid()} className="noteList">
            <div key={nanoid()} onClick={() => editText(note)}>{note.text}</div>
            <button onClick={() =>delNote(note) }>X</button>
        </div>
    })
    

    return <div className="noteListWrap">
        {result}
    </div>
}

export default NotesList;