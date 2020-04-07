<template>
  <div id="map-container"></div>
</template>
<script>
export default {
  name: "MapContainer",
  mounted() {
    window.map = new esmap.ESMap({
      container: document.getElementById("map-container"), //地图初始化的容器
      mapDataSrc: "static/esmap/mapData/", //地图数据所在目录
      mapThemeSrc: "static/esmap/theme/", //地图主题所在目录
      themeID: 1004, //请确保主题目录下存在该主题的数据包
      token: 'escope'
    });
    map.openMapById('test666');
    
    var ctlOpt = new esmap.ESControlOptions({
      position: esmap.ESControlPositon.RIGHT_TOP,
      imgURL: "static/esmap/resource/style/wedgets/img/" 
    });

    map.on("loadComplete", function() {
      var floorControl = new esmap.ESScrollFloorsControl(map, ctlOpt);
    });
  }
};
</script>
<style>
html,
body,
#map-container {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}
</style>


