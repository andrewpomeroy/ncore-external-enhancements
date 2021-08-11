const permits = [
  {
    id: "-4865675135405112457",
    permitType: "NPDES: NPDES Industrial Storm Water No Exposure Certificate (NEC)",
    permitNumber: "NEC157609 v1.0",
    siteId: "-6997379679690657167",
  },
  {
    id: "-1828687938363488930",
    permitType: "NPDES: NPDES Certificate of Coverage under General Permit (COC)-SW-Industrial CY1",
    permitNumber: "MIS111822 v2.0",
    siteId: "-5269401862562057835",
  },
  {
    id: "-3075009187230410836",
    permitType: "NPDES: NPDES Construction Storm Water Notice of Coverage (NOC)",
    permitNumber: "MIR111453 v1.0",
    siteId: "-2920255603792698954",
  },
  {
    id: "-8439392618072342885",
    permitType: "NPDES: NPDES Certificate of Coverage under General Permit (COC)-Wastewater Stabilization Lagoon",
    permitNumber: "MIG580061 v5.0",
    siteId: "-8534201054128025977",
  },
  {
    id: "3459771970400492144",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0020061 v4.0",
    siteId: "5122996298221450019",
  },
  {
    id: "3105216128282746711",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0003468 v4.0",
    siteId: "-2712300476029484389",
  },
  {
    id: "2988319104760340388",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "M00023655 v10.0",
    siteId: "-6997379679690657167",
  },
  {
    id: "7335791602673328155",
    permitType: "Groundwater: Rule 2211 Authorization",
    permitNumber: "GW1110001 v3.0",
    siteId: "-6979741839739060090",
  },
  {
    id: "6395683429871777825",
    permitType: "Groundwater: Rule 2210(y) Authorization",
    permitNumber: "GW1010173 v2.0",
    siteId: "-7702383316730183652",
  },
  {
    id: "-7653236528158909226",
    permitType: "ANC: ANC Aquatic Plant/Algae Permit",
    permitNumber: "ANC9802470 v1.0",
    siteId: "-4890481630581449844",
  },
  {
    id: "-5021393739632695259",
    permitType: "ANC: ANC Aquatic Plant/Algae Permit",
    permitNumber: "ANC9801469 v1.0",
    siteId: "-4890481630581449844",
  },
  {
    id: "6607076652309410878",
    permitType: "Resources: Resources Minor Project",
    permitNumber: "15-37-0006-P v1.0",
    siteId: "5336388295962619931",
  },
  {
    id: "1451003984059857109",
    permitType: "Resources: Resources Individual Permit",
    permitNumber: "11-61-0034-P v1.0",
    siteId: "-5682947805162671327",
  },
  {
    id: "-6921218785529805598",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0002224 v6.1",
    siteId: "9185475669016635961",
  },
  {
    id: "7307649680720952060",
    permitType: "NPDES: 2002 Records-aaDesc",
    permitNumber: "MANUAL#BB9AC3F v1.0",
    siteId: "-8475732794553131483",
  },
  {
    id: "6820252593765290687",
    permitType: "NPDES: 2002 Records-CAFO",
    permitNumber: "MANUAL#6C431C0 v1.0",
    siteId: "-8475732794553131483",
  },
  {
    id: "-1271647233931848824",
    permitType: "NPDES: 2002 Records-CAFO",
    permitNumber: "MANUAL#00AD747 v1.0",
    siteId: "5011617623673186887",
  },
  {
    id: "-789336946503496488",
    permitType: "Resources: Gerald Test 212",
    permitNumber: "DAM05005 v1.0",
    siteId: "5011617623673186887",
  },
  {
    id: "-833976743991963709",
    permitType: "NPDES: NPDES Certificate of Coverage under General Permit (COC)-Secondary Treatment Wastewater",
    permitNumber: "MIG570222 v1.0",
    siteId: "8478435591775551824",
  },
  {
    id: "2642113153185023840",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0038407 v4.1",
    siteId: "8085252964663469258",
  },
  {
    id: "-3741997527971399608",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0020451 v4.0",
    siteId: "-8475732794553131483",
  },
  {
    id: "1288441326905909161",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0020265 v5.1",
    siteId: "5011617623673186887",
  },
  {
    id: "-6018730475430309350",
    permitType: "Groundwater: Rule 2210(y) Authorization",
    permitNumber: "GW1010257 v2.0",
    siteId: "-8223866504832293585",
  },
  {
    id: "-3280238510732153996",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0023655 v2.0",
    siteId: "-6997379679690657167",
  },
  {
    id: "-767729312987817983",
    permitType: "Resources: Resources General Permit",
    permitNumber: "WRP005683 v1.0",
    siteId: "-8475732794553131483",
  },
  {
    id: "-4800934497555136963",
    permitType: "Resources: Resources Individual Permit",
    permitNumber: "WRP005681 v1.0",
    siteId: "5011617623673186887",
  },
  {
    id: "1380091252272561574",
    permitType: "Resources: Resources General Permit",
    permitNumber: "WRP005652 v1.0",
    siteId: "-8475732794553131483",
  },
  {
    id: "-7441482691202945381",
    permitType: "NPDES: NPDES Industrial Storm Water No Exposure Certificate (NEC)",
    permitNumber: "NEC157955 v1.1",
    siteId: "-8475732794553131483",
  },
  {
    id: "-7061952924874436352",
    permitType: "NPDES: NPDES Industrial Storm Water No Exposure Certificate (NEC)",
    permitNumber: "NEC157955 v1.0",
    siteId: "-8475732794553131483",
  },
  {
    id: "-53798619623623290",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0038407 v5.0",
    siteId: "8085252964663469258",
  },
  {
    id: "-7333658966422648819",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0020451 v5.0",
    siteId: "-8475732794553131483",
  },
  {
    id: "-1772713369624529699",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0003468 v4.1",
    siteId: "-2712300476029484389",
  },
  {
    id: "-3622641159646648758",
    permitType: "Groundwater: Rule 2211 Authorization",
    permitNumber: "GW1110797 v1.0",
    siteId: "5011617623673186887",
  },
  {
    id: "-2936161263268559506",
    permitType: "Groundwater: Rule 2210(y) Authorization",
    permitNumber: "GW1010257 v3.0",
    siteId: "-8223866504832293585",
  },
  {
    id: "-7868785998667947743",
    permitType: "Resources: Resources Part 325 Bottomland Conveyance",
    permitNumber: "BC0000041 v1.0",
    siteId: "-8534201054128025977",
  },
  {
    id: "1056537712870082302",
    permitType: "ANC: ANC Aquatic Plant/Algae Permit",
    permitNumber: "ANC9802822 v1.0",
    siteId: "5011617623673186887",
  },
  {
    id: "5583052562963373055",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0046485 v3.0",
    siteId: "-8223866504832293585",
  },
  {
    id: "4551447225406786518",
    permitType: "NPDES: NPDES Certificate of Coverage under General Permit (COC)-Petroleum Contaminated Wastewater",
    permitNumber: "MIG080045 v2.0",
    siteId: "-2712300476029484389",
  },
  {
    id: "8920249183355832388",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0038407 v4.0",
    siteId: "8085252964663469258",
  },
  {
    id: "-6348847297950556639",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0038407 v3.0",
    siteId: "8085252964663469258",
  },
  {
    id: "-7936572019759091941",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0020451 v3.0",
    siteId: "-8475732794553131483",
  },
  {
    id: "-5065502802036105471",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0020451 v1.0",
    siteId: "-8475732794553131483",
  },
  {
    id: "8563837401996075305",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0020265 v5.0",
    siteId: "5011617623673186887",
  },
  {
    id: "-4259429448724072579",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0020265 v3.0",
    siteId: "5011617623673186887",
  },
  {
    id: "-5460448847523895933",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0020265 v2.0",
    siteId: "5011617623673186887",
  },
  {
    id: "9202421603467018278",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0020061 v1.0",
    siteId: "5122996298221450019",
  },
  {
    id: "-483891754748272329",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0003468 v2.2",
    siteId: "-2712300476029484389",
  },
  {
    id: "4196862724029174777",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0003468 v2.1",
    siteId: "-2712300476029484389",
  },
  {
    id: "-239811261257040607",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0003468 v2.0",
    siteId: "-2712300476029484389",
  },
  {
    id: "-533412351636810828",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0003468 v1.0",
    siteId: "-2712300476029484389",
  },
  {
    id: "2431522334874261914",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0002224 v4.0",
    siteId: "9185475669016635961",
  },
  {
    id: "4633255612324554321",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0002224 v2.0",
    siteId: "9185475669016635961",
  },
  {
    id: "-2076688752801369097",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "M00023655 v1.0",
    siteId: "-6997379679690657167",
  },
  {
    id: "7408517221340723849",
    permitType: "Groundwater: Rule 2210(y) Authorization",
    permitNumber: "GW1010227 v1.0",
    siteId: "9185475669016635961",
  },
  {
    id: "-4353393143177483908",
    permitType: "NPDES: NPDES Certificate of Coverage under General Permit (COC)-SW-Industrial CY1",
    permitNumber: "MIS111822 v1.0",
    siteId: "-5269401862562057835",
  },
  {
    id: "-8757970648539915963",
    permitType: "NPDES: NPDES Certificate of Coverage under General Permit (COC)-Wastewater Stabilization Lagoon",
    permitNumber: "MIG580061 v4.0",
    siteId: "-8534201054128025977",
  },
  {
    id: "3021235032856628134",
    permitType: "NPDES: NPDES Certificate of Coverage under General Permit (COC)-Wastewater Stabilization Lagoon",
    permitNumber: "MIG580061 v3.0",
    siteId: "-8534201054128025977",
  },
  {
    id: "-4027119754654965654",
    permitType: "NPDES: NPDES Certificate of Coverage under General Permit (COC)-Wastewater Stabilization Lagoon",
    permitNumber: "MIG580061 v2.0",
    siteId: "-8534201054128025977",
  },
  {
    id: "-2851685318097659946",
    permitType: "NPDES: NPDES Certificate of Coverage under General Permit (COC)-Wastewater Stabilization Lagoon",
    permitNumber: "MIG580061 v1.0",
    siteId: "-8534201054128025977",
  },
  {
    id: "-7470631771009837073",
    permitType: "NPDES: NPDES Certificate of Coverage under General Permit (COC)-Petroleum Contaminated Wastewater",
    permitNumber: "MIG080045 v2.1",
    siteId: "-2712300476029484389",
  },
  {
    id: "8903479996306214299",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0057602 v1.0",
    siteId: "8478435591775551824",
  },
  {
    id: "-5665974628741280849",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0046485 v2.0",
    siteId: "-8223866504832293585",
  },
  {
    id: "-3211901261879856447",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0046485 v1.0",
    siteId: "-8223866504832293585",
  },
  {
    id: "1916994243508835056",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0038407 v3.1",
    siteId: "8085252964663469258",
  },
  {
    id: "-5548154203889047317",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0038407 v2.0",
    siteId: "8085252964663469258",
  },
  {
    id: "7060685082774113352",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0038407 v1.0",
    siteId: "8085252964663469258",
  },
  {
    id: "-7998095042703721669",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0023655 v1.0",
    siteId: "-6997379679690657167",
  },
  {
    id: "2483881995236831783",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0020451 v3.1",
    siteId: "-8475732794553131483",
  },
  {
    id: "7080020546465063645",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0020451 v2.0",
    siteId: "-8475732794553131483",
  },
  {
    id: "5043594276025231360",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0020451 v1.1",
    siteId: "-8475732794553131483",
  },
  {
    id: "7279362079457041697",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0020265 v4.0",
    siteId: "5011617623673186887",
  },
  {
    id: "153608641387294289",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0020265 v3.1",
    siteId: "5011617623673186887",
  },
  {
    id: "1555984290874554254",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0020265 v2.1",
    siteId: "5011617623673186887",
  },
  {
    id: "3863294451338798077",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0020265 v1.0",
    siteId: "5011617623673186887",
  },
  {
    id: "-937900268260559613",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0020061 v3.0",
    siteId: "5122996298221450019",
  },
  {
    id: "-6290021341752010015",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0020061 v2.0",
    siteId: "5122996298221450019",
  },
  {
    id: "-8888770896440518415",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0020061 v1.1",
    siteId: "5122996298221450019",
  },
  {
    id: "1193567896198577808",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0003468 v3.0",
    siteId: "-2712300476029484389",
  },
  {
    id: "7024959406267039744",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0003468 v2.3",
    siteId: "-2712300476029484389",
  },
  {
    id: "-5682583649812815532",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0003468 v1.1",
    siteId: "-2712300476029484389",
  },
  {
    id: "-4428548414083427984",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0002224 v6.0",
    siteId: "9185475669016635961",
  },
  {
    id: "1516949126422915596",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0002224 v5.0",
    siteId: "9185475669016635961",
  },
  {
    id: "-5438454340150350482",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0002224 v4.1",
    siteId: "9185475669016635961",
  },
  {
    id: "6698573356407065478",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0002224 v3.0",
    siteId: "9185475669016635961",
  },
  {
    id: "-1970730980948506553",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0002224 v2.1",
    siteId: "9185475669016635961",
  },
  {
    id: "-6798844890119523800",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0002224 v1.0",
    siteId: "9185475669016635961",
  },
  {
    id: "-602667155388993007",
    permitType: "Groundwater: Rule 2218 Authorization",
    permitNumber: "M00978 v1.0",
    siteId: "-7702383316730183652",
  },
  {
    id: "-6194219836179869291",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "M00023655 v2.0",
    siteId: "-6997379679690657167",
  },
  {
    id: "134227458808179958",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "M00023655 v1.1",
    siteId: "-6997379679690657167",
  },
  {
    id: "-3349946536380447393",
    permitType: "Groundwater: Rule 2211 Authorization",
    permitNumber: "GW1110001 v2.0",
    siteId: "-6979741839739060090",
  },
  {
    id: "1666035594569704654",
    permitType: "Groundwater: Rule 2210(y) Authorization",
    permitNumber: "GW1010257 v1.0",
    siteId: "-8223866504832293585",
  },
  {
    id: "-5275011663001364562",
    permitType: "Groundwater: Rule 2210(y) Authorization",
    permitNumber: "GW1010173 v1.0",
    siteId: "-7702383316730183652",
  },
  {
    id: "-8117392246528189608",
    permitType: "Part 41: Part 41 Individual Permit",
    permitNumber: "P41000620 v1.0",
    siteId: "-8475732794553131483",
  },
  {
    id: "5102529104000156034",
    permitType: "Part 41: Part 41 Individual Permit",
    permitNumber: "P41-1007593 v1.0",
    siteId: "8478435591775551824",
  },
  {
    id: "-9189165856196864074",
    permitType: "Part 41: Part 41 Individual Permit",
    permitNumber: "P41-1007346 v1.0",
    siteId: "-6997379679690657167",
  },
  {
    id: "8760924492001622121",
    permitType: "Part 41: Part 41 Individual Permit",
    permitNumber: "P41-1007248 v1.0",
    siteId: "5011617623673186887",
  },
  {
    id: "9223013601586369309",
    permitType: "Part 41: Part 41 Individual Permit",
    permitNumber: "P41-1005685 v1.0",
    siteId: "5011617623673186887",
  },
  {
    id: "3778587385607939018",
    permitType: "Part 41: Part 41 Individual Permit",
    permitNumber: "P41-1005289 v1.0",
    siteId: "-6997379679690657167",
  },
  {
    id: "626888322453207285",
    permitType: "Part 41: Part 41 Individual Permit",
    permitNumber: "P41-1004877 v1.0",
    siteId: "5122996298221450019",
  },
  {
    id: "-1388644714105799134",
    permitType: "Part 41: Part 41 Individual Permit",
    permitNumber: "P41-1004669 v1.0",
    siteId: "5011617623673186887",
  },
  {
    id: "-4737198464093982368",
    permitType: "Part 41: Part 41 Individual Permit",
    permitNumber: "P41-1004314 v1.0",
    siteId: "-8475732794553131483",
  },
  {
    id: "-219167828347490366",
    permitType: "Part 41: Part 41 Individual Permit",
    permitNumber: "P41-1001041 v1.0",
    siteId: "-6997379679690657167",
  },
  {
    id: "4253681182190721388",
    permitType: "NPDES: NPDES Industrial Storm Water No Exposure Certificate (NEC)",
    permitNumber: "NEC157608 v1.0",
    siteId: "5011617623673186887",
  },
  {
    id: "6483035573713639086",
    permitType: "NPDES: NPDES Industrial Storm Water No Exposure Certificate (NEC)",
    permitNumber: "NEC000128 v1.0",
    siteId: "5011617623673186887",
  },
  {
    id: "-6770450538306646805",
    permitType: "NPDES: NPDES Certificate of Coverage under General Permit (COC)-SW-Municipal Industrial",
    permitNumber: "MIS710018 v1.0",
    siteId: "-8475732794553131483",
  },
  {
    id: "5671497619394101869",
    permitType: "Groundwater: Rule 2211 Authorization",
    permitNumber: "GW1110001 v1.0",
    siteId: "-6979741839739060090",
  },
  {
    id: "9062374017159404885",
    permitType: "Part 41: Part 41 Individual Permit",
    permitNumber: "P41-1004699 v1.0",
    siteId: "-6997379679690657167",
  },
  {
    id: "-4280328412308983404",
    permitType: "NPDES: NPDES Individual Permit",
    permitNumber: "MI0059947 v1.0",
    siteId: "8085252964663469258",
  },
  {
    id: "-4347542672572155594",
    permitType: "Resources: Resources Individual Permit",
    permitNumber: "WRP005677 v1.0",
    siteId: "8021576541049507203",
  },
];

export default permits;
