<!-- 景点信息管理 -->
<!--功能： 搜索、添加、分页、表格（序号、ID、景点名字、适游时间、介绍、图片、操作【修改、删除】） -->
<template>
  <div class="scenicSpotIntro">
    <!-- 表格顶部 -->
    <div class="header">
      <el-input v-model="search" size="small" placeholder="输入关键字搜索" />
      <el-button type="primary" size="mini" @click=goSearch>搜索</el-button>
      <el-button type="primary" size="small" @click="$router.push('/home/scenicSpotIntro/edit')">添加景点信息</el-button>
    </div>
    <!-- 表格 -->
    <el-table :data="spotsData" stripe size="small" :default-sort="{prop: 'date', order: 'descending'}"
      :cell-style="{padding:'1px 0'}" :header-cell-style="{background:'#ddd'}">
      <el-table-column prop="num" label="序号" sortable width="80">
      </el-table-column>
      <el-table-column prop="id" label="ID" sortable width="140">
      </el-table-column>
      <el-table-column prop="title" label="景点名字" width="170">
      </el-table-column>
      <el-table-column prop="time" label="适游时间" sortable width="200">
      </el-table-column>
      <el-table-column label="介绍" width="230">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>介绍:</p>
            <p>{{ scope.row.desc }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.desc }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="image" label="图片" width="230">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>图片链接:</p>
            <p>{{ scope.row.image }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.image }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" icon="el-icon-edit" circle @click="handleEdit(scope.$index, scope.row)">
          </el-button>
          <el-button type="danger" size="mini" icon="el-icon-delete" circle
            @click="handleDelete(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页符 -->
    <el-pagination class="pagination" background @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="10"
      layout="total, sizes, prev, pager, next, jumper" :total="40">
    </el-pagination>
    </el-pagination>
  </div>
</template>

<script>
  import {
    spots,
    deleteSpot
  } from '@/utils/apply.url';
  export default {
    name: 'scenicSpotIntro',
    data() {
      return {
        search: '',
        currentPage: 1,
        spotsData: []
      }
    },
    watch: {

    },
    mounted() {
      this.getSpotsData();
    },
    methods: {
      getSpotsData() {
        spots({}, 'get').then(res => {
          console.log(11)
          if (res.length != 0) {
            var index = 1;
            var obj = {};
            for (let i = 0; i < res.length; i++) {
              obj = {
                num: index++,
                id: res[i].id,
                title: res[i].title,
                time: this.timestampToTime(res[i].startDate) + '~' + this.timestampToTime(res[i].endDate),
                desc: res[i].descs,
                image: res[i].image
              };
              this.spotsData.push(obj)
            }
            console.log(this.spotsData)
          } else {
            this.$message.success(res.msg);
          }
        }).catch(err => {
          console.log(22)
          this.$message.success('获取失败' || res.msg);
        });
      },
      goSearch() {
        console.log('清空数据')
        this.spotsData = [];
        console.log(this.search)
        const params = {
          searchWord: this.search
        }
        spots(params, 'get').then(res => {
          this.spotsData = res;
        }).catch(err => {
          Toast('获取失败' || res.msg);
        });
      },
      timestampToTime(timestamp) {
        var date = new Date(timestamp);
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = date.getDate() + ' ';
        return Y + M + D;
      },
      handleEdit(index, row) {
        console.log(row)
        this.$router.push({
          path: '/home/scenicSpotIntro/edit',
          query: {
            id: row.id,
            title: row.title,
            desc: row.desc,
            startDate: row.time.split('~')[0],
            endDate: row.time.split('~')[1],
            image: row.image
          }
        });
      },
      handleDelete(index, row) {
        console.log(index, row);
        deleteSpot({
          id: row.id
        }, 'post').then(res => {
          this.$message.success(res.msg);
        }).catch(err => {
          console.log(22)
          this.$message.success('删除失败' || res.msg);
        });
        this.getSpotsData();
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.getaActivityData(val);
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
      margin-left: 10px;
    }

    .el-button--small {
      float: right;
    }
  }

  .el-tag--medium {
    width: 170px;
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
