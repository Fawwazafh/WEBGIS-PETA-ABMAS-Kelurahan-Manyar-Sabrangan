ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([676013.484111, 9187369.928652, 703905.324700, 9204485.537177]);
var wms_layers = [];


        var lyr_MapboxSatelite_0 = new ol.layer.Tile({
            'title': 'Mapbox Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.webp?sku=101ifSAcKcVFs&access_token=pk.eyJ1IjoidW5mb2xkZWRpbmMiLCJhIjoiY2s5ZG90MjMzMDV6eDNkbnh2cDJvbHl4NyJ9.BT2LAvHi31vNNEplsgxucQ'
            })
        });

        var lyr_ESRIWorldTopo_1 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_PenggunaanLahanKelurahanManyarSabrangan_2 = new ol.format.GeoJSON();
var features_PenggunaanLahanKelurahanManyarSabrangan_2 = format_PenggunaanLahanKelurahanManyarSabrangan_2.readFeatures(json_PenggunaanLahanKelurahanManyarSabrangan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_PenggunaanLahanKelurahanManyarSabrangan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PenggunaanLahanKelurahanManyarSabrangan_2.addFeatures(features_PenggunaanLahanKelurahanManyarSabrangan_2);
var lyr_PenggunaanLahanKelurahanManyarSabrangan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PenggunaanLahanKelurahanManyarSabrangan_2, 
                style: style_PenggunaanLahanKelurahanManyarSabrangan_2,
                popuplayertitle: 'Penggunaan Lahan Kelurahan Manyar Sabrangan',
                interactive: true,
    title: 'Penggunaan Lahan Kelurahan Manyar Sabrangan<br />\
    <img src="styles/legend/PenggunaanLahanKelurahanManyarSabrangan_2_0.png" /> Fasilitas Umum<br />\
    <img src="styles/legend/PenggunaanLahanKelurahanManyarSabrangan_2_1.png" /> Perdagangan dan Jasa<br />\
    <img src="styles/legend/PenggunaanLahanKelurahanManyarSabrangan_2_2.png" /> Perkantoran<br />\
    <img src="styles/legend/PenggunaanLahanKelurahanManyarSabrangan_2_3.png" /> Perumahan<br />\
    <img src="styles/legend/PenggunaanLahanKelurahanManyarSabrangan_2_4.png" /> Peruntukan Lainnya<br />\
    <img src="styles/legend/PenggunaanLahanKelurahanManyarSabrangan_2_5.png" /> RTH<br />\
    <img src="styles/legend/PenggunaanLahanKelurahanManyarSabrangan_2_6.png" /> Sungai<br />' });
var format_AdministrasiSurabayaTimur_3 = new ol.format.GeoJSON();
var features_AdministrasiSurabayaTimur_3 = format_AdministrasiSurabayaTimur_3.readFeatures(json_AdministrasiSurabayaTimur_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_AdministrasiSurabayaTimur_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdministrasiSurabayaTimur_3.addFeatures(features_AdministrasiSurabayaTimur_3);
var lyr_AdministrasiSurabayaTimur_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdministrasiSurabayaTimur_3, 
                style: style_AdministrasiSurabayaTimur_3,
                popuplayertitle: 'Administrasi Surabaya Timur',
                interactive: true,
    title: 'Administrasi Surabaya Timur<br />\
    <img src="styles/legend/AdministrasiSurabayaTimur_3_0.png" /> Gubeng<br />\
    <img src="styles/legend/AdministrasiSurabayaTimur_3_1.png" /> Gunung Anyar<br />\
    <img src="styles/legend/AdministrasiSurabayaTimur_3_2.png" /> Mulyorejo<br />\
    <img src="styles/legend/AdministrasiSurabayaTimur_3_3.png" /> Rungkut<br />\
    <img src="styles/legend/AdministrasiSurabayaTimur_3_4.png" /> Sukolilo<br />\
    <img src="styles/legend/AdministrasiSurabayaTimur_3_5.png" /> Tambaksari<br />\
    <img src="styles/legend/AdministrasiSurabayaTimur_3_6.png" /> Tenggilis Mejoyo<br />' });
var format_SatuanPemetaanSasaranDarat_4 = new ol.format.GeoJSON();
var features_SatuanPemetaanSasaranDarat_4 = format_SatuanPemetaanSasaranDarat_4.readFeatures(json_SatuanPemetaanSasaranDarat_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_SatuanPemetaanSasaranDarat_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SatuanPemetaanSasaranDarat_4.addFeatures(features_SatuanPemetaanSasaranDarat_4);
var lyr_SatuanPemetaanSasaranDarat_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SatuanPemetaanSasaranDarat_4, 
                style: style_SatuanPemetaanSasaranDarat_4,
                popuplayertitle: 'Satuan Pemetaan Sasaran Darat',
                interactive: true,
    title: 'Satuan Pemetaan Sasaran Darat<br />\
    <img src="styles/legend/SatuanPemetaanSasaranDarat_4_0.png" /> Zona Defisit Infiltrasi<br />\
    <img src="styles/legend/SatuanPemetaanSasaranDarat_4_1.png" /> Zona Penyangga Alami<br />\
    <img src="styles/legend/SatuanPemetaanSasaranDarat_4_2.png" /> Zona Rawan Genangan Cepat<br />\
    <img src="styles/legend/SatuanPemetaanSasaranDarat_4_3.png" /> Zona Rentan Kumulatif<br />\
    <img src="styles/legend/SatuanPemetaanSasaranDarat_4_4.png" /> Zona Tangkapan Jenuh Limpasan<br />' });
var format_SatuanPemetaanSasaranMangrove_5 = new ol.format.GeoJSON();
var features_SatuanPemetaanSasaranMangrove_5 = format_SatuanPemetaanSasaranMangrove_5.readFeatures(json_SatuanPemetaanSasaranMangrove_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_SatuanPemetaanSasaranMangrove_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SatuanPemetaanSasaranMangrove_5.addFeatures(features_SatuanPemetaanSasaranMangrove_5);
var lyr_SatuanPemetaanSasaranMangrove_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SatuanPemetaanSasaranMangrove_5, 
                style: style_SatuanPemetaanSasaranMangrove_5,
                popuplayertitle: 'Satuan Pemetaan Sasaran Mangrove',
                interactive: true,
    title: 'Satuan Pemetaan Sasaran Mangrove<br />\
    <img src="styles/legend/SatuanPemetaanSasaranMangrove_5_0.png" /> Zona Darurat Pesisir & Abrasi<br />\
    <img src="styles/legend/SatuanPemetaanSasaranMangrove_5_1.png" /> Zona Pemeliharaan Mangrove Sedang<br />\
    <img src="styles/legend/SatuanPemetaanSasaranMangrove_5_2.png" /> Zona Pemulihan Tutupan Mangrove<br />\
    <img src="styles/legend/SatuanPemetaanSasaranMangrove_5_3.png" /> Zona Peredam Gelombang & Anomali Resapan<br />\
    <img src="styles/legend/SatuanPemetaanSasaranMangrove_5_4.png" /> Zona Restorasi & Pengkayaan Pesisir<br />\
    <img src="styles/legend/SatuanPemetaanSasaranMangrove_5_5.png" /> Zona Sabuk Hijau<br />' });
var format_KelurahanManyarSabrangan_6 = new ol.format.GeoJSON();
var features_KelurahanManyarSabrangan_6 = format_KelurahanManyarSabrangan_6.readFeatures(json_KelurahanManyarSabrangan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_KelurahanManyarSabrangan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KelurahanManyarSabrangan_6.addFeatures(features_KelurahanManyarSabrangan_6);
var lyr_KelurahanManyarSabrangan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KelurahanManyarSabrangan_6, 
                style: style_KelurahanManyarSabrangan_6,
                popuplayertitle: 'Kelurahan Manyar Sabrangan',
                interactive: true,
    title: 'Kelurahan Manyar Sabrangan<br />\
    <img src="styles/legend/KelurahanManyarSabrangan_6_0.png" /> RW 1<br />\
    <img src="styles/legend/KelurahanManyarSabrangan_6_1.png" /> RW 2<br />\
    <img src="styles/legend/KelurahanManyarSabrangan_6_2.png" /> RW 3<br />\
    <img src="styles/legend/KelurahanManyarSabrangan_6_3.png" /> RW 4<br />\
    <img src="styles/legend/KelurahanManyarSabrangan_6_4.png" /> RW 5<br />\
    <img src="styles/legend/KelurahanManyarSabrangan_6_5.png" /> RW 6<br />\
    <img src="styles/legend/KelurahanManyarSabrangan_6_6.png" /> RW 7<br />\
    <img src="styles/legend/KelurahanManyarSabrangan_6_7.png" /> RW 8<br />\
    <img src="styles/legend/KelurahanManyarSabrangan_6_8.png" /> RW 9<br />\
    <img src="styles/legend/KelurahanManyarSabrangan_6_9.png" /> RW 10<br />\
    <img src="styles/legend/KelurahanManyarSabrangan_6_10.png" /> RW 12<br />\
    <img src="styles/legend/KelurahanManyarSabrangan_6_11.png" /> RW 11<br />' });
var format_DaerahRawanGenangan_7 = new ol.format.GeoJSON();
var features_DaerahRawanGenangan_7 = format_DaerahRawanGenangan_7.readFeatures(json_DaerahRawanGenangan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_DaerahRawanGenangan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaerahRawanGenangan_7.addFeatures(features_DaerahRawanGenangan_7);
var lyr_DaerahRawanGenangan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaerahRawanGenangan_7, 
                style: style_DaerahRawanGenangan_7,
                popuplayertitle: 'Daerah Rawan Genangan',
                interactive: true,
                title: '<img src="styles/legend/DaerahRawanGenangan_7.png" /> Daerah Rawan Genangan'
            });
var format_DrainaseEksisting_8 = new ol.format.GeoJSON();
var features_DrainaseEksisting_8 = format_DrainaseEksisting_8.readFeatures(json_DrainaseEksisting_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_DrainaseEksisting_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrainaseEksisting_8.addFeatures(features_DrainaseEksisting_8);
var lyr_DrainaseEksisting_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrainaseEksisting_8, 
                style: style_DrainaseEksisting_8,
                popuplayertitle: 'Drainase Eksisting',
                interactive: true,
    title: 'Drainase Eksisting<br />\
    <img src="styles/legend/DrainaseEksisting_8_0.png" /> 1-Peningkatan Saluran Primer<br />\
    <img src="styles/legend/DrainaseEksisting_8_1.png" /> 1-Peningkatan Saluran Sekunder<br />\
    <img src="styles/legend/DrainaseEksisting_8_2.png" /> Saluran Primer<br />\
    <img src="styles/legend/DrainaseEksisting_8_3.png" /> Saluran Sekunder<br />\
    <img src="styles/legend/DrainaseEksisting_8_4.png" /> Saluran Tersier<br />' });
var format_JaringanJalan_9 = new ol.format.GeoJSON();
var features_JaringanJalan_9 = format_JaringanJalan_9.readFeatures(json_JaringanJalan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_JaringanJalan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_9.addFeatures(features_JaringanJalan_9);
var lyr_JaringanJalan_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalan_9, 
                style: style_JaringanJalan_9,
                popuplayertitle: 'Jaringan Jalan',
                interactive: true,
                title: '<img src="styles/legend/JaringanJalan_9.png" /> Jaringan Jalan'
            });
var format_JangkauanTitikRawanGenangan_10 = new ol.format.GeoJSON();
var features_JangkauanTitikRawanGenangan_10 = format_JangkauanTitikRawanGenangan_10.readFeatures(json_JangkauanTitikRawanGenangan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_JangkauanTitikRawanGenangan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JangkauanTitikRawanGenangan_10.addFeatures(features_JangkauanTitikRawanGenangan_10);
var lyr_JangkauanTitikRawanGenangan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JangkauanTitikRawanGenangan_10, 
                style: style_JangkauanTitikRawanGenangan_10,
                popuplayertitle: 'Jangkauan Titik Rawan Genangan',
                interactive: true,
    title: 'Jangkauan Titik Rawan Genangan<br />\
    <img src="styles/legend/JangkauanTitikRawanGenangan_10_0.png" /> 18 meter<br />\
    <img src="styles/legend/JangkauanTitikRawanGenangan_10_1.png" /> 56 meter<br />\
    <img src="styles/legend/JangkauanTitikRawanGenangan_10_2.png" /> 79 meter<br />\
    <img src="styles/legend/JangkauanTitikRawanGenangan_10_3.png" /> 112 meter<br />' });
var format_JangkauanTitikDrainaseBermasalah_11 = new ol.format.GeoJSON();
var features_JangkauanTitikDrainaseBermasalah_11 = format_JangkauanTitikDrainaseBermasalah_11.readFeatures(json_JangkauanTitikDrainaseBermasalah_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_JangkauanTitikDrainaseBermasalah_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JangkauanTitikDrainaseBermasalah_11.addFeatures(features_JangkauanTitikDrainaseBermasalah_11);
var lyr_JangkauanTitikDrainaseBermasalah_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JangkauanTitikDrainaseBermasalah_11, 
                style: style_JangkauanTitikDrainaseBermasalah_11,
                popuplayertitle: 'Jangkauan Titik Drainase Bermasalah',
                interactive: true,
    title: 'Jangkauan Titik Drainase Bermasalah<br />\
    <img src="styles/legend/JangkauanTitikDrainaseBermasalah_11_0.png" /> 33 meter<br />\
    <img src="styles/legend/JangkauanTitikDrainaseBermasalah_11_1.png" /> 45 meter<br />\
    <img src="styles/legend/JangkauanTitikDrainaseBermasalah_11_2.png" /> 47 meter<br />\
    <img src="styles/legend/JangkauanTitikDrainaseBermasalah_11_3.png" /> 50 meter<br />\
    <img src="styles/legend/JangkauanTitikDrainaseBermasalah_11_4.png" /> 52 meter<br />\
    <img src="styles/legend/JangkauanTitikDrainaseBermasalah_11_5.png" /> 53 meter<br />\
    <img src="styles/legend/JangkauanTitikDrainaseBermasalah_11_6.png" /> 60 meter<br />\
    <img src="styles/legend/JangkauanTitikDrainaseBermasalah_11_7.png" /> 65 meter<br />\
    <img src="styles/legend/JangkauanTitikDrainaseBermasalah_11_8.png" /> 73 meter<br />' });
var format_TitikRawanGenangan_12 = new ol.format.GeoJSON();
var features_TitikRawanGenangan_12 = format_TitikRawanGenangan_12.readFeatures(json_TitikRawanGenangan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_TitikRawanGenangan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikRawanGenangan_12.addFeatures(features_TitikRawanGenangan_12);
var lyr_TitikRawanGenangan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikRawanGenangan_12, 
                style: style_TitikRawanGenangan_12,
                popuplayertitle: 'Titik Rawan Genangan',
                interactive: true,
                title: '<img src="styles/legend/TitikRawanGenangan_12.png" /> Titik Rawan Genangan'
            });
var format_TitikDrainaseBermasalah_13 = new ol.format.GeoJSON();
var features_TitikDrainaseBermasalah_13 = format_TitikDrainaseBermasalah_13.readFeatures(json_TitikDrainaseBermasalah_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_TitikDrainaseBermasalah_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikDrainaseBermasalah_13.addFeatures(features_TitikDrainaseBermasalah_13);
var lyr_TitikDrainaseBermasalah_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikDrainaseBermasalah_13, 
                style: style_TitikDrainaseBermasalah_13,
                popuplayertitle: 'Titik Drainase Bermasalah',
                interactive: true,
                title: '<img src="styles/legend/TitikDrainaseBermasalah_13.png" /> Titik Drainase Bermasalah'
            });
var format_KantorKelurahan_14 = new ol.format.GeoJSON();
var features_KantorKelurahan_14 = format_KantorKelurahan_14.readFeatures(json_KantorKelurahan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_KantorKelurahan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorKelurahan_14.addFeatures(features_KantorKelurahan_14);
var lyr_KantorKelurahan_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KantorKelurahan_14, 
                style: style_KantorKelurahan_14,
                popuplayertitle: 'Kantor Kelurahan',
                interactive: true,
                title: '<img src="styles/legend/KantorKelurahan_14.png" /> Kantor Kelurahan'
            });
var format_NamaSaluranDrainase_15 = new ol.format.GeoJSON();
var features_NamaSaluranDrainase_15 = format_NamaSaluranDrainase_15.readFeatures(json_NamaSaluranDrainase_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_NamaSaluranDrainase_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NamaSaluranDrainase_15.addFeatures(features_NamaSaluranDrainase_15);
var lyr_NamaSaluranDrainase_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NamaSaluranDrainase_15, 
                style: style_NamaSaluranDrainase_15,
                popuplayertitle: 'Nama Saluran Drainase',
                interactive: true,
    title: 'Nama Saluran Drainase<br />\
    <img src="styles/legend/NamaSaluranDrainase_15_0.png" /> Kalidami<br />\
    <img src="styles/legend/NamaSaluranDrainase_15_1.png" /> Manyar Dukuh<br />\
    <img src="styles/legend/NamaSaluranDrainase_15_2.png" /> Manyar Kertoadi<br />\
    <img src="styles/legend/NamaSaluranDrainase_15_3.png" /> Manyar Pumpungan<br />\
    <img src="styles/legend/NamaSaluranDrainase_15_4.png" /> Manyar Tirtosari<br />\
    <img src="styles/legend/NamaSaluranDrainase_15_5.png" /> Manyar Tirtoyoso<br />\
    <img src="styles/legend/NamaSaluranDrainase_15_6.png" /> Raya Manyar<br />' });

lyr_MapboxSatelite_0.setVisible(true);lyr_ESRIWorldTopo_1.setVisible(true);lyr_PenggunaanLahanKelurahanManyarSabrangan_2.setVisible(true);lyr_AdministrasiSurabayaTimur_3.setVisible(true);lyr_SatuanPemetaanSasaranDarat_4.setVisible(true);lyr_SatuanPemetaanSasaranMangrove_5.setVisible(true);lyr_KelurahanManyarSabrangan_6.setVisible(true);lyr_DaerahRawanGenangan_7.setVisible(true);lyr_DrainaseEksisting_8.setVisible(true);lyr_JaringanJalan_9.setVisible(true);lyr_JangkauanTitikRawanGenangan_10.setVisible(true);lyr_JangkauanTitikDrainaseBermasalah_11.setVisible(true);lyr_TitikRawanGenangan_12.setVisible(true);lyr_TitikDrainaseBermasalah_13.setVisible(true);lyr_KantorKelurahan_14.setVisible(true);lyr_NamaSaluranDrainase_15.setVisible(true);
var layersList = [lyr_MapboxSatelite_0,lyr_ESRIWorldTopo_1,lyr_PenggunaanLahanKelurahanManyarSabrangan_2,lyr_AdministrasiSurabayaTimur_3,lyr_SatuanPemetaanSasaranDarat_4,lyr_SatuanPemetaanSasaranMangrove_5,lyr_KelurahanManyarSabrangan_6,lyr_DaerahRawanGenangan_7,lyr_DrainaseEksisting_8,lyr_JaringanJalan_9,lyr_JangkauanTitikRawanGenangan_10,lyr_JangkauanTitikDrainaseBermasalah_11,lyr_TitikRawanGenangan_12,lyr_TitikDrainaseBermasalah_13,lyr_KantorKelurahan_14,lyr_NamaSaluranDrainase_15];
lyr_PenggunaanLahanKelurahanManyarSabrangan_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Keterangan': 'Keterangan', 'Layer': 'Layer', 'Hirarki_1': 'Hirarki_1', 'Hirarki_2': 'Hirarki_2', 'Luas_Ha': 'Luas_Ha', });
lyr_AdministrasiSurabayaTimur_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SatuanPemetaanSasaranDarat_4.set('fieldAliases', {'gridcode': 'gridcode', 'Notasi': 'Notasi', 'REMARK': 'REMARK', 'Aktual': 'Aktual', 'gridcode_1': 'gridcode_1', 'Notasi_1': 'Notasi_1', 'REMARK_1': 'REMARK_1', 'Aktual_1': 'Aktual_1', 'NotasiAktu': 'NotasiAktu', 'Kelas': 'Kelas', 'Deskripsi': 'Deskripsi', 'Kode': 'Kode', 'FID_Banjir': 'FID_Banjir', 'gridcode_2': 'gridcode_2', 'Kelas_Rawa': 'Kelas_Rawa', 'FID_1': 'FID_1', 'Shape__': 'Shape__', 'gridcode_3': 'gridcode_3', 'Notasi_12': 'Notasi_12', 'REMARK_12': 'REMARK_12', 'Aktual_12': 'Aktual_12', 'gridcode_4': 'gridcode_4', 'Notasi__13': 'Notasi__13', 'REMARK__13': 'REMARK__13', 'Aktual__13': 'Aktual__13', 'NotasiAk_1': 'NotasiAk_1', 'Kelas_1': 'Kelas_1', 'Deskrips_1': 'Deskrips_1', 'Kode_1': 'Kode_1', 'FID_Banj_1': 'FID_Banj_1', 'gridcode_5': 'gridcode_5', 'Kelas_Ra_1': 'Kelas_Ra_1', 'Resapan': 'Resapan', 'Ket__SPS': 'Ket__SPS', 'Klasifikas': 'Klasifikas', });
lyr_SatuanPemetaanSasaranMangrove_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Klasifikas': 'Klasifikas', 'Klasifik_1': 'Klasifik_1', 'Klasifik_2': 'Klasifik_2', 'Klasifik_3': 'Klasifik_3', 'Klasifik_4': 'Klasifik_4', 'Klasifik_5': 'Klasifik_5', });
lyr_KelurahanManyarSabrangan_6.set('fieldAliases', {'FID_Batas_': 'FID_Batas_', 'WADMKD': 'WADMKD', 'UP': 'UP', 'RW': 'RW', });
lyr_DaerahRawanGenangan_7.set('fieldAliases', {'Id': 'Id', 'KETERANGAN': 'KETERANGAN', });
lyr_DrainaseEksisting_8.set('fieldAliases', {'FID_Rencan': 'FID_Rencan', 'FID_': 'FID_', 'Layer': 'Layer', 'FID_Batas_': 'FID_Batas_', 'UP': 'UP', 'Luas_Ha': 'Luas_Ha', });
lyr_JaringanJalan_9.set('fieldAliases', {'Status': 'Status', 'Nama': 'Nama', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Panjang': 'Panjang', 'UP': 'UP', });
lyr_JangkauanTitikRawanGenangan_10.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'NamaJalan': 'NamaJalan', 'RW': 'RW', 'layer': 'layer', 'path': 'path', 'Terdampak': 'Terdampak', });
lyr_JangkauanTitikDrainaseBermasalah_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'NamaJalan': 'NamaJalan', 'RW': 'RW', 'Radius': 'Radius', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Terdampak': 'Terdampak', });
lyr_TitikRawanGenangan_12.set('fieldAliases', {'Id': 'Id', 'NamaJalan': 'NamaJalan', 'RW': 'RW', 'Foto': 'Foto', 'DIAGRAM GA': 'DIAGRAM GA', 'ALAMAT': 'ALAMAT', });
lyr_TitikDrainaseBermasalah_13.set('fieldAliases', {'Id': 'Id', 'NamaJalan': 'NamaJalan', 'RW': 'RW', 'Radius': 'Radius', 'FOTO': 'FOTO', 'ALAMAT': 'ALAMAT', 'DIAGRAM': 'DIAGRAM', });
lyr_KantorKelurahan_14.set('fieldAliases', {'Id': 'Id', 'KETERANGAN': 'KETERANGAN', 'FOTO': 'FOTO', });
lyr_NamaSaluranDrainase_15.set('fieldAliases', {'FID_Rencan': 'FID_Rencan', 'FID_': 'FID_', 'Layer': 'Layer', 'FID_Batas_': 'FID_Batas_', 'UP': 'UP', 'Luas_Ha': 'Luas_Ha', 'Nama': 'Nama', });
lyr_PenggunaanLahanKelurahanManyarSabrangan_2.set('fieldImages', {'OBJECTID': 'Range', 'Keterangan': 'TextEdit', 'Layer': 'TextEdit', 'Hirarki_1': 'TextEdit', 'Hirarki_2': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_AdministrasiSurabayaTimur_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SatuanPemetaanSasaranDarat_4.set('fieldImages', {'gridcode': 'TextEdit', 'Notasi': 'TextEdit', 'REMARK': 'TextEdit', 'Aktual': 'TextEdit', 'gridcode_1': 'TextEdit', 'Notasi_1': 'TextEdit', 'REMARK_1': 'TextEdit', 'Aktual_1': 'TextEdit', 'NotasiAktu': 'TextEdit', 'Kelas': 'TextEdit', 'Deskripsi': 'TextEdit', 'Kode': 'TextEdit', 'FID_Banjir': 'TextEdit', 'gridcode_2': 'TextEdit', 'Kelas_Rawa': 'TextEdit', 'FID_1': 'TextEdit', 'Shape__': 'TextEdit', 'gridcode_3': 'TextEdit', 'Notasi_12': 'TextEdit', 'REMARK_12': 'TextEdit', 'Aktual_12': 'TextEdit', 'gridcode_4': 'TextEdit', 'Notasi__13': 'TextEdit', 'REMARK__13': 'TextEdit', 'Aktual__13': 'TextEdit', 'NotasiAk_1': 'TextEdit', 'Kelas_1': 'TextEdit', 'Deskrips_1': 'TextEdit', 'Kode_1': 'TextEdit', 'FID_Banj_1': 'TextEdit', 'gridcode_5': 'TextEdit', 'Kelas_Ra_1': 'TextEdit', 'Resapan': 'TextEdit', 'Ket__SPS': 'TextEdit', 'Klasifikas': 'TextEdit', });
lyr_SatuanPemetaanSasaranMangrove_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Klasifikas': 'TextEdit', 'Klasifik_1': 'TextEdit', 'Klasifik_2': 'TextEdit', 'Klasifik_3': 'TextEdit', 'Klasifik_4': 'TextEdit', 'Klasifik_5': 'TextEdit', });
lyr_KelurahanManyarSabrangan_6.set('fieldImages', {'FID_Batas_': 'Range', 'WADMKD': 'TextEdit', 'UP': 'TextEdit', 'RW': 'TextEdit', });
lyr_DaerahRawanGenangan_7.set('fieldImages', {'Id': 'Range', 'KETERANGAN': 'TextEdit', });
lyr_DrainaseEksisting_8.set('fieldImages', {'FID_Rencan': 'Range', 'FID_': 'Range', 'Layer': 'TextEdit', 'FID_Batas_': 'Range', 'UP': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_JaringanJalan_9.set('fieldImages', {'Status': 'TextEdit', 'Nama': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'Panjang': 'TextEdit', 'UP': 'TextEdit', });
lyr_JangkauanTitikRawanGenangan_10.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'NamaJalan': 'TextEdit', 'RW': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Terdampak': 'TextEdit', });
lyr_JangkauanTitikDrainaseBermasalah_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'NamaJalan': 'TextEdit', 'RW': 'TextEdit', 'Radius': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Terdampak': 'TextEdit', });
lyr_TitikRawanGenangan_12.set('fieldImages', {'Id': 'Range', 'NamaJalan': 'TextEdit', 'RW': 'TextEdit', 'Foto': 'ExternalResource', 'DIAGRAM GA': 'ExternalResource', 'ALAMAT': 'TextEdit', });
lyr_TitikDrainaseBermasalah_13.set('fieldImages', {'Id': 'Range', 'NamaJalan': 'TextEdit', 'RW': 'TextEdit', 'Radius': 'TextEdit', 'FOTO': 'ExternalResource', 'ALAMAT': 'TextEdit', 'DIAGRAM': 'ExternalResource', });
lyr_KantorKelurahan_14.set('fieldImages', {'Id': 'Range', 'KETERANGAN': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr_NamaSaluranDrainase_15.set('fieldImages', {'FID_Rencan': 'Range', 'FID_': 'Range', 'Layer': 'TextEdit', 'FID_Batas_': 'Range', 'UP': 'TextEdit', 'Luas_Ha': 'TextEdit', 'Nama': 'TextEdit', });
lyr_PenggunaanLahanKelurahanManyarSabrangan_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'Keterangan': 'hidden field', 'Layer': 'hidden field', 'Hirarki_1': 'hidden field', 'Hirarki_2': 'inline label - always visible', 'Luas_Ha': 'hidden field', });
lyr_AdministrasiSurabayaTimur_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'WADMKC': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SatuanPemetaanSasaranDarat_4.set('fieldLabels', {'gridcode': 'hidden field', 'Notasi': 'hidden field', 'REMARK': 'hidden field', 'Aktual': 'hidden field', 'gridcode_1': 'hidden field', 'Notasi_1': 'hidden field', 'REMARK_1': 'hidden field', 'Aktual_1': 'hidden field', 'NotasiAktu': 'hidden field', 'Kelas': 'hidden field', 'Deskripsi': 'hidden field', 'Kode': 'hidden field', 'FID_Banjir': 'hidden field', 'gridcode_2': 'hidden field', 'Kelas_Rawa': 'hidden field', 'FID_1': 'hidden field', 'Shape__': 'hidden field', 'gridcode_3': 'hidden field', 'Notasi_12': 'hidden field', 'REMARK_12': 'hidden field', 'Aktual_12': 'hidden field', 'gridcode_4': 'hidden field', 'Notasi__13': 'hidden field', 'REMARK__13': 'hidden field', 'Aktual__13': 'hidden field', 'NotasiAk_1': 'hidden field', 'Kelas_1': 'hidden field', 'Deskrips_1': 'hidden field', 'Kode_1': 'hidden field', 'FID_Banj_1': 'hidden field', 'gridcode_5': 'hidden field', 'Kelas_Ra_1': 'hidden field', 'Resapan': 'hidden field', 'Ket__SPS': 'hidden field', 'Klasifikas': 'inline label - always visible', });
lyr_SatuanPemetaanSasaranMangrove_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'Klasifikas': 'hidden field', 'Klasifik_1': 'hidden field', 'Klasifik_2': 'hidden field', 'Klasifik_3': 'hidden field', 'Klasifik_4': 'hidden field', 'Klasifik_5': 'inline label - visible with data', });
lyr_KelurahanManyarSabrangan_6.set('fieldLabels', {'FID_Batas_': 'hidden field', 'WADMKD': 'hidden field', 'UP': 'inline label - always visible', 'RW': 'inline label - always visible', });
lyr_DaerahRawanGenangan_7.set('fieldLabels', {'Id': 'hidden field', 'KETERANGAN': 'hidden field', });
lyr_DrainaseEksisting_8.set('fieldLabels', {'FID_Rencan': 'hidden field', 'FID_': 'hidden field', 'Layer': 'inline label - always visible', 'FID_Batas_': 'hidden field', 'UP': 'hidden field', 'Luas_Ha': 'hidden field', });
lyr_JaringanJalan_9.set('fieldLabels', {'Status': 'inline label - always visible', 'Nama': 'hidden field', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', 'Panjang': 'hidden field', 'UP': 'hidden field', });
lyr_JangkauanTitikRawanGenangan_10.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'NamaJalan': 'hidden field', 'RW': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Terdampak': 'inline label - always visible', });
lyr_JangkauanTitikDrainaseBermasalah_11.set('fieldLabels', {'OBJECTID': 'hidden field', 'Id': 'hidden field', 'NamaJalan': 'hidden field', 'RW': 'hidden field', 'Radius': 'hidden field', 'BUFF_DIST': 'hidden field', 'ORIG_FID': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Terdampak': 'inline label - always visible', });
lyr_TitikRawanGenangan_12.set('fieldLabels', {'Id': 'hidden field', 'NamaJalan': 'hidden field', 'RW': 'inline label - always visible', 'Foto': 'inline label - always visible', 'DIAGRAM GA': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', });
lyr_TitikDrainaseBermasalah_13.set('fieldLabels', {'Id': 'hidden field', 'NamaJalan': 'hidden field', 'RW': 'inline label - always visible', 'Radius': 'inline label - always visible', 'FOTO': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', 'DIAGRAM': 'inline label - always visible', });
lyr_KantorKelurahan_14.set('fieldLabels', {'Id': 'hidden field', 'KETERANGAN': 'inline label - always visible', 'FOTO': 'inline label - always visible', });
lyr_NamaSaluranDrainase_15.set('fieldLabels', {'FID_Rencan': 'hidden field', 'FID_': 'hidden field', 'Layer': 'hidden field', 'FID_Batas_': 'hidden field', 'UP': 'hidden field', 'Luas_Ha': 'hidden field', 'Nama': 'inline label - always visible', });
lyr_NamaSaluranDrainase_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});