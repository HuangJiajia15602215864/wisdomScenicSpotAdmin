<template>
  <div id="bookParking">
    <el-button type="danger" round size="mini">预约停车情况表</el-button>
    <el-button type="danger" round size="mini">停车场3D地图</el-button>
    <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="A区" name="aArea">
        <ParkingTable></ParkingTable>
      </el-tab-pane>
      <el-tab-pane label="B区" name="bArea">
        停车场3D地图
      </el-tab-pane>
      <el-tab-pane label="C区" name="cArea">
        343543
      </el-tab-pane>
      <el-tab-pane label="D区" name="dArea">
        停车场3D地图
      </el-tab-pane>
      <el-tab-pane label="E区" name="eArea">
        343543
      </el-tab-pane>
      <el-tab-pane label="F区" name="fArea">
        停车场3D地图
      </el-tab-pane>
    </el-tabs>

  </div>
</template>
<script>
  import ParkingTable from '@/components/parkingTable'
  export default {
    name: 'bookParking',
    data() {
      return {
        activeName: 'aArea',
      };
    },
    components: {
      ParkingTable
    },
    mounted() {

    },
    methods: {

    },
  };

</script>

<style lang="scss" scope>
  #bookParking {
    margin: -10px;
  }

  .el-tabs {
    min-height: 490px;
    margin-top: 10px;

    .el-tabs__item {
      height: 30px !important;
      line-height: 30px !important;
      font-size: 14px !important;
    }
  }

</style>
