import Home from '../component/Home'
import Find from '../component/Find'
import List from '../component/List'
import My from '../component/My'

import All from '../component/list/All'
import Many from '../component/list/Many'
// import Used from '../component/Used'
export default[
    {
        title: '首页',
        to: '/home',
        component: Home,
        exact: true  
    },{
        title: '发现',
        to: '/find',
        component: Find  
    },{
        title: '订单',
        to: '/list',
        component: List, 
        children:[
            {
                title: '全部',
                to: '/list/all',
                component: All  
            },{
                title: '待付款',
                to: '/list/many',
                component: Many  
            },{
                title: '待使用',
                to: '/list/used',
               
            },{
                redirect: '/list/all',
                from: '/list'  
            }
        ]
    },{
        title: '我的',
        to: '/my',
        component: My  
    },{
        redirect: '/list',
        from: '/'  
    }
]