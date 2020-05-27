<template>
  <div id="bookParking">
    <el-button type="danger" round size="mini" @click="switchDisplay(1)">预约停车情况表</el-button>
    <el-button type="danger" round size="mini" @click="switchDisplay(2)">停车场3D地图</el-button>
    <el-tabs type="border-card" v-model="activeName" v-if="display===1" @tab-click="handleClick">
      <el-tab-pane label="A区" name="aArea">
        <ParkingTable :tableData='parkingData'></ParkingTable>
      </el-tab-pane>
      <el-tab-pane label="B区" name="bArea">
        <ParkingTable :tableData='parkingData'></ParkingTable>
      </el-tab-pane>
      <el-tab-pane label="C区" name="cArea">
        <ParkingTable :tableData='parkingData'></ParkingTable>
      </el-tab-pane>
      <el-tab-pane label="D区" name="dArea">
        <ParkingTable :tableData='parkingData'></ParkingTable>
      </el-tab-pane>
    </el-tabs>
    <iframe v-if="display===2" class="iframe" src="https://www.esmap.cn/sdk-demo/demo/Case/Park/index.html"></iframe>
  </div>
</template>
<script>
  import ParkingTable from '@/components/parkingTable'
  import {
    parkingByArea
  } from '@/utils/apply.url';
  export default {
    name: 'bookParking',
    data() {
      return {
        activeName: 'aArea',
        display: 1,
        parkingData: []
      };
    },
    components: {
      ParkingTable
    },
    mounted() {
      this.getParkingData(1);
    },
    methods: {
      timestampToTime(timestamp) {
        console.log(timestamp)
        if(timestamp==undefined) return '暂无';
        var date = new Date(timestamp);
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
        var H = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        var S = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        return Y + M + D + ' ' + H +m+ S;
      },
      getParkingData(value) {
        this.parkingData = [];
        parkingByArea({
          area: value
        }, 'get').then(res => {
          if (res.length != 0) {
            var obj = {};
            for (let i = 0; i < res.length; i++) {
              obj = {
                num: res[i].num,
                carNum: res[i].carNum || '暂无',
                beginTime: this.timestampToTime(res[i].startTime) || '暂无',
                endTime: this.timestampToTime(res[i].endTime) || '暂无',
                charge: res[i].price || '暂无',
                status: (res[i].status === 0) ? '未使用' : (res[i].status === 1) ? '已被预约' : '正在使用',
              };
              this.parkingData.push(obj)
            }
            console.log(this.parkingData)
          } else {
            this.$message.success(res.msg);
          }
        }).catch(err => {
          this.$message.success('获取失败' || res.msg);
        });
      },
      handleClick(tab, event) {
        this.getParkingData(Number(tab.index)+1);
      },
      switchDisplay(value) {
        console.log(value)
        this.display = (value === 1) ? 1 : 2
      }
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

  .iframe {
    height: 650px;
    width: 100%;
    margin-top: -90px;
  }

</style>
