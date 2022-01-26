import React from "react";
import { nanoid } from "nanoid";

function NotesButtons( {selectDay, setNotes, notes, text, setText, editMode, setEditMode} ) {

    function pushNotes(selectDay) {
        let { day, month, year } = selectDay;
            let obj = {
                'id': nanoid(),
                'year': year,
                'month': month,
                'day': day,
                'text': text,
            }
        if (editMode === null) {
            setNotes([...notes, obj]);
            setText('');
        } else {
            setNotes(notes.map(note => {
                if (note.id === editMode) {
                    note.text = text;
                    setEditMode(null)
                    setText('')
                }
                return note;
            }))
        }

    }

    return <div className="btnWrap">
        <button onClick={ () => text !== '' ? pushNotes(selectDay) : setText('Введите текст заметки!') }>{editMode === null ? 'Add Notes' : 'Save change'}</button>
    </div>
}

export default NotesButtons;