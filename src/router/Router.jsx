import React from "react";
import {
    Router as LocalRouter,
    Switch,
    Route,
} from "react-router-dom";
import {createBrowserHistory} from 'history';
import PrivateRoute from './privateRoute';
import Login from "../pages/login/Login";
// PrivateRoute need the token to be accessed
// Route can be accessed by anyone
export default function Router({...props}) {
    return (
        <LocalRouter history={createBrowserHistory()}>
            <Switch>
                <Route exact path="/login"><Login/></Route>
                <PrivateRoute exact path="/dashboard"><Login/></PrivateRoute>
            </Switch>
        </LocalRouter>
    );
}
