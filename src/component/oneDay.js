import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import classes from './oneDay.module.css';
import axios from "axios";

const OneDay = (props) => {
    const today = new Date();
    const year = today.getFullYear();
    const location = useLocation();
    const {monthName, dayNumber,  monthNumber} = location.state;
    const weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const day = new Date(year,  monthNumber, dayNumber - 1);
    const weekDaysName = weekDay[day.getDay()];
    const defaultItem = {
        "exercise": "",
        "repeats": 0,
        "weight": 0,
    }

    const [exercises, addExercise] = useState([]);
    const [item, setItem] = useState(defaultItem)

    // useEffect(() => {
    //     axios.get('http://localhost:3001/exercises').then(
    //         function (response) {
    //             addExercise(response.data)
    //         }
    //     ).catch(function (error) {
    //         console.log(error.request)
    //     });
    // },[])

    function handleChange(event) {
        setItem({...item, [event.target.name]: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault();
        // axios.post('http://localhost:3001/exercises/add-exercise', {
        //     "exercise":  item.exercise,
        //     "repeats": item.repeats,
        //     "weight": item.weight,
        // }).then(function (response) {
        //     console.log(response)
        // }).catch(function (error) {
        //     console.log("test")
        //     console.log(error)
        // });
        if (item.exercise.length !== 0 && item.repeats !== 0 && item.weight !== 0) {
            addExercise(exercises => [...exercises, {"exercise": item.exercise, "repeats": item.repeats, "weight": item.weight}])
            setItem(defaultItem)
        }
    }

    function deleteExercise(exerciseName) {
        const tempArray = [...exercises]
        exercises.forEach((element, index) => {
            if (element.exercise === exerciseName) {
              tempArray.splice(index, 1)
            }
        })

        addExercise(tempArray)
    }

    const exerciseList = exercises.map((element, key) => {
        return (
            <li key={key}>
                <p>exercise: {element.exercise}; repeats: {element.repeats}; weight:{element.weight}</p>
                <button onClick={() => {deleteExercise(element.exercise)}}>❌</button>
            </li>
        )
    })

    return (
        <div>
            <div className={classes.header}>
                <h3>{weekDaysName}</h3>
                <p>Today is {dayNumber} {monthName} {year}</p>
            </div>
            <div className={classes.activeExercis}>
                <h3 className={classes.top}>Active exercises</h3>
                <ul className={classes.list}>
                    {exerciseList}
                </ul>
                <form className={classes.formList} onSubmit={handleSubmit}>
                    <input type="text" name={'exercise'} value={item.exercise} onChange={handleChange} />
                    <input type="number" name={'repeats'} value={item.repeats} onChange={handleChange}/>
                    <input type="number" name={'weight'} value={item.weight} onChange={handleChange} />
                    <input type="submit" value={"Save"}/>
                </form>
            </div>

        </div>
    )
}
export default OneDay;