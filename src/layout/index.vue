<template>
  <div class="layout">
    <el-container class="container_lager">
      <Sidebar />
      <el-container class="container_small">
        <el-header>
          <Narbar />
        </el-header>
        <el-main class="main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Sidebar from "./components/Sidebar";
  import Narbar from './components/Narbar'
  export default {
    name: 'layout',
    data() {
      return {}
    },
    components: {
      Sidebar,
      Narbar
    },
    watch: {

    },
    methods: {

    }
  }

</script>

<style rel="stylesheet/scss" lang="scss" scope>
  .layout {
    height: 100%;
    width: 100%;
  }
  .container_lager{
      height: 100%; 
  }
  .main{
      min-height: 550px;
      background: #eeeeee;
      padding-left: 220px;
  }

</style>
