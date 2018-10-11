function mymap(wrap, p) {
    var map = new BMap.Map(wrap); // 创建Map实例
    var end = new BMap.Point(p.x, p.y);
    map.centerAndZoom(end, 15); // 初始化地图,设置中心点坐标和地图级别107.417108,40.765111
    //添加地图类型控件
    map.addControl(new BMap.MapTypeControl({
        mapTypes: [
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]
    }));
    map.setCurrentCity("巴彦淖尔"); // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

    var mk = new BMap.Marker(end);
    map.addOverlay(mk);

    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            var driving = new BMap.DrivingRoute(map, {
                renderOptions: {
                    map: map,
                    autoViewport: true
                }
            });
            driving.search(r, end);

        } else {
            alert('浏览器定位失败，请开启浏览器定位权限！' + this.getStatus());
        }

    }, {
        enableHighAccuracy: true
    })
}