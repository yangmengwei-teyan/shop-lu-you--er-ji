import React, { Component } from 'react';
import './App.scss';
import LayOut from './layOut'
import {BrowserRouter} from 'react-router-dom'
import '../mock'
class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <LayOut></LayOut>
            </BrowserRouter>
        )
    }
}

export default App;