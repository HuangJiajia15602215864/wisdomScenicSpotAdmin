<template>
  <div class="layout">
    <el-container class="container_lager">
      <Sidebar @choiceSidebar='choiceSidebar' />
      <el-container class="container_small">
        <el-header>
          <Narbar :breadcrumbOne='breadcrumbOne' :breadcrumbTwo='breadcrumbTwo' />
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
      return {
        breadcrumbOne: '',
        breadcrumbTwo: ''
      }
    },
    components: {
      Sidebar,
      Narbar
    },
    watch: {

    },
    methods: {
      choiceSidebar(submenu_title, item_title) {
        this.breadcrumbOne=submenu_title;
        this.breadcrumbTwo=item_title;
      }
    }
  }

</script>

<style rel="stylesheet/scss" lang="scss" scope>
  .layout {
    height: 100%;
    width: 100%;
  }

  .container_lager {
    height: 100%;
  }

  .main {
    min-height: 550px;
    background: #eeeeee;
    padding-left: 220px;
  }

</style>
