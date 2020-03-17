<!-- 活动资讯编辑 -->
<!--功能： 添加/修改按钮、表单（咨讯标题、资讯内容、图片） -->
<template>
  <div class="editActivity">
    <div class="scenicSpot-form">
      <el-form ref="form" :model="activityData" label-width="80px">
        <el-form-item label="咨讯标题">
          <el-input v-model="activityData.title"></el-input>
        </el-form-item>
        <el-form-item label="资讯图片">
          <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :limit=limit
            :on-exceed="exceed" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="资讯内容">
          <el-input type="textarea" v-model="activityData.desc"></el-input>
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
    name: 'editActivity',
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        limit: 1,
        activityData: {
          title: '',
          desc: '',
        }
      }
    },
    watch: {

    },
    mounted() {
      this.activityData = this.$route.query.activityData;
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
