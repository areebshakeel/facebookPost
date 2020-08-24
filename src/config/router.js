import React from 'react'
import Home from '../view/home'
import SubComponent from '../components/subcomponent'


import {
    BrowserRouter as Router, //alias (nickname)
    Switch,
    Route
} from "react-router-dom";

export default function MainRouter(){
    return(
        <div>
            <Router>
                <Route path="/" exact>
                    <SubComponent/>
                </Route>
            </Router>
        </div>
    )
}