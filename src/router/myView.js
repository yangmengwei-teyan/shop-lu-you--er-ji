import React, { Component } from 'react';
import {NavLink,Route,Redirect} from 'react-router-dom'
// import Home from './Home'
// import Find from './Find'
// import My from './My'
// import List from './List'
// //二级
// import All from './list/All'
// import Many from './list/Many'
// import User from './list/User'

class MyView extends Component {
  
    render() {
        const {list}=this.props
        console.log(list)
        return (
            <div>
                {
                 list.map((item,index)=>{
                      return <Route path={item.to} render={
                          (prop)=>{
                             let Com=item.com
                             if(item.children){
                                 return  <Com {...prop} list={item.children} key={index}></Com>
                             }else{
                                 return <Com {...prop}></Com>
                             }
                            
                          }
                      }></Route>
                  })  
                }
            </div>
        );
    }
}

export default MyView;