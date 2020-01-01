import React, { Component } from 'react';
import Axios from 'axios'
class All extends Component {
    render() {
        // console.log(this.props.match.path.split('/')[2])
       
        return (
            <div>
              11  
            </div>
        );
    }
    componentDidMount(){
       const url=this.props.match.path.split('/')[2] 
       Axios.post('/getList',{
           params:{
               url
           }
       }).then(res=>{
           console.log(res)
       })
    }
}

export default All;