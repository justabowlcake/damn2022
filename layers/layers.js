ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3825").setExtent([208736.026897, 2383041.311181, 712738.889572, 2844578.300725]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 0.713000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_2021_1 = new ol.format.GeoJSON();
var features_2021_1 = format_2021_1.readFeatures(json_2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_2021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021_1.addFeatures(features_2021_1);
var lyr_2021_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2021_1, 
                style: style_2021_1,
                interactive: true,
    title: '2021全台區館<br />\
    <img src="styles/legend/2021_1_0.png" /> 43<br />\
    <img src="styles/legend/2021_1_1.png" /> 9<br />\
    <img src="styles/legend/2021_1_2.png" /> 3<br />\
    <img src="styles/legend/2021_1_3.png" /> 1<br />\
    <img src="styles/legend/2021_1_4.png" /> 0<br />\
    <img src="styles/legend/2021_1_5.png" /> <br />'
        });
var format_2021_2 = new ol.format.GeoJSON();
var features_2021_2 = format_2021_2.readFeatures(json_2021_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_2021_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021_2.addFeatures(features_2021_2);
var lyr_2021_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2021_2, 
                style: style_2021_2,
                interactive: true,
    title: '2021全台總館<br />\
    <img src="styles/legend/2021_2_0.png" /> 1<br />\
    <img src="styles/legend/2021_2_1.png" /> 2<br />\
    <img src="styles/legend/2021_2_2.png" /> 6<br />\
    <img src="styles/legend/2021_2_3.png" /> 13<br />\
    <img src="styles/legend/2021_2_4.png" /> 14<br />\
    <img src="styles/legend/2021_2_5.png" /> 16<br />\
    <img src="styles/legend/2021_2_6.png" /> 19<br />\
    <img src="styles/legend/2021_2_7.png" /> 21<br />\
    <img src="styles/legend/2021_2_8.png" /> 27<br />\
    <img src="styles/legend/2021_2_9.png" /> 34<br />\
    <img src="styles/legend/2021_2_10.png" /> <br />'
        });
var format_2021_3 = new ol.format.GeoJSON();
var features_2021_3 = format_2021_3.readFeatures(json_2021_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_2021_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021_3.addFeatures(features_2021_3);
var lyr_2021_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2021_3, 
                style: style_2021_3,
                interactive: true,
    title: '2021全台分館<br />\
    <img src="styles/legend/2021_3_0.png" /> <br />\
    <img src="styles/legend/2021_3_1.png" /> 0<br />\
    <img src="styles/legend/2021_3_2.png" /> 1<br />\
    <img src="styles/legend/2021_3_3.png" /> 2<br />\
    <img src="styles/legend/2021_3_4.png" /> 3<br />\
    <img src="styles/legend/2021_3_5.png" /> 4<br />\
    <img src="styles/legend/2021_3_6.png" /> 6<br />\
    <img src="styles/legend/2021_3_7.png" /> 36<br />\
    <img src="styles/legend/2021_3_8.png" /> 44<br />\
    <img src="styles/legend/2021_3_9.png" /> 59<br />\
    <img src="styles/legend/2021_3_10.png" /> 62<br />'
        });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> 金門輪廓'
            });
var format_2_5 = new ol.format.GeoJSON();
var features_2_5 = format_2_5.readFeatures(json_2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_5.addFeatures(features_2_5);
var lyr_2_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2_5, 
                style: style_2_5,
                interactive: true,
                title: '<img src="styles/legend/2_5.png" /> 圖書館點點-2'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_2021_1.setVisible(true);lyr_2021_2.setVisible(true);lyr_2021_3.setVisible(true);lyr__4.setVisible(true);lyr_2_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_2021_1,lyr_2021_2,lyr_2021_3,lyr__4,lyr_2_5];
lyr_2021_1.set('fieldAliases', {'COUNTYID': 'COUNTYID', 'COUNTYCODE': 'COUNTYCODE', 'COUNTYNAME': 'COUNTYNAME', 'COUNTYENG': 'COUNTYENG', '總館分館區館 — 圖書館數_xls_縣市別': '總館分館區館 — 圖書館數_xls_縣市別', '總館分館區館 — 圖書館數_xls_總館': '總館分館區館 — 圖書館數_xls_總館', '總館分館區館 — 圖書館數_xls_分館': '總館分館區館 — 圖書館數_xls_分館', '總館分館區館 — 圖書館數_xls_區館': '總館分館區館 — 圖書館數_xls_區館', '總館分館區館 — 圖書館數_xls_總館2020': '總館分館區館 — 圖書館數_xls_總館2020', '總館分館區館 — 圖書館數_xls_分館2020': '總館分館區館 — 圖書館數_xls_分館2020', '總館分館區館 — 圖書館數_xls_區館2020': '總館分館區館 — 圖書館數_xls_區館2020', });
lyr_2021_2.set('fieldAliases', {'COUNTYID': 'COUNTYID', 'COUNTYCODE': 'COUNTYCODE', 'COUNTYNAME': 'COUNTYNAME', 'COUNTYENG': 'COUNTYENG', '總館分館區館 — 圖書館數_xls_縣市別': '總館分館區館 — 圖書館數_xls_縣市別', '總館分館區館 — 圖書館數_xls_總館': '總館分館區館 — 圖書館數_xls_總館', '總館分館區館 — 圖書館數_xls_分館': '總館分館區館 — 圖書館數_xls_分館', '總館分館區館 — 圖書館數_xls_區館': '總館分館區館 — 圖書館數_xls_區館', '總館分館區館 — 圖書館數_xls_總館2020': '總館分館區館 — 圖書館數_xls_總館2020', '總館分館區館 — 圖書館數_xls_分館2020': '總館分館區館 — 圖書館數_xls_分館2020', '總館分館區館 — 圖書館數_xls_區館2020': '總館分館區館 — 圖書館數_xls_區館2020', });
lyr_2021_3.set('fieldAliases', {'COUNTYID': 'COUNTYID', 'COUNTYCODE': 'COUNTYCODE', 'COUNTYNAME': 'COUNTYNAME', 'COUNTYENG': 'COUNTYENG', '總館分館區館 — 圖書館數_xls_縣市別': '總館分館區館 — 圖書館數_xls_縣市別', '總館分館區館 — 圖書館數_xls_總館': '總館分館區館 — 圖書館數_xls_總館', '總館分館區館 — 圖書館數_xls_分館': '總館分館區館 — 圖書館數_xls_分館', '總館分館區館 — 圖書館數_xls_區館': '總館分館區館 — 圖書館數_xls_區館', '總館分館區館 — 圖書館數_xls_總館2020': '總館分館區館 — 圖書館數_xls_總館2020', '總館分館區館 — 圖書館數_xls_分館2020': '總館分館區館 — 圖書館數_xls_分館2020', '總館分館區館 — 圖書館數_xls_區館2020': '總館分館區館 — 圖書館數_xls_區館2020', });
lyr__4.set('fieldAliases', {'FID': 'FID', 'COUN_ID': 'COUN_ID', 'COUN_NA': 'COUN_NA', 'TOWN_ID': 'TOWN_ID', 'TOWN_NA': 'TOWN_NA', 'POST': 'POST', });
lyr_2_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'amenity': 'amenity', 'name': 'name', 'addr_city': 'addr_city', });
lyr_2021_1.set('fieldImages', {'COUNTYID': 'TextEdit', 'COUNTYCODE': 'TextEdit', 'COUNTYNAME': 'TextEdit', 'COUNTYENG': 'TextEdit', '總館分館區館 — 圖書館數_xls_縣市別': 'TextEdit', '總館分館區館 — 圖書館數_xls_總館': 'TextEdit', '總館分館區館 — 圖書館數_xls_分館': 'TextEdit', '總館分館區館 — 圖書館數_xls_區館': 'TextEdit', '總館分館區館 — 圖書館數_xls_總館2020': 'Range', '總館分館區館 — 圖書館數_xls_分館2020': 'Range', '總館分館區館 — 圖書館數_xls_區館2020': 'Range', });
lyr_2021_2.set('fieldImages', {'COUNTYID': 'TextEdit', 'COUNTYCODE': 'TextEdit', 'COUNTYNAME': 'TextEdit', 'COUNTYENG': 'TextEdit', '總館分館區館 — 圖書館數_xls_縣市別': 'TextEdit', '總館分館區館 — 圖書館數_xls_總館': 'TextEdit', '總館分館區館 — 圖書館數_xls_分館': 'TextEdit', '總館分館區館 — 圖書館數_xls_區館': 'TextEdit', '總館分館區館 — 圖書館數_xls_總館2020': 'Range', '總館分館區館 — 圖書館數_xls_分館2020': 'Range', '總館分館區館 — 圖書館數_xls_區館2020': 'Range', });
lyr_2021_3.set('fieldImages', {'COUNTYID': 'TextEdit', 'COUNTYCODE': 'TextEdit', 'COUNTYNAME': 'TextEdit', 'COUNTYENG': 'TextEdit', '總館分館區館 — 圖書館數_xls_縣市別': 'TextEdit', '總館分館區館 — 圖書館數_xls_總館': 'TextEdit', '總館分館區館 — 圖書館數_xls_分館': 'TextEdit', '總館分館區館 — 圖書館數_xls_區館': 'TextEdit', '總館分館區館 — 圖書館數_xls_總館2020': 'Range', '總館分館區館 — 圖書館數_xls_分館2020': 'Range', '總館分館區館 — 圖書館數_xls_區館2020': 'Range', });
lyr__4.set('fieldImages', {'FID': 'TextEdit', 'COUN_ID': 'TextEdit', 'COUN_NA': 'TextEdit', 'TOWN_ID': 'TextEdit', 'TOWN_NA': 'TextEdit', 'POST': 'TextEdit', });
lyr_2_5.set('fieldImages', {'full_id': '', 'osm_id': '', 'amenity': '', 'name': '', 'addr_city': '', });
lyr_2021_1.set('fieldLabels', {'COUNTYID': 'no label', 'COUNTYCODE': 'no label', 'COUNTYNAME': 'no label', 'COUNTYENG': 'no label', '總館分館區館 — 圖書館數_xls_縣市別': 'no label', '總館分館區館 — 圖書館數_xls_總館': 'no label', '總館分館區館 — 圖書館數_xls_分館': 'no label', '總館分館區館 — 圖書館數_xls_區館': 'no label', '總館分館區館 — 圖書館數_xls_總館2020': 'no label', '總館分館區館 — 圖書館數_xls_分館2020': 'no label', '總館分館區館 — 圖書館數_xls_區館2020': 'no label', });
lyr_2021_2.set('fieldLabels', {'COUNTYID': 'no label', 'COUNTYCODE': 'no label', 'COUNTYNAME': 'no label', 'COUNTYENG': 'no label', '總館分館區館 — 圖書館數_xls_縣市別': 'no label', '總館分館區館 — 圖書館數_xls_總館': 'no label', '總館分館區館 — 圖書館數_xls_分館': 'no label', '總館分館區館 — 圖書館數_xls_區館': 'no label', '總館分館區館 — 圖書館數_xls_總館2020': 'no label', '總館分館區館 — 圖書館數_xls_分館2020': 'no label', '總館分館區館 — 圖書館數_xls_區館2020': 'no label', });
lyr_2021_3.set('fieldLabels', {'COUNTYID': 'no label', 'COUNTYCODE': 'no label', 'COUNTYNAME': 'no label', 'COUNTYENG': 'no label', '總館分館區館 — 圖書館數_xls_縣市別': 'no label', '總館分館區館 — 圖書館數_xls_總館': 'no label', '總館分館區館 — 圖書館數_xls_分館': 'no label', '總館分館區館 — 圖書館數_xls_區館': 'no label', '總館分館區館 — 圖書館數_xls_總館2020': 'no label', '總館分館區館 — 圖書館數_xls_分館2020': 'no label', '總館分館區館 — 圖書館數_xls_區館2020': 'no label', });
lyr__4.set('fieldLabels', {'FID': 'no label', 'COUN_ID': 'no label', 'COUN_NA': 'no label', 'TOWN_ID': 'no label', 'TOWN_NA': 'no label', 'POST': 'no label', });
lyr_2_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'amenity': 'no label', 'name': 'no label', 'addr_city': 'no label', });
lyr_2_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});