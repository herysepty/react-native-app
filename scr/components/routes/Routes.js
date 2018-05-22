import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from '../home/Home.js'
import About from '../home/About.js'
import List from '../home/List.js'

const Routes = () => (
    <Router>
        <Scene key = "root">
            <Scene key = "home" component = {Home} title = "Home" initial = {true} />
            <Scene key = "about" component = {About} title = "About" />
            <Scene key = "list" component = {List} title = "List" />
        </Scene>
    </Router>
)
export default Routes