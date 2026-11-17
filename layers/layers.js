var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_EstacindeBombeoPlantadeTratamientoTanqueAccesorioCmaradeAccesoPitometroHidrantePilaMuestreoMacromedidoresVlvulaControlVlvulaSistemaRedMenorRedMatrizLneaLateralAduccinConduccinSectorizacinDistritoSubSectorSector_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.acueducto.com.co/sigueserverpublish/services/ACUEDUCTO_SERVICIOS/RedAcueducto/MapServer/WMSServer",
                              attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Estación de Bombeo/Planta de Tratamiento/Tanque/Accesorio/Cámara de Acceso/Pitometro/Hidrante/Pila Muestreo/Macromedidores/Válvula Control/Válvula Sistema/Red Menor/Red Matriz/Línea Lateral/Aducción/Conducción/Sectorización/Distrito/SubSector/Sector',
                            popuplayertitle: 'Estación de Bombeo/Planta de Tratamiento/Tanque/Accesorio/Cámara de Acceso/Pitometro/Hidrante/Pila Muestreo/Macromedidores/Válvula Control/Válvula Sistema/Red Menor/Red Matriz/Línea Lateral/Aducción/Conducción/Sectorización/Distrito/SubSector/Sector',
                            type: '',
                            opacity: 0.607000,
                            
                            
                          });
              wms_layers.push([lyr_EstacindeBombeoPlantadeTratamientoTanqueAccesorioCmaradeAccesoPitometroHidrantePilaMuestreoMacromedidoresVlvulaControlVlvulaSistemaRedMenorRedMatrizLneaLateralAduccinConduccinSectorizacinDistritoSubSectorSector_1, 0]);
var format_Lote_Proyecto_2 = new ol.format.GeoJSON();
var features_Lote_Proyecto_2 = format_Lote_Proyecto_2.readFeatures(json_Lote_Proyecto_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lote_Proyecto_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote_Proyecto_2.addFeatures(features_Lote_Proyecto_2);
var lyr_Lote_Proyecto_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote_Proyecto_2, 
                style: style_Lote_Proyecto_2,
                popuplayertitle: 'Lote_Proyecto',
                interactive: false,
                title: '<img src="styles/legend/Lote_Proyecto_2.png" /> Lote_Proyecto'
            });
var format_Plataforma_3 = new ol.format.GeoJSON();
var features_Plataforma_3 = format_Plataforma_3.readFeatures(json_Plataforma_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plataforma_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plataforma_3.addFeatures(features_Plataforma_3);
var lyr_Plataforma_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plataforma_3, 
                style: style_Plataforma_3,
                popuplayertitle: 'Plataforma',
                interactive: false,
                title: '<img src="styles/legend/Plataforma_3.png" /> Plataforma'
            });
var format_Limite_T1_4 = new ol.format.GeoJSON();
var features_Limite_T1_4 = format_Limite_T1_4.readFeatures(json_Limite_T1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_T1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_T1_4.addFeatures(features_Limite_T1_4);
var lyr_Limite_T1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_T1_4, 
                style: style_Limite_T1_4,
                popuplayertitle: 'Limite_T1',
                interactive: false,
                title: '<img src="styles/legend/Limite_T1_4.png" /> Limite_T1'
            });
var format_Limite_T2_5 = new ol.format.GeoJSON();
var features_Limite_T2_5 = format_Limite_T2_5.readFeatures(json_Limite_T2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_T2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_T2_5.addFeatures(features_Limite_T2_5);
var lyr_Limite_T2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_T2_5, 
                style: style_Limite_T2_5,
                popuplayertitle: 'Limite_T2',
                interactive: false,
                title: '<img src="styles/legend/Limite_T2_5.png" /> Limite_T2'
            });
var format_PilotesT1_6 = new ol.format.GeoJSON();
var features_PilotesT1_6 = format_PilotesT1_6.readFeatures(json_PilotesT1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PilotesT1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PilotesT1_6.addFeatures(features_PilotesT1_6);
var lyr_PilotesT1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PilotesT1_6, 
                style: style_PilotesT1_6,
                popuplayertitle: 'Pilotes T1',
                interactive: true,
                title: '<img src="styles/legend/PilotesT1_6.png" /> Pilotes T1'
            });
var format_PilotesT2_7 = new ol.format.GeoJSON();
var features_PilotesT2_7 = format_PilotesT2_7.readFeatures(json_PilotesT2_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PilotesT2_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PilotesT2_7.addFeatures(features_PilotesT2_7);
var lyr_PilotesT2_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PilotesT2_7, 
                style: style_PilotesT2_7,
                popuplayertitle: 'Pilotes T2',
                interactive: true,
                title: '<img src="styles/legend/PilotesT2_7.png" /> Pilotes T2'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_EstacindeBombeoPlantadeTratamientoTanqueAccesorioCmaradeAccesoPitometroHidrantePilaMuestreoMacromedidoresVlvulaControlVlvulaSistemaRedMenorRedMatrizLneaLateralAduccinConduccinSectorizacinDistritoSubSectorSector_1.setVisible(true);lyr_Lote_Proyecto_2.setVisible(true);lyr_Plataforma_3.setVisible(true);lyr_Limite_T1_4.setVisible(true);lyr_Limite_T2_5.setVisible(true);lyr_PilotesT1_6.setVisible(true);lyr_PilotesT2_7.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_EstacindeBombeoPlantadeTratamientoTanqueAccesorioCmaradeAccesoPitometroHidrantePilaMuestreoMacromedidoresVlvulaControlVlvulaSistemaRedMenorRedMatrizLneaLateralAduccinConduccinSectorizacinDistritoSubSectorSector_1,lyr_Lote_Proyecto_2,lyr_Plataforma_3,lyr_Limite_T1_4,lyr_Limite_T2_5,lyr_PilotesT1_6,lyr_PilotesT2_7];
lyr_Lote_Proyecto_2.set('fieldAliases', {'LOTCODIGO': 'LOTCODIGO', 'LOTDISPERS': 'LOTDISPERS', 'LOTILDISPE': 'LOTILDISPE', 'LOTUPREDIA': 'LOTUPREDIA', 'MANZCODIGO': 'MANZCODIGO', 'LOTDISTRIT': 'LOTDISTRIT', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Plataforma_3.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', 'width': 'width', });
lyr_Limite_T1_4.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_Limite_T2_5.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', });
lyr_PilotesT1_6.set('fieldAliases', {'id': 'id', 'x_plano': 'x_plano', 'y_plano': 'y_plano', 'torre': 'torre', 'replanteado': 'replanteado', 'x_campo': 'x_campo', 'y_campo': 'y_campo', 'desviacion radial': 'desviacion radial', 'volTeorico': 'volTeorico', 'volFinal': 'volFinal', 'FechaFundido': 'FechaFundido', 'FechaReplanteo': 'FechaReplanteo', });
lyr_PilotesT2_7.set('fieldAliases', {'id': 'id', 'x_plano': 'x_plano', 'y_plano': 'y_plano', 'torre': 'torre', 'replanteado': 'replanteado', 'x_campo': 'x_campo', 'y_campo': 'y_campo', 'desviacion radial': 'desviacion radial', 'volTeorico': 'volTeorico', 'volFinal': 'volFinal', 'FechaFundido': 'FechaFundido', 'FechaReplanteo': 'FechaReplanteo', });
lyr_Lote_Proyecto_2.set('fieldImages', {'LOTCODIGO': 'TextEdit', 'LOTDISPERS': 'TextEdit', 'LOTILDISPE': 'TextEdit', 'LOTUPREDIA': 'TextEdit', 'MANZCODIGO': 'TextEdit', 'LOTDISTRIT': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_Plataforma_3.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'width': 'TextEdit', });
lyr_Limite_T1_4.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_Limite_T2_5.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', });
lyr_PilotesT1_6.set('fieldImages', {'id': 'TextEdit', 'x_plano': 'TextEdit', 'y_plano': 'TextEdit', 'torre': 'TextEdit', 'replanteado': 'TextEdit', 'x_campo': 'TextEdit', 'y_campo': 'TextEdit', 'desviacion radial': 'TextEdit', 'volTeorico': 'TextEdit', 'volFinal': 'TextEdit', 'FechaFundido': 'TextEdit', 'FechaReplanteo': 'TextEdit', });
lyr_PilotesT2_7.set('fieldImages', {'id': 'TextEdit', 'x_plano': 'TextEdit', 'y_plano': 'TextEdit', 'torre': 'TextEdit', 'replanteado': 'TextEdit', 'x_campo': 'TextEdit', 'y_campo': 'TextEdit', 'desviacion radial': 'TextEdit', 'volTeorico': 'TextEdit', 'volFinal': 'TextEdit', 'FechaFundido': 'TextEdit', 'FechaReplanteo': 'TextEdit', });
lyr_Lote_Proyecto_2.set('fieldLabels', {'LOTCODIGO': 'no label', 'LOTDISPERS': 'no label', 'LOTILDISPE': 'no label', 'LOTUPREDIA': 'no label', 'MANZCODIGO': 'no label', 'LOTDISTRIT': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_Plataforma_3.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'thickness': 'no label', 'ext': 'no label', 'width': 'no label', });
lyr_Limite_T1_4.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_Limite_T2_5.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', });
lyr_PilotesT1_6.set('fieldLabels', {'id': 'header label - always visible', 'x_plano': 'header label - always visible', 'y_plano': 'header label - always visible', 'torre': 'header label - always visible', 'replanteado': 'header label - always visible', 'x_campo': 'header label - always visible', 'y_campo': 'header label - always visible', 'desviacion radial': 'header label - always visible', 'volTeorico': 'header label - always visible', 'volFinal': 'header label - always visible', 'FechaFundido': 'header label - always visible', 'FechaReplanteo': 'header label - always visible', });
lyr_PilotesT2_7.set('fieldLabels', {'id': 'header label - always visible', 'x_plano': 'header label - always visible', 'y_plano': 'header label - always visible', 'torre': 'header label - always visible', 'replanteado': 'header label - always visible', 'x_campo': 'no label', 'y_campo': 'no label', 'desviacion radial': 'header label - visible with data', 'volTeorico': 'header label - visible with data', 'volFinal': 'header label - visible with data', 'FechaFundido': 'header label - visible with data', 'FechaReplanteo': 'header label - visible with data', });
lyr_PilotesT2_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});