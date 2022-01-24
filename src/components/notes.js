import React, { useState } from "react";
import NotesDisplay from "./notesDisplay";


function Notes() {
    const [notes, setNotes] = useState();

    return <div>
        <NotesDisplay setNotes={setNotes}/>
    </div> 
}

export default Notes;