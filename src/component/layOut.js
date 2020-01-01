import React, { Component } from 'react';
import {NavLink,Route} from 'react-router-dom'
import Home from './Home'
import Find from './Find'
import My from './My'
import List from './List'
//二级
import All from './list/All'
import Many from './list/Many'
import User from './list/User'
class LayOut extends Component {
    state={
        list:[
            {
                title:'首页',
                to:'/home',
                component:Home,
                exact:true
            },{
                title:'发现',
                to:'/find',
                component:Find  
            },{
                title:'订单',
                to:'/list',
                component:List,
                children:[
                    {
                      title:"全部",
                      to:'/list/all',
                      compomemt:All
                    },{
                        title:"代付款",
                        to:'/list/my',
                        compomemt:Many 
                    },{
                        title:"已付款",
                        to:'/list/my',
                        compomemt:User 
                    }
                ]
            },{
                title:'我的',
                to:'/my',
                component:My
            }
        ]
    }
    render() {
        const {list}=this.state
        return (
            <div>
                <div className="wrap">
                <div className="header">
              
                {/**  {
                //       list.map((item,index)=>{
                //           return <div>{item}</div>
                //       })
                //   } */}
                 
                  
                </div>
                 <div className="main">
                 {
                    list.map((item, index) => {
                        return item.exact?<Route exact path={ item.to } render={ () => {
                            let Con = item.component
                            return <Con child = { item.children }/>
                        }} key= { index }/>:<Route path={ item.to } render={ () => {
                            let Con = item.component
                            return <Con child = { item.children }/>
                        }} key= { index }/>
                    })
                } 
               
                 </div>
                 <div className="footer">
                 {
                    list.map((item,index)=>{
                        return item.exact?<NavLink exact to={ item.to } key= { index }>
                        { item.title }
                    </NavLink>:<NavLink to={ item.to } key= { index }>
                        { item.title }
                    </NavLink>
                  })
                }
                 </div>
                </div>
            </div>
        );
    }
}

export default LayOut;