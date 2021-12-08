/* eslint-disable */
import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {AddUser} from './components/AddUser';
import {EditUser} from './components/EditUser';
import {Home} from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div
            style={{
                maxWidth: '30rem',
                margin: '4rem auto'
            }}>
            <Router>
                <Switch>
                    <Route exact="exact" path="/" component={Home}/>
                    <Route path="/AddUser" component={AddUser}/>
                    <Route path="/EditUser" component={EditUser}/>

                </Switch>
            </Router>
        </div>
    )
}

export default App;