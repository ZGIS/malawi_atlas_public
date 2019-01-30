var layerJSON = {
  "MalawiAtlasLayers": {
    "thematicGroups": {
      "MALAWI_HAZARD": {
        name: "Malawi Hazard Map expert based",
        extent: [3650738, -1945482, 4053741, -1032934]
      },
      "LINTHIPE_LINGADZI": {
        name: "Linthipe/Lingadzi Study",
        extent: [3714696, -1644987, 3850868, -1515511]
      },
      "SALIMA_DISASTER": {
        name: "Salima Disaster Risk Reduction",
        extent: [3797310, -1586808, 3855005, -1507639]
      },
      "SALIMA_VULERNABILITY": {
        name: "Salima Vulnerability to floods",
        extent: [3807468, -1569169, 3850398, -1510389]
      },
      "SALIMA_RESILIENCE": {
        name: "Salima Resilience to food insecurity",
        extent: [3807468, -1569169, 3850398, -1510389]
      },
      "MANGOCHI_HAZARD": {
        name: "Mangochi Hazard and Vulnerability",
        extent: [3854490, -1666433, 3988592, -1516044]
      }
    },
    "parentGroups": [{
        "parentGroupName": "Salima",
        "groups": [{
          "groupName": "Hazards",
          "layers": [{
            "title": "Floods (DoDMA)",
            "name": "salima_hazard_flood_dodma",
            "description": "Flood hazard zones delineated through community mapping exercises conducted by the Government of Malawi Department of Disaster Management (DoDMA)",
            "year": "Unknown",
            "source": "DoDMA",
            "layer_extent": "Salima",
            "projection": "WGS 84 (EPSG: 4326)",
            "data_type": "Vector (.gpkg)",
            "vector_geometry": "Polygon"
          }, {
            "title": "Floods (COOPI PGIS 2013)",
            "name": "salima_hazard_pgis",
            "thematicGroup": "SALIMA_DISASTER",
            "description": "Flood zones as identified in participatory GIS (PGIS) exercises",
            "year": "Unknown",
            "source": "COOPI",
            "layer_extent": "Salima",
            "projection": "WGS 84 (EPSG: 4326)",
            "data_type": "Vector (.gpkg)",
            "vector_geometry": "Polygon"
          }, {
            "title": "Floods (Irrigation & Water Development Department)",
            "name": "salima_hazard_flood_irrigation_and_water_department",
            "description": "Unknown",
            "year": "Zones of flood hazard as identified by the Salima District Department of Water and Irrigation",
            "source": "Salima Department of Water and Irrigation",
            "layer_extent": "Salima",
            "projection": "WGS 84 (EPSG: 4326)",
            "data_type": "Vector (.gpkg)",
            "vector_geometry": "Polygon"
          }, {
            "title": "Floods (Forestry Department)",
            "name": "salima_hazard_flood_forestry_department",
            "description": "Zones of flood hazard as identified by the Salima District Department of Forestry.",
            "year": "Unknown",
            "source": "Salima Forestry Department",
            "layer_extent": "Salima",
            "projection": "WGS 84 (EPSG: 4326)",
            "data_type": "Vector (.gpkg)",
            "vector_geometry": "Polygon"
          }]
        }, {
          "groupName": "Vulnerability to floods",
          "layers": [{
            "title": "Flood vulnerability index",
            "name": "salima_vulnerability_to_floods_index_2014",
            "thematicGroup": "SALIMA_VULERNABILITY",
            "opacity": 0.6,
            "description": "The flood vulnerability index highlights the spatial patterns in socioeconomic vulnerability to floods across the district. The index is a relative measure of vulnerability for the district of Salima and is based on a number of indicators including poverty, market and urban area accessability, health centre and education accessability, crop density, early warning systems, access to evacuation sites / safe places and more. The index was developed based on an approach developed by Kienberger (2009/2012) in Mozambique. See attached report for more details.",
            "legendHeight": 150,
            "year": 2014,
            "source": "Z_GIS & COOPI",
            "layer_extent": "Salima",
            "projection": "WGS 84 (EPSG: 4326)",
            "data_type": "Vector (.gpkg)",
            "vector_geometry": "Polygon",
            "feature_info_activated": true
          }, {
            "title": "Piecharts",
            "name": "salima_vulnerability_to_floods_index_2014_chart",
            "thematicGroup": "SALIMA_VULERNABILITY",
            "description": null,
            "year": 2014,
            "source": "Z_GIS & COOPI",
            "layer_extent": "Salima",
            "feature_info_activated": true
          }, {
            "title": "Flood vulnerability index (selected GVHs)",
            "name": "salima_vulnerability_to_floods_index_gvh_2014",
            "thematicGroup": "SALIMA_VULERNABILITY",
            "description": "The flood vulnerability index highlights the spatial patterns in socioeconomic vulnerability to floods across the district. The index is a relative measure of vulnerability for the district of Salima and is based on a number of indicators including poverty, market and urban area accessability, health centre and education accessability, crop density, early warning systems, access to evacuation sites / safe places and more. The index was developed based on an approach developed by Kienberger (2009/2012) in Mozambique. This specific analysis was conducted for a number of selected GVHs in Salima District. See attached report for more details.",
            "year": 2014,
            "source": "Z_GIS & COOPI",
            "layer_extent": "Salima",
            "projection": "WGS 84 (EPSG: 4326)",
            "data_type": "Vector (.gpkg)",
            "vector_geometry": "Polygon",
            "field_aliases": {
              "gvh": "GVH",
              "ta_name": "TA",
              "ref": "Vulnerability to floods index"
            }
          }]
        }, {
          "groupName": "Resilience to food insecurity",
          "layers": [{
            "title": "Resilience to food insecurity index",
            "name": "salima_resilience_to_food_insecurity_index_2014",
            "thematicGroup": "SALIMA_RESILIENCE",
            "opacity": 0.6,
            "legendHeight": 150,
            "description": "The resilience to food insecurity index highlights the spatial patterns in resilience across the district. The index is a relative measure of resilience for the district of Salima and is based on a number of indicators including poverty, crop density, access to urban centres, road infrastructure, social safetynets, access to water, market accessability, education and healthcare accessability, conflict and hazard-prone zones. The index was developed based on an approach developed by Kienberger (2009/2012) in Mozambique. See attached report for more details.",
            "year": 2014,
            "source": "Z_GIS & COOPI",
            "layer_extent": "Salima",
            "projection": "WGS 84 (EPSG: 4326)",
            "Data type": "Vector (.gpkg)",
            "Vector_geometry": "Polygon",
            "feature_info_activated": true
          }, {
            "title": "Resilience to food insecurity index (charts)",
            "name": "salima_resilience_to_food_insecurity_index_2014_chart",
            "thematicGroup": "SALIMA_RESILIENCE",
            "description": null,
            "year": 2014,
            "source": "Z_GIS & COOPI",
            "layer_extent": "Salima",
            "feature_info_activated": true
          }, {
            "title": "GVH level",
            "name": "salima_resilience_to_food_insecurity_index_gvh_2014",
            "thematicGroup": "SALIMA_RESILIENCE",
            "description": "The resilience to food insecurity index highlights the spatial patterns in resilience across the district. The index is a relative measure of resilience for the district of Salima and is based on a number of indicators including poverty, crop density, access to urban centres, road infrastructure, social safetynets, access to water, market accessability, education and healthcare accessability, conflict and hazard-prone zones. The index was developed based on an approach developed by Kienberger (2009/2012) in Mozambique. This specific analysis was conducted for a number of selected GVHs. See attached report for more details.",
            "year": 2014,
            "source": "Z_GIS & COOPI",
            "layer_extent": "Salima",
            "projection": "WGS 84 (EPSG: 4326)",
            "Data type": "Vector (.gpkg)",
            "Vector_geometry": "Polygon",
            "field_aliases": {
              "gvh": "GVH",
              "ta_name": "TA",
              "ra_index": "Resilience to food insecurity (RA) index"
            },
          }]
        }, {
          "groupName": "Socioeconomic information",
          "layers": [{
            "title": "Village population / demographics 2008",
            "name": "salima_village_population",
            "description": "Statistics taken from the 2008 Malawi Census related to villages across Salima. Click on a village to view statistics such as population, number of households, males, females and average ages.",
            "year": 2008,
            "source": "COOPI and National Statistics Office",
            "layer_extent": "Salima",
            "projection": "WGS 84 (EPSG: 4326)",
            "data_type": "Vector (.gpkg)",
            "vector_geometry": "Point",
            "field_aliases": {
              "village": "Village",
              "gvh": "GVH",
              "ta": "TA",
              "categories": "Village waypoint",
              "pop": "Total population",
              "fu5": "Females under age 5",
              "f617": "Females aged 6 - 17",
              "f1859": "Females aged 18 - 59",
              "f60": "Females aged over 60",
              "mu5": "Males under age 5",
              "m617": "Males aged 6 - 17",
              "m1859": "Males aged 18 - 59",
              "m60": "Males aged over 60",
              "age_avg": "Average age",
              "fsiz_avg": "Average family size",
              "tot_hh": "Total number of households",
              "longitude": "utm_y",
              "utm": "utm_x",
              "elevation": "Elevation"
            },
          }]
        }, {
          "groupName": "Infrastructure and DRR facilities",
          "layers": [{
              "title": "Infrastructure and DRR facilities",
              "name": "salima_village_infrastructures",
              "description": "Features and facilities mapped in villages across Salima such as boreholes, village headman houses, schools, churches, mosques and more. Also contains statistics about GVHs.",
              "year": "Unknown",
              "source": "Z_GIS & COOPI",
              "layer_extent": "Salima",
              "projection": "WGS 84(EPSG: 4326)",
              "Datatype": "Vector(.gpkg)",
              "Vector_geometry": "Point",
              "field_aliases": {
                "village": "Village",
                "gvh": "GVH",
                "ta": "TA",
                "categories": "Featurecategory",
                "position": "Featuredetails",
                "longitude": "Longitude",
                "elevation": "Elevation"
              }
            },
            {
              "title": "Trained village civil protection comittees(VCPC)",
              "name": "salima_coopi_trained_vcpc_2009_2011",
              "thematicGroup": "SALIMA_DISASTER",
              "description": "Locations of village civil protection comittees trained by COOPI between 2009 and 2011",
              "year": 2012,
              "source": "COOPI",
              "layer_extent": "Salima",
              "projection": "WGS 84(EPSG: 4326)",
              "Data type": "Vector(.gpkg)",
              "Vector_geometry": "Point",
              "field_aliases": {
                "status": "Status",
                "founder": "Founder",
                "date": "Foundationdate",
                "info_mngr": "Informationmanager",
                "statuscom": "Statusofcommittee",
                "cont_plan_": "Contingency plan ?",
                "sim_exe": "Simulation exercise ?",
                "vh_map": "Mapping ?",
                "train_date": "Training date",
                "train_sub": "Training subject",
                "trainerorg": "Training organisation",
                "latitude": "Latitude",
                "longitude": "Longitude"
              }
            },
            {
              "title": "DRR infrastructures",
              "name": "salima_ddr_infrastructure_2011",
              "thematicGroup": "SALIMA_DISASTER",
              "description": "This layer indicates the infrastructure that may help reduce the risk from disasters,such as early warning systems, river gauges, identified evacuation shelters, grain silos and irrigation systems.Data collected by COOPI between 2010 and 2011.",
              "year": "Unknown",
              "source": "COOPI",
              "layer_extent": "Salima",
              "projection": "WGS 84(EPSG: 4326)",
              "Data type": "Vector(.gpkg)",
              "Vector_geometry": "Point",
              "field_aliases": {
                "infra_type": "Infrastructure type",
                "status": "Status",
                "info_statu": "information status",
                "status_com": "Status of committee",
                "date": "Date",
                "founder": "Founder",
                "constr_mat": "Construction material",
                "elevation": "Elevation(metres)",
                "evacuation": "Evacuation centre ?",
                "location": "Location",
                "lat": "latitude",
                "long": "longitude"
              }
            },
            {
              "title": "River Gauge levels",
              "name": "salima_river_gauge_level",
              "description": null,
              "year": null,
              "source": null,
              "layer_extent": null,
              "field_aliases": {
                "days": "Days",
                "elevation": "Elevation",
                "latitude": "Latitude",
                "longitude": "Longitude",
                "river": "River",
                "river_gaug": "River gauge"
              }
            },
            {
              "title": "Health Facilities",
              "name": "salima_health",
              "thematicGroup": "SALIMA_DISASTER",
              "description": "Locations of village clinics, health centres and dispensaries in Salima District, including the coordinates, and the name and founder, where available.Data collected by COOPI, 2014.",
              "year": 2014,
              "source": "COOPI",
              "layer_extent": "Salima",
              "projection": "WGS 84(EPSG: 4326)",
              "Data type": "Vector(.gpkg)",
              "Vector_geometry": "Point",
              "field_aliases": {
                "facil_type": "Facility type",
                "founder": "Founder",
                "location": "Location",
                "lat": "latitude",
                "long": "longitude",
              }
            },
            {
              "title": "Traditional authorities",
              "name": "salima_village_traditional_authorities",
              "thematicGroup": "SALIMA_DISASTER",
              "description": "Traditional authorities(TAs)and villages in Salima District",
              "year": 2008,
              "source": "Z_GIS & COOPI",
              "layer_extent": "Salima",
              "projection": "WGS 84(EPSG: 4326)",
              "Data type": "Vector(.gpkg)",
              "Vector_geometry": "Polygon"
            }
          ]
        }]
      },
      {
        "parentGroupName": "Nsanje",
        "groups": [{
            "groupName": "UAV",
            "layers": [{
                "title": "Extent",
                "name": "nsanje_extent_uav"
              },
              {
                "title": "Kernel Density",
                "name": "nsanje_kernel_density"
              },
              {
                "title": "Houses",
                "name": "nsanje_house_uav_coopi"
              },
              {
                "title": "Orthophoto",
                "name": "nsanje_uav",
                "description": "Extraction of settlements based on object-based image analysis (OBIA) approach and optical UAV-based imagery. Analysis conducted by Department of Geoinformatics - Z_GIS, University of Salzburg. In collaboration with COOPI and Concern Worldwide. Data provided by Agrisense.",
                "year": 2018,
              }
            ]
          },
          {
            "groupName": "Hazards",
            "layers": [{
              "title": "Strong wind hazards (PGIS)",
              "name": "nsanje_hazard_wind_2013",
              "description": "This dataset indicates strong wind hazards delineated in participatory GIS (PGIS) exercises undertaken with district officers in 2013.",
              "layer_extent": "Nsanje",
              "projection": "WGS 84 (EPSG: 4326)",
              "source": "COOPI & Z_GIS",
              "year": 2013,
              "data_type": "vector",
              "vector_geometry": "polygon"
            }, {
              "title": "Cholera incidences (PGIS)",
              "name": "nsanje_hazard_cholera_incidence_2013",
              "description": "This dataset indicates the locations of cholera outbreaks delineated in participatory GIS (PGIS) exercises undertaken with district officers in 2013.",
              "source": "COOPI & Z_GIS",
              "year": 2013,
              "layer_extent": "Nsanje",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_type": "Vector (.gpkg)",
              "vector_geometry": "Point"
            }, {
              "title": "Human - wildlife conflict (PGIS)",
              "name": "nsanje_human_wildlife_conflict_2013",
              "description": "Human wildlife conflict is common in Malawi, with crocodiles posing a particular problem to communities living near water sources. This dataset indicates known crocodile zones delineated in participatory GIS (PGIS) exercises undertaken with district officers in 2013.",
              "source": "COOPI & Z_GIS",
              "year": 2013,
              "layer_extent": "Nsanje",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_type": "Vector (.gpkg)",
              "vector_geometry": "Point"
            }, {
              "title": "Crop pests (PGIS)",
              "name": "nsanje_hazard_crop_pest_2013",
              "description": "This dataset indicates crop pest infestations delineated in participatory GIS (PGIS) exercises undertaken with district officers in 2013.",
              "source": "COOPI & Z_GIS",
              "year": 2013,
              "layer_extent": "Nsanje",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_Type": "Vector (.gpkg)",
              "vector_Geometry": "Point"
            }, {
              "title": "Flood hazard (PGIS)",
              "name": "nsanje_hazard_flood_2013",
              "description": "This dataset indicates flood hazard zones delineated in participatory GIS (PGIS) exercises undertaken with district officers in 2013.",
              "source": "COOPI & Z_GIS",
              "year": 2013,
              "layer_extent": "Nsanje",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_type": "Vector (.gpkg)",
              "vector_geometry": "Polygon"
            }, {
              "title": "Dry spell hazard (PGIS)",
              "name": "nsanje_hazard_dry_spell_2013",
              "description": "This dataset indicates dry spell hazard zones delineated in participatory GIS (PGIS) exercises undertaken with district officers in 2013.",
              "source": "COOPI & Z_GIS",
              "year": 2013,
              "layer_extent": "Nsanje",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_type": "Vector (.gpkg)",
              "vector_geometry": "polygon"
            }]
          },
          {
            "groupName": "Infrastructure and DRR facilities",
            "layers": [{
                "name": "nsanje_ngo_mapping_ta_summaries_coopi_2018",
                "title": "NGO mapping by TA",
                "feature_info_activated": true
              },
              {
                "name": "nsanje_ngo_mapping_by_project_coopi_2018",
                "title": "NGO mapping by Project",
                "feature_info_activated": true
              },
              {
                "title": "Airport (disaster management)",
                "name": "nsanje_drmairport_gps_2018",
                "description": "An airport used for disaster management and emergency response in Nsanje, georeferenced during a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO.",
                "year": "2018",
                "source": "COOPI and Concern Worldwide",
                "layer_extent": "Nsanje, targeted vulnerable communities",
                "projection": "WGS 84 / UTM Zone 36 South (EPSG: 32736)",
                "data_type": "Vector (geopackage)",
                "vector_geometry": "point",
                "field_aliases": {
                  "name": "Name",
                  "details": "Details",
                  "gvh": "GVH",
                  "ta": "TA",
                  "longitude": "Longitude",
                  "latitude": "Latitude",
                  "utm_x": "UTM Easting",
                  "utm_y": "UTM Northing",
                  "gps_prec": "GPS precision",
                  "elev_gps": "Elevation (GPS, metres)",
                  "elev_aster": "Elevation (from ASTER DEM, metres)",
                  "data_sourc": "Data collection method",
                  "data_date": "Date collected"
                }
              },
              {
                "title": "Boreholes",
                "name": "nsanje_waterpoints_gps_2018",
                "description": "Water points identified and georeferenced in targeted flood-prone areas of Nsanje District. Data was collected during a Mapathon in June 2018 and a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO. Knowing the location of water points is essential in emergency situations to ensure that clean water is accessable at all times.",
                "year": "2018",
                "source": "COOPI and Concern Worldwide",
                "layer_extent": "Nsanje, targeted vulnerable communities",
                "projection": "WGS 84 / UTM Zone 36 South (EPSG: 32736)",
                "data_type": "Vector (geopackage)",
                "vector_geometry": "point",
                "field_aliases": {
                  "type": "Type",
                  "details": "Details",
                  "supply": "Village supplied",
                  "gvh": "GVH",
                  "ta": "TA",
                  "longitude": "Longitude",
                  "latitude": "Latitude",
                  "utm_x": "UTM Easting",
                  "utm_y": "UTM Northing",
                  "gps_prec": "GPS precision",
                  "elev_gps": "Elevation - GPS (metres)",
                  "elev_aster": "Elevation (from ASTER DEM, metres)",
                  "data_sourc": "Data collection method",
                  "data_date": "Date collected"
                }
              },
              {
                "title": "Bridges",
                "name": "nsanje_bridges_gps_2018",
                "description": "Bridges identified and georeferenced in targeted flood-prone areas of Nsanje District. Data was collected during a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO. Bridges are critical for transport infrastructure but can easily become damaged in floods, so it is important to know their location.",
                "year": "2018",
                "source": "COOPI and Concern Worldwide",
                "layer_extent": "Nsanje, targeted vulnerable communities",
                "projection": "WGS 84 / UTM Zone 36 South (EPSG: 32736)",
                "data_type": "Vector (geopackage)",
                "vector_geometry": "point",
                "field_aliases": {
                  "name": "Name",
                  "details": "River that bridge crosses",
                  "type": "Construction material",
                  "gvh": "GVH",
                  "ta": "TA",
                  "longitude": "Longitude",
                  "latitude": "Latitude",
                  "utm_x": "UTM Easting",
                  "utm_y": "UTM Northing",
                  "gps_prec": "GPS precision",
                  "elev_gps": "Elevation - GPS (metres)",
                  "elev_aster": "Elevation (from ASTER DEM, metres)",
                  "data_sourc": "Data collection method",
                  "data_date": "Date collected"
                }
              },
              {
                "title": "Communication towers",
                "name": "nsanje_telecomtowers_gps_2018",
                "description": "Telecommunication towers identified and georeferenced in targeted flood-prone areas of Nsanje District. Data was collected during a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO. Communication is critical in emergencies, but towers can become damaged in strong winds and rains. Knowing the location of towers and the networks they cover is essential",
                "year": "2018",
                "source": "COOPI and Concern Worldwide",
                "layer_extent": "Nsanje, targeted vulnerable communities",
                "projection": "WGS 84 / UTM Zone 36 South (EPSG: 32736)",
                "data_type": "Vector (geopackage)",
                "vector_geometry": "point",
                "field_aliases": {
                  "network": "Network covered",
                  "details": "Details",
                  "gvh": "GVH",
                  "ta": "TA",
                  "longitude": "Longitude",
                  "latitude": "Latitude",
                  "utm_x": "UTM Easting",
                  "utm_y": "UTM Northing",
                  "gps_prec": "GPS precision (metres)",
                  "elev_gps": "Elevation (GPS, metres)",
                  "elev_aster": "Elevation (from ASTER DEM, metres)",
                  "data_sourc": "Data collection method",
                  "data_date": "Date collected"
                }
              },
              {
                "title": "Community / other centres",
                "name": "nsanje_community_and_othercentres_gps_2018",
                "description": "Community and other centres - including village halls, cooperatives, community-based organisations, ADMARC Centres and more, identified and georeferenced in targeted flood-prone areas of Nsanje District. Data was collected during a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO.",
                "year": "2018",
                "source": "COOPI and Concern Worldwide",
                "layer_extent": "Nsanje, targeted vulnerable communities",
                "projection": "WGS 84 / UTM Zone 36 South (EPSG: 32736)",
                "data_type": "Vector (geopackage)",
                "vector_geometry": "point",
                "field_aliases": {
                  "name": "Name",
                  "type": "Type",
                  "evac?": "Notes",
                  "details": "Details",
                  "gvh": "GVH",
                  "ta": "TA",
                  "longitude": "Longitude",
                  "latitude": "Latitude",
                  "utm_x": "UTM Easting",
                  "utm_y": "UTM Northing",
                  "gps_prec": "GPS precision",
                  "elev_gps": "Elevation (GPS, metres)",
                  "elev_aster": "Elevation (from ASTER DEM, metres)",
                  "data_sourc": "Data collection method",
                  "data_date": "Date collected"
                }
              },
              {
                "title": "Disaster mitigation",
                "name": "nsanje_disastermitigation_gps_2018",
                "description": "Disaster mitigation features - including irrigation schemes (for drought mitigation) and dykes (for flood mitigation), identified and georeferenced in targeted flood-prone areas of Nsanje District. Data was collected during a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO.",
                "year": "2018",
                "source": "COOPI and Concern Worldwide",
                "layer_extent": "Nsanje, targeted vulnerable communities",
                "projection": "WGS 84 / UTM Zone 36 South (EPSG: 32736)",
                "data_type": "Vector (geopackage)",
                "vector_geometry": "point",
                "field_aliases": {
                  "name": "Name",
                  "type": "Type",
                  "details": "Details",
                  "gvh": "GVH",
                  "ta": "TA",
                  "longitude": "Longitude",
                  "latitude": "Latitude",
                  "utm_x": "UTM Easting",
                  "utm_y": "UTM Northing",
                  "gps_prec": "GPS precision",
                  "elev_gps": "Elevation (GPS, metres)",
                  "elev_aster": "Elevation (from ASTER DEM, metres)",
                  "data_sourc": "Data collection method",
                  "data_date": "Date collected"
                }
              },
              {
                "title": "Early warning systems",
                "name": "nsanje_hazmonequip_gps_2018",
                "description": "Hazard monitoring equipment (river and rain gauges) identified and georeferenced in targeted flood-prone areas of Nsanje District. Data was collected during a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO. River and rain gauges act as an early warning system for floods if monitored reguarlly. When used efficiently, they can limit the impacts of flood events.",
                "year": "2018",
                "source": "COOPI and Concern Worldwide",
                "layer_extent": "Nsanje, targeted vulnerable communities",
                "projection": "WGS 84 / UTM Zone 36 South (EPSG: 32736)",
                "data_type": "Vector (geopackage)",
                "vector_geometry": "point",
                "field_aliases": {
                  "type": "Gauge type",
                  "river": "River where gauge is located",
                  "details": "Details",
                  "gvh": "GVH",
                  "ta": "TA",
                  "longitude": "Longitude",
                  "latitude": "Latitude",
                  "utm_x": "UTM Easting",
                  "utm_y": "UTM Northing",
                  "gps_prec": "GPS precision",
                  "elev_gps": "Elevation - GPS (metres)",
                  "elev_aster": "Elevation (from ASTER DEM, metres)",
                  "data_sourc": "Data collection method",
                  "data_date": "Date collected"
                }
              },
              {
                "title": "Health facilities",
                "name": "nsanje_health_gps_2018",
                "description": "Health facilities, including health centres and clinics identified and georeferenced in targeted flood-prone areas of Nsanje District. Data was collected during a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO",
                "year": "2018",
                "source": "COOPI and Concern Worldwide",
                "layer_extent": "Nsanje, targeted vulnerable communities",
                "projection": "WGS 84 / UTM Zone 36 South (EPSG: 32736)",
                "data_type": "Vector (geopackage)",
                "vector_geometry": "point",
                "field_aliases": {
                  "name": "Name",
                  "type": "Type",
                  "gvh": "GVH",
                  "ta": "TA",
                  "longitude": "Longitude",
                  "latitude": "Latitude",
                  "utm_x": "UTM Easting",
                  "utm_y": "UTM Northing",
                  "gps_prec": "GPS precision (metres)",
                  "elev_gps": "Elevation - GPS (metres)",
                  "elev_aster": "Elevation - from ASTER DEM (metres)",
                  "contact": "Contact details",
                  "tel": "Telephone number",
                  "hours": "Opening hours",
                  "doctors": "Number of doctors",
                  "nurses": "Number of nurses",
                  "beds": "Number of beds",
                  "services": "Services offered",
                  "wateraccess": "Access to water",
                  "toilets": "Number of toilets",
                  "notes": "Notes",
                  "data_sourc": "Data collection method",
                  "data_date": "Date collected"
                }
              },
              {
                "title": "Identified evacuation centres",
                "name": "nsanje_iddevacctrs_gps_2018",
                "description": "Evacuation centres explicitly identified and georeferenced in targeted flood-prone areas of Nsanje District. Data was collected during a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO. Note that there will be many other facilities suitable for evacuation centres, such as schools, churches and community centres. However, these have not been formally confirmed as safe evacuation centres.",
                "year": "2018",
                "source": "COOPI and Concern Worldwide",
                "layer_extent": "Nsanje, targeted vulnerable communities",
                "projection": "WGS 84 / UTM Zone 36 South (EPSG: 32736)",
                "data_type": "Vector (geopackage)",
                "vector_geometry": "point",
                "field_aliases": {
                  "name": "Name",
                  "facility": "Facility",
                  "type": "Facility type",
                  "gvh": "GVH",
                  "ta": "TA",
                  "longitude": "Longitude",
                  "latitude": "Latitude",
                  "utm_x": "UTM Easting",
                  "utm_y": "UTM Northing",
                  "gps_prec": "GPS precision (metres)",
                  "elev_gps": "Elevation (GPS, metres)",
                  "elev_aster": "Elevation - from ASTER DEM (metres)",
                  "evac?": "Notes",
                  "buildings": "Building details",
                  "grounds": "Grounds details",
                  "toilets": "Number of toilets",
                  "details": "Other notes",
                  "data_sourc": "Data collection method",
                  "data_date": "Date collected"
                }
              },
              {
                "title": "Markets",
                "name": "nsanje_markets_gps_2018",
                "description": "Markets identified and georeferenced in targeted flood-prone areas of Nsanje District. Data was collected during a Mapathon in June 2018 and a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO.",
                "year": "2018",
                "source": "COOPI and Concern Worldwide",
                "layer_extent": "Nsanje, targeted vulnerable communities",
                "projection": "WGS 84 / UTM Zone 36 South (EPSG: 32736)",
                "data_type": "Vector (geopackage)",
                "vector_geometry": "point",
                "field_aliases": {
                  "name": "Name",
                  "type": "Type",
                  "gvh": "GVH",
                  "ta": "TA",
                  "longitude": "Longitude",
                  "latitude": "Latitude",
                  "utm_x": "UTM Easting",
                  "utm_y": "UTM Northing",
                  "gps_prec": "GPS precision",
                  "elev_gps": "Elevation (GPS, metres)",
                  "elev_aster": "Elevation (from ASTER DEM, metres)",
                  "data_sourc": "Data collection method",
                  "data_date": "Date collected"
                }
              },
              {
                "title": "Power stations",
                "name": "nsanje_powerstations_gps_2018",
                "description": "Power stations identified and georeferenced in targeted flood-prone areas of Nsanje District. Data was collected during a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO. Power stations are critical in emergencies as they are sources of electricity. However they can become damaged in disasters and knowing their locations can help determine their risk.",
                "year": "2018",
                "source": "COOPI and Concern Worldwide",
                "layer_extent": "Nsanje, targeted vulnerable communities",
                "projection": "WGS 84 / UTM Zone 36 South(EPSG: 32736)",
                "data_type": "Vector (geopackage)",
                "vector_geometry": "point",
                "field_aliases": {
                  "type": "Type",
                  "name": "Name",
                  "details": "Details",
                  "gvh": "GVH",
                  "ta": "TA",
                  "longitude": "Longitude",
                  "latitude": "Latitude",
                  "utm_x": "UTM Easting",
                  "utm_y": "UTM Northing",
                  "gps_prec": "GPS precision (metres)",
                  "elev_gps": "Elevation (GPS, metres)",
                  "elev_aster": "Elevation (from ASTER DEM, metres)",
                  "data_sourc": "Data collection method",
                  "data_date": "Date collected"
                }
              },
              {
                "title": "Religious Centres",
                "name": "nsanje_religiouscentres_gps_2018",
                "description": "Churches and mosques identified and georeferenced in targeted flood-prone areas of Nsanje District. Data was collected during a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO. Some churches and mosques, if away from flood-prone areas could be used in an emergency for shyelter or to store supplies, for example.",
                "year": "2018",
                "source": "COOPI and Concern Worldwide",
                "layer_extent": "Nsanje, targeted vulnerable communities",
                "projection": "WGS 84 / UTM Zone 36 South (EPSG: 32736)",
                "data_type": "Vector (geopackage)",
                "vector_geometry": "point",
                "field_aliases": {
                  "name": "Name",
                  "type": "Type",
                  "gvh": "GVH",
                  "ta": "TA",
                  "longitude": "Longitude",
                  "latitude": "Latitude",
                  "utm_x": "utm easting",
                  "utm_y": "UTM Northing",
                  "gps_prec": "GPS precision (metres)",
                  "elev_gps": "Elevation - GPS (metres)",
                  "elev_aster": "Elevation - from ASTER DEM (metres)",
                  "toilets": "Number of toilets",
                  "wateraccess": "Water availability",
                  "grounds": "Grounds details",
                  "evac?": "Notes",
                  "details": "Other details",
                  "data_sourc": "Data collection method",
                  "data_date": "Date collected"
                }
              },
              {
                "title": "Schools",
                "name": "nsanje_educentres_gps_2018",
                "description": "Schools identified and georeferenced in targeted flood-prone areas of Nsanje District. Data was collected during a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO. If away from disaster-prone areas, schools can provide space and refuge for affected communities in the event of floods.",
                "year": "2018",
                "source": "COOPI and Concern Worldwide",
                "layer_extent": "Nsanje, targeted vulnerable communities",
                "projection": "WGS 84 / UTM Zone 36 South (EPSG: 32736)",
                "data_type": "Vector (geopackage)",
                "vector_geometry": "point",
                "field_aliases": {
                  "name": "Name",
                  "type": "Type",
                  "gvh": "GVH",
                  "ta": "TA",
                  "longitude": "Longitude",
                  "latitude": "Latitude",
                  "utm_x": "UTM Easting",
                  "utm_y": "UTM Northing",
                  "gps_prec": "GPS precision",
                  "elev_gps": "Elevation (GPS, metres)",
                  "elev_aster": "Elevation (from ASTER DEM, metres)",
                  "buildings": "Number of buildings",
                  "grounds": "Grounds details",
                  "toilets": "Number of toilets",
                  "wateraccess": "Access to water",
                  "evac?": "Details",
                  "notes": "Other details",
                  "village": "Village",
                  "data_sourc": "Data collection method",
                  "data_date": "Date collected"
                }
              },
              {
                "title": "Sports grounds",
                "name": "nsanje_sportsgrounds_gps_2018",
                "description": "Sports grounds identified and georeferenced in targeted flood-prone areas of Nsanje District. Data was collected during a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO. Sports grounds, if away from flood-prone areas could be used in an emergency for response and rehabilitation activities.",
                "year": "2018",
                "source": "COOPI and Concern Worldwide",
                "layer_extent": "Nsanje, targeted vulnerable communities",
                "projection": "WGS 84 / UTM Zone 36 South (EPSG: 32736)",
                "data_type": "Vector (geopackage)",
                "vector_geometry": "point",
                "field_aliases": {
                  "type": "Grounds type",
                  "name": "Name",
                  "evac?": "Notes",
                  "details": "Other details",
                  "gvh": "GVH",
                  "ta": "GVH",
                  "longitude": "Longitude",
                  "latitude": "Latitude",
                  "utm_x": "UTM Easting",
                  "utm_y": "UTM Northing",
                  "gps_prec": "GPS precision (metres)",
                  "elev_gps": "Elevation - GPS (metres)",
                  "elev_aster": "Elevation - from ASTER DEM (metres)",
                  "data_sourc": "Data collection method",
                  "data_date": "Date collected"
                }
              }
            ]
          }, {
            "groupName": "Shock sensitive social protection",
            "layers": [{
                "title": "Pre-targeted vulnerable villages",
                "name": "nsanje_cww_pretargeted_vulnerable_villages_2018",
                "description": "COOPI and Concern Worldwide (CWW) in a consortium led by COOPI are implementing a 15 month (Jul 2017-Oct 2018) ECHO funded ECHO/-SF/BUD/2017/91009 Strengthening the Disaster Risk Management System at national and district level project.  The project aims at strengthening Malawi's Disaster Risk Management (DRM) system at the national level and district level, and at increasing cash transfer preparedness in two districts (Mangochi and Nsanje). Specifically, the project will strengthen disaster-related information management, coordination and cash transfer capacities for improved disaster preparedness and response. Concern Worldwide is leading the implementation of improved cash transfer preparedness activities which includes predictive targeting and registration of �at risk� households living in disaster prone areas. This process is known as shock sensitive social protection (sssp). This data indicates the locations of villges where pre-targeting has been conducted",
                "year": "2018",
                "source": "Concern Worldwide and COOPI",
                "layer_extent": "Nsanje, where pre-targeting carried out",
                "projection": "WGS 84 (EPSG: 4326)",
                "data_type": "Vector (geopackage)",
                "vector_geometry": "point",
                "field_aliases": {
                  "village": "Village",
                  "gvh": "GVH",
                  "ta": "TA",
                  "latitude": "Latitude",
                  "longitude": "Longitude",
                  "elevation": "Elevation (GPS, metres)"
                }
              },
              {
                "title": "Pre-targeted vulnerable households",
                "name": "nsanje_cww_pretargeted_vulnerable_households_2018",
                "description": "COOPI and Concern Worldwide (CWW) in a consortium led by COOPI are implementing a 15 month (Jul 2017-Oct 2018) ECHO funded ECHO/-SF/BUD/2017/91009 Strengthening the Disaster Risk Management System at national and district level project.  The project aims at strengthening Malawi's Disaster Risk Management (DRM) system at the national level and district level, and at increasing cash transfer preparedness in two districts (Mangochi and Nsanje). Specifically, the project will strengthen disaster-related information management, coordination and cash transfer capacities for improved disaster preparedness and response. Concern Worldwide is leading the implementation of improved cash transfer preparedness activities which includes predictive targeting and registration of �at risk� households living in disaster prone areas. This process is known as shock sensitive social protection (sssp). This data indicates the locations of these households",
                "year": "2018",
                "source": "Concern Worldwide and COOPI",
                "layer_extent": "Nsanje, where pre-targeting carried out",
                "projection": "WGS 84 (EPSG: 4326)",
                "data_type": "Vector (geopackage)",
                "vector_geometry": "point",
                "field_aliases": {
                  "lat": "Latitude",
                  "long": "Longitude",
                  "elevation": "Elevation (GPS, metres)"
                }
              },
              {
                "title": "Pre-targeted vulnerable households (density)",
                "name": "nsanje_pre_targ_hh_density_2018",
                "description": "COOPI and Concern Worldwide (CWW) in a consortium led by COOPI are implementing a 15 month (Jul 2017-Oct 2018) ECHO funded ECHO/-SF/BUD/2017/91009 Strengthening the Disaster Risk Management System at national and district level project.  The project aims at strengthening Malawi's Disaster Risk Management (DRM) system at the national level and district level, and at increasing cash transfer preparedness in two districts (Mangochi and Nsanje). Specifically, the project will strengthen disaster-related information management, coordination and cash transfer capacities for improved disaster preparedness and response. Concern Worldwide is leading the implementation of improved cash transfer preparedness activities which includes predictive targeting and registration of �at risk� households living in disaster prone areas. This process is known as shock sensitive social protection (sssp). This data indicates the density of these households across the district",
                "year": "2018",
                "source": "Concern Worldwide and COOPI",
                "layer_extent": "Nsanje, where pre-targeting carried out",
                "projection": "WGS 84 / UTM 36 South (EPSG: 32736)",
                "data_type": "Raster (.tif)",
                "raster_properties": {
                  "value_meaning": "Density of vulnerable households pre-targeted by Concern Worldwide",
                  "value_statistics": "Min = 0, max = 383",
                  "spatial_resolution": "10m x 10m"
                }
              },
              {
                "title": "Cash distribution centres",
                "name": "nsanje_cdcs_gpsandmasdap_2018",
                "description": "Cash distribution centres identified and georeferenced. Data was collected during a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO. Some data was also taken from MASDAP.",
                "year": "2018",
                "source": "COOPI and Concern Worldwide",
                "layer_extent": "Nsanje, targeted vulnerable communities",
                "projection": "WGS 84 - UTM Zone 36 South (EPSG: 32736)",
                "data_type": "Vector (geopackage)",
                "vector_geometry": "point",
                "field_aliases": {
                  "name": "Name",
                  "facility": "Facility",
                  "details": "Details",
                  "evac?": "Other notes",
                  "gvh": "GVH",
                  "ta": "TA",
                  "longitude": "Longitude",
                  "latitude": "Latitude",
                  "utm_x": "UTM Easting",
                  "utm_y": "UTM Northing",
                  "prec_gps": "GPS precision, metres",
                  "elev_gps": "Elevation - GPS, metres",
                  "elev_aster": "Elevation - from ASTER DEM (metres)",
                  "buildings": "Buildings details",
                  "grounds": "Grounds details",
                  "wateraccess": "Access to water",
                  "toilets": "Number of toilets",
                  "data_sourc": "Data collection method",
                  "data_date": "Date collected"
                }
              }
            ]
          }
        ]
      },
      {
        "parentGroupName": "Mangochi",
        "groups": [{
            "groupName": "UAV",
            "layers": [{
              "title": "Extent",
              "name": "mangochi_uav_data_extent"
            }, {
              "title": "Kernel Density",
              "name": "mangochi_kernel_density"
            }, {
              "title": "Houses",
              "name": "mangochi_uav_houses_merged_coopi"
            }, {
              "title": "Orthophoto",
              "name": "mangochi_uav_imagery",
              "description": "Extraction of settlements based on object-based image analysis (OBIA) approach and optical UAV-based imagery. Analysis conducted by Department of Geoinformatics - Z_GIS, University of Salzburg. In collaboration with COOPI and Concern Worldwide. Data provided by Agrisense.",
              "year": 2018,
            }]
          }, {
            "groupName": "Hazards",
            "layers": [{
              "title": "Hazards (PGIS)",
              "name": "mangochi_hazardspoints_pgis_2018",
              "description": "The main hazards identified by community leaders in targeted communities in Mangochi District. This data was collected in June 2018 during a Mapathon organised by COOPI/Concern Worldwide and involving relevant VCPCs as well as staff from the Department of Disaster Management, Department of Surveys and the ADDRMO",
              "year": "2018",
              "source": "COOPI and Concern Worldwide",
              "layer_extent": "Mangochi, targeted vulnerable communities",
              "projection": "WGS 84 / UTM 36S (EPSG: 32736)",
              "data_type": "Vector (geopackage)",
              "vector_geometry": "point",
              "field_aliases": {
                "hazard": "Hazard",
                "gvh": "GVH",
                "ta": "TA",
                "notes": "Notes",
                "data_sourc": "Data collection method",
                "data_date": "Date collected"
              }
            }, {
              "title": "Flood frequency",
              "name": "mangochi_hazard_flood_return_period_2016_2017",
              "thematicGroup": "MANGOCHI_HAZARD",
              "description": "Floods have had devastating impact on people and livelihoods and have led to losses in GDP. Recent floods in Malawi caused serious damages and losses to the country. This dataset indicates the estimated return period of flood events in Mangochi District. The return period indicates how frequently an area is likely to be flooded; 10, 20 and 50 year return period flood extents are shown here. The dataset is a blend of three datasets: 1) The Malawi National Riverine Flood dataset developed by RCMRD and Malawi Department of Disaster Management Affairs(DoDMA) available on SERVIR http: //www.servirglobal.net ; 2) Community mapping of flood zone areas across the Mangochi district conducted by C12 Consultants in 2016 collating expert information on 1:50,000 scale topographic maps issued by the Malawi Surveys Department, then digitized on QGIS platform; and 3) Pluvial flood modelling done by C12 Consultants using the 30m digital terrain model for Mangochi district (10, 20 and 50 year return period) in HECRAS flood modelling software (developed by the US Army Corps of Engineers Hydrologic Engineering Center) and rainfall data from the Malawi Meteorological Services Department.",
              "year": "2016/17 (using data from various years)",
              "source": "C12 Consultants (2016/17), based on multiple datasets",
              "layer_extent": "Mangochi",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_type": "Raster (.tif)",
              "raster_properties": {
                "value_meaning": "Values relate to return period(RP)- 10, 20, 50 year RP",
                "value_statistics": "Min = 0, max = 50",
                "spatial_resolution": "0.1 x 0.1 degrees"
              }
            }, {
              "title": "Drought exposure",
              "name": "mangochi_hazard_drought_2016_2017",
              "thematicGroup": "MANGOCHI_HAZARD",
              "description": "“The increasing number of drought events in Malawi as a result of prolonged rainfall deficits/dry spells during critical crop stages and rainfall variations that are unpredictable and leads to loss of agricultural livelihoods and exacerbate food insecurity. More than 80% of the population in Malawi is dependent on rainfed agriculture and droughts have caused considerable deaths and losses to both humans and livestock. This dataset includes an estimation of the annual physical exposure to drought based on Standardized Precipitation Index. The dataset is based on four sources: 1) A global monthly gridded precipitation dataset obtained from the Climatic Research Unit (University of East Anglia); 2) A GIS modelling of global Standardized Precipitation Index based on Brad Lyon (IRI, Columbia University) methodology; 3) A population grid for the year 2010, provided by LandScanTM Global Population Database (Oak Ridge, TN: Oak Ridge National Laboratory). Unit is expected average annual population (2010 as the year of reference) exposed (inhabitants). This product was designed by UNEP/GRID-Europe for the Global Assessment Report on Risk Reduction (GAR). It was modelled using global data. Data was resampled to 1 km resolution using Resampling tool in ArcGIS; and 4) Community mapping of dry spell areas across the Mangochi district conducted by C12 Consultants in 2016 collating expert information on 1:50,000 scale topographic maps issued by the Malawi Surveys Department, then digitized on QGIS platform.”",
              "year": "2016/2017 (using data from various years)",
              "source": "C12 Consultants (2016/17), based on multiple datasets & COOPI",
              "layer_extent": "Mangochi",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_type": "Raster (.tif)",
              "raster_properties": {
                "value_meaning": "The expected annual population exposed to droughts",
                "value_statistics": "Min = 0, max = 13393",
                "spatial_resolution": "1km x 1km"
              }
            }, {
              "title": "Crop pest exposure - armyworms (PGIS)",
              "name": "mangochi_crop_pest_exposure_2016",
              "thematicGroup": "MANGOCHI_HAZARD",
              "description": "Crop pest infestations are annual recurring events across Malawi that can have detrimental effects on crop yields, livelihoods and food security if not responded to quickly and effectively. For Mangochi district specifically, armyworm infestations (and to a lesser degree red spider mite infestations) have been identified as one of the main natural hazards facing the district. This dataset delineates the infestation zones and quantifies the exposure to crop pests as a component of the exposure index.The dataset is based on primary data sourced on the ground across Mangochi district through community mapping exercises. Community mapping was conducted in seven traditional authorities by C12 Consultants in 2106 in collaboration with Cooperazione Internazionale (COOPI), District and Community representatives involved in Disaster Risk Management, i.e. Group Village Headmen (GVH), Meteorology Department officers, District Agricultural Development Officers (DADO) Area Civil Protection Committee (ACPC), Village Civil Protection Committee (VCPC), District Risk Management Officers (DRMO), District Health Officers (DHO), Education department representatives, Wildlife officers, and district Police representatives. Information on the extent of crop pest infestations was collated from the relevant officers and their expert judgement using 1:50,000 scale topographic maps issued by the Malawi Surveys Department, then digitized on QGIS platform. This data was cross-referenced and validated with written records from the Mangochi District Agricultural Development Office.",
              "year": "2016 - 17 (using data from various years)",
              "source": "C12 Consultants & COOPI, based on multiple datasets",
              "layer_extent": "Mangochi",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_type": "Vector (.gpkg)",
              "vector_geometry": "Polygon",
            }, {
              "title": "Human - wildlife conflict zones (PGIS)",
              "name": "mangochi_human_wildlife_conflict_2016",
              "thematicGroup": "MANGOCHI_HAZARD",
              "description": "Wildlife crossings into populated areas are relatively commonplace in coastal and forested areas of Mangochi, often causing damage to crops, property and causing death. Human-wildlife conflict with elephants, warthogs, crocodiles and hippos is considered a prominent natural hazard in Mangochi district. This dataset delineates the corridors of wildlife movement and common zones of presence and quantifies the exposure to wildlife-human conflict as a component of the exposure index. The dataset is based on primary data sourced on the ground across Mangochi district through community mapping exercises. Community mapping was conducted in seven traditional authorities by C12 Consultants in 2106 in collaboration with Cooperazione Internazionale (COOPI), District and Community representatives involved in Disaster Risk Management, i.e. Group Village Headmen (GVH), Meteorology Department officers, District Agricultural Development Officers (DADO) Area Civil Protection Committee (ACPC), Village Civil Protection Committee (VCPC), District Risk Management Officers (DRMO), District Health Officers (DHO), Education department representatives, Wildlife officers, and district Police representatives. Information on the extent of human-wildlife conflict was collated from the relevant officers and their expert judgement using 1:50,000 scale topographic maps issued by the Malawi Surveys Department, then digitized on QGIS platform.",
              "year": "2016/17, using data from various years",
              "source": "C12 Consultants & COOPI, based on multiple datasets",
              "layer_extent": "Mangochi",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_type": "Vector (.gpkg)",
              "vector_geometry": "Polygon",
            }, {
              "title": "Landslide hazard (PGIS)",
              "name": "mangochi_hazard_landslide_2016",
              "thematicGroup": "MANGOCHI_HAZARD",
              "description": "This dataset indicates the limited areas of Mangochi that are susceptible to damage by landslides. The dataset is based on primary data sourced on the ground across Mangochi district through community mapping exercises. Community mapping was conducted in seven traditional authorities by C12 Consultants in 2016 in collaboration with Cooperazione Internazionale (COOPI), District and Community representatives involved in Disaster Risk Management, i.e. Group Village Headmen (GVH), Meteorology Department officers, District Agricultural Development Officers (DADO) Area Civil Protection Committee (ACPC), Village Civil Protection Committee (VCPC), District Risk Management Officers (DRMO), District Health Officers (DHO), Education department representatives, Wildlife officers, and district Police representatives. Information on the extent of landslide hazards was collated from the relevant officers and their expert judgement using 1:50,000 scale topographic maps issued by the Malawi Surveys Department, then digitized on QGIS platform.",
              "year": "2016/2017, using data from various years",
              "source": "C12 Consultants & COOPI, based on multiple datasets",
              "layer_extent": "Mangochi",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_type": "Vector (.gpkg)",
              "vector_geometry": "Polygon",
            }, {
              "title": "Strong winds hazards (PGIS)",
              "name": "mangochi_hazard_strong_wind_2016_2017",
              "thematicGroup": "MANGOCHI_HAZARD",
              "description": "Certain areas of Mangochi district regularly experience strong gusts of wind that able to cause substantial damage to property, infrastructure and crops. This dataset delineates the zones of frequent strong/sustained wind occurrence. The dataset is based on primary data sourced on the ground across Mangochi district through community mapping exercises. Community mapping was conducted in seven traditional authorities by C12 Consultants in 2106 in collaboration with Cooperazione Internazionale (COOPI), District and Community representatives involved in Disaster Risk Management, i.e. Group Village Headmen (GVH), Meteorology Department officers, District Agricultural Development Officers (DADO) Area Civil Protection Committee (ACPC), Village Civil Protection Committee (VCPC), District Risk Management Officers (DRMO), District Health Officers (DHO), Education department representatives, Wildlife officers, and district Police representatives. Information on the extent of strong wind hazards was collated from the relevant officers and their expert judgement using 1:50,000 scale topographic maps issued by the Malawi Surveys Department, then digitized on QGIS platform.",
              "year": "2016/17",
              "source": "C12 Consultants & COOPI, based on multiple datasets",
              "layer_extent": "Mangochi",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_type": "Vector (.gpkg)",
              "vector_geometry": "Polygon"
            }]
          }, {
            "groupName": "Infrastructure and DRR facilities",
            "layers": [{
              "title": "NGO Mapping TA summaries",
              "name": "mangochi_ngo_mapping_cc_ec_drm_ta_summaries_coopi_2018",
              "feature_info_activated": true
            }, {
              "title": "NGO Mapping by Project",
              "name": "mangochi_ngo_mapping_cc_ec_drm_by_project_coopi_2018",
              "feature_info_activated": true
            }, {
              "title": "Bridges",
              "name": "mangochi_bridges_gps_2018",
              "description": "Bridges identified and georeferenced in targeted flood-prone areas of Mangochi District. Data was collected during a Mapathon in June 2018 and a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO. Bridges are critical for transport infrastructure but can easily become damaged in floods, so it is important to know their location.",
              "year": "2018",
              "source": "COOPI and Concern Worldwide",
              "layer_extent": "Mangochi, targeted vulnerable communities",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_type": "Vector (geopackage)",
              "vector_geometry": "point",
              "field_aliases": {
                "name": "Name",
                "river": "River that bridge crosses",
                "material": "Bridge construction material",
                "notes": "Notes",
                "gvh": "GVH",
                "ta": "TA",
                "longitude": "Longitude",
                "latitude": "Latitude",
                "utm_x": "UTM Easting",
                "utm_y": "UTM Northing",
                "gps_prec": "GPS precision",
                "elev_gps": "Elevation - GPS (metres)",
                "elev_aster": "Elevation (from ASTER DEM, metres)",
                "data_sourc": "Data collection method",
                "data_date": "Date collected"
              }
            }, {
              "title": "Boreholes",
              "name": "mangochi_waterpoints_gps_2018",
              "description": "Water points identified and georeferenced in targeted flood-prone areas of Mangochi District. Data was collected during a Mapathon in June 2018 and a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO. Knowing the location of water points is essential in emergency situations to ensure that clean water is accessable at all times.",
              "year": "2018",
              "source": "COOPI and Concern Worldwide",
              "layer_extent": "Mangochi, targeted vulnerable communities",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_type": "Vector (geopackage)",
              "vector_geometry": "point",
              "field_aliases": {
                "type": "Type",
                "details": "Details",
                "notes": "Notes",
                "supply": "Village supplied",
                "village": "Village",
                "gvh": "GVH",
                "ta": "TA",
                "longitude": "Longitude",
                "latitude": "Latitude",
                "utm_x": "UTM Easting",
                "utm_y": "UTM Northing",
                "prec_gps": "GPS precision",
                "elev_gps": "Elevation - GPS (metres)",
                "elev_aster": "Elevation (from ASTER DEM, metres)",
                "data_sourc": "Data collection method",
                "data_date": "Date collected"
              }
            }, {
              "title": "Communication towers",
              "name": "mangochi_telecomtowers_gps_2018",
              "description": "Telecommunication towers identified and georeferenced in targeted flood-prone areas of Mangochi District. Data was collected during a Mapathon in June 2018 and a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO. Communication is critical in emergencies, but towers can become damaged in strong winds and rains. Knowing the location of towers and the networks they cover is essential",
              "year": "2018",
              "source": "COOPI and Concern Worldwide",
              "layer_extent": "Mangochi, targeted vulnerable communities",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_type": "Vector (geopackage)",
              "vector_geometry": "point",
              "field_aliases": {
                "network": "Network covered",
                "details": "Details",
                "longitude": "Longitude",
                "latitude": "Latitude",
                "utm_x": "UTM Easting",
                "utm_y": "UTM Northing",
                "gps_prec": "GPS precision",
                "elev_gps": "Elevation (GPS, metres)",
                "elev_aster": "Elevation (from ASTER DEM, metres)",
                "data_sourc": "Data collection method",
                "data_date": "Date collected"
              }
            }, {
              "title": "Community centres",
              "name": "mangochi_communitycentres_gps_2018",
              "description": "Community centres - including village halls, cooperatives, community-based organisations, ADMARC Centres and more, identified and georeferenced in targeted flood-prone areas of Mangochi District. Data was collected during a Mapathon in June 2018 and a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO.",
              "year": "2018",
              "source": "COOPI and Concern Worldwide",
              "layer_extent": "Mangochi, targeted vulnerable communities",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_type": "Vector (geopackage)",
              "vector_geometry": "point",
              "field_aliases": {
                "name": "Name",
                "village": "Type",
                "details": "Details",
                "gvh": "GVH",
                "ta": "TA",
                "longitude": "Longitude",
                "latitude": "Latitude",
                "utm_x": "UTM Easting",
                "utm_y": "UTM NOrthing",
                "gps_prec": "GPS precision",
                "elev_gps": "Elevation (GPS, metres)",
                "elev_aster": "Elevation (from ASTER DEM, metres)",
                "data_sourc": "Data collection method",
                "data_date": "Date collected"
              }
            }, {
              "title": "Early warning systems",
              "name": "mangochi_hazmonequip_gps_2018",
              "description": "Hazard monitoring equipment (river and rain gauges) identified and georeferenced in targeted flood-prone areas of Mangochi District. Data was collected during a Mapathon in June 2018 and a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO. River and rain gauges act as an early warning system for floods if monitored reguarlly. When used efficiently, they can limit the impacts of flood events.",
              "year": "2018",
              "source": "COOPI and Concern Worldwide",
              "layer_extent": "Mangochi, targeted vulnerable communities",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_type": "Vector (geopackage)",
              "vector_geometry": "point",
              "field_aliases": {
                "type": "Gauge type",
                "notes": "Notes",
                "river": "River where gauge is located",
                "village": "Village",
                "gvh": "GVH",
                "ta": "TA",
                "longitude": "Longitude",
                "latitude": "Latitude",
                "utm_x": "UTM Easting",
                "utm_y": "UTM Northing",
                "gps_prec": "GPS precision",
                "elev_gps": "Elevation - GPS (metres)",
                "elev_aster": "Elevation (from ASTER DEM, metres)",
                "data_sourc": "Data collection method",
                "data_date": "Date collected"
              }
            }, {
              "title": "Evacuation routes (PGIS)",
              "name": "mangochi_evacroutes_pgis_2018",
              "description": "Evacuation routes identified by community leaders in targeted communities in Mangochi District. This data was collected in June 2018 during a Mapathon organised by COOPI/Concern Worldwide and involving relevant VCPCs as well as staff from the Department of Disaster Management, Department of Surveys and the ADDRMO. These evacuation routes generally lead from identified flood-prone areas to a safe area or evacuation centre.",
              "year": "2018",
              "source": "COOPI and Concern Worldwide",
              "layer_extent": "Mangochi, targeted vulnerable communities",
              "projection": "WGS 84 / UTM 36S (EPSG: 32736)",
              "data_type": "Vector (geopackage)",
              "vector_geometry": "Line",
              "field_aliases": {
                "source_vil": "Source village / hazadous area",
                "destin_ctr": "Evacuation centre / safe area",
                "gvh": "GVH",
                "ta": "TA",
                "data_sourc": "Data collection method",
                "data_date": "Date collected"
              }
            }, {
              "title": "Health facilities",
              "name": "mangochi_health_gps_2018",
              "description": "Health facilities, including health centres and clinics identified and georeferenced in targeted flood-prone areas of Mangochi District. Data was collected during a Mapathon in June 2018 and a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO",
              "year": "2018",
              "source": "COOPI and Concern Worldwide",
              "layer_extent": "Mangochi, targeted vulnerable communities",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_type": "Vector (geopackage)",
              "vector_geometry": "point",
              "field_aliases": {
                "name": "Name",
                "type": "Type",
                "details": "Details",
                "village": "Village",
                "gvh": "GVH",
                "ta": "TA",
                "longitude": "Longitude",
                "latitude": "Latitude",
                "utm_x": "UTM Easting",
                "utm_y": "UTM Northing",
                "gps_prec": "GPS precision (metres)",
                "elev_gps": "Elevation - GPS (metres)",
                "elev_aster": "Elevation - from ASTER DEM (metres)",
                "contact": "Contact details",
                "tel": "Telephone number",
                "hours": "Opening hours",
                "doctors": "Number of doctors",
                "nurses": "Number of nurses",
                "beds": "Number of beds",
                "services": "Services offered",
                "data_sourc": "Data collection method",
                "data_date": "Date collected"
              }
            }, {
              "title": "Identified evacuation centres",
              "name": "mangochi_iddevacctrs_gps_2018",
              "description": "Evacuation centres explicitly identified and georeferenced in targeted flood-prone areas of Mangochi District. Data was collected during a Mapathon in June 2018 and a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO. Note that there will be many other facilities suitable for evacuation centres, such as schools, churches and community centres. However, these have not been formally confirmed as safe evacuation centres.",
              "year": "2018",
              "source": "COOPI and Concern Worldwide",
              "layer_extent": "Mangochi, targeted vulnerable communities",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_type": "Vector (geopackage)",
              "vector_geometry": "point",
              "field_aliases": {
                "name": "Name",
                "type": "Type",
                "notes": "Notes",
                "gvh": "GVH",
                "ta": "TA",
                "longitude": "longitude",
                "latitude": "Latitude",
                "utm_x": "UTM Easting",
                "utm_y": "UTM Northing",
                "elev_aster": "Elevation - from ASTER DEM (metres)",
                "data_sourc": "Data collection method",
                "data_date": "Date collected"
              }
            }, {
              "title": "Maize mills",
              "name": "mangochi_maizemills_gps_2018",
              "description": "Maize mills identified and georeferenced in targeted flood-prone areas of Mangochi District. Data was collected during a Mapathon in June 2018 and a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO.",
              "year": "2018",
              "source": "COOPI and Concern Worldwide",
              "layer_extent": "Mangochi, targeted vulnerable communities",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_type": "Vector (geopackage)",
              "vector_geometry": "point",
              "field_aliases": {
                "name": "Name",
                "village": "Village",
                "gvh": "GVH",
                "ta": "TA",
                "longitude": "Longitude",
                "latitude": "Latitude",
                "gps_prec": "GPS precision",
                "elev_gps": "Elevation (GPS, metres)",
                "elev_aster": "Elevation (from ASTER DEM, metres)",
                "data_sourc": "Data collection method",
                "data_date": "Date collected"
              }
            }, {
              "title": "Markets",
              "name": "mangochi_markets_gps_2018",
              "description": "Markets identified and georeferenced in targeted flood-prone areas of Mangochi District. Data was collected during a Mapathon in June 2018 and a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO.",
              "year": "2018",
              "source": "COOPI and Concern Worldwide",
              "layer_extent": "Mangochi, targeted vulnerable communities",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_type": "Vector (geopackage)",
              "vector_geometry": "point",
              "field_aliases": {
                "name": "Name",
                "village": "Village",
                "gvh": "GVH",
                "ta": "TA",
                "longitude": "Longitude",
                "latitude": "Latitude",
                "utm_x": "UTM Easting",
                "utm_y": "UTM Northing",
                "gps_prec": "GPS precision",
                "elev_gps": "Elevation (GPS, metres)",
                "elev_aster": "Elevation (from ASTER DEM, metres)",
                "data_sourc": "Data collection method",
                "data_date": "Date collected"
              }
            }, {
              "title": "Police stations",
              "name": "mangochi_emergencyservices_gps_2018",
              "description": "Police stations identified and georeferenced in targeted flood-prone areas of Mangochi District. Data was collected during a Mapathon in June 2018 and a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO. The emergency services play an important role in emergency situations.",
              "year": "2018",
              "source": "COOPI and Concern Worldwide",
              "layer_extent": "Mangochi, targeted vulnerable communities",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_type": "Vector (geopackage)",
              "vector_geometry": "point",
              "field_aliases": {
                "service": "Service",
                "name": "Name",
                "religion": "Religion",
                "village": "Village/location",
                "gvh": "GVH",
                "ta": "TA",
                "longitude": "Longitude",
                "latitude": "Latitude",
                "utm_x": "UTM Easting",
                "utm_y": "UTM Northing",
                "elev_aster": "Elevation (from ASTER DEM, metres)",
                "data_sourc": "Data collection method",
                "data_date": "Date collected"
              }
            }, {
              "title": "Power lines",
              "name": "mangochi_powerlines_pgis_2018",
              "description": "Selected power lines identified and georeferenced in targeted flood-prone areas of Mangochi District. Data was collected during a Mapathon in June 2018 and a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO. Power stations are critical in emergencies as they are sources of electricity. However they can become damaged in disasters and knowing their locations can help determine their risk.",
              "year": "2018",
              "source": "COOPI and Concern Worldwide",
              "layer_extent": "Mangochi, targeted vulnerable communities",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_type": "Vector (geopackage)",
              "vector_geometry": "line",
              "field_aliases": {
                "gvh": "GVH",
                "data_sourc": "Data collection method",
                "data_date": "Date collected"
              }
            }, {
              "title": "Power stations",
              "name": "mangochi_powerstations_gps_2018",
              "description": "Power stations identified and georeferenced in targeted flood-prone areas of Mangochi District. Data was collected during a Mapathon in June 2018 and a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO. Power stations are critical in emergencies as they are sources of electricity. However they can become damaged in disasters and knowing their locations can help determine their risk.",
              "year": "2018",
              "source": "COOPI and Concern Worldwide",
              "layer_extent": "Mangochi, targeted vulnerable communities",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_type": "Vector (geopackage)",
              "vector_geometry": "point",
              "field_aliases": {
                "type": "Type",
                "village": "Village",
                "gvh": "GVH",
                "ta": "TA",
                "longitude": "Longitude",
                "latitude": "Latitude",
                "elev_aster": "Elevation (from ASTER DEM, metres)",
                "data_sourc": "Data collection method",
                "data_date": "Date collected"
              }
            }, {
              "title": "Religious Centres",
              "name": "mangochi_religiouscentres_gps_2018",
              "description": "Churches and mosques identified and georeferenced in targeted flood-prone areas of Mangochi District. Data was collected during a Mapathon in June 2018 and a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO. Some churches and mosques, if away from flood-prone areas could be used in an emergency for shyelter or to store supplies, for example.",
              "year": "2018",
              "source": "COOPI and Concern Worldwide",
              "layer_extent": "Mangochi, targeted vulnerable communities",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_type": "Vector (geopackage)",
              "vector_geometry": "point",
              "field_aliases": {
                "name": "Name",
                "type": "Type",
                "religion": "Religion",
                "details": "Details",
                "sanitation": "Name",
                "electric": "Electricity supply",
                "water": "Water availability",
                "capacity": "Approx. capacity",
                "village": "Village",
                "gvh": "GVH",
                "ta": "TA",
                "longitude": "Longitude",
                "latitude": "Latitude",
                "xcoord": "UTM Easting",
                "ycoord": "UTM Northing",
                "gps_prec": "GPS precision (metres)",
                "elev_gps": "Elevation - GPS (metres)",
                "elev_aster": "Elevation - from ASTER DEM (metres)",
                "data_sourc": "Data collection method",
                "data_date": "Date collected"
              }
            }, {
              "title": "Schools",
              "name": "mangochi_educationcentres_gps_2018",
              "description": "Schools identified and georeferenced in targeted flood-prone areas of Mangochi District. Data was collected during a Mapathon in June 2018 and a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO. If away from disaster-prone areas, schools can provide space and refuge for affected communities in the event of floods.",
              "year": "2018",
              "source": "COOPI and Concern Worldwide",
              "layer_extent": "Mangochi, targeted vulnerable communities",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_type": "Vector (geopackage)",
              "vector_geometry": "point",
              "field_aliases": {
                "name": "Name",
                "type": "Type",
                "details": "Details",
                "buildings": "Number of buildings",
                "wateracces": "Access to water",
                "toilets": "Number of toilets",
                "village": "Village",
                "gvh": "GVH",
                "ta": "TA",
                "longitude": "Longitude",
                "latitude": "Latitude",
                "utm_x": "UTM Easting",
                "utm_y": "UTM Northing",
                "gps_prec": "GPS precision",
                "elev_gps": "Elevation (GPS, metres)",
                "elev_aster": "Elevation (from ASTER DEM, metres)",
                "data_sourc": "Data collection method",
                "data_date": "Date collected"
              }
            }, {
              "title": "Sports grounds",
              "name": "mangochi_sportsgrounds_gps_2018",
              "description": "Sports grounds identified and georeferenced in targeted flood-prone areas of Mangochi District. Data was collected during a Mapathon in June 2018 and a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO. Sports grounds, if away from flood-prone areas could be used in an emergency for response and rehabilitation activities.",
              "year": "2018",
              "source": "COOPI and Concern Worldwide",
              "layer_extent": "Mangochi, targeted vulnerable communities",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_type": "Vector (geopackage)",
              "vector_geometry": "point",
              "field_aliases": {
                "facility": "Facility",
                "type": "Type",
                "details": "Details",
                "name": "Name",
                "longitude": "Longitude",
                "latitude": "Latitude",
                "xcoord": "UTM Easting",
                "ycoord": "UTM Northing",
                "gps_prec": "GPS precision (metres)",
                "elev_gps": "Elevation - GPS (metres)",
                "elev_aster": "Elevation - from ASTER DEM (metres)",
                "data_sourc": "Data collection method",
                "data_date": "Date collected"
              }
            }, {
              "title": "Village Headman House",
              "name": "mangochi_vhhouse_gps_2018",
              "description": "Village headman houses identified and georeferenced in targeted flood-prone areas of Mangochi District. Data was collected during a Mapathon in June 2018 and a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO.",
              "year": "2018",
              "source": "COOPI and Concern Worldwide",
              "layer_extent": "Mangochi, targeted vulnerable communities",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_type": "Vector (geopackage)",
              "vector_geometry": "point",
              "field_aliases": {
                "gvh": "GVH",
                "ta": "TA",
                "details": "Details",
                "xcoord": "Longitude",
                "ycoord": "Latitude",
                "elev_gps": "Elevation - GPS (metres)",
                "elev_aster": "Elevation (from ASTER DEM, metres)",
                "data_sourc": "Data collection method",
                "data_date": "Date collected"
              }
            }]
          },
          {
            "groupName": "Shock sensitive social protection",
            "layers": [{
                "title": "Pre-targeted vulnerable villages",
                "name": "mangochi_cww_pretargeted_vulnerable_villages_2018_n",
                "description": "COOPI and Concern Worldwide (CWW) in a consortium led by COOPI are implementing a 15 month (Jul 2017-Oct 2018) ECHO funded project (ECHO/-SF/BUD/2017/91009): Strengthening the Disaster Risk Management System at national and district level.  The project aims at strengthening Malawi's Disaster Risk Management (DRM) system at the national level and district level, and at increasing cash transfer preparedness in two districts (Mangochi and Nsanje). Specifically, the project will strengthen disaster-related information management, coordination and cash transfer capacities for improved disaster preparedness and response. Concern Worldwide is leading the implementation of improved cash transfer preparedness activities which includes predictive targeting and registration of �at risk� households living in disaster prone areas. This process is known as shock sensitive social protection (SSSP). This data indicates the locations of villges where pre-targeting has been conducted",
                "year": "2018",
                "source": "Concern Worldwide and COOPI",
                "layer_extent": "Mangochi, where pre-targeting carried out",
                "projection": "WGS 84 (EPSG: 4326)",
                "data_type": "Vector (geopackage)",
                "vector_geometry": "point",
                "field_aliases": {
                  "village": "Village",
                  "gvh": "GVH",
                  "ta": "TA",
                  "latitude": "Latitude",
                  "longitude": "Longitude",
                  "elevation": "Elevation (GPS, metres)"
                }
              },
              {
                "title": "Pre-targeted vulnerable households",
                "name": "mangochi_cww_pretargeted_vulnerable_households_2018",
                "description": "COOPI and Concern Worldwide (CWW) in a consortium led by COOPI are implementing a 15 month (Jul 2017-Oct 2018) ECHO funded project (ECHO/-SF/BUD/2017/91009): Strengthening the Disaster Risk Management System at national and district level.  The project aims at strengthening Malawi's Disaster Risk Management (DRM) system at the national level and district level, and at increasing cash transfer preparedness in two districts (Mangochi and Nsanje). Specifically, the project will strengthen disaster-related information management, coordination and cash transfer capacities for improved disaster preparedness and response. Concern Worldwide is leading the implementation of improved cash transfer preparedness activities which includes predictive targeting and registration of �at risk� households living in disaster prone areas. This process is known as shock sensitive social protection (SSSP). This data indicates the locations of these households",
                "year": "2018",
                "source": "Concern Worldwide and COOPI",
                "layer_extent": "Mangochi, where pre-targeting carried out",
                "projection": "WGS 84 (EPSG: 4326)",
                "data_type": "Vector (geopackage)",
                "vector_geometry": "point",
                "field_aliases": {
                  "lat": "Latitude",
                  "long": "Longitude",
                  "elevation": "Elevation (GPS, metres)"
                }
              },
              {
                "title": "Pre-targeted vulnerable households (density)",
                "name": "mangochi_pre_targ_hh_density_2018",
                "description": "COOPI and Concern Worldwide (CWW) in a consortium led by COOPI are implementing a 15 month (Jul 2017-Oct 2018) ECHO funded project (ECHO/-SF/BUD/2017/91009): Strengthening the Disaster Risk Management System at national and district level project.  The project aims at strengthening Malawi's Disaster Risk Management (DRM) system at the national level and district level, and at increasing cash transfer preparedness in two districts (Mangochi and Nsanje). Specifically, the project will strengthen disaster-related information management, coordination and cash transfer capacities for improved disaster preparedness and response. Concern Worldwide is leading the implementation of improved cash transfer preparedness activities which includes predictive targeting and registration of �at risk� households living in disaster prone areas. This process is known as shock sensitive social protection (SSSP). This data indicates the density of these households across the district",
                "year": "2018",
                "source": "Concern Worldwide and COOPI",
                "layer_extent": "Mangochi, where pre-targeting carried out",
                "projection": "WGS 84 / UTM 36 South (EPSG: 32736)",
                "data_type": "Raster (.tif)",
                "raster_properties": {
                  "value_meaning": "Density of vulnerable households pre-targeted by Concern Worldwide",
                  "value_statistics": "Min = 0, max = 383",
                  "spatial_resolution": "10m x 10m"
                }
              },
              {
                "title": "Cash distribution centres",
                "name": "mangochi_cdcs_gpsandmasdap_2018",
                "description": "Cash distribution centres identified and georeferenced. Data was collected during a Mapathon in June 2018 and a data collection activity in Spring 2018. These activities were organised by COOPI / Concern Worldwide and involved relevant VCPCs as well as staff from the Department of Disaster Management Affairs, Department of Surveys and the ADDRMO. Some data was also taken from MASDAP. Some cash distribution centres in the district have not been georeferenced.",
                "year": "2018",
                "source": "COOPI and Concern Worldwide",
                "layer_extent": "Mangochi, targeted vulnerable communities",
                "projection": "WGS 84 (EPSG: 4326)",
                "data_type": "Vector (geopackage)",
                "vector_geometry": "point",
                "field_aliases": {
                  "name": "Name",
                  "type": "Type",
                  "details": "Details",
                  "longitude": "Longitude",
                  "latitude": "Latitude",
                  "utm_x": "UTM Easting",
                  "utm_y": "UTM Northing",
                  "prec_gps": "GPS precision, metres",
                  "elev_gps": "Elevation - GPS, metres",
                  "elev_aster": "Elevation - from ASTER DEM (metres)",
                  "data_sourc": "Data collection method",
                  "data_date": "Date collected"
                }
              }
            ]
          },
          {
            "groupName": "Environment",
            "layers": [{
              "title": "Rivers (PGIS)",
              "name": "mangochi_rivers_pgis_2018",
              "description": "Rivers identified by community leaders in targeted communities in Mangochi District, delineated from satellite and UAV imagery. This data was collected in June 2018 during a Mapathon organised by COOPI/Concern Worldwide and involving relevant VCPCs as well as staff from the Department of Disaster Management, Department of Surveys and the ADDRMO",
              "year": "2018",
              "source": "COOPI and Concern Worldwide",
              "layer_extent": "Mangochi, targeted vulnerable communities",
              "projection": "WGS 84 / UTM 36S (EPSG: 32736)",
              "data_type": "Vector (geopackage)",
              "vector_geometry": "line",
              "field_aliases": {
                "name": "Name",
                "detail": "Type",
                "notes": "Notes",
                "ta": "TA",
                "data_sourc": "Data collection method",
                "data_date": "Date collected"
              }
            }]
          }
        ]
      },
      {
        "parentGroupName": "Linthipe/Lingadzi",
        "groups": [{
            "groupName": "Hazards",
            "layers": [{
              "title": "Lingadzi - Flood Affected Areas 03/2006",
              "name": "linthipe_lingadzi_lingadzi_flood_model_affected_areas_2006-03",
              "opacity": 0.6,
              "description": "This layer is a modelled estimation of the flood extent during the March 2006 flood event in the region. It was produced through a dyanamical flood modelling approach, based on precipitation data from six measuring stations in the region and a digital elevation model (DEM) from the Forestry Department. The 'zebra' effect in the downstream area is due to the accuracy of the DEM. See attached report for more details.",
              "year": 2012,
              "source": "Z_GIS & COOPI",
              "layer_extent": "Lingadzi Catchment",
              "projection": "WGS 84 (EPSG: 4326)",
              "Data_type": "Vector (.gpkg)",
              "vector_geometry": "Polygon"
            }, {
              "title": "Linthipe - Flood Affected Areas 03/2006",
              "name": "linthipe_lingadzi_linthipe_flood_model_affected_areas_2006-03",
              "opacity": 0.6,
              "description": "This layer is a modelled estimation of the flood extent during the March 2006 flood event in the region. It was produced through a dyanamical flood modelling approach, based on precipitation data from six measuring stations in the region and a digital elevation model (DEM) from the Forestry Department. The 'zebra' effect in the downstream area is due to the accuracy of the DEM. See attached report for more details.",
              "year": 2012,
              "source": "Z_GIS & COOPI",
              "layer_extent": "Linthipe Catchment",
              "projection": "WGS 84 (EPSG: 4326)",
              "Data_type": "Vector (.gpkg)",
              "vector_geometry": "Polygon"

            }]
          },
          {
            "groupName": "Environment",
            "layers": [{
              "title": "Lingadzi catchment",
              "name": "linthipe_lingadzi_lingadzi_catchment",
              "thematicGroup": "LINTHIPE_LINGADZI",
              "description": "Boundary of the Linthipe catchment area",
              "year": 2012,
              "source": "Z_GIS & COOPI",
              "layer_extent": "Lingadzi Catchment",
              "projection": "WGS 84 (EPSG: 4326)",
              "Data_type": "Vector (.gpkg)",
              "vector_geometry": "Polygon"
            }, {
              "title": "Linthipe catchment",
              "name": "linthipe_lingadzi_linthipe_catchment",
              "thematicGroup": "LINTHIPE_LINGADZI",
              "description": "Boundary of the Lingadzi catchment area",
              "year": 2012,
              "source": "Z_GIS & COOPI",
              "layer_extent": "Linthipe Catchment",
              "projection": "WGS 84 (EPSG: 4326)",
              "Data_type": "Vector (.gpkg)",
              "vector_geometry": "Polygon"
            }, {
              "title": "Change NDVI 1990/2009",
              "name": "linthipe_lingadzi_ndvi_change_1990_2009",
              "opacity": 0.6,
              "description": "Normalised difference vegetation index, or NDVI, is an index used as a measure of the health and thickness of green vegetation. A change analysis was conducted between 1990 and 2009 to investigate the change in vegetation over time. Small decreases in NDVI could indicate degradation of vegetation whilst large increases could indicate deforestation or land cover change. Increases in NDVI on the other hand could be due to afforestation activities.",
              "year": 2012,
              "source": "Z_GIS & COOPI",
              "layer_extent": "Linthipe and Lingadzi Catchments",
              "projection": "WGS 84 (EPSG: 4326)",
              "Data_type": "Vector (.gpkg)",
              "vector_geometry": "Polygon"
            }, {
              "title": "Change forest 1990/2009",
              "name": "linthipe_lingadzi_forest_change_1990_2009",
              "opacity": 0.6,
              "description": "This layer indicates the change in forest cover between 1990 and 2009 based on classification of two Landsat satellite images from 11/07/1990 and 29/06/2009.",
              "year": 2012,
              "source": "Z_GIS & COOPI",
              "layer_extent": "Linthipe and Lingadzi Catchments",
              "projection": "WGS 84 (EPSG: 4326)",
              "Data_type": "Vector (.gpkg)",
              "vector_geometry": "Polygon"
            }, {
              "title": "Land Use/Land Cover 2009",
              "name": "linthipe_lingadzi_land_use_land_cover_2009",
              "thematicGroup": "LINTHIPE_LINGADZI",
              "opacity": 0.6,
              "description": "Land use and land cover dataset derived from classification of a Landsat image from 29/06/2009. See full report for more details.",
              "year": 2012,
              "source": "Z_GIS & COOPI",
              "layer_extent": "Linthipe and Lingadzi Catchments",
              "projection": "WGS 84 (EPSG: 4326)",
              "Data_type": "Vector (.gpkg)",
              "vector_geometry": "Polygon"
            }, {
              "title": "Land Use/Land Cover 1990",
              "name": "linthipe_lingadzi_land_use_land_cover_1990",
              "thematicGroup": "LINTHIPE_LINGADZI",
              "opacity": 0.6,
              "description": "Land use and land cover dataset derived from classification of a Landsat image from 11/07/1990. See full report for more details.",
              "year": 2012,
              "source": "Z_GIS & COOPI",
              "layer_extent": "Linthipe and Lingadzi Catchments",
              "projection": "WGS 84 (EPSG: 4326)",
              "Data_type": "Vector (.gpkg)",
              "vector_geometry": "Polygon"
            }]
          }
        ]
      },
      {
        "parentGroupName": "Chikwawa",
        "groups": [{
            "groupName": "Hazards",
            "layers": [{
              "title": "Strong wind hazards",
              "name": "chikwawa_hazard_storm_2011",
              "description": "This dataset indicates storm hazards delineated in participatory GIS (PGIS) exercises undertaken with district officers in 2011.",
              "source": "COOPI & Z_GIS",
              "year": 2011,
              "layer_extent": "Chikwawa",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_type": "Vector (.gpkg)",
              "vector_geometry": "polygon"
            }, {
              "title": "Human - wildlife conflict (PGIS)",
              "name": "chikwawa_human_wildlife_conflict_2011",
              "description": "Human wildlife conflict is common in Malawi, with crocodiles posing a particular problem to communities living near water sources. Elephants meanwhile can come into conflict with human around croplands. This dataset indicates known crocodile and elephant zones delineated in participatory GIS (PGIS) exercises undertaken with district officers in 2011.",
              "source": "COOPI & Z_GIS",
              "year": 2011,
              "layer_extent": "Chikwawa",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_Type": "Vector (.gpkg)",
              "vector_geometry": "polygon"
            }, {
              "title": "Flood hazards (PGIS)",
              "name": "chikwawa_hazard_flood_2011",
              "description": "This dataset indicates flood hazard zones delineated in participatory GIS (PGIS) exercises undertaken with district officers in 2011.",
              "source": "COOPI & Z_GIS",
              "year": 2011,
              "layer_extent": "Chikwawa",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_Type": "Vector (.gpkg)",
              "vector_geometry": "polygon"
            }, {
              "title": "Cholera outbreaks (PGIS)",
              "name": "chikwawa_hazard_disease_incidence_2011",
              "description": "This dataset indicates the locations of cholera outbreaks delineated in participatory GIS (PGIS) exercises undertaken with district officers in 2011.",
              "source": "COOPI & Z_GIS",
              "year": 2011,
              "layer_extent": "Chikwawa",
              "projection": "WGS 84 (EPSG: 4326)",
              "data_Type": "Vector (.gpkg)",
              "vector_geometry": "point"
            }]
          } // todo: add remaining layers from this dataset
        ]
      },
      {
        "parentGroupName": "Malawi",
        "groups": [{
            "groupName": "Lower Shire",
            "layers": [{
              "title": "Lower Shire Flood Model - return period",
              "name": "lower_shire_q10_20_100_return_period_flood_model_atkins_2012",
              "description": "This dataset is a flood extent model produced by Atkins in 2012 for various return periods. The modelled spatial extent of flood water is represented for a 10-year, 20-year and 100-year return period flood event. The return period is a probabilistic estimate of the size of a flood event that is likely to occur in a specified amount of time. Therefore, a 100-year flood will be larger than a 10-year flood as a flood of that size is expected to occur less frequently, or approximately every 100 years.",
              "year": "2012",
              "layer_extent": "Lower Shire region, Malawi & Mozambique",
              "projection": "WGS 84 (EPSG: 4326)",
              "source": "MASDAP (http://www.masdap.mw/layers/geonode%3Aq100_atkins_flood_outline)",
              "computation": "Three separate vector files rasterized, added together using Raster Calculator in QGIS and values reclassified.",
              "data_type": "Raster",
              "raster_properties": {
                "value_statistics": "Min = 10; Max = 100; Units = years",
                "spatial_resolution": "Approx. 90m x 90m"
              }
            }]
          }, {
            "groupName": "Hazards",
            "layers": [{
                "title": "Drought",
                "name": "malawi_hazard_drought",
                "thematicGroup": "MALAWI_HAZARD",
                "opacity": 0.6,
                "description": "Hazard-prone areas in Malawi were delineated based on expert knowledge. Experts from the following institutions were interviewed: Department of Climate Change and Meteorogical Services, Department of Forestry, Department of Land Surveys, FEWSNET, Geological Survey Department, Ministry of Irrigation and Water Development, Ministry of Local Government and Rural Development, Ministry of Natural Resources Energy and the Environment, National Statistics Office, UNICEF, World Bank and the World Food Programme.",
                "year": 2011,
                "source": "Z_GIS & COOPI",
                "layer_extent": "Malawi",
                "projection": "WGS 84 (EPSG: 4326)",
                "data_type": "Vector (.gpkg)",
                "vector_geometry": "Polygon"

              },
              {
                "title": "Landslides",
                "name": "malawi_hazard_landslide",
                "thematicGroup": "MALAWI_HAZARD",
                "description": "Hazard-prone areas in Malawi were delineated based on expert knowledge. Experts from the following institutions were interviewed: Department of Climate Change and Meteorogical Services, Department of Forestry, Department of Land Surveys, FEWSNET, Geological Survey Department, Ministry of Irrigation and Water Development, Ministry of Local Government and Rural Development, Ministry of Natural Resources Energy and the Environment, National Statistics Office, UNICEF, World Bank and the World Food Programme.",
                "year": 2011,
                "source": "Z_GIS & COOPI",
                "layer_extent": "Malawi",
                "projection": "WGS 84 (EPSG: 4326)",
                "data_type": "Vector (.gpkg)",
                "vector_geometry": "Polygon"

              },
              {
                "title": "Wildfires",
                "name": "malawi_hazard_wildfire",
                "thematicGroup": "MALAWI_HAZARD",
                "description": "Hazard-prone areas in Malawi were delineated based on expert knowledge. Experts from the following institutions were interviewed: Department of Climate Change and Meteorogical Services, Department of Forestry, Department of Land Surveys, FEWSNET, Geological Survey Department, Ministry of Irrigation and Water Development, Ministry of Local Government and Rural Development, Ministry of Natural Resources Energy and the Environment, National Statistics Office, UNICEF, World Bank and the World Food Programme.",
                "year": 2011,
                "source": "Z_GIS & COOPI",
                "layer_extent": "Malawi",
                "projection": "WGS 84 (EPSG: 4326)",
                "data_type": "Vector (.gpkg)",
                "vector_geometry": "Polygon"

              },
              {
                "title": "Floods",
                "name": "malawi_hazard_flood",
                "thematicGroup": "MALAWI_HAZARD",
                "description": "Hazard-prone areas in Malawi were delineated based on expert knowledge. Experts from the following institutions were interviewed: Department of Climate Change and Meteorogical Services, Department of Forestry, Department of Land Surveys, FEWSNET, Geological Survey Department, Ministry of Irrigation and Water Development, Ministry of Local Government and Rural Development, Ministry of Natural Resources Energy and the Environment, National Statistics Office, UNICEF, World Bank and the World Food Programme.",
                "year": 2011,
                "source": "Z_GIS & COOPI",
                "layer_extent": "Malawi",
                "projection": "WGS 84 (EPSG: 4326)",
                "data_type": "Vector (.gpkg)",
                "vector_geometry": "Polygon"
              },
              {
                "title": "Earthquakes",
                "name": "malawi_hazard_earthquake",
                "thematicGroup": "MALAWI_HAZARD",
                "description": "Hazard-prone areas in Malawi were delineated based on expert knowledge. Experts from the following institutions were interviewed: Department of Climate Change and Meteorogical Services, Department of Forestry, Department of Land Surveys, FEWSNET, Geological Survey Department, Ministry of Irrigation and Water Development, Ministry of Local Government and Rural Development, Ministry of Natural Resources Energy and the Environment, National Statistics Office, UNICEF, World Bank and the World Food Programme.",
                "year": 2011,
                "source": "Z_GIS & COOPI",
                "layer_extent": "Malawi",
                "projection": "WGS 84 (EPSG: 4326)",
                "data_type": "Vector (.gpkg)",
                "vector_geometry": "Polygon"
              },
              {
                "title": "Drought Exposure",
                "name": "malawi_drought_exposure_unep",
                "description": "The increasing number of drought events in Malawi as a result of prolonged rainfall deficits/dry spells during critical crop stages and rainfall variations that are unpredictable and leads to loss of agricultural livelihoods and exacerbate food insecurity. More than 80% of the population in Malawi is dependent on rainfed agriculture and droughts have caused considerable deaths and losses to both humans and livestock. This dataset includes an estimation of theannual physical exposure to drought based on Standardized Precipitation Index. Values represent the estimated number of people exposed to drought hazards annually. This product was designed by UNEP/GRID-Europe for the Global Assessment Report on Risk Reduction (GAR). It was modelled using global data. The source and a full description can be found here: http://preview.grid.unep.ch/index.php?preview=data&events=droughts&evcat=4",
                "year": "1980 -2001",
                "source": "UNEP (http://preview.grid.unep.ch/index.php?preview=data&events=droughts&evcat=4)",
                "layer_extent": "Malawi",
                "projection": "WGS 84 (EPSG:4326)",
                "data_type": "Raster",
                "raster_properties": {
                  "Values meaning": "Values represent the estimated number of people exposed annually to drought hazards",
                  "Values statistics": "Min = 37; Max = 2776",
                  "Units": "Metres",
                  "Spatial resolution": "0.04 x 0.04 degrees"
                }
              }
            ]
          },
          {
            "groupName": "Infrastructure and DRR facilities",
            "layers": [{
                "title": "Health facilities",
                "name": "malawi_health_masdap_2013",
                "description": "Health facilities, including health centres and clinics mapped by Malawian Government departments and the World Bank, uploaded to MASDAP in 2013. Health facilities provide medical assistance and medicine which can be essential in time of emergencies for treating injuries and for example, water-borne diseases in case of flooding events.",
                "year": 2013,
                "source": "MASDAP",
                "layer_extent": "Malawi",
                "projection": "WGS 84 (EPSG: 4326)",
                "data_type": "Vector (.gpkg)",
                "vector_geometry": "Point",
                "field_aliases": {
                  "fac_name": "Facility name",
                  "facility": "Facility type",
                  "district": "District",
                  "x": "Longitude",
                  "y": "Latitude",
                  "phone": "Telephone number",
                  "box_no": "PO Box Number",
                  "fax": "Fax number",
                  "road": "Road access",
                  "dist_dho": "Distance to nearest district hospital",
                  "time": "Time to nearest district hospital",
                  "no_bed": "Number of beds",
                  "dat_constr": "Date constructed",
                  "fundedby": "Funder",
                  "population": "Population served",
                  "no_op": "Number of out-patients",
                  "no_birth_": "Number of births"
                }
              },
              {
                "title": "Schools",
                "name": "malawi_school_masdap_2013",
                "description": "Primary and secondary school locations in Malawi based on data from MASDAP collected in 2013. Schools when out of disaster-prone areas, can be used as evacuation centres in case of flood emergencies for example.",
                "year": 2013,
                "source": "MASDAP",
                "layer_extent": "Malawi",
                "projection": "WGS 84 (EPSG: 4326)",
                "data_type": "Vector (.gpkg)",
                "vector_geometry": "Point",
                "field_aliases": {
                  "school_nam": "School name",
                  "district": "District",
                  "emis_nume": "EMIS number",
                  "teach_2013": "Teachers (2013)",
                  "boys_2013": "Male students (2013)",
                  "girls_2013": "Female students (2013)"
                }
              }
            ]
          },
          {
            "groupName": "Population",
            "group_description": "This layer shows key statistics from the 2008 national census in Malawi conducted by the National Statistics Office. Specifically, the number of households, total population, male and female population are provided for each ‘enumeration area’ (EA), which are areas used by the NSO to summarise census data. You may also view the area of each EA in square kilometres plus the population density in persons per square kilometre.",
            "layers": [{
                "title": "Proportion of males to females",
                "name": "malawi_population_gender_2008",
                "detailed_description": "The proportion of males to females in each enumeration area (EA)",
                "year": 2008,
                "layer_extent": "Malawi",
                "projection": "WGS 84 (EPSG: 4326)",
                "source": "Malawi National Statistics Office, accessed from MASDAP",
                "data_type": "Vector (.gpkg)",
                "vector_geometry": "Polygon"
              },
              {
                "title": "Household density",
                "name": "malawi_population_household_density_2008",
                "detailed_description": "The average density of households in number of households per square kilometre in each enumeration area (EA)",
                "year": 2008,
                "layer_extent": "Malawi",
                "projection": "WGS 84 (EPSG: 4326)",
                "source": "Malawi National Statistics Office, accessed from MASDAP",
                "data_type": "Vector (.gpkg)",
                "vector_geometry": "polygon"
              },
              {
                "title": "Population density",
                "name": "malawi_population_density_2008",
                "detailed_description": "The average density of population in number of persons per quare kilometre in each enumeration area (EA)",
                "year": 2008,
                "layer_extent": "Malawi",
                "projection": "WGS 84 (EPSG: 4326)",
                "source": "Malawi National Statistics Office, accessed from MASDAP",
                "data_type": "Vector (.gpkg)",
                "vector_geometry": "polygon"
              }
            ]
          }, {
            "groupName": "Socioeconomic information",
            "group_description": "Boundaries represent aggregated rural enumeration areas (EAs) developed by the Malawi National Statistics Office Typically, two or three EAs were combined to form the aggregated EA units. Note that urban areas are excluded. The data in the attribute file is related to poverty mapping estimates made for each aggregated EA and the inputs and outputs of a geographically weighted regression analysis of the determinants of poverty prevalence in the rural aggregated EAs. This includes educational attainment, access to the nearest market, dependency ratio and Gini (inequality) index.",
            "field_aliases": {
              "adm2name": "District",
              "adm3name": "TA",
              "gini": "GINI",
              "fgt_0": "Poverty headcount",
              "acceso": "Average travel travel time to nearest TA-level market centre (hours)",
              "depratio": "Dependency ratio",
              "maxed": "Mean max years education"
            },
            "layers": [{
                "title": "Poverty headcount",
                "name": "malawi_poverty_headcount",
                "description": "proportion of all individuals whose level of consumption is below the basic-needs poverty line. Basic needs refer to food, water, shelter and clothing. Values range from 0 to 1, where 1 means all the population live below the poverty line.",
                "year": 1998,
                "layer_extent": "Malawi",
                "projection": "WGS 84 (EPSG: 4326)",
                "source": "International Food Policy Research Institute, 2004, Malawi - Poverty Headcount / accessed on CIAT website (http://gisweb.ciat.cgiar.org/povertymapping/)",
                "data_type": "Vector (.gpkg)",
                "vector_geometry": "polygon"
              }, {
                "title": "Mean maximum years of education",
                "name": "malawi_education",
                "description": "Average maximum years spent in education by the population in the aggregated enumeration area.",
                "year": 1998,
                "layer_extent": "Malawi",
                "projection": "WGS 84 (EPSG: 4326)",
                "source": "International Food Policy Research Institute, 2004, Malawi - Poverty Headcount / accessed on CIAT website (http://gisweb.ciat.cgiar.org/povertymapping/)",
                "data_type": "Vector (.gpkg)",
                "vector_geometry": "polygon"
              }, {
                "title": "GINI Index",
                "name": "malawi_gini",
                "description": "this is the Gini index of consumption inequality. The higher the number, the greater the inequality.",
                "year": 1998,
                "layer_extent": "Malawi",
                "projection": "WGS 84 (EPSG: 4326)",
                "source": "International Food Policy Research Institute, 2004, Malawi - Poverty Headcount / accessed on CIAT website (http://gisweb.ciat.cgiar.org/povertymapping/)",
                "data_type": "Vector (.gpkg)",
                "vector_geometry": "polygon"
              }, {
                "title": "Average travel time to nearest TA-level market centre (hours)",
                "name": "malawi_nearest_market",
                "description": "this is the average travel time in hours to the nearest sub-district (TA-level) market centre.",
                "year": 1998,
                "layer_extent": "Malawi",
                "projection": "WGS 84 (EPSG: 4326)",
                "source": "International Food Policy Research Institute, 2004, Malawi - Poverty Headcount / accessed on CIAT website (http://gisweb.ciat.cgiar.org/povertymapping/)",
                "data_type": "Vector (.gpkg)",
                "vector_geometry": "polygon"
              }, {
                "title": "Dependency ratio",
                "name": "malawi_dependency_ratio",
                "description": "total number of people aged under 15 and over 65 years divided by the total population. Provides an estimate of the proportion of the population that are ‘dependent’ on working adults.",
                "year": 1998,
                "layer_extent": "Malawi",
                "projection": "WGS 84 (EPSG: 4326)",
                "source": "International Food Policy Research Institute, 2004, Malawi - Poverty Headcount / accessed on CIAT website (http://gisweb.ciat.cgiar.org/povertymapping/)",
                "data_type": "Vector (.gpkg)",
                "vector_geometry": "polygon"
              }

            ]
          }, {
            "groupName": "Administrative Data",
            "layers": [{
                "title": "International borders",
                "name": "malawi_border",
                "thematicGroup": "MALAWI_HAZARD",
                "description": null,
                "year": null,
                "source": null,
                "layer_extent": null
              },
              {
                "title": "District boundaries",
                "name": "malawi_district",
                "description": null,
                "year": null,
                "source": null,
                "layer_extent": null
              }, {
                "title": "Traditional authorities",
                "name": "malawi_traditional_authority",
                "description": null,
                "year": null,
                "source": null,
                "layer_extent": null
              }

            ]
          },
          {
            "groupName": "Environment",
            "layers": [{
                "title": "Malawi Hillshade",
                "name": "malawi_hillshade",
                "description": "This digital elevation model indicates the elevation at each location across the nation of Malawi, with values given in metres. The data is a snippet of the ASTER global DEM, developed by The Ministry of Economy, Trade, and Industry (METI) of Japan and the United States National Aeronautics and Space Administration (NASA). You can click anywhere on the elevation model in order to identify the elevation value at that point. DEM usage note: the elevation values should not be taken as completely accurate at the local level as the accuracy is between 6 metres and 16 metres, i.e. individual elevation values in the DEM can be between 6 and 16 metres different from real life. The model gives a broad view of the topography and estimates of elevation at regional scales, but the elevation of a specific point should always be cross-referenced with a GPS waypoint at that location.",
                "year": "Data collected 2009, revised processing (V2) in 2011.",
                "source": "ASTER GDEM V2 2011. Link: https://asterweb.jpl.nasa.gov/gdem.asp",
                "computation": "(1) Individual tiles downloaded, merged and clipped to the Malawi boundary, (2) Hillshade computed in QGIS 3.0.0",
                "layer_extent": "Malawi",
                "projection": "WGS 84 / UTM Zone 36 South (EPSG: 32736)",
                "data_type": "Raster",
                "raster_properties": {
                  "value_meaning": "Values represent the elevation above mean sea level in units of metres",
                  "Units": "metres",
                  "value_statistics": "Min = 37, max = 2776",
                  "spatial_resolution": "25m x 25m",
                  "Additional_notes": "ASTER GDEM is a product of METI and NASA"
                }
              },
              {
                "title": "Soil organic carbon",
                "name": "malawi_soil_organic_carbon",
                "description": "Soil organic matter is generally associated with higher crop yields and greater soil moisture retention, thus making areas with higher soil organic matter more resilient to climate variability and change. Therefore, a higher index value indicates lower sensitivity to disasters. Note that information has been interpolated, or filled in, between data points, meaning that the quality of data partly depends on the number of actual data points collected in your area of interest. It should be used at a regional rather than local scale. This Africa-wide dataset was produced by the International Soil Reference and Information Centre (ISRIC) - World Soil Information, 2013. Available for download at www.isric.org",
                "year": 2013,
                "source": "ISRIC (www.isric.org)",
                "computation": "Global datasets for soil organic carbon in top 3 layers of soil (up to 30cm) were summed in QGIS 3.0.0 and the data was clipped down to the Malawi boundary",
                "layer_extent": "Malawi",
                "projection": "WGS 84 (EPSG: 4326)",
                "data_type": "Raster",
                "raster_properties": {
                  "Values meaning": "Values are an estimate of the quantity of organic carbon in top soil in grams",
                  "Values statistics": "Min = 3; Max = 205",
                  "Units": "Grams",
                  "Spatial resolution": "0.02 x 0.02 degrees"
                }
              }
            ]
          }
        ]
      }
    ]
  }
};


var thematicGroupItems = layerJSON.MalawiAtlasLayers.thematicGroups;
var parentGroups = layerJSON.MalawiAtlasLayers.parentGroups;

function createWMSLayerFromJSON(layerJSON) {

  // some layers need a different height
  var legendHeight;
  if (layerJSON.legendHeight) {
    legendHeight = layerJSON.legendHeight;
  }

  // TODO: Read URL from config
  var legend = 'http://gis-malawi.com:8080/geoserver/wms?' +
    '&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetLegendGraphic' +
    '&FORMAT=image/png&LAYER=malawi_atlas:' +
    layerJSON.name;
  var resultLayer;
  if (layerJSON.useImageWmsInsteadOfTileWMS) {
    // prevent rendering problems with the pie charts.
    resultLayer = new ol.layer.Image({
      source: new ol.source.ImageWMS({
        url: 'http://195.201.223.241/geoserver/malawi_atlas/wms',
        params: {
          'LAYERS': layerJSON.name
        },
        serverType: 'geoserver',
        // might be needed for some GeoServer instances
        // crossOrigin: ''
      })
    });

  } else {
    resultLayer = new ol.layer.Tile({
      source: new ol.source.TileWMS({
        url: 'http://195.201.223.241/geoserver/malawi_atlas/wms',
        params: {
          'LAYERS': layerJSON.name,
          'TILED': true
        },
        serverType: 'geoserver',
        // might be needed for some GeoServer instances
        // crossOrigin: ''
      })
    });
  }

  // set layer properties
  resultLayer.set("dataqtip", layerJSON.dataqtip);
  resultLayer.set("description", layerJSON.description);
  resultLayer.set("feature_info_activated", layerJSON.feature_info_activated);
  resultLayer.set("field_aliases", layerJSON.field_aliases);
  resultLayer.set("group", layerJSON.group);
  resultLayer.set("layer_extent", layerJSON.layer_extent);
  resultLayer.set("layer_source", layerJSON.layer_source);
  resultLayer.set("legend", legend);
  resultLayer.set("legendHeight", legendHeight);
  resultLayer.set("lid", layerJSON.name); // layer ID
  resultLayer.set("name", layerJSON.title); // only for display in layer tree
  resultLayer.set("opacity", layerJSON.opacity);
  resultLayer.set("parentGroup", layerJSON.parentGroup);
  resultLayer.set("raster_properties", layerJSON.raster_properties);
  resultLayer.set("thematicGroup", layerJSON.thematicGroup);
  resultLayer.set("title", layerJSON.title); // use title instead of name, because of consistency
  resultLayer.set("visible", false);
  resultLayer.set("year", layerJSON.year);

  return resultLayer;
}



parentGroupLayers = [];
parentGroups.forEach(function(parentGroup) {

  var groupLayers = [];

  var groups = parentGroup.groups;
  groups.forEach(function(group) {

    console.log(group);
    wmsLayers = [];

    var layers = group.layers;
    layers.forEach(function(layer) {

      // assign properties of group
      var groupDescription = group.group_description;
      if (groupDescription) {
        layer.description = groupDescription;
      }
      var fieldAliases = group.field_aliases;
      if (fieldAliases) {
        layer.field_aliases = fieldAliases;
      }



      var wmsLayer = createWMSLayerFromJSON(layer);


      wmsLayers.push(wmsLayer);

    }); // end - layer

    var groupLayer = new ol.layer.Group({
      name: group.groupName,
      layers: wmsLayers
    });
    groupLayers.push(groupLayer);

  }); // end - group

  var parentGroupLayer = new ol.layer.Group({
    name: parentGroup.parentGroupName,
    layers: groupLayers
  });
  parentGroupLayers.push(parentGroupLayer);


}); // end - parent group

console.log(parentGroupLayers);

// has to be at the bottom of all layers
var baseLayers = [
  new ol.layer.Tile({
    lid: "basemapSatellite",
    basemap: true,
    visible: false,
    source: new ol.source.XYZ({
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      attributions: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    })
  }),
  new ol.layer.Tile({
    lid: "basemapStreet",
    visible: true,
    basemap: true,
    source: new ol.source.OSM()
  })
];

Ext.define('MalawiAtlas.util.Layer', {
  singleton: true,
  layers: baseLayers.concat(parentGroupLayers),
  // todo: this does not look right, probably a more elegant solution possible
  thematicGroupItems: thematicGroupItems,

  getFlatLayerList: function() {
    var flatLayers = [];

    var mapCmp = Ext.ComponentQuery.query('ma-mappanel')[0];
    var layerStore = mapCmp.getStore();

    layerStore.each(function(parentGroupLayer) {

      if (parentGroupLayer.getOlLayer() instanceof ol.layer.Group) {

        var parentGroupLayers = parentGroupLayer.getOlLayer().getLayers();
        parentGroupLayers.forEach(function(groupLayer) {

          if (groupLayer instanceof ol.layer.Group) {

            groupLayer.getLayers().forEach(function(layer) {
              flatLayers.push(layer);

            });
          }
        });
      }
    });

    return flatLayers;
  }
});
