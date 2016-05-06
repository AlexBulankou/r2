import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import Layout from "./pages/Layout.js";
import Featured from "./pages/Featured.js";
import Archives from "./pages/Archive.js";
import Settings from "./pages/Settings.js";

const app = document.getElementById("app");
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Featured}></IndexRoute>
            <Route path="archives" component={Archives}></Route>
            <Route path="featured" component={Featured}></Route>
            <Route path="settings" component={Settings}></Route>
        </Route>
    </Router>, 
 app);