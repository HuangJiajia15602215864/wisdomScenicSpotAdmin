<!-- 景点信息管理 -->
<!--功能： 搜索、添加、分页、表格（序号、ID、景点名字、适游时间、介绍、图片、操作【修改、删除】） -->
<template>
  <div class="scenicSpotIntro">
    <div class="header">
      <el-input
          v-model="search"
          size="small"
          placeholder="输入关键字搜索"/>
     <el-button type="primary" size="small">添加景点信息</el-button>
    </div>
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
          <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" >删除</el-button> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'scenicSpotIntro',
    data() {
      return {
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
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }

    }
  }

</script>

<style rel="stylesheet/scss" lang="scss" scope>
.header{
    display: flex;
    margin-bottom: 10px;
    .el-input{
        width: 200px;
        margin-right: 50px;
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
</style>
