<template>
  <div>
    <h1>App组件</h1>

    <router-link to="/account">Account组件</router-link>
    <router-link to="/goodslist">Goodslist组件</router-link>

    <router-view></router-view>
    <br/>
    <mt-button type="primary" @click="show">primary</mt-button>
    <mt-button type="default">default</mt-button>
    <mt-button type="danger">danger</mt-button>
  </div>
</template>

<script>
//按需导入toast模块
import { Toast } from "mint-ui";


export default {
  data() {
    return {
        closeToast:null
    }
  },
  created(){
      this.getList()
  },
  methods: {
      //模拟发送请求,页面一上来就在加载数据
      getList(){
          setTimeout(()=>{
              this.closeToast.close()
          },3000)
      },


    show() {
      this.closeToast = Toast({
        message: "佩奇正在加载中",
        position: "middle",
        duration: -1,
        iconClass: 'glyphicon glyphicon-piggy-bank',//这是自己提供的图标
        className:'demo'//这是自定义的类名改变颜色

      })
    }
  }
}
</script>

<style>

</style>