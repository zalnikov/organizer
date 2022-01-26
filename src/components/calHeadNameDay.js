import React from "react";

function CalHeadNameDay () {
    let arr = ['пн', 'вт', 'ср', 'чт', 'пт','сб', 'вс'];
    let result = arr.map(day => {
        return <th><td>{day}</td></th>
    })

    return <>{result}</>
}

export default CalHeadNameDay;