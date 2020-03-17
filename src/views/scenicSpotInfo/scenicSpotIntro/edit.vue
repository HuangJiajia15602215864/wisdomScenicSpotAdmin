<!-- 景点信息编辑 -->
<!--功能： 添加/修改按钮、表单（景点名字、适游时间、介绍、上传图片、） -->
<template>
  <div class="editScenicSpot">
    <div class="scenicSpot-form">
      <el-form ref="form" :model="spotsData" label-width="80px">
        <el-form-item label="景点名字">
          <el-input v-model="spotsData.title"></el-input>
        </el-form-item>
        <el-form-item label="适游时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="spotsData.beginDate" style="width: 100%;">
            </el-date-picker>
          </el-col>
          <el-col class="line" :span="2">——</el-col>
          <el-col :span="11">
            <el-date-picker type="" placeholder="选择日期" v-model="spotsData.endDate" style="width: 100%;">
            </el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="景点图片">
          <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :limit=limit
            :on-exceed="exceed" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="景点介绍">
          <el-input type="textarea" v-model="spotsData.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'editScenicSpot',
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        limit: 1,
        spotsData: {
          title: '',
          beginDate: '',
          endDate: '',
          date2: '',
          desc: '',
        }
      }
    },
    watch: {

    },
    mounted() {
      this.spotsData = this.$route.query.spotsData;
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      exceed() {
        console.log('只能上传一个文件')
      }
    }
  }

</script>

<style rel="stylesheet/scss" lang="scss" scope>
  .scenicSpot-form {
    width: 80%;
    margin: auto;
  }

</style>
