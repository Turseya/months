import React from "react";
import {Switch, Route} from "react-router-dom";
import Months from "./months";
import OneMonth from "./oneMonth";
import OneDay from "./oneDay";


const Main = () => {
    return (
        <Switch>
            <Route exact path={"/"}>
                <Months />
            </Route>
            <Route path={"/month/:monthName"}>
                <OneMonth />
            </Route>
            <Route path={"/day/:dayNumber"} >
                <OneDay />
            </Route>
        </Switch>
    )
}

export default Main;