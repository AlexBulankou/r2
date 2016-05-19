//https://github.com/reactjs/react-router/blob/cbdc49442aba5cc6f225ff5546ac5f4a217fa4ec/docs/API.md
//http://www.pshrmn.com/tutorials/react/react-router/
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import Layout from "./pages/Layout.js";
import Featured from "./pages/Featured.js";
import Archives from "./pages/Archive.js";
import Settings from "./pages/Settings.js";
import AppInsights from "./components/AppInsights.js"

const app = document.getElementById("app");
const routes = (
     <Route path="/" component={Layout}>
            <IndexRoute component={Featured}></IndexRoute>
            <Route path="archives" component={Archives}></Route>
            <Route path="featured" component={Featured}></Route>
            <Route path="settings" component={Settings}></Route>
        </Route>);

ReactDOM.render(   
    <Router history={hashHistory} routes={routes}/>,
 app);

AppInsights.initialize({instrumentationKey:"9620fb22-8eb0-4575-80df-696352b08283"});
AppInsights.trackTrace("hello");