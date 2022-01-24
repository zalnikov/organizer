import React from "react";

function NavCalendar( { month, setMonth, year, setYear, setSelectDay } ) {

    const nowDay = {
        'day' : new Date().getDate(),
        'month': new Date().getMonth(),
        'year': new Date().getFullYear(),
    }

    function prevMonth() {
        if (month === 0) {
            setMonth(11);
            setYear(year - 1);
        } else {
            setMonth(month -1);
        }
    }

    function nextMonth() {
        if (month === 11) {
            setMonth(0);
            setYear(year + 1);
        } else {
            setMonth(month + 1);
        }
    }

    function now() {
        setYear(new Date().getFullYear());
        setMonth(new Date().getMonth());
        setSelectDay(nowDay);
    }


    return <div>
            <button onClick={() => prevMonth()}>Prev</button>
            <button onClick={() => now()}>Now</button>
            <button onClick={() => nextMonth()}>Next</button>
        </div>
}

export default NavCalendar;