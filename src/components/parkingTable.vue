<template>
  <div class="parkingTable">
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" stripe size="small" :cell-style="{padding:'2px 0'}"
      :header-cell-style="{background:'#ddd',padding:'4px 0'}">
      <el-table-column prop="num" label="序号" width="120" column-key="num"></el-table-column>
      <el-table-column prop="carNum" label="车牌号" width="180" column-key="carNum"></el-table-column>
      <el-table-column prop="beginTime" label="进入时间" width="230" column-key="beginTime"></el-table-column>
      <el-table-column prop="endTime" label="离开时间" width="230" column-key="endTime"></el-table-column>
      <el-table-column prop="charge" label="收费" width="130" column-key="charge"></el-table-column>
      <el-table-column prop="status" label="当前状态" width="100" column-key="status"
        :filters="[{ text: '正在使用', value: '正在使用' }, { text: '未使用', value: '未使用' }]" :filter-method="filterTag"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status === '未使用' ? 'danger' : scope.row.status === '已被预约' ? 'primary' :  'success'" disable-transitions>{{scope.row.status}}
          </el-tag>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页符 -->
    <el-pagination class="pagination" background @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page="currentPage" :page-size="[10,20,50]" layout="total, prev, pager, next, jumper" :total="tableData.length">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentPage: 1,
      }
    },
    props:{
        tableData:{
          type:Array
        }
      },
    methods: {
      filterTag(value, row) {
        return row.status === value;
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
  .pagination {
    float: right;
    margin-top: 5px;
  }

</style>
