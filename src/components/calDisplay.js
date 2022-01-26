import React from "react";
import CalHeadNameDay from "./calHeadNameDay";
import { nanoid } from 'nanoid'

function CalDisplay ( { calendar, setSelectDay} ) {

    function normalizeCal(calendar) {
        let cal = [];
        let week = [];
        for (let i = 1 ; i <= calendar.length + 1; i++) {
            week.push(calendar[i - 1]);
            if (i % 7 === 0) {
                cal.push(week);
                week = [];
            }
        }
        return cal;
    }

    let result = normalizeCal(calendar).map(week => {
        return <tr key={nanoid()}>{week.map(day => {
            return <td key={nanoid()} className={day.class} onClick={() => {
                setSelectDay(day);
            }}>{day.day}</td>
        })}</tr>
    })

    return <table> 
        <thead>
            <CalHeadNameDay />
        </thead>
        <tbody>
            {result}
        </tbody>
    </table>
}

export default CalDisplay;