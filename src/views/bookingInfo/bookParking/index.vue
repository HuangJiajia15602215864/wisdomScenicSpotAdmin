<template>
    <div id="map-container"></div>
  </template>
  <script>
  export default {
    name: "MapContainer",
    mounted() {
      window.map = new esmap.ESMap({
        container: document.getElementById("map-container"),
        //如果地图、主题文件放在static目录下，请使用static路径
        mapDataSrc: "/esmap/data",
        mapThemeSrc: "/esmap/data/theme"
        // themeID: defaultOpt.themeID,
        // token: 'escope'
      });
      map.openMapById(10001);
      
      var ctlOpt = new esmap.ESControlOptions({
        position: esmap.ESControlPositon.RIGHT_TOP,
        //注意：imgURL参数是static目录下图片的路径
        imgURL: "static/esmap/resource/style/wedgets/img/" 
      });
  
      map.on("loadComplete", function() {
        //创建楼层控件
        var floorControl = new esmap.ESScrollFloorsControl(map, ctlOpt);
  
      });
    }
  };
</script>