var map = L.map('map', {
    center: [-12.070284591409106, -76.76133349682583],
    zoom: 18,
    minZoom: 10,
    maxZoom: 20,
    maxBounds: [[-12.111768,-76.820979], [-12.027484,-76.695018]]
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var centros = L.tileLayer.wms("http://localhost:8080/geoserver/websencico/wms?", {
	   layers: "websencico:centros_poblados", //gisweb:centros poblados cieneguilla
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
centros.addTo(map);

basemapOSM.addTo(map);
var grifos = L.tileLayer.wms("http://localhost:8080/geoserver/websencico/wms?", {
	   layers: "websencico:grifos", //gisweb:grifos cieneguilla
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
grifos.addTo(map);

basemapOSM.addTo(map);
var clinicas = L.tileLayer.wms("http://localhost:8080/geoserver/websencico/wms?", {
	   layers: "websencico:clinicas", //gisweb:clinicasgrifos cieneguilla
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
clinicas.addTo(map);

basemapOSM.addTo(map);
var curvas = L.tileLayer.wms("http://localhost:8080/geoserver/websencico/wms?", {
	   layers: "websencico:curvas_nivel", //gisweb:curvas de nivel cieneguilla
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
curvas.addTo(map);

var baseMaps = {
    "OSM": basemapOSM
};

var overlayMaps = {
    "Centros educativos": centros,
    "grifos": grifos,
    "clinicas": clinicas,
    "curvas": curvas
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);