<!-- 活动资讯编辑 -->
<!--功能： 添加/修改按钮、表单（咨讯标题、资讯内容、图片） -->
<template>
  <div class="editActivity">
    <div class="scenicSpot-form">
      <el-form ref="form" :model="activityData" label-width="80px">
        <el-form-item label="咨讯标题">
          <el-input v-model="title"></el-input>
        </el-form-item>
        <el-form-item label="资讯图片">
          <el-upload ref="upload" action="http://localhost:3000/upload" list-type="picture-card" :limit=limit
            :on-exceed="exceed" :on-preview="handlePictureCardPreview" :on-remove="handleRemove"
            :on-success="handleAvatarSuccess">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="资讯内容">
          <el-input type="textarea" v-model="desc"></el-input>
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
  import {
    activityP,
    updateActivity
  } from '@/utils/apply.url';
  export default {
    name: 'editActivity',
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        limit: 1,
        title: '',
        desc: '',
        activityData: {
          title: '',
          desc: '',
        }
      }
    },
    watch: {

    },
    mounted() {
      if (this.$route.query.title != undefined) {
        this.$nextTick(() => {
          this.title = this.$route.query.title;
          this.desc = this.$route.query.desc;
        })
      }
    },
    methods: {
      // 上传文件成功的回调
      handleAvatarSuccess(res, file, fileList) {
        console.log(res)
        this.dialogImageUrl=res.data.path;
      },
      onSubmit() {
        this.$refs.upload.submit()
        this.activityData = {
          title: this.title,
          desc: this.desc,
          image:this.dialogImageUrl
        }
        if (this.$route.query.title != undefined) {
          this.activityData.id = this.$route.query.id;
          updateActivity(this.activityData, 'post').then(res => {
            this.$router.push({
              path: '/home/activityInfo',
            });
          }).catch(err => {
            console.log(22)
            this.$message.success('获取失败' || res.msg);
          });
        } else {
          activityP(this.activityData, 'post').then(res => {
            this.$router.push({
              path: '/home/activityInfo',
            });
          }).catch(err => {
            console.log(22)
            this.$message.success('获取失败' || res.msg);
          });
        }
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
