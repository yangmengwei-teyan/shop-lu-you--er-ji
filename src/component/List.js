import React, { Component } from 'react';
import {NavLink,Route} from 'react-router-dom'
import MyView from '../router/myView'

class List extends Component {
    onClick=(item)=>{
        
    }
    render() {
       console.log(this.props)
       const {child}=this.props
    //    let newArr=list.filter(item=>!item.redirect)
    //    console.log(newArr)
        return <div>
            <div className="list-top">
               {
               child.map((item,index)=>{
                       return <NavLink to={item.to} key={index}>
                       {item.title}
                       </NavLink>
                   })
               } 

            </div>
            <div>
            {
                child.map((item,index)=>{
                        return <Route component={item.component} to={item.to} key={index}>
                      
                        </Route>
                    })
                } 
        </div>
        </div>
    }
}

export default List;