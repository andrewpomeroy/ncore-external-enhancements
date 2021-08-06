import _ from 'lodash';

var appSettings = {"appName":"nCORE","appDeployId":"NCORE","appServerTypeId":null,"authType":"FormsAuth","enableMetadataCache":false,"enableTemplateCache":true,"maxFileSize":524288000,"docUploadChunkSize":500000,"maxListRowsReturned":300,"nFormBaseUrl":"https://nsuite.windsorsolutions.biz/dev/nsuite/nform/","nSiteBaseUrl":"https://nsuite.windsorsolutions.biz/dev/nsuite/nsite/","nVisageBaseUrl":"https://nsuite.windsorsolutions.biz/dev/nsuite/nvisage/","nSpectBaseUrl":"https://nsuite.windsorsolutions.biz/dev/nsuite/nspect/","servicesHostName":"NSuite Dev App Server","aboutUrl":"http://www.mi.gov/miwaters","contactUrl":"http://www.michigan.gov/deq/0,4561,7-135-3313_72753-358420--,00.html","googleAnalyticsKey":"UA-25583843-18","emailSupportAddress":"admin@windsorsolutions.com","notificationEnvironmentName":"DEVELOPMENT","loginAgreementText":"\r\n<p>Unauthorized use of MiWaters is prohibited and violators may be subject to criminal or civil penalties, including dismissal for internal users and prosecution under the Computer Fraud and Abuse Act of 1986 for external users.</p>   <br/><p>Clicking the OK button certifies that you have read and agree to comply with the <a href=\"https://www.michigan.gov/policies\" target=\"_blank\">Terms of Use</a>, that you are an authorized user, and that you will use this system for authorized purposes only.   <br/>This application may be monitored and information examined, recorded, copied, and used for authorized purposes.  There is no presumption of privacy when using this application.  The following link (which can be typed into the address bar of your browser) will take you to the entire Terms of Use document: <a href=\"https://www.michigan.gov/policies\" target=\"_blank\">https://www.michigan.gov/policies<a/></p>\r\n","isProduction":false,"productName":"NSuite Development","recaptchaSiteKey":"6LfTLkAUAAAAAOPyn0T50-zju2UDQuBf3yIiNrB_","signAgreementFormUrl":"https://www.windsorsolutions.com","passwordRegex":"(?=^.{8,})(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W_]).*$","showBuiltInHelpExternal":true,"showBuiltInHelpInternal":true,"helpUrl1":"https://wiki.windsorsolutions.biz/x/4wCa?os_username=nvirosupport&os_password=nvirosupport","helpUrl1Title":"Product Support Wiki","showHelpLink1External":true,"showHelpLink1Internal":true,"helpUrl2":"http://windsorsolutions.com","helpUrl2Title":"Online Help Link #2","showHelpLink2External":false,"showHelpLink2Internal":true,"violationLabelText":"Violation","appLogoLinkUrl":"http://www.windsorsolutions.com/Products/nSuite","appLogoImgAltText":"nCORE Home","agencyHoverText":"windsorsolutions.com Homepage","agencyUrl":"http://www.windsorsolutions.com","agencyImgPath":"Content/Images/SVG/organization-logo.svg","agencyDispText":"Windsor Solutions Home","modules":["EVT","CMPL_ACTN","CONS_ESMNT","CORR_ACTN","DOC_SETS","PROJ","EVAL","EXT_USER","FIN_ASSURNCE","FIN_INSTRMNT","RECVBL","HAZ_WASTE_PRMT","INVOICE_NAV","INVOICE","LMT_SET","MONTR_DATA","MON_DAT_UPL_STE","NSITE","NSPECT","NVISAGE","PRMT","REPORT_BUILDER","SCHD","SUBM"],"routes":[{"IsActive":false,"RouteMetadata":null},{"IsActive":false,"RouteMetadata":null},{"IsActive":true,"RouteMetadata":null},{"IsActive":true,"RouteMetadata":null},{"IsActive":true,"RouteMetadata":null}],"navigationNames":[{"Id":"NAV.HOME.EVT","Value":null},{"Id":"NAV.SITE.MONITORING_DATA_LIST","Value":null},{"Id":"NAV.HOME.NOTIF","Value":null},{"Id":"NAV.HOME.INSP_DASH","Value":null},{"Id":"NAV.HOME.SUBM.RCVD","Value":null},{"Id":"NAV.HOME.CONS_ESMNT","Value":null},{"Id":"NAV.SITE.USER","Value":null},{"Id":"NAV.HOME.CMPL_ACTN","Value":null},{"Id":"NAV.HOME.FIN_INSTRMNT","Value":null},{"Id":"NAV.SITE.HAZ_WASTE_PRMT_EVT","Value":null},{"Id":"NAV.HOME.CORR_ACTN","Value":null},{"Id":"NAV.SITE.RECVBL","Value":null},{"Id":"NAV.SITE.MONITORING_DATA_SUBMITTED_LIST","Value":null},{"Id":"NAV.HOME.PRMT","Value":null},{"Id":"NAV.SITE.HOME","Value":null},{"Id":"NAV.SITE.CORR_ACTN_EVT","Value":null},{"Id":"NAV.HOME.EVAL_PLAN","Value":null},{"Id":"NAV.HOME.MYTASKS","Value":null},{"Id":"NAV.HOME.HAZ_WASTE_PRMT","Value":null},{"Id":"NAV.SITE.HAZ_WASTE_PRMT_UNIT","Value":null},{"Id":"NAV.SITE.DOC_MGMT","Value":null},{"Id":"NAV.SITE.PRMT","Value":null},{"Id":"NAV.SITE.CORR_ACTN_AREA","Value":null},{"Id":"NAV.SITE.NOTIF","Value":null},{"Id":"NAV.SITE.EVAL","Value":null},{"Id":"NAV.SITE.SUBM.HOME","Value":null},{"Id":"NAV.SITE.CONTCT","Value":null},{"Id":"NAV.SITE.DETAIL","Value":null},{"Id":"NAV.SITE.CMPL_ACTN","Value":null},{"Id":"NAV.SITE.CORR_ACTN_AUTH","Value":null},{"Id":"NAV.SITE.FIN_ASSURNCE","Value":null},{"Id":"NAV.HOME.SUBM","Value":null},{"Id":"NAV.HOME.EVAL","Value":null},{"Id":"NAV.SITE.PROJ","Value":"Environmental Projects"},{"Id":"NAV.HOME.PROJ","Value":"Environmental Projects"},{"Id":"NAV.SITE.VIOL","Value":"Violations"}],"sessionTimeoutInSeconds":0}

var themes = {
  default: {
    appName: appSettings.appName,
    externalLanding: {
      appDescription: "nCORE is a one-stop portal for submitting permit applications and service requests to the Indiana Department of Environmental Management (IDEM)."
    },
    titleString: null,
    titleSubhead: null,
    clientNameShort: "Windsor Solutions",
    clientLogo: false,
    clientLogoTitle: appSettings.appLogoImgAltText,
    clientLogoLinkUrl: appSettings.appLogoLinkUrl,
    contactUrl: appSettings.contactUrl,
    nSiteBaseUrl: appSettings.nSiteBaseUrl,
    multipleSiteCategories: false,
    mainFeaturesHeading: "Permitting & Compliance",
    appSubheadingDescription:
      "A fully-integrated program management solution",
    programAreas: [],
    headerOrgHomeLink: {
      enabled: false,
      hoverText: appSettings.agencyHoverText,
      url: appSettings.agencyUrl,
      imgPath: appSettings.agencyImgPath,
      text: appSettings.agencyDispText,
    },
    publicServicesIntroText: null,
    usesThirdPartyAuth: false,
    introLeadInResponse: undefined, // default provided in template
    internalFeatures: [
      {
        description: "Apply for permits",
      },
      {
        description:
          "Manage your permits (pay fees, apply for renewals)",
      },
      {
        description:
          "Submit reports (required by your permit or certification)",
      },
    ],
    explorer: {
      enabled: true,
      title: "Site Map Explorer",
      description:
        "Use our Explorer mapping tools and advanced-search capabilities to navigate all available information on environmental sites.",
    },
    publicNoticeSearch: {
      enabled: true,
      title: "Public Notice Search",
      description:
        "Keep informed about public notices and hearings, access related documents, and submit comments online.",
    },
    CSOSSOSearch: {
      enabled: true,
      title: "CSO/SSO Discharge Search",
      description:
        "Search for Combined Sewer Overflow (CSO), Retention Treatment Basin (RTB), and Sanitary Sewer Overflow (SSO) discharge events",
    },
    complaints: {
      enabled: false,
      title:
        "Report Incidents, Pollution, Unauthorized Activities",
      description:
        "See something we should know about, such as unauthorized pollution or spills? Use our online tools to file a report, with complete anonymity if you choose.",
    },
    complaintsSimple: {
      enabled: true,
      title:
        "Report Incidents, Pollution, Unauthorized Activities",
      description:
        "See something we should know about, such as unauthorized pollution or spills? Use our online tools to file a report, with complete anonymity if you choose.",
    },
    foia: {
      title: "Submit a FOIA Request",
      description:
        "Submit a Freedom of Information Act (FOIA) Request",
      enabled: true,
    },
  },
  MIWATERS: {
    appName: "MiWaters",
    externalLanding: {
      appDescription: "MiWaters is a one-stop portal for submitting permit applications and service requests to EGLE's Water Resources Division."
    },
    clientNameShort: "EGLE",
    clientLogo: true,
    // titleSubhead: "Michigan Environment, Great Lakes & Energy",
    titleString: "MiWaters",
    appSubheadingDescription: null,
    headerOrgHomeLink: {
      enabled: true,
    },
    programAreas: [
      {
        id: "NPDES",
        name: "NPDES",
      },
      {
        id: "groundwater",
        name: "Groundwater",
      },
      {
        id: "waterResources",
        name: "Resource Permitting",
      },
      {
        id: "aquaticNuisanceControl",
        name: "Aquatic Nuisance Control",
      },
      {
        id: "part41",
        name: "Part 41 (Wastewater Construction)",
        commonName: "Wastewater Construction",
      },
    ],
    introLeadInResponse:
      "For registered users, MiWaters is the portal to several types of actions:",
    internalFeatures: [
      { description: "Apply for permits" },
      {
        description:
          "Manage your permits (pay fees, apply for renewals)",
      },
      {
        description:
          "Submit reports (required by your permit or certification)",
      },
      { description: "Submit service requests" },
      { description: "View issued permits" },
      { description: "See your notifications" },
      {
        description:
          "Review evaluations / site inspections",
      },
    ],
    publicServicesHeading: "Public Information and Services",
    publicNoticeSearch: {
      enabled: true,
      description:
        "Find public notices, hearings, and other events. Access documents made available to the public.",
    },
    CSOSSOSearch: {
      enabled: true,
    },
    explorer: {
      enabled: true,
      description:
        "Use our mapping tools and advanced search capabilities to navigate all available Water Resources Division public site information.",
    },
    complaints: {
      enabled: true,
      title:
        "Report Spills, Pollution, Unauthorized Activities",
      description:
        "Report observed spills, pollution, or any other unauthorized activities in wetlands, lakes or streams. File a report with complete anonymity if you choose.",
    },
    complaintsSimple: {
      enabled: false,
    },
    foia: {
      enabled: false,
    },
  },
  SCEP: {
    appName: "ePermitting",
    externalLanding: {
      appDescription: "SC ePermitting is a one-stop portal for submitting permit applications and service requests to South Carolina Department of Health and Environmental Control."
    },
    clientNameShort: "SC DHEC",
    clientLogo: true,
    multipleSiteCategories: true,
    titleSubhead:
      "South Carolina Department of Health and Environmental Control",
    titleString: "ePermitting Online Services",
    appSubheadingDescription: null,
    programAreas: [
      {
        id: "infectiousWaste",
        name: "Infectious Waste",
      },
      {
        id: "CZC",
        name: "Coastal Zone Consistency (CZC)",
        commonName: "Coastal Zone Consistency",
      },
      {
        id: "criticalAreas",
        name: "Critical Areas",
      },
      {
        id: "agriculture",
        name: "Agriculture",
      },
      {
        id: "damSafety",
        name: "Dam Safety",
      },
      {
        id: "NPDES-SW",
        name: "Stormwater (NPDES)",
        commonName: "Stormwater Construction",
      },
      {
        id: "NPDES-WW",
        name: "Wastewater (NPDES)",
        commonName: "Wastewater",
      },
    ],
    divisions: [
      {
        name: "Bureau of Air Quality",
      },
      {
        name: "Bureau of Environmental Health Services",
      },
      {
        name: "Bureau of Land and Waste Management",
        programAreas: ["infectiousWaste"],
      },
      {
        name:
          "Division of Ocean and Coastal Resource Management (OCRM)",
        programAreas: ["CZC", "criticalAreas"],
      },
      {
        name: "Bureau of Water",
        programAreas: [
          "agriculture",
          "damSafety",
          "NPDES-SW",
          "NPDES-WW",
        ],
      },
      {
        name: "Health Regulations",
      },
    ],
    explorer: {
      enabled: false,
      // description: "Use our Explorer mapping tools and advanced-search capabilities to navigate all available air facility site information.",
    },
    publicNoticeSearch: {
      enabled: true,
    },
    CSOSSOSearch: {
      enabled: true,
      title: "SSO Discharge Search",
      description:
        "Search for Sanitary Sewer Overflow (SSO) discharge events",
    },
    complaints: {
      enabled: false,
    },
    complaintsSimple: {
      enabled: false,
    },
    foia: {
      title: "FOIA Requests",
      description:
        "Submit a Freedom of Information Act (FOIA) Request",
      enabled: false,
    },
  },
  KSEP: {
    appName: "KEIMS",
    externalLanding: {
      appDescription: "KEIMS is a one-stop portal for submitting regulatory, environmental applications and registrations, including permits, and many kinds of required or supporting documentation to the Kansas Department of Health and Environment (KDHE) Division of Environment (DOE)."
    },
    clientNameShort: "KSEP",
    clientLogo: true,
    titleSubhead:
      "Kansas Environmental Information Management System",
    titleString: "KEIMS",
    appSubheadingDescription: null,
    programAreas: [
      {
        name: "Air Quality",
      },
      {
        name: "Dry Cleaning",
      },
      {
        name: "Environmental Liability Release",
        commonName: "Environmental Liability",
      },
    ],
    hideExternalUserCreate: true,
    explorer: {
      enabled: true,
      description:
        "Use our Explorer mapping tools and advanced search capabilities to navigate all available Division of Environment (DOE) facility site information.",
    },
    publicNoticeSearch: {
      enabled: true,
      description:
        "Keep informed about public notices and hearings, access related documents, and submit comments online.",
    },
    CSOSSOSearch: {
      enabled: false,
    },
    complaints: {
      enabled: false,
    },
    complaintsSimple: {
      enabled: false,
    },
    foia: {
      title: "FOIA Requests",
      description:
        "Submit a Freedom of Information Act (FOIA) Request",
      enabled: false,
    },
  },
  IDEM: {
    appName: "ePortal",
    externalLanding: {
      appDescription: "nCore is a one-stop portal for submitting permit applications and service requests to the Indiana Department of Environmental Management (IDEM)."
    },
    clientNameShort: "IDEM",
    clientLogo: true,
    titleSubhead:
      "Indiana Department of Environmental Management",
    titleString: "Regulatory ePortal",
    hideExternalUserCreate: true,
    usesThirdPartyAuth: true,
    programAreas: [
      {
        name: "Stormwater Construction (NPDES)",
        commonName: "Stormwater Construction",
      },
    ],
    appSubheadingDescription:
      "Permitting, Compliance Management, and public data search tools for the IDEM Stormwater Construction (NPDES) program",
    explorer: {
      enabled: true,
      description:
        "Use our Explorer mapping tools and advanced-search capabilities to navigate all public information on Construction Stormwater permitting.",
    },
    publicNoticeSearch: {
      enabled: false,
      description:
        "Keep informed about public notices and hearings related to Air Quality permit applications, access related documents, and submit comments online.",
    },
    CSOSSOSearch: {
      enabled: false,
    },
    complaints: {
      enabled: false,
    },
    complaintsSimple: {
      enabled: false,
    },
    foia: {
      title: "Submit a FOIA Request",
      description:
        "Submit a Freedom of Information Act (FOIA) Request",
      enabled: false,
    },
  },
  ADEM: {
    appName: "AEPACS",
    externalLanding: {
      appDescription: "The Regulatory ePortal is a one- stop portal for submitting regulatory, environmental applications and registrations, including permits, and many kinds of required or supporting documentation to the Alabama Department of Environmental Management(ADEM)."
    },
    clientNameShort: "ADEM",
    clientLogo: true,
    titleSubhead:
      "Alabama Department of Environmental Management",
    titleString:
      "AEPACS - Alabama Environmental Permitting and Compliance System",
    appSubheadingDescription: null,
    programAreas: [
      {
        id: "NPDES",
        name: "NPDES",
        commonName: "Wastewater and Stormwater",
      },
      {
        id: "STR",
        name: "Scrap Tires and Recycling",
        commonName: "Scrap Tires and Recycling",
      },
      {
        id: "UST",
        name: "Underground Storage Tanks (UST)",
        commonName: "Underground Storage Tanks",
      },
    ],
    divisions: [
      {
        name: "Bureau of Land and Waste Management",
        programAreas: ["NPDES", "UST"],
      },
      {
        name:
          "Solid Waste Branch - Materials Management Division",
        programAreas: ["STR"],
      },
    ],
    // appSubheadingDescription: "Permitting, Compliance Management, and public data search tools for the IDEM Stormwater Construction (NPDES) program",
    // publicServicesHeading: "Public Information and Services",
    // explorer: {
    //     enabled: true,
    //     description: "Use our Explorer mapping tools and advanced-search capabilities to navigate all public information on Construction Stormwater permitting.",
    // },
    // publicNoticeSearch: {
    //     enabled: false,
    //     description: "Keep informed about public notices and hearings, access related documents, and submit comments online.",
    // },
    CSOSSOSearch: {
      enabled: false,
    },
    complaints: {
      enabled: false,
    },
    complaintsSimple: {
      enabled: false,
    },
    foia: {
      title: "Submit a FOIA Request",
      description:
        "Submit a Freedom of Information Act (FOIA) Request",
      enabled: false,
    },
  },
};
themes.NCORE = themes.default;

function generateTheme(key) {
  var themeOverrides = themes[key] || {};
  var themeConfig = _.merge({}, themes.default, themeOverrides);

  // default 'shorthand' to full app name if not specified
  if (!themeConfig.appNameShorthand)
    themeConfig.appNameShorthand = themeConfig.appName;
  // Create subheading
  if (!themeConfig.appSubheadingDescription) {
    themeConfig.appSubheadGroups = themeConfig.programAreas.map(
      function (item) {
        return item.commonName || item.name;
      }
    );
  }
  return themeConfig;
}

var themeKey = appSettings.appDeployId;

export default generateTheme(themeKey);