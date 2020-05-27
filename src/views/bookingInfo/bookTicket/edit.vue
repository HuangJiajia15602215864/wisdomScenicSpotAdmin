<template>
  <div class="editTicket">
    <div class="ticket-form">
      <el-form ref="form" :model="ticketData" label-width="80px">
        <el-form-item label="门票名称">
          <el-input v-model="title"></el-input>
        </el-form-item>
        <el-form-item label="门票价格">
          <el-input v-model="price"></el-input>
        </el-form-item>
        <el-form-item label="门票描述">
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
    ticket,updateTicket
  } from '@/utils/apply.url';
  export default {
    name: 'editTicket',
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        limit: 1,
        title: '',
        price:0,
        desc: '',
        ticketData: {
          title: '',
          price:0,
          desc: '',
        }
      }
    },
    mounted() {
      if (typeof this.$route.query == 'object') {
        this.$nextTick(() => {
          this.title = this.$route.query.title;
          this.price = this.$route.query.price;
          this.desc = this.$route.query.desc;
        })
      }
    },
    methods: {
      onSubmit() {
        this.ticketData = {
          title: this.title,
          price:this.price,
          desc: this.desc,
        }
        if (typeof this.$route.query == 'object') {
          this.ticketData.id = this.$route.query.id;
          ticket(this.ticketData, 'post').then(res => {
            this.$router.push({
              path: '/home/bookTicket',
            });
          }).catch(err => {
            console.log(22)
            this.$message.success('获取失败' || res.msg);
          });
        } else {
            updateTicket(this.activityData, 'post').then(res => {
            this.$router.push({
              path: '/home/bookTicket ',
            });
          }).catch(err => {
            console.log(22)
            this.$message.success('获取失败' || res.msg);
          });
        }
      },
    }
  }

</script>

<style rel="stylesheet/scss" lang="scss" scope>
  .ticket-form {
    width: 80%;
    margin: auto;
  }

</style>
