<template>
  <div id="scenicSpotTraffic">
    <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="入园客流情况（每周）" name="flowSituation">
        <div id="flowSituation" class="chart"></div>
      </el-tab-pane>
      <el-tab-pane label="入园客流趋势（每天）" name="flowTrend">
        <div id="flowTrend" class="chart"></div>
      </el-tab-pane>
      <el-tab-pane label="各景点客流变化（每天）" name="flowChange">
        <div id="flowChange" class="chart"></div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import echarts from 'echarts'
  import chartsOptions from './chartsOptions.js'
  export default {
    name: 'scenicSpotTraffic',
    data() {
      return {
        activeName: 'flowSituation',
        flowSituationCharts: '', //入园客流情况柱状图（每周）
        flowTrendCharts: '', // 入园客流趋势折线图（每天）
        flowChangeCharts: '', // 各景点客流变化（每天）
      };
    },
    computed: {},
    watch: {},
    components: {},
    mounted() {
      console.log("实例化")
      this.$nextTick(function () {
        this.drawCharts('flowSituation', 'flowSituationCharts', chartsOptions.flowSituationOption);
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
        if (current == 'flowTrend') {
          this.$nextTick(function () {
            this.drawCharts('flowTrend', 'flowTrendCharts', chartsOptions.flowTrendOption);
          })
        }
        if (current == 'flowChange') {
          this.$nextTick(function () {
            this.drawCharts('flowChange', 'flowChangeCharts', chartsOptions.flowChangeOption);
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
