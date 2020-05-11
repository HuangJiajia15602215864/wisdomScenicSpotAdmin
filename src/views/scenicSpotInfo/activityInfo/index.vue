<!-- 活动咨讯信息管理 -->
<!--功能： 搜索、添加、分页、表格（序号、ID、咨讯标题、资讯内容、图片、操作【修改、删除】） -->
<template>
  <div class="activityInfo">
    <!-- 表格顶部 -->
    <div class="header">
      <el-input v-model="search" size="small" placeholder="输入关键字搜索" />
      <el-button type="primary" size="mini" @click=goSearch>搜索</el-button>
      <el-button type="primary" size="small" @click="$router.push('/home/activityInfo/edit')">添加活动咨讯信息</el-button>
    </div>
    <!-- 表格 -->
    <el-table :data="activityData" stripe size="small" :default-sort="{prop: 'date', order: 'descending'}"
      :cell-style="{padding:'1px 0'}" :header-cell-style="{background:'#ddd'}">
      <el-table-column prop="num" label="序号" sortable width="80">
      </el-table-column>
      <el-table-column prop="id" label="ID" sortable width="180">
      </el-table-column>
      <el-table-column prop="title" label="咨讯标题" width="200">
      </el-table-column>
      <el-table-column label="资讯内容" width="250">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top" class="activity-info">
            <p>资讯内容:</p>
            <p>{{ scope.row.desc }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.desc }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="image" label="图片" width="250">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top" class="activity-info">
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
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页符 -->
    <el-pagination class="pagination" background @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page="currentPage" :page-size="10" layout="total, prev, pager, next, jumper"
      :total="activityData.length">
    </el-pagination>
    </el-pagination>
  </div>
</template>

<script>
  import {
    activityinfo,
    deleteActivity
  } from '@/utils/apply.url';
  export default {
    name: 'activityInfo',
    data() {
      return {
        search: '',
        currentPage: 1,
        activityData: []
      }
    },
    mounted() {
      this.getActivityData();
    },
    methods: {
      // 获取活动资讯数据
      getActivityData() {
        this.getActivityData=[];
        activityinfo({}, 'get').then(res => {
          console.log(11)
          if (res.length != 0) {
            var index = 1;
            var obj = {};
            for (let i = 0; i < res.length; i++) {
              obj = {
                num: index++,
                id: res[i].id,
                title: res[i].title,
                desc: res[i].descs,
                image: res[i].image
              };
              this.activityData.push(obj)
            }
            console.log(this.activityData)
          } else {
            this.$message.success(res.msg);
          }
        }).catch(err => {
          console.log(22)
          this.$message.success('获取失败' || res.msg);
        });
      },
      // 搜索
      goSearch() {
        console.log('清空数据')
        this.activityData = [];
        console.log(this.search)
        const params = {
          searchWord: this.search
        }
        activityinfo(params, 'get').then(res => {
          if (res.length != 0) {
            var index = 1;
            var obj = {};
            for (let i = 0; i < res.length; i++) {
              obj = {
                num: index++,
                id: res[i].id,
                title: res[i].title,
                desc: res[i].descs,
                image: res[i].image
              };
              this.activityData.push(obj)
            }
            console.log(this.activityData)
          } else {
            this.$message.success(res.msg);
          }
        }).catch(err => {
          Toast('获取失败' || res.msg);
        });
      },
      // 编辑活动资讯
      handleEdit(index, row) {
        this.$router.push({
          path: '/home/activityInfo/edit',
          query: {
            id:row.id,
            title:row.title,
            desc:row.desc
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
        this.getActivityData();
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.getaActivityData(val);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      getaActivityData(val) {
        console.log(val)
      }
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
