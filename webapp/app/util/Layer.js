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
        "parentGroupName": "Mangochi Hazard and Vulnerability",
        "groups": [{
          "groupName": "Mangochi Hazard and Vulnerability",
          "layers": [{
              "title": "Flood frequency",
              "name": "mangochi_hazard_flood_return_period_2016_2017",
              "thematicGroup": "MANGOCHI_HAZARD",
              "description": "Floods have had devastating impact on people and livelihoods and have led to losses in GDP. Recent floods in Malawi caused serious damages and losses to the country. This dataset indicates the estimated return period of flood events in Mangochi District. The return period indicates how frequently an area is likely to be flooded; 10, 20 and 50 year return period flood extents are shown here. The dataset is a blend of three datasets: 1) The Malawi National Riverine Flood dataset developed by RCMRD and Malawi Department of Disaster Management Affairs(DoDMA) available on SERVIR http: //www.servirglobal.net ; 2) Community mapping of flood zone areas across the Mangochi district conducted by C12 Consultants in 2016 collating expert information on 1:50,000 scale topographic maps issued by the Malawi Surveys Department, then digitized on QGIS platform; and 3) Pluvial flood modelling done by C12 Consultants using the 30m digital terrain model for Mangochi district (10, 20 and 50 year return period) in HECRAS flood modelling software (developed by the US Army Corps of Engineers Hydrologic Engineering Center) and rainfall data from the Malawi Meteorological Services Department.  ",
              "year": "2016/17 (using data from various years)",
              "layer_source": "C12 Consultants (2016/17), based on multiple datasets",
              "layer_extent": "Mangochi",
              "raster_properties": {
                "value_meaning": "Values relate to return period(RP)– 10, 20, 50 year RP",
                "value_statistics": "Min = 0, max = 50",
                "spatial_resolution": "0.1 x 0.1 degrees"
              }
            },
            {
              "title": "Drought exposure",
              "name": "mangochi_hazard_drought_2016_2017",
              "thematicGroup": "MANGOCHI_HAZARD",
              "description": null,
              "year": null,
              "layer_source": null,
              "layer_extent": null,
              "raster_properties": true
            },
            {
              "title": "Vulnerability to natural hazards",
              "name": "mangochi_vulnerability_index_2016",
              "thematicGroup": "MANGOCHI_HAZARD",
              "description": "This layer is an indication of the relative vulnerability of communities to natural hazards throughout Mangochi District. The index ranges from 0 to 100, with 0 being the least vulnerable and 100 being the most vulnerable in the district. The index was calculated based on the Intergovernmental Panel on Climate Change (IPCC) conceptual framework, which separates vulnerability into three components: exposure, sensitivity, and adaptive capacity to climate stressors (Parry et al., 2007). The IPCC (2014) identifies exposure as \u201Cthe presence of people, livelihoods, species or ecosystems, environmental functions, services, and resources, infrastructure, or economic, social, or cultural assets in places and settings that could be adversely affected\u201D; sensitivity as \u201Cthe degree to which a system or species is affected directly or indirectly by climate variability or change \u201D; and adaptive capacity as \u201Cthe ability of systems, institutions, humans, and other organisms to adjust to potential damage, to take advantage of opportunities, or to respond to consequences\u201D. The United Nations International Strategy for Disaster Risk Reduction (UNISDR, 2013) identifies vulnerability as \u201Cthe characteristics and circumstances of a community, system or asset that make it susceptible to the damaging effects of a hazard\u201D. \r\nWe used the additive\/averaging method in developing the spatial index, in which raw data values are represented as percentiles. The three components (exposure, sensitivity and adaptive capacity) are based on the following biophysical, environmental and socioeconomic indicators:\r\n    \u2022 Exposure component: based on flood exposure, precipitation trends, drought exposure, crop pest exposure, human-wildlife conflict and landslide \/ strong wind exposure.\r\n    \u2022 Sensitivity component: based on population density, poverty level, building materials, cholera incidence and soil organic carbon.\r\n    \u2022 Adaptive capacity component: based on health infrastructure accessability, school proximity, anthropogenic biomes and education level. \r\nEach indicator was represented spatially and transformed to a common scale between 0 and 100 (where 100 indicates high vulnerability).  The indicators were then averaged to produce component maps for exposure, sensitivity, and adaptive capacity. Note that adaptive capacity was changed to \u201Clack of adaptive capacity\u201D for the mapping in order to retain the standard meaning across all components, in which high values equate to high vulnerability. For the overall vulnerability, the component scores were added then averaged to aggregate the vulnerability index. The resulting vulnerability map shows the generic vulnerability of the population to natural hazards rather than having separate vulnerability layers for individual systems (i.e. ecosystems), sectors (e.g. agriculture or transport) or population sub-groups (such as farmers, women, employed, etc.). ",
              "year": "2016/17 (using data from various years)",
              "layer_source": "C12 Consultants (2016/17), based on multiple datasets",
              "layer_extent": "Mangochi",
              "raster_properties": {
                "spatial_resolution": "0.0045 x 0.0045 degrees",
                "value_statistics": "Min = 21.22, max = 74.88",
                "values_meaning": "Values represent the relative vulnerability based on summing the exposure, sensitivity and adaptive capacity components."
              }
            },
            {
              "title": "Crop pest exposure – armyworms (community mapping)",
              "name": "mangochi_crop_pest_exposure_2016",
              "thematicGroup": "MANGOCHI_HAZARD",
              "description": "Crop pest infestations are annual recurring events across Malawi that can have detrimental effects on crop yields, livelihoods and food security if not responded to quickly and effectively. For Mangochi district specifically, armyworm infestations (and to a lesser degree red spider mite infestations) have been identified as one of the main natural hazards facing the district. This dataset delineates the infestation zones and quantifies the exposure to crop pests as a component of the exposure index.The dataset is based on primary data sourced on the ground across Mangochi district through community mapping exercises. Community mapping was conducted in seven traditional authorities by C12 Consultants in 2106 in collaboration with Cooperazione Internazionale (COOPI), District and Community representatives involved in Disaster Risk Management, i.e. Group Village Headmen (GVH), Meteorology Department officers, District Agricultural Development Officers (DADO) Area Civil Protection Committee (ACPC), Village Civil Protection Committee (VCPC), District Risk Management Officers (DRMO), District Health Officers (DHO), Education department representatives, Wildlife officers, and district Police representatives. Information on the extent of crop pest infestations was collated from the relevant officers and their expert judgement using 1:50,000 scale topographic maps issued by the Malawi Surveys Department, then digitized on QGIS platform. This data was cross-referenced and validated with written records from the Mangochi District Agricultural Development Office.",
              "year": "2016 - 17",
              "layer_source": "C12 & COOPI",
              "layer_extent": "Mangochi"
            },
            {
              "title": "Human – wildlife conflict zones (community mapping)",
              "name": "mangochi_human_wildlife_conflict_2016",
              "thematicGroup": "MANGOCHI_HAZARD",
              "description": "Wildlife crossings into populated areas are relatively commonplace in coastal and forested areas of Mangochi, often causing damage to crops, property and causing death. Human-wildlife conflict with elephants, warthogs, crocodiles and hippos is considered a prominent natural hazard in Mangochi district. This dataset delineates the corridors of wildlife movement and common zones of presence and quantifies the exposure to wildlife-human conflict as a component of the exposure index. The dataset is based on primary data sourced on the ground across Mangochi district through community mapping exercises. Community mapping was conducted in seven traditional authorities by C12 Consultants in 2106 in collaboration with Cooperazione Internazionale (COOPI), District and Community representatives involved in Disaster Risk Management, i.e. Group Village Headmen (GVH), Meteorology Department officers, District Agricultural Development Officers (DADO) Area Civil Protection Committee (ACPC), Village Civil Protection Committee (VCPC), District Risk Management Officers (DRMO), District Health Officers (DHO), Education department representatives, Wildlife officers, and district Police representatives. Information on the extent of human-wildlife conflict was collated from the relevant officers and their expert judgement using 1:50,000 scale topographic maps issued by the Malawi Surveys Department, then digitized on QGIS platform.",
              "year": "2016/17",
              "layer_source": "C12 & COOPI",
              "layer_extent": "Salima"
            },
            {
              "title": "Landslide hazard (community mapping)",
              "name": "mangochi_hazard_landslide_2016",
              "thematicGroup": "MANGOCHI_HAZARD",
              "description": "This dataset indicates the limited areas of Mangochi that are susceptible to damage by landslides. The dataset is based on primary data sourced on the ground across Mangochi district through community mapping exercises. Community mapping was conducted in seven traditional authorities by C12 Consultants in 2016 in collaboration with Cooperazione Internazionale (COOPI), District and Community representatives involved in Disaster Risk Management, i.e. Group Village Headmen (GVH), Meteorology Department officers, District Agricultural Development Officers (DADO) Area Civil Protection Committee (ACPC), Village Civil Protection Committee (VCPC), District Risk Management Officers (DRMO), District Health Officers (DHO), Education department representatives, Wildlife officers, and district Police representatives. Information on the extent of landslide hazards was collated from the relevant officers and their expert judgement using 1:50,000 scale topographic maps issued by the Malawi Surveys Department, then digitized on QGIS platform.",
              "year": "2016/2017",
              "layer_source": "C12 & COOPI",
              "layer_extent": "Mangochi"
            },
            {
              "title": "Strong winds hazards (community mapping)",
              "name": "mangochi_hazard_strong_wind_2016_2017",
              "thematicGroup": "MANGOCHI_HAZARD",
              "description": "Certain areas of Mangochi district regularly experience strong gusts of wind that able to cause substantial damage to property, infrastructure and crops. This dataset delineates the zones of frequent strong/sustained wind occurrence. The dataset is based on primary data sourced on the ground across Mangochi district through community mapping exercises. Community mapping was conducted in seven traditional authorities by C12 Consultants in 2106 in collaboration with Cooperazione Internazionale (COOPI), District and Community representatives involved in Disaster Risk Management, i.e. Group Village Headmen (GVH), Meteorology Department officers, District Agricultural Development Officers (DADO) Area Civil Protection Committee (ACPC), Village Civil Protection Committee (VCPC), District Risk Management Officers (DRMO), District Health Officers (DHO), Education department representatives, Wildlife officers, and district Police representatives. Information on the extent of strong wind hazards was collated from the relevant officers and their expert judgement using 1:50,000 scale topographic maps issued by the Malawi Surveys Department, then digitized on QGIS platform.",
              "year": "2016/17",
              "layer_source": "COOPI & C12",
              "layer_extent": "Mangochi"
            }
          ]
        }]

      },
      {
        "parentGroupName": "Malawi Hazard Map",
        "groups": [{
            "groupName": "National Hazards - Expert based",
            "layers": [{
                "title": "Drought",
                "name": "malawi_hazard_drought",
                "thematicGroup": "MALAWI_HAZARD",
                "opacity": 0.6,
                "description": "Hazard-prone areas in Malawi were delineated based on expert knowledge. Experts from the following institutions were interviewed: Department of Climate Change and Meteorogical Services, Department of Forestry, Department of Land Surveys, FEWSNET, Geological Survey Department, Ministry of Irrigation and Water Development, Ministry of Local Government and Rural Development, Ministry of Natural Resources Energy and the Environment, National Statistics Office, UNICEF, World Bank and the World Food Programme. ",
                "year": 2011,
                "layer_source": "Z_GIS & COOPI",
                "layer_extent": "Malawi"
              },
              {
                "title": "Landslides",
                "name": "malawi_hazard_landslide",
                "thematicGroup": "MALAWI_HAZARD",
                "description": "Hazard-prone areas in Malawi were delineated based on expert knowledge. Experts from the following institutions were interviewed: Department of Climate Change and Meteorogical Services, Department of Forestry, Department of Land Surveys, FEWSNET, Geological Survey Department, Ministry of Irrigation and Water Development, Ministry of Local Government and Rural Development, Ministry of Natural Resources Energy and the Environment, National Statistics Office, UNICEF, World Bank and the World Food Programme. ",
                "year": 2011,
                "layer_source": "Z_GIS & COOPI",
                "layer_extent": "Malawi"
              },
              {
                "title": "Wildfires",
                "name": "malawi_hazard_wildfire",
                "thematicGroup": "MALAWI_HAZARD",
                "description": "Hazard-prone areas in Malawi were delineated based on expert knowledge. Experts from the following institutions were interviewed: Department of Climate Change and Meteorogical Services, Department of Forestry, Department of Land Surveys, FEWSNET, Geological Survey Department, Ministry of Irrigation and Water Development, Ministry of Local Government and Rural Development, Ministry of Natural Resources Energy and the Environment, National Statistics Office, UNICEF, World Bank and the World Food Programme. ",
                "year": 2011,
                "layer_source": "Z_GIS & COOPI",
                "layer_extent": "Malawi"
              },
              {
                "title": "Floods",
                "name": "malawi_hazard_flood",
                "thematicGroup": "MALAWI_HAZARD",
                "description": "Hazard-prone areas in Malawi were delineated based on expert knowledge. Experts from the following institutions were interviewed: Department of Climate Change and Meteorogical Services, Department of Forestry, Department of Land Surveys, FEWSNET, Geological Survey Department, Ministry of Irrigation and Water Development, Ministry of Local Government and Rural Development, Ministry of Natural Resources Energy and the Environment, National Statistics Office, UNICEF, World Bank and the World Food Programme. ",
                "year": 2011,
                "layer_source": "Z_GIS & COOPI",
                "layer_extent": "Malawi"
              },
              {
                "title": "Earthquakes",
                "name": "malawi_hazard_earthquake",
                "thematicGroup": "MALAWI_HAZARD",
                "description": "Hazard-prone areas in Malawi were delineated based on expert knowledge. Experts from the following institutions were interviewed: Department of Climate Change and Meteorogical Services, Department of Forestry, Department of Land Surveys, FEWSNET, Geological Survey Department, Ministry of Irrigation and Water Development, Ministry of Local Government and Rural Development, Ministry of Natural Resources Energy and the Environment, National Statistics Office, UNICEF, World Bank and the World Food Programme. ",
                "year": 2011,
                "layer_source": "Z_GIS & COOPI",
                "layer_extent": "Malawi"
              },
              {
                "title": "Malawi Hillshade",
                "name": "malawi_hillshade",
                "description": "This digital elevation model indicates the elevation at each location across the nation of Malawi, with values given in metres. The data is a snippet of the ASTER global DEM, developed by The Ministry of Economy, Trade, and Industry (METI) of Japan and the United States National Aeronautics and Space Administration (NASA). You can click anywhere on the elevation model in order to identify the elevation value at that point. DEM usage note: the elevation values should not be taken as completely accurate at the local level as the accuracy is between 6 metres and 16 metres, i.e. individual elevation values in the DEM can be between 6 and 16 metres different from real life. The model gives a broad view of the topography and estimates of elevation at regional scales, but the elevation of a specific point should always be cross-referenced with a GPS waypoint at that location. ",
                "year": "Data collected 2009, revised processing (V2) in 2011.",
                "layer_source": "ASTER GDEM V2 2011. Link: https://asterweb.jpl.nasa.gov/gdem.asp",
                "layer_extent": "Malawi",
                "raster_properties": true
              }, {
                "title": "Drought Exposure",
                "name": "malawi_drought_exposure_unep",
                "description": "The increasing number of drought events in Malawi as a result of prolonged rainfall deficits/dry spells during critical crop stages and rainfall variations that are unpredictable and leads to loss of agricultural livelihoods and exacerbate food insecurity. More than 80% of the population in Malawi is dependent on rainfed agriculture and droughts have caused considerable deaths and losses to both humans and livestock. This dataset includes an estimation of theannual physical exposure to drought based on Standardized Precipitation Index. Values represent the estimated number of people exposed to drought hazards annually. This product was designed by UNEP/GRID-Europe for the Global Assessment Report on Risk Reduction (GAR). It was modelled using global data.  The source and a full description can be found here: http://preview.grid.unep.ch/index.php?preview=data&events=droughts&evcat=4",
                "year": "1980 -2001",
                "layer_source": "UNEP  http://preview.grid.unep.ch/index.php?preview=data&events=droughts&evcat=4",
                "layer_extent": "Malawi",
                "raster_properties": true
              }, {
                "title": "Soil organic carbon",
                "name": "malawi_soil_organic_carbon",
                "description": "Soil organic matter is generally associated with higher crop yields and greater soil moisture retention, thus making areas with higher soil organic matter more resilient to climate variability and change. Therefore, a higher index value indicates lower sensitivity to disasters. Note that information has been interpolated, or filled in, between data points, meaning that the quality of data partly depends on the number of actual data points collected in your area of interest. It should be used at a regional rather than local scale. This Africa-wide dataset was produced by the International Soil Reference and Information Centre (ISRIC) – World Soil Information, 2013. Available for download at www.isric.org ",
                "year": 2013,
                "layer_source": "ISRIC www.isric.org",
                "layer_extent": "Malawi",
                "raster_properties": true
              }
            ]
          },
          {
            "groupName": "Administrative Data",
            "layers": [{
                "title": "International borders",
                "name": "malawi_border",
                "thematicGroup": "MALAWI_HAZARD",
                "description": null,
                "year": null,
                "layer_source": null,
                "layer_extent": null
              },
              {
                "title": "District boundaries",
                "name": "malawi_district",
                "description": null,
                "year": null,
                "layer_source": null,
                "layer_extent": null
              },
              {
                "title": "Traditional authorities",
                "name": "malawi_traditional_authority",
                "description": null,
                "year": null,
                "layer_source": null,
                "layer_extent": null
              }
            ]
          },
          {
            "groupName": "Population",
            "group_description": "This layer shows key statistics from the 2008 national census in Malawi conducted by the National Statistics Office. Specifically, the number of households, total population, male and female population are provided for each ‘enumeration area’ (EA), which are areas used by the NSO to summarise census data. You may also view the area of each EA in square kilometres plus the population density in persons per square kilometre. ",
            "field_aliases": {
              "eacode": "EA code",
              "area_km2": "Area (km2)",
              "total": "Population",
              "popdenskm2": "Population density (persons per km2)",
              "male": "No. males",
              "female": "No. females",
              "genderprop": "Proportion of males to females",
              "households": "No. households",
              "hh_dens": "Household density (households per km2)",
              "ta": "TA",
              "district": "District"
            },
            "layers": [{
                "title": "Proportion of males to females",
                "name": "malawi_population_gender_2008",
                "layer_extent": "Malawi",
                "layer_source": "Malawi National Statistics Office, accessed from MASDAP",
                "year": 2008
              },
              {
                "title": "Household density",
                "name": "malawi_population_household_density_2008",
                "layer_extent": "Malawi",
                "layer_source": "Malawi National Statistics Office, accessed from MASDAP",
                "year": 2008
              },
              {
                "title": "Population density",
                "name": "malawi_population_density_2008",
                "layer_extent": "Malawi",
                "layer_source": "Malawi National Statistics Office, accessed from MASDAP",
                "year": 2008
              }
            ]
          },
          {
            "groupName": "Povertry and Wealth",
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
                "layer_extent": "Malawi",
                "layer_source": "International Food Policy Research Institute, 2004, Malawi - Poverty Headcount / accessed on CIAT website (http://gisweb.ciat.cgiar.org/povertymapping/) ",
                "year": 1998
              },
              {
                "title": "Mean maximum years of education",
                "name": "malawi_education",
                "description": "Average maximum years spent in education by the population in the aggregated enumeration area. ",
                "layer_extent": "Malawi",
                "layer_source": "International Food Policy Research Institute, 2004, Malawi - Poverty Headcount / accessed on CIAT website (http://gisweb.ciat.cgiar.org/povertymapping/) ",
                "year": 1998
              },
              {
                "title": "GINI Index",
                "name": "malawi_gini",
                "description": "aaaaaaa",
                "layer_extent": "Malawi",
                "layer_source": "International Food Policy Research Institute, 2004, Malawi - Poverty Headcount / accessed on CIAT website (http://gisweb.ciat.cgiar.org/povertymapping/) ",
                "year": 1998
              },
              {
                "title": "Average travel time to nearest TA-level market centre (hours)",
                "name": "malawi_nearest_market",
                "description": "aaaaaaa",
                "layer_extent": "Malawi",
                "layer_source": "International Food Policy Research Institute, 2004, Malawi - Poverty Headcount / accessed on CIAT website (http://gisweb.ciat.cgiar.org/povertymapping/) ",
                "year": 1998
              },
              {
                "title": "Dependency ratio",
                "name": "malawi_dependency_ratio",
                "description": "aaaaaaa",
                "layer_extent": "Malawi",
                "layer_source": "International Food Policy Research Institute, 2004, Malawi - Poverty Headcount / accessed on CIAT website (http://gisweb.ciat.cgiar.org/povertymapping/) ",
                "year": 1998
              }
            ]
          }
        ]
      },
      {
        "parentGroupName": "Linthipe/Lingadzi Study",
        "groups": [{
            "groupName": "Land Use/Land Cover analysis",
            "layers": [{
                "title": "Change NDVI 1990/2009",
                "name": "linthipe_lingadzi_ndvi_change_1990_2009",
                "opacity": 0.6,
                "description": "Normalised difference vegetation index, or NDVI, is an index used as a measure of the health and thickness of green vegetation. A change analysis was conducted between 1990 and 2009 to investigate the change in vegetation over time. Small decreases in NDVI could indicate degradation of vegetation whilst large increases could indicate deforestation or land cover change. Increases in NDVI on the other hand could be due to afforestation activities. ",
                "year": 2012,
                "layer_source": "Z_GIS & COOPI",
                "layer_extent": "Linthipe and Lingadzi Catchments"
              },
              {
                "title": "Change forest 1990/2009",
                "name": "linthipe_lingadzi_forest_change_1990_2009",
                "opacity": 0.6,
                "description": "This layer indicates the change in forest cover between 1990 and 2009 based on classification of two Landsat satellite images from 11/07/1990 and 29/06/2009. ",
                "year": 2012,
                "layer_source": "Z_GIS & COOPI",
                "layer_extent": "Linthipe and Lingadzi Catchments"
              },
              {
                "title": "Land Use/Land Cover 2009",
                "name": "linthipe_lingadzi_land_use_land_cover_2009",
                "thematicGroup": "LINTHIPE_LINGADZI",
                "opacity": 0.6,
                "description": "Land use and land cover dataset derived from classification of a Landsat image from 29/06/2009. See full report for more details. ",
                "year": 2012,
                "layer_source": "Z_GIS & COOPI",
                "layer_extent": "Linthipe and Lingadzi Catchments"
              },
              {
                "title": "Land Use/Land Cover 1990",
                "name": "linthipe_lingadzi_land_use_land_cover_1990",
                "thematicGroup": "LINTHIPE_LINGADZI",
                "opacity": 0.6,
                "description": "Land use and land cover dataset derived from classification of a Landsat image from 11/07/1990. See full report for more details. ",
                "year": 2012,
                "layer_source": "Z_GIS & COOPI",
                "layer_extent": "Linthipe and Lingadzi Catchments"
              }
            ]
          },
          {
            "groupName": "Flood scenario-model outputs",
            "layers": [{
                "title": "Lingadzi - Flood Affected Areas 03/2006",
                "name": "linthipe_lingadzi_lingadzi_flood_model_affected_areas_2006-03",
                "opacity": 0.6,
                "description": "This layer is a modelled estimation of the flood extent during the March 2006 flood event in the region. It was produced through a dyanamical flood modelling approach, based on precipitation data from six measuring stations in the region and a digital elevation model (DEM) from the Forestry Department. The 'zebra' effect in the downstream area is due to the accuracy of the DEM. See attached report for more details.",
                "year": 2012,
                "layer_source": "Z_GIS & COOPI",
                "layer_extent": "Lingadzi Catchment"
              },
              {
                "title": "Linthipe - Flood Affected Areas 03/2006",
                "name": "linthipe_lingadzi_linthipe_flood_model_affected_areas_2006-03",
                "opacity": 0.6,
                "description": "This layer is a modelled estimation of the flood extent during the March 2006 flood event in the region. It was produced through a dyanamical flood modelling approach, based on precipitation data from six measuring stations in the region and a digital elevation model (DEM) from the Forestry Department. The 'zebra' effect in the downstream area is due to the accuracy of the DEM. See attached report for more details.",
                "year": 2012,
                "layer_source": "Z_GIS & COOPI",
                "layer_extent": "Linthipe Catchment"
              }
            ]
          },
          {
            "groupName": "Catchment boundaries",
            "layers": [{
                "title": "Lingadzi catchment",
                "name": "linthipe_lingadzi_lingadzi_catchment",
                "thematicGroup": "LINTHIPE_LINGADZI",
                "description": "Boundary of the Linthipe catchment area",
                "year": 2012,
                "layer_source": "Z_GIS & COOPI",
                "layer_extent": "Lingadzi Catchment"
              },
              {
                "title": "Linthipe catchment",
                "name": "linthipe_lingadzi_linthipe_catchment",
                "thematicGroup": "LINTHIPE_LINGADZI",
                "description": "Boundary of the Lingadzi catchment area",
                "year": 2012,
                "layer_source": "Z_GIS & COOPI",
                "layer_extent": "Linthipe Catchment"
              }
            ]
          }
        ]
      },
      {
        "parentGroupName": "Southern Malawi",
        "groups": [{
            "groupName": "Lower Shire",
            "layers": [{
              "title": "Lower Shire Flood Model – return period",
              "name": "lower_shire_q10_20_100_return_period_flood_model_atkins_2012",
              "description": "This dataset is a flood extent model produced by Atkins in 2012 for various return periods. The modelled spatial extent of flood water is represented for a 10-year, 20-year and 100-year return period flood event.  The return period is a probabilistic estimate of the size of a flood event that is likely to occur in a specified amount of time. Therefore, a 100-year flood will be larger than a 10-year flood as a flood of that size is expected to occur less frequently, or approximately every 100 years.",
              "layer_extent": "Lower Shire region, Malawi & Mozambique",
              "layer_source": "MASDAP  (http://www.masdap.mw/layers/geonode%3Aq100_atkins_flood_outline)",
              "year": 2012,
              "computation": "Three separate vector files rasterized, added together using Raster Calculator in QGIS and values reclassified.",
              "raster_properties": {
                "value_statistics": "Min = 10; Max = 100; Units = years",
                "spatial_resolution": "Approx. 90m x 90m"
              }
            }]
          },
          {
            "groupName": "Nsanje",
            "layers": [{
                "title": "Strong wind hazards (Nsanje) – PGIS (2013)",
                "name": "nsanje_hazard_wind_2013",
                "description": "This dataset indicates wind hazards delineated in participatory GIS (PGIS) exercises undertaken with district officers in 2013.",
                "layer_extent": "Nsanje",
                "layer_source": "COOPI & Z_GIS",
                "year": 2013
              },
              {
                "title": "Cholera incidences (Nsanje) – PGIS (2013)",
                "name": "nsanje_hazard_cholera_incidence_2013",
                "description": "This dataset indicates the locations of cholera outbreaks delineated in participatory GIS (PGIS) exercises undertaken with district officers in 2013. ",
                "layer_extent": "Nsanje",
                "layer_source": "COOPI & Z_GIS",
                "year": 2013
              },
              {
                "title": "Human – wildlife conflict (Nsanje) – PGIS (2013)",
                "name": "nsanje_human_wildlife_conflict_2013",
                "description": "Human wildlife conflict is common in Malawi, with crocodiles posing a particular problem to communities living near water sources. This dataset indicates known crocodile zones delineated in participatory GIS (PGIS) exercises undertaken with district officers in 2013. ",
                "layer_extent": "Nsanje",
                "layer_source": "COOPI & Z_GIS",
                "year": 2013
              },
              {
                "title": "Crop pests (Nsanje) – PGIS (2013)",
                "name": "nsanje_hazard_crop_pest_2013",
                "description": "This dataset indicates crop pest infestations delineated in participatory GIS (PGIS) exercises undertaken with district officers in 2013. ",
                "layer_extent": "Nsanje",
                "layer_source": "COOPI & Z_GIS",
                "year": 2013
              },
              {
                "title": "Flood hazard (Nsanje) – PGIS (2013)",
                "name": "nsanje_hazard_flood_2013",
                "description": "This dataset indicates flood hazard zones delineated in participatory GIS (PGIS) exercises undertaken with district officers in 2013. ",
                "layer_extent": "Nsanje",
                "layer_source": "COOPI & Z_GIS",
                "year": 2013
              },
              {
                "title": "Dry spell hazard (Nsanje) – PGIS (2013)",
                "name": "nsanje_hazard_dry_spell_2013",
                "description": "This dataset indicates dry spell hazard zones delineated in participatory GIS (PGIS) exercises undertaken with district officers in 2013. ",
                "layer_extent": "Nsanje",
                "layer_source": "COOPI & Z_GIS",
                "year": 2013
              }
            ]
          },
          {
            "groupName": "Chikwawa",
            "layers": [{
              "title": "Hazard Strong Wind (Chikwawa)",
              "name": "chikwawa_hazard_strong_wind_2011",
              "description": "This dataset indicates storm hazards delineated in participatory GIS (PGIS) exercises undertaken with district officers in 2011.",
              "extent": "Chikwawa",
              "layer_source": "COOPI & Z_GIS",
              "year": 2011
            }, {
              "title": "Human – wildlife conflict (Chikwawa) – PGIS (2011)",
              "name": "chikwawa_human_wildlife_conflict_2011",
              "description": "Human wildlife conflict is common in Malawi, with crocodiles posing a particular problem to communities living near water sources. Elephants meanwhile can come into conflict with human around croplands. This dataset indicates known crocodile and elephant zones delineated in participatory GIS (PGIS) exercises undertaken with district officers in 2011. ",
              "extent": "Chikwawa",
              "layer_source": "COOPI & Z_GIS",
              "year": 2011
            }, {
              "title": "Flood hazards (Chikwawa) – PGIS (2011)",
              "name": "chikwawa_hazard_flood_2011",
              "description": "This dataset indicates flood hazard zones delineated in participatory GIS (PGIS) exercises undertaken with district officers in 2011.",
              "extent": "Chikwawa",
              "layer_source": "COOPI & Z_GIS",
              "year": 2011
            }, {
              "title": "Cholera outbreaks (Chikwawa) – PGIS (2011)",
              "name": "chikwawa_hazard_disease_incidence_2011",
              "description": "This dataset indicates the locations of cholera outbreaks delineated in participatory GIS (PGIS) exercises undertaken with district officers in 2011.",
              "extent": "Chikwawa",
              "layer_source": "COOPI & Z_GIS",
              "year": 2011
            }]
          }
          // todo: add remaining layers from this dataset
        ]
      },
      {
        "parentGroupName": "Salima Studies",
        "groups": [

          {
            "groupName": "Vulnerability to floods",
            "layers": [{
                "title": "Flood vulnerability index",
                "name": "salima_vulnerability_to_floods_index_2014",
                "thematicGroup": "SALIMA_VULERNABILITY",
                "opacity": 0.6,
                "description": "The flood vulnerability index highlights the spatial patterns in socioeconomic vulnerability to floods across the district. The index is a relative measure of vulnerability for the district of Salima and is based on a number of indicators including poverty, market and urban area accessability, health centre and education accessability, crop density, early warning systems, access to evacuation sites / safe places and more. The index was developed based on an approach developed by Kienberger (2009/2012) in Mozambique. See attached report for more details.   ",
                "legendHeight": 150,
                "year": 2014,
                "layer_source": "Z_GIS & COOPI",
                "layer_extent": "Salima",
                "feature_info_activated": true
              }, {
                "title": "Piecharts",
                "name": "salima_vulnerability_to_floods_index_2014_chart",
                "thematicGroup": "SALIMA_VULERNABILITY",
                "description": null,
                "year": 2014,
                "layer_source": "Z_GIS & COOPI",
                "layer_extent": "Salima",
                "feature_info_activated": true,
                "useImageWmsInsteadOfTileWMS": true
              },
              {
                "title": "Flood vulnerability index (selected GVHs)",
                "name": "salima_vulnerability_to_floods_index_gvh_2014",
                "thematicGroup": "SALIMA_VULERNABILITY",
                "description": "The flood vulnerability index highlights the spatial patterns in socioeconomic vulnerability to floods across the district. The index is a relative measure of vulnerability for the district of Salima and is based on a number of indicators including poverty, market and urban area accessability, health centre and education accessability, crop density, early warning systems, access to evacuation sites / safe places and more. The index was developed based on an approach developed by Kienberger (2009/2012) in Mozambique. This specific analysis was conducted for a number of selected GVHs in Salima District. See attached report for more details.   ",
                "year": 2014,
                "layer_source": "Z_GIS & COOPI",
                "layer_extent": "Salima"
              }
            ]
          },

          {
            "groupName": "Hazard Scenarios",
            "layers": [{
                "title": "Floods (DoDMA)",
                "name": "salima_hazard_flood_dodma",
                "description": "Flood hazard zones delineated through community mapping exercises conducted by the Government of Malawi Department of Disaster Management (DoDMA)  ",
                "year": null,
                "layer_source": "DoDMA",
                "layer_extent": "Salima"
              },
              {
                "title": "COOPI (PGIS 2013)",
                "name": "salima_hazard_pgis",
                "thematicGroup": "SALIMA_DISASTER",
                "description": null,
                "year": null,
                "layer_source": null,
                "layer_extent": null
              },
              {
                "title": "Floods (Irrigation & Water Development)",
                "name": "salima_hazard_flood_irrigation_and_water_department",
                "description": null,
                "year": null,
                "layer_source": "Salima Department of Water and Irrigation",
                "layer_extent": "Salima"
              },
              {
                "title": "Floods (Forestry Department)",
                "name": "salima_hazard_flood_forestry_department",
                "description": null,
                "year": null,
                "layer_source": "Salima Forestry Department",
                "layer_extent": "Salima"
              }
            ]
          },
          {
            "groupName": "Resilience to food insecurity",
            "layers": [{
                "title": "Resilience to food insecurity index",
                "name": "salima_resilience_to_food_insecurity_index_2014",
                "thematicGroup": "SALIMA_RESILIENCE",
                "opacity": 0.6,
                "legendHeight": 150,
                "description": "The resilience to food insecurity index highlights the spatial patterns in resilience across the district. The index is a relative measure of resilience for the district of Salima and is based on a number of indicators including poverty, crop density, access to urban centres, road infrastructure, social safetynets, access to water, market accessability, education and healthcare accessability, conflict and hazard-prone zones. The index was developed based on an approach developed by Kienberger (2009/2012) in Mozambique. See attached report for more details. ",
                "year": 2014,
                "layer_source": "Z_GIS & COOPI",
                "layer_extent": "Salima",
                "feature_info_activated": true
              },
              {
                "title": "Resilience to food insecurity index (charts)",
                "name": "salima_resilience_to_food_insecurity_index_2014_chart",
                "thematicGroup": "SALIMA_RESILIENCE",
                "description": null,
                "year": 2014,
                "layer_source": "Z_GIS & COOPI",
                "layer_extent": "Salima",
                "feature_info_activated": true,
                "useImageWmsInsteadOfTileWMS": true
              },
              {
                "title": "GVH level",
                "name": "salima_resilience_to_food_insecurity_index_gvh_2014",
                "thematicGroup": "SALIMA_RESILIENCE",
                "description": "The resilience to food insecurity index highlights the spatial patterns in resilience across the district. The index is a relative measure of resilience for the district of Salima and is based on a number of indicators including poverty, crop density, access to urban centres, road infrastructure, social safetynets, access to water, market accessability, education and healthcare accessability, conflict and hazard-prone zones. The index was developed based on an approach developed by Kienberger (2009/2012) in Mozambique. This specific analysis was conducted for a number of selected GVHs. See attached report for more details. ",
                "year": 2014,
                "layer_source": "Z_GIS & COOPI",
                "layer_extent": "Salima"
              }
            ]
          },
          {
            "groupName": "Villages",
            "layers": [{
                "title": "Village population 2010",
                "name": "salima_village_population",
                "description": null,
                "year": null,
                "layer_source": null,
                "layer_extent": null,
                "feature_info_activated": true
              },
              {
                "title": "Village infrastructures",
                "name": "salima_village_infrastructures",
                "description": "Features and facilities mapped in villages across Salima such as boreholes, village headman houses, schools, churches, mosques and more. Also contains statistics about GVHs.",
                "year": null,
                "layer_source": "Z_GIS & COOPI",
                "layer_extent": "Salima",
                "feature_info_activated": true
              },
              {
                "title": "Villages (Traditional authorities)",
                "name": "salima_village_traditional_authorities",
                "thematicGroup": "SALIMA_DISASTER",
                "description": null,
                "year": 2008,
                "layer_source": "Z_GIS & COOPI",
                "layer_extent": "Salima"
              }
            ]
          },
          {
            "groupName": "Disaster Risk Reduction",
            "layers": [{
                "title": "Trained village civil protection comittees (VCPC)",
                "name": "salima_coopi_trained_vcpc_2009_2011",
                "thematicGroup": "SALIMA_DISASTER",
                "description": null,
                "year": null,
                "layer_source": null,
                "layer_extent": null
              },
              {
                "title": "River Gauge levels",
                "name": "salima_river_gauge_level",
                "description": null,
                "year": null,
                "layer_source": null,
                "layer_extent": null,
                "feature_info_activated": true
              },
              {
                "title": "DRR infrastructures",
                "name": "salima_ddr_infrastructure_2011",
                "thematicGroup": "SALIMA_DISASTER",
                "description": "This layer indicates the infrastructure that may help reduce the risk from disasters, such as early warning systems, river gauges, identified evacuation shelters, grain silos and irrigation systems. Data collected by COOPI between 2010 and 2011. ",
                "year": null,
                "layer_source": "COOPI",
                "layer_extent": "Salima",
                "feature_info_activated": true
              }
            ]
          },
          {
            "groupName": "Health",
            "layers": [{
              "title": "Health Facilities",
              "name": "salima_health",
              "thematicGroup": "SALIMA_DISASTER",
              "description": "Locations of village clinics, health centres and dispensaries in Salima District, including the coordinates, and the name and founder, where available. Data collected by COOPI, 2014.",
              "year": 2014,
              "layer_source": "COOPI",
              "layer_extent": "Salima",
              "feature_info_activated": true
            }]
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
  var legend = 'http://isi.zgis.at/geoserver/wms?' +
    '&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetLegendGraphic' +
    '&FORMAT=image/png&LAYER=malawi_atlas:' +
    layerJSON.name;

  if (layerJSON.useImageWmsInsteadOfTileWMS) {
    // prevent rendering problems with the pie charts.
    var resultLayer = new ol.layer.Image({
      source: new ol.source.ImageWMS({
        url: 'http://isi.zgis.at/geoserver/malawi_atlas/wms',
        params: {
          'LAYERS': layerJSON.name
        },
        serverType: 'geoserver',
        crossOrigin: ''
      })
    });

  } else {
    var resultLayer = new ol.layer.Tile({
      source: new ol.source.TileWMS({
        url: 'http://isi.zgis.at/geoserver/malawi_atlas/wms',
        params: {
          'LAYERS': layerJSON.name,
          'TILED': true
        },
        serverType: 'geoserver',
        crossOrigin: ''
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
