import React from "react";

function DisplayNameMonth( {  year, month } ) {
    const arrMonth = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
    return <div className="dispNamMonWrap">
        <div>{year}</div>
        <div>{arrMonth[month]}</div>
        </div>
}

export default DisplayNameMonth