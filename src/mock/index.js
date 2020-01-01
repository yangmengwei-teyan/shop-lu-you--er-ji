import Mock from 'mockjs'
 import list from './data.jsom'
Mock.mock('/getList', 'post', (res) => {
    let url = JSON.parse(res.body).params.url
    if (url === 'all') {
        return list
    } else if (url === 'many') {
        return list.filter(item => item.status == 0 )
    } else if (url === 'used') {
        return list.filter(item => item.status == 1 )
    }
})