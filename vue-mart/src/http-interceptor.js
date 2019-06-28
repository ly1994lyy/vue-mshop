//拦截axios所哟http请求，预先放入token请求头

import axios from "axios";
import store from './store'
import router from "./router";

axios.interceptors.request.use(
    config => {
        if(store.state.token){
            config.headers.token = store.state.token
        }
        return config
    }
)


axios.interceptors.response.use(
    response =>{
        //如果code是-1.说明已经注销或者token过期，此时需要重新登录并且清理本地缓存信息
        if(response.status===200){
            const data = response.data
            if(data.code==-1){
                store.commit('setToken','')
                localStorage.removeItem('token')
                router.push({
                    path:'/login',
                    query:router.currentRoute.path
                })
            }
        }
        return response
    }
)