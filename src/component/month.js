import React from "react";
import getMonthData from "../logic/calendar";
import {NavLink} from "react-router-dom";
import classes from './month.module.css';

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
    const currentDay = new Date();

    const weekData = weekDaysNames.map(name => {
        return (
            <th className={classes.week} key={name}>{name}</th>
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
                        return  <td className={className} key={index}>{date.getDate()}</td>
                    } else {
                        return <td key={index} />
                    }
                })}
            </tr>
            )
    })
    return (
        <div className={classes.container}>
            <div className={classes.monthName}>
            {/*{props.montNumber},*/}
            <NavLink to={{
                pathname: `/month/${props.monthName}`,
                state: {
                    monthName: props.monthName,
                    monthNumber: props.monthNumber,
                    weekDaysNames:  weekDaysNames,
                    monthDate: monthDate
                }
            }}>{props.monthName}</NavLink>
            </div>
               <table>
                   <thead>
                   <tr className={classes.weekDay}>
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