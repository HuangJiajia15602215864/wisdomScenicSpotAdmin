<template>
  <div class="layout narbar">
    <el-header style="font-size: 12px">
      <el-breadcrumb  class="breadcrumb" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item>{{breadcrumbOne}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{breadcrumbTwo}}</el-breadcrumb-item>
      </el-breadcrumb>
      <el-menu class="el-menu-demo" mode="horizontal">
      <el-submenu index="1">
        <template slot="title">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </template>
        <el-menu-item index="2-1">超级管理员</el-menu-item>
        <el-menu-item index="2-2">退出登录</el-menu-item>
      </el-submenu>
      </el-menu>
    </el-header>
  </div>
</template>

<script>
  export default {
    name: 'narbar',
    data() {
      return {}
    },
    props:{
      breadcrumbOne:String,
      breadcrumbTwo:String
    },
    watch: {

    },
    methods: {

    }
  }

</script>

<style rel="stylesheet/scss" lang="scss" scope>
  .narbar{
      position: fixed;
      left: 200px;
      top: 0;
      z-index: 100;
      background-color: #fff;
      height: 60px;
  }
  .el-header {
    color: #333;
    box-shadow: 2px 1px 1px 1px #ddd;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0;
  }
  .breadcrumb{
    margin-left: -300px;
    margin-right: 50px;
  }
  .el-menu-demo{
    background-color: #fff;
    border: 0;
    margin-right: -100px;
  }
  .el-menu--horizontal .el-menu-item:hover{
    color: #fff!important;
  }

</style>
