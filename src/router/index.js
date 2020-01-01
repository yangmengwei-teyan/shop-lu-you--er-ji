import React, { Component } from 'react';
import MyView  from './myView'
import list from './routerConfig'

class RootView extends Component {
    render() {
        return (
            <div>
              <MyView list={list}></MyView>  
            </div>
        );
    }
}

export default RootView;