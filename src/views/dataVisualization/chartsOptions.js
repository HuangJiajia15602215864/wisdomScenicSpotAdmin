// 入园客流情况（每周）
const flowSituationOption={
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'line' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisTick: {
        alignWithLabel: true
      }
    }],
    yAxis: [{
      type: 'value'
    }],
    series: [{
      name: '入园客流情况',
      type: 'bar',
      barWidth: '60%',
      data: [10, 52, 200, 334, 390, 330, 220]
    }]
  };
// 入园客流趋势（每天）
const flowTrendOption={
    xAxis: {
      type: 'category',
      data: ['7:00', '9:00', '11:00', '13:00', '15:00', '17:00', '19:00', '21:00']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320, 700],
      type: 'line',
      smooth: true
    }]
  };
// 各景点售票情况
const ticketSalesOption={
    title: {
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c}张 ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['海洋馆', '热带温室植物馆', '水上乐园', '星空印象馆', '游乐场']
    },
    series: [{
      name: '售票情况',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [{
          value: 335,
          name: '海洋馆'
        },
        {
          value: 310,
          name: '热带温室植物馆'
        },
        {
          value: 234,
          name: '水上乐园'
        },
        {
          value: 135,
          name: '星空印象馆'
        },
        {
          value: 1548,
          name: '游乐场'
        }
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };
//各景点客流变化（每天）
const flowChangeOption={
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['海洋馆', '热带温室植物馆', '水上乐园', '星空印象馆', '游乐场']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['7:00', '9:00', '11:00', '13:00', '15:00', '17:00', '19:00']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} 人次'
    }
    },
    series: [{
        name: '海洋馆',
        type: 'line',
        stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '热带温室植物馆',
        type: 'line',
        stack: '总量',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '水上乐园',
        type: 'line',
        stack: '总量',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '星空印象馆',
        type: 'line',
        stack: '总量',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '游乐场',
        type: 'line',
        stack: '总量',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };

const temperatureChangeOption = {
  tooltip: {
      trigger: 'axis'
  },
  xAxis:  {
      type: 'category',
      boundaryGap: false,
      data: ['7:00', '9:00', '11:00', '13:00', '15:00', '17:00', '19:00', '21:00']
  },
  yAxis: {
      type: 'value',
      axisLabel: {
          formatter: '{value} °C'
      }
  },
  series: [
      {
          name:'景区温度',
          type:'line',
          data:[9, 13, 15, 17,18,16 , 13, 10,],
          markPoint: {
              data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
              ]
          },
          markLine: {
              data: [
                  {type: 'average', name: '平均值'}
              ]
          },
          itemStyle: {
            normal: {
                color: '#ff8000', //改变折线点的颜色
                lineStyle: {
                    color: '#ff8000' //改变折线颜色
                }
            }
        }          
      },
  ]
};

const humidityChangeoption = {
  tooltip: {
   trigger: 'axis'
},
xAxis:  {
   type: 'category',
   boundaryGap: false,
   data: ['7:00', '9:00', '11:00', '13:00', '15:00', '17:00', '19:00', '21:00']
},
yAxis: {
   type: 'value',
   axisLabel: {
       formatter: '{value} °C'
   }
},
series: [
   {
       name:'景区湿度',
       type:'line',
       data:[89, 63, 55, 47,38,46 , 53, 79],
       markPoint: {
           data: [
               {type: 'max', name: '最大值'},
               {type: 'min', name: '最小值'}
           ]
       },
       markLine: {
           data: [
               {type: 'average', name: '平均值'}
           ]
       },
       itemStyle: {
        normal: {
            color: '#0066ff', //改变折线点的颜色
            lineStyle: {
                color: '#0066ff' //改变折线颜色
            }
        }
    },
   },
]
};

const airQualityChangeoption = {
  tooltip: {
   trigger: 'axis'
},
legend: {
   data:['景区空气质量']
},
xAxis:  {
   type: 'category',
   boundaryGap: false,
   data: ['7:00', '9:00', '11:00', '13:00', '15:00', '17:00', '19:00', '21:00']
},
yAxis: {
   type: 'value',
   axisLabel: {
       formatter: '{value} '
   }
},
series: [
   {
       name:'景区湿度',
       type:'line',
       data:[69, 63, 55, 47,38,46 , 53, 79],
       markPoint: {
           data: [
               {type: 'max', name: '最大值'},
               {type: 'min', name: '最小值'}
           ]
       },
       markLine: {
           data: [
               {type: 'average', name: '平均值'}
           ]
       },
         itemStyle: {
             normal: {
                 color: '#ff3333', //改变折线点的颜色
                 lineStyle: {
                     color: '#ff3333' //改变折线颜色
                 }
             }
         },
       
   },
]
};




export default {
    flowSituationOption,
    flowTrendOption,
    ticketSalesOption,
    flowChangeOption,
    temperatureChangeOption,
    humidityChangeoption,
    airQualityChangeoption
}