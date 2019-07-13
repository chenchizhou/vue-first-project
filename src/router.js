import VueRouter from "vue-router";

import account from './main/account.vue'
import goodslist from './main/goodslist.vue'


import login from './component/login.vue'
import register from './component/register.vue'

var router = new VueRouter({
    routes:[
        {path:'/account',component:account,children:[
            {path:'/login',component:login},
            {path:'/register',component:register}
]},
        {path:'/goodslist',component:goodslist}
    ]
})

export default(router)