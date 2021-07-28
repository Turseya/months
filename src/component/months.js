import React from "react";
import Month from "./month";

const Months = (props) => {
    const date = new Date();
    const year = date.getFullYear();
    const months = [
        'January', 'February', 'Mart', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ]
    const monthComponent = months.map((month, index) => {
        return <Month key={index} year={year} monthNumber={index} monthName={month} />
    })

    return (
        <div>
            <div>{monthComponent}</div>
        </div>
    )

}

export default Months;