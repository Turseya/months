import React from "react";
import {Switch, Route} from "react-router-dom";
import Months from "./months";
import Month from "./month";
import OneMonth from "./oneMonth";


const Main = () => {
    return (
        <Switch>
            <Route exact path={"/"}>
                <Months />
            </Route>
            <Route path={"/month"}>
                <OneMonth />
            </Route>
        </Switch>
    )
}

export default Main;