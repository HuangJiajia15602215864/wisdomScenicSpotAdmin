<template>
  <div class="sidebar">
<<<<<<< HEAD
    <el-aside style="width:200px; color: #fff;">
      <div class="header">
        <i class="logo el-icon-s-tools" style="color:chartreuse"></i>
        <span class="title">智慧景区管理系统</span>
      </div>
      <el-menu :default-openeds="['1']" router :default-active="$route.path" unique-opened @select="choiceSidebarItem">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-date icon-item"></i>景区信息管理</template>
          <el-menu-item-group>
            <el-menu-item index="/home/scenicSpotIntro">景点介绍</el-menu-item>
            <el-menu-item index="/home/activityInfo">活动资讯</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-phone-outline icon-item"></i>预约信息管理</template>
          <el-menu-item-group>
            <el-menu-item index="/home/bookParking">预约停车</el-menu-item>
            <el-menu-item index="2-2">购票信息</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-s-marketing icon-item"></i>数据可视化</template>
          <el-menu-item-group>
            <el-menu-item index="3-1">景区客流</el-menu-item>
            <el-menu-item index="3-2">售票情况</el-menu-item>
            <el-menu-item index="3-3">客流热力图</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
=======
      <el-aside style="width:200px; color: #fff;">
       <div class="header">
           <i class="logo el-icon-s-tools" style="color:chartreuse"></i>
           <span class="title">智慧景区管理系统</span>
       </div>
        <el-menu :default-openeds="['1']" router :default-active="$route.path">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-date icon-item"></i>景区信息管理</template>
            <el-menu-item-group>
              <el-menu-item index="/home/scenicSpotIntro">景点介绍</el-menu-item>
              <el-menu-item index="/home/activityInfo">活动资讯</el-menu-item>
            </el-menu-item-group>            
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-phone-outline icon-item"></i>预约信息管理</template>
            <el-menu-item-group>
              <el-menu-item index="/home/parking">预约停车</el-menu-item>
              <el-menu-item index="/home/buyTickets">购票信息</el-menu-item>
            </el-menu-item-group>            
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-s-marketing icon-item"></i>数据可视化</template>
            <el-menu-item-group>
              <el-menu-item index="/home/scenicSpotTraffic">景区客流</el-menu-item>
              <el-menu-item index="/home/saleTickets">售票情况</el-menu-item>
              <el-menu-item index="/home/heatMap">客流热力图</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
>>>>>>> 18295525f6db1bd161bba8792f66634e30ad6e51
  </div>
</template>

<script>
  export default {
    name: 'sidebar',
    data() {
      return {

      }
    },
    watch: {

    },
    mounted() {
      this.choiceSidebarItem();
    },
    methods: {
      choiceSidebarItem(e) {
        this.$nextTick(() => {
          var item = document.getElementsByClassName('is-active');
          var submenu_title = item[0].getElementsByClassName('el-submenu__title')[0].innerText;
          var item_title = item[1].innerHTML;
          this.$emit('choiceSidebar', submenu_title, item_title);
        })
      }

    }
  }

</script>

<style rel="stylesheet/scss" lang="scss" scope>
  .sidebar {
    z-index: 1000;
  }

  .el-aside {
    overflow: hidden;
    height: 100%;
    background-color: #304156;
    position: fixed;
    left: 0;
    top: 0;

    .header {
      padding: 15px 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      border-bottom: 1px solid #fff;
    }

    .logo {
      width: 30px;
      height: 30px;
      display: inline-block;
      border-radius: 50%;
      padding: auto;
    }

    .el-icon-s-tools {
      font-size: 36px;
    }

    .title {
      font-size: 16px;
      color: #fff;

    }

  }

  .el-menu {
    background-color: #304156;

    i,
    .el-submenu__icon-arrow {
      color: #fff;
    }

    .icon-item {
      margin-left: -10px;
      margin-right: 10px;
    }

    .el-menu-item-group__title {
      padding: 0;
    }

    .el-submenu__title {
      color: #fff;
      border: 0;
    }

    .el-menu-item {
      color: #fff;
    }

    .el-submenu__title:hover {
      color: #fff;
      background-color: #304156;
    }

    .el-menu-item:hover {
      color: #409EFF !important;
      background-color: #263445 !important;
    }

    .el-menu-item-group .is-active {
      color: #409EFF;
      background-color: #263445;
    }
  }

</style>
