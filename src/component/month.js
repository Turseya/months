import React from "react";
import getMonthData from "../logic/calendar";
import {NavLink} from "react-router-dom";

const Month = (props) => {
    const weekDaysNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    // const monthDate = [
    //     [undefined, undefined, new Date(), new Date(), new Date(), new Date(), new Date()],
    //     [new Date(), new Date(), new Date(), new Date(),new Date(), new Date(), new Date()],
    //     [new Date(), new Date(), new Date(), new Date(),new Date(), new Date(), new Date()],
    //     [new Date(), new Date(), new Date(), new Date(),new Date(), new Date(), new Date()],
    //     [new Date(), new Date(), new Date(), new Date(), undefined, undefined, undefined],
    //     ];
    const monthDate = getMonthData(props.year, props.monthNumber);

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
            {/*{props.montNumber},*/}

            <NavLink to={{
                pathname: `/month/${props.monthName}`,
                state: {
                    monthName: props.monthName,
                    monthNumber: props.monthNumber,
                    weekDaysNames:  weekDaysNames,
                    monthDate: monthDate
                }
            }}>{props.monthName}
            </NavLink>
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

export default Month;