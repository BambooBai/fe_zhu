import axios from './index'

export function getData() {
    return axios.request({
        methods: 'get',
        params: {
            name: 'dabai'
        }
    })
}

// 行情
export function pigPrice(params) {
    return axios.request({
        methods: 'get',
        url: 'unit',
        params,
    })
}

// 分时图
export function pigFenShi(params) {
    return axios.request({
        methods: 'get',
        url: 'getfenshi',
        params
    })
}
export function pigPinglun(params) {
    return axios.request({
        methods: 'get',
        url: 'post_list',
        params
        
    })
}