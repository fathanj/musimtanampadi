var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_MusimDesemberMaret_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "webgis2:musimdesembermaret_provinsi2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "MusimDesemberMaret",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MusimDesemberMaret_1, 0]);
var lyr_MusimNovemberFebruari_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "webgis2:musimnovemberfebruari_provinsi2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "MusimNovemberFebruari",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MusimNovemberFebruari_2, 0]);
var lyr_MusimOktoberJanuari_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "webgis2:musimoktoberjanuari_provinsi2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "MusimOktoberJanuari",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MusimOktoberJanuari_3, 0]);
var lyr_MusimSeptemberDesmber_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "webgis2:musimseptemberdesmber_provinsi2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "MusimSeptemberDesmber",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MusimSeptemberDesmber_4, 0]);
var lyr_MusimAgustusNovember_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "webgis2:musimagustusnovember_provinsi2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "MusimAgustusNovember",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MusimAgustusNovember_5, 0]);
var lyr_MusimJuliOktober_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "webgis2:musimjulioktober_provinsi2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "MusimJuliOktober",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MusimJuliOktober_6, 0]);
var lyr_MusimJuniSeptember_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "webgis2:musimjuniseptember_provinsi2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "MusimJuniSeptember",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MusimJuniSeptember_7, 0]);
var lyr_MusimMeiAgustus_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "webgis2:musimmeiagustus_provinsi2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "MusimMeiAgustus",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MusimMeiAgustus_8, 0]);
var lyr_MusimAprilJuli_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "webgis2:musimapriljuli_provinsi2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "MusimAprilJuli",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MusimAprilJuli_9, 0]);
var lyr_MusimMaretJuni_10 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "webgis2:musimmaretjuni_provinsi2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "MusimMaretJuni",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MusimMaretJuni_10, 0]);
var lyr_MusimFebruariMei_11 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "webgis2:musimfebruarimei_provinsi2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "MusimFebruariMei",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MusimFebruariMei_11, 0]);
var lyr_MusimJanuariApril_12 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "webgis2:musimjanuariapril_provinsi2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "MusimJanuariApril",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MusimJanuariApril_12, 0]);

lyr_EsriTopographic_0.setVisible(true);lyr_MusimDesemberMaret_1.setVisible(false);lyr_MusimNovemberFebruari_2.setVisible(false);lyr_MusimOktoberJanuari_3.setVisible(false);lyr_MusimSeptemberDesmber_4.setVisible(false);lyr_MusimAgustusNovember_5.setVisible(false);lyr_MusimJuliOktober_6.setVisible(false);lyr_MusimJuniSeptember_7.setVisible(false);lyr_MusimMeiAgustus_8.setVisible(false);lyr_MusimAprilJuli_9.setVisible(false);lyr_MusimMaretJuni_10.setVisible(false);lyr_MusimFebruariMei_11.setVisible(false);lyr_MusimJanuariApril_12.setVisible(false);
var layersList = [lyr_EsriTopographic_0,lyr_MusimDesemberMaret_1,lyr_MusimNovemberFebruari_2,lyr_MusimOktoberJanuari_3,lyr_MusimSeptemberDesmber_4,lyr_MusimAgustusNovember_5,lyr_MusimJuliOktober_6,lyr_MusimJuniSeptember_7,lyr_MusimMeiAgustus_8,lyr_MusimAprilJuli_9,lyr_MusimMaretJuni_10,lyr_MusimFebruariMei_11,lyr_MusimJanuariApril_12];
