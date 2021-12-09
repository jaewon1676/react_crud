/* eslint-disable */
import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {AddUser} from './components/AddUser';
import {EditUser} from './components/EditUser';
import {Home} from './components/Home';
import {GlobalProvider} from './context/GlobalState';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div
            style={{
                maxWidth: '30rem',
                margin: '4rem auto'
            }}>
            <GlobalProvider>
                <Router>
                    <Switch>
                        <Route exact="exact" path="/" component={Home}/>
                        <Route path="/AddUser" component={AddUser}/>
                        <Route path="/EditUser" component={EditUser}/>
                    </Switch>
                </Router>
            </GlobalProvider>

        </div>
    )
}

export default App;