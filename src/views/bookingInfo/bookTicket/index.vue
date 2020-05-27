<template>
  <div class="activityInfo">
    <!-- 表格顶部 -->
    <div class="header">
      <el-date-picker v-model="datePicker" type="date" size="small" placeholder="选择日期">
      </el-date-picker>
      <el-button type="primary" size="mini" @click='goSearch'>查询</el-button>
      <el-button type="primary" size="small" @click="$router.push('/home/bookTicket/edit')">添加门票套餐</el-button>
    </div>
    <!-- 表格 -->
    <el-table :data="buyData" stripe size="small" :default-sort="{prop: 'date', order: 'descending'}"
      :cell-style="{padding:'1px 0'}" :header-cell-style="{background:'#ddd'}">
      <el-table-column prop="num" label="序号" sortable width="80">
      </el-table-column>
      <el-table-column prop="id" label="ID" sortable width="180">
      </el-table-column>
      <el-table-column prop="title" label="门票名称" width="200">
      </el-table-column>
      <el-table-column label="门票描述" width="250">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top" class="activity-info">
            <p>门票描述:</p>
            <p>{{ scope.row.desc }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.desc }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="number" label="游玩人数" width="80">
      </el-table-column>
      <el-table-column prop="price" label="购票价格" width="120">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页符 -->
    <el-pagination class="pagination" background @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page="currentPage" :page-size="10" layout="total, prev, pager, next, jumper" :total="buyData.length">
    </el-pagination>
    </el-pagination>
  </div>
</template>

<script>
  import {
    buySearch,
    findTicketById
  } from '@/utils/apply.url';
  export default {
    name: 'activityInfo',
    data() {
      return {
        currentPage: 1,
        buyData: [],
        datePicker: ''
      }
    },
    mounted() {
      this.getBuyData();
    },
    methods: {
      timestampToTime(timestamp) {
        var date = new Date(timestamp);
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) ;
        return Y + M + D;
      },
      // 获取购票数据
      getBuyData() {
        this.buyData = [];
        buySearch({
          selectPlayDate: this.timestampToTime(this.datePicker)
        }, 'get').then(res => {
          if (res.length != 0) {
            var index = 1;
            var obj = {};
            for (let i = 0; i < res.length; i++) {
              obj = {
                num: index++,
                id: res[i].id,
                number: res[i].number,
                price: res[i].ticketPay,
                ticketId: res[i].ticketId,
                title:[],
                desc:[]
              };
              this.buyData.push(obj)
            }
            this.getTicketDetail();
          } else {
            this.$message.success(res.msg);
          }
        }).catch(err => {
          console.log(22)
          this.$message.success('获取失败' || res.msg);
        });
      },
      getTicketDetail() {
        this.buyData.forEach((item, index) => {
          findTicketById({
            ticketId: item.ticketId
          }, 'get').then(result => {
            console.log(111)
            this.buyData[index].title = result[0].title,
              this.buyData[index].desc = result[0].descs;
              console.log(this.buyData[index])
          }).catch(error => {
             console.log(222)
            this.$message.success('获取电子门票信息失败');
          })
        })
      },
      // 搜索
      goSearch() {
        this.getBuyData();
      },
      // 编辑活动资讯
      handleEdit(index, row) {
        this.$router.push({
          path: '/home/activityInfo/edit',
          query: {
            id: row.id,
            title: row.title,
            desc: row.desc
          }
        });
      },
      handleDelete(index, row) {
        console.log(index, row);
        deleteActivity({
          id: row.id
        }, 'post').then(res => {
          this.$message.success(res.msg);
        }).catch(err => {
          console.log(22)
          this.$message.success('删除失败' || res.msg);
        });
        this.getBuyData();
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.getBuyData(val);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
    }
  }

</script>

<style rel="stylesheet/scss" lang="scss" scope>
  .header {
    margin-bottom: 10px;

    .el-input {
      width: 200px;
    }

    .el-button--mini {
      /* margin-left: 10px; */
    }

    .el-button--small {
      float: right;
    }
  }

  .activity-info .el-tag--medium {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;
    margin: 4px 0;
  }

  .el-popover {
    width: 400px;
  }

  .pagination {
    float: right;
    margin-top: 10px;
  }

</style>
