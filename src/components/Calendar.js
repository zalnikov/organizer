import React from "react";
import CalDisplay from "./calDisplay"

function Calendar ( { calendar, month, selectDay, setSelectDay, notes } ) {

    //функция поиска дел в днях месяца для доболвения класса
    //если бы сообразил как сделал бы объект со структурой {year: {month:{day:{text:textNote}}}}
    // что бы не мусолить notes а сразу смотреть по году месяцу и дате есть ли что то в text (notes.year.month.day.text)
    
    function searchNotesInDay(day) {
        let arr = notes.filter(note => {
            if (note.year === day.year && note.month === day.month && note.day === day.day) {
                return true;
            } else {
                return false;
            }
        })

        if (arr.length > 0) {
            return true;
        } else {
            return false
        }
    }

    let result = calendar.map(day => {
        if (day.month === month) {
            day.class = 'active';
        } else {
            day.class = 'inactive';
        }
        if (day.day === new Date().getDate() && day.month === new Date().getMonth()) {
            day.class = 'now'
        }
        
        if(searchNotesInDay(day)) {
            day.class += ' note';
        }
        
        if (day.day === selectDay.day && day.month === selectDay.month) {
            day.class = 'select';
        }

        return day
    })
    
    return <CalDisplay calendar={result} setSelectDay={setSelectDay} />
}

export default Calendar;