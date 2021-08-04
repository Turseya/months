import React from "react"
import {NavLink, useLocation} from "react-router-dom";
import classes from "./oneMonth.module.css";

const OneMonth = () => {
    const currentDay = new Date();
    const location = useLocation()

    const {monthName, monthNumber, weekDaysNames, monthDate} = location.state

    const weekData = weekDaysNames.map(name => {
        return (
            <th key={name}>{name}</th>
        )
    })
    const result = monthDate.map((week, index) => {
        return (
            <tr key={index}>
                {week.map((date,index) => {
                    if (date != undefined) {
                        let className = "default"
                        if (date.getDate() == currentDay.getDate() && date.getMonth() == currentDay.getMonth()) {
                            className = classes.active
                        }
                        return (
                        <td className={className} key={index}>
                            <NavLink className={classes.items} to={{
                                pathname: `/day/${date.getDate()}`,
                                state: {
                                    monthName: monthName,
                                    monthNumber: monthNumber,
                                    dayNumber: date.getDate()
                                }
                            }}>
                                {date.getDate()}
                            </NavLink>
                        </td>
                        )}else {
                        return <td key={index} />
                    }
                }
                    )
                }
            </tr>
        )
    })
    return (
        <div className={classes.oneMonthWrapp}>
            <div className={classes.monthName}>
                <h3>{monthName}</h3></div>
            <table>
                <thead>
                <tr>
                    {weekData}
                </tr>
                </thead>
                <tbody>
                {result}
                </tbody>
            </table>

        </div>
    )


}

export default OneMonth;