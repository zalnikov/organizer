import React from "react";

function NotesText ({ text, setText}) {


    return <textarea cols="30" rows="10" value={text} onChange={(event) => setText(event.target.value)} ></textarea>
}

export default NotesText;