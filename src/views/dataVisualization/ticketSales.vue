<template>
  <div id="ticketSales">
    <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="售票情况变化（每年）" name="saleYear">
        <div id="saleYear" class="chart"></div>
      </el-tab-pane>
      <el-tab-pane label="售票情况变化（每周）" name="saleWeek">
        <div id="saleWeek" class="chart"></div>
      </el-tab-pane>
      <el-tab-pane label="售票情况变化（每天）" name="saleDay">
        <div id="saleDay" class="chart"></div>
      </el-tab-pane>
      <el-tab-pane label="各景点售票情况" name="spotSaleDay">
        <div id="spotSaleDay" class="chart"></div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import echarts from 'echarts'
  import chartsOptions from './chartsOptions.js'
  export default {
    name: 'ticketSales',
    data() {
      return {
        activeName: 'saleYear',
        saleYearCharts: '', // 售票情况变化（每年）
        saleWeekCharts: '', // 售票情况变化（每周）
        saleDayCharts: '', // 售票情况变化（每天）
        spotSaleDayCharts: '', // 各景点售票情况变化（每天）
      };
    },
    mounted() {
      console.log("实例化")
      this.$nextTick(function () {
        this.drawCharts('saleYear', 'saleYearCharts', chartsOptions.saleYearOption);
      })
    },
    methods: {
      // 绘制图表公共函数
      drawCharts(id, chart, option) {
        this.chart = echarts.init(document.getElementById(id));
        this.chart.setOption(option);
        window.addEventListener('resize', () => {
          this.chart.resize();
        });
      },
      // 切换tab
      handleClick(tab, event) {
        console.log(tab, event);
        console.log(tab.$options.propsData.name);
        var current = tab.$options.propsData.name;
        if (current == 'saleWeek') {
          this.$nextTick(function () {
            this.drawCharts('saleWeek', 'saleWeekCharts', chartsOptions.saleWeekOption);
          })
        }
        if (current == 'saleDay') {
          this.$nextTick(function () {
            this.drawCharts('saleDay', 'saleDayCharts', chartsOptions.saleDayOption);
          })
        }
        if (current == 'spotSaleDay') {
          this.$nextTick(function () {
            this.drawCharts('spotSaleDay', 'spotSaleDayCharts', chartsOptions.ticketSalesOption);
          })
        }
      }
    },
  };

</script>

<style lang="scss" scope>
  .el-tabs {
    min-height: 500px;
  }

  .chart {
    width: 100%;
    height: 400px;
  }

</style>
