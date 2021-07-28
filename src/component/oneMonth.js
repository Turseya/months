import React from "react"
import {useLocation} from "react-router-dom";

const OneMonth = () => {
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
                {week.map((date,index) => date ?
                    <td key={index}>{date.getDate()}</td>
                    :
                    <td key={index} />)}
            </tr>
        )
    })

    return (
        <div>
            {monthName}
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