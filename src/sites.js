import permitApplicationForms from "./permitApplicationForms";
import permitChangeForms from "./permitChangeForms";

const sites = [
  {
    id: "-2190724337913349216",
    siteCategoryDescription: "Site",
    siteId: "-2920255603792698954",
    siteName: "Dow Chem-Midland Battery Park",
    siteNumber: "117771",
    userId: "8285620348187282972",
  },
  {
    id: "-3464576457",
    siteCategoryDescription: "Site",
    siteId: "-23465346457",
    siteName: "Site with NO ELIGIBLE PERMIT APPLICATIONS",
    siteNumber: "11777444",
    userId: "8285620348187282972",
    permitApplicationForms: [],
  },
  {
    id: "-3465554576457",
    siteCategoryDescription: "Site",
    siteId: "-2346555346457",
    siteName: "Site with NO PERMIT CHANGE FORMS",
    siteNumber: "1177557444",
    userId: "828562034558187282972",
    permitChangeForms: [],
  },
  {
    id: "-5166687662054990675",
    siteCategoryDescription: "Site",
    siteId: "-4890481630581449844",
    siteName: "WB-3971-1: Gaylanta Lake: Professional Lake Management",
    siteNumber: "WB-3971-1",
    userId: "8285620348187282972",
  },
  {
    id: "3010815515534464633",
    siteCategoryDescription: "Organization",
    siteId: "-4863330402991582725",
    siteName: "Windsor Solutions, Inc.",
    siteNumber: "AA45C1B3-0B6C",
    userId: "8285620348187282972",
  },
  {
    id: "-2092113969318566428",
    siteCategoryDescription: "Site",
    siteId: "2766407438044720289",
    siteName: "My second lighthouse",
    siteNumber: "C3C85D49-7FC1",
    userId: "8285620348187282972",
  },
  {
    id: "-6292949795786528881",
    siteCategoryDescription: "Site",
    siteId: "9185475669016635961",
    siteName: "Mich Sugar Co-Carrollton",
    siteNumber: "19954",
    userId: "8285620348187282972",
  },
  {
    id: "-951038906568459521",
    siteCategoryDescription: "Site",
    siteId: "-6997379679690657167",
    siteName: "Mt Pleasant WWTP",
    siteNumber: "13593",
    userId: "8285620348187282972",
  },
  {
    id: "-5989558446888159612",
    siteCategoryDescription: "Site",
    siteId: "-7702383316730183652",
    siteName: "Lighthouse On The Lake",
    siteNumber: "104430",
    userId: "8285620348187282972",
  },
  {
    id: "-5863523451461382543",
    siteCategoryDescription: "Site",
    siteId: "5122996298221450019",
    siteName: "Portage Lake Authority WWTP",
    siteNumber: "18009",
    userId: "8285620348187282972",
  },
  {
    id: "-4200184700666321177",
    siteCategoryDescription: "Site",
    siteId: "5011617623673186887",
    siteName: "Atchson Hotel",
    siteNumber: "20098",
    userId: "8285620348187282972",
  },
  {
    id: "8238506560530379722",
    siteCategoryDescription: "Site",
    siteId: "-8388499447839396657",
    siteName: "My Next Lighthouse",
    siteNumber: "55E94255-BCEF",
    userId: "8285620348187282972",
  },
  {
    id: "-1421436179653998392",
    siteCategoryDescription: "Site",
    siteId: "-8223866504832293585",
    siteName: "Walkerville WWTP",
    siteNumber: "11909",
    userId: "8285620348187282972",
  },
  {
    id: "5202056661720833633",
    siteCategoryDescription: "Site",
    siteId: "5336388295962619931",
    siteName: "City of Mt Pleasant-Mt Pleasant: 15-37-0006-P",
    siteNumber: "15-37-0006-P",
    userId: "8285620348187282972",
  },
  {
    id: "3536673147871790986",
    siteCategoryDescription: "Site",
    siteId: "7296193493375900261",
    siteName: "nSite-Explorer-Test",
    siteNumber: "CECA33C2-C3A2",
    userId: "8285620348187282972",
  },
  {
    id: "-1051844383864804245",
    siteCategoryDescription: "Site",
    siteId: "8085252964663469258",
    siteName: "A M Todd Co",
    siteNumber: "10457",
    userId: "8285620348187282972",
  },
  {
    id: "5787653687642380496",
    siteCategoryDescription: "Site",
    siteId: "7099599008080831802",
    siteName: "SQL Trace Test Bill",
    siteNumber: "6C2DB358-14AB",
    userId: "8285620348187282972",
  },
  {
    id: "3484382327516114129",
    siteCategoryDescription: "Site",
    siteId: "-8534201054128025977",
    siteName: "Fowler WWSL",
    siteNumber: "10449",
    userId: "8285620348187282972",
  },
];

sites.forEach((site) => {
  if (!site.permitApplicationForms) {
    site.permitApplicationForms = permitApplicationForms;
  }
  // if (!site.permitChangeForms) {
  //   site.permitChangeForms = permitChangeForms;
  // }
});

export default sites;
