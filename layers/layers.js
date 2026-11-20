var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Lote_Proyecto_1 = new ol.format.GeoJSON();
var features_Lote_Proyecto_1 = format_Lote_Proyecto_1.readFeatures(json_Lote_Proyecto_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lote_Proyecto_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote_Proyecto_1.addFeatures(features_Lote_Proyecto_1);
var lyr_Lote_Proyecto_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote_Proyecto_1, 
                style: style_Lote_Proyecto_1,
                popuplayertitle: 'Lote_Proyecto',
                interactive: false,
                title: '<img src="styles/legend/Lote_Proyecto_1.png" /> Lote_Proyecto'
            });
var format_Plataforma_2 = new ol.format.GeoJSON();
var features_Plataforma_2 = format_Plataforma_2.readFeatures(json_Plataforma_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plataforma_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plataforma_2.addFeatures(features_Plataforma_2);
var lyr_Plataforma_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plataforma_2, 
                style: style_Plataforma_2,
                popuplayertitle: 'Plataforma',
                interactive: false,
                title: '<img src="styles/legend/Plataforma_2.png" /> Plataforma'
            });
var format_Limite_T1_3 = new ol.format.GeoJSON();
var features_Limite_T1_3 = format_Limite_T1_3.readFeatures(json_Limite_T1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_T1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_T1_3.addFeatures(features_Limite_T1_3);
var lyr_Limite_T1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_T1_3, 
                style: style_Limite_T1_3,
                popuplayertitle: 'Limite_T1',
                interactive: false,
                title: '<img src="styles/legend/Limite_T1_3.png" /> Limite_T1'
            });
var format_Limite_T2_4 = new ol.format.GeoJSON();
var features_Limite_T2_4 = format_Limite_T2_4.readFeatures(json_Limite_T2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_T2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_T2_4.addFeatures(features_Limite_T2_4);
var lyr_Limite_T2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_T2_4, 
                style: style_Limite_T2_4,
                popuplayertitle: 'Limite_T2',
                interactive: false,
                title: '<img src="styles/legend/Limite_T2_4.png" /> Limite_T2'
            });
var format_PilotesT1_5 = new ol.format.GeoJSON();
var features_PilotesT1_5 = format_PilotesT1_5.readFeatures(json_PilotesT1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PilotesT1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PilotesT1_5.addFeatures(features_PilotesT1_5);
var lyr_PilotesT1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PilotesT1_5, 
                style: style_PilotesT1_5,
                popuplayertitle: 'Pilotes T1',
                interactive: true,
                title: '<img src="styles/legend/PilotesT1_5.png" /> Pilotes T1'
            });
var format_PilotesT2_6 = new ol.format.GeoJSON();
var features_PilotesT2_6 = format_PilotesT2_6.readFeatures(json_PilotesT2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PilotesT2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PilotesT2_6.addFeatures(features_PilotesT2_6);
var lyr_PilotesT2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PilotesT2_6, 
                style: style_PilotesT2_6,
                popuplayertitle: 'Pilotes T2',
                interactive: true,
                title: '<img src="styles/legend/PilotesT2_6.png" /> Pilotes T2'
            });
var format_pilotes_sc_7 = new ol.format.GeoJSON();
var features_pilotes_sc_7 = format_pilotes_sc_7.readFeatures(json_pilotes_sc_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pilotes_sc_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pilotes_sc_7.addFeatures(features_pilotes_sc_7);
var lyr_pilotes_sc_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pilotes_sc_7, 
                style: style_pilotes_sc_7,
                popuplayertitle: 'pilotes_sc',
                interactive: true,
                title: '<img src="styles/legend/pilotes_sc_7.png" /> pilotes_sc'
            });
var format_pilotes_T3_8 = new ol.format.GeoJSON();
var features_pilotes_T3_8 = format_pilotes_T3_8.readFeatures(json_pilotes_T3_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pilotes_T3_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pilotes_T3_8.addFeatures(features_pilotes_T3_8);
var lyr_pilotes_T3_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pilotes_T3_8, 
                style: style_pilotes_T3_8,
                popuplayertitle: 'pilotes_T3',
                interactive: true,
                title: '<img src="styles/legend/pilotes_T3_8.png" /> pilotes_T3'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Lote_Proyecto_1.setVisible(true);lyr_Plataforma_2.setVisible(true);lyr_Limite_T1_3.setVisible(true);lyr_Limite_T2_4.setVisible(true);lyr_PilotesT1_5.setVisible(true);lyr_PilotesT2_6.setVisible(true);lyr_pilotes_sc_7.setVisible(true);lyr_pilotes_T3_8.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Lote_Proyecto_1,lyr_Plataforma_2,lyr_Limite_T1_3,lyr_Limite_T2_4,lyr_PilotesT1_5,lyr_PilotesT2_6,lyr_pilotes_sc_7,lyr_pilotes_T3_8];
lyr_Lote_Proyecto_1.set('fieldAliases', {'LOTCODIGO': 'LOTCODIGO', 'LOTDISPERS': 'LOTDISPERS', 'LOTILDISPE': 'LOTILDISPE', 'LOTUPREDIA': 'LOTUPREDIA', 'MANZCODIGO': 'MANZCODIGO', 'LOTDISTRIT': 'LOTDISTRIT', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Plataforma_2.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', 'width': 'width', });
lyr_Limite_T1_3.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_Limite_T2_4.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_PilotesT1_5.set('fieldAliases', {'id': 'id', 'x_plano': 'x_plano', 'y_plano': 'y_plano', 'torre': 'torre', 'replanteado': 'replanteado', 'x_campo': 'x_campo', 'y_campo': 'y_campo', 'desviacion radial': 'desviacion radial', 'volTeorico': 'volTeorico', 'volFinal': 'volFinal', 'FechaFundido': 'FechaFundido', 'FechaReplanteo': 'FechaReplanteo', });
lyr_PilotesT2_6.set('fieldAliases', {'id': 'id', 'x_plano': 'x_plano', 'y_plano': 'y_plano', 'torre': 'torre', 'replanteado': 'replanteado', 'x_campo': 'x_campo', 'y_campo': 'y_campo', 'desviacion radial': 'desviacion radial', 'volTeorico': 'volTeorico', 'volFinal': 'volFinal', 'FechaFundido': 'FechaFundido', 'FechaReplanteo': 'FechaReplanteo', });
lyr_pilotes_sc_7.set('fieldAliases', {'id': 'id', 'x_plano': 'x_plano', 'y_plano': 'y_plano', 'torre': 'torre', 'replantead': 'replantead', 'x_campo': 'x_campo', 'y_campo': 'y_campo', 'desviacion': 'desviacion', 'volTeorico': 'volTeorico', 'volFinal': 'volFinal', 'FechaFundi': 'FechaFundi', 'FechaRepla': 'FechaRepla', });
lyr_pilotes_T3_8.set('fieldAliases', {'id': 'id', 'x_plano': 'x_plano', 'y_plano': 'y_plano', 'torre': 'torre', 'replantead': 'replantead', 'x_campo': 'x_campo', 'y_campo': 'y_campo', 'desviacion': 'desviacion', 'volTeorico': 'volTeorico', 'volFinal': 'volFinal', 'FechaFundi': 'FechaFundi', 'FechaRepla': 'FechaRepla', });
lyr_Lote_Proyecto_1.set('fieldImages', {'LOTCODIGO': 'TextEdit', 'LOTDISPERS': 'TextEdit', 'LOTILDISPE': 'TextEdit', 'LOTUPREDIA': 'TextEdit', 'MANZCODIGO': 'TextEdit', 'LOTDISTRIT': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_Plataforma_2.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'width': 'TextEdit', });
lyr_Limite_T1_3.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_Limite_T2_4.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_PilotesT1_5.set('fieldImages', {'id': 'TextEdit', 'x_plano': 'TextEdit', 'y_plano': 'TextEdit', 'torre': 'TextEdit', 'replanteado': 'TextEdit', 'x_campo': 'TextEdit', 'y_campo': 'TextEdit', 'desviacion radial': 'TextEdit', 'volTeorico': 'TextEdit', 'volFinal': 'TextEdit', 'FechaFundido': 'TextEdit', 'FechaReplanteo': 'TextEdit', });
lyr_PilotesT2_6.set('fieldImages', {'id': 'TextEdit', 'x_plano': 'TextEdit', 'y_plano': 'TextEdit', 'torre': 'TextEdit', 'replanteado': 'TextEdit', 'x_campo': 'TextEdit', 'y_campo': 'TextEdit', 'desviacion radial': 'TextEdit', 'volTeorico': 'TextEdit', 'volFinal': 'TextEdit', 'FechaFundido': 'TextEdit', 'FechaReplanteo': 'TextEdit', });
lyr_pilotes_sc_7.set('fieldImages', {'id': '', 'x_plano': '', 'y_plano': '', 'torre': '', 'replantead': '', 'x_campo': '', 'y_campo': '', 'desviacion': '', 'volTeorico': '', 'volFinal': '', 'FechaFundi': '', 'FechaRepla': '', });
lyr_pilotes_T3_8.set('fieldImages', {'id': '', 'x_plano': '', 'y_plano': '', 'torre': '', 'replantead': '', 'x_campo': '', 'y_campo': '', 'desviacion': '', 'volTeorico': '', 'volFinal': '', 'FechaFundi': '', 'FechaRepla': '', });
lyr_Lote_Proyecto_1.set('fieldLabels', {'LOTCODIGO': 'no label', 'LOTDISPERS': 'no label', 'LOTILDISPE': 'no label', 'LOTUPREDIA': 'no label', 'MANZCODIGO': 'no label', 'LOTDISTRIT': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_Plataforma_2.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'thickness': 'no label', 'ext': 'no label', 'width': 'no label', });
lyr_Limite_T1_3.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_Limite_T2_4.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_PilotesT1_5.set('fieldLabels', {'id': 'hidden field', 'x_plano': 'header label - always visible', 'y_plano': 'header label - always visible', 'torre': 'header label - always visible', 'replanteado': 'no label', 'x_campo': 'no label', 'y_campo': 'no label', 'desviacion radial': 'header label - always visible', 'volTeorico': 'header label - always visible', 'volFinal': 'header label - always visible', 'FechaFundido': 'header label - always visible', 'FechaReplanteo': 'header label - always visible', });
lyr_PilotesT2_6.set('fieldLabels', {'id': 'hidden field', 'x_plano': 'header label - always visible', 'y_plano': 'header label - always visible', 'torre': 'header label - always visible', 'replanteado': 'no label', 'x_campo': 'no label', 'y_campo': 'no label', 'desviacion radial': 'header label - visible with data', 'volTeorico': 'header label - visible with data', 'volFinal': 'header label - visible with data', 'FechaFundido': 'header label - visible with data', 'FechaReplanteo': 'header label - visible with data', });
lyr_pilotes_sc_7.set('fieldLabels', {'id': 'hidden field', 'x_plano': 'header label - always visible', 'y_plano': 'header label - always visible', 'torre': 'header label - always visible', 'replantead': 'no label', 'x_campo': 'no label', 'y_campo': 'no label', 'desviacion': 'no label', 'volTeorico': 'header label - always visible', 'volFinal': 'header label - always visible', 'FechaFundi': 'header label - always visible', 'FechaRepla': 'header label - always visible', });
lyr_pilotes_T3_8.set('fieldLabels', {'id': 'hidden field', 'x_plano': 'header label - always visible', 'y_plano': 'header label - always visible', 'torre': 'header label - always visible', 'replantead': 'no label', 'x_campo': 'no label', 'y_campo': 'no label', 'desviacion': 'no label', 'volTeorico': 'header label - always visible', 'volFinal': 'header label - always visible', 'FechaFundi': 'header label - always visible', 'FechaRepla': 'header label - always visible', });
lyr_pilotes_T3_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});