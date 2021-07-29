import React from "react";
import {useLocation} from "react-router-dom";

const OneDay = (props) => {
const today = new Date();
const year = today.getFullYear();
const location = useLocation();
const {monthName, dayNumber,  monthNumber} = location.state;
const weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const day = new Date(year,  monthNumber, dayNumber - 1);
const weekDaysName = weekDay[day.getDay()];


    return (
        <div>
            <h3>{weekDaysName}</h3>
            <p>Today is {dayNumber} {monthName} {year}</p>
        </div>
    )
}
export default OneDay;