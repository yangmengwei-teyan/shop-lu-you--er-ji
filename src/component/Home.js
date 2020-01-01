import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
class Home extends Component {
    render() {
        console.log(this.props)
        const {child}=this.props
        return (
            <div className="home-top">
                 {
                     child.map((item,index)=>{
                         return <NavLink to={item.to} key={index}>
                           {item.title}
                         </NavLink>
                     })
                 }
            </div>
        );
    }
}

export default Home;