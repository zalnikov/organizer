import React, { useState } from "react";
import CalDisplay from "./calDisplay"

const now = {
    'day' : new Date().getDate(),
    'month': new Date().getMonth(),
    'year': new Date().getFullYear(),
}

function Calendar ( { calendar, month, selectDay, setSelectDay } ) {

    let result = calendar.map(day => {
        if (day.month === month) {
            day.class = 'active';
        } else {
            day.class = 'inactive';
        }
        if (day.day === new Date().getDate() && day.month === new Date().getMonth()) {
            day.class = 'now'
        }
        if (day.day === selectDay.day && day.month === selectDay.month) {
            day.class = 'select';
        }
        
        return day
    })
    
    return <CalDisplay calendar={calendar} setSelectDay={setSelectDay} />
}

export default Calendar;