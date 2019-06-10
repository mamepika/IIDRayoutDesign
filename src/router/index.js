import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Album from '@/components/album/Album'
import Setting from '@/components/setting/Setting'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'*',
            component:Home
        },
        {
            path:'/album',
            component: Album
        },
        {
            path:'/setting',
            component: Setting
        }
    ]
})