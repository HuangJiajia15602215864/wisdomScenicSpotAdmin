<!-- 景点信息编辑 -->
<!--功能： 添加/修改按钮、表单（景点名字、适游时间、介绍、上传图片、） -->
<template>
  <div class="editScenicSpot">
    <div class="scenicSpot-form">
      <el-form ref="form" :model="spotsData" label-width="80px">
        <el-form-item label="景点名字">
          <el-input v-model="title"></el-input>
        </el-form-item>
        <el-form-item label="适游时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="startDate" style="width: 100%;">
            </el-date-picker>
          </el-col>
          <el-col class="line" :span="2">——</el-col>
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="endDate" style="width: 100%;">
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
    spot,
    updateSpot
  } from '@/utils/apply.url';
  export default {
    name: 'editScenicSpot',
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        limit: 1,
        title: '',
        startDate: '',
        endDate: '',
        desc: '',
        spotsData: {
          title: '',
          startDate: '',
          endDate: '',
          desc: '',
        }
      }
    },
    watch: {

    },
    mounted() {
      if (typeof this.$route.query == 'object') {
        this.$nextTick(() => {
          this.title = this.$route.query.title;
          this.startDate = this.$route.query.startDate;
          this.endDate = this.$route.query.endDate;
          this.desc = this.$route.query.desc;
        })
      }
    },
    methods: {
      // 新增或提交
      onSubmit() {
        this.spotsData = {
          title: this.title,
          startDate: this.startDate,
          endDate: this.endDate,
          desc: this.desc,
        }
        if (typeof this.$route.query == 'object') {
          this.spotsData.id=this.$route.query.id;
          updateSpot(this.spotsData, 'post').then(res => {
            this.$router.push({
              path: '/home/scenicSpotIntro',
            });
          }).catch(err => {
            console.log(22)
            this.$message.success('获取失败' || res.msg);
          });
        } else {
          spot(this.spotsData, 'post').then(res => {
            this.$router.push({
              path: '/home/scenicSpotIntro',
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
