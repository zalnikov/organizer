import React, { useState } from "react";

function NotesText ({ setNotes }) {
    const [text, setText] = useState('');


    return <textarea cols="30" rows="10" value={text} onChange={(event) => setText(event.target.value)} ></textarea>
}

export default NotesText;