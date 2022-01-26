import React, { useState } from "react";
import Calendar from "./Calendar";
import NavCalendar from "./navCalendar";
import DisplayNameMonth from "./displayNameMonth";
import Notes from "./notes";

let yearNow = new Date().getFullYear();
let monthNow = new Date().getMonth();

const now = {
    'day' : new Date().getDate(),
    'month': new Date().getMonth(),
    'year': new Date().getFullYear(),
}


//не знаю как вынести функцию загрузки из локалсторедж в отдельный компонент
function locStorMount() {
    if ( !localStorage.getItem('notes')) {
        return [];
    } else {
        return JSON.parse(localStorage.getItem('notes'));
    }
}

function Organizer () {
    const [year, setYear] = useState(yearNow)
    const [month,setMonth] = useState(monthNow);
    const [selectDay, setSelectDay] = useState(now);
    const [notes, setNotes] = useState(locStorMount());

    localStorage.setItem('notes', JSON.stringify(notes));

    let alldays = new Date(year, month + 1, 0).getDate();
    let lastDayPreWeek = new Date(year, month, 0).getDay();

    let arr = [];

    for (let i = 1; i <= alldays; i++) {
        arr.push({
            'day': i,
            'month': month,
            'year': year,
        })
    }

    for (let i = new Date(year, month, 0).getDate(); i > new Date(year, month, 0).getDate() - lastDayPreWeek ; i-- ) {
        arr.unshift({
            'day': i,
            'month': month === 0 ? 11 : month - 1,
            'year': month === 0 ? year - 1 : year,
        })
    }

    let arr2 = [];
    for (let i = 1; i <= 42 - arr.length; i++) {
        
        arr2.push({
            'day': i,
            'month': month === 11 ? 0 : month + 1,
            'year': month === 11 ? year + 1 : year,
        })
        
    }
    let resultArr = [...arr, ...arr2];

    return <>
        <div className="calWrap">
            <DisplayNameMonth year={year} month={month} />
            <Calendar calendar={resultArr} month={month} selectDay={selectDay} setSelectDay={setSelectDay} notes={notes}/>
            <NavCalendar year={year} setYear={setYear} month={month} setMonth={setMonth} setSelectDay={setSelectDay} now={now} />
        </div>
        <Notes selectDay={selectDay} notes={notes} setNotes={setNotes} />
    </>
}

export default Organizer;
