<!-- 景点信息管理 -->
<!--功能： 搜索、添加、分页、表格（序号、ID、景点名字、适游时间、介绍、图片、操作【修改、删除】） -->
<template>
  <div class="scenicSpotIntro">
    <!-- 表格顶部 -->
    <div class="header">
      <el-input
          v-model="search"
          size="small"
          placeholder="输入关键字搜索"/>
      <el-button type="primary" size="mini">搜索</el-button>
     <el-button type="primary" size="small" @click="$router.push('/home/scenicSpotIntro/edit')">添加景点信息</el-button>
    </div>
    <!-- 表格 -->
    <el-table :data="spotsData" stripe size="small" :default-sort="{prop: 'date', order: 'descending'}" :cell-style="{padding:'1px 0'}"
    :header-cell-style="{background:'#ddd'}">
      <el-table-column prop="num" label="序号" sortable width="80">
      </el-table-column>
      <el-table-column prop="id" label="ID" sortable width="80">
      </el-table-column>
      <el-table-column prop="title" label="景点名字" width="180">
      </el-table-column>
      <el-table-column prop="time" label="适游时间" sortable width="180">
      </el-table-column>
      <el-table-column label="介绍" width="180">
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
      <el-table-column prop="image" label="图片" width="180">
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
          <el-button type="primary" size="mini" icon="el-icon-edit" circle @click="handleEdit(scope.$index, scope.row)"></el-button>
          <el-button type="danger" size="mini" icon="el-icon-delete" circle @click="handleDelete(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页符 -->
    <el-pagination class="pagination"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="40">
    </el-pagination>
</el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'scenicSpotIntro',
    data() {
      return {
        search:'',
        currentPage:1,
        spotsData: [{
            num: 1,
            id: '001',
            title: '水生植物馆',
            desc: 'Whitehaven beachWhitesunday Island，Whitesunday Islands',
            time: '每年4月~7月',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577271721217&di=cd9ee3124e5880734682f6fde760271f&imgtype=0&src=http%3A%2F%2Fimg1.juimg.com%2F140915%2F330508-14091520514636.jpg'
          },
          {
            num: 2,
            id: '002',
            title: '海洋馆',
            desc: 'Whitehaven beachWhitesunday Island，Whitesunday Islands',
            time: '每年6月~9月',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577271750036&di=8d14f3395815f8e5505ea67e6fa31bc3&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2F6t%2F9h%2FQJ9106150115.jpg%3Fx-oss-process%3Dstyle%2Fshows'
          },
          {
            num: 3,
            id: '003',
            title: '星空印象园',
            desc: 'Whitehaven beachWhitesunday Island，Whitesunday Islands',
            time: '全年',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577271639513&di=9baee638b3cb067410adc618e3daa386&imgtype=0&src=http%3A%2F%2Ffile06.16sucai.com%2F2016%2F0621%2Ff53a66fda171a74be8e8c5b7e593321c.jpg'
          },
          {
            num: 1,
            id: '001',
            title: '水生植物馆',
            desc: 'Whitehaven beachWhitesunday Island，Whitesunday Islands',
            time: '每年4月~7月',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577271721217&di=cd9ee3124e5880734682f6fde760271f&imgtype=0&src=http%3A%2F%2Fimg1.juimg.com%2F140915%2F330508-14091520514636.jpg'
          },
          {
            num: 2,
            id: '002',
            title: '海洋馆',
            desc: 'Whitehaven beachWhitesunday Island，Whitesunday Islands',
            time: '每年6月~9月',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577271750036&di=8d14f3395815f8e5505ea67e6fa31bc3&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2F6t%2F9h%2FQJ9106150115.jpg%3Fx-oss-process%3Dstyle%2Fshows'
          },
          {
            num: 3,
            id: '003',
            title: '星空印象园',
            desc: 'Whitehaven beachWhitesunday Island，Whitesunday Islands',
            time: '全年',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577271639513&di=9baee638b3cb067410adc618e3daa386&imgtype=0&src=http%3A%2F%2Ffile06.16sucai.com%2F2016%2F0621%2Ff53a66fda171a74be8e8c5b7e593321c.jpg'
          },
          {
            num: 1,
            id: '001',
            title: '水生植物馆',
            desc: 'Whitehaven beachWhitesunday Island，Whitesunday Islands',
            time: '每年4月~7月',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577271721217&di=cd9ee3124e5880734682f6fde760271f&imgtype=0&src=http%3A%2F%2Fimg1.juimg.com%2F140915%2F330508-14091520514636.jpg'
          },
          {
            num: 2,
            id: '002',
            title: '海洋馆',
            desc: 'Whitehaven beachWhitesunday Island，Whitesunday Islands',
            time: '每年6月~9月',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577271750036&di=8d14f3395815f8e5505ea67e6fa31bc3&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2F6t%2F9h%2FQJ9106150115.jpg%3Fx-oss-process%3Dstyle%2Fshows'
          },
          {
            num: 3,
            id: '003',
            title: '星空印象园',
            desc: 'Whitehaven beachWhitesunday Island，Whitesunday Islands',
            time: '全年',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577271639513&di=9baee638b3cb067410adc618e3daa386&imgtype=0&src=http%3A%2F%2Ffile06.16sucai.com%2F2016%2F0621%2Ff53a66fda171a74be8e8c5b7e593321c.jpg'
          },
          {
            num: 3,
            id: '003',
            title: '星空印象园',
            desc: 'Whitehaven beachWhitesunday Island，Whitesunday Islands',
            time: '全年',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577271639513&di=9baee638b3cb067410adc618e3daa386&imgtype=0&src=http%3A%2F%2Ffile06.16sucai.com%2F2016%2F0621%2Ff53a66fda171a74be8e8c5b7e593321c.jpg'
          }
        ]
      }
    },
    watch: {

    },
    methods: {
      handleEdit(index, row) {
        this.$router.push({
          path: '/home/scenicSpotIntro/edit',
          query: {
            spotsData: row
          }
        });
      },
      handleDelete(index, row) {
        console.log(index, row);
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
.header{
    margin-bottom: 10px;
    .el-input{
        width: 200px;
    }
    .el-button--mini{
      margin-left:10px;
    }
    .el-button--small{
      float: right;
    }
}
.el-tag--medium{
    width:100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;
    margin: 4px 0;
}
.el-popover{
    width: 400px;
}
.pagination{
  float: right;
  margin-top: 10px;
}

</style>
