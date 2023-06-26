"use strict";

/*
|--------------------------------------------------------------------------
| DistrictSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const District = use("App/Models/District");

class DistrictSeeder {
  async run() {
    await District.createMany([
      {
        id: "1101010",
        regency_id: "1101",
        name: "TEUPAH SELATAN",
      },
      {
        id: "1101020",
        regency_id: "1101",
        name: "SIMEULUE TIMUR",
      },
      {
        id: "1101021",
        regency_id: "1101",
        name: "TEUPAH BARAT",
      },
      {
        id: "1101022",
        regency_id: "1101",
        name: "TEUPAH TENGAH",
      },
      {
        id: "1101030",
        regency_id: "1101",
        name: "SIMEULUE TENGAH",
      },
      {
        id: "1101031",
        regency_id: "1101",
        name: "TELUK DALAM",
      },
      {
        id: "1101032",
        regency_id: "1101",
        name: "SIMEULUE CUT",
      },
      {
        id: "1101040",
        regency_id: "1101",
        name: "SALANG",
      },
      {
        id: "1101050",
        regency_id: "1101",
        name: "SIMEULUE BARAT",
      },
      {
        id: "1101051",
        regency_id: "1101",
        name: "ALAFAN",
      },
      {
        id: "1102010",
        regency_id: "1102",
        name: "PULAU BANYAK",
      },
      {
        id: "1102011",
        regency_id: "1102",
        name: "PULAU BANYAK BARAT",
      },
      {
        id: "1102020",
        regency_id: "1102",
        name: "SINGKIL",
      },
      {
        id: "1102021",
        regency_id: "1102",
        name: "SINGKIL UTARA",
      },
      {
        id: "1102022",
        regency_id: "1102",
        name: "KUALA BARU",
      },
      {
        id: "1102030",
        regency_id: "1102",
        name: "SIMPANG KANAN",
      },
      {
        id: "1102031",
        regency_id: "1102",
        name: "GUNUNG MERIAH",
      },
      {
        id: "1102032",
        regency_id: "1102",
        name: "DANAU PARIS",
      },
      {
        id: "1102033",
        regency_id: "1102",
        name: "SURO",
      },
      {
        id: "1102042",
        regency_id: "1102",
        name: "SINGKOHOR",
      },
      {
        id: "1102043",
        regency_id: "1102",
        name: "KOTA BAHARU",
      },
      {
        id: "1103010",
        regency_id: "1103",
        name: "TRUMON",
      },
      {
        id: "1103011",
        regency_id: "1103",
        name: "TRUMON TIMUR",
      },
      {
        id: "1103012",
        regency_id: "1103",
        name: "TRUMON TENGAH",
      },
      {
        id: "1103020",
        regency_id: "1103",
        name: "BAKONGAN",
      },
      {
        id: "1103021",
        regency_id: "1103",
        name: "BAKONGAN TIMUR",
      },
      {
        id: "1103022",
        regency_id: "1103",
        name: "KOTA BAHAGIA",
      },
      {
        id: "1103030",
        regency_id: "1103",
        name: "KLUET SELATAN",
      },
      {
        id: "1103031",
        regency_id: "1103",
        name: "KLUET TIMUR",
      },
      {
        id: "1103040",
        regency_id: "1103",
        name: "KLUET UTARA",
      },
      {
        id: "1103041",
        regency_id: "1103",
        name: "PASIE RAJA",
      },
      {
        id: "1103042",
        regency_id: "1103",
        name: "KLUET TENGAH",
      },
      {
        id: "1103050",
        regency_id: "1103",
        name: "TAPAK TUAN",
      },
      {
        id: "1103060",
        regency_id: "1103",
        name: "SAMA DUA",
      },
      {
        id: "1103070",
        regency_id: "1103",
        name: "SAWANG",
      },
      {
        id: "1103080",
        regency_id: "1103",
        name: "MEUKEK",
      },
      {
        id: "1103090",
        regency_id: "1103",
        name: "LABUHAN HAJI",
      },
      {
        id: "1103091",
        regency_id: "1103",
        name: "LABUHAN HAJI TIMUR",
      },
      {
        id: "1103092",
        regency_id: "1103",
        name: "LABUHAN HAJI BARAT",
      },
      {
        id: "1104010",
        regency_id: "1104",
        name: "LAWE ALAS",
      },
      {
        id: "1104011",
        regency_id: "1104",
        name: "BABUL RAHMAH",
      },
      {
        id: "1104012",
        regency_id: "1104",
        name: "TANOH ALAS",
      },
      {
        id: "1104020",
        regency_id: "1104",
        name: "LAWE SIGALA-GALA",
      },
      {
        id: "1104021",
        regency_id: "1104",
        name: "BABUL MAKMUR",
      },
      {
        id: "1104022",
        regency_id: "1104",
        name: "SEMADAM",
      },
      {
        id: "1104023",
        regency_id: "1104",
        name: "LEUSER",
      },
      {
        id: "1104030",
        regency_id: "1104",
        name: "BAMBEL",
      },
      {
        id: "1104031",
        regency_id: "1104",
        name: "BUKIT TUSAM",
      },
      {
        id: "1104032",
        regency_id: "1104",
        name: "LAWE SUMUR",
      },
      {
        id: "1104040",
        regency_id: "1104",
        name: "BABUSSALAM",
      },
      {
        id: "1104041",
        regency_id: "1104",
        name: "LAWE BULAN",
      },
      {
        id: "1104050",
        regency_id: "1104",
        name: "BADAR",
      },
      {
        id: "1104051",
        regency_id: "1104",
        name: "DARUL HASANAH",
      },
      {
        id: "1104052",
        regency_id: "1104",
        name: "KETAMBE",
      },
      {
        id: "1104053",
        regency_id: "1104",
        name: "DELENG POKHKISEN",
      },
      {
        id: "1105080",
        regency_id: "1105",
        name: "SERBA JADI",
      },
      {
        id: "1105081",
        regency_id: "1105",
        name: "SIMPANG JERNIH",
      },
      {
        id: "1105082",
        regency_id: "1105",
        name: "PEUNARON",
      },
      {
        id: "1105090",
        regency_id: "1105",
        name: "BIREM BAYEUN",
      },
      {
        id: "1105100",
        regency_id: "1105",
        name: "RANTAU SELAMAT",
      },
      {
        id: "1105101",
        regency_id: "1105",
        name: "SUNGAI RAYA",
      },
      {
        id: "1105110",
        regency_id: "1105",
        name: "PEUREULAK",
      },
      {
        id: "1105111",
        regency_id: "1105",
        name: "PEUREULAK TIMUR",
      },
      {
        id: "1105112",
        regency_id: "1105",
        name: "PEUREULAK BARAT",
      },
      {
        id: "1105120",
        regency_id: "1105",
        name: "RANTO PEUREULAK",
      },
      {
        id: "1105130",
        regency_id: "1105",
        name: "IDI RAYEUK",
      },
      {
        id: "1105131",
        regency_id: "1105",
        name: "PEUDAWA",
      },
      {
        id: "1105132",
        regency_id: "1105",
        name: "BANDA ALAM",
      },
      {
        id: "1105133",
        regency_id: "1105",
        name: "IDI TUNONG",
      },
      {
        id: "1105134",
        regency_id: "1105",
        name: "DARUL IHSAN",
      },
      {
        id: "1105135",
        regency_id: "1105",
        name: "IDI TIMUR",
      },
      {
        id: "1105140",
        regency_id: "1105",
        name: "DARUL AMAN",
      },
      {
        id: "1105150",
        regency_id: "1105",
        name: "NURUSSALAM",
      },
      {
        id: "1105151",
        regency_id: "1105",
        name: "DARUL FALAH",
      },
      {
        id: "1105160",
        regency_id: "1105",
        name: "JULOK",
      },
      {
        id: "1105161",
        regency_id: "1105",
        name: "INDRA MAKMUR",
      },
      {
        id: "1105170",
        regency_id: "1105",
        name: "PANTE BIDARI",
      },
      {
        id: "1105180",
        regency_id: "1105",
        name: "SIMPANG ULIM",
      },
      {
        id: "1105181",
        regency_id: "1105",
        name: "MADAT",
      },
      {
        id: "1106010",
        regency_id: "1106",
        name: "LINGE",
      },
      {
        id: "1106011",
        regency_id: "1106",
        name: "ATU LINTANG",
      },
      {
        id: "1106012",
        regency_id: "1106",
        name: "JAGONG JEGET",
      },
      {
        id: "1106020",
        regency_id: "1106",
        name: "BINTANG",
      },
      {
        id: "1106031",
        regency_id: "1106",
        name: "LUT TAWAR",
      },
      {
        id: "1106032",
        regency_id: "1106",
        name: "KEBAYAKAN",
      },
      {
        id: "1106040",
        regency_id: "1106",
        name: "PEGASING",
      },
      {
        id: "1106041",
        regency_id: "1106",
        name: "BIES",
      },
      {
        id: "1106050",
        regency_id: "1106",
        name: "BEBESEN",
      },
      {
        id: "1106051",
        regency_id: "1106",
        name: "KUTE PANANG",
      },
      {
        id: "1106060",
        regency_id: "1106",
        name: "SILIH NARA",
      },
      {
        id: "1106061",
        regency_id: "1106",
        name: "KETOL",
      },
      {
        id: "1106062",
        regency_id: "1106",
        name: "CELALA",
      },
      {
        id: "1106063",
        regency_id: "1106",
        name: "RUSIP ANTARA",
      },
      {
        id: "1107050",
        regency_id: "1107",
        name: "JOHAN PAHLAWAN",
      },
      {
        id: "1107060",
        regency_id: "1107",
        name: "SAMATIGA",
      },
      {
        id: "1107061",
        regency_id: "1107",
        name: "BUBON",
      },
      {
        id: "1107062",
        regency_id: "1107",
        name: "ARONGAN LAMBALEK",
      },
      {
        id: "1107070",
        regency_id: "1107",
        name: "WOYLA",
      },
      {
        id: "1107071",
        regency_id: "1107",
        name: "WOYLA BARAT",
      },
      {
        id: "1107072",
        regency_id: "1107",
        name: "WOYLA TIMUR",
      },
      {
        id: "1107080",
        regency_id: "1107",
        name: "KAWAY XVI",
      },
      {
        id: "1107081",
        regency_id: "1107",
        name: "MEUREUBO",
      },
      {
        id: "1107082",
        regency_id: "1107",
        name: "PANTAI CEUREMEN",
      },
      {
        id: "1107083",
        regency_id: "1107",
        name: "PANTON REU",
      },
      {
        id: "1107090",
        regency_id: "1107",
        name: "SUNGAI MAS",
      },
      {
        id: "1108010",
        regency_id: "1108",
        name: "LHOONG",
      },
      {
        id: "1108020",
        regency_id: "1108",
        name: "LHOKNGA",
      },
      {
        id: "1108021",
        regency_id: "1108",
        name: "LEUPUNG",
      },
      {
        id: "1108030",
        regency_id: "1108",
        name: "INDRAPURI",
      },
      {
        id: "1108031",
        regency_id: "1108",
        name: "KUTA COT GLIE",
      },
      {
        id: "1108040",
        regency_id: "1108",
        name: "SEULIMEUM",
      },
      {
        id: "1108041",
        regency_id: "1108",
        name: "KOTA JANTHO",
      },
      {
        id: "1108042",
        regency_id: "1108",
        name: "LEMBAH SEULAWAH",
      },
      {
        id: "1108050",
        regency_id: "1108",
        name: "MESJID RAYA",
      },
      {
        id: "1108060",
        regency_id: "1108",
        name: "DARUSSALAM",
      },
      {
        id: "1108061",
        regency_id: "1108",
        name: "BAITUSSALAM",
      },
      {
        id: "1108070",
        regency_id: "1108",
        name: "KUTA BARO",
      },
      {
        id: "1108080",
        regency_id: "1108",
        name: "MONTASIK",
      },
      {
        id: "1108081",
        regency_id: "1108",
        name: "BLANG BINTANG",
      },
      {
        id: "1108090",
        regency_id: "1108",
        name: "INGIN JAYA",
      },
      {
        id: "1108091",
        regency_id: "1108",
        name: "KRUENG BARONA JAYA",
      },
      {
        id: "1108100",
        regency_id: "1108",
        name: "SUKA MAKMUR",
      },
      {
        id: "1108101",
        regency_id: "1108",
        name: "KUTA MALAKA",
      },
      {
        id: "1108102",
        regency_id: "1108",
        name: "SIMPANG TIGA",
      },
      {
        id: "1108110",
        regency_id: "1108",
        name: "DARUL IMARAH",
      },
      {
        id: "1108111",
        regency_id: "1108",
        name: "DARUL KAMAL",
      },
      {
        id: "1108120",
        regency_id: "1108",
        name: "PEUKAN BADA",
      },
      {
        id: "1108130",
        regency_id: "1108",
        name: "PULO ACEH",
      },
      {
        id: "1109010",
        regency_id: "1109",
        name: "GEUMPANG",
      },
      {
        id: "1109011",
        regency_id: "1109",
        name: "MANE",
      },
      {
        id: "1109070",
        regency_id: "1109",
        name: "GLUMPANG TIGA",
      },
      {
        id: "1109071",
        regency_id: "1109",
        name: "GLUMPANG BARO",
      },
      {
        id: "1109080",
        regency_id: "1109",
        name: "MUTIARA",
      },
      {
        id: "1109081",
        regency_id: "1109",
        name: "MUTIARA TIMUR",
      },
      {
        id: "1109090",
        regency_id: "1109",
        name: "TIRO/TRUSEB",
      },
      {
        id: "1109100",
        regency_id: "1109",
        name: "TANGSE",
      },
      {
        id: "1109111",
        regency_id: "1109",
        name: "KEUMALA",
      },
      {
        id: "1109112",
        regency_id: "1109",
        name: "TITEUE",
      },
      {
        id: "1109120",
        regency_id: "1109",
        name: "SAKTI",
      },
      {
        id: "1109130",
        regency_id: "1109",
        name: "MILA",
      },
      {
        id: "1109140",
        regency_id: "1109",
        name: "PADANG TIJI",
      },
      {
        id: "1109150",
        regency_id: "1109",
        name: "DELIMA",
      },
      {
        id: "1109151",
        regency_id: "1109",
        name: "GRONG GRONG",
      },
      {
        id: "1109160",
        regency_id: "1109",
        name: "INDRAJAYA",
      },
      {
        id: "1109170",
        regency_id: "1109",
        name: "PEUKAN BARO",
      },
      {
        id: "1109180",
        regency_id: "1109",
        name: "KEMBANG TANJONG",
      },
      {
        id: "1109190",
        regency_id: "1109",
        name: "SIMPANG TIGA",
      },
      {
        id: "1109200",
        regency_id: "1109",
        name: "KOTA SIGLI",
      },
      {
        id: "1109210",
        regency_id: "1109",
        name: "PIDIE",
      },
      {
        id: "1109220",
        regency_id: "1109",
        name: "BATEE",
      },
      {
        id: "1109230",
        regency_id: "1109",
        name: "MUARA TIGA",
      },
      {
        id: "1110010",
        regency_id: "1110",
        name: "SAMALANGA",
      },
      {
        id: "1110011",
        regency_id: "1110",
        name: "SIMPANG MAMPLAM",
      },
      {
        id: "1110020",
        regency_id: "1110",
        name: "PANDRAH",
      },
      {
        id: "1110030",
        regency_id: "1110",
        name: "JEUNIEB",
      },
      {
        id: "1110031",
        regency_id: "1110",
        name: "PEULIMBANG",
      },
      {
        id: "1110040",
        regency_id: "1110",
        name: "PEUDADA",
      },
      {
        id: "1110050",
        regency_id: "1110",
        name: "JULI",
      },
      {
        id: "1110060",
        regency_id: "1110",
        name: "JEUMPA",
      },
      {
        id: "1110061",
        regency_id: "1110",
        name: "KOTA JUANG",
      },
      {
        id: "1110062",
        regency_id: "1110",
        name: "KUALA",
      },
      {
        id: "1110070",
        regency_id: "1110",
        name: "JANGKA",
      },
      {
        id: "1110080",
        regency_id: "1110",
        name: "PEUSANGAN",
      },
      {
        id: "1110081",
        regency_id: "1110",
        name: "PEUSANGAN SELATAN",
      },
      {
        id: "1110082",
        regency_id: "1110",
        name: "PEUSANGAN SIBLAH KRUENG",
      },
      {
        id: "1110090",
        regency_id: "1110",
        name: "MAKMUR",
      },
      {
        id: "1110100",
        regency_id: "1110",
        name: "GANDA PURA",
      },
      {
        id: "1110101",
        regency_id: "1110",
        name: "KUTA BLANG",
      },
      {
        id: "1111010",
        regency_id: "1111",
        name: "SAWANG",
      },
      {
        id: "1111020",
        regency_id: "1111",
        name: "NISAM",
      },
      {
        id: "1111021",
        regency_id: "1111",
        name: "NISAM ANTARA",
      },
      {
        id: "1111022",
        regency_id: "1111",
        name: "BANDA BARO",
      },
      {
        id: "1111030",
        regency_id: "1111",
        name: "KUTA MAKMUR",
      },
      {
        id: "1111031",
        regency_id: "1111",
        name: "SIMPANG KERAMAT",
      },
      {
        id: "1111040",
        regency_id: "1111",
        name: "SYAMTALIRA BAYU",
      },
      {
        id: "1111041",
        regency_id: "1111",
        name: "GEUREUDONG PASE",
      },
      {
        id: "1111050",
        regency_id: "1111",
        name: "MEURAH MULIA",
      },
      {
        id: "1111060",
        regency_id: "1111",
        name: "MATANGKULI",
      },
      {
        id: "1111061",
        regency_id: "1111",
        name: "PAYA BAKONG",
      },
      {
        id: "1111062",
        regency_id: "1111",
        name: "PIRAK TIMU",
      },
      {
        id: "1111070",
        regency_id: "1111",
        name: "COT GIREK",
      },
      {
        id: "1111080",
        regency_id: "1111",
        name: "TANAH JAMBO AYE",
      },
      {
        id: "1111081",
        regency_id: "1111",
        name: "LANGKAHAN",
      },
      {
        id: "1111090",
        regency_id: "1111",
        name: "SEUNUDDON",
      },
      {
        id: "1111100",
        regency_id: "1111",
        name: "BAKTIYA",
      },
      {
        id: "1111101",
        regency_id: "1111",
        name: "BAKTIYA BARAT",
      },
      {
        id: "1111110",
        regency_id: "1111",
        name: "LHOKSUKON",
      },
      {
        id: "1111120",
        regency_id: "1111",
        name: "TANAH LUAS",
      },
      {
        id: "1111121",
        regency_id: "1111",
        name: "NIBONG",
      },
      {
        id: "1111130",
        regency_id: "1111",
        name: "SAMUDERA",
      },
      {
        id: "1111140",
        regency_id: "1111",
        name: "SYAMTALIRA ARON",
      },
      {
        id: "1111150",
        regency_id: "1111",
        name: "TANAH PASIR",
      },
      {
        id: "1111151",
        regency_id: "1111",
        name: "LAPANG",
      },
      {
        id: "1111160",
        regency_id: "1111",
        name: "MUARA BATU",
      },
      {
        id: "1111170",
        regency_id: "1111",
        name: "DEWANTARA",
      },
      {
        id: "1112010",
        regency_id: "1112",
        name: "MANGGENG",
      },
      {
        id: "1112011",
        regency_id: "1112",
        name: "LEMBAH SABIL",
      },
      {
        id: "1112020",
        regency_id: "1112",
        name: "TANGAN-TANGAN",
      },
      {
        id: "1112021",
        regency_id: "1112",
        name: "SETIA",
      },
      {
        id: "1112030",
        regency_id: "1112",
        name: "BLANG PIDIE",
      },
      {
        id: "1112031",
        regency_id: "1112",
        name: "JEUMPA",
      },
      {
        id: "1112040",
        regency_id: "1112",
        name: "SUSOH",
      },
      {
        id: "1112050",
        regency_id: "1112",
        name: "KUALA BATEE",
      },
      {
        id: "1112060",
        regency_id: "1112",
        name: "BABAH ROT",
      },
      {
        id: "1113010",
        regency_id: "1113",
        name: "KUTA PANJANG",
      },
      {
        id: "1113011",
        regency_id: "1113",
        name: "BLANG JERANGO",
      },
      {
        id: "1113020",
        regency_id: "1113",
        name: "BLANGKEJEREN",
      },
      {
        id: "1113021",
        regency_id: "1113",
        name: "PUTRI BETUNG",
      },
      {
        id: "1113022",
        regency_id: "1113",
        name: "DABUN GELANG",
      },
      {
        id: "1113023",
        regency_id: "1113",
        name: "BLANG PEGAYON",
      },
      {
        id: "1113030",
        regency_id: "1113",
        name: "PINING",
      },
      {
        id: "1113040",
        regency_id: "1113",
        name: "RIKIT GAIB",
      },
      {
        id: "1113041",
        regency_id: "1113",
        name: "PANTAN CUACA",
      },
      {
        id: "1113050",
        regency_id: "1113",
        name: "TERANGUN",
      },
      {
        id: "1113051",
        regency_id: "1113",
        name: "TRIPE JAYA",
      },
      {
        id: "1114010",
        regency_id: "1114",
        name: "TAMIANG HULU",
      },
      {
        id: "1114011",
        regency_id: "1114",
        name: "BANDAR PUSAKA",
      },
      {
        id: "1114020",
        regency_id: "1114",
        name: "KEJURUAN MUDA",
      },
      {
        id: "1114021",
        regency_id: "1114",
        name: "TENGGULUN",
      },
      {
        id: "1114030",
        regency_id: "1114",
        name: "RANTAU",
      },
      {
        id: "1114040",
        regency_id: "1114",
        name: "KOTA KUALA SIMPANG",
      },
      {
        id: "1114050",
        regency_id: "1114",
        name: "SERUWAY",
      },
      {
        id: "1114060",
        regency_id: "1114",
        name: "BENDAHARA",
      },
      {
        id: "1114061",
        regency_id: "1114",
        name: "BANDA MULIA",
      },
      {
        id: "1114070",
        regency_id: "1114",
        name: "KARANG BARU",
      },
      {
        id: "1114071",
        regency_id: "1114",
        name: "SEKERAK",
      },
      {
        id: "1114080",
        regency_id: "1114",
        name: "MANYAK PAYED",
      },
      {
        id: "1115010",
        regency_id: "1115",
        name: "DARUL MAKMUR",
      },
      {
        id: "1115011",
        regency_id: "1115",
        name: "TRIPA MAKMUR",
      },
      {
        id: "1115020",
        regency_id: "1115",
        name: "KUALA",
      },
      {
        id: "1115021",
        regency_id: "1115",
        name: "KUALA PESISIR",
      },
      {
        id: "1115022",
        regency_id: "1115",
        name: "TADU RAYA",
      },
      {
        id: "1115030",
        regency_id: "1115",
        name: "BEUTONG",
      },
      {
        id: "1115031",
        regency_id: "1115",
        name: "BEUTONG ATEUH BANGGALANG",
      },
      {
        id: "1115040",
        regency_id: "1115",
        name: "SEUNAGAN",
      },
      {
        id: "1115041",
        regency_id: "1115",
        name: "SUKA MAKMUE",
      },
      {
        id: "1115050",
        regency_id: "1115",
        name: "SEUNAGAN TIMUR",
      },
      {
        id: "1116010",
        regency_id: "1116",
        name: "TEUNOM",
      },
      {
        id: "1116011",
        regency_id: "1116",
        name: "PASIE RAYA",
      },
      {
        id: "1116020",
        regency_id: "1116",
        name: "PANGA",
      },
      {
        id: "1116030",
        regency_id: "1116",
        name: "KRUENG SABEE",
      },
      {
        id: "1116040",
        regency_id: "1116",
        name: "SETIA BAKTI",
      },
      {
        id: "1116050",
        regency_id: "1116",
        name: "SAMPOINIET",
      },
      {
        id: "1116051",
        regency_id: "1116",
        name: "DARUL HIKMAH",
      },
      {
        id: "1116060",
        regency_id: "1116",
        name: "JAYA",
      },
      {
        id: "1116061",
        regency_id: "1116",
        name: "INDRA JAYA",
      },
      {
        id: "1117010",
        regency_id: "1117",
        name: "TIMANG GAJAH",
      },
      {
        id: "1117011",
        regency_id: "1117",
        name: "GAJAH PUTIH",
      },
      {
        id: "1117020",
        regency_id: "1117",
        name: "PINTU RIME GAYO",
      },
      {
        id: "1117030",
        regency_id: "1117",
        name: "BUKIT",
      },
      {
        id: "1117040",
        regency_id: "1117",
        name: "WIH PESAM",
      },
      {
        id: "1117050",
        regency_id: "1117",
        name: "BANDAR",
      },
      {
        id: "1117051",
        regency_id: "1117",
        name: "BENER KELIPAH",
      },
      {
        id: "1117060",
        regency_id: "1117",
        name: "SYIAH UTAMA",
      },
      {
        id: "1117061",
        regency_id: "1117",
        name: "MESIDAH",
      },
      {
        id: "1117070",
        regency_id: "1117",
        name: "PERMATA",
      },
      {
        id: "1118010",
        regency_id: "1118",
        name: "MEUREUDU",
      },
      {
        id: "1118020",
        regency_id: "1118",
        name: "MEURAH DUA",
      },
      {
        id: "1118030",
        regency_id: "1118",
        name: "BANDAR DUA",
      },
      {
        id: "1118040",
        regency_id: "1118",
        name: "JANGKA BUYA",
      },
      {
        id: "1118050",
        regency_id: "1118",
        name: "ULIM",
      },
      {
        id: "1118060",
        regency_id: "1118",
        name: "TRIENGGADENG",
      },
      {
        id: "1118070",
        regency_id: "1118",
        name: "PANTERAJA",
      },
      {
        id: "1118080",
        regency_id: "1118",
        name: "BANDAR BARU",
      },
      {
        id: "1171010",
        regency_id: "1171",
        name: "MEURAXA",
      },
      {
        id: "1171011",
        regency_id: "1171",
        name: "JAYA BARU",
      },
      {
        id: "1171012",
        regency_id: "1171",
        name: "BANDA RAYA",
      },
      {
        id: "1171020",
        regency_id: "1171",
        name: "BAITURRAHMAN",
      },
      {
        id: "1171021",
        regency_id: "1171",
        name: "LUENG BATA",
      },
      {
        id: "1171030",
        regency_id: "1171",
        name: "KUTA ALAM",
      },
      {
        id: "1171031",
        regency_id: "1171",
        name: "KUTA RAJA",
      },
      {
        id: "1171040",
        regency_id: "1171",
        name: "SYIAH KUALA",
      },
      {
        id: "1171041",
        regency_id: "1171",
        name: "ULEE KARENG",
      },
      {
        id: "1172010",
        regency_id: "1172",
        name: "SUKAJAYA",
      },
      {
        id: "1172020",
        regency_id: "1172",
        name: "SUKAKARYA",
      },
      {
        id: "1173010",
        regency_id: "1173",
        name: "LANGSA TIMUR",
      },
      {
        id: "1173011",
        regency_id: "1173",
        name: "LANGSA LAMA",
      },
      {
        id: "1173020",
        regency_id: "1173",
        name: "LANGSA BARAT",
      },
      {
        id: "1173021",
        regency_id: "1173",
        name: "LANGSA BARO",
      },
      {
        id: "1173030",
        regency_id: "1173",
        name: "LANGSA KOTA",
      },
      {
        id: "1174010",
        regency_id: "1174",
        name: "BLANG MANGAT",
      },
      {
        id: "1174020",
        regency_id: "1174",
        name: "MUARA DUA",
      },
      {
        id: "1174021",
        regency_id: "1174",
        name: "MUARA SATU",
      },
      {
        id: "1174030",
        regency_id: "1174",
        name: "BANDA SAKTI",
      },
      {
        id: "1175010",
        regency_id: "1175",
        name: "SIMPANG KIRI",
      },
      {
        id: "1175020",
        regency_id: "1175",
        name: "PENANGGALAN",
      },
      {
        id: "1175030",
        regency_id: "1175",
        name: "RUNDENG",
      },
      {
        id: "1175040",
        regency_id: "1175",
        name: "SULTAN DAULAT",
      },
      {
        id: "1175050",
        regency_id: "1175",
        name: "LONGKIB",
      },
      {
        id: "1201060",
        regency_id: "1201",
        name: "IDANO GAWO",
      },
      {
        id: "1201061",
        regency_id: "1201",
        name: "BAWOLATO",
      },
      {
        id: "1201062",
        regency_id: "1201",
        name: "ULUGAWO",
      },
      {
        id: "1201070",
        regency_id: "1201",
        name: "GIDO",
      },
      {
        id: "1201071",
        regency_id: "1201",
        name: "SOGAEADU",
      },
      {
        id: "1201081",
        regency_id: "1201",
        name: "MA U",
      },
      {
        id: "1201082",
        regency_id: "1201",
        name: "SOMOLO - MOLO",
      },
      {
        id: "1201130",
        regency_id: "1201",
        name: "HILIDUHO",
      },
      {
        id: "1201131",
        regency_id: "1201",
        name: "HILI SERANGKAI",
      },
      {
        id: "1201132",
        regency_id: "1201",
        name: "BOTOMUZOI",
      },
      {
        id: "1202010",
        regency_id: "1202",
        name: "BATAHAN",
      },
      {
        id: "1202011",
        regency_id: "1202",
        name: "SINUNUKAN",
      },
      {
        id: "1202020",
        regency_id: "1202",
        name: "BATANG NATAL",
      },
      {
        id: "1202021",
        regency_id: "1202",
        name: "LINGGA BAYU",
      },
      {
        id: "1202022",
        regency_id: "1202",
        name: "RANTO BAEK",
      },
      {
        id: "1202030",
        regency_id: "1202",
        name: "KOTANOPAN",
      },
      {
        id: "1202031",
        regency_id: "1202",
        name: "ULU PUNGKUT",
      },
      {
        id: "1202032",
        regency_id: "1202",
        name: "TAMBANGAN",
      },
      {
        id: "1202033",
        regency_id: "1202",
        name: "LEMBAH SORIK MARAPI",
      },
      {
        id: "1202034",
        regency_id: "1202",
        name: "PUNCAK SORIK MARAPI",
      },
      {
        id: "1202040",
        regency_id: "1202",
        name: "MUARA SIPONGI",
      },
      {
        id: "1202041",
        regency_id: "1202",
        name: "PAKANTAN",
      },
      {
        id: "1202050",
        regency_id: "1202",
        name: "PANYABUNGAN",
      },
      {
        id: "1202051",
        regency_id: "1202",
        name: "PANYABUNGAN SELATAN",
      },
      {
        id: "1202052",
        regency_id: "1202",
        name: "PANYABUNGAN BARAT",
      },
      {
        id: "1202053",
        regency_id: "1202",
        name: "PANYABUNGAN UTARA",
      },
      {
        id: "1202054",
        regency_id: "1202",
        name: "PANYABUNGAN TIMUR",
      },
      {
        id: "1202055",
        regency_id: "1202",
        name: "HUTA BARGOT",
      },
      {
        id: "1202060",
        regency_id: "1202",
        name: "NATAL",
      },
      {
        id: "1202070",
        regency_id: "1202",
        name: "MUARA BATANG GADIS",
      },
      {
        id: "1202080",
        regency_id: "1202",
        name: "SIABU",
      },
      {
        id: "1202081",
        regency_id: "1202",
        name: "BUKIT MALINTANG",
      },
      {
        id: "1202082",
        regency_id: "1202",
        name: "NAGA JUANG",
      },
      {
        id: "1203010",
        regency_id: "1203",
        name: "BATANG ANGKOLA",
      },
      {
        id: "1203011",
        regency_id: "1203",
        name: "SAYUR MATINGGI",
      },
      {
        id: "1203012",
        regency_id: "1203",
        name: "TANO TOMBANGAN ANGKOLA",
      },
      {
        id: "1203070",
        regency_id: "1203",
        name: "ANGKOLA TIMUR",
      },
      {
        id: "1203080",
        regency_id: "1203",
        name: "ANGKOLA SELATAN",
      },
      {
        id: "1203090",
        regency_id: "1203",
        name: "ANGKOLA  BARAT",
      },
      {
        id: "1203091",
        regency_id: "1203",
        name: "ANGKOLA SANGKUNUR",
      },
      {
        id: "1203100",
        regency_id: "1203",
        name: "BATANG TORU",
      },
      {
        id: "1203101",
        regency_id: "1203",
        name: "MARANCAR",
      },
      {
        id: "1203102",
        regency_id: "1203",
        name: "MUARA BATANG TORU",
      },
      {
        id: "1203110",
        regency_id: "1203",
        name: "SIPIROK",
      },
      {
        id: "1203120",
        regency_id: "1203",
        name: "ARSE",
      },
      {
        id: "1203160",
        regency_id: "1203",
        name: "SAIPAR DOLOK HOLE",
      },
      {
        id: "1203161",
        regency_id: "1203",
        name: "AEK BILAH",
      },
      {
        id: "1204010",
        regency_id: "1204",
        name: "PINANG SORI",
      },
      {
        id: "1204011",
        regency_id: "1204",
        name: "BADIRI",
      },
      {
        id: "1204020",
        regency_id: "1204",
        name: "SIBABANGUN",
      },
      {
        id: "1204021",
        regency_id: "1204",
        name: "LUMUT",
      },
      {
        id: "1204022",
        regency_id: "1204",
        name: "SUKABANGUN",
      },
      {
        id: "1204030",
        regency_id: "1204",
        name: "PANDAN",
      },
      {
        id: "1204031",
        regency_id: "1204",
        name: "TUKKA",
      },
      {
        id: "1204032",
        regency_id: "1204",
        name: "SARUDIK",
      },
      {
        id: "1204040",
        regency_id: "1204",
        name: "TAPIAN NAULI",
      },
      {
        id: "1204041",
        regency_id: "1204",
        name: "SITAHUIS",
      },
      {
        id: "1204050",
        regency_id: "1204",
        name: "KOLANG",
      },
      {
        id: "1204060",
        regency_id: "1204",
        name: "SORKAM",
      },
      {
        id: "1204061",
        regency_id: "1204",
        name: "SORKAM BARAT",
      },
      {
        id: "1204062",
        regency_id: "1204",
        name: "PASARIBU TOBING",
      },
      {
        id: "1204070",
        regency_id: "1204",
        name: "BARUS",
      },
      {
        id: "1204071",
        regency_id: "1204",
        name: "SOSOR GADONG",
      },
      {
        id: "1204072",
        regency_id: "1204",
        name: "ANDAM DEWI",
      },
      {
        id: "1204073",
        regency_id: "1204",
        name: "BARUS UTARA",
      },
      {
        id: "1204080",
        regency_id: "1204",
        name: "MANDUAMAS",
      },
      {
        id: "1204081",
        regency_id: "1204",
        name: "SIRANDORUNG",
      },
      {
        id: "1205030",
        regency_id: "1205",
        name: "PARMONANGAN",
      },
      {
        id: "1205040",
        regency_id: "1205",
        name: "ADIANKOTING",
      },
      {
        id: "1205050",
        regency_id: "1205",
        name: "SIPOHOLON",
      },
      {
        id: "1205060",
        regency_id: "1205",
        name: "TARUTUNG",
      },
      {
        id: "1205061",
        regency_id: "1205",
        name: "SIATAS BARITA",
      },
      {
        id: "1205070",
        regency_id: "1205",
        name: "PAHAE JULU",
      },
      {
        id: "1205080",
        regency_id: "1205",
        name: "PAHAE JAE",
      },
      {
        id: "1205081",
        regency_id: "1205",
        name: "PURBATUA",
      },
      {
        id: "1205082",
        regency_id: "1205",
        name: "SIMANGUMBAN",
      },
      {
        id: "1205090",
        regency_id: "1205",
        name: "PANGARIBUAN",
      },
      {
        id: "1205100",
        regency_id: "1205",
        name: "GAROGA",
      },
      {
        id: "1205110",
        regency_id: "1205",
        name: "SIPAHUTAR",
      },
      {
        id: "1205120",
        regency_id: "1205",
        name: "SIBORONGBORONG",
      },
      {
        id: "1205130",
        regency_id: "1205",
        name: "PAGARAN",
      },
      {
        id: "1205180",
        regency_id: "1205",
        name: "MUARA",
      },
      {
        id: "1206030",
        regency_id: "1206",
        name: "BALIGE",
      },
      {
        id: "1206031",
        regency_id: "1206",
        name: "TAMPAHAN",
      },
      {
        id: "1206040",
        regency_id: "1206",
        name: "LAGUBOTI",
      },
      {
        id: "1206050",
        regency_id: "1206",
        name: "HABINSARAN",
      },
      {
        id: "1206051",
        regency_id: "1206",
        name: "BORBOR",
      },
      {
        id: "1206052",
        regency_id: "1206",
        name: "NASSAU",
      },
      {
        id: "1206060",
        regency_id: "1206",
        name: "SILAEN",
      },
      {
        id: "1206061",
        regency_id: "1206",
        name: "SIGUMPAR",
      },
      {
        id: "1206070",
        regency_id: "1206",
        name: "PORSEA",
      },
      {
        id: "1206071",
        regency_id: "1206",
        name: "PINTU POHAN MERANTI",
      },
      {
        id: "1206072",
        regency_id: "1206",
        name: "SIANTAR NARUMONDA",
      },
      {
        id: "1206073",
        regency_id: "1206",
        name: "PARMAKSIAN",
      },
      {
        id: "1206080",
        regency_id: "1206",
        name: "LUMBAN JULU",
      },
      {
        id: "1206081",
        regency_id: "1206",
        name: "ULUAN",
      },
      {
        id: "1206082",
        regency_id: "1206",
        name: "AJIBATA",
      },
      {
        id: "1206083",
        regency_id: "1206",
        name: "BONATUA LUNASI",
      },
      {
        id: "1207050",
        regency_id: "1207",
        name: "BILAH HULU",
      },
      {
        id: "1207070",
        regency_id: "1207",
        name: "PANGKATAN",
      },
      {
        id: "1207080",
        regency_id: "1207",
        name: "BILAH BARAT",
      },
      {
        id: "1207130",
        regency_id: "1207",
        name: "BILAH HILIR",
      },
      {
        id: "1207140",
        regency_id: "1207",
        name: "PANAI HULU",
      },
      {
        id: "1207150",
        regency_id: "1207",
        name: "PANAI TENGAH",
      },
      {
        id: "1207160",
        regency_id: "1207",
        name: "PANAI HILIR",
      },
      {
        id: "1207210",
        regency_id: "1207",
        name: "RANTAU SELATAN",
      },
      {
        id: "1207220",
        regency_id: "1207",
        name: "RANTAU UTARA",
      },
      {
        id: "1208010",
        regency_id: "1208",
        name: "BANDAR PASIR MANDOGE",
      },
      {
        id: "1208020",
        regency_id: "1208",
        name: "BANDAR PULAU",
      },
      {
        id: "1208021",
        regency_id: "1208",
        name: "AEK SONGSONGAN",
      },
      {
        id: "1208022",
        regency_id: "1208",
        name: "RAHUNING",
      },
      {
        id: "1208030",
        regency_id: "1208",
        name: "PULAU RAKYAT",
      },
      {
        id: "1208031",
        regency_id: "1208",
        name: "AEK KUASAN",
      },
      {
        id: "1208032",
        regency_id: "1208",
        name: "AEK LEDONG",
      },
      {
        id: "1208040",
        regency_id: "1208",
        name: "SEI KEPAYANG",
      },
      {
        id: "1208041",
        regency_id: "1208",
        name: "SEI KEPAYANG BARAT",
      },
      {
        id: "1208042",
        regency_id: "1208",
        name: "SEI KEPAYANG TIMUR",
      },
      {
        id: "1208050",
        regency_id: "1208",
        name: "TANJUNG BALAI",
      },
      {
        id: "1208060",
        regency_id: "1208",
        name: "SIMPANG EMPAT",
      },
      {
        id: "1208061",
        regency_id: "1208",
        name: "TELUK DALAM",
      },
      {
        id: "1208070",
        regency_id: "1208",
        name: "AIR BATU",
      },
      {
        id: "1208071",
        regency_id: "1208",
        name: "SEI DADAP",
      },
      {
        id: "1208080",
        regency_id: "1208",
        name: "BUNTU PANE",
      },
      {
        id: "1208081",
        regency_id: "1208",
        name: "TINGGI RAJA",
      },
      {
        id: "1208082",
        regency_id: "1208",
        name: "SETIA JANJI",
      },
      {
        id: "1208090",
        regency_id: "1208",
        name: "MERANTI",
      },
      {
        id: "1208091",
        regency_id: "1208",
        name: "PULO BANDRING",
      },
      {
        id: "1208092",
        regency_id: "1208",
        name: "RAWANG PANCA ARGA",
      },
      {
        id: "1208100",
        regency_id: "1208",
        name: "AIR JOMAN",
      },
      {
        id: "1208101",
        regency_id: "1208",
        name: "SILAU LAUT",
      },
      {
        id: "1208160",
        regency_id: "1208",
        name: "KISARAN BARAT",
      },
      {
        id: "1208170",
        regency_id: "1208",
        name: "KISARAN TIMUR",
      },
      {
        id: "1209010",
        regency_id: "1209",
        name: "SILIMAKUTA",
      },
      {
        id: "1209011",
        regency_id: "1209",
        name: "PEMATANG SILIMAHUTA",
      },
      {
        id: "1209020",
        regency_id: "1209",
        name: "PURBA",
      },
      {
        id: "1209021",
        regency_id: "1209",
        name: "HARANGGAOL HORISON",
      },
      {
        id: "1209040",
        regency_id: "1209",
        name: "SIDAMANIK",
      },
      {
        id: "1209041",
        regency_id: "1209",
        name: "PEMATANG SIDAMANIK",
      },
      {
        id: "1209050",
        regency_id: "1209",
        name: "GIRSANG SIPANGAN BOLON",
      },
      {
        id: "1209060",
        regency_id: "1209",
        name: "TANAH JAWA",
      },
      {
        id: "1209061",
        regency_id: "1209",
        name: "HATONDUHAN",
      },
      {
        id: "1209070",
        regency_id: "1209",
        name: "DOLOK PANRIBUAN",
      },
      {
        id: "1209080",
        regency_id: "1209",
        name: "JORLANG HATARAN",
      },
      {
        id: "1209090",
        regency_id: "1209",
        name: "PANEI",
      },
      {
        id: "1209091",
        regency_id: "1209",
        name: "PANOMBEAN PANEI",
      },
      {
        id: "1209100",
        regency_id: "1209",
        name: "RAYA",
      },
      {
        id: "1209101",
        regency_id: "1209",
        name: "DOLOG MASAGAL",
      },
      {
        id: "1209110",
        regency_id: "1209",
        name: "DOLOK SILAU",
      },
      {
        id: "1209120",
        regency_id: "1209",
        name: "SILAU KAHEAN",
      },
      {
        id: "1209130",
        regency_id: "1209",
        name: "RAYA KAHEAN",
      },
      {
        id: "1209140",
        regency_id: "1209",
        name: "TAPIAN DOLOK",
      },
      {
        id: "1209150",
        regency_id: "1209",
        name: "DOLOK BATU NANGGAR",
      },
      {
        id: "1209160",
        regency_id: "1209",
        name: "SIANTAR",
      },
      {
        id: "1209161",
        regency_id: "1209",
        name: "GUNUNG MALELA",
      },
      {
        id: "1209162",
        regency_id: "1209",
        name: "GUNUNG MALIGAS",
      },
      {
        id: "1209170",
        regency_id: "1209",
        name: "HUTABAYU RAJA",
      },
      {
        id: "1209171",
        regency_id: "1209",
        name: "JAWA MARAJA BAH JAMBI",
      },
      {
        id: "1209180",
        regency_id: "1209",
        name: "PEMATANG BANDAR",
      },
      {
        id: "1209181",
        regency_id: "1209",
        name: "BANDAR HULUAN",
      },
      {
        id: "1209190",
        regency_id: "1209",
        name: "BANDAR",
      },
      {
        id: "1209191",
        regency_id: "1209",
        name: "BANDAR MASILAM",
      },
      {
        id: "1209200",
        regency_id: "1209",
        name: "BOSAR MALIGAS",
      },
      {
        id: "1209210",
        regency_id: "1209",
        name: "UJUNG PADANG",
      },
      {
        id: "1210030",
        regency_id: "1210",
        name: "SIDIKALANG",
      },
      {
        id: "1210031",
        regency_id: "1210",
        name: "BERAMPU",
      },
      {
        id: "1210032",
        regency_id: "1210",
        name: "SITINJO",
      },
      {
        id: "1210040",
        regency_id: "1210",
        name: "PARBULUAN",
      },
      {
        id: "1210050",
        regency_id: "1210",
        name: "SUMBUL",
      },
      {
        id: "1210051",
        regency_id: "1210",
        name: "SILAHISABUNGAN",
      },
      {
        id: "1210060",
        regency_id: "1210",
        name: "SILIMA PUNGGA-PUNGGA",
      },
      {
        id: "1210061",
        regency_id: "1210",
        name: "LAE PARIRA",
      },
      {
        id: "1210070",
        regency_id: "1210",
        name: "SIEMPAT NEMPU",
      },
      {
        id: "1210080",
        regency_id: "1210",
        name: "SIEMPAT NEMPU HULU",
      },
      {
        id: "1210090",
        regency_id: "1210",
        name: "SIEMPAT NEMPU HILIR",
      },
      {
        id: "1210100",
        regency_id: "1210",
        name: "TIGA LINGGA",
      },
      {
        id: "1210101",
        regency_id: "1210",
        name: "GUNUNG SITEMBER",
      },
      {
        id: "1210110",
        regency_id: "1210",
        name: "PEGAGAN HILIR",
      },
      {
        id: "1210120",
        regency_id: "1210",
        name: "TANAH PINEM",
      },
      {
        id: "1211010",
        regency_id: "1211",
        name: "MARDINGDING",
      },
      {
        id: "1211020",
        regency_id: "1211",
        name: "LAUBALENG",
      },
      {
        id: "1211030",
        regency_id: "1211",
        name: "TIGA BINANGA",
      },
      {
        id: "1211040",
        regency_id: "1211",
        name: "JUHAR",
      },
      {
        id: "1211050",
        regency_id: "1211",
        name: "MUNTE",
      },
      {
        id: "1211060",
        regency_id: "1211",
        name: "KUTA BULUH",
      },
      {
        id: "1211070",
        regency_id: "1211",
        name: "PAYUNG",
      },
      {
        id: "1211071",
        regency_id: "1211",
        name: "TIGANDERKET",
      },
      {
        id: "1211080",
        regency_id: "1211",
        name: "SIMPANG EMPAT",
      },
      {
        id: "1211081",
        regency_id: "1211",
        name: "NAMAN TERAN",
      },
      {
        id: "1211082",
        regency_id: "1211",
        name: "MERDEKA",
      },
      {
        id: "1211090",
        regency_id: "1211",
        name: "KABANJAHE",
      },
      {
        id: "1211100",
        regency_id: "1211",
        name: "BERASTAGI",
      },
      {
        id: "1211110",
        regency_id: "1211",
        name: "TIGAPANAH",
      },
      {
        id: "1211111",
        regency_id: "1211",
        name: "DOLAT RAYAT",
      },
      {
        id: "1211120",
        regency_id: "1211",
        name: "MEREK",
      },
      {
        id: "1211130",
        regency_id: "1211",
        name: "BARUSJAHE",
      },
      {
        id: "1212010",
        regency_id: "1212",
        name: "GUNUNG MERIAH",
      },
      {
        id: "1212020",
        regency_id: "1212",
        name: "SINEMBAH TANJUNG MUDA HULU",
      },
      {
        id: "1212030",
        regency_id: "1212",
        name: "SIBOLANGIT",
      },
      {
        id: "1212040",
        regency_id: "1212",
        name: "KUTALIMBARU",
      },
      {
        id: "1212050",
        regency_id: "1212",
        name: "PANCUR BATU",
      },
      {
        id: "1212060",
        regency_id: "1212",
        name: "NAMO RAMBE",
      },
      {
        id: "1212070",
        regency_id: "1212",
        name: "BIRU-BIRU",
      },
      {
        id: "1212080",
        regency_id: "1212",
        name: "SINEMBAH TANJUNG MUDA HILIR",
      },
      {
        id: "1212090",
        regency_id: "1212",
        name: "BANGUN PURBA",
      },
      {
        id: "1212190",
        regency_id: "1212",
        name: "GALANG",
      },
      {
        id: "1212200",
        regency_id: "1212",
        name: "TANJUNG MORAWA",
      },
      {
        id: "1212210",
        regency_id: "1212",
        name: "PATUMBAK",
      },
      {
        id: "1212220",
        regency_id: "1212",
        name: "DELI TUA",
      },
      {
        id: "1212230",
        regency_id: "1212",
        name: "SUNGGAL",
      },
      {
        id: "1212240",
        regency_id: "1212",
        name: "HAMPARAN PERAK",
      },
      {
        id: "1212250",
        regency_id: "1212",
        name: "LABUHAN DELI",
      },
      {
        id: "1212260",
        regency_id: "1212",
        name: "PERCUT SEI TUAN",
      },
      {
        id: "1212270",
        regency_id: "1212",
        name: "BATANG KUIS",
      },
      {
        id: "1212280",
        regency_id: "1212",
        name: "PANTAI LABU",
      },
      {
        id: "1212290",
        regency_id: "1212",
        name: "BERINGIN",
      },
      {
        id: "1212300",
        regency_id: "1212",
        name: "LUBUK PAKAM",
      },
      {
        id: "1212310",
        regency_id: "1212",
        name: "PAGAR MERBAU",
      },
      {
        id: "1213010",
        regency_id: "1213",
        name: "BOHOROK",
      },
      {
        id: "1213011",
        regency_id: "1213",
        name: "SIRAPIT",
      },
      {
        id: "1213020",
        regency_id: "1213",
        name: "SALAPIAN",
      },
      {
        id: "1213021",
        regency_id: "1213",
        name: "KUTAMBARU",
      },
      {
        id: "1213030",
        regency_id: "1213",
        name: "SEI BINGAI",
      },
      {
        id: "1213040",
        regency_id: "1213",
        name: "KUALA",
      },
      {
        id: "1213050",
        regency_id: "1213",
        name: "SELESAI",
      },
      {
        id: "1213060",
        regency_id: "1213",
        name: "BINJAI",
      },
      {
        id: "1213070",
        regency_id: "1213",
        name: "STABAT",
      },
      {
        id: "1213080",
        regency_id: "1213",
        name: "WAMPU",
      },
      {
        id: "1213090",
        regency_id: "1213",
        name: "BATANG SERANGAN",
      },
      {
        id: "1213100",
        regency_id: "1213",
        name: "SAWIT SEBERANG",
      },
      {
        id: "1213110",
        regency_id: "1213",
        name: "PADANG TUALANG",
      },
      {
        id: "1213120",
        regency_id: "1213",
        name: "HINAI",
      },
      {
        id: "1213130",
        regency_id: "1213",
        name: "SECANGGANG",
      },
      {
        id: "1213140",
        regency_id: "1213",
        name: "TANJUNG PURA",
      },
      {
        id: "1213150",
        regency_id: "1213",
        name: "GEBANG",
      },
      {
        id: "1213160",
        regency_id: "1213",
        name: "BABALAN",
      },
      {
        id: "1213170",
        regency_id: "1213",
        name: "SEI LEPAN",
      },
      {
        id: "1213180",
        regency_id: "1213",
        name: "BRANDAN BARAT",
      },
      {
        id: "1213190",
        regency_id: "1213",
        name: "BESITANG",
      },
      {
        id: "1213200",
        regency_id: "1213",
        name: "PANGKALAN SUSU",
      },
      {
        id: "1213201",
        regency_id: "1213",
        name: "PEMATANG JAYA",
      },
      {
        id: "1214010",
        regency_id: "1214",
        name: "HIBALA",
      },
      {
        id: "1214011",
        regency_id: "1214",
        name: "TANAH MASA",
      },
      {
        id: "1214020",
        regency_id: "1214",
        name: "PULAU-PULAU BATU",
      },
      {
        id: "1214021",
        regency_id: "1214",
        name: "PULAU-PULAU BATU TIMUR",
      },
      {
        id: "1214022",
        regency_id: "1214",
        name: "SIMUK",
      },
      {
        id: "1214023",
        regency_id: "1214",
        name: "PULAU-PULAU BATU BARAT",
      },
      {
        id: "1214024",
        regency_id: "1214",
        name: "PULAU-PULAU BATU UTARA",
      },
      {
        id: "1214030",
        regency_id: "1214",
        name: "TELUK DALAM",
      },
      {
        id: "1214031",
        regency_id: "1214",
        name: "FANAYAMA",
      },
      {
        id: "1214032",
        regency_id: "1214",
        name: "TOMA",
      },
      {
        id: "1214033",
        regency_id: "1214",
        name: "MANIAMOLO",
      },
      {
        id: "1214034",
        regency_id: "1214",
        name: "MAZINO",
      },
      {
        id: "1214035",
        regency_id: "1214",
        name: "LUAHAGUNDRE MANIAMOLO",
      },
      {
        id: "1214036",
        regency_id: "1214",
        name: "ONOLALU",
      },
      {
        id: "1214040",
        regency_id: "1214",
        name: "AMANDRAYA",
      },
      {
        id: "1214041",
        regency_id: "1214",
        name: "ARAMO",
      },
      {
        id: "1214042",
        regency_id: "1214",
        name: "ULUSUSUA",
      },
      {
        id: "1214050",
        regency_id: "1214",
        name: "LAHUSA",
      },
      {
        id: "1214051",
        regency_id: "1214",
        name: "SIDUAORI",
      },
      {
        id: "1214052",
        regency_id: "1214",
        name: "SOMAMBAWA",
      },
      {
        id: "1214060",
        regency_id: "1214",
        name: "GOMO",
      },
      {
        id: "1214061",
        regency_id: "1214",
        name: "SUSUA",
      },
      {
        id: "1214062",
        regency_id: "1214",
        name: "MAZO",
      },
      {
        id: "1214063",
        regency_id: "1214",
        name: "UMBUNASI",
      },
      {
        id: "1214064",
        regency_id: "1214",
        name: "IDANOTAE",
      },
      {
        id: "1214065",
        regency_id: "1214",
        name: "ULUIDANOTAE",
      },
      {
        id: "1214066",
        regency_id: "1214",
        name: "BORONADU",
      },
      {
        id: "1214070",
        regency_id: "1214",
        name: "LOLOMATUA",
      },
      {
        id: "1214071",
        regency_id: "1214",
        name: "ULUNOYO",
      },
      {
        id: "1214072",
        regency_id: "1214",
        name: "HURUNA",
      },
      {
        id: "1214080",
        regency_id: "1214",
        name: "LOLOWA'U",
      },
      {
        id: "1214081",
        regency_id: "1214",
        name: "HILIMEGAI",
      },
      {
        id: "1214082",
        regency_id: "1214",
        name: "OOU",
      },
      {
        id: "1214083",
        regency_id: "1214",
        name: "ONOHAZUMBA",
      },
      {
        id: "1214084",
        regency_id: "1214",
        name: "HILISALAWAAHE",
      },
      {
        id: "1215010",
        regency_id: "1215",
        name: "PAKKAT",
      },
      {
        id: "1215020",
        regency_id: "1215",
        name: "ONAN GANJANG",
      },
      {
        id: "1215030",
        regency_id: "1215",
        name: "SIJAMA POLANG",
      },
      {
        id: "1215040",
        regency_id: "1215",
        name: "DOLOK SANGGUL",
      },
      {
        id: "1215050",
        regency_id: "1215",
        name: "LINTONG NIHUTA",
      },
      {
        id: "1215060",
        regency_id: "1215",
        name: "PARANGINAN",
      },
      {
        id: "1215070",
        regency_id: "1215",
        name: "BAKTI RAJA",
      },
      {
        id: "1215080",
        regency_id: "1215",
        name: "POLLUNG",
      },
      {
        id: "1215090",
        regency_id: "1215",
        name: "PARLILITAN",
      },
      {
        id: "1215100",
        regency_id: "1215",
        name: "TARA BINTANG",
      },
      {
        id: "1216010",
        regency_id: "1216",
        name: "SALAK",
      },
      {
        id: "1216011",
        regency_id: "1216",
        name: "SITELLU TALI URANG JEHE",
      },
      {
        id: "1216012",
        regency_id: "1216",
        name: "PAGINDAR",
      },
      {
        id: "1216013",
        regency_id: "1216",
        name: "SITELLU TALI URANG JULU",
      },
      {
        id: "1216014",
        regency_id: "1216",
        name: "PERGETTENG-GETTENG SENGKUT",
      },
      {
        id: "1216020",
        regency_id: "1216",
        name: "KERAJAAN",
      },
      {
        id: "1216021",
        regency_id: "1216",
        name: "TINADA",
      },
      {
        id: "1216022",
        regency_id: "1216",
        name: "SIEMPAT RUBE",
      },
      {
        id: "1217010",
        regency_id: "1217",
        name: "SIANJUR MULA MULA",
      },
      {
        id: "1217020",
        regency_id: "1217",
        name: "HARIAN",
      },
      {
        id: "1217030",
        regency_id: "1217",
        name: "SITIO-TIO",
      },
      {
        id: "1217040",
        regency_id: "1217",
        name: "ONAN RUNGGU",
      },
      {
        id: "1217050",
        regency_id: "1217",
        name: "NAINGGOLAN",
      },
      {
        id: "1217060",
        regency_id: "1217",
        name: "PALIPI",
      },
      {
        id: "1217070",
        regency_id: "1217",
        name: "RONGGUR NIHUTA",
      },
      {
        id: "1217080",
        regency_id: "1217",
        name: "PANGURURAN",
      },
      {
        id: "1217090",
        regency_id: "1217",
        name: "SIMANINDO",
      },
      {
        id: "1218010",
        regency_id: "1218",
        name: "KOTARIH",
      },
      {
        id: "1218011",
        regency_id: "1218",
        name: "SILINDA",
      },
      {
        id: "1218012",
        regency_id: "1218",
        name: "BINTANG BAYU",
      },
      {
        id: "1218020",
        regency_id: "1218",
        name: "DOLOK MASIHUL",
      },
      {
        id: "1218021",
        regency_id: "1218",
        name: "SERBAJADI",
      },
      {
        id: "1218030",
        regency_id: "1218",
        name: "SIPISPIS",
      },
      {
        id: "1218040",
        regency_id: "1218",
        name: "DOLOK MERAWAN",
      },
      {
        id: "1218050",
        regency_id: "1218",
        name: "TEBINGTINGGI",
      },
      {
        id: "1218051",
        regency_id: "1218",
        name: "TEBING SYAHBANDAR",
      },
      {
        id: "1218060",
        regency_id: "1218",
        name: "BANDAR KHALIPAH",
      },
      {
        id: "1218070",
        regency_id: "1218",
        name: "TANJUNG BERINGIN",
      },
      {
        id: "1218080",
        regency_id: "1218",
        name: "SEI RAMPAH",
      },
      {
        id: "1218081",
        regency_id: "1218",
        name: "SEI BAMBAN",
      },
      {
        id: "1218090",
        regency_id: "1218",
        name: "TELUK MENGKUDU",
      },
      {
        id: "1218100",
        regency_id: "1218",
        name: "PERBAUNGAN",
      },
      {
        id: "1218101",
        regency_id: "1218",
        name: "PEGAJAHAN",
      },
      {
        id: "1218110",
        regency_id: "1218",
        name: "PANTAI CERMIN",
      },
      {
        id: "1219010",
        regency_id: "1219",
        name: "SEI BALAI",
      },
      {
        id: "1219020",
        regency_id: "1219",
        name: "TANJUNG TIRAM",
      },
      {
        id: "1219021",
        regency_id: "1219",
        name: "NIBUNG HANGUS",
      },
      {
        id: "1219030",
        regency_id: "1219",
        name: "TALAWI",
      },
      {
        id: "1219031",
        regency_id: "1219",
        name: "DATUK TANAH DATAR",
      },
      {
        id: "1219040",
        regency_id: "1219",
        name: "LIMAPULUH",
      },
      {
        id: "1219041",
        regency_id: "1219",
        name: "LIMA PULUH PESISIR",
      },
      {
        id: "1219042",
        regency_id: "1219",
        name: "DATUK LIMA PULUH",
      },
      {
        id: "1219050",
        regency_id: "1219",
        name: "AIR PUTIH",
      },
      {
        id: "1219060",
        regency_id: "1219",
        name: "SEI SUKA",
      },
      {
        id: "1219061",
        regency_id: "1219",
        name: "LAUT TADOR",
      },
      {
        id: "1219070",
        regency_id: "1219",
        name: "MEDANG DERAS",
      },
      {
        id: "1220010",
        regency_id: "1220",
        name: "BATANG ONANG",
      },
      {
        id: "1220020",
        regency_id: "1220",
        name: "PADANG BOLAK JULU",
      },
      {
        id: "1220030",
        regency_id: "1220",
        name: "PORTIBI",
      },
      {
        id: "1220040",
        regency_id: "1220",
        name: "PADANG BOLAK",
      },
      {
        id: "1220041",
        regency_id: "1220",
        name: "PADANG BOLAK TENGGARA",
      },
      {
        id: "1220050",
        regency_id: "1220",
        name: "SIMANGAMBAT",
      },
      {
        id: "1220051",
        regency_id: "1220",
        name: "UJUNG BATU",
      },
      {
        id: "1220060",
        regency_id: "1220",
        name: "HALONGONAN",
      },
      {
        id: "1220061",
        regency_id: "1220",
        name: "HALONGONAN TIMUR",
      },
      {
        id: "1220070",
        regency_id: "1220",
        name: "DOLOK",
      },
      {
        id: "1220080",
        regency_id: "1220",
        name: "DOLOK SIGOMPULON",
      },
      {
        id: "1220090",
        regency_id: "1220",
        name: "HULU SIHAPAS",
      },
      {
        id: "1221010",
        regency_id: "1221",
        name: "SOSOPAN",
      },
      {
        id: "1221020",
        regency_id: "1221",
        name: "ULU BARUMUN",
      },
      {
        id: "1221030",
        regency_id: "1221",
        name: "BARUMUN",
      },
      {
        id: "1221031",
        regency_id: "1221",
        name: "BARUMUN SELATAN",
      },
      {
        id: "1221040",
        regency_id: "1221",
        name: "LUBUK BARUMUN",
      },
      {
        id: "1221050",
        regency_id: "1221",
        name: "SOSA",
      },
      {
        id: "1221060",
        regency_id: "1221",
        name: "BATANG LUBU SUTAM",
      },
      {
        id: "1221070",
        regency_id: "1221",
        name: "HUTA RAJA TINGGI",
      },
      {
        id: "1221080",
        regency_id: "1221",
        name: "HURISTAK",
      },
      {
        id: "1221090",
        regency_id: "1221",
        name: "BARUMUN TENGAH",
      },
      {
        id: "1221091",
        regency_id: "1221",
        name: "AEK NABARA BARUMUN",
      },
      {
        id: "1221092",
        regency_id: "1221",
        name: "SIHAPAS BARUMUN",
      },
      {
        id: "1222010",
        regency_id: "1222",
        name: "SUNGAI KANAN",
      },
      {
        id: "1222020",
        regency_id: "1222",
        name: "TORGAMBA",
      },
      {
        id: "1222030",
        regency_id: "1222",
        name: "KOTA PINANG",
      },
      {
        id: "1222040",
        regency_id: "1222",
        name: "SILANGKITANG",
      },
      {
        id: "1222050",
        regency_id: "1222",
        name: "KAMPUNG RAKYAT",
      },
      {
        id: "1223010",
        regency_id: "1223",
        name: "NA IX-X",
      },
      {
        id: "1223020",
        regency_id: "1223",
        name: "MARBAU",
      },
      {
        id: "1223030",
        regency_id: "1223",
        name: "AEK KUO",
      },
      {
        id: "1223040",
        regency_id: "1223",
        name: "AEK NATAS",
      },
      {
        id: "1223050",
        regency_id: "1223",
        name: "KUALUH SELATAN",
      },
      {
        id: "1223060",
        regency_id: "1223",
        name: "KUALUH HILIR",
      },
      {
        id: "1223070",
        regency_id: "1223",
        name: "KUALUH HULU",
      },
      {
        id: "1223080",
        regency_id: "1223",
        name: "KUALUH LEIDONG",
      },
      {
        id: "1224010",
        regency_id: "1224",
        name: "TUGALA OYO",
      },
      {
        id: "1224020",
        regency_id: "1224",
        name: "ALASA",
      },
      {
        id: "1224030",
        regency_id: "1224",
        name: "ALASA TALU MUZOI",
      },
      {
        id: "1224040",
        regency_id: "1224",
        name: "NAMOHALU ESIWA",
      },
      {
        id: "1224050",
        regency_id: "1224",
        name: "SITOLU ORI",
      },
      {
        id: "1224060",
        regency_id: "1224",
        name: "TUHEMBERUA",
      },
      {
        id: "1224070",
        regency_id: "1224",
        name: "SAWO",
      },
      {
        id: "1224080",
        regency_id: "1224",
        name: "LOTU",
      },
      {
        id: "1224090",
        regency_id: "1224",
        name: "LAHEWA TIMUR",
      },
      {
        id: "1224100",
        regency_id: "1224",
        name: "AFULU",
      },
      {
        id: "1224110",
        regency_id: "1224",
        name: "LAHEWA",
      },
      {
        id: "1225010",
        regency_id: "1225",
        name: "SIROMBU",
      },
      {
        id: "1225020",
        regency_id: "1225",
        name: "LAHOMI",
      },
      {
        id: "1225030",
        regency_id: "1225",
        name: "ULU MORO O",
      },
      {
        id: "1225040",
        regency_id: "1225",
        name: "LOLOFITU MOI",
      },
      {
        id: "1225050",
        regency_id: "1225",
        name: "MANDREHE UTARA",
      },
      {
        id: "1225060",
        regency_id: "1225",
        name: "MANDREHE",
      },
      {
        id: "1225070",
        regency_id: "1225",
        name: "MANDREHE BARAT",
      },
      {
        id: "1225080",
        regency_id: "1225",
        name: "MORO O",
      },
      {
        id: "1271010",
        regency_id: "1271",
        name: "SIBOLGA UTARA",
      },
      {
        id: "1271020",
        regency_id: "1271",
        name: "SIBOLGA KOTA",
      },
      {
        id: "1271030",
        regency_id: "1271",
        name: "SIBOLGA SELATAN",
      },
      {
        id: "1271031",
        regency_id: "1271",
        name: "SIBOLGA SAMBAS",
      },
      {
        id: "1272010",
        regency_id: "1272",
        name: "DATUK BANDAR",
      },
      {
        id: "1272011",
        regency_id: "1272",
        name: "DATUK BANDAR TIMUR",
      },
      {
        id: "1272020",
        regency_id: "1272",
        name: "TANJUNG BALAI SELATAN",
      },
      {
        id: "1272030",
        regency_id: "1272",
        name: "TANJUNG BALAI UTARA",
      },
      {
        id: "1272040",
        regency_id: "1272",
        name: "SEI TUALANG RASO",
      },
      {
        id: "1272050",
        regency_id: "1272",
        name: "TELUK NIBUNG",
      },
      {
        id: "1273010",
        regency_id: "1273",
        name: "SIANTAR MARIHAT",
      },
      {
        id: "1273011",
        regency_id: "1273",
        name: "SIANTAR MARIMBUN",
      },
      {
        id: "1273020",
        regency_id: "1273",
        name: "SIANTAR SELATAN",
      },
      {
        id: "1273030",
        regency_id: "1273",
        name: "SIANTAR BARAT",
      },
      {
        id: "1273040",
        regency_id: "1273",
        name: "SIANTAR UTARA",
      },
      {
        id: "1273050",
        regency_id: "1273",
        name: "SIANTAR TIMUR",
      },
      {
        id: "1273060",
        regency_id: "1273",
        name: "SIANTAR MARTOBA",
      },
      {
        id: "1273061",
        regency_id: "1273",
        name: "SIANTAR SITALASARI",
      },
      {
        id: "1274010",
        regency_id: "1274",
        name: "PADANG HULU",
      },
      {
        id: "1274011",
        regency_id: "1274",
        name: "TEBING TINGGI KOTA",
      },
      {
        id: "1274020",
        regency_id: "1274",
        name: "RAMBUTAN",
      },
      {
        id: "1274021",
        regency_id: "1274",
        name: "BAJENIS",
      },
      {
        id: "1274030",
        regency_id: "1274",
        name: "PADANG HILIR",
      },
      {
        id: "1275010",
        regency_id: "1275",
        name: "MEDAN TUNTUNGAN",
      },
      {
        id: "1275020",
        regency_id: "1275",
        name: "MEDAN JOHOR",
      },
      {
        id: "1275030",
        regency_id: "1275",
        name: "MEDAN AMPLAS",
      },
      {
        id: "1275040",
        regency_id: "1275",
        name: "MEDAN DENAI",
      },
      {
        id: "1275050",
        regency_id: "1275",
        name: "MEDAN AREA",
      },
      {
        id: "1275060",
        regency_id: "1275",
        name: "MEDAN KOTA",
      },
      {
        id: "1275070",
        regency_id: "1275",
        name: "MEDAN MAIMUN",
      },
      {
        id: "1275080",
        regency_id: "1275",
        name: "MEDAN POLONIA",
      },
      {
        id: "1275090",
        regency_id: "1275",
        name: "MEDAN BARU",
      },
      {
        id: "1275100",
        regency_id: "1275",
        name: "MEDAN SELAYANG",
      },
      {
        id: "1275110",
        regency_id: "1275",
        name: "MEDAN SUNGGAL",
      },
      {
        id: "1275120",
        regency_id: "1275",
        name: "MEDAN HELVETIA",
      },
      {
        id: "1275130",
        regency_id: "1275",
        name: "MEDAN PETISAH",
      },
      {
        id: "1275140",
        regency_id: "1275",
        name: "MEDAN BARAT",
      },
      {
        id: "1275150",
        regency_id: "1275",
        name: "MEDAN TIMUR",
      },
      {
        id: "1275160",
        regency_id: "1275",
        name: "MEDAN PERJUANGAN",
      },
      {
        id: "1275170",
        regency_id: "1275",
        name: "MEDAN TEMBUNG",
      },
      {
        id: "1275180",
        regency_id: "1275",
        name: "MEDAN DELI",
      },
      {
        id: "1275190",
        regency_id: "1275",
        name: "MEDAN LABUHAN",
      },
      {
        id: "1275200",
        regency_id: "1275",
        name: "MEDAN MARELAN",
      },
      {
        id: "1275210",
        regency_id: "1275",
        name: "MEDAN BELAWAN",
      },
      {
        id: "1276010",
        regency_id: "1276",
        name: "BINJAI SELATAN",
      },
      {
        id: "1276020",
        regency_id: "1276",
        name: "BINJAI KOTA",
      },
      {
        id: "1276030",
        regency_id: "1276",
        name: "BINJAI TIMUR",
      },
      {
        id: "1276040",
        regency_id: "1276",
        name: "BINJAI UTARA",
      },
      {
        id: "1276050",
        regency_id: "1276",
        name: "BINJAI BARAT",
      },
      {
        id: "1277010",
        regency_id: "1277",
        name: "PADANGSIDIMPUAN TENGGARA",
      },
      {
        id: "1277020",
        regency_id: "1277",
        name: "PADANGSIDIMPUAN SELATAN",
      },
      {
        id: "1277030",
        regency_id: "1277",
        name: "PADANGSIDIMPUAN BATUNADUA",
      },
      {
        id: "1277040",
        regency_id: "1277",
        name: "PADANGSIDIMPUAN UTARA",
      },
      {
        id: "1277050",
        regency_id: "1277",
        name: "PADANGSIDIMPUAN HUTAIMBARU",
      },
      {
        id: "1277051",
        regency_id: "1277",
        name: "PADANGSIDIMPUAN ANGKOLA JULU",
      },
      {
        id: "1278010",
        regency_id: "1278",
        name: "GUNUNGSITOLI IDANOI",
      },
      {
        id: "1278020",
        regency_id: "1278",
        name: "GUNUNGSITOLI SELATAN",
      },
      {
        id: "1278030",
        regency_id: "1278",
        name: "GUNUNGSITOLI BARAT",
      },
      {
        id: "1278040",
        regency_id: "1278",
        name: "GUNUNG SITOLI",
      },
      {
        id: "1278050",
        regency_id: "1278",
        name: "GUNUNGSITOLI ALO OA",
      },
      {
        id: "1278060",
        regency_id: "1278",
        name: "GUNUNGSITOLI UTARA",
      },
      {
        id: "1301011",
        regency_id: "1301",
        name: "PAGAI SELATAN",
      },
      {
        id: "1301012",
        regency_id: "1301",
        name: "SIKAKAP",
      },
      {
        id: "1301013",
        regency_id: "1301",
        name: "PAGAI UTARA",
      },
      {
        id: "1301021",
        regency_id: "1301",
        name: "SIPORA SELATAN",
      },
      {
        id: "1301022",
        regency_id: "1301",
        name: "SIPORA UTARA",
      },
      {
        id: "1301030",
        regency_id: "1301",
        name: "SIBERUT SELATAN",
      },
      {
        id: "1301031",
        regency_id: "1301",
        name: "SEBERUT BARAT DAYA",
      },
      {
        id: "1301032",
        regency_id: "1301",
        name: "SIBERUT TENGAH",
      },
      {
        id: "1301040",
        regency_id: "1301",
        name: "SIBERUT UTARA",
      },
      {
        id: "1301041",
        regency_id: "1301",
        name: "SIBERUT BARAT",
      },
      {
        id: "1302011",
        regency_id: "1302",
        name: "SILAUT",
      },
      {
        id: "1302012",
        regency_id: "1302",
        name: "LUNANG",
      },
      {
        id: "1302020",
        regency_id: "1302",
        name: "BASA AMPEK BALAI TAPAN",
      },
      {
        id: "1302021",
        regency_id: "1302",
        name: "RANAH AMPEK HULU TAPAN",
      },
      {
        id: "1302030",
        regency_id: "1302",
        name: "PANCUNG SOAL",
      },
      {
        id: "1302031",
        regency_id: "1302",
        name: "AIRPURA",
      },
      {
        id: "1302040",
        regency_id: "1302",
        name: "LINGGO SARI BAGANTI",
      },
      {
        id: "1302050",
        regency_id: "1302",
        name: "RANAH PESISIR",
      },
      {
        id: "1302060",
        regency_id: "1302",
        name: "LENGAYANG",
      },
      {
        id: "1302070",
        regency_id: "1302",
        name: "SUTERA",
      },
      {
        id: "1302080",
        regency_id: "1302",
        name: "BATANG KAPAS",
      },
      {
        id: "1302090",
        regency_id: "1302",
        name: "IV JURAI",
      },
      {
        id: "1302100",
        regency_id: "1302",
        name: "BAYANG",
      },
      {
        id: "1302101",
        regency_id: "1302",
        name: "IV  NAGARI BAYANG UTARA",
      },
      {
        id: "1302110",
        regency_id: "1302",
        name: "KOTO XI TARUSAN",
      },
      {
        id: "1303040",
        regency_id: "1303",
        name: "PANTAI CERMIN",
      },
      {
        id: "1303050",
        regency_id: "1303",
        name: "LEMBAH GUMANTI",
      },
      {
        id: "1303051",
        regency_id: "1303",
        name: "HILIRAN GUMANTI",
      },
      {
        id: "1303060",
        regency_id: "1303",
        name: "PAYUNG SEKAKI",
      },
      {
        id: "1303061",
        regency_id: "1303",
        name: "TIGO LURAH",
      },
      {
        id: "1303070",
        regency_id: "1303",
        name: "LEMBANG JAYA",
      },
      {
        id: "1303071",
        regency_id: "1303",
        name: "DANAU KEMBAR",
      },
      {
        id: "1303080",
        regency_id: "1303",
        name: "GUNUNG TALANG",
      },
      {
        id: "1303090",
        regency_id: "1303",
        name: "BUKIT SUNDI",
      },
      {
        id: "1303100",
        regency_id: "1303",
        name: "IX KOTO SUNGAI LASI",
      },
      {
        id: "1303110",
        regency_id: "1303",
        name: "KUBUNG",
      },
      {
        id: "1303120",
        regency_id: "1303",
        name: "X KOTO DIATAS",
      },
      {
        id: "1303130",
        regency_id: "1303",
        name: "X KOTO SINGKARAK",
      },
      {
        id: "1303140",
        regency_id: "1303",
        name: "JUNJUNG SIRIH",
      },
      {
        id: "1304050",
        regency_id: "1304",
        name: "KAMANG BARU",
      },
      {
        id: "1304060",
        regency_id: "1304",
        name: "TANJUNG GADANG",
      },
      {
        id: "1304070",
        regency_id: "1304",
        name: "SIJUNJUNG",
      },
      {
        id: "1304071",
        regency_id: "1304",
        name: "LUBUK TAROK",
      },
      {
        id: "1304080",
        regency_id: "1304",
        name: "IV NAGARI",
      },
      {
        id: "1304090",
        regency_id: "1304",
        name: "KUPITAN",
      },
      {
        id: "1304100",
        regency_id: "1304",
        name: "KOTO TUJUH",
      },
      {
        id: "1304110",
        regency_id: "1304",
        name: "SUMPUR KUDUS",
      },
      {
        id: "1305010",
        regency_id: "1305",
        name: "SEPULUH KOTO",
      },
      {
        id: "1305020",
        regency_id: "1305",
        name: "BATIPUH",
      },
      {
        id: "1305021",
        regency_id: "1305",
        name: "BATIPUH SELATAN",
      },
      {
        id: "1305030",
        regency_id: "1305",
        name: "PARIANGAN",
      },
      {
        id: "1305040",
        regency_id: "1305",
        name: "RAMBATAN",
      },
      {
        id: "1305050",
        regency_id: "1305",
        name: "LIMA KAUM",
      },
      {
        id: "1305060",
        regency_id: "1305",
        name: "TANJUNG EMAS",
      },
      {
        id: "1305070",
        regency_id: "1305",
        name: "PADANG GANTING",
      },
      {
        id: "1305080",
        regency_id: "1305",
        name: "LINTAU BUO",
      },
      {
        id: "1305081",
        regency_id: "1305",
        name: "LINTAU BUO UTARA",
      },
      {
        id: "1305090",
        regency_id: "1305",
        name: "SUNGAYANG",
      },
      {
        id: "1305100",
        regency_id: "1305",
        name: "SUNGAI TARAB",
      },
      {
        id: "1305110",
        regency_id: "1305",
        name: "SALIMPAUNG",
      },
      {
        id: "1305111",
        regency_id: "1305",
        name: "TANJUNG BARU",
      },
      {
        id: "1306010",
        regency_id: "1306",
        name: "BATANG ANAI",
      },
      {
        id: "1306020",
        regency_id: "1306",
        name: "LUBUK ALUNG",
      },
      {
        id: "1306021",
        regency_id: "1306",
        name: "SINTUK TOBOH GADANG",
      },
      {
        id: "1306030",
        regency_id: "1306",
        name: "ULAKAN TAPAKIS",
      },
      {
        id: "1306040",
        regency_id: "1306",
        name: "NAN SABARIS",
      },
      {
        id: "1306050",
        regency_id: "1306",
        name: "2 X 11 ENAM LINGKUNG",
      },
      {
        id: "1306051",
        regency_id: "1306",
        name: "ENAM LINGKUNG",
      },
      {
        id: "1306052",
        regency_id: "1306",
        name: "2 X 11 KAYU TANAM",
      },
      {
        id: "1306060",
        regency_id: "1306",
        name: "VII KOTO SUNGAI SARIAK",
      },
      {
        id: "1306061",
        regency_id: "1306",
        name: "PATAMUAN",
      },
      {
        id: "1306062",
        regency_id: "1306",
        name: "PADANG SAGO",
      },
      {
        id: "1306070",
        regency_id: "1306",
        name: "V KOTO KP DALAM",
      },
      {
        id: "1306071",
        regency_id: "1306",
        name: "V KOTO TIMUR",
      },
      {
        id: "1306080",
        regency_id: "1306",
        name: "SUNGAI LIMAU",
      },
      {
        id: "1306081",
        regency_id: "1306",
        name: "BATANG GASAN",
      },
      {
        id: "1306090",
        regency_id: "1306",
        name: "SUNGAI GERINGGING",
      },
      {
        id: "1306100",
        regency_id: "1306",
        name: "IV KOTO AUR MALINTANG",
      },
      {
        id: "1307010",
        regency_id: "1307",
        name: "TANJUNG MUTIARA",
      },
      {
        id: "1307020",
        regency_id: "1307",
        name: "LUBUK BASUNG",
      },
      {
        id: "1307021",
        regency_id: "1307",
        name: "AMPEK NAGARI",
      },
      {
        id: "1307030",
        regency_id: "1307",
        name: "TANJUNG RAYA",
      },
      {
        id: "1307040",
        regency_id: "1307",
        name: "MATUR",
      },
      {
        id: "1307050",
        regency_id: "1307",
        name: "IV KOTO",
      },
      {
        id: "1307051",
        regency_id: "1307",
        name: "MALALAK",
      },
      {
        id: "1307061",
        regency_id: "1307",
        name: "BANUHAMPU",
      },
      {
        id: "1307062",
        regency_id: "1307",
        name: "SUNGAI PUA",
      },
      {
        id: "1307070",
        regency_id: "1307",
        name: "AMPEK ANGKEK",
      },
      {
        id: "1307071",
        regency_id: "1307",
        name: "CANDUANG",
      },
      {
        id: "1307080",
        regency_id: "1307",
        name: "BASO",
      },
      {
        id: "1307090",
        regency_id: "1307",
        name: "TILATANG KAMANG",
      },
      {
        id: "1307091",
        regency_id: "1307",
        name: "KAMANG MAGEK",
      },
      {
        id: "1307100",
        regency_id: "1307",
        name: "PALEMBAYAN",
      },
      {
        id: "1307110",
        regency_id: "1307",
        name: "PALUPUH",
      },
      {
        id: "1308010",
        regency_id: "1308",
        name: "PAYAKUMBUH",
      },
      {
        id: "1308011",
        regency_id: "1308",
        name: "AKABILURU",
      },
      {
        id: "1308020",
        regency_id: "1308",
        name: "LUAK",
      },
      {
        id: "1308021",
        regency_id: "1308",
        name: "LAREH SAGO HALABAN",
      },
      {
        id: "1308022",
        regency_id: "1308",
        name: "SITUJUAH LIMO NAGARI",
      },
      {
        id: "1308030",
        regency_id: "1308",
        name: "HARAU",
      },
      {
        id: "1308040",
        regency_id: "1308",
        name: "GUGUAK",
      },
      {
        id: "1308041",
        regency_id: "1308",
        name: "MUNGKA",
      },
      {
        id: "1308050",
        regency_id: "1308",
        name: "SULIKI",
      },
      {
        id: "1308051",
        regency_id: "1308",
        name: "BUKIK BARISAN",
      },
      {
        id: "1308060",
        regency_id: "1308",
        name: "GUNUANG OMEH",
      },
      {
        id: "1308070",
        regency_id: "1308",
        name: "KAPUR IX",
      },
      {
        id: "1308080",
        regency_id: "1308",
        name: "PANGKALAN KOTO BARU",
      },
      {
        id: "1309070",
        regency_id: "1309",
        name: "BONJOL",
      },
      {
        id: "1309071",
        regency_id: "1309",
        name: "TIGO NAGARI",
      },
      {
        id: "1309072",
        regency_id: "1309",
        name: "SIMPANG ALAHAN MATI",
      },
      {
        id: "1309080",
        regency_id: "1309",
        name: "LUBUK SIKAPING",
      },
      {
        id: "1309100",
        regency_id: "1309",
        name: "DUA KOTO",
      },
      {
        id: "1309110",
        regency_id: "1309",
        name: "PANTI",
      },
      {
        id: "1309111",
        regency_id: "1309",
        name: "PADANG GELUGUR",
      },
      {
        id: "1309121",
        regency_id: "1309",
        name: "RAO",
      },
      {
        id: "1309122",
        regency_id: "1309",
        name: "MAPAT TUNGGUL",
      },
      {
        id: "1309123",
        regency_id: "1309",
        name: "MAPAT TUNGGUL SELATAN",
      },
      {
        id: "1309124",
        regency_id: "1309",
        name: "RAO SELATAN",
      },
      {
        id: "1309125",
        regency_id: "1309",
        name: "RAO UTARA",
      },
      {
        id: "1310010",
        regency_id: "1310",
        name: "SANGIR",
      },
      {
        id: "1310020",
        regency_id: "1310",
        name: "SANGIR JUJUAN",
      },
      {
        id: "1310021",
        regency_id: "1310",
        name: "SANGIR BALAI JANGGO",
      },
      {
        id: "1310030",
        regency_id: "1310",
        name: "SANGIR BATANG HARI",
      },
      {
        id: "1310040",
        regency_id: "1310",
        name: "SUNGAI PAGU",
      },
      {
        id: "1310041",
        regency_id: "1310",
        name: "PAUAH DUO",
      },
      {
        id: "1310050",
        regency_id: "1310",
        name: "KOTO PARIK GADANG DIATEH",
      },
      {
        id: "1311010",
        regency_id: "1311",
        name: "SUNGAI RUMBAI",
      },
      {
        id: "1311011",
        regency_id: "1311",
        name: "KOTO BESAR",
      },
      {
        id: "1311012",
        regency_id: "1311",
        name: "ASAM JUJUHAN",
      },
      {
        id: "1311020",
        regency_id: "1311",
        name: "KOTO BARU",
      },
      {
        id: "1311021",
        regency_id: "1311",
        name: "KOTO SALAK",
      },
      {
        id: "1311022",
        regency_id: "1311",
        name: "TIUMANG",
      },
      {
        id: "1311023",
        regency_id: "1311",
        name: "PADANG LAWEH",
      },
      {
        id: "1311030",
        regency_id: "1311",
        name: "SITIUNG",
      },
      {
        id: "1311031",
        regency_id: "1311",
        name: "TIMPEH",
      },
      {
        id: "1311040",
        regency_id: "1311",
        name: "PULAU PUNJUNG",
      },
      {
        id: "1311041",
        regency_id: "1311",
        name: "IX KOTO",
      },
      {
        id: "1312010",
        regency_id: "1312",
        name: "SUNGAI BEREMAS",
      },
      {
        id: "1312020",
        regency_id: "1312",
        name: "RANAH BATAHAN",
      },
      {
        id: "1312030",
        regency_id: "1312",
        name: "KOTO BALINGKA",
      },
      {
        id: "1312040",
        regency_id: "1312",
        name: "SUNGAI AUR",
      },
      {
        id: "1312050",
        regency_id: "1312",
        name: "LEMBAH MALINTANG",
      },
      {
        id: "1312060",
        regency_id: "1312",
        name: "GUNUNG TULEH",
      },
      {
        id: "1312070",
        regency_id: "1312",
        name: "TALAMAU",
      },
      {
        id: "1312080",
        regency_id: "1312",
        name: "PASAMAN",
      },
      {
        id: "1312090",
        regency_id: "1312",
        name: "LUHAK NAN DUO",
      },
      {
        id: "1312100",
        regency_id: "1312",
        name: "SASAK RANAH PASISIE",
      },
      {
        id: "1312110",
        regency_id: "1312",
        name: "KINALI",
      },
      {
        id: "1371010",
        regency_id: "1371",
        name: "BUNGUS TELUK KABUNG",
      },
      {
        id: "1371020",
        regency_id: "1371",
        name: "LUBUK KILANGAN",
      },
      {
        id: "1371030",
        regency_id: "1371",
        name: "LUBUK BEGALUNG",
      },
      {
        id: "1371040",
        regency_id: "1371",
        name: "PADANG SELATAN",
      },
      {
        id: "1371050",
        regency_id: "1371",
        name: "PADANG TIMUR",
      },
      {
        id: "1371060",
        regency_id: "1371",
        name: "PADANG BARAT",
      },
      {
        id: "1371070",
        regency_id: "1371",
        name: "PADANG UTARA",
      },
      {
        id: "1371080",
        regency_id: "1371",
        name: "NANGGALO",
      },
      {
        id: "1371090",
        regency_id: "1371",
        name: "KURANJI",
      },
      {
        id: "1371100",
        regency_id: "1371",
        name: "PAUH",
      },
      {
        id: "1371110",
        regency_id: "1371",
        name: "KOTO TANGAH",
      },
      {
        id: "1372010",
        regency_id: "1372",
        name: "LUBUK SIKARAH",
      },
      {
        id: "1372020",
        regency_id: "1372",
        name: "TANJUNG HARAPAN",
      },
      {
        id: "1373010",
        regency_id: "1373",
        name: "SILUNGKANG",
      },
      {
        id: "1373020",
        regency_id: "1373",
        name: "LEMBAH SEGAR",
      },
      {
        id: "1373030",
        regency_id: "1373",
        name: "BARANGIN",
      },
      {
        id: "1373040",
        regency_id: "1373",
        name: "TALAWI",
      },
      {
        id: "1374010",
        regency_id: "1374",
        name: "PADANG PANJANG BARAT",
      },
      {
        id: "1374020",
        regency_id: "1374",
        name: "PADANG PANJANG TIMUR",
      },
      {
        id: "1375010",
        regency_id: "1375",
        name: "GUGUK PANJANG",
      },
      {
        id: "1375020",
        regency_id: "1375",
        name: "MANDIANGIN KOTO SELAYAN",
      },
      {
        id: "1375030",
        regency_id: "1375",
        name: "AUR BIRUGO TIGO BALEH",
      },
      {
        id: "1376010",
        regency_id: "1376",
        name: "PAYAKUMBUH BARAT",
      },
      {
        id: "1376011",
        regency_id: "1376",
        name: "PAYAKUMBUH SELATAN",
      },
      {
        id: "1376020",
        regency_id: "1376",
        name: "PAYAKUMBUH TIMUR",
      },
      {
        id: "1376030",
        regency_id: "1376",
        name: "PAYAKUMBUH UTARA",
      },
      {
        id: "1376031",
        regency_id: "1376",
        name: "LAMPOSI TIGO NAGORI",
      },
      {
        id: "1377010",
        regency_id: "1377",
        name: "PARIAMAN SELATAN",
      },
      {
        id: "1377020",
        regency_id: "1377",
        name: "PARIAMAN TENGAH",
      },
      {
        id: "1377021",
        regency_id: "1377",
        name: "PARIAMAN TIMUR",
      },
      {
        id: "1377030",
        regency_id: "1377",
        name: "PARIAMAN UTARA",
      },
      {
        id: "1401010",
        regency_id: "1401",
        name: "KUANTAN MUDIK",
      },
      {
        id: "1401011",
        regency_id: "1401",
        name: "HULU KUANTAN",
      },
      {
        id: "1401012",
        regency_id: "1401",
        name: "GUNUNG TOAR",
      },
      {
        id: "1401013",
        regency_id: "1401",
        name: "PUCUK RANTAU",
      },
      {
        id: "1401020",
        regency_id: "1401",
        name: "SINGINGI",
      },
      {
        id: "1401021",
        regency_id: "1401",
        name: "SINGINGI HILIR",
      },
      {
        id: "1401030",
        regency_id: "1401",
        name: "KUANTAN TENGAH",
      },
      {
        id: "1401031",
        regency_id: "1401",
        name: "SENTAJO RAYA",
      },
      {
        id: "1401040",
        regency_id: "1401",
        name: "BENAI",
      },
      {
        id: "1401050",
        regency_id: "1401",
        name: "KUANTAN HILIR",
      },
      {
        id: "1401051",
        regency_id: "1401",
        name: "PANGEAN",
      },
      {
        id: "1401052",
        regency_id: "1401",
        name: "LOGAS TANAH DARAT",
      },
      {
        id: "1401053",
        regency_id: "1401",
        name: "KUANTAN HILIR SEBERANG",
      },
      {
        id: "1401060",
        regency_id: "1401",
        name: "CERENTI",
      },
      {
        id: "1401061",
        regency_id: "1401",
        name: "INUMAN",
      },
      {
        id: "1402010",
        regency_id: "1402",
        name: "PERANAP",
      },
      {
        id: "1402011",
        regency_id: "1402",
        name: "BATANG PERANAP",
      },
      {
        id: "1402020",
        regency_id: "1402",
        name: "SEBERIDA",
      },
      {
        id: "1402021",
        regency_id: "1402",
        name: "BATANG CENAKU",
      },
      {
        id: "1402022",
        regency_id: "1402",
        name: "BATANG GANSAL",
      },
      {
        id: "1402030",
        regency_id: "1402",
        name: "KELAYANG",
      },
      {
        id: "1402031",
        regency_id: "1402",
        name: "RAKIT KULIM",
      },
      {
        id: "1402040",
        regency_id: "1402",
        name: "PASIR PENYU",
      },
      {
        id: "1402041",
        regency_id: "1402",
        name: "LIRIK",
      },
      {
        id: "1402042",
        regency_id: "1402",
        name: "SUNGAI LALA",
      },
      {
        id: "1402043",
        regency_id: "1402",
        name: "LUBUK BATU JAYA",
      },
      {
        id: "1402050",
        regency_id: "1402",
        name: "RENGAT BARAT",
      },
      {
        id: "1402060",
        regency_id: "1402",
        name: "RENGAT",
      },
      {
        id: "1402061",
        regency_id: "1402",
        name: "KUALA CENAKU",
      },
      {
        id: "1403010",
        regency_id: "1403",
        name: "KERITANG",
      },
      {
        id: "1403011",
        regency_id: "1403",
        name: "KEMUNING",
      },
      {
        id: "1403020",
        regency_id: "1403",
        name: "RETEH",
      },
      {
        id: "1403021",
        regency_id: "1403",
        name: "SUNGAI BATANG",
      },
      {
        id: "1403030",
        regency_id: "1403",
        name: "ENOK",
      },
      {
        id: "1403040",
        regency_id: "1403",
        name: "TANAH MERAH",
      },
      {
        id: "1403050",
        regency_id: "1403",
        name: "KUALA INDRAGIRI",
      },
      {
        id: "1403051",
        regency_id: "1403",
        name: "CONCONG",
      },
      {
        id: "1403060",
        regency_id: "1403",
        name: "TEMBILAHAN",
      },
      {
        id: "1403061",
        regency_id: "1403",
        name: "TEMBILAHAN HULU",
      },
      {
        id: "1403070",
        regency_id: "1403",
        name: "TEMPULING",
      },
      {
        id: "1403071",
        regency_id: "1403",
        name: "KEMPAS",
      },
      {
        id: "1403080",
        regency_id: "1403",
        name: "BATANG TUAKA",
      },
      {
        id: "1403090",
        regency_id: "1403",
        name: "GAUNG ANAK SERKA",
      },
      {
        id: "1403100",
        regency_id: "1403",
        name: "GAUNG",
      },
      {
        id: "1403110",
        regency_id: "1403",
        name: "MANDAH",
      },
      {
        id: "1403120",
        regency_id: "1403",
        name: "KATEMAN",
      },
      {
        id: "1403121",
        regency_id: "1403",
        name: "PELANGIRAN",
      },
      {
        id: "1403122",
        regency_id: "1403",
        name: "TELUK BELENGKONG",
      },
      {
        id: "1403123",
        regency_id: "1403",
        name: "PULAU BURUNG",
      },
      {
        id: "1404010",
        regency_id: "1404",
        name: "LANGGAM",
      },
      {
        id: "1404011",
        regency_id: "1404",
        name: "PANGKALAN KERINCI",
      },
      {
        id: "1404012",
        regency_id: "1404",
        name: "BANDAR SEIKIJANG",
      },
      {
        id: "1404020",
        regency_id: "1404",
        name: "PANGKALAN KURAS",
      },
      {
        id: "1404021",
        regency_id: "1404",
        name: "UKUI",
      },
      {
        id: "1404022",
        regency_id: "1404",
        name: "PANGKALAN LESUNG",
      },
      {
        id: "1404030",
        regency_id: "1404",
        name: "BUNUT",
      },
      {
        id: "1404031",
        regency_id: "1404",
        name: "PELALAWAN",
      },
      {
        id: "1404032",
        regency_id: "1404",
        name: "BANDAR PETALANGAN",
      },
      {
        id: "1404040",
        regency_id: "1404",
        name: "KUALA KAMPAR",
      },
      {
        id: "1404041",
        regency_id: "1404",
        name: "KERUMUTAN",
      },
      {
        id: "1404042",
        regency_id: "1404",
        name: "TELUK MERANTI",
      },
      {
        id: "1405010",
        regency_id: "1405",
        name: "MINAS",
      },
      {
        id: "1405011",
        regency_id: "1405",
        name: "SUNGAI MANDAU",
      },
      {
        id: "1405012",
        regency_id: "1405",
        name: "KANDIS",
      },
      {
        id: "1405020",
        regency_id: "1405",
        name: "SIAK",
      },
      {
        id: "1405021",
        regency_id: "1405",
        name: "KERINCI KANAN",
      },
      {
        id: "1405022",
        regency_id: "1405",
        name: "TUALANG",
      },
      {
        id: "1405023",
        regency_id: "1405",
        name: "DAYUN",
      },
      {
        id: "1405024",
        regency_id: "1405",
        name: "LUBUK DALAM",
      },
      {
        id: "1405025",
        regency_id: "1405",
        name: "KOTO GASIB",
      },
      {
        id: "1405026",
        regency_id: "1405",
        name: "MEMPURA",
      },
      {
        id: "1405030",
        regency_id: "1405",
        name: "SUNGAI APIT",
      },
      {
        id: "1405031",
        regency_id: "1405",
        name: "BUNGA RAYA",
      },
      {
        id: "1405032",
        regency_id: "1405",
        name: "SABAK AUH",
      },
      {
        id: "1405033",
        regency_id: "1405",
        name: "PUSAKO",
      },
      {
        id: "1406010",
        regency_id: "1406",
        name: "KAMPAR KIRI",
      },
      {
        id: "1406011",
        regency_id: "1406",
        name: "KAMPAR KIRI HULU",
      },
      {
        id: "1406012",
        regency_id: "1406",
        name: "KAMPAR KIRI HILIR",
      },
      {
        id: "1406013",
        regency_id: "1406",
        name: "GUNUNG SAHILAN",
      },
      {
        id: "1406014",
        regency_id: "1406",
        name: "KAMPAR KIRI TENGAH",
      },
      {
        id: "1406020",
        regency_id: "1406",
        name: "XIII KOTO KAMPAR",
      },
      {
        id: "1406021",
        regency_id: "1406",
        name: "KOTO KAMPAR HULU",
      },
      {
        id: "1406030",
        regency_id: "1406",
        name: "KUOK",
      },
      {
        id: "1406031",
        regency_id: "1406",
        name: "SALO",
      },
      {
        id: "1406040",
        regency_id: "1406",
        name: "TAPUNG",
      },
      {
        id: "1406041",
        regency_id: "1406",
        name: "TAPUNG HULU",
      },
      {
        id: "1406042",
        regency_id: "1406",
        name: "TAPUNG HILIR",
      },
      {
        id: "1406050",
        regency_id: "1406",
        name: "BANGKINANG KOTA",
      },
      {
        id: "1406051",
        regency_id: "1406",
        name: "BANGKINANG",
      },
      {
        id: "1406060",
        regency_id: "1406",
        name: "KAMPAR",
      },
      {
        id: "1406061",
        regency_id: "1406",
        name: "KAMPA",
      },
      {
        id: "1406062",
        regency_id: "1406",
        name: "RUMBIO JAYA",
      },
      {
        id: "1406063",
        regency_id: "1406",
        name: "KAMPAR UTARA",
      },
      {
        id: "1406070",
        regency_id: "1406",
        name: "TAMBANG",
      },
      {
        id: "1406080",
        regency_id: "1406",
        name: "SIAK HULU",
      },
      {
        id: "1406081",
        regency_id: "1406",
        name: "PERHENTIAN RAJA",
      },
      {
        id: "1407010",
        regency_id: "1407",
        name: "ROKAN IV KOTO",
      },
      {
        id: "1407011",
        regency_id: "1407",
        name: "PENDALIAN IV KOTO",
      },
      {
        id: "1407020",
        regency_id: "1407",
        name: "TANDUN",
      },
      {
        id: "1407021",
        regency_id: "1407",
        name: "KABUN",
      },
      {
        id: "1407022",
        regency_id: "1407",
        name: "UJUNG BATU",
      },
      {
        id: "1407030",
        regency_id: "1407",
        name: "RAMBAH SAMO",
      },
      {
        id: "1407040",
        regency_id: "1407",
        name: "RAMBAH",
      },
      {
        id: "1407041",
        regency_id: "1407",
        name: "RAMBAH HILIR",
      },
      {
        id: "1407042",
        regency_id: "1407",
        name: "BANGUN PURBA",
      },
      {
        id: "1407050",
        regency_id: "1407",
        name: "TAMBUSAI",
      },
      {
        id: "1407051",
        regency_id: "1407",
        name: "TAMBUSAI UTARA",
      },
      {
        id: "1407060",
        regency_id: "1407",
        name: "KEPENUHAN",
      },
      {
        id: "1407061",
        regency_id: "1407",
        name: "KEPENUHAN HULU",
      },
      {
        id: "1407070",
        regency_id: "1407",
        name: "KUNTO DARUSSALAM",
      },
      {
        id: "1407071",
        regency_id: "1407",
        name: "PAGARAN TAPAH DARUSSALAM",
      },
      {
        id: "1407072",
        regency_id: "1407",
        name: "BONAI DARUSSALAM",
      },
      {
        id: "1408010",
        regency_id: "1408",
        name: "MANDAU",
      },
      {
        id: "1408011",
        regency_id: "1408",
        name: "PINGGIR",
      },
      {
        id: "1408012",
        regency_id: "1408",
        name: "BATHIN SOLAPAN",
      },
      {
        id: "1408013",
        regency_id: "1408",
        name: "TALANG MUANDAU",
      },
      {
        id: "1408020",
        regency_id: "1408",
        name: "BUKIT BATU",
      },
      {
        id: "1408021",
        regency_id: "1408",
        name: "SIAK KECIL",
      },
      {
        id: "1408022",
        regency_id: "1408",
        name: "BANDAR LAKSAMANA",
      },
      {
        id: "1408030",
        regency_id: "1408",
        name: "RUPAT",
      },
      {
        id: "1408031",
        regency_id: "1408",
        name: "RUPAT UTARA",
      },
      {
        id: "1408040",
        regency_id: "1408",
        name: "BENGKALIS",
      },
      {
        id: "1408050",
        regency_id: "1408",
        name: "BANTAN",
      },
      {
        id: "1409010",
        regency_id: "1409",
        name: "TANAH PUTIH",
      },
      {
        id: "1409011",
        regency_id: "1409",
        name: "PUJUD",
      },
      {
        id: "1409012",
        regency_id: "1409",
        name: "TANAH PUTIH TANJUNG MELAWAN",
      },
      {
        id: "1409013",
        regency_id: "1409",
        name: "RANTAU KOPAR",
      },
      {
        id: "1409014",
        regency_id: "1409",
        name: "TANJUNG MEDAN",
      },
      {
        id: "1409020",
        regency_id: "1409",
        name: "BAGAN SINEMBAH",
      },
      {
        id: "1409021",
        regency_id: "1409",
        name: "SIMPANG KANAN",
      },
      {
        id: "1409022",
        regency_id: "1409",
        name: "BAGAN SINEMBAH RAYA",
      },
      {
        id: "1409023",
        regency_id: "1409",
        name: "BALAI JAYA",
      },
      {
        id: "1409030",
        regency_id: "1409",
        name: "KUBU",
      },
      {
        id: "1409031",
        regency_id: "1409",
        name: "PASIR LIMAU KAPAS",
      },
      {
        id: "1409032",
        regency_id: "1409",
        name: "KUBU BABUSSALAM",
      },
      {
        id: "1409040",
        regency_id: "1409",
        name: "BANGKO",
      },
      {
        id: "1409041",
        regency_id: "1409",
        name: "SINABOI",
      },
      {
        id: "1409042",
        regency_id: "1409",
        name: "BATU HAMPAR",
      },
      {
        id: "1409043",
        regency_id: "1409",
        name: "PEKAITAN",
      },
      {
        id: "1409050",
        regency_id: "1409",
        name: "RIMBA MELINTANG",
      },
      {
        id: "1409051",
        regency_id: "1409",
        name: "BANGKO PUSAKO",
      },
      {
        id: "1410010",
        regency_id: "1410",
        name: "TEBING TINGGI BARAT",
      },
      {
        id: "1410020",
        regency_id: "1410",
        name: "TEBING TINGGI",
      },
      {
        id: "1410021",
        regency_id: "1410",
        name: "TEBING TINGGI TIMUR",
      },
      {
        id: "1410030",
        regency_id: "1410",
        name: "RANGSANG",
      },
      {
        id: "1410031",
        regency_id: "1410",
        name: "RANGSANG PESISIR",
      },
      {
        id: "1410040",
        regency_id: "1410",
        name: "RANGSANG BARAT",
      },
      {
        id: "1410050",
        regency_id: "1410",
        name: "MERBAU",
      },
      {
        id: "1410051",
        regency_id: "1410",
        name: "PULAU MERBAU",
      },
      {
        id: "1410052",
        regency_id: "1410",
        name: "TASIK PUTRI PUYU",
      },
      {
        id: "1471010",
        regency_id: "1471",
        name: "TAMPAN",
      },
      {
        id: "1471011",
        regency_id: "1471",
        name: "PAYUNG SEKAKI",
      },
      {
        id: "1471020",
        regency_id: "1471",
        name: "BUKIT RAYA",
      },
      {
        id: "1471021",
        regency_id: "1471",
        name: "MARPOYAN DAMAI",
      },
      {
        id: "1471022",
        regency_id: "1471",
        name: "TENAYAN RAYA",
      },
      {
        id: "1471030",
        regency_id: "1471",
        name: "LIMAPULUH",
      },
      {
        id: "1471040",
        regency_id: "1471",
        name: "SAIL",
      },
      {
        id: "1471050",
        regency_id: "1471",
        name: "PEKANBARU KOTA",
      },
      {
        id: "1471060",
        regency_id: "1471",
        name: "SUKAJADI",
      },
      {
        id: "1471070",
        regency_id: "1471",
        name: "SENAPELAN",
      },
      {
        id: "1471080",
        regency_id: "1471",
        name: "RUMBAI",
      },
      {
        id: "1471081",
        regency_id: "1471",
        name: "RUMBAI PESISIR",
      },
      {
        id: "1473010",
        regency_id: "1473",
        name: "BUKIT KAPUR",
      },
      {
        id: "1473011",
        regency_id: "1473",
        name: "MEDANG KAMPAI",
      },
      {
        id: "1473012",
        regency_id: "1473",
        name: "SUNGAI SEMBILAN",
      },
      {
        id: "1473020",
        regency_id: "1473",
        name: "DUMAI BARAT",
      },
      {
        id: "1473021",
        regency_id: "1473",
        name: "DUMAI SELATAN",
      },
      {
        id: "1473030",
        regency_id: "1473",
        name: "DUMAI TIMUR",
      },
      {
        id: "1473031",
        regency_id: "1473",
        name: "DUMAI KOTA",
      },
      {
        id: "1501010",
        regency_id: "1501",
        name: "GUNUNG RAYA",
      },
      {
        id: "1501011",
        regency_id: "1501",
        name: "BUKIT KERMAN",
      },
      {
        id: "1501020",
        regency_id: "1501",
        name: "BATANG MERANGIN",
      },
      {
        id: "1501030",
        regency_id: "1501",
        name: "KELILING DANAU",
      },
      {
        id: "1501040",
        regency_id: "1501",
        name: "DANAU KERINCI",
      },
      {
        id: "1501050",
        regency_id: "1501",
        name: "SITINJAU LAUT",
      },
      {
        id: "1501070",
        regency_id: "1501",
        name: "AIR HANGAT",
      },
      {
        id: "1501071",
        regency_id: "1501",
        name: "AIR HANGAT TIMUR",
      },
      {
        id: "1501072",
        regency_id: "1501",
        name: "DEPATI VII",
      },
      {
        id: "1501073",
        regency_id: "1501",
        name: "AIR HANGAT BARAT",
      },
      {
        id: "1501080",
        regency_id: "1501",
        name: "GUNUNG KERINCI",
      },
      {
        id: "1501081",
        regency_id: "1501",
        name: "SIULAK",
      },
      {
        id: "1501082",
        regency_id: "1501",
        name: "SIULAK MUKAI",
      },
      {
        id: "1501090",
        regency_id: "1501",
        name: "KAYU ARO",
      },
      {
        id: "1501091",
        regency_id: "1501",
        name: "GUNUNG TUJUH",
      },
      {
        id: "1501092",
        regency_id: "1501",
        name: "KAYU ARO BARAT",
      },
      {
        id: "1502010",
        regency_id: "1502",
        name: "JANGKAT",
      },
      {
        id: "1502011",
        regency_id: "1502",
        name: "SUNGAI TENANG",
      },
      {
        id: "1502020",
        regency_id: "1502",
        name: "MUARA SIAU",
      },
      {
        id: "1502021",
        regency_id: "1502",
        name: "LEMBAH MASURAI",
      },
      {
        id: "1502022",
        regency_id: "1502",
        name: "TIANG PUMPUNG",
      },
      {
        id: "1502030",
        regency_id: "1502",
        name: "PAMENANG",
      },
      {
        id: "1502031",
        regency_id: "1502",
        name: "PAMENANG BARAT",
      },
      {
        id: "1502032",
        regency_id: "1502",
        name: "RENAH PAMENANG",
      },
      {
        id: "1502033",
        regency_id: "1502",
        name: "PAMENANG SELATAN",
      },
      {
        id: "1502040",
        regency_id: "1502",
        name: "BANGKO",
      },
      {
        id: "1502041",
        regency_id: "1502",
        name: "BANGKO BARAT",
      },
      {
        id: "1502042",
        regency_id: "1502",
        name: "NALO TANTAN",
      },
      {
        id: "1502043",
        regency_id: "1502",
        name: "BATANG MASUMAI",
      },
      {
        id: "1502050",
        regency_id: "1502",
        name: "SUNGAI MANAU",
      },
      {
        id: "1502051",
        regency_id: "1502",
        name: "RENAH PEMBARAP",
      },
      {
        id: "1502052",
        regency_id: "1502",
        name: "PANGKALAN JAMBU",
      },
      {
        id: "1502060",
        regency_id: "1502",
        name: "TABIR",
      },
      {
        id: "1502061",
        regency_id: "1502",
        name: "TABIR ULU",
      },
      {
        id: "1502062",
        regency_id: "1502",
        name: "TABIR SELATAN",
      },
      {
        id: "1502063",
        regency_id: "1502",
        name: "TABIR ILIR",
      },
      {
        id: "1502064",
        regency_id: "1502",
        name: "TABIR TIMUR",
      },
      {
        id: "1502065",
        regency_id: "1502",
        name: "TABIR LINTAS",
      },
      {
        id: "1502066",
        regency_id: "1502",
        name: "MARGO TABIR",
      },
      {
        id: "1502067",
        regency_id: "1502",
        name: "TABIR BARAT",
      },
      {
        id: "1503010",
        regency_id: "1503",
        name: "BATANG ASAI",
      },
      {
        id: "1503020",
        regency_id: "1503",
        name: "LIMUN",
      },
      {
        id: "1503021",
        regency_id: "1503",
        name: "CERMIN NAN GEDANG",
      },
      {
        id: "1503030",
        regency_id: "1503",
        name: "PELAWAN",
      },
      {
        id: "1503031",
        regency_id: "1503",
        name: "SINGKUT",
      },
      {
        id: "1503040",
        regency_id: "1503",
        name: "SAROLANGUN",
      },
      {
        id: "1503041",
        regency_id: "1503",
        name: "BATHIN VIII",
      },
      {
        id: "1503050",
        regency_id: "1503",
        name: "PAUH",
      },
      {
        id: "1503051",
        regency_id: "1503",
        name: "AIR HITAM",
      },
      {
        id: "1503060",
        regency_id: "1503",
        name: "MANDIANGIN",
      },
      {
        id: "1504010",
        regency_id: "1504",
        name: "MERSAM",
      },
      {
        id: "1504011",
        regency_id: "1504",
        name: "MARO SEBO ULU",
      },
      {
        id: "1504020",
        regency_id: "1504",
        name: "BATIN XXIV",
      },
      {
        id: "1504030",
        regency_id: "1504",
        name: "MUARA TEMBESI",
      },
      {
        id: "1504040",
        regency_id: "1504",
        name: "MUARA BULIAN",
      },
      {
        id: "1504041",
        regency_id: "1504",
        name: "BAJUBANG",
      },
      {
        id: "1504042",
        regency_id: "1504",
        name: "MARO SEBO ILIR",
      },
      {
        id: "1504050",
        regency_id: "1504",
        name: "PEMAYUNG",
      },
      {
        id: "1505010",
        regency_id: "1505",
        name: "MESTONG",
      },
      {
        id: "1505011",
        regency_id: "1505",
        name: "SUNGAI BAHAR",
      },
      {
        id: "1505012",
        regency_id: "1505",
        name: "BAHAR SELATAN",
      },
      {
        id: "1505013",
        regency_id: "1505",
        name: "BAHAR UTARA",
      },
      {
        id: "1505020",
        regency_id: "1505",
        name: "KUMPEH ULU",
      },
      {
        id: "1505021",
        regency_id: "1505",
        name: "SUNGAI GELAM",
      },
      {
        id: "1505030",
        regency_id: "1505",
        name: "KUMPEH",
      },
      {
        id: "1505040",
        regency_id: "1505",
        name: "MARO SEBO",
      },
      {
        id: "1505041",
        regency_id: "1505",
        name: "TAMAN RAJO",
      },
      {
        id: "1505050",
        regency_id: "1505",
        name: "JAMBI LUAR KOTA",
      },
      {
        id: "1505060",
        regency_id: "1505",
        name: "SEKERNAN",
      },
      {
        id: "1506010",
        regency_id: "1506",
        name: "MENDAHARA",
      },
      {
        id: "1506011",
        regency_id: "1506",
        name: "MENDAHARA ULU",
      },
      {
        id: "1506012",
        regency_id: "1506",
        name: "GERAGAI",
      },
      {
        id: "1506020",
        regency_id: "1506",
        name: "DENDANG",
      },
      {
        id: "1506031",
        regency_id: "1506",
        name: "MUARA SABAK BARAT",
      },
      {
        id: "1506032",
        regency_id: "1506",
        name: "MUARA SABAK TIMUR",
      },
      {
        id: "1506033",
        regency_id: "1506",
        name: "KUALA JAMBI",
      },
      {
        id: "1506040",
        regency_id: "1506",
        name: "RANTAU RASAU",
      },
      {
        id: "1506041",
        regency_id: "1506",
        name: "BERBAK",
      },
      {
        id: "1506050",
        regency_id: "1506",
        name: "NIPAH PANJANG",
      },
      {
        id: "1506060",
        regency_id: "1506",
        name: "SADU",
      },
      {
        id: "1507010",
        regency_id: "1507",
        name: "TUNGKAL ULU",
      },
      {
        id: "1507011",
        regency_id: "1507",
        name: "MERLUNG",
      },
      {
        id: "1507012",
        regency_id: "1507",
        name: "BATANG ASAM",
      },
      {
        id: "1507013",
        regency_id: "1507",
        name: "TEBING TINGGI",
      },
      {
        id: "1507014",
        regency_id: "1507",
        name: "RENAH MENDALUH",
      },
      {
        id: "1507015",
        regency_id: "1507",
        name: "MUARA PAPALIK",
      },
      {
        id: "1507020",
        regency_id: "1507",
        name: "PENGABUAN",
      },
      {
        id: "1507021",
        regency_id: "1507",
        name: "SENYERANG",
      },
      {
        id: "1507030",
        regency_id: "1507",
        name: "TUNGKAL ILIR",
      },
      {
        id: "1507031",
        regency_id: "1507",
        name: "BRAM ITAM",
      },
      {
        id: "1507032",
        regency_id: "1507",
        name: "SEBERANG KOTA",
      },
      {
        id: "1507040",
        regency_id: "1507",
        name: "BETARA",
      },
      {
        id: "1507041",
        regency_id: "1507",
        name: "KUALA BETARA",
      },
      {
        id: "1508010",
        regency_id: "1508",
        name: "TEBO ILIR",
      },
      {
        id: "1508011",
        regency_id: "1508",
        name: "MUARA TABIR",
      },
      {
        id: "1508020",
        regency_id: "1508",
        name: "TEBO TENGAH",
      },
      {
        id: "1508021",
        regency_id: "1508",
        name: "SUMAY",
      },
      {
        id: "1508022",
        regency_id: "1508",
        name: "TENGAH ILIR",
      },
      {
        id: "1508030",
        regency_id: "1508",
        name: "RIMBO BUJANG",
      },
      {
        id: "1508031",
        regency_id: "1508",
        name: "RIMBO ULU",
      },
      {
        id: "1508032",
        regency_id: "1508",
        name: "RIMBO ILIR",
      },
      {
        id: "1508040",
        regency_id: "1508",
        name: "TEBO ULU",
      },
      {
        id: "1508041",
        regency_id: "1508",
        name: "VII KOTO",
      },
      {
        id: "1508042",
        regency_id: "1508",
        name: "SERAI SERUMPUN",
      },
      {
        id: "1508043",
        regency_id: "1508",
        name: "VII KOTO ILIR",
      },
      {
        id: "1509010",
        regency_id: "1509",
        name: "PELEPAT",
      },
      {
        id: "1509011",
        regency_id: "1509",
        name: "PELEPAT ILIR",
      },
      {
        id: "1509021",
        regency_id: "1509",
        name: "BATHIN II BABEKO",
      },
      {
        id: "1509022",
        regency_id: "1509",
        name: "RIMBO TENGAH",
      },
      {
        id: "1509023",
        regency_id: "1509",
        name: "BUNGO DANI",
      },
      {
        id: "1509024",
        regency_id: "1509",
        name: "PASAR MUARA BUNGO",
      },
      {
        id: "1509025",
        regency_id: "1509",
        name: "BATHIN III",
      },
      {
        id: "1509030",
        regency_id: "1509",
        name: "RANTAU PANDAN",
      },
      {
        id: "1509031",
        regency_id: "1509",
        name: "MUKO-MUKO BATHIN VII",
      },
      {
        id: "1509032",
        regency_id: "1509",
        name: "BATHIN III ULU",
      },
      {
        id: "1509040",
        regency_id: "1509",
        name: "TANAH SEPENGGAL",
      },
      {
        id: "1509041",
        regency_id: "1509",
        name: "TANAH SEPENGGAL LINTAS",
      },
      {
        id: "1509050",
        regency_id: "1509",
        name: "TANAH TUMBUH",
      },
      {
        id: "1509051",
        regency_id: "1509",
        name: "LIMBUR LUBUK MENGKUANG",
      },
      {
        id: "1509052",
        regency_id: "1509",
        name: "BATHIN II PELAYANG",
      },
      {
        id: "1509060",
        regency_id: "1509",
        name: "JUJUHAN",
      },
      {
        id: "1509061",
        regency_id: "1509",
        name: "JUJUHAN ILIR",
      },
      {
        id: "1571010",
        regency_id: "1571",
        name: "KOTA BARU",
      },
      {
        id: "1571011",
        regency_id: "1571",
        name: "ALAM BARAJO",
      },
      {
        id: "1571020",
        regency_id: "1571",
        name: "JAMBI SELATAN",
      },
      {
        id: "1571021",
        regency_id: "1571",
        name: "PAAL MERAH",
      },
      {
        id: "1571030",
        regency_id: "1571",
        name: "JELUTUNG",
      },
      {
        id: "1571040",
        regency_id: "1571",
        name: "PASAR JAMBI",
      },
      {
        id: "1571050",
        regency_id: "1571",
        name: "TELANAIPURA",
      },
      {
        id: "1571051",
        regency_id: "1571",
        name: "DANAU SIPIN",
      },
      {
        id: "1571060",
        regency_id: "1571",
        name: "DANAU TELUK",
      },
      {
        id: "1571070",
        regency_id: "1571",
        name: "PELAYANGAN",
      },
      {
        id: "1571080",
        regency_id: "1571",
        name: "JAMBI TIMUR",
      },
      {
        id: "1572010",
        regency_id: "1572",
        name: "TANAH KAMPUNG",
      },
      {
        id: "1572020",
        regency_id: "1572",
        name: "KUMUN DEBAI",
      },
      {
        id: "1572030",
        regency_id: "1572",
        name: "SUNGAI PENUH",
      },
      {
        id: "1572031",
        regency_id: "1572",
        name: "PONDOK TINGGI",
      },
      {
        id: "1572032",
        regency_id: "1572",
        name: "SUNGAI BUNGKAL",
      },
      {
        id: "1572040",
        regency_id: "1572",
        name: "HAMPARAN RAWANG",
      },
      {
        id: "1572050",
        regency_id: "1572",
        name: "PESISIR BUKIT",
      },
      {
        id: "1572051",
        regency_id: "1572",
        name: "KOTO BARU",
      },
      {
        id: "1601052",
        regency_id: "1601",
        name: "LENGKITI",
      },
      {
        id: "1601070",
        regency_id: "1601",
        name: "SOSOH BUAY RAYAP",
      },
      {
        id: "1601080",
        regency_id: "1601",
        name: "PENGANDONAN",
      },
      {
        id: "1601081",
        regency_id: "1601",
        name: "SEMIDANG AJI",
      },
      {
        id: "1601082",
        regency_id: "1601",
        name: "ULU OGAN",
      },
      {
        id: "1601083",
        regency_id: "1601",
        name: "MUARA JAYA",
      },
      {
        id: "1601090",
        regency_id: "1601",
        name: "PENINJAUAN",
      },
      {
        id: "1601091",
        regency_id: "1601",
        name: "LUBUK BATANG",
      },
      {
        id: "1601092",
        regency_id: "1601",
        name: "SINAR PENINJAUAN",
      },
      {
        id: "1601093",
        regency_id: "1601",
        name: "KEDATON PENINJAUAN RAYA",
      },
      {
        id: "1601130",
        regency_id: "1601",
        name: "BATU RAJA TIMUR",
      },
      {
        id: "1601131",
        regency_id: "1601",
        name: "LUBUK RAJA",
      },
      {
        id: "1601140",
        regency_id: "1601",
        name: "BATU RAJA BARAT",
      },
      {
        id: "1602010",
        regency_id: "1602",
        name: "LEMPUING",
      },
      {
        id: "1602011",
        regency_id: "1602",
        name: "LEMPUING JAYA",
      },
      {
        id: "1602020",
        regency_id: "1602",
        name: "MESUJI",
      },
      {
        id: "1602021",
        regency_id: "1602",
        name: "SUNGAI MENANG",
      },
      {
        id: "1602022",
        regency_id: "1602",
        name: "MESUJI MAKMUR",
      },
      {
        id: "1602023",
        regency_id: "1602",
        name: "MESUJI RAYA",
      },
      {
        id: "1602030",
        regency_id: "1602",
        name: "TULUNG SELAPAN",
      },
      {
        id: "1602031",
        regency_id: "1602",
        name: "CENGAL",
      },
      {
        id: "1602040",
        regency_id: "1602",
        name: "PEDAMARAN",
      },
      {
        id: "1602041",
        regency_id: "1602",
        name: "PEDAMARAN TIMUR",
      },
      {
        id: "1602050",
        regency_id: "1602",
        name: "TANJUNG LUBUK",
      },
      {
        id: "1602051",
        regency_id: "1602",
        name: "TELUK GELAM",
      },
      {
        id: "1602060",
        regency_id: "1602",
        name: "KOTA KAYU AGUNG",
      },
      {
        id: "1602120",
        regency_id: "1602",
        name: "SIRAH PULAU PADANG",
      },
      {
        id: "1602121",
        regency_id: "1602",
        name: "JEJAWI",
      },
      {
        id: "1602130",
        regency_id: "1602",
        name: "PAMPANGAN",
      },
      {
        id: "1602131",
        regency_id: "1602",
        name: "PANGKALAN LAPAM",
      },
      {
        id: "1602140",
        regency_id: "1602",
        name: "AIR SUGIHAN",
      },
      {
        id: "1603010",
        regency_id: "1603",
        name: "SEMENDO DARAT LAUT",
      },
      {
        id: "1603011",
        regency_id: "1603",
        name: "SEMENDO DARAT ULU",
      },
      {
        id: "1603012",
        regency_id: "1603",
        name: "SEMENDO DARAT TENGAH",
      },
      {
        id: "1603020",
        regency_id: "1603",
        name: "TANJUNG AGUNG",
      },
      {
        id: "1603031",
        regency_id: "1603",
        name: "RAMBANG",
      },
      {
        id: "1603032",
        regency_id: "1603",
        name: "LUBAI",
      },
      {
        id: "1603033",
        regency_id: "1603",
        name: "LUBAI ULU",
      },
      {
        id: "1603040",
        regency_id: "1603",
        name: "LAWANG KIDUL",
      },
      {
        id: "1603050",
        regency_id: "1603",
        name: "MUARA ENIM",
      },
      {
        id: "1603051",
        regency_id: "1603",
        name: "UJAN MAS",
      },
      {
        id: "1603060",
        regency_id: "1603",
        name: "GUNUNG MEGANG",
      },
      {
        id: "1603061",
        regency_id: "1603",
        name: "BENAKAT",
      },
      {
        id: "1603062",
        regency_id: "1603",
        name: "BELIMBING",
      },
      {
        id: "1603070",
        regency_id: "1603",
        name: "RAMBANG DANGKU",
      },
      {
        id: "1603090",
        regency_id: "1603",
        name: "GELUMBANG",
      },
      {
        id: "1603091",
        regency_id: "1603",
        name: "LEMBAK",
      },
      {
        id: "1603092",
        regency_id: "1603",
        name: "SUNGAI ROTAN",
      },
      {
        id: "1603093",
        regency_id: "1603",
        name: "MUARA BELIDA",
      },
      {
        id: "1603094",
        regency_id: "1603",
        name: "KELEKAR",
      },
      {
        id: "1603095",
        regency_id: "1603",
        name: "BELIDA DARAT",
      },
      {
        id: "1604011",
        regency_id: "1604",
        name: "TANJUNG SAKTI PUMI",
      },
      {
        id: "1604012",
        regency_id: "1604",
        name: "TANJUNG SAKTI PUMU",
      },
      {
        id: "1604040",
        regency_id: "1604",
        name: "KOTA AGUNG",
      },
      {
        id: "1604041",
        regency_id: "1604",
        name: "MULAK ULU",
      },
      {
        id: "1604042",
        regency_id: "1604",
        name: "TANJUNG TEBAT",
      },
      {
        id: "1604043",
        regency_id: "1604",
        name: "MULAK SEBINGKAI",
      },
      {
        id: "1604050",
        regency_id: "1604",
        name: "PULAU PINANG",
      },
      {
        id: "1604051",
        regency_id: "1604",
        name: "PAGAR GUNUNG",
      },
      {
        id: "1604052",
        regency_id: "1604",
        name: "GUMAY ULU",
      },
      {
        id: "1604060",
        regency_id: "1604",
        name: "JARAI",
      },
      {
        id: "1604061",
        regency_id: "1604",
        name: "PAJAR BULAN",
      },
      {
        id: "1604062",
        regency_id: "1604",
        name: "MUARA PAYANG",
      },
      {
        id: "1604063",
        regency_id: "1604",
        name: "SUKAMERINDU",
      },
      {
        id: "1604111",
        regency_id: "1604",
        name: "KIKIM BARAT",
      },
      {
        id: "1604112",
        regency_id: "1604",
        name: "KIKIM TIMUR",
      },
      {
        id: "1604113",
        regency_id: "1604",
        name: "KIKIM SELATAN",
      },
      {
        id: "1604114",
        regency_id: "1604",
        name: "KIKIM TENGAH",
      },
      {
        id: "1604120",
        regency_id: "1604",
        name: "LAHAT",
      },
      {
        id: "1604121",
        regency_id: "1604",
        name: "GUMAY TALANG",
      },
      {
        id: "1604122",
        regency_id: "1604",
        name: "PSEKSU",
      },
      {
        id: "1604123",
        regency_id: "1604",
        name: "LAHAT SELATAN",
      },
      {
        id: "1604131",
        regency_id: "1604",
        name: "MERAPI BARAT",
      },
      {
        id: "1604132",
        regency_id: "1604",
        name: "MERAPI TIMUR",
      },
      {
        id: "1604133",
        regency_id: "1604",
        name: "MERAPI SELATAN",
      },
      {
        id: "1605030",
        regency_id: "1605",
        name: "SUKU TENGAH LAKITAN ULU",
      },
      {
        id: "1605031",
        regency_id: "1605",
        name: "SELANGIT",
      },
      {
        id: "1605032",
        regency_id: "1605",
        name: "SUMBER HARTA",
      },
      {
        id: "1605040",
        regency_id: "1605",
        name: "TUGUMULYO",
      },
      {
        id: "1605041",
        regency_id: "1605",
        name: "PURWODADI",
      },
      {
        id: "1605050",
        regency_id: "1605",
        name: "MUARA BELITI",
      },
      {
        id: "1605051",
        regency_id: "1605",
        name: "TIANG PUMPUNG KEPUNGUT",
      },
      {
        id: "1605060",
        regency_id: "1605",
        name: "JAYALOKA",
      },
      {
        id: "1605061",
        regency_id: "1605",
        name: "SUKA KARYA",
      },
      {
        id: "1605070",
        regency_id: "1605",
        name: "MUARA KELINGI",
      },
      {
        id: "1605071",
        regency_id: "1605",
        name: "BULANG TENGAH SUKU ULU",
      },
      {
        id: "1605072",
        regency_id: "1605",
        name: "TUAH NEGERI",
      },
      {
        id: "1605080",
        regency_id: "1605",
        name: "MUARA LAKITAN",
      },
      {
        id: "1605090",
        regency_id: "1605",
        name: "MEGANG SAKTI",
      },
      {
        id: "1606010",
        regency_id: "1606",
        name: "SANGA DESA",
      },
      {
        id: "1606020",
        regency_id: "1606",
        name: "BABAT TOMAN",
      },
      {
        id: "1606021",
        regency_id: "1606",
        name: "BATANGHARI LEKO",
      },
      {
        id: "1606022",
        regency_id: "1606",
        name: "PLAKAT TINGGI",
      },
      {
        id: "1606023",
        regency_id: "1606",
        name: "LAWANG WETAN",
      },
      {
        id: "1606030",
        regency_id: "1606",
        name: "SUNGAI KERUH",
      },
      {
        id: "1606040",
        regency_id: "1606",
        name: "SEKAYU",
      },
      {
        id: "1606041",
        regency_id: "1606",
        name: "LAIS",
      },
      {
        id: "1606090",
        regency_id: "1606",
        name: "SUNGAI LILIN",
      },
      {
        id: "1606091",
        regency_id: "1606",
        name: "KELUANG",
      },
      {
        id: "1606092",
        regency_id: "1606",
        name: "BABAT SUPAT",
      },
      {
        id: "1606100",
        regency_id: "1606",
        name: "BAYUNG LENCIR",
      },
      {
        id: "1606101",
        regency_id: "1606",
        name: "LALAN",
      },
      {
        id: "1606102",
        regency_id: "1606",
        name: "TUNGKAL JAYA",
      },
      {
        id: "1607010",
        regency_id: "1607",
        name: "RANTAU BAYUR",
      },
      {
        id: "1607020",
        regency_id: "1607",
        name: "BETUNG",
      },
      {
        id: "1607021",
        regency_id: "1607",
        name: "SUAK TAPEH",
      },
      {
        id: "1607030",
        regency_id: "1607",
        name: "PULAU RIMAU",
      },
      {
        id: "1607031",
        regency_id: "1607",
        name: "TUNGKAL ILIR",
      },
      {
        id: "1607040",
        regency_id: "1607",
        name: "BANYUASIN III",
      },
      {
        id: "1607041",
        regency_id: "1607",
        name: "SEMBAWA",
      },
      {
        id: "1607050",
        regency_id: "1607",
        name: "TALANG KELAPA",
      },
      {
        id: "1607051",
        regency_id: "1607",
        name: "TANJUNG LAGO",
      },
      {
        id: "1607060",
        regency_id: "1607",
        name: "BANYUASIN I",
      },
      {
        id: "1607061",
        regency_id: "1607",
        name: "AIR KUMBANG",
      },
      {
        id: "1607070",
        regency_id: "1607",
        name: "RAMBUTAN",
      },
      {
        id: "1607080",
        regency_id: "1607",
        name: "MUARA PADANG",
      },
      {
        id: "1607081",
        regency_id: "1607",
        name: "MUARA SUGIHAN",
      },
      {
        id: "1607090",
        regency_id: "1607",
        name: "MAKARTI JAYA",
      },
      {
        id: "1607091",
        regency_id: "1607",
        name: "AIR SALEH",
      },
      {
        id: "1607100",
        regency_id: "1607",
        name: "BANYUASIN II",
      },
      {
        id: "1607110",
        regency_id: "1607",
        name: "MUARA TELANG",
      },
      {
        id: "1607111",
        regency_id: "1607",
        name: "SUMBER MARGA TELANG",
      },
      {
        id: "1608010",
        regency_id: "1608",
        name: "MEKAKAU ILIR",
      },
      {
        id: "1608020",
        regency_id: "1608",
        name: "BANDING AGUNG",
      },
      {
        id: "1608021",
        regency_id: "1608",
        name: "WARKUK RANAU SELATAN",
      },
      {
        id: "1608022",
        regency_id: "1608",
        name: "BUAY PEMATANG RIBU RANAU TENGAH",
      },
      {
        id: "1608030",
        regency_id: "1608",
        name: "BUAY PEMACA",
      },
      {
        id: "1608040",
        regency_id: "1608",
        name: "SIMPANG",
      },
      {
        id: "1608041",
        regency_id: "1608",
        name: "BUANA PEMACA",
      },
      {
        id: "1608050",
        regency_id: "1608",
        name: "MUARADUA",
      },
      {
        id: "1608051",
        regency_id: "1608",
        name: "BUAY RAWAN",
      },
      {
        id: "1608060",
        regency_id: "1608",
        name: "BUAY SANDANG AJI",
      },
      {
        id: "1608061",
        regency_id: "1608",
        name: "TIGA DIHAJI",
      },
      {
        id: "1608070",
        regency_id: "1608",
        name: "BUAY RUNJUNG",
      },
      {
        id: "1608071",
        regency_id: "1608",
        name: "RUNJUNG AGUNG",
      },
      {
        id: "1608080",
        regency_id: "1608",
        name: "KISAM TINGGI",
      },
      {
        id: "1608090",
        regency_id: "1608",
        name: "MUARADUA KISAM",
      },
      {
        id: "1608091",
        regency_id: "1608",
        name: "KISAM ILIR",
      },
      {
        id: "1608100",
        regency_id: "1608",
        name: "PULAU BERINGIN",
      },
      {
        id: "1608101",
        regency_id: "1608",
        name: "SINDANG DANAU",
      },
      {
        id: "1608102",
        regency_id: "1608",
        name: "SUNGAI ARE",
      },
      {
        id: "1609010",
        regency_id: "1609",
        name: "MARTAPURA",
      },
      {
        id: "1609011",
        regency_id: "1609",
        name: "BUNGA MAYANG",
      },
      {
        id: "1609012",
        regency_id: "1609",
        name: "JAYA PURA",
      },
      {
        id: "1609020",
        regency_id: "1609",
        name: "BUAY PEMUKA PELIUNG",
      },
      {
        id: "1609030",
        regency_id: "1609",
        name: "BUAY MADANG",
      },
      {
        id: "1609031",
        regency_id: "1609",
        name: "BUAY MADANG TIMUR",
      },
      {
        id: "1609032",
        regency_id: "1609",
        name: "BUAY PEMUKA BANGSA RAJA",
      },
      {
        id: "1609040",
        regency_id: "1609",
        name: "MADANG SUKU II",
      },
      {
        id: "1609041",
        regency_id: "1609",
        name: "MADANG SUKU III",
      },
      {
        id: "1609050",
        regency_id: "1609",
        name: "MADANG SUKU I",
      },
      {
        id: "1609051",
        regency_id: "1609",
        name: "BELITANG MADANG RAYA",
      },
      {
        id: "1609060",
        regency_id: "1609",
        name: "BELITANG",
      },
      {
        id: "1609061",
        regency_id: "1609",
        name: "BELITANG JAYA",
      },
      {
        id: "1609070",
        regency_id: "1609",
        name: "BELITANG III",
      },
      {
        id: "1609080",
        regency_id: "1609",
        name: "BELITANG II",
      },
      {
        id: "1609081",
        regency_id: "1609",
        name: "BELITANG MULYA",
      },
      {
        id: "1609090",
        regency_id: "1609",
        name: "SEMENDAWAI SUKU III",
      },
      {
        id: "1609091",
        regency_id: "1609",
        name: "SEMENDAWAI TIMUR",
      },
      {
        id: "1609100",
        regency_id: "1609",
        name: "CEMPAKA",
      },
      {
        id: "1609101",
        regency_id: "1609",
        name: "SEMENDAWAI BARAT",
      },
      {
        id: "1610010",
        regency_id: "1610",
        name: "MUARA KUANG",
      },
      {
        id: "1610011",
        regency_id: "1610",
        name: "RAMBANG KUANG",
      },
      {
        id: "1610012",
        regency_id: "1610",
        name: "LUBUK KELIAT",
      },
      {
        id: "1610020",
        regency_id: "1610",
        name: "TANJUNG BATU",
      },
      {
        id: "1610021",
        regency_id: "1610",
        name: "PAYARAMAN",
      },
      {
        id: "1610030",
        regency_id: "1610",
        name: "RANTAU ALAI",
      },
      {
        id: "1610031",
        regency_id: "1610",
        name: "KANDIS",
      },
      {
        id: "1610040",
        regency_id: "1610",
        name: "TANJUNG RAJA",
      },
      {
        id: "1610041",
        regency_id: "1610",
        name: "RANTAU PANJANG",
      },
      {
        id: "1610042",
        regency_id: "1610",
        name: "SUNGAI PINANG",
      },
      {
        id: "1610050",
        regency_id: "1610",
        name: "PEMULUTAN",
      },
      {
        id: "1610051",
        regency_id: "1610",
        name: "PEMULUTAN SELATAN",
      },
      {
        id: "1610052",
        regency_id: "1610",
        name: "PEMULUTAN BARAT",
      },
      {
        id: "1610060",
        regency_id: "1610",
        name: "INDRALAYA",
      },
      {
        id: "1610061",
        regency_id: "1610",
        name: "INDRALAYA UTARA",
      },
      {
        id: "1610062",
        regency_id: "1610",
        name: "INDRALAYA SELATAN",
      },
      {
        id: "1611010",
        regency_id: "1611",
        name: "MUARA PINANG",
      },
      {
        id: "1611020",
        regency_id: "1611",
        name: "LINTANG KANAN",
      },
      {
        id: "1611030",
        regency_id: "1611",
        name: "PENDOPO",
      },
      {
        id: "1611031",
        regency_id: "1611",
        name: "PENDOPO BARAT",
      },
      {
        id: "1611040",
        regency_id: "1611",
        name: "PASEMAH AIR KERUH",
      },
      {
        id: "1611050",
        regency_id: "1611",
        name: "ULU MUSI",
      },
      {
        id: "1611051",
        regency_id: "1611",
        name: "SIKAP DALAM",
      },
      {
        id: "1611060",
        regency_id: "1611",
        name: "TALANG PADANG",
      },
      {
        id: "1611070",
        regency_id: "1611",
        name: "TEBING TINGGI",
      },
      {
        id: "1611071",
        regency_id: "1611",
        name: "SALING",
      },
      {
        id: "1612010",
        regency_id: "1612",
        name: "TALANG UBI",
      },
      {
        id: "1612020",
        regency_id: "1612",
        name: "TANAH ABANG",
      },
      {
        id: "1612030",
        regency_id: "1612",
        name: "ABAB",
      },
      {
        id: "1612040",
        regency_id: "1612",
        name: "PENUKAL",
      },
      {
        id: "1612050",
        regency_id: "1612",
        name: "PENUKAL UTARA",
      },
      {
        id: "1613010",
        regency_id: "1613",
        name: "ULU RAWAS",
      },
      {
        id: "1613020",
        regency_id: "1613",
        name: "KARANG JAYA",
      },
      {
        id: "1613030",
        regency_id: "1613",
        name: "RAWAS ULU",
      },
      {
        id: "1613040",
        regency_id: "1613",
        name: "RUPIT",
      },
      {
        id: "1613050",
        regency_id: "1613",
        name: "KARANG DAPO",
      },
      {
        id: "1613060",
        regency_id: "1613",
        name: "RAWAS ILIR",
      },
      {
        id: "1613070",
        regency_id: "1613",
        name: "NIBUNG",
      },
      {
        id: "1671010",
        regency_id: "1671",
        name: "ILIR BARAT II",
      },
      {
        id: "1671011",
        regency_id: "1671",
        name: "GANDUS",
      },
      {
        id: "1671020",
        regency_id: "1671",
        name: "SEBERANG ULU I",
      },
      {
        id: "1671021",
        regency_id: "1671",
        name: "KERTAPATI",
      },
      {
        id: "1671022",
        regency_id: "1671",
        name: "JAKABARING",
      },
      {
        id: "1671030",
        regency_id: "1671",
        name: "SEBERANG ULU II",
      },
      {
        id: "1671031",
        regency_id: "1671",
        name: "PLAJU",
      },
      {
        id: "1671040",
        regency_id: "1671",
        name: "ILIR BARAT I",
      },
      {
        id: "1671041",
        regency_id: "1671",
        name: "BUKIT KECIL",
      },
      {
        id: "1671050",
        regency_id: "1671",
        name: "ILIR TIMUR I",
      },
      {
        id: "1671051",
        regency_id: "1671",
        name: "KEMUNING",
      },
      {
        id: "1671060",
        regency_id: "1671",
        name: "ILIR TIMUR II",
      },
      {
        id: "1671061",
        regency_id: "1671",
        name: "KALIDONI",
      },
      {
        id: "1671062",
        regency_id: "1671",
        name: "ILIR TIMUR III",
      },
      {
        id: "1671070",
        regency_id: "1671",
        name: "SAKO",
      },
      {
        id: "1671071",
        regency_id: "1671",
        name: "SEMATANG BORANG",
      },
      {
        id: "1671080",
        regency_id: "1671",
        name: "SUKARAMI",
      },
      {
        id: "1671081",
        regency_id: "1671",
        name: "ALANG ALANG LEBAR",
      },
      {
        id: "1672010",
        regency_id: "1672",
        name: "RAMBANG KAPAK TENGAH",
      },
      {
        id: "1672020",
        regency_id: "1672",
        name: "PRABUMULIH TIMUR",
      },
      {
        id: "1672021",
        regency_id: "1672",
        name: "PRABUMULIH SELATAN",
      },
      {
        id: "1672030",
        regency_id: "1672",
        name: "PRABUMULIH BARAT",
      },
      {
        id: "1672031",
        regency_id: "1672",
        name: "PRABUMULIH UTARA",
      },
      {
        id: "1672040",
        regency_id: "1672",
        name: "CAMBAI",
      },
      {
        id: "1673010",
        regency_id: "1673",
        name: "DEMPO SELATAN",
      },
      {
        id: "1673011",
        regency_id: "1673",
        name: "DEMPO TENGAH",
      },
      {
        id: "1673020",
        regency_id: "1673",
        name: "DEMPO UTARA",
      },
      {
        id: "1673030",
        regency_id: "1673",
        name: "PAGAR ALAM SELATAN",
      },
      {
        id: "1673040",
        regency_id: "1673",
        name: "PAGAR ALAM UTARA",
      },
      {
        id: "1674011",
        regency_id: "1674",
        name: "LUBUK LINGGAU BARAT I",
      },
      {
        id: "1674012",
        regency_id: "1674",
        name: "LUBUK LINGGAU BARAT II",
      },
      {
        id: "1674021",
        regency_id: "1674",
        name: "LUBUK LINGGAU SELATAN I",
      },
      {
        id: "1674022",
        regency_id: "1674",
        name: "LUBUK LINGGAU SELATAN II",
      },
      {
        id: "1674031",
        regency_id: "1674",
        name: "LUBUK LINGGAU TIMUR I",
      },
      {
        id: "1674032",
        regency_id: "1674",
        name: "LUBUK LINGGAU TIMUR II",
      },
      {
        id: "1674041",
        regency_id: "1674",
        name: "LUBUK LINGGAU UTARA I",
      },
      {
        id: "1674042",
        regency_id: "1674",
        name: "LUBUK LINGGAU UTARA II",
      },
      {
        id: "1701040",
        regency_id: "1701",
        name: "MANNA",
      },
      {
        id: "1701041",
        regency_id: "1701",
        name: "KOTA MANNA",
      },
      {
        id: "1701042",
        regency_id: "1701",
        name: "KEDURANG",
      },
      {
        id: "1701043",
        regency_id: "1701",
        name: "BUNGA MAS",
      },
      {
        id: "1701044",
        regency_id: "1701",
        name: "PASAR MANNA",
      },
      {
        id: "1701045",
        regency_id: "1701",
        name: "KEDURANG ILIR",
      },
      {
        id: "1701050",
        regency_id: "1701",
        name: "SEGINIM",
      },
      {
        id: "1701051",
        regency_id: "1701",
        name: "AIR NIPIS",
      },
      {
        id: "1701060",
        regency_id: "1701",
        name: "PINO",
      },
      {
        id: "1701061",
        regency_id: "1701",
        name: "PINORAYA",
      },
      {
        id: "1701062",
        regency_id: "1701",
        name: "ULU MANNA",
      },
      {
        id: "1702020",
        regency_id: "1702",
        name: "KOTA PADANG",
      },
      {
        id: "1702021",
        regency_id: "1702",
        name: "SINDANG BELITI ILIR",
      },
      {
        id: "1702030",
        regency_id: "1702",
        name: "PADANG ULAK TANDING",
      },
      {
        id: "1702031",
        regency_id: "1702",
        name: "SINDANG KELINGI",
      },
      {
        id: "1702032",
        regency_id: "1702",
        name: "BINDU RIANG",
      },
      {
        id: "1702033",
        regency_id: "1702",
        name: "SINDANG BELITI ULU",
      },
      {
        id: "1702034",
        regency_id: "1702",
        name: "SINDANG DATARAN",
      },
      {
        id: "1702040",
        regency_id: "1702",
        name: "CURUP",
      },
      {
        id: "1702041",
        regency_id: "1702",
        name: "BERMANI ULU",
      },
      {
        id: "1702042",
        regency_id: "1702",
        name: "SELUPU REJANG",
      },
      {
        id: "1702043",
        regency_id: "1702",
        name: "CURUP SELATAN",
      },
      {
        id: "1702044",
        regency_id: "1702",
        name: "CURUP TENGAH",
      },
      {
        id: "1702045",
        regency_id: "1702",
        name: "BERMANI ULU RAYA",
      },
      {
        id: "1702046",
        regency_id: "1702",
        name: "CURUP UTARA",
      },
      {
        id: "1702047",
        regency_id: "1702",
        name: "CURUP TIMUR",
      },
      {
        id: "1703010",
        regency_id: "1703",
        name: "ENGGANO",
      },
      {
        id: "1703050",
        regency_id: "1703",
        name: "KERKAP",
      },
      {
        id: "1703051",
        regency_id: "1703",
        name: "AIR NAPAL",
      },
      {
        id: "1703052",
        regency_id: "1703",
        name: "AIR BESI",
      },
      {
        id: "1703053",
        regency_id: "1703",
        name: "HULU PALIK",
      },
      {
        id: "1703054",
        regency_id: "1703",
        name: "TANJUNG AGUNG PALIK",
      },
      {
        id: "1703060",
        regency_id: "1703",
        name: "ARGA MAKMUR",
      },
      {
        id: "1703061",
        regency_id: "1703",
        name: "ARMA JAYA",
      },
      {
        id: "1703070",
        regency_id: "1703",
        name: "LAIS",
      },
      {
        id: "1703071",
        regency_id: "1703",
        name: "BATIK NAU",
      },
      {
        id: "1703072",
        regency_id: "1703",
        name: "GIRI MULYA",
      },
      {
        id: "1703073",
        regency_id: "1703",
        name: "AIR PADANG",
      },
      {
        id: "1703080",
        regency_id: "1703",
        name: "PADANG JAYA",
      },
      {
        id: "1703090",
        regency_id: "1703",
        name: "KETAHUN",
      },
      {
        id: "1703091",
        regency_id: "1703",
        name: "NAPAL PUTIH",
      },
      {
        id: "1703092",
        regency_id: "1703",
        name: "ULOK KUPAI",
      },
      {
        id: "1703093",
        regency_id: "1703",
        name: "PINANG RAYA",
      },
      {
        id: "1703100",
        regency_id: "1703",
        name: "PUTRI HIJAU",
      },
      {
        id: "1703101",
        regency_id: "1703",
        name: "MARGA SAKTI SEBELAT",
      },
      {
        id: "1704010",
        regency_id: "1704",
        name: "NASAL",
      },
      {
        id: "1704020",
        regency_id: "1704",
        name: "MAJE",
      },
      {
        id: "1704030",
        regency_id: "1704",
        name: "KAUR SELATAN",
      },
      {
        id: "1704031",
        regency_id: "1704",
        name: "TETAP",
      },
      {
        id: "1704040",
        regency_id: "1704",
        name: "KAUR TENGAH",
      },
      {
        id: "1704041",
        regency_id: "1704",
        name: "LUAS",
      },
      {
        id: "1704042",
        regency_id: "1704",
        name: "MUARA SAHUNG",
      },
      {
        id: "1704050",
        regency_id: "1704",
        name: "KINAL",
      },
      {
        id: "1704051",
        regency_id: "1704",
        name: "SEMIDANG GUMAY",
      },
      {
        id: "1704060",
        regency_id: "1704",
        name: "TANJUNG KEMUNING",
      },
      {
        id: "1704061",
        regency_id: "1704",
        name: "KELAM TENGAH",
      },
      {
        id: "1704070",
        regency_id: "1704",
        name: "KAUR UTARA",
      },
      {
        id: "1704071",
        regency_id: "1704",
        name: "PADANG GUCI HILIR",
      },
      {
        id: "1704072",
        regency_id: "1704",
        name: "LUNGKANG KULE",
      },
      {
        id: "1704073",
        regency_id: "1704",
        name: "PADANG GUCI HULU",
      },
      {
        id: "1705010",
        regency_id: "1705",
        name: "SEMIDANG ALAS MARAS",
      },
      {
        id: "1705020",
        regency_id: "1705",
        name: "SEMIDANG ALAS",
      },
      {
        id: "1705030",
        regency_id: "1705",
        name: "TALO",
      },
      {
        id: "1705031",
        regency_id: "1705",
        name: "ILIR TALO",
      },
      {
        id: "1705032",
        regency_id: "1705",
        name: "TALO KECIL",
      },
      {
        id: "1705033",
        regency_id: "1705",
        name: "ULU TALO",
      },
      {
        id: "1705040",
        regency_id: "1705",
        name: "SELUMA",
      },
      {
        id: "1705041",
        regency_id: "1705",
        name: "SELUMA SELATAN",
      },
      {
        id: "1705042",
        regency_id: "1705",
        name: "SELUMA BARAT",
      },
      {
        id: "1705043",
        regency_id: "1705",
        name: "SELUMA TIMUR",
      },
      {
        id: "1705044",
        regency_id: "1705",
        name: "SELUMA UTARA",
      },
      {
        id: "1705050",
        regency_id: "1705",
        name: "SUKARAJA",
      },
      {
        id: "1705051",
        regency_id: "1705",
        name: "AIR PERIUKAN",
      },
      {
        id: "1705052",
        regency_id: "1705",
        name: "LUBUK SANDI",
      },
      {
        id: "1706010",
        regency_id: "1706",
        name: "IPUH",
      },
      {
        id: "1706011",
        regency_id: "1706",
        name: "AIR RAMI",
      },
      {
        id: "1706012",
        regency_id: "1706",
        name: "MALIN DEMAN",
      },
      {
        id: "1706020",
        regency_id: "1706",
        name: "PONDOK SUGUH",
      },
      {
        id: "1706021",
        regency_id: "1706",
        name: "SUNGAI RUMBAI",
      },
      {
        id: "1706022",
        regency_id: "1706",
        name: "TERAMANG JAYA",
      },
      {
        id: "1706030",
        regency_id: "1706",
        name: "TERAS TERUNJAM",
      },
      {
        id: "1706031",
        regency_id: "1706",
        name: "PENARIK",
      },
      {
        id: "1706032",
        regency_id: "1706",
        name: "SELAGAN RAYA",
      },
      {
        id: "1706040",
        regency_id: "1706",
        name: "KOTA MUKOMUKO",
      },
      {
        id: "1706041",
        regency_id: "1706",
        name: "AIR DIKIT",
      },
      {
        id: "1706042",
        regency_id: "1706",
        name: "XIV KOTO",
      },
      {
        id: "1706050",
        regency_id: "1706",
        name: "LUBUK PINANG",
      },
      {
        id: "1706051",
        regency_id: "1706",
        name: "AIR MANJUNTO",
      },
      {
        id: "1706052",
        regency_id: "1706",
        name: "V KOTO",
      },
      {
        id: "1707010",
        regency_id: "1707",
        name: "RIMBO PENGADANG",
      },
      {
        id: "1707011",
        regency_id: "1707",
        name: "TOPOS",
      },
      {
        id: "1707020",
        regency_id: "1707",
        name: "LEBONG SELATAN",
      },
      {
        id: "1707021",
        regency_id: "1707",
        name: "BINGIN KUNING",
      },
      {
        id: "1707030",
        regency_id: "1707",
        name: "LEBONG TENGAH",
      },
      {
        id: "1707031",
        regency_id: "1707",
        name: "LEBONG SAKTI",
      },
      {
        id: "1707040",
        regency_id: "1707",
        name: "LEBONG ATAS",
      },
      {
        id: "1707042",
        regency_id: "1707",
        name: "PELABAI",
      },
      {
        id: "1707050",
        regency_id: "1707",
        name: "LEBONG UTARA",
      },
      {
        id: "1707051",
        regency_id: "1707",
        name: "AMEN",
      },
      {
        id: "1707052",
        regency_id: "1707",
        name: "URAM JAYA",
      },
      {
        id: "1707053",
        regency_id: "1707",
        name: "PINANG BELAPIS",
      },
      {
        id: "1708010",
        regency_id: "1708",
        name: "MUARA KEMUMU",
      },
      {
        id: "1708020",
        regency_id: "1708",
        name: "BERMANI ILIR",
      },
      {
        id: "1708030",
        regency_id: "1708",
        name: "SEBERANG MUSI",
      },
      {
        id: "1708040",
        regency_id: "1708",
        name: "TEBAT KARAI",
      },
      {
        id: "1708050",
        regency_id: "1708",
        name: "KEPAHIANG",
      },
      {
        id: "1708060",
        regency_id: "1708",
        name: "KABA WETAN",
      },
      {
        id: "1708070",
        regency_id: "1708",
        name: "UJAN MAS",
      },
      {
        id: "1708080",
        regency_id: "1708",
        name: "MERIGI",
      },
      {
        id: "1709010",
        regency_id: "1709",
        name: "TALANG EMPAT",
      },
      {
        id: "1709020",
        regency_id: "1709",
        name: "KARANG TINGGI",
      },
      {
        id: "1709030",
        regency_id: "1709",
        name: "TABA PENANJUNG",
      },
      {
        id: "1709031",
        regency_id: "1709",
        name: "MERIGI KELINDANG",
      },
      {
        id: "1709040",
        regency_id: "1709",
        name: "PAGAR JATI",
      },
      {
        id: "1709041",
        regency_id: "1709",
        name: "MERIGI SAKTI",
      },
      {
        id: "1709050",
        regency_id: "1709",
        name: "PONDOK KELAPA",
      },
      {
        id: "1709051",
        regency_id: "1709",
        name: "PONDOK KUBANG",
      },
      {
        id: "1709060",
        regency_id: "1709",
        name: "PEMATANG TIGA",
      },
      {
        id: "1709061",
        regency_id: "1709",
        name: "BANG HAJI",
      },
      {
        id: "1771010",
        regency_id: "1771",
        name: "SELEBAR",
      },
      {
        id: "1771011",
        regency_id: "1771",
        name: "KAMPUNG MELAYU",
      },
      {
        id: "1771020",
        regency_id: "1771",
        name: "GADING CEMPAKA",
      },
      {
        id: "1771021",
        regency_id: "1771",
        name: "RATU AGUNG",
      },
      {
        id: "1771022",
        regency_id: "1771",
        name: "RATU SAMBAN",
      },
      {
        id: "1771023",
        regency_id: "1771",
        name: "SINGARAN PATI",
      },
      {
        id: "1771030",
        regency_id: "1771",
        name: "TELUK SEGARA",
      },
      {
        id: "1771031",
        regency_id: "1771",
        name: "SUNGAI SERUT",
      },
      {
        id: "1771040",
        regency_id: "1771",
        name: "MUARA BANGKA HULU",
      },
      {
        id: "1801040",
        regency_id: "1801",
        name: "BALIK BUKIT",
      },
      {
        id: "1801041",
        regency_id: "1801",
        name: "SUKAU",
      },
      {
        id: "1801042",
        regency_id: "1801",
        name: "LUMBOK SEMINUNG",
      },
      {
        id: "1801050",
        regency_id: "1801",
        name: "BELALAU",
      },
      {
        id: "1801051",
        regency_id: "1801",
        name: "SEKINCAU",
      },
      {
        id: "1801052",
        regency_id: "1801",
        name: "SUOH",
      },
      {
        id: "1801053",
        regency_id: "1801",
        name: "BATU BRAK",
      },
      {
        id: "1801054",
        regency_id: "1801",
        name: "PAGAR DEWA",
      },
      {
        id: "1801055",
        regency_id: "1801",
        name: "BATU KETULIS",
      },
      {
        id: "1801056",
        regency_id: "1801",
        name: "BANDAR NEGERI SUOH",
      },
      {
        id: "1801060",
        regency_id: "1801",
        name: "SUMBER JAYA",
      },
      {
        id: "1801061",
        regency_id: "1801",
        name: "WAY TENONG",
      },
      {
        id: "1801062",
        regency_id: "1801",
        name: "GEDUNG SURIAN",
      },
      {
        id: "1801063",
        regency_id: "1801",
        name: "KEBUN TEBU",
      },
      {
        id: "1801064",
        regency_id: "1801",
        name: "AIR HITAM",
      },
      {
        id: "1802010",
        regency_id: "1802",
        name: "WONOSOBO",
      },
      {
        id: "1802011",
        regency_id: "1802",
        name: "SEMAKA",
      },
      {
        id: "1802012",
        regency_id: "1802",
        name: "BANDAR NEGERI SEMUONG",
      },
      {
        id: "1802020",
        regency_id: "1802",
        name: "KOTA AGUNG",
      },
      {
        id: "1802021",
        regency_id: "1802",
        name: "PEMATANG SAWA",
      },
      {
        id: "1802022",
        regency_id: "1802",
        name: "KOTA AGUNG TIMUR",
      },
      {
        id: "1802023",
        regency_id: "1802",
        name: "KOTA AGUNG BARAT",
      },
      {
        id: "1802030",
        regency_id: "1802",
        name: "PULAU PANGGUNG",
      },
      {
        id: "1802031",
        regency_id: "1802",
        name: "ULUBELU",
      },
      {
        id: "1802032",
        regency_id: "1802",
        name: "AIR NANINGAN",
      },
      {
        id: "1802040",
        regency_id: "1802",
        name: "TALANG PADANG",
      },
      {
        id: "1802041",
        regency_id: "1802",
        name: "SUMBEREJO",
      },
      {
        id: "1802042",
        regency_id: "1802",
        name: "GISTING",
      },
      {
        id: "1802043",
        regency_id: "1802",
        name: "GUNUNG ALIP",
      },
      {
        id: "1802050",
        regency_id: "1802",
        name: "PUGUNG",
      },
      {
        id: "1802101",
        regency_id: "1802",
        name: "BULOK",
      },
      {
        id: "1802110",
        regency_id: "1802",
        name: "CUKUH BALAK",
      },
      {
        id: "1802111",
        regency_id: "1802",
        name: "KELUMBAYAN",
      },
      {
        id: "1802112",
        regency_id: "1802",
        name: "LIMAU",
      },
      {
        id: "1802113",
        regency_id: "1802",
        name: "KELUMBAYAN BARAT",
      },
      {
        id: "1803060",
        regency_id: "1803",
        name: "NATAR",
      },
      {
        id: "1803070",
        regency_id: "1803",
        name: "JATI AGUNG",
      },
      {
        id: "1803080",
        regency_id: "1803",
        name: "TANJUNG BINTANG",
      },
      {
        id: "1803081",
        regency_id: "1803",
        name: "TANJUNG SARI",
      },
      {
        id: "1803090",
        regency_id: "1803",
        name: "KATIBUNG",
      },
      {
        id: "1803091",
        regency_id: "1803",
        name: "MERBAU MATARAM",
      },
      {
        id: "1803092",
        regency_id: "1803",
        name: "WAY SULAN",
      },
      {
        id: "1803100",
        regency_id: "1803",
        name: "SIDOMULYO",
      },
      {
        id: "1803101",
        regency_id: "1803",
        name: "CANDIPURO",
      },
      {
        id: "1803102",
        regency_id: "1803",
        name: "WAY PANJI",
      },
      {
        id: "1803110",
        regency_id: "1803",
        name: "KALIANDA",
      },
      {
        id: "1803111",
        regency_id: "1803",
        name: "RAJABASA",
      },
      {
        id: "1803120",
        regency_id: "1803",
        name: "PALAS",
      },
      {
        id: "1803121",
        regency_id: "1803",
        name: "SRAGI",
      },
      {
        id: "1803130",
        regency_id: "1803",
        name: "PENENGAHAN",
      },
      {
        id: "1803131",
        regency_id: "1803",
        name: "KETAPANG",
      },
      {
        id: "1803132",
        regency_id: "1803",
        name: "BAKAUHENI",
      },
      {
        id: "1804010",
        regency_id: "1804",
        name: "METRO KIBANG",
      },
      {
        id: "1804020",
        regency_id: "1804",
        name: "BATANGHARI",
      },
      {
        id: "1804030",
        regency_id: "1804",
        name: "SEKAMPUNG",
      },
      {
        id: "1804040",
        regency_id: "1804",
        name: "MARGATIGA",
      },
      {
        id: "1804050",
        regency_id: "1804",
        name: "SEKAMPUNG UDIK",
      },
      {
        id: "1804060",
        regency_id: "1804",
        name: "JABUNG",
      },
      {
        id: "1804061",
        regency_id: "1804",
        name: "PASIR SAKTI",
      },
      {
        id: "1804062",
        regency_id: "1804",
        name: "WAWAY KARYA",
      },
      {
        id: "1804063",
        regency_id: "1804",
        name: "MARGA SEKAMPUNG",
      },
      {
        id: "1804070",
        regency_id: "1804",
        name: "LABUHAN MARINGGAI",
      },
      {
        id: "1804071",
        regency_id: "1804",
        name: "MATARAM BARU",
      },
      {
        id: "1804072",
        regency_id: "1804",
        name: "BANDAR SRIBAWONO",
      },
      {
        id: "1804073",
        regency_id: "1804",
        name: "MELINTING",
      },
      {
        id: "1804074",
        regency_id: "1804",
        name: "GUNUNG PELINDUNG",
      },
      {
        id: "1804080",
        regency_id: "1804",
        name: "WAY JEPARA",
      },
      {
        id: "1804081",
        regency_id: "1804",
        name: "BRAJA SLEBAH",
      },
      {
        id: "1804082",
        regency_id: "1804",
        name: "LABUHAN RATU",
      },
      {
        id: "1804090",
        regency_id: "1804",
        name: "SUKADANA",
      },
      {
        id: "1804091",
        regency_id: "1804",
        name: "BUMI AGUNG",
      },
      {
        id: "1804092",
        regency_id: "1804",
        name: "BATANGHARI NUBAN",
      },
      {
        id: "1804100",
        regency_id: "1804",
        name: "PEKALONGAN",
      },
      {
        id: "1804110",
        regency_id: "1804",
        name: "RAMAN UTARA",
      },
      {
        id: "1804120",
        regency_id: "1804",
        name: "PURBOLINGGO",
      },
      {
        id: "1804121",
        regency_id: "1804",
        name: "WAY BUNGUR",
      },
      {
        id: "1805010",
        regency_id: "1805",
        name: "PADANG RATU",
      },
      {
        id: "1805011",
        regency_id: "1805",
        name: "SELAGAI LINGGA",
      },
      {
        id: "1805012",
        regency_id: "1805",
        name: "PUBIAN",
      },
      {
        id: "1805013",
        regency_id: "1805",
        name: "ANAK TUHA",
      },
      {
        id: "1805014",
        regency_id: "1805",
        name: "ANAK RATU AJI",
      },
      {
        id: "1805020",
        regency_id: "1805",
        name: "KALIREJO",
      },
      {
        id: "1805021",
        regency_id: "1805",
        name: "SENDANG AGUNG",
      },
      {
        id: "1805030",
        regency_id: "1805",
        name: "BANGUNREJO",
      },
      {
        id: "1805040",
        regency_id: "1805",
        name: "GUNUNG SUGIH",
      },
      {
        id: "1805041",
        regency_id: "1805",
        name: "BEKRI",
      },
      {
        id: "1805042",
        regency_id: "1805",
        name: "BUMI RATU NUBAN",
      },
      {
        id: "1805050",
        regency_id: "1805",
        name: "TRIMURJO",
      },
      {
        id: "1805060",
        regency_id: "1805",
        name: "PUNGGUR",
      },
      {
        id: "1805061",
        regency_id: "1805",
        name: "KOTA GAJAH",
      },
      {
        id: "1805070",
        regency_id: "1805",
        name: "SEPUTIH RAMAN",
      },
      {
        id: "1805080",
        regency_id: "1805",
        name: "TERBANGGI BESAR",
      },
      {
        id: "1805081",
        regency_id: "1805",
        name: "SEPUTIH AGUNG",
      },
      {
        id: "1805082",
        regency_id: "1805",
        name: "WAY PENGUBUAN",
      },
      {
        id: "1805090",
        regency_id: "1805",
        name: "TERUSAN NUNYAI",
      },
      {
        id: "1805100",
        regency_id: "1805",
        name: "SEPUTIH MATARAM",
      },
      {
        id: "1805101",
        regency_id: "1805",
        name: "BANDAR MATARAM",
      },
      {
        id: "1805110",
        regency_id: "1805",
        name: "SEPUTIH BANYAK",
      },
      {
        id: "1805111",
        regency_id: "1805",
        name: "WAY SEPUTIH",
      },
      {
        id: "1805120",
        regency_id: "1805",
        name: "RUMBIA",
      },
      {
        id: "1805121",
        regency_id: "1805",
        name: "BUMI NABUNG",
      },
      {
        id: "1805122",
        regency_id: "1805",
        name: "PUTRA RUMBIA",
      },
      {
        id: "1805130",
        regency_id: "1805",
        name: "SEPUTIH SURABAYA",
      },
      {
        id: "1805131",
        regency_id: "1805",
        name: "BANDAR SURABAYA",
      },
      {
        id: "1806010",
        regency_id: "1806",
        name: "BUKIT KEMUNING",
      },
      {
        id: "1806011",
        regency_id: "1806",
        name: "ABUNG TINGGI",
      },
      {
        id: "1806020",
        regency_id: "1806",
        name: "TANJUNG RAJA",
      },
      {
        id: "1806030",
        regency_id: "1806",
        name: "ABUNG BARAT",
      },
      {
        id: "1806031",
        regency_id: "1806",
        name: "ABUNG TENGAH",
      },
      {
        id: "1806032",
        regency_id: "1806",
        name: "ABUNG  KUNANG",
      },
      {
        id: "1806033",
        regency_id: "1806",
        name: "ABUNG PEKURUN",
      },
      {
        id: "1806040",
        regency_id: "1806",
        name: "KOTABUMI",
      },
      {
        id: "1806041",
        regency_id: "1806",
        name: "KOTABUMI UTARA",
      },
      {
        id: "1806042",
        regency_id: "1806",
        name: "KOTABUMI SELATAN",
      },
      {
        id: "1806050",
        regency_id: "1806",
        name: "ABUNG SELATAN",
      },
      {
        id: "1806051",
        regency_id: "1806",
        name: "ABUNG SEMULI",
      },
      {
        id: "1806052",
        regency_id: "1806",
        name: "BLAMBANGAN PAGAR",
      },
      {
        id: "1806060",
        regency_id: "1806",
        name: "ABUNG TIMUR",
      },
      {
        id: "1806061",
        regency_id: "1806",
        name: "ABUNG SURAKARTA",
      },
      {
        id: "1806070",
        regency_id: "1806",
        name: "SUNGKAI SELATAN",
      },
      {
        id: "1806071",
        regency_id: "1806",
        name: "MUARA SUNGKAI",
      },
      {
        id: "1806072",
        regency_id: "1806",
        name: "BUNGA MAYANG",
      },
      {
        id: "1806073",
        regency_id: "1806",
        name: "SUNGKAI  BARAT",
      },
      {
        id: "1806074",
        regency_id: "1806",
        name: "SUNGKAI JAYA",
      },
      {
        id: "1806080",
        regency_id: "1806",
        name: "SUNGKAI UTARA",
      },
      {
        id: "1806081",
        regency_id: "1806",
        name: "HULUSUNGKAI",
      },
      {
        id: "1806082",
        regency_id: "1806",
        name: "SUNGKAI TENGAH",
      },
      {
        id: "1807010",
        regency_id: "1807",
        name: "BANJIT",
      },
      {
        id: "1807020",
        regency_id: "1807",
        name: "BARADATU",
      },
      {
        id: "1807021",
        regency_id: "1807",
        name: "GUNUNG LABUHAN",
      },
      {
        id: "1807030",
        regency_id: "1807",
        name: "KASUI",
      },
      {
        id: "1807031",
        regency_id: "1807",
        name: "REBANG TANGKAS",
      },
      {
        id: "1807040",
        regency_id: "1807",
        name: "BLAMBANGAN UMPU",
      },
      {
        id: "1807041",
        regency_id: "1807",
        name: "WAY TUBA",
      },
      {
        id: "1807042",
        regency_id: "1807",
        name: "NEGERI AGUNG",
      },
      {
        id: "1807050",
        regency_id: "1807",
        name: "BAHUGA",
      },
      {
        id: "1807051",
        regency_id: "1807",
        name: "BUAY  BAHUGA",
      },
      {
        id: "1807052",
        regency_id: "1807",
        name: "BUMI AGUNG",
      },
      {
        id: "1807060",
        regency_id: "1807",
        name: "PAKUAN RATU",
      },
      {
        id: "1807061",
        regency_id: "1807",
        name: "NEGARA BATIN",
      },
      {
        id: "1807062",
        regency_id: "1807",
        name: "NEGERI BESAR",
      },
      {
        id: "1808030",
        regency_id: "1808",
        name: "BANJAR AGUNG",
      },
      {
        id: "1808031",
        regency_id: "1808",
        name: "BANJAR MARGO",
      },
      {
        id: "1808032",
        regency_id: "1808",
        name: "BANJAR BARU",
      },
      {
        id: "1808040",
        regency_id: "1808",
        name: "GEDUNG AJI",
      },
      {
        id: "1808041",
        regency_id: "1808",
        name: "PENAWAR AJI",
      },
      {
        id: "1808042",
        regency_id: "1808",
        name: "MERAKSA AJI",
      },
      {
        id: "1808050",
        regency_id: "1808",
        name: "MENGGALA",
      },
      {
        id: "1808051",
        regency_id: "1808",
        name: "PENAWAR TAMA",
      },
      {
        id: "1808052",
        regency_id: "1808",
        name: "RAWAJITU SELATAN",
      },
      {
        id: "1808053",
        regency_id: "1808",
        name: "GEDUNG MENENG",
      },
      {
        id: "1808054",
        regency_id: "1808",
        name: "RAWAJITU TIMUR",
      },
      {
        id: "1808055",
        regency_id: "1808",
        name: "RAWA PITU",
      },
      {
        id: "1808056",
        regency_id: "1808",
        name: "GEDUNG AJI BARU",
      },
      {
        id: "1808057",
        regency_id: "1808",
        name: "DENTE TELADAS",
      },
      {
        id: "1808058",
        regency_id: "1808",
        name: "MENGGALA TIMUR",
      },
      {
        id: "1809010",
        regency_id: "1809",
        name: "PUNDUH PIDADA",
      },
      {
        id: "1809011",
        regency_id: "1809",
        name: "MARGA PUNDUH",
      },
      {
        id: "1809020",
        regency_id: "1809",
        name: "PADANG CERMIN",
      },
      {
        id: "1809021",
        regency_id: "1809",
        name: "TELUK PANDAN",
      },
      {
        id: "1809022",
        regency_id: "1809",
        name: "WAY RATAI",
      },
      {
        id: "1809030",
        regency_id: "1809",
        name: "KEDONDONG",
      },
      {
        id: "1809031",
        regency_id: "1809",
        name: "WAY KHILAU",
      },
      {
        id: "1809040",
        regency_id: "1809",
        name: "WAY LIMA",
      },
      {
        id: "1809050",
        regency_id: "1809",
        name: "GEDUNG TATAAN",
      },
      {
        id: "1809060",
        regency_id: "1809",
        name: "NEGERI KATON",
      },
      {
        id: "1809070",
        regency_id: "1809",
        name: "TEGINENENG",
      },
      {
        id: "1810010",
        regency_id: "1810",
        name: "PARDASUKA",
      },
      {
        id: "1810020",
        regency_id: "1810",
        name: "AMBARAWA",
      },
      {
        id: "1810030",
        regency_id: "1810",
        name: "PAGELARAN",
      },
      {
        id: "1810031",
        regency_id: "1810",
        name: "PAGELARAN UTARA",
      },
      {
        id: "1810040",
        regency_id: "1810",
        name: "PRINGSEWU",
      },
      {
        id: "1810050",
        regency_id: "1810",
        name: "GADING REJO",
      },
      {
        id: "1810060",
        regency_id: "1810",
        name: "SUKOHARJO",
      },
      {
        id: "1810070",
        regency_id: "1810",
        name: "BANYUMAS",
      },
      {
        id: "1810080",
        regency_id: "1810",
        name: "ADI LUWIH",
      },
      {
        id: "1811010",
        regency_id: "1811",
        name: "WAY SERDANG",
      },
      {
        id: "1811020",
        regency_id: "1811",
        name: "SIMPANG PEMATANG",
      },
      {
        id: "1811030",
        regency_id: "1811",
        name: "PANCA JAYA",
      },
      {
        id: "1811040",
        regency_id: "1811",
        name: "TANJUNG RAYA",
      },
      {
        id: "1811050",
        regency_id: "1811",
        name: "MESUJI",
      },
      {
        id: "1811060",
        regency_id: "1811",
        name: "MESUJI TIMUR",
      },
      {
        id: "1811070",
        regency_id: "1811",
        name: "RAWAJITU UTARA",
      },
      {
        id: "1812010",
        regency_id: "1812",
        name: "TULANG BAWANG UDIK",
      },
      {
        id: "1812020",
        regency_id: "1812",
        name: "TUMI JAJAR",
      },
      {
        id: "1812030",
        regency_id: "1812",
        name: "TULANG BAWANG TENGAH",
      },
      {
        id: "1812040",
        regency_id: "1812",
        name: "PAGAR DEWA",
      },
      {
        id: "1812050",
        regency_id: "1812",
        name: "LAMBU KIBANG",
      },
      {
        id: "1812060",
        regency_id: "1812",
        name: "GUNUNG TERANG",
      },
      {
        id: "1812061",
        regency_id: "1812",
        name: "BATU PUTIH",
      },
      {
        id: "1812070",
        regency_id: "1812",
        name: "GUNUNG AGUNG",
      },
      {
        id: "1812080",
        regency_id: "1812",
        name: "WAY KENANGA",
      },
      {
        id: "1813010",
        regency_id: "1813",
        name: "LEMONG",
      },
      {
        id: "1813020",
        regency_id: "1813",
        name: "PESISIR UTARA",
      },
      {
        id: "1813030",
        regency_id: "1813",
        name: "PULAU PISANG",
      },
      {
        id: "1813040",
        regency_id: "1813",
        name: "KARYA PENGGAWA",
      },
      {
        id: "1813050",
        regency_id: "1813",
        name: "WAY KRUI",
      },
      {
        id: "1813060",
        regency_id: "1813",
        name: "PESISIR TENGAH",
      },
      {
        id: "1813070",
        regency_id: "1813",
        name: "KRUI SELATAN",
      },
      {
        id: "1813080",
        regency_id: "1813",
        name: "PESISIR SELATAN",
      },
      {
        id: "1813090",
        regency_id: "1813",
        name: "NGAMBUR",
      },
      {
        id: "1813100",
        regency_id: "1813",
        name: "BENGKUNAT",
      },
      {
        id: "1813110",
        regency_id: "1813",
        name: "BENGKUNAT BELIMBING",
      },
      {
        id: "1871010",
        regency_id: "1871",
        name: "TELUK BETUNG BARAT",
      },
      {
        id: "1871011",
        regency_id: "1871",
        name: "TELUKBETUNG TIMUR",
      },
      {
        id: "1871020",
        regency_id: "1871",
        name: "TELUK BETUNG SELATAN",
      },
      {
        id: "1871021",
        regency_id: "1871",
        name: "BUMI WARAS",
      },
      {
        id: "1871030",
        regency_id: "1871",
        name: "PANJANG",
      },
      {
        id: "1871040",
        regency_id: "1871",
        name: "TANJUNG KARANG TIMUR",
      },
      {
        id: "1871041",
        regency_id: "1871",
        name: "KEDAMAIAN",
      },
      {
        id: "1871050",
        regency_id: "1871",
        name: "TELUK BETUNG UTARA",
      },
      {
        id: "1871060",
        regency_id: "1871",
        name: "TANJUNG KARANG PUSAT",
      },
      {
        id: "1871061",
        regency_id: "1871",
        name: "ENGGAL",
      },
      {
        id: "1871070",
        regency_id: "1871",
        name: "TANJUNG KARANG BARAT",
      },
      {
        id: "1871071",
        regency_id: "1871",
        name: "KEMILING",
      },
      {
        id: "1871072",
        regency_id: "1871",
        name: "LANGKAPURA",
      },
      {
        id: "1871080",
        regency_id: "1871",
        name: "KEDATON",
      },
      {
        id: "1871081",
        regency_id: "1871",
        name: "RAJABASA",
      },
      {
        id: "1871082",
        regency_id: "1871",
        name: "TANJUNG SENANG",
      },
      {
        id: "1871083",
        regency_id: "1871",
        name: "LABUHAN RATU",
      },
      {
        id: "1871090",
        regency_id: "1871",
        name: "SUKARAME",
      },
      {
        id: "1871091",
        regency_id: "1871",
        name: "SUKABUMI",
      },
      {
        id: "1871092",
        regency_id: "1871",
        name: "WAY HALIM",
      },
      {
        id: "1872011",
        regency_id: "1872",
        name: "METRO SELATAN",
      },
      {
        id: "1872012",
        regency_id: "1872",
        name: "METRO BARAT",
      },
      {
        id: "1872021",
        regency_id: "1872",
        name: "METRO TIMUR",
      },
      {
        id: "1872022",
        regency_id: "1872",
        name: "METRO PUSAT",
      },
      {
        id: "1872023",
        regency_id: "1872",
        name: "METRO UTARA",
      },
      {
        id: "1901070",
        regency_id: "1901",
        name: "MENDO BARAT",
      },
      {
        id: "1901080",
        regency_id: "1901",
        name: "MERAWANG",
      },
      {
        id: "1901081",
        regency_id: "1901",
        name: "PUDING BESAR",
      },
      {
        id: "1901090",
        regency_id: "1901",
        name: "SUNGAI LIAT",
      },
      {
        id: "1901091",
        regency_id: "1901",
        name: "PEMALI",
      },
      {
        id: "1901092",
        regency_id: "1901",
        name: "BAKAM",
      },
      {
        id: "1901130",
        regency_id: "1901",
        name: "BELINYU",
      },
      {
        id: "1901131",
        regency_id: "1901",
        name: "RIAU SILIP",
      },
      {
        id: "1902010",
        regency_id: "1902",
        name: "MEMBALONG",
      },
      {
        id: "1902060",
        regency_id: "1902",
        name: "TANJUNG PANDAN",
      },
      {
        id: "1902061",
        regency_id: "1902",
        name: "BADAU",
      },
      {
        id: "1902062",
        regency_id: "1902",
        name: "SIJUK",
      },
      {
        id: "1902063",
        regency_id: "1902",
        name: "SELAT NASIK",
      },
      {
        id: "1903010",
        regency_id: "1903",
        name: "KELAPA",
      },
      {
        id: "1903020",
        regency_id: "1903",
        name: "TEMPILANG",
      },
      {
        id: "1903030",
        regency_id: "1903",
        name: "MENTOK",
      },
      {
        id: "1903040",
        regency_id: "1903",
        name: "SIMPANG TERITIP",
      },
      {
        id: "1903050",
        regency_id: "1903",
        name: "JEBUS",
      },
      {
        id: "1903051",
        regency_id: "1903",
        name: "PARITTIGA",
      },
      {
        id: "1904010",
        regency_id: "1904",
        name: "KOBA",
      },
      {
        id: "1904011",
        regency_id: "1904",
        name: "LUBUK BESAR",
      },
      {
        id: "1904020",
        regency_id: "1904",
        name: "PANGKALAN BARU",
      },
      {
        id: "1904021",
        regency_id: "1904",
        name: "NAMANG",
      },
      {
        id: "1904030",
        regency_id: "1904",
        name: "SUNGAI SELAN",
      },
      {
        id: "1904040",
        regency_id: "1904",
        name: "SIMPANG KATIS",
      },
      {
        id: "1905010",
        regency_id: "1905",
        name: "PAYUNG",
      },
      {
        id: "1905011",
        regency_id: "1905",
        name: "PULAU BESAR",
      },
      {
        id: "1905020",
        regency_id: "1905",
        name: "SIMPANG RIMBA",
      },
      {
        id: "1905030",
        regency_id: "1905",
        name: "TOBOALI",
      },
      {
        id: "1905031",
        regency_id: "1905",
        name: "TUKAK SADAI",
      },
      {
        id: "1905040",
        regency_id: "1905",
        name: "AIR GEGAS",
      },
      {
        id: "1905050",
        regency_id: "1905",
        name: "LEPAR PONGOK",
      },
      {
        id: "1905051",
        regency_id: "1905",
        name: "KEPULAUAN PONGOK",
      },
      {
        id: "1906010",
        regency_id: "1906",
        name: "DENDANG",
      },
      {
        id: "1906011",
        regency_id: "1906",
        name: "SIMPANG PESAK",
      },
      {
        id: "1906020",
        regency_id: "1906",
        name: "GANTUNG",
      },
      {
        id: "1906021",
        regency_id: "1906",
        name: "SIMPANG RENGGIANG",
      },
      {
        id: "1906030",
        regency_id: "1906",
        name: "MANGGAR",
      },
      {
        id: "1906031",
        regency_id: "1906",
        name: "DAMAR",
      },
      {
        id: "1906040",
        regency_id: "1906",
        name: "KELAPA KAMPIT",
      },
      {
        id: "1971010",
        regency_id: "1971",
        name: "RANGKUI",
      },
      {
        id: "1971020",
        regency_id: "1971",
        name: "BUKIT INTAN",
      },
      {
        id: "1971021",
        regency_id: "1971",
        name: "GIRIMAYA",
      },
      {
        id: "1971030",
        regency_id: "1971",
        name: "PANGKAL BALAM",
      },
      {
        id: "1971031",
        regency_id: "1971",
        name: "GABEK",
      },
      {
        id: "1971040",
        regency_id: "1971",
        name: "TAMAN SARI",
      },
      {
        id: "1971041",
        regency_id: "1971",
        name: "GERUNGGANG",
      },
      {
        id: "2101010",
        regency_id: "2101",
        name: "MORO",
      },
      {
        id: "2101011",
        regency_id: "2101",
        name: "DURAI",
      },
      {
        id: "2101020",
        regency_id: "2101",
        name: "KUNDUR",
      },
      {
        id: "2101021",
        regency_id: "2101",
        name: "KUNDUR UTARA",
      },
      {
        id: "2101022",
        regency_id: "2101",
        name: "KUNDUR BARAT",
      },
      {
        id: "2101023",
        regency_id: "2101",
        name: "UNGAR",
      },
      {
        id: "2101024",
        regency_id: "2101",
        name: "BELAT",
      },
      {
        id: "2101030",
        regency_id: "2101",
        name: "KARIMUN",
      },
      {
        id: "2101031",
        regency_id: "2101",
        name: "BURU",
      },
      {
        id: "2101032",
        regency_id: "2101",
        name: "MERAL",
      },
      {
        id: "2101033",
        regency_id: "2101",
        name: "TEBING",
      },
      {
        id: "2101034",
        regency_id: "2101",
        name: "MERAL BARAT",
      },
      {
        id: "2102040",
        regency_id: "2102",
        name: "TELUK BINTAN",
      },
      {
        id: "2102050",
        regency_id: "2102",
        name: "BINTAN UTARA",
      },
      {
        id: "2102051",
        regency_id: "2102",
        name: "TELUK SEBONG",
      },
      {
        id: "2102052",
        regency_id: "2102",
        name: "SERI KUALA LOBAM",
      },
      {
        id: "2102060",
        regency_id: "2102",
        name: "BINTAN TIMUR",
      },
      {
        id: "2102061",
        regency_id: "2102",
        name: "GUNUNG KIJANG",
      },
      {
        id: "2102062",
        regency_id: "2102",
        name: "MANTANG",
      },
      {
        id: "2102063",
        regency_id: "2102",
        name: "BINTAN PESISIR",
      },
      {
        id: "2102064",
        regency_id: "2102",
        name: "TOAPAYA",
      },
      {
        id: "2102070",
        regency_id: "2102",
        name: "TAMBELAN",
      },
      {
        id: "2103030",
        regency_id: "2103",
        name: "MIDAI",
      },
      {
        id: "2103031",
        regency_id: "2103",
        name: "SUAK MIDAI",
      },
      {
        id: "2103040",
        regency_id: "2103",
        name: "BUNGURAN BARAT",
      },
      {
        id: "2103041",
        regency_id: "2103",
        name: "BUNGURAN UTARA",
      },
      {
        id: "2103042",
        regency_id: "2103",
        name: "PULAU LAUT",
      },
      {
        id: "2103043",
        regency_id: "2103",
        name: "PULAU TIGA",
      },
      {
        id: "2103044",
        regency_id: "2103",
        name: "BUNGURAN BATUBI",
      },
      {
        id: "2103045",
        regency_id: "2103",
        name: "PULAU TIGA BARAT",
      },
      {
        id: "2103050",
        regency_id: "2103",
        name: "BUNGURAN TIMUR",
      },
      {
        id: "2103051",
        regency_id: "2103",
        name: "BUNGURAN TIMUR LAUT",
      },
      {
        id: "2103052",
        regency_id: "2103",
        name: "BUNGURAN TENGAH",
      },
      {
        id: "2103053",
        regency_id: "2103",
        name: "BUNGURAN SELATAN",
      },
      {
        id: "2103060",
        regency_id: "2103",
        name: "SERASAN",
      },
      {
        id: "2103061",
        regency_id: "2103",
        name: "SUBI",
      },
      {
        id: "2103062",
        regency_id: "2103",
        name: "SERASAN TIMUR",
      },
      {
        id: "2104010",
        regency_id: "2104",
        name: "SINGKEP BARAT",
      },
      {
        id: "2104011",
        regency_id: "2104",
        name: "KEPULAUAN POSEK",
      },
      {
        id: "2104020",
        regency_id: "2104",
        name: "SINGKEP",
      },
      {
        id: "2104021",
        regency_id: "2104",
        name: "SINGKEP SELATAN",
      },
      {
        id: "2104022",
        regency_id: "2104",
        name: "SINGKEP PESISIR",
      },
      {
        id: "2104030",
        regency_id: "2104",
        name: "LINGGA",
      },
      {
        id: "2104031",
        regency_id: "2104",
        name: "SELAYAR",
      },
      {
        id: "2104032",
        regency_id: "2104",
        name: "LINGGA TIMUR",
      },
      {
        id: "2104040",
        regency_id: "2104",
        name: "LINGGA UTARA",
      },
      {
        id: "2104050",
        regency_id: "2104",
        name: "SENAYANG",
      },
      {
        id: "2105010",
        regency_id: "2105",
        name: "JEMAJA",
      },
      {
        id: "2105020",
        regency_id: "2105",
        name: "JEMAJA TIMUR",
      },
      {
        id: "2105030",
        regency_id: "2105",
        name: "SIANTAN SELATAN",
      },
      {
        id: "2105040",
        regency_id: "2105",
        name: "SIANTAN",
      },
      {
        id: "2105050",
        regency_id: "2105",
        name: "SIANTAN TIMUR",
      },
      {
        id: "2105060",
        regency_id: "2105",
        name: "SIANTAN TENGAH",
      },
      {
        id: "2105070",
        regency_id: "2105",
        name: "PALMATAK",
      },
      {
        id: "2171010",
        regency_id: "2171",
        name: "BELAKANG PADANG",
      },
      {
        id: "2171020",
        regency_id: "2171",
        name: "BULANG",
      },
      {
        id: "2171030",
        regency_id: "2171",
        name: "GALANG",
      },
      {
        id: "2171040",
        regency_id: "2171",
        name: "SEI BEDUK",
      },
      {
        id: "2171041",
        regency_id: "2171",
        name: "SAGULUNG",
      },
      {
        id: "2171050",
        regency_id: "2171",
        name: "NONGSA",
      },
      {
        id: "2171051",
        regency_id: "2171",
        name: "BATAM KOTA",
      },
      {
        id: "2171060",
        regency_id: "2171",
        name: "SEKUPANG",
      },
      {
        id: "2171061",
        regency_id: "2171",
        name: "BATU AJI",
      },
      {
        id: "2171070",
        regency_id: "2171",
        name: "LUBUK BAJA",
      },
      {
        id: "2171080",
        regency_id: "2171",
        name: "BATU AMPAR",
      },
      {
        id: "2171081",
        regency_id: "2171",
        name: "BENGKONG",
      },
      {
        id: "2172010",
        regency_id: "2172",
        name: "BUKIT BESTARI",
      },
      {
        id: "2172020",
        regency_id: "2172",
        name: "TANJUNGPINANG TIMUR",
      },
      {
        id: "2172030",
        regency_id: "2172",
        name: "TANJUNGPINANG KOTA",
      },
      {
        id: "2172040",
        regency_id: "2172",
        name: "TANJUNGPINANG BARAT",
      },
      {
        id: "3101010",
        regency_id: "3101",
        name: "KEPULAUAN SERIBU SELATAN",
      },
      {
        id: "3101020",
        regency_id: "3101",
        name: "KEPULAUAN SERIBU UTARA",
      },
      {
        id: "3171010",
        regency_id: "3171",
        name: "JAGAKARSA",
      },
      {
        id: "3171020",
        regency_id: "3171",
        name: "PASAR MINGGU",
      },
      {
        id: "3171030",
        regency_id: "3171",
        name: "CILANDAK",
      },
      {
        id: "3171040",
        regency_id: "3171",
        name: "PESANGGRAHAN",
      },
      {
        id: "3171050",
        regency_id: "3171",
        name: "KEBAYORAN LAMA",
      },
      {
        id: "3171060",
        regency_id: "3171",
        name: "KEBAYORAN BARU",
      },
      {
        id: "3171070",
        regency_id: "3171",
        name: "MAMPANG PRAPATAN",
      },
      {
        id: "3171080",
        regency_id: "3171",
        name: "PANCORAN",
      },
      {
        id: "3171090",
        regency_id: "3171",
        name: "TEBET",
      },
      {
        id: "3171100",
        regency_id: "3171",
        name: "SETIA BUDI",
      },
      {
        id: "3172010",
        regency_id: "3172",
        name: "PASAR REBO",
      },
      {
        id: "3172020",
        regency_id: "3172",
        name: "CIRACAS",
      },
      {
        id: "3172030",
        regency_id: "3172",
        name: "CIPAYUNG",
      },
      {
        id: "3172040",
        regency_id: "3172",
        name: "MAKASAR",
      },
      {
        id: "3172050",
        regency_id: "3172",
        name: "KRAMAT JATI",
      },
      {
        id: "3172060",
        regency_id: "3172",
        name: "JATINEGARA",
      },
      {
        id: "3172070",
        regency_id: "3172",
        name: "DUREN SAWIT",
      },
      {
        id: "3172080",
        regency_id: "3172",
        name: "CAKUNG",
      },
      {
        id: "3172090",
        regency_id: "3172",
        name: "PULO GADUNG",
      },
      {
        id: "3172100",
        regency_id: "3172",
        name: "MATRAMAN",
      },
      {
        id: "3173010",
        regency_id: "3173",
        name: "TANAH ABANG",
      },
      {
        id: "3173020",
        regency_id: "3173",
        name: "MENTENG",
      },
      {
        id: "3173030",
        regency_id: "3173",
        name: "SENEN",
      },
      {
        id: "3173040",
        regency_id: "3173",
        name: "JOHAR BARU",
      },
      {
        id: "3173050",
        regency_id: "3173",
        name: "CEMPAKA PUTIH",
      },
      {
        id: "3173060",
        regency_id: "3173",
        name: "KEMAYORAN",
      },
      {
        id: "3173070",
        regency_id: "3173",
        name: "SAWAH BESAR",
      },
      {
        id: "3173080",
        regency_id: "3173",
        name: "GAMBIR",
      },
      {
        id: "3174010",
        regency_id: "3174",
        name: "KEMBANGAN",
      },
      {
        id: "3174020",
        regency_id: "3174",
        name: "KEBON JERUK",
      },
      {
        id: "3174030",
        regency_id: "3174",
        name: "PALMERAH",
      },
      {
        id: "3174040",
        regency_id: "3174",
        name: "GROGOL PETAMBURAN",
      },
      {
        id: "3174050",
        regency_id: "3174",
        name: "TAMBORA",
      },
      {
        id: "3174060",
        regency_id: "3174",
        name: "TAMAN SARI",
      },
      {
        id: "3174070",
        regency_id: "3174",
        name: "CENGKARENG",
      },
      {
        id: "3174080",
        regency_id: "3174",
        name: "KALI DERES",
      },
      {
        id: "3175010",
        regency_id: "3175",
        name: "PENJARINGAN",
      },
      {
        id: "3175020",
        regency_id: "3175",
        name: "PADEMANGAN",
      },
      {
        id: "3175030",
        regency_id: "3175",
        name: "TANJUNG PRIOK",
      },
      {
        id: "3175040",
        regency_id: "3175",
        name: "KOJA",
      },
      {
        id: "3175050",
        regency_id: "3175",
        name: "KELAPA GADING",
      },
      {
        id: "3175060",
        regency_id: "3175",
        name: "CILINCING",
      },
      {
        id: "3201010",
        regency_id: "3201",
        name: "NANGGUNG",
      },
      {
        id: "3201020",
        regency_id: "3201",
        name: "LEUWILIANG",
      },
      {
        id: "3201021",
        regency_id: "3201",
        name: "LEUWISADENG",
      },
      {
        id: "3201030",
        regency_id: "3201",
        name: "PAMIJAHAN",
      },
      {
        id: "3201040",
        regency_id: "3201",
        name: "CIBUNGBULANG",
      },
      {
        id: "3201050",
        regency_id: "3201",
        name: "CIAMPEA",
      },
      {
        id: "3201051",
        regency_id: "3201",
        name: "TENJOLAYA",
      },
      {
        id: "3201060",
        regency_id: "3201",
        name: "DRAMAGA",
      },
      {
        id: "3201070",
        regency_id: "3201",
        name: "CIOMAS",
      },
      {
        id: "3201071",
        regency_id: "3201",
        name: "TAMANSARI",
      },
      {
        id: "3201080",
        regency_id: "3201",
        name: "CIJERUK",
      },
      {
        id: "3201081",
        regency_id: "3201",
        name: "CIGOMBONG",
      },
      {
        id: "3201090",
        regency_id: "3201",
        name: "CARINGIN",
      },
      {
        id: "3201100",
        regency_id: "3201",
        name: "CIAWI",
      },
      {
        id: "3201110",
        regency_id: "3201",
        name: "CISARUA",
      },
      {
        id: "3201120",
        regency_id: "3201",
        name: "MEGAMENDUNG",
      },
      {
        id: "3201130",
        regency_id: "3201",
        name: "SUKARAJA",
      },
      {
        id: "3201140",
        regency_id: "3201",
        name: "BABAKAN MADANG",
      },
      {
        id: "3201150",
        regency_id: "3201",
        name: "SUKAMAKMUR",
      },
      {
        id: "3201160",
        regency_id: "3201",
        name: "CARIU",
      },
      {
        id: "3201161",
        regency_id: "3201",
        name: "TANJUNGSARI",
      },
      {
        id: "3201170",
        regency_id: "3201",
        name: "JONGGOL",
      },
      {
        id: "3201180",
        regency_id: "3201",
        name: "CILEUNGSI",
      },
      {
        id: "3201181",
        regency_id: "3201",
        name: "KELAPA NUNGGAL",
      },
      {
        id: "3201190",
        regency_id: "3201",
        name: "GUNUNG PUTRI",
      },
      {
        id: "3201200",
        regency_id: "3201",
        name: "CITEUREUP",
      },
      {
        id: "3201210",
        regency_id: "3201",
        name: "CIBINONG",
      },
      {
        id: "3201220",
        regency_id: "3201",
        name: "BOJONG GEDE",
      },
      {
        id: "3201221",
        regency_id: "3201",
        name: "TAJUR HALANG",
      },
      {
        id: "3201230",
        regency_id: "3201",
        name: "KEMANG",
      },
      {
        id: "3201231",
        regency_id: "3201",
        name: "RANCA BUNGUR",
      },
      {
        id: "3201240",
        regency_id: "3201",
        name: "PARUNG",
      },
      {
        id: "3201241",
        regency_id: "3201",
        name: "CISEENG",
      },
      {
        id: "3201250",
        regency_id: "3201",
        name: "GUNUNG SINDUR",
      },
      {
        id: "3201260",
        regency_id: "3201",
        name: "RUMPIN",
      },
      {
        id: "3201270",
        regency_id: "3201",
        name: "CIGUDEG",
      },
      {
        id: "3201271",
        regency_id: "3201",
        name: "SUKAJAYA",
      },
      {
        id: "3201280",
        regency_id: "3201",
        name: "JASINGA",
      },
      {
        id: "3201290",
        regency_id: "3201",
        name: "TENJO",
      },
      {
        id: "3201300",
        regency_id: "3201",
        name: "PARUNG PANJANG",
      },
      {
        id: "3202010",
        regency_id: "3202",
        name: "CIEMAS",
      },
      {
        id: "3202020",
        regency_id: "3202",
        name: "CIRACAP",
      },
      {
        id: "3202021",
        regency_id: "3202",
        name: "WALURAN",
      },
      {
        id: "3202030",
        regency_id: "3202",
        name: "SURADE",
      },
      {
        id: "3202031",
        regency_id: "3202",
        name: "CIBITUNG",
      },
      {
        id: "3202040",
        regency_id: "3202",
        name: "JAMPANG KULON",
      },
      {
        id: "3202041",
        regency_id: "3202",
        name: "CIMANGGU",
      },
      {
        id: "3202050",
        regency_id: "3202",
        name: "KALI BUNDER",
      },
      {
        id: "3202060",
        regency_id: "3202",
        name: "TEGAL BULEUD",
      },
      {
        id: "3202070",
        regency_id: "3202",
        name: "CIDOLOG",
      },
      {
        id: "3202080",
        regency_id: "3202",
        name: "SAGARANTEN",
      },
      {
        id: "3202081",
        regency_id: "3202",
        name: "CIDADAP",
      },
      {
        id: "3202082",
        regency_id: "3202",
        name: "CURUGKEMBAR",
      },
      {
        id: "3202090",
        regency_id: "3202",
        name: "PABUARAN",
      },
      {
        id: "3202100",
        regency_id: "3202",
        name: "LENGKONG",
      },
      {
        id: "3202110",
        regency_id: "3202",
        name: "PALABUHANRATU",
      },
      {
        id: "3202111",
        regency_id: "3202",
        name: "SIMPENAN",
      },
      {
        id: "3202120",
        regency_id: "3202",
        name: "WARUNG KIARA",
      },
      {
        id: "3202121",
        regency_id: "3202",
        name: "BANTARGADUNG",
      },
      {
        id: "3202130",
        regency_id: "3202",
        name: "JAMPANG TENGAH",
      },
      {
        id: "3202131",
        regency_id: "3202",
        name: "PURABAYA",
      },
      {
        id: "3202140",
        regency_id: "3202",
        name: "CIKEMBAR",
      },
      {
        id: "3202150",
        regency_id: "3202",
        name: "NYALINDUNG",
      },
      {
        id: "3202160",
        regency_id: "3202",
        name: "GEGER BITUNG",
      },
      {
        id: "3202170",
        regency_id: "3202",
        name: "SUKARAJA",
      },
      {
        id: "3202171",
        regency_id: "3202",
        name: "KEBONPEDES",
      },
      {
        id: "3202172",
        regency_id: "3202",
        name: "CIREUNGHAS",
      },
      {
        id: "3202173",
        regency_id: "3202",
        name: "SUKALARANG",
      },
      {
        id: "3202180",
        regency_id: "3202",
        name: "SUKABUMI",
      },
      {
        id: "3202190",
        regency_id: "3202",
        name: "KADUDAMPIT",
      },
      {
        id: "3202200",
        regency_id: "3202",
        name: "CISAAT",
      },
      {
        id: "3202201",
        regency_id: "3202",
        name: "GUNUNGGURUH",
      },
      {
        id: "3202210",
        regency_id: "3202",
        name: "CIBADAK",
      },
      {
        id: "3202211",
        regency_id: "3202",
        name: "CICANTAYAN",
      },
      {
        id: "3202212",
        regency_id: "3202",
        name: "CARINGIN",
      },
      {
        id: "3202220",
        regency_id: "3202",
        name: "NAGRAK",
      },
      {
        id: "3202221",
        regency_id: "3202",
        name: "CIAMBAR",
      },
      {
        id: "3202230",
        regency_id: "3202",
        name: "CICURUG",
      },
      {
        id: "3202240",
        regency_id: "3202",
        name: "CIDAHU",
      },
      {
        id: "3202250",
        regency_id: "3202",
        name: "PARAKAN SALAK",
      },
      {
        id: "3202260",
        regency_id: "3202",
        name: "PARUNG KUDA",
      },
      {
        id: "3202261",
        regency_id: "3202",
        name: "BOJONG GENTENG",
      },
      {
        id: "3202270",
        regency_id: "3202",
        name: "KALAPA NUNGGAL",
      },
      {
        id: "3202280",
        regency_id: "3202",
        name: "CIKIDANG",
      },
      {
        id: "3202290",
        regency_id: "3202",
        name: "CISOLOK",
      },
      {
        id: "3202291",
        regency_id: "3202",
        name: "CIKAKAK",
      },
      {
        id: "3202300",
        regency_id: "3202",
        name: "KABANDUNGAN",
      },
      {
        id: "3203010",
        regency_id: "3203",
        name: "AGRABINTA",
      },
      {
        id: "3203011",
        regency_id: "3203",
        name: "LELES",
      },
      {
        id: "3203020",
        regency_id: "3203",
        name: "SINDANGBARANG",
      },
      {
        id: "3203030",
        regency_id: "3203",
        name: "CIDAUN",
      },
      {
        id: "3203040",
        regency_id: "3203",
        name: "NARINGGUL",
      },
      {
        id: "3203050",
        regency_id: "3203",
        name: "CIBINONG",
      },
      {
        id: "3203051",
        regency_id: "3203",
        name: "CIKADU",
      },
      {
        id: "3203060",
        regency_id: "3203",
        name: "TANGGEUNG",
      },
      {
        id: "3203061",
        regency_id: "3203",
        name: "PASIRKUDA",
      },
      {
        id: "3203070",
        regency_id: "3203",
        name: "KADUPANDAK",
      },
      {
        id: "3203071",
        regency_id: "3203",
        name: "CIJATI",
      },
      {
        id: "3203080",
        regency_id: "3203",
        name: "TAKOKAK",
      },
      {
        id: "3203090",
        regency_id: "3203",
        name: "SUKANAGARA",
      },
      {
        id: "3203100",
        regency_id: "3203",
        name: "PAGELARAN",
      },
      {
        id: "3203110",
        regency_id: "3203",
        name: "CAMPAKA",
      },
      {
        id: "3203111",
        regency_id: "3203",
        name: "CAMPAKA MULYA",
      },
      {
        id: "3203120",
        regency_id: "3203",
        name: "CIBEBER",
      },
      {
        id: "3203130",
        regency_id: "3203",
        name: "WARUNGKONDANG",
      },
      {
        id: "3203131",
        regency_id: "3203",
        name: "GEKBRONG",
      },
      {
        id: "3203140",
        regency_id: "3203",
        name: "CILAKU",
      },
      {
        id: "3203150",
        regency_id: "3203",
        name: "SUKALUYU",
      },
      {
        id: "3203160",
        regency_id: "3203",
        name: "BOJONGPICUNG",
      },
      {
        id: "3203161",
        regency_id: "3203",
        name: "HAURWANGI",
      },
      {
        id: "3203170",
        regency_id: "3203",
        name: "CIRANJANG",
      },
      {
        id: "3203180",
        regency_id: "3203",
        name: "MANDE",
      },
      {
        id: "3203190",
        regency_id: "3203",
        name: "KARANGTENGAH",
      },
      {
        id: "3203200",
        regency_id: "3203",
        name: "CIANJUR",
      },
      {
        id: "3203210",
        regency_id: "3203",
        name: "CUGENANG",
      },
      {
        id: "3203220",
        regency_id: "3203",
        name: "PACET",
      },
      {
        id: "3203221",
        regency_id: "3203",
        name: "CIPANAS",
      },
      {
        id: "3203230",
        regency_id: "3203",
        name: "SUKARESMI",
      },
      {
        id: "3203240",
        regency_id: "3203",
        name: "CIKALONGKULON",
      },
      {
        id: "3204010",
        regency_id: "3204",
        name: "CIWIDEY",
      },
      {
        id: "3204011",
        regency_id: "3204",
        name: "RANCABALI",
      },
      {
        id: "3204020",
        regency_id: "3204",
        name: "PASIRJAMBU",
      },
      {
        id: "3204030",
        regency_id: "3204",
        name: "CIMAUNG",
      },
      {
        id: "3204040",
        regency_id: "3204",
        name: "PANGALENGAN",
      },
      {
        id: "3204050",
        regency_id: "3204",
        name: "KERTASARI",
      },
      {
        id: "3204060",
        regency_id: "3204",
        name: "PACET",
      },
      {
        id: "3204070",
        regency_id: "3204",
        name: "IBUN",
      },
      {
        id: "3204080",
        regency_id: "3204",
        name: "PASEH",
      },
      {
        id: "3204090",
        regency_id: "3204",
        name: "CIKANCUNG",
      },
      {
        id: "3204100",
        regency_id: "3204",
        name: "CICALENGKA",
      },
      {
        id: "3204101",
        regency_id: "3204",
        name: "NAGREG",
      },
      {
        id: "3204110",
        regency_id: "3204",
        name: "RANCAEKEK",
      },
      {
        id: "3204120",
        regency_id: "3204",
        name: "MAJALAYA",
      },
      {
        id: "3204121",
        regency_id: "3204",
        name: "SOLOKAN JERUK",
      },
      {
        id: "3204130",
        regency_id: "3204",
        name: "CIPARAY",
      },
      {
        id: "3204140",
        regency_id: "3204",
        name: "BALEENDAH",
      },
      {
        id: "3204150",
        regency_id: "3204",
        name: "ARJASARI",
      },
      {
        id: "3204160",
        regency_id: "3204",
        name: "BANJARAN",
      },
      {
        id: "3204161",
        regency_id: "3204",
        name: "CANGKUANG",
      },
      {
        id: "3204170",
        regency_id: "3204",
        name: "PAMEUNGPEUK",
      },
      {
        id: "3204180",
        regency_id: "3204",
        name: "KATAPANG",
      },
      {
        id: "3204190",
        regency_id: "3204",
        name: "SOREANG",
      },
      {
        id: "3204191",
        regency_id: "3204",
        name: "KUTAWARINGIN",
      },
      {
        id: "3204250",
        regency_id: "3204",
        name: "MARGAASIH",
      },
      {
        id: "3204260",
        regency_id: "3204",
        name: "MARGAHAYU",
      },
      {
        id: "3204270",
        regency_id: "3204",
        name: "DAYEUHKOLOT",
      },
      {
        id: "3204280",
        regency_id: "3204",
        name: "BOJONGSOANG",
      },
      {
        id: "3204290",
        regency_id: "3204",
        name: "CILEUNYI",
      },
      {
        id: "3204300",
        regency_id: "3204",
        name: "CILENGKRANG",
      },
      {
        id: "3204310",
        regency_id: "3204",
        name: "CIMENYAN",
      },
      {
        id: "3205010",
        regency_id: "3205",
        name: "CISEWU",
      },
      {
        id: "3205011",
        regency_id: "3205",
        name: "CARINGIN",
      },
      {
        id: "3205020",
        regency_id: "3205",
        name: "TALEGONG",
      },
      {
        id: "3205030",
        regency_id: "3205",
        name: "BUNGBULANG",
      },
      {
        id: "3205031",
        regency_id: "3205",
        name: "MEKARMUKTI",
      },
      {
        id: "3205040",
        regency_id: "3205",
        name: "PAMULIHAN",
      },
      {
        id: "3205050",
        regency_id: "3205",
        name: "PAKENJENG",
      },
      {
        id: "3205060",
        regency_id: "3205",
        name: "CIKELET",
      },
      {
        id: "3205070",
        regency_id: "3205",
        name: "PAMEUNGPEUK",
      },
      {
        id: "3205080",
        regency_id: "3205",
        name: "CIBALONG",
      },
      {
        id: "3205090",
        regency_id: "3205",
        name: "CISOMPET",
      },
      {
        id: "3205100",
        regency_id: "3205",
        name: "PEUNDEUY",
      },
      {
        id: "3205110",
        regency_id: "3205",
        name: "SINGAJAYA",
      },
      {
        id: "3205111",
        regency_id: "3205",
        name: "CIHURIP",
      },
      {
        id: "3205120",
        regency_id: "3205",
        name: "CIKAJANG",
      },
      {
        id: "3205130",
        regency_id: "3205",
        name: "BANJARWANGI",
      },
      {
        id: "3205140",
        regency_id: "3205",
        name: "CILAWU",
      },
      {
        id: "3205150",
        regency_id: "3205",
        name: "BAYONGBONG",
      },
      {
        id: "3205151",
        regency_id: "3205",
        name: "CIGEDUG",
      },
      {
        id: "3205160",
        regency_id: "3205",
        name: "CISURUPAN",
      },
      {
        id: "3205161",
        regency_id: "3205",
        name: "SUKARESMI",
      },
      {
        id: "3205170",
        regency_id: "3205",
        name: "SAMARANG",
      },
      {
        id: "3205171",
        regency_id: "3205",
        name: "PASIRWANGI",
      },
      {
        id: "3205181",
        regency_id: "3205",
        name: "TAROGONG KIDUL",
      },
      {
        id: "3205182",
        regency_id: "3205",
        name: "TAROGONG KALER",
      },
      {
        id: "3205190",
        regency_id: "3205",
        name: "GARUT KOTA",
      },
      {
        id: "3205200",
        regency_id: "3205",
        name: "KARANGPAWITAN",
      },
      {
        id: "3205210",
        regency_id: "3205",
        name: "WANARAJA",
      },
      {
        id: "3205211",
        regency_id: "3205",
        name: "SUCINARAJA",
      },
      {
        id: "3205212",
        regency_id: "3205",
        name: "PANGATIKAN",
      },
      {
        id: "3205220",
        regency_id: "3205",
        name: "SUKAWENING",
      },
      {
        id: "3205221",
        regency_id: "3205",
        name: "KARANGTENGAH",
      },
      {
        id: "3205230",
        regency_id: "3205",
        name: "BANYURESMI",
      },
      {
        id: "3205240",
        regency_id: "3205",
        name: "LELES",
      },
      {
        id: "3205250",
        regency_id: "3205",
        name: "LEUWIGOONG",
      },
      {
        id: "3205260",
        regency_id: "3205",
        name: "CIBATU",
      },
      {
        id: "3205261",
        regency_id: "3205",
        name: "KERSAMANAH",
      },
      {
        id: "3205270",
        regency_id: "3205",
        name: "CIBIUK",
      },
      {
        id: "3205280",
        regency_id: "3205",
        name: "KADUNGORA",
      },
      {
        id: "3205290",
        regency_id: "3205",
        name: "BLUBUR LIMBANGAN",
      },
      {
        id: "3205300",
        regency_id: "3205",
        name: "SELAAWI",
      },
      {
        id: "3205310",
        regency_id: "3205",
        name: "MALANGBONG",
      },
      {
        id: "3206010",
        regency_id: "3206",
        name: "CIPATUJAH",
      },
      {
        id: "3206020",
        regency_id: "3206",
        name: "KARANGNUNGGAL",
      },
      {
        id: "3206030",
        regency_id: "3206",
        name: "CIKALONG",
      },
      {
        id: "3206040",
        regency_id: "3206",
        name: "PANCATENGAH",
      },
      {
        id: "3206050",
        regency_id: "3206",
        name: "CIKATOMAS",
      },
      {
        id: "3206060",
        regency_id: "3206",
        name: "CIBALONG",
      },
      {
        id: "3206061",
        regency_id: "3206",
        name: "PARUNGPONTENG",
      },
      {
        id: "3206070",
        regency_id: "3206",
        name: "BANTARKALONG",
      },
      {
        id: "3206071",
        regency_id: "3206",
        name: "BOJONGASIH",
      },
      {
        id: "3206072",
        regency_id: "3206",
        name: "CULAMEGA",
      },
      {
        id: "3206080",
        regency_id: "3206",
        name: "BOJONGGAMBIR",
      },
      {
        id: "3206090",
        regency_id: "3206",
        name: "SODONGHILIR",
      },
      {
        id: "3206100",
        regency_id: "3206",
        name: "TARAJU",
      },
      {
        id: "3206110",
        regency_id: "3206",
        name: "SALAWU",
      },
      {
        id: "3206111",
        regency_id: "3206",
        name: "PUSPAHIANG",
      },
      {
        id: "3206120",
        regency_id: "3206",
        name: "TANJUNGJAYA",
      },
      {
        id: "3206130",
        regency_id: "3206",
        name: "SUKARAJA",
      },
      {
        id: "3206140",
        regency_id: "3206",
        name: "SALOPA",
      },
      {
        id: "3206141",
        regency_id: "3206",
        name: "JATIWARAS",
      },
      {
        id: "3206150",
        regency_id: "3206",
        name: "CINEAM",
      },
      {
        id: "3206151",
        regency_id: "3206",
        name: "KARANGJAYA",
      },
      {
        id: "3206160",
        regency_id: "3206",
        name: "MANONJAYA",
      },
      {
        id: "3206161",
        regency_id: "3206",
        name: "GUNUNGTANJUNG",
      },
      {
        id: "3206190",
        regency_id: "3206",
        name: "SINGAPARNA",
      },
      {
        id: "3206191",
        regency_id: "3206",
        name: "SUKARAME",
      },
      {
        id: "3206192",
        regency_id: "3206",
        name: "MANGUNREJA",
      },
      {
        id: "3206200",
        regency_id: "3206",
        name: "CIGALONTANG",
      },
      {
        id: "3206210",
        regency_id: "3206",
        name: "LEUWISARI",
      },
      {
        id: "3206211",
        regency_id: "3206",
        name: "SARIWANGI",
      },
      {
        id: "3206212",
        regency_id: "3206",
        name: "PADAKEMBANG",
      },
      {
        id: "3206221",
        regency_id: "3206",
        name: "SUKARATU",
      },
      {
        id: "3206230",
        regency_id: "3206",
        name: "CISAYONG",
      },
      {
        id: "3206231",
        regency_id: "3206",
        name: "SUKAHENING",
      },
      {
        id: "3206240",
        regency_id: "3206",
        name: "RAJAPOLAH",
      },
      {
        id: "3206250",
        regency_id: "3206",
        name: "JAMANIS",
      },
      {
        id: "3206260",
        regency_id: "3206",
        name: "CIAWI",
      },
      {
        id: "3206261",
        regency_id: "3206",
        name: "KADIPATEN",
      },
      {
        id: "3206270",
        regency_id: "3206",
        name: "PAGERAGEUNG",
      },
      {
        id: "3206271",
        regency_id: "3206",
        name: "SUKARESIK",
      },
      {
        id: "3207100",
        regency_id: "3207",
        name: "BANJARSARI",
      },
      {
        id: "3207101",
        regency_id: "3207",
        name: "BANJARANYAR",
      },
      {
        id: "3207110",
        regency_id: "3207",
        name: "LAKBOK",
      },
      {
        id: "3207111",
        regency_id: "3207",
        name: "PURWADADI",
      },
      {
        id: "3207120",
        regency_id: "3207",
        name: "PAMARICAN",
      },
      {
        id: "3207130",
        regency_id: "3207",
        name: "CIDOLOG",
      },
      {
        id: "3207140",
        regency_id: "3207",
        name: "CIMARAGAS",
      },
      {
        id: "3207150",
        regency_id: "3207",
        name: "CIJEUNGJING",
      },
      {
        id: "3207160",
        regency_id: "3207",
        name: "CISAGA",
      },
      {
        id: "3207170",
        regency_id: "3207",
        name: "TAMBAKSARI",
      },
      {
        id: "3207180",
        regency_id: "3207",
        name: "RANCAH",
      },
      {
        id: "3207190",
        regency_id: "3207",
        name: "RAJADESA",
      },
      {
        id: "3207200",
        regency_id: "3207",
        name: "SUKADANA",
      },
      {
        id: "3207210",
        regency_id: "3207",
        name: "CIAMIS",
      },
      {
        id: "3207211",
        regency_id: "3207",
        name: "BAREGBEG",
      },
      {
        id: "3207220",
        regency_id: "3207",
        name: "CIKONENG",
      },
      {
        id: "3207221",
        regency_id: "3207",
        name: "SINDANGKASIH",
      },
      {
        id: "3207230",
        regency_id: "3207",
        name: "CIHAURBEUTI",
      },
      {
        id: "3207240",
        regency_id: "3207",
        name: "SADANANYA",
      },
      {
        id: "3207250",
        regency_id: "3207",
        name: "CIPAKU",
      },
      {
        id: "3207260",
        regency_id: "3207",
        name: "JATINAGARA",
      },
      {
        id: "3207270",
        regency_id: "3207",
        name: "PANAWANGAN",
      },
      {
        id: "3207280",
        regency_id: "3207",
        name: "KAWALI",
      },
      {
        id: "3207281",
        regency_id: "3207",
        name: "LUMBUNG",
      },
      {
        id: "3207290",
        regency_id: "3207",
        name: "PANJALU",
      },
      {
        id: "3207291",
        regency_id: "3207",
        name: "SUKAMANTRI",
      },
      {
        id: "3207300",
        regency_id: "3207",
        name: "PANUMBANGAN",
      },
      {
        id: "3208010",
        regency_id: "3208",
        name: "DARMA",
      },
      {
        id: "3208020",
        regency_id: "3208",
        name: "KADUGEDE",
      },
      {
        id: "3208021",
        regency_id: "3208",
        name: "NUSAHERANG",
      },
      {
        id: "3208030",
        regency_id: "3208",
        name: "CINIRU",
      },
      {
        id: "3208031",
        regency_id: "3208",
        name: "HANTARA",
      },
      {
        id: "3208040",
        regency_id: "3208",
        name: "SELAJAMBE",
      },
      {
        id: "3208050",
        regency_id: "3208",
        name: "SUBANG",
      },
      {
        id: "3208051",
        regency_id: "3208",
        name: "CILEBAK",
      },
      {
        id: "3208060",
        regency_id: "3208",
        name: "CIWARU",
      },
      {
        id: "3208061",
        regency_id: "3208",
        name: "KARANGKANCANA",
      },
      {
        id: "3208070",
        regency_id: "3208",
        name: "CIBINGBIN",
      },
      {
        id: "3208071",
        regency_id: "3208",
        name: "CIBEUREUM",
      },
      {
        id: "3208080",
        regency_id: "3208",
        name: "LURAGUNG",
      },
      {
        id: "3208081",
        regency_id: "3208",
        name: "CIMAHI",
      },
      {
        id: "3208090",
        regency_id: "3208",
        name: "CIDAHU",
      },
      {
        id: "3208091",
        regency_id: "3208",
        name: "KALIMANGGIS",
      },
      {
        id: "3208100",
        regency_id: "3208",
        name: "CIAWIGEBANG",
      },
      {
        id: "3208101",
        regency_id: "3208",
        name: "CIPICUNG",
      },
      {
        id: "3208110",
        regency_id: "3208",
        name: "LEBAKWANGI",
      },
      {
        id: "3208111",
        regency_id: "3208",
        name: "MALEBER",
      },
      {
        id: "3208120",
        regency_id: "3208",
        name: "GARAWANGI",
      },
      {
        id: "3208121",
        regency_id: "3208",
        name: "SINDANGAGUNG",
      },
      {
        id: "3208130",
        regency_id: "3208",
        name: "KUNINGAN",
      },
      {
        id: "3208140",
        regency_id: "3208",
        name: "CIGUGUR",
      },
      {
        id: "3208150",
        regency_id: "3208",
        name: "KRAMATMULYA",
      },
      {
        id: "3208160",
        regency_id: "3208",
        name: "JALAKSANA",
      },
      {
        id: "3208161",
        regency_id: "3208",
        name: "JAPARA",
      },
      {
        id: "3208170",
        regency_id: "3208",
        name: "CILIMUS",
      },
      {
        id: "3208171",
        regency_id: "3208",
        name: "CIGANDAMEKAR",
      },
      {
        id: "3208180",
        regency_id: "3208",
        name: "MANDIRANCAN",
      },
      {
        id: "3208181",
        regency_id: "3208",
        name: "PANCALANG",
      },
      {
        id: "3208190",
        regency_id: "3208",
        name: "PASAWAHAN",
      },
      {
        id: "3209010",
        regency_id: "3209",
        name: "WALED",
      },
      {
        id: "3209011",
        regency_id: "3209",
        name: "PASALEMAN",
      },
      {
        id: "3209020",
        regency_id: "3209",
        name: "CILEDUG",
      },
      {
        id: "3209021",
        regency_id: "3209",
        name: "PABUARAN",
      },
      {
        id: "3209030",
        regency_id: "3209",
        name: "LOSARI",
      },
      {
        id: "3209031",
        regency_id: "3209",
        name: "PABEDILAN",
      },
      {
        id: "3209040",
        regency_id: "3209",
        name: "BABAKAN",
      },
      {
        id: "3209041",
        regency_id: "3209",
        name: "GEBANG",
      },
      {
        id: "3209050",
        regency_id: "3209",
        name: "KARANGSEMBUNG",
      },
      {
        id: "3209051",
        regency_id: "3209",
        name: "KARANGWARENG",
      },
      {
        id: "3209060",
        regency_id: "3209",
        name: "LEMAHABANG",
      },
      {
        id: "3209061",
        regency_id: "3209",
        name: "SUSUKANLEBAK",
      },
      {
        id: "3209070",
        regency_id: "3209",
        name: "SEDONG",
      },
      {
        id: "3209080",
        regency_id: "3209",
        name: "ASTANAJAPURA",
      },
      {
        id: "3209081",
        regency_id: "3209",
        name: "PANGENAN",
      },
      {
        id: "3209090",
        regency_id: "3209",
        name: "MUNDU",
      },
      {
        id: "3209100",
        regency_id: "3209",
        name: "BEBER",
      },
      {
        id: "3209101",
        regency_id: "3209",
        name: "GREGED",
      },
      {
        id: "3209111",
        regency_id: "3209",
        name: "TALUN",
      },
      {
        id: "3209120",
        regency_id: "3209",
        name: "SUMBER",
      },
      {
        id: "3209121",
        regency_id: "3209",
        name: "DUKUPUNTANG",
      },
      {
        id: "3209130",
        regency_id: "3209",
        name: "PALIMANAN",
      },
      {
        id: "3209140",
        regency_id: "3209",
        name: "PLUMBON",
      },
      {
        id: "3209141",
        regency_id: "3209",
        name: "DEPOK",
      },
      {
        id: "3209150",
        regency_id: "3209",
        name: "WERU",
      },
      {
        id: "3209151",
        regency_id: "3209",
        name: "PLERED",
      },
      {
        id: "3209161",
        regency_id: "3209",
        name: "TENGAH TANI",
      },
      {
        id: "3209162",
        regency_id: "3209",
        name: "KEDAWUNG",
      },
      {
        id: "3209171",
        regency_id: "3209",
        name: "GUNUNGJATI",
      },
      {
        id: "3209180",
        regency_id: "3209",
        name: "KAPETAKAN",
      },
      {
        id: "3209181",
        regency_id: "3209",
        name: "SURANENGGALA",
      },
      {
        id: "3209190",
        regency_id: "3209",
        name: "KLANGENAN",
      },
      {
        id: "3209191",
        regency_id: "3209",
        name: "JAMBLANG",
      },
      {
        id: "3209200",
        regency_id: "3209",
        name: "ARJAWINANGUN",
      },
      {
        id: "3209201",
        regency_id: "3209",
        name: "PANGURAGAN",
      },
      {
        id: "3209210",
        regency_id: "3209",
        name: "CIWARINGIN",
      },
      {
        id: "3209211",
        regency_id: "3209",
        name: "GEMPOL",
      },
      {
        id: "3209220",
        regency_id: "3209",
        name: "SUSUKAN",
      },
      {
        id: "3209230",
        regency_id: "3209",
        name: "GEGESIK",
      },
      {
        id: "3209231",
        regency_id: "3209",
        name: "KALIWEDI",
      },
      {
        id: "3210010",
        regency_id: "3210",
        name: "LEMAHSUGIH",
      },
      {
        id: "3210020",
        regency_id: "3210",
        name: "BANTARUJEG",
      },
      {
        id: "3210021",
        regency_id: "3210",
        name: "MALAUSMA",
      },
      {
        id: "3210030",
        regency_id: "3210",
        name: "CIKIJING",
      },
      {
        id: "3210031",
        regency_id: "3210",
        name: "CINGAMBUL",
      },
      {
        id: "3210040",
        regency_id: "3210",
        name: "TALAGA",
      },
      {
        id: "3210041",
        regency_id: "3210",
        name: "BANJARAN",
      },
      {
        id: "3210050",
        regency_id: "3210",
        name: "ARGAPURA",
      },
      {
        id: "3210060",
        regency_id: "3210",
        name: "MAJA",
      },
      {
        id: "3210070",
        regency_id: "3210",
        name: "MAJALENGKA",
      },
      {
        id: "3210080",
        regency_id: "3210",
        name: "CIGASONG",
      },
      {
        id: "3210090",
        regency_id: "3210",
        name: "SUKAHAJI",
      },
      {
        id: "3210091",
        regency_id: "3210",
        name: "SINDANG",
      },
      {
        id: "3210100",
        regency_id: "3210",
        name: "RAJAGALUH",
      },
      {
        id: "3210110",
        regency_id: "3210",
        name: "SINDANGWANGI",
      },
      {
        id: "3210120",
        regency_id: "3210",
        name: "LEUWIMUNDING",
      },
      {
        id: "3210130",
        regency_id: "3210",
        name: "PALASAH",
      },
      {
        id: "3210140",
        regency_id: "3210",
        name: "JATIWANGI",
      },
      {
        id: "3210150",
        regency_id: "3210",
        name: "DAWUAN",
      },
      {
        id: "3210151",
        regency_id: "3210",
        name: "KASOKANDEL",
      },
      {
        id: "3210160",
        regency_id: "3210",
        name: "PANYINGKIRAN",
      },
      {
        id: "3210170",
        regency_id: "3210",
        name: "KADIPATEN",
      },
      {
        id: "3210180",
        regency_id: "3210",
        name: "KERTAJATI",
      },
      {
        id: "3210190",
        regency_id: "3210",
        name: "JATITUJUH",
      },
      {
        id: "3210200",
        regency_id: "3210",
        name: "LIGUNG",
      },
      {
        id: "3210210",
        regency_id: "3210",
        name: "SUMBERJAYA",
      },
      {
        id: "3211010",
        regency_id: "3211",
        name: "JATINANGOR",
      },
      {
        id: "3211020",
        regency_id: "3211",
        name: "CIMANGGUNG",
      },
      {
        id: "3211030",
        regency_id: "3211",
        name: "TANJUNGSARI",
      },
      {
        id: "3211031",
        regency_id: "3211",
        name: "SUKASARI",
      },
      {
        id: "3211032",
        regency_id: "3211",
        name: "PAMULIHAN",
      },
      {
        id: "3211040",
        regency_id: "3211",
        name: "RANCAKALONG",
      },
      {
        id: "3211050",
        regency_id: "3211",
        name: "SUMEDANG SELATAN",
      },
      {
        id: "3211060",
        regency_id: "3211",
        name: "SUMEDANG UTARA",
      },
      {
        id: "3211061",
        regency_id: "3211",
        name: "GANEAS",
      },
      {
        id: "3211070",
        regency_id: "3211",
        name: "SITURAJA",
      },
      {
        id: "3211071",
        regency_id: "3211",
        name: "CISITU",
      },
      {
        id: "3211080",
        regency_id: "3211",
        name: "DARMARAJA",
      },
      {
        id: "3211090",
        regency_id: "3211",
        name: "CIBUGEL",
      },
      {
        id: "3211100",
        regency_id: "3211",
        name: "WADO",
      },
      {
        id: "3211101",
        regency_id: "3211",
        name: "JATINUNGGAL",
      },
      {
        id: "3211111",
        regency_id: "3211",
        name: "JATIGEDE",
      },
      {
        id: "3211120",
        regency_id: "3211",
        name: "TOMO",
      },
      {
        id: "3211130",
        regency_id: "3211",
        name: "UJUNG JAYA",
      },
      {
        id: "3211140",
        regency_id: "3211",
        name: "CONGGEANG",
      },
      {
        id: "3211150",
        regency_id: "3211",
        name: "PASEH",
      },
      {
        id: "3211160",
        regency_id: "3211",
        name: "CIMALAKA",
      },
      {
        id: "3211161",
        regency_id: "3211",
        name: "CISARUA",
      },
      {
        id: "3211170",
        regency_id: "3211",
        name: "TANJUNGKERTA",
      },
      {
        id: "3211171",
        regency_id: "3211",
        name: "TANJUNGMEDAR",
      },
      {
        id: "3211180",
        regency_id: "3211",
        name: "BUAHDUA",
      },
      {
        id: "3211181",
        regency_id: "3211",
        name: "SURIAN",
      },
      {
        id: "3212010",
        regency_id: "3212",
        name: "HAURGEULIS",
      },
      {
        id: "3212011",
        regency_id: "3212",
        name: "GANTAR",
      },
      {
        id: "3212020",
        regency_id: "3212",
        name: "KROYA",
      },
      {
        id: "3212030",
        regency_id: "3212",
        name: "GABUSWETAN",
      },
      {
        id: "3212040",
        regency_id: "3212",
        name: "CIKEDUNG",
      },
      {
        id: "3212041",
        regency_id: "3212",
        name: "TERISI",
      },
      {
        id: "3212050",
        regency_id: "3212",
        name: "LELEA",
      },
      {
        id: "3212060",
        regency_id: "3212",
        name: "BANGODUA",
      },
      {
        id: "3212061",
        regency_id: "3212",
        name: "TUKDANA",
      },
      {
        id: "3212070",
        regency_id: "3212",
        name: "WIDASARI",
      },
      {
        id: "3212080",
        regency_id: "3212",
        name: "KERTASEMAYA",
      },
      {
        id: "3212081",
        regency_id: "3212",
        name: "SUKAGUMIWANG",
      },
      {
        id: "3212090",
        regency_id: "3212",
        name: "KRANGKENG",
      },
      {
        id: "3212100",
        regency_id: "3212",
        name: "KARANGAMPEL",
      },
      {
        id: "3212101",
        regency_id: "3212",
        name: "KEDOKAN BUNDER",
      },
      {
        id: "3212110",
        regency_id: "3212",
        name: "JUNTINYUAT",
      },
      {
        id: "3212120",
        regency_id: "3212",
        name: "SLIYEG",
      },
      {
        id: "3212130",
        regency_id: "3212",
        name: "JATIBARANG",
      },
      {
        id: "3212140",
        regency_id: "3212",
        name: "BALONGAN",
      },
      {
        id: "3212150",
        regency_id: "3212",
        name: "INDRAMAYU",
      },
      {
        id: "3212160",
        regency_id: "3212",
        name: "SINDANG",
      },
      {
        id: "3212161",
        regency_id: "3212",
        name: "CANTIGI",
      },
      {
        id: "3212162",
        regency_id: "3212",
        name: "PASEKAN",
      },
      {
        id: "3212170",
        regency_id: "3212",
        name: "LOHBENER",
      },
      {
        id: "3212171",
        regency_id: "3212",
        name: "ARAHAN",
      },
      {
        id: "3212180",
        regency_id: "3212",
        name: "LOSARANG",
      },
      {
        id: "3212190",
        regency_id: "3212",
        name: "KANDANGHAUR",
      },
      {
        id: "3212200",
        regency_id: "3212",
        name: "BONGAS",
      },
      {
        id: "3212210",
        regency_id: "3212",
        name: "ANJATAN",
      },
      {
        id: "3212220",
        regency_id: "3212",
        name: "SUKRA",
      },
      {
        id: "3212221",
        regency_id: "3212",
        name: "PATROL",
      },
      {
        id: "3213010",
        regency_id: "3213",
        name: "SAGALAHERANG",
      },
      {
        id: "3213011",
        regency_id: "3213",
        name: "SERANGPANJANG",
      },
      {
        id: "3213020",
        regency_id: "3213",
        name: "JALANCAGAK",
      },
      {
        id: "3213021",
        regency_id: "3213",
        name: "CIATER",
      },
      {
        id: "3213030",
        regency_id: "3213",
        name: "CISALAK",
      },
      {
        id: "3213031",
        regency_id: "3213",
        name: "KASOMALANG",
      },
      {
        id: "3213040",
        regency_id: "3213",
        name: "TANJUNGSIANG",
      },
      {
        id: "3213050",
        regency_id: "3213",
        name: "CIJAMBE",
      },
      {
        id: "3213060",
        regency_id: "3213",
        name: "CIBOGO",
      },
      {
        id: "3213070",
        regency_id: "3213",
        name: "SUBANG",
      },
      {
        id: "3213080",
        regency_id: "3213",
        name: "KALIJATI",
      },
      {
        id: "3213081",
        regency_id: "3213",
        name: "DAWUAN",
      },
      {
        id: "3213090",
        regency_id: "3213",
        name: "CIPEUNDEUY",
      },
      {
        id: "3213100",
        regency_id: "3213",
        name: "PABUARAN",
      },
      {
        id: "3213110",
        regency_id: "3213",
        name: "PATOKBEUSI",
      },
      {
        id: "3213120",
        regency_id: "3213",
        name: "PURWADADI",
      },
      {
        id: "3213130",
        regency_id: "3213",
        name: "CIKAUM",
      },
      {
        id: "3213140",
        regency_id: "3213",
        name: "PAGADEN",
      },
      {
        id: "3213141",
        regency_id: "3213",
        name: "PAGADEN BARAT",
      },
      {
        id: "3213150",
        regency_id: "3213",
        name: "CIPUNAGARA",
      },
      {
        id: "3213160",
        regency_id: "3213",
        name: "COMPRENG",
      },
      {
        id: "3213170",
        regency_id: "3213",
        name: "BINONG",
      },
      {
        id: "3213171",
        regency_id: "3213",
        name: "TAMBAKDAHAN",
      },
      {
        id: "3213180",
        regency_id: "3213",
        name: "CIASEM",
      },
      {
        id: "3213190",
        regency_id: "3213",
        name: "PAMANUKAN",
      },
      {
        id: "3213191",
        regency_id: "3213",
        name: "SUKASARI",
      },
      {
        id: "3213200",
        regency_id: "3213",
        name: "PUSAKANAGARA",
      },
      {
        id: "3213201",
        regency_id: "3213",
        name: "PUSAKAJAYA",
      },
      {
        id: "3213210",
        regency_id: "3213",
        name: "LEGONKULON",
      },
      {
        id: "3213220",
        regency_id: "3213",
        name: "BLANAKAN",
      },
      {
        id: "3214010",
        regency_id: "3214",
        name: "JATILUHUR",
      },
      {
        id: "3214011",
        regency_id: "3214",
        name: "SUKASARI",
      },
      {
        id: "3214020",
        regency_id: "3214",
        name: "MANIIS",
      },
      {
        id: "3214030",
        regency_id: "3214",
        name: "TEGAL WARU",
      },
      {
        id: "3214040",
        regency_id: "3214",
        name: "PLERED",
      },
      {
        id: "3214050",
        regency_id: "3214",
        name: "SUKATANI",
      },
      {
        id: "3214060",
        regency_id: "3214",
        name: "DARANGDAN",
      },
      {
        id: "3214070",
        regency_id: "3214",
        name: "BOJONG",
      },
      {
        id: "3214080",
        regency_id: "3214",
        name: "WANAYASA",
      },
      {
        id: "3214081",
        regency_id: "3214",
        name: "KIARAPEDES",
      },
      {
        id: "3214090",
        regency_id: "3214",
        name: "PASAWAHAN",
      },
      {
        id: "3214091",
        regency_id: "3214",
        name: "PONDOK SALAM",
      },
      {
        id: "3214100",
        regency_id: "3214",
        name: "PURWAKARTA",
      },
      {
        id: "3214101",
        regency_id: "3214",
        name: "BABAKANCIKAO",
      },
      {
        id: "3214110",
        regency_id: "3214",
        name: "CAMPAKA",
      },
      {
        id: "3214111",
        regency_id: "3214",
        name: "CIBATU",
      },
      {
        id: "3214112",
        regency_id: "3214",
        name: "BUNGURSARI",
      },
      {
        id: "3215010",
        regency_id: "3215",
        name: "PANGKALAN",
      },
      {
        id: "3215011",
        regency_id: "3215",
        name: "TEGALWARU",
      },
      {
        id: "3215020",
        regency_id: "3215",
        name: "CIAMPEL",
      },
      {
        id: "3215031",
        regency_id: "3215",
        name: "TELUKJAMBE TIMUR",
      },
      {
        id: "3215032",
        regency_id: "3215",
        name: "TELUKJAMBE BARAT",
      },
      {
        id: "3215040",
        regency_id: "3215",
        name: "KLARI",
      },
      {
        id: "3215050",
        regency_id: "3215",
        name: "CIKAMPEK",
      },
      {
        id: "3215051",
        regency_id: "3215",
        name: "PURWASARI",
      },
      {
        id: "3215060",
        regency_id: "3215",
        name: "TIRTAMULYA",
      },
      {
        id: "3215070",
        regency_id: "3215",
        name: "JATISARI",
      },
      {
        id: "3215071",
        regency_id: "3215",
        name: "BANYUSARI",
      },
      {
        id: "3215072",
        regency_id: "3215",
        name: "KOTABARU",
      },
      {
        id: "3215081",
        regency_id: "3215",
        name: "CILAMAYA WETAN",
      },
      {
        id: "3215082",
        regency_id: "3215",
        name: "CILAMAYA KULON",
      },
      {
        id: "3215090",
        regency_id: "3215",
        name: "LEMAHABANG",
      },
      {
        id: "3215100",
        regency_id: "3215",
        name: "TALAGASARI",
      },
      {
        id: "3215111",
        regency_id: "3215",
        name: "MAJALAYA",
      },
      {
        id: "3215112",
        regency_id: "3215",
        name: "KARAWANG TIMUR",
      },
      {
        id: "3215113",
        regency_id: "3215",
        name: "KARAWANG BARAT",
      },
      {
        id: "3215120",
        regency_id: "3215",
        name: "RAWAMERTA",
      },
      {
        id: "3215130",
        regency_id: "3215",
        name: "TEMPURAN",
      },
      {
        id: "3215140",
        regency_id: "3215",
        name: "KUTAWALUYA",
      },
      {
        id: "3215150",
        regency_id: "3215",
        name: "RENGASDENGKLOK",
      },
      {
        id: "3215151",
        regency_id: "3215",
        name: "JAYAKERTA",
      },
      {
        id: "3215160",
        regency_id: "3215",
        name: "PEDES",
      },
      {
        id: "3215161",
        regency_id: "3215",
        name: "CILEBAR",
      },
      {
        id: "3215170",
        regency_id: "3215",
        name: "CIBUAYA",
      },
      {
        id: "3215180",
        regency_id: "3215",
        name: "TIRTAJAYA",
      },
      {
        id: "3215190",
        regency_id: "3215",
        name: "BATUJAYA",
      },
      {
        id: "3215200",
        regency_id: "3215",
        name: "PAKISJAYA",
      },
      {
        id: "3216010",
        regency_id: "3216",
        name: "SETU",
      },
      {
        id: "3216021",
        regency_id: "3216",
        name: "SERANG BARU",
      },
      {
        id: "3216022",
        regency_id: "3216",
        name: "CIKARANG PUSAT",
      },
      {
        id: "3216023",
        regency_id: "3216",
        name: "CIKARANG SELATAN",
      },
      {
        id: "3216030",
        regency_id: "3216",
        name: "CIBARUSAH",
      },
      {
        id: "3216031",
        regency_id: "3216",
        name: "BOJONGMANGU",
      },
      {
        id: "3216041",
        regency_id: "3216",
        name: "CIKARANG TIMUR",
      },
      {
        id: "3216050",
        regency_id: "3216",
        name: "KEDUNGWARINGIN",
      },
      {
        id: "3216061",
        regency_id: "3216",
        name: "CIKARANG UTARA",
      },
      {
        id: "3216062",
        regency_id: "3216",
        name: "KARANGBAHAGIA",
      },
      {
        id: "3216070",
        regency_id: "3216",
        name: "CIBITUNG",
      },
      {
        id: "3216071",
        regency_id: "3216",
        name: "CIKARANG BARAT",
      },
      {
        id: "3216081",
        regency_id: "3216",
        name: "TAMBUN SELATAN",
      },
      {
        id: "3216082",
        regency_id: "3216",
        name: "TAMBUN UTARA",
      },
      {
        id: "3216090",
        regency_id: "3216",
        name: "BABELAN",
      },
      {
        id: "3216100",
        regency_id: "3216",
        name: "TARUMAJAYA",
      },
      {
        id: "3216110",
        regency_id: "3216",
        name: "TAMBELANG",
      },
      {
        id: "3216111",
        regency_id: "3216",
        name: "SUKAWANGI",
      },
      {
        id: "3216120",
        regency_id: "3216",
        name: "SUKATANI",
      },
      {
        id: "3216121",
        regency_id: "3216",
        name: "SUKAKARYA",
      },
      {
        id: "3216130",
        regency_id: "3216",
        name: "PEBAYURAN",
      },
      {
        id: "3216140",
        regency_id: "3216",
        name: "CABANGBUNGIN",
      },
      {
        id: "3216150",
        regency_id: "3216",
        name: "MUARA GEMBONG",
      },
      {
        id: "3217010",
        regency_id: "3217",
        name: "RONGGA",
      },
      {
        id: "3217020",
        regency_id: "3217",
        name: "GUNUNGHALU",
      },
      {
        id: "3217030",
        regency_id: "3217",
        name: "SINDANGKERTA",
      },
      {
        id: "3217040",
        regency_id: "3217",
        name: "CILILIN",
      },
      {
        id: "3217050",
        regency_id: "3217",
        name: "CIHAMPELAS",
      },
      {
        id: "3217060",
        regency_id: "3217",
        name: "CIPONGKOR",
      },
      {
        id: "3217070",
        regency_id: "3217",
        name: "BATUJAJAR",
      },
      {
        id: "3217071",
        regency_id: "3217",
        name: "SAGULING",
      },
      {
        id: "3217080",
        regency_id: "3217",
        name: "CIPATAT",
      },
      {
        id: "3217090",
        regency_id: "3217",
        name: "PADALARANG",
      },
      {
        id: "3217100",
        regency_id: "3217",
        name: "NGAMPRAH",
      },
      {
        id: "3217110",
        regency_id: "3217",
        name: "PARONGPONG",
      },
      {
        id: "3217120",
        regency_id: "3217",
        name: "LEMBANG",
      },
      {
        id: "3217130",
        regency_id: "3217",
        name: "CISARUA",
      },
      {
        id: "3217140",
        regency_id: "3217",
        name: "CIKALONG WETAN",
      },
      {
        id: "3217150",
        regency_id: "3217",
        name: "CIPEUNDEUY",
      },
      {
        id: "3218010",
        regency_id: "3218",
        name: "CIMERAK",
      },
      {
        id: "3218020",
        regency_id: "3218",
        name: "CIJULANG",
      },
      {
        id: "3218030",
        regency_id: "3218",
        name: "CIGUGUR",
      },
      {
        id: "3218040",
        regency_id: "3218",
        name: "LANGKAPLANCAR",
      },
      {
        id: "3218050",
        regency_id: "3218",
        name: "PARIGI",
      },
      {
        id: "3218060",
        regency_id: "3218",
        name: "SIDAMULIH",
      },
      {
        id: "3218070",
        regency_id: "3218",
        name: "PANGANDARAN",
      },
      {
        id: "3218080",
        regency_id: "3218",
        name: "KALIPUCANG",
      },
      {
        id: "3218090",
        regency_id: "3218",
        name: "PADAHERANG",
      },
      {
        id: "3218100",
        regency_id: "3218",
        name: "MANGUNJAYA",
      },
      {
        id: "3271010",
        regency_id: "3271",
        name: "BOGOR SELATAN",
      },
      {
        id: "3271020",
        regency_id: "3271",
        name: "BOGOR TIMUR",
      },
      {
        id: "3271030",
        regency_id: "3271",
        name: "BOGOR UTARA",
      },
      {
        id: "3271040",
        regency_id: "3271",
        name: "BOGOR TENGAH",
      },
      {
        id: "3271050",
        regency_id: "3271",
        name: "BOGOR BARAT",
      },
      {
        id: "3271060",
        regency_id: "3271",
        name: "TANAH SEREAL",
      },
      {
        id: "3272010",
        regency_id: "3272",
        name: "BAROS",
      },
      {
        id: "3272011",
        regency_id: "3272",
        name: "LEMBURSITU",
      },
      {
        id: "3272012",
        regency_id: "3272",
        name: "CIBEUREUM",
      },
      {
        id: "3272020",
        regency_id: "3272",
        name: "CITAMIANG",
      },
      {
        id: "3272030",
        regency_id: "3272",
        name: "WARUDOYONG",
      },
      {
        id: "3272040",
        regency_id: "3272",
        name: "GUNUNG PUYUH",
      },
      {
        id: "3272050",
        regency_id: "3272",
        name: "CIKOLE",
      },
      {
        id: "3273010",
        regency_id: "3273",
        name: "BANDUNG KULON",
      },
      {
        id: "3273020",
        regency_id: "3273",
        name: "BABAKAN CIPARAY",
      },
      {
        id: "3273030",
        regency_id: "3273",
        name: "BOJONGLOA KALER",
      },
      {
        id: "3273040",
        regency_id: "3273",
        name: "BOJONGLOA KIDUL",
      },
      {
        id: "3273050",
        regency_id: "3273",
        name: "ASTANAANYAR",
      },
      {
        id: "3273060",
        regency_id: "3273",
        name: "REGOL",
      },
      {
        id: "3273070",
        regency_id: "3273",
        name: "LENGKONG",
      },
      {
        id: "3273080",
        regency_id: "3273",
        name: "BANDUNG KIDUL",
      },
      {
        id: "3273090",
        regency_id: "3273",
        name: "BUAHBATU",
      },
      {
        id: "3273100",
        regency_id: "3273",
        name: "RANCASARI",
      },
      {
        id: "3273101",
        regency_id: "3273",
        name: "GEDEBAGE",
      },
      {
        id: "3273110",
        regency_id: "3273",
        name: "CIBIRU",
      },
      {
        id: "3273111",
        regency_id: "3273",
        name: "PANYILEUKAN",
      },
      {
        id: "3273120",
        regency_id: "3273",
        name: "UJUNG BERUNG",
      },
      {
        id: "3273121",
        regency_id: "3273",
        name: "CINAMBO",
      },
      {
        id: "3273130",
        regency_id: "3273",
        name: "ARCAMANIK",
      },
      {
        id: "3273141",
        regency_id: "3273",
        name: "ANTAPANI",
      },
      {
        id: "3273142",
        regency_id: "3273",
        name: "MANDALAJATI",
      },
      {
        id: "3273150",
        regency_id: "3273",
        name: "KIARACONDONG",
      },
      {
        id: "3273160",
        regency_id: "3273",
        name: "BATUNUNGGAL",
      },
      {
        id: "3273170",
        regency_id: "3273",
        name: "SUMUR BANDUNG",
      },
      {
        id: "3273180",
        regency_id: "3273",
        name: "ANDIR",
      },
      {
        id: "3273190",
        regency_id: "3273",
        name: "CICENDO",
      },
      {
        id: "3273200",
        regency_id: "3273",
        name: "BANDUNG WETAN",
      },
      {
        id: "3273210",
        regency_id: "3273",
        name: "CIBEUNYING KIDUL",
      },
      {
        id: "3273220",
        regency_id: "3273",
        name: "CIBEUNYING KALER",
      },
      {
        id: "3273230",
        regency_id: "3273",
        name: "COBLONG",
      },
      {
        id: "3273240",
        regency_id: "3273",
        name: "SUKAJADI",
      },
      {
        id: "3273250",
        regency_id: "3273",
        name: "SUKASARI",
      },
      {
        id: "3273260",
        regency_id: "3273",
        name: "CIDADAP",
      },
      {
        id: "3274010",
        regency_id: "3274",
        name: "HARJAMUKTI",
      },
      {
        id: "3274020",
        regency_id: "3274",
        name: "LEMAHWUNGKUK",
      },
      {
        id: "3274030",
        regency_id: "3274",
        name: "PEKALIPAN",
      },
      {
        id: "3274040",
        regency_id: "3274",
        name: "KESAMBI",
      },
      {
        id: "3274050",
        regency_id: "3274",
        name: "KEJAKSAN",
      },
      {
        id: "3275010",
        regency_id: "3275",
        name: "PONDOKGEDE",
      },
      {
        id: "3275011",
        regency_id: "3275",
        name: "JATISAMPURNA",
      },
      {
        id: "3275012",
        regency_id: "3275",
        name: "PONDOKMELATI",
      },
      {
        id: "3275020",
        regency_id: "3275",
        name: "JATIASIH",
      },
      {
        id: "3275030",
        regency_id: "3275",
        name: "BANTARGEBANG",
      },
      {
        id: "3275031",
        regency_id: "3275",
        name: "MUSTIKAJAYA",
      },
      {
        id: "3275040",
        regency_id: "3275",
        name: "BEKASI TIMUR",
      },
      {
        id: "3275041",
        regency_id: "3275",
        name: "RAWALUMBU",
      },
      {
        id: "3275050",
        regency_id: "3275",
        name: "BEKASI SELATAN",
      },
      {
        id: "3275060",
        regency_id: "3275",
        name: "BEKASI BARAT",
      },
      {
        id: "3275061",
        regency_id: "3275",
        name: "MEDAN SATRIA",
      },
      {
        id: "3275070",
        regency_id: "3275",
        name: "BEKASI UTARA",
      },
      {
        id: "3276010",
        regency_id: "3276",
        name: "SAWANGAN",
      },
      {
        id: "3276011",
        regency_id: "3276",
        name: "BOJONGSARI",
      },
      {
        id: "3276020",
        regency_id: "3276",
        name: "PANCORAN MAS",
      },
      {
        id: "3276021",
        regency_id: "3276",
        name: "CIPAYUNG",
      },
      {
        id: "3276030",
        regency_id: "3276",
        name: "SUKMA JAYA",
      },
      {
        id: "3276031",
        regency_id: "3276",
        name: "CILODONG",
      },
      {
        id: "3276040",
        regency_id: "3276",
        name: "CIMANGGIS",
      },
      {
        id: "3276041",
        regency_id: "3276",
        name: "TAPOS",
      },
      {
        id: "3276050",
        regency_id: "3276",
        name: "BEJI",
      },
      {
        id: "3276060",
        regency_id: "3276",
        name: "LIMO",
      },
      {
        id: "3276061",
        regency_id: "3276",
        name: "CINERE",
      },
      {
        id: "3277010",
        regency_id: "3277",
        name: "CIMAHI SELATAN",
      },
      {
        id: "3277020",
        regency_id: "3277",
        name: "CIMAHI TENGAH",
      },
      {
        id: "3277030",
        regency_id: "3277",
        name: "CIMAHI UTARA",
      },
      {
        id: "3278010",
        regency_id: "3278",
        name: "KAWALU",
      },
      {
        id: "3278020",
        regency_id: "3278",
        name: "TAMANSARI",
      },
      {
        id: "3278030",
        regency_id: "3278",
        name: "CIBEUREUM",
      },
      {
        id: "3278031",
        regency_id: "3278",
        name: "PURBARATU",
      },
      {
        id: "3278040",
        regency_id: "3278",
        name: "TAWANG",
      },
      {
        id: "3278050",
        regency_id: "3278",
        name: "CIHIDEUNG",
      },
      {
        id: "3278060",
        regency_id: "3278",
        name: "MANGKUBUMI",
      },
      {
        id: "3278070",
        regency_id: "3278",
        name: "INDIHIANG",
      },
      {
        id: "3278071",
        regency_id: "3278",
        name: "BUNGURSARI",
      },
      {
        id: "3278080",
        regency_id: "3278",
        name: "CIPEDES",
      },
      {
        id: "3279010",
        regency_id: "3279",
        name: "BANJAR",
      },
      {
        id: "3279020",
        regency_id: "3279",
        name: "PURWAHARJA",
      },
      {
        id: "3279030",
        regency_id: "3279",
        name: "PATARUMAN",
      },
      {
        id: "3279040",
        regency_id: "3279",
        name: "LANGENSARI",
      },
      {
        id: "3301010",
        regency_id: "3301",
        name: "DAYEUHLUHUR",
      },
      {
        id: "3301020",
        regency_id: "3301",
        name: "WANAREJA",
      },
      {
        id: "3301030",
        regency_id: "3301",
        name: "MAJENANG",
      },
      {
        id: "3301040",
        regency_id: "3301",
        name: "CIMANGGU",
      },
      {
        id: "3301050",
        regency_id: "3301",
        name: "KARANGPUCUNG",
      },
      {
        id: "3301060",
        regency_id: "3301",
        name: "CIPARI",
      },
      {
        id: "3301070",
        regency_id: "3301",
        name: "SIDAREJA",
      },
      {
        id: "3301080",
        regency_id: "3301",
        name: "KEDUNGREJA",
      },
      {
        id: "3301090",
        regency_id: "3301",
        name: "PATIMUAN",
      },
      {
        id: "3301100",
        regency_id: "3301",
        name: "GANDRUNGMANGU",
      },
      {
        id: "3301110",
        regency_id: "3301",
        name: "BANTARSARI",
      },
      {
        id: "3301120",
        regency_id: "3301",
        name: "KAWUNGANTEN",
      },
      {
        id: "3301121",
        regency_id: "3301",
        name: "KAMPUNG LAUT",
      },
      {
        id: "3301130",
        regency_id: "3301",
        name: "JERUKLEGI",
      },
      {
        id: "3301140",
        regency_id: "3301",
        name: "KESUGIHAN",
      },
      {
        id: "3301150",
        regency_id: "3301",
        name: "ADIPALA",
      },
      {
        id: "3301160",
        regency_id: "3301",
        name: "MAOS",
      },
      {
        id: "3301170",
        regency_id: "3301",
        name: "SAMPANG",
      },
      {
        id: "3301180",
        regency_id: "3301",
        name: "KROYA",
      },
      {
        id: "3301190",
        regency_id: "3301",
        name: "BINANGUN",
      },
      {
        id: "3301200",
        regency_id: "3301",
        name: "NUSAWUNGU",
      },
      {
        id: "3301710",
        regency_id: "3301",
        name: "CILACAP SELATAN",
      },
      {
        id: "3301720",
        regency_id: "3301",
        name: "CILACAP TENGAH",
      },
      {
        id: "3301730",
        regency_id: "3301",
        name: "CILACAP UTARA",
      },
      {
        id: "3302010",
        regency_id: "3302",
        name: "LUMBIR",
      },
      {
        id: "3302020",
        regency_id: "3302",
        name: "WANGON",
      },
      {
        id: "3302030",
        regency_id: "3302",
        name: "JATILAWANG",
      },
      {
        id: "3302040",
        regency_id: "3302",
        name: "RAWALO",
      },
      {
        id: "3302050",
        regency_id: "3302",
        name: "KEBASEN",
      },
      {
        id: "3302060",
        regency_id: "3302",
        name: "KEMRANJEN",
      },
      {
        id: "3302070",
        regency_id: "3302",
        name: "SUMPIUH",
      },
      {
        id: "3302080",
        regency_id: "3302",
        name: "TAMBAK",
      },
      {
        id: "3302090",
        regency_id: "3302",
        name: "SOMAGEDE",
      },
      {
        id: "3302100",
        regency_id: "3302",
        name: "KALIBAGOR",
      },
      {
        id: "3302110",
        regency_id: "3302",
        name: "BANYUMAS",
      },
      {
        id: "3302120",
        regency_id: "3302",
        name: "PATIKRAJA",
      },
      {
        id: "3302130",
        regency_id: "3302",
        name: "PURWOJATI",
      },
      {
        id: "3302140",
        regency_id: "3302",
        name: "AJIBARANG",
      },
      {
        id: "3302150",
        regency_id: "3302",
        name: "GUMELAR",
      },
      {
        id: "3302160",
        regency_id: "3302",
        name: "PEKUNCEN",
      },
      {
        id: "3302170",
        regency_id: "3302",
        name: "CILONGOK",
      },
      {
        id: "3302180",
        regency_id: "3302",
        name: "KARANGLEWAS",
      },
      {
        id: "3302190",
        regency_id: "3302",
        name: "KEDUNG BANTENG",
      },
      {
        id: "3302200",
        regency_id: "3302",
        name: "BATURRADEN",
      },
      {
        id: "3302210",
        regency_id: "3302",
        name: "SUMBANG",
      },
      {
        id: "3302220",
        regency_id: "3302",
        name: "KEMBARAN",
      },
      {
        id: "3302230",
        regency_id: "3302",
        name: "SOKARAJA",
      },
      {
        id: "3302710",
        regency_id: "3302",
        name: "PURWOKERTO SELATAN",
      },
      {
        id: "3302720",
        regency_id: "3302",
        name: "PURWOKERTO BARAT",
      },
      {
        id: "3302730",
        regency_id: "3302",
        name: "PURWOKERTO TIMUR",
      },
      {
        id: "3302740",
        regency_id: "3302",
        name: "PURWOKERTO UTARA",
      },
      {
        id: "3303010",
        regency_id: "3303",
        name: "KEMANGKON",
      },
      {
        id: "3303020",
        regency_id: "3303",
        name: "BUKATEJA",
      },
      {
        id: "3303030",
        regency_id: "3303",
        name: "KEJOBONG",
      },
      {
        id: "3303040",
        regency_id: "3303",
        name: "PENGADEGAN",
      },
      {
        id: "3303050",
        regency_id: "3303",
        name: "KALIGONDANG",
      },
      {
        id: "3303060",
        regency_id: "3303",
        name: "PURBALINGGA",
      },
      {
        id: "3303070",
        regency_id: "3303",
        name: "KALIMANAH",
      },
      {
        id: "3303080",
        regency_id: "3303",
        name: "PADAMARA",
      },
      {
        id: "3303090",
        regency_id: "3303",
        name: "KUTASARI",
      },
      {
        id: "3303100",
        regency_id: "3303",
        name: "BOJONGSARI",
      },
      {
        id: "3303110",
        regency_id: "3303",
        name: "MREBET",
      },
      {
        id: "3303120",
        regency_id: "3303",
        name: "BOBOTSARI",
      },
      {
        id: "3303130",
        regency_id: "3303",
        name: "KARANGREJA",
      },
      {
        id: "3303131",
        regency_id: "3303",
        name: "KARANGJAMBU",
      },
      {
        id: "3303140",
        regency_id: "3303",
        name: "KARANGANYAR",
      },
      {
        id: "3303141",
        regency_id: "3303",
        name: "KERTANEGARA",
      },
      {
        id: "3303150",
        regency_id: "3303",
        name: "KARANGMONCOL",
      },
      {
        id: "3303160",
        regency_id: "3303",
        name: "REMBANG",
      },
      {
        id: "3304010",
        regency_id: "3304",
        name: "SUSUKAN",
      },
      {
        id: "3304020",
        regency_id: "3304",
        name: "PURWAREJA KLAMPOK",
      },
      {
        id: "3304030",
        regency_id: "3304",
        name: "MANDIRAJA",
      },
      {
        id: "3304040",
        regency_id: "3304",
        name: "PURWANEGARA",
      },
      {
        id: "3304050",
        regency_id: "3304",
        name: "BAWANG",
      },
      {
        id: "3304060",
        regency_id: "3304",
        name: "BANJARNEGARA",
      },
      {
        id: "3304061",
        regency_id: "3304",
        name: "PAGEDONGAN",
      },
      {
        id: "3304070",
        regency_id: "3304",
        name: "SIGALUH",
      },
      {
        id: "3304080",
        regency_id: "3304",
        name: "MADUKARA",
      },
      {
        id: "3304090",
        regency_id: "3304",
        name: "BANJARMANGU",
      },
      {
        id: "3304100",
        regency_id: "3304",
        name: "WANADADI",
      },
      {
        id: "3304110",
        regency_id: "3304",
        name: "RAKIT",
      },
      {
        id: "3304120",
        regency_id: "3304",
        name: "PUNGGELAN",
      },
      {
        id: "3304130",
        regency_id: "3304",
        name: "KARANGKOBAR",
      },
      {
        id: "3304140",
        regency_id: "3304",
        name: "PAGENTAN",
      },
      {
        id: "3304150",
        regency_id: "3304",
        name: "PEJAWARAN",
      },
      {
        id: "3304160",
        regency_id: "3304",
        name: "BATUR",
      },
      {
        id: "3304170",
        regency_id: "3304",
        name: "WANAYASA",
      },
      {
        id: "3304180",
        regency_id: "3304",
        name: "KALIBENING",
      },
      {
        id: "3304181",
        regency_id: "3304",
        name: "PANDANARUM",
      },
      {
        id: "3305010",
        regency_id: "3305",
        name: "AYAH",
      },
      {
        id: "3305020",
        regency_id: "3305",
        name: "BUAYAN",
      },
      {
        id: "3305030",
        regency_id: "3305",
        name: "PURING",
      },
      {
        id: "3305040",
        regency_id: "3305",
        name: "PETANAHAN",
      },
      {
        id: "3305050",
        regency_id: "3305",
        name: "KLIRONG",
      },
      {
        id: "3305060",
        regency_id: "3305",
        name: "BULUSPESANTREN",
      },
      {
        id: "3305070",
        regency_id: "3305",
        name: "AMBAL",
      },
      {
        id: "3305080",
        regency_id: "3305",
        name: "MIRIT",
      },
      {
        id: "3305081",
        regency_id: "3305",
        name: "BONOROWO",
      },
      {
        id: "3305090",
        regency_id: "3305",
        name: "PREMBUN",
      },
      {
        id: "3305091",
        regency_id: "3305",
        name: "PADURESO",
      },
      {
        id: "3305100",
        regency_id: "3305",
        name: "KUTOWINANGUN",
      },
      {
        id: "3305110",
        regency_id: "3305",
        name: "ALIAN",
      },
      {
        id: "3305111",
        regency_id: "3305",
        name: "PONCOWARNO",
      },
      {
        id: "3305120",
        regency_id: "3305",
        name: "KEBUMEN",
      },
      {
        id: "3305130",
        regency_id: "3305",
        name: "PEJAGOAN",
      },
      {
        id: "3305140",
        regency_id: "3305",
        name: "SRUWENG",
      },
      {
        id: "3305150",
        regency_id: "3305",
        name: "ADIMULYO",
      },
      {
        id: "3305160",
        regency_id: "3305",
        name: "KUWARASAN",
      },
      {
        id: "3305170",
        regency_id: "3305",
        name: "ROWOKELE",
      },
      {
        id: "3305180",
        regency_id: "3305",
        name: "SEMPOR",
      },
      {
        id: "3305190",
        regency_id: "3305",
        name: "GOMBONG",
      },
      {
        id: "3305200",
        regency_id: "3305",
        name: "KARANGANYAR",
      },
      {
        id: "3305210",
        regency_id: "3305",
        name: "KARANGGAYAM",
      },
      {
        id: "3305220",
        regency_id: "3305",
        name: "SADANG",
      },
      {
        id: "3305221",
        regency_id: "3305",
        name: "KARANGSAMBUNG",
      },
      {
        id: "3306010",
        regency_id: "3306",
        name: "GRABAG",
      },
      {
        id: "3306020",
        regency_id: "3306",
        name: "NGOMBOL",
      },
      {
        id: "3306030",
        regency_id: "3306",
        name: "PURWODADI",
      },
      {
        id: "3306040",
        regency_id: "3306",
        name: "BAGELEN",
      },
      {
        id: "3306050",
        regency_id: "3306",
        name: "KALIGESING",
      },
      {
        id: "3306060",
        regency_id: "3306",
        name: "PURWOREJO",
      },
      {
        id: "3306070",
        regency_id: "3306",
        name: "BANYU URIP",
      },
      {
        id: "3306080",
        regency_id: "3306",
        name: "BAYAN",
      },
      {
        id: "3306090",
        regency_id: "3306",
        name: "KUTOARJO",
      },
      {
        id: "3306100",
        regency_id: "3306",
        name: "BUTUH",
      },
      {
        id: "3306110",
        regency_id: "3306",
        name: "PITURUH",
      },
      {
        id: "3306120",
        regency_id: "3306",
        name: "KEMIRI",
      },
      {
        id: "3306130",
        regency_id: "3306",
        name: "BRUNO",
      },
      {
        id: "3306140",
        regency_id: "3306",
        name: "GEBANG",
      },
      {
        id: "3306150",
        regency_id: "3306",
        name: "LOANO",
      },
      {
        id: "3306160",
        regency_id: "3306",
        name: "BENER",
      },
      {
        id: "3307010",
        regency_id: "3307",
        name: "WADASLINTANG",
      },
      {
        id: "3307020",
        regency_id: "3307",
        name: "KEPIL",
      },
      {
        id: "3307030",
        regency_id: "3307",
        name: "SAPURAN",
      },
      {
        id: "3307031",
        regency_id: "3307",
        name: "KALIBAWANG",
      },
      {
        id: "3307040",
        regency_id: "3307",
        name: "KALIWIRO",
      },
      {
        id: "3307050",
        regency_id: "3307",
        name: "LEKSONO",
      },
      {
        id: "3307051",
        regency_id: "3307",
        name: "SUKOHARJO",
      },
      {
        id: "3307060",
        regency_id: "3307",
        name: "SELOMERTO",
      },
      {
        id: "3307070",
        regency_id: "3307",
        name: "KALIKAJAR",
      },
      {
        id: "3307080",
        regency_id: "3307",
        name: "KERTEK",
      },
      {
        id: "3307090",
        regency_id: "3307",
        name: "WONOSOBO",
      },
      {
        id: "3307100",
        regency_id: "3307",
        name: "WATUMALANG",
      },
      {
        id: "3307110",
        regency_id: "3307",
        name: "MOJOTENGAH",
      },
      {
        id: "3307120",
        regency_id: "3307",
        name: "GARUNG",
      },
      {
        id: "3307130",
        regency_id: "3307",
        name: "KEJAJAR",
      },
      {
        id: "3308010",
        regency_id: "3308",
        name: "SALAMAN",
      },
      {
        id: "3308020",
        regency_id: "3308",
        name: "BOROBUDUR",
      },
      {
        id: "3308030",
        regency_id: "3308",
        name: "NGLUWAR",
      },
      {
        id: "3308040",
        regency_id: "3308",
        name: "SALAM",
      },
      {
        id: "3308050",
        regency_id: "3308",
        name: "SRUMBUNG",
      },
      {
        id: "3308060",
        regency_id: "3308",
        name: "DUKUN",
      },
      {
        id: "3308070",
        regency_id: "3308",
        name: "MUNTILAN",
      },
      {
        id: "3308080",
        regency_id: "3308",
        name: "MUNGKID",
      },
      {
        id: "3308090",
        regency_id: "3308",
        name: "SAWANGAN",
      },
      {
        id: "3308100",
        regency_id: "3308",
        name: "CANDIMULYO",
      },
      {
        id: "3308110",
        regency_id: "3308",
        name: "MERTOYUDAN",
      },
      {
        id: "3308120",
        regency_id: "3308",
        name: "TEMPURAN",
      },
      {
        id: "3308130",
        regency_id: "3308",
        name: "KAJORAN",
      },
      {
        id: "3308140",
        regency_id: "3308",
        name: "KALIANGKRIK",
      },
      {
        id: "3308150",
        regency_id: "3308",
        name: "BANDONGAN",
      },
      {
        id: "3308160",
        regency_id: "3308",
        name: "WINDUSARI",
      },
      {
        id: "3308170",
        regency_id: "3308",
        name: "SECANG",
      },
      {
        id: "3308180",
        regency_id: "3308",
        name: "TEGALREJO",
      },
      {
        id: "3308190",
        regency_id: "3308",
        name: "PAKIS",
      },
      {
        id: "3308200",
        regency_id: "3308",
        name: "GRABAG",
      },
      {
        id: "3308210",
        regency_id: "3308",
        name: "NGABLAK",
      },
      {
        id: "3309010",
        regency_id: "3309",
        name: "SELO",
      },
      {
        id: "3309020",
        regency_id: "3309",
        name: "AMPEL",
      },
      {
        id: "3309030",
        regency_id: "3309",
        name: "CEPOGO",
      },
      {
        id: "3309040",
        regency_id: "3309",
        name: "MUSUK",
      },
      {
        id: "3309050",
        regency_id: "3309",
        name: "BOYOLALI",
      },
      {
        id: "3309060",
        regency_id: "3309",
        name: "MOJOSONGO",
      },
      {
        id: "3309070",
        regency_id: "3309",
        name: "TERAS",
      },
      {
        id: "3309080",
        regency_id: "3309",
        name: "SAWIT",
      },
      {
        id: "3309090",
        regency_id: "3309",
        name: "BANYUDONO",
      },
      {
        id: "3309100",
        regency_id: "3309",
        name: "SAMBI",
      },
      {
        id: "3309110",
        regency_id: "3309",
        name: "NGEMPLAK",
      },
      {
        id: "3309120",
        regency_id: "3309",
        name: "NOGOSARI",
      },
      {
        id: "3309130",
        regency_id: "3309",
        name: "SIMO",
      },
      {
        id: "3309140",
        regency_id: "3309",
        name: "KARANGGEDE",
      },
      {
        id: "3309150",
        regency_id: "3309",
        name: "KLEGO",
      },
      {
        id: "3309160",
        regency_id: "3309",
        name: "ANDONG",
      },
      {
        id: "3309170",
        regency_id: "3309",
        name: "KEMUSU",
      },
      {
        id: "3309180",
        regency_id: "3309",
        name: "WONOSEGORO",
      },
      {
        id: "3309190",
        regency_id: "3309",
        name: "JUWANGI",
      },
      {
        id: "3310010",
        regency_id: "3310",
        name: "PRAMBANAN",
      },
      {
        id: "3310020",
        regency_id: "3310",
        name: "GANTIWARNO",
      },
      {
        id: "3310030",
        regency_id: "3310",
        name: "WEDI",
      },
      {
        id: "3310040",
        regency_id: "3310",
        name: "BAYAT",
      },
      {
        id: "3310050",
        regency_id: "3310",
        name: "CAWAS",
      },
      {
        id: "3310060",
        regency_id: "3310",
        name: "TRUCUK",
      },
      {
        id: "3310070",
        regency_id: "3310",
        name: "KALIKOTES",
      },
      {
        id: "3310080",
        regency_id: "3310",
        name: "KEBONARUM",
      },
      {
        id: "3310090",
        regency_id: "3310",
        name: "JOGONALAN",
      },
      {
        id: "3310100",
        regency_id: "3310",
        name: "MANISRENGGO",
      },
      {
        id: "3310110",
        regency_id: "3310",
        name: "KARANGNONGKO",
      },
      {
        id: "3310120",
        regency_id: "3310",
        name: "NGAWEN",
      },
      {
        id: "3310130",
        regency_id: "3310",
        name: "CEPER",
      },
      {
        id: "3310140",
        regency_id: "3310",
        name: "PEDAN",
      },
      {
        id: "3310150",
        regency_id: "3310",
        name: "KARANGDOWO",
      },
      {
        id: "3310160",
        regency_id: "3310",
        name: "JUWIRING",
      },
      {
        id: "3310170",
        regency_id: "3310",
        name: "WONOSARI",
      },
      {
        id: "3310180",
        regency_id: "3310",
        name: "DELANGGU",
      },
      {
        id: "3310190",
        regency_id: "3310",
        name: "POLANHARJO",
      },
      {
        id: "3310200",
        regency_id: "3310",
        name: "KARANGANOM",
      },
      {
        id: "3310210",
        regency_id: "3310",
        name: "TULUNG",
      },
      {
        id: "3310220",
        regency_id: "3310",
        name: "JATINOM",
      },
      {
        id: "3310230",
        regency_id: "3310",
        name: "KEMALANG",
      },
      {
        id: "3310710",
        regency_id: "3310",
        name: "KLATEN SELATAN",
      },
      {
        id: "3310720",
        regency_id: "3310",
        name: "KLATEN TENGAH",
      },
      {
        id: "3310730",
        regency_id: "3310",
        name: "KLATEN UTARA",
      },
      {
        id: "3311010",
        regency_id: "3311",
        name: "WERU",
      },
      {
        id: "3311020",
        regency_id: "3311",
        name: "BULU",
      },
      {
        id: "3311030",
        regency_id: "3311",
        name: "TAWANGSARI",
      },
      {
        id: "3311040",
        regency_id: "3311",
        name: "SUKOHARJO",
      },
      {
        id: "3311050",
        regency_id: "3311",
        name: "NGUTER",
      },
      {
        id: "3311060",
        regency_id: "3311",
        name: "BENDOSARI",
      },
      {
        id: "3311070",
        regency_id: "3311",
        name: "POLOKARTO",
      },
      {
        id: "3311080",
        regency_id: "3311",
        name: "MOJOLABAN",
      },
      {
        id: "3311090",
        regency_id: "3311",
        name: "GROGOL",
      },
      {
        id: "3311100",
        regency_id: "3311",
        name: "BAKI",
      },
      {
        id: "3311110",
        regency_id: "3311",
        name: "GATAK",
      },
      {
        id: "3311120",
        regency_id: "3311",
        name: "KARTASURA",
      },
      {
        id: "3312010",
        regency_id: "3312",
        name: "PRACIMANTORO",
      },
      {
        id: "3312020",
        regency_id: "3312",
        name: "PARANGGUPITO",
      },
      {
        id: "3312030",
        regency_id: "3312",
        name: "GIRITONTRO",
      },
      {
        id: "3312040",
        regency_id: "3312",
        name: "GIRIWOYO",
      },
      {
        id: "3312050",
        regency_id: "3312",
        name: "BATUWARNO",
      },
      {
        id: "3312060",
        regency_id: "3312",
        name: "KARANGTENGAH",
      },
      {
        id: "3312070",
        regency_id: "3312",
        name: "TIRTOMOYO",
      },
      {
        id: "3312080",
        regency_id: "3312",
        name: "NGUNTORONADI",
      },
      {
        id: "3312090",
        regency_id: "3312",
        name: "BATURETNO",
      },
      {
        id: "3312100",
        regency_id: "3312",
        name: "EROMOKO",
      },
      {
        id: "3312110",
        regency_id: "3312",
        name: "WURYANTORO",
      },
      {
        id: "3312120",
        regency_id: "3312",
        name: "MANYARAN",
      },
      {
        id: "3312130",
        regency_id: "3312",
        name: "SELOGIRI",
      },
      {
        id: "3312140",
        regency_id: "3312",
        name: "WONOGIRI",
      },
      {
        id: "3312150",
        regency_id: "3312",
        name: "NGADIROJO",
      },
      {
        id: "3312160",
        regency_id: "3312",
        name: "SIDOHARJO",
      },
      {
        id: "3312170",
        regency_id: "3312",
        name: "JATIROTO",
      },
      {
        id: "3312180",
        regency_id: "3312",
        name: "KISMANTORO",
      },
      {
        id: "3312190",
        regency_id: "3312",
        name: "PURWANTORO",
      },
      {
        id: "3312200",
        regency_id: "3312",
        name: "BULUKERTO",
      },
      {
        id: "3312201",
        regency_id: "3312",
        name: "PUHPELEM",
      },
      {
        id: "3312210",
        regency_id: "3312",
        name: "SLOGOHIMO",
      },
      {
        id: "3312220",
        regency_id: "3312",
        name: "JATISRONO",
      },
      {
        id: "3312230",
        regency_id: "3312",
        name: "JATIPURNO",
      },
      {
        id: "3312240",
        regency_id: "3312",
        name: "GIRIMARTO",
      },
      {
        id: "3313010",
        regency_id: "3313",
        name: "JATIPURO",
      },
      {
        id: "3313020",
        regency_id: "3313",
        name: "JATIYOSO",
      },
      {
        id: "3313030",
        regency_id: "3313",
        name: "JUMAPOLO",
      },
      {
        id: "3313040",
        regency_id: "3313",
        name: "JUMANTONO",
      },
      {
        id: "3313050",
        regency_id: "3313",
        name: "MATESIH",
      },
      {
        id: "3313060",
        regency_id: "3313",
        name: "TAWANGMANGU",
      },
      {
        id: "3313070",
        regency_id: "3313",
        name: "NGARGOYOSO",
      },
      {
        id: "3313080",
        regency_id: "3313",
        name: "KARANGPANDAN",
      },
      {
        id: "3313090",
        regency_id: "3313",
        name: "KARANGANYAR",
      },
      {
        id: "3313100",
        regency_id: "3313",
        name: "TASIKMADU",
      },
      {
        id: "3313110",
        regency_id: "3313",
        name: "JATEN",
      },
      {
        id: "3313120",
        regency_id: "3313",
        name: "COLOMADU",
      },
      {
        id: "3313130",
        regency_id: "3313",
        name: "GONDANGREJO",
      },
      {
        id: "3313140",
        regency_id: "3313",
        name: "KEBAKKRAMAT",
      },
      {
        id: "3313150",
        regency_id: "3313",
        name: "MOJOGEDANG",
      },
      {
        id: "3313160",
        regency_id: "3313",
        name: "KERJO",
      },
      {
        id: "3313170",
        regency_id: "3313",
        name: "JENAWI",
      },
      {
        id: "3314010",
        regency_id: "3314",
        name: "KALIJAMBE",
      },
      {
        id: "3314020",
        regency_id: "3314",
        name: "PLUPUH",
      },
      {
        id: "3314030",
        regency_id: "3314",
        name: "MASARAN",
      },
      {
        id: "3314040",
        regency_id: "3314",
        name: "KEDAWUNG",
      },
      {
        id: "3314050",
        regency_id: "3314",
        name: "SAMBIREJO",
      },
      {
        id: "3314060",
        regency_id: "3314",
        name: "GONDANG",
      },
      {
        id: "3314070",
        regency_id: "3314",
        name: "SAMBUNG MACAN",
      },
      {
        id: "3314080",
        regency_id: "3314",
        name: "NGRAMPAL",
      },
      {
        id: "3314090",
        regency_id: "3314",
        name: "KARANGMALANG",
      },
      {
        id: "3314100",
        regency_id: "3314",
        name: "SRAGEN",
      },
      {
        id: "3314110",
        regency_id: "3314",
        name: "SIDOHARJO",
      },
      {
        id: "3314120",
        regency_id: "3314",
        name: "TANON",
      },
      {
        id: "3314130",
        regency_id: "3314",
        name: "GEMOLONG",
      },
      {
        id: "3314140",
        regency_id: "3314",
        name: "MIRI",
      },
      {
        id: "3314150",
        regency_id: "3314",
        name: "SUMBERLAWANG",
      },
      {
        id: "3314160",
        regency_id: "3314",
        name: "MONDOKAN",
      },
      {
        id: "3314170",
        regency_id: "3314",
        name: "SUKODONO",
      },
      {
        id: "3314180",
        regency_id: "3314",
        name: "GESI",
      },
      {
        id: "3314190",
        regency_id: "3314",
        name: "TANGEN",
      },
      {
        id: "3314200",
        regency_id: "3314",
        name: "JENAR",
      },
      {
        id: "3315010",
        regency_id: "3315",
        name: "KEDUNGJATI",
      },
      {
        id: "3315020",
        regency_id: "3315",
        name: "KARANGRAYUNG",
      },
      {
        id: "3315030",
        regency_id: "3315",
        name: "PENAWANGAN",
      },
      {
        id: "3315040",
        regency_id: "3315",
        name: "TOROH",
      },
      {
        id: "3315050",
        regency_id: "3315",
        name: "GEYER",
      },
      {
        id: "3315060",
        regency_id: "3315",
        name: "PULOKULON",
      },
      {
        id: "3315070",
        regency_id: "3315",
        name: "KRADENAN",
      },
      {
        id: "3315080",
        regency_id: "3315",
        name: "GABUS",
      },
      {
        id: "3315090",
        regency_id: "3315",
        name: "NGARINGAN",
      },
      {
        id: "3315100",
        regency_id: "3315",
        name: "WIROSARI",
      },
      {
        id: "3315110",
        regency_id: "3315",
        name: "TAWANGHARJO",
      },
      {
        id: "3315120",
        regency_id: "3315",
        name: "GROBOGAN",
      },
      {
        id: "3315130",
        regency_id: "3315",
        name: "PURWODADI",
      },
      {
        id: "3315140",
        regency_id: "3315",
        name: "BRATI",
      },
      {
        id: "3315150",
        regency_id: "3315",
        name: "KLAMBU",
      },
      {
        id: "3315160",
        regency_id: "3315",
        name: "GODONG",
      },
      {
        id: "3315170",
        regency_id: "3315",
        name: "GUBUG",
      },
      {
        id: "3315180",
        regency_id: "3315",
        name: "TEGOWANU",
      },
      {
        id: "3315190",
        regency_id: "3315",
        name: "TANGGUNGHARJO",
      },
      {
        id: "3316010",
        regency_id: "3316",
        name: "JATI",
      },
      {
        id: "3316020",
        regency_id: "3316",
        name: "RANDUBLATUNG",
      },
      {
        id: "3316030",
        regency_id: "3316",
        name: "KRADENAN",
      },
      {
        id: "3316040",
        regency_id: "3316",
        name: "KEDUNGTUBAN",
      },
      {
        id: "3316050",
        regency_id: "3316",
        name: "CEPU",
      },
      {
        id: "3316060",
        regency_id: "3316",
        name: "SAMBONG",
      },
      {
        id: "3316070",
        regency_id: "3316",
        name: "JIKEN",
      },
      {
        id: "3316080",
        regency_id: "3316",
        name: "BOGOREJO",
      },
      {
        id: "3316090",
        regency_id: "3316",
        name: "JEPON",
      },
      {
        id: "3316100",
        regency_id: "3316",
        name: "KOTA BLORA",
      },
      {
        id: "3316110",
        regency_id: "3316",
        name: "BANJAREJO",
      },
      {
        id: "3316120",
        regency_id: "3316",
        name: "TUNJUNGAN",
      },
      {
        id: "3316130",
        regency_id: "3316",
        name: "JAPAH",
      },
      {
        id: "3316140",
        regency_id: "3316",
        name: "NGAWEN",
      },
      {
        id: "3316150",
        regency_id: "3316",
        name: "KUNDURAN",
      },
      {
        id: "3316160",
        regency_id: "3316",
        name: "TODANAN",
      },
      {
        id: "3317010",
        regency_id: "3317",
        name: "SUMBER",
      },
      {
        id: "3317020",
        regency_id: "3317",
        name: "BULU",
      },
      {
        id: "3317030",
        regency_id: "3317",
        name: "GUNEM",
      },
      {
        id: "3317040",
        regency_id: "3317",
        name: "SALE",
      },
      {
        id: "3317050",
        regency_id: "3317",
        name: "SARANG",
      },
      {
        id: "3317060",
        regency_id: "3317",
        name: "SEDAN",
      },
      {
        id: "3317070",
        regency_id: "3317",
        name: "PAMOTAN",
      },
      {
        id: "3317080",
        regency_id: "3317",
        name: "SULANG",
      },
      {
        id: "3317090",
        regency_id: "3317",
        name: "KALIORI",
      },
      {
        id: "3317100",
        regency_id: "3317",
        name: "REMBANG",
      },
      {
        id: "3317110",
        regency_id: "3317",
        name: "PANCUR",
      },
      {
        id: "3317120",
        regency_id: "3317",
        name: "KRAGAN",
      },
      {
        id: "3317130",
        regency_id: "3317",
        name: "SLUKE",
      },
      {
        id: "3317140",
        regency_id: "3317",
        name: "LASEM",
      },
      {
        id: "3318010",
        regency_id: "3318",
        name: "SUKOLILO",
      },
      {
        id: "3318020",
        regency_id: "3318",
        name: "KAYEN",
      },
      {
        id: "3318030",
        regency_id: "3318",
        name: "TAMBAKROMO",
      },
      {
        id: "3318040",
        regency_id: "3318",
        name: "WINONG",
      },
      {
        id: "3318050",
        regency_id: "3318",
        name: "PUCAKWANGI",
      },
      {
        id: "3318060",
        regency_id: "3318",
        name: "JAKEN",
      },
      {
        id: "3318070",
        regency_id: "3318",
        name: "BATANGAN",
      },
      {
        id: "3318080",
        regency_id: "3318",
        name: "JUWANA",
      },
      {
        id: "3318090",
        regency_id: "3318",
        name: "JAKENAN",
      },
      {
        id: "3318100",
        regency_id: "3318",
        name: "PATI",
      },
      {
        id: "3318110",
        regency_id: "3318",
        name: "GABUS",
      },
      {
        id: "3318120",
        regency_id: "3318",
        name: "MARGOREJO",
      },
      {
        id: "3318130",
        regency_id: "3318",
        name: "GEMBONG",
      },
      {
        id: "3318140",
        regency_id: "3318",
        name: "TLOGOWUNGU",
      },
      {
        id: "3318150",
        regency_id: "3318",
        name: "WEDARIJAKSA",
      },
      {
        id: "3318160",
        regency_id: "3318",
        name: "TRANGKIL",
      },
      {
        id: "3318170",
        regency_id: "3318",
        name: "MARGOYOSO",
      },
      {
        id: "3318180",
        regency_id: "3318",
        name: "GUNUNG WUNGKAL",
      },
      {
        id: "3318190",
        regency_id: "3318",
        name: "CLUWAK",
      },
      {
        id: "3318200",
        regency_id: "3318",
        name: "TAYU",
      },
      {
        id: "3318210",
        regency_id: "3318",
        name: "DUKUHSETI",
      },
      {
        id: "3319010",
        regency_id: "3319",
        name: "KALIWUNGU",
      },
      {
        id: "3319020",
        regency_id: "3319",
        name: "KOTA KUDUS",
      },
      {
        id: "3319030",
        regency_id: "3319",
        name: "JATI",
      },
      {
        id: "3319040",
        regency_id: "3319",
        name: "UNDAAN",
      },
      {
        id: "3319050",
        regency_id: "3319",
        name: "MEJOBO",
      },
      {
        id: "3319060",
        regency_id: "3319",
        name: "JEKULO",
      },
      {
        id: "3319070",
        regency_id: "3319",
        name: "BAE",
      },
      {
        id: "3319080",
        regency_id: "3319",
        name: "GEBOG",
      },
      {
        id: "3319090",
        regency_id: "3319",
        name: "DAWE",
      },
      {
        id: "3320010",
        regency_id: "3320",
        name: "KEDUNG",
      },
      {
        id: "3320020",
        regency_id: "3320",
        name: "PECANGAAN",
      },
      {
        id: "3320021",
        regency_id: "3320",
        name: "KALINYAMATAN",
      },
      {
        id: "3320030",
        regency_id: "3320",
        name: "WELAHAN",
      },
      {
        id: "3320040",
        regency_id: "3320",
        name: "MAYONG",
      },
      {
        id: "3320050",
        regency_id: "3320",
        name: "NALUMSARI",
      },
      {
        id: "3320060",
        regency_id: "3320",
        name: "BATEALIT",
      },
      {
        id: "3320070",
        regency_id: "3320",
        name: "TAHUNAN",
      },
      {
        id: "3320080",
        regency_id: "3320",
        name: "JEPARA",
      },
      {
        id: "3320090",
        regency_id: "3320",
        name: "MLONGGO",
      },
      {
        id: "3320091",
        regency_id: "3320",
        name: "PAKIS AJI",
      },
      {
        id: "3320100",
        regency_id: "3320",
        name: "BANGSRI",
      },
      {
        id: "3320101",
        regency_id: "3320",
        name: "KEMBANG",
      },
      {
        id: "3320110",
        regency_id: "3320",
        name: "KELING",
      },
      {
        id: "3320111",
        regency_id: "3320",
        name: "DONOROJO",
      },
      {
        id: "3320120",
        regency_id: "3320",
        name: "KARIMUNJAWA",
      },
      {
        id: "3321010",
        regency_id: "3321",
        name: "MRANGGEN",
      },
      {
        id: "3321020",
        regency_id: "3321",
        name: "KARANGAWEN",
      },
      {
        id: "3321030",
        regency_id: "3321",
        name: "GUNTUR",
      },
      {
        id: "3321040",
        regency_id: "3321",
        name: "SAYUNG",
      },
      {
        id: "3321050",
        regency_id: "3321",
        name: "KARANG TENGAH",
      },
      {
        id: "3321060",
        regency_id: "3321",
        name: "BONANG",
      },
      {
        id: "3321070",
        regency_id: "3321",
        name: "DEMAK",
      },
      {
        id: "3321080",
        regency_id: "3321",
        name: "WONOSALAM",
      },
      {
        id: "3321090",
        regency_id: "3321",
        name: "DEMPET",
      },
      {
        id: "3321091",
        regency_id: "3321",
        name: "KEBONAGUNG",
      },
      {
        id: "3321100",
        regency_id: "3321",
        name: "GAJAH",
      },
      {
        id: "3321110",
        regency_id: "3321",
        name: "KARANGANYAR",
      },
      {
        id: "3321120",
        regency_id: "3321",
        name: "MIJEN",
      },
      {
        id: "3321130",
        regency_id: "3321",
        name: "WEDUNG",
      },
      {
        id: "3322010",
        regency_id: "3322",
        name: "GETASAN",
      },
      {
        id: "3322020",
        regency_id: "3322",
        name: "TENGARAN",
      },
      {
        id: "3322030",
        regency_id: "3322",
        name: "SUSUKAN",
      },
      {
        id: "3322031",
        regency_id: "3322",
        name: "KALIWUNGU",
      },
      {
        id: "3322040",
        regency_id: "3322",
        name: "SURUH",
      },
      {
        id: "3322050",
        regency_id: "3322",
        name: "PABELAN",
      },
      {
        id: "3322060",
        regency_id: "3322",
        name: "TUNTANG",
      },
      {
        id: "3322070",
        regency_id: "3322",
        name: "BANYUBIRU",
      },
      {
        id: "3322080",
        regency_id: "3322",
        name: "JAMBU",
      },
      {
        id: "3322090",
        regency_id: "3322",
        name: "SUMOWONO",
      },
      {
        id: "3322100",
        regency_id: "3322",
        name: "AMBARAWA",
      },
      {
        id: "3322101",
        regency_id: "3322",
        name: "BANDUNGAN",
      },
      {
        id: "3322110",
        regency_id: "3322",
        name: "BAWEN",
      },
      {
        id: "3322120",
        regency_id: "3322",
        name: "BRINGIN",
      },
      {
        id: "3322121",
        regency_id: "3322",
        name: "BANCAK",
      },
      {
        id: "3322130",
        regency_id: "3322",
        name: "PRINGAPUS",
      },
      {
        id: "3322140",
        regency_id: "3322",
        name: "BERGAS",
      },
      {
        id: "3322151",
        regency_id: "3322",
        name: "UNGARAN BARAT",
      },
      {
        id: "3322152",
        regency_id: "3322",
        name: "UNGARAN TIMUR",
      },
      {
        id: "3323010",
        regency_id: "3323",
        name: "PARAKAN",
      },
      {
        id: "3323011",
        regency_id: "3323",
        name: "KLEDUNG",
      },
      {
        id: "3323012",
        regency_id: "3323",
        name: "BANSARI",
      },
      {
        id: "3323020",
        regency_id: "3323",
        name: "BULU",
      },
      {
        id: "3323030",
        regency_id: "3323",
        name: "TEMANGGUNG",
      },
      {
        id: "3323031",
        regency_id: "3323",
        name: "TLOGOMULYO",
      },
      {
        id: "3323040",
        regency_id: "3323",
        name: "TEMBARAK",
      },
      {
        id: "3323041",
        regency_id: "3323",
        name: "SELOPAMPANG",
      },
      {
        id: "3323050",
        regency_id: "3323",
        name: "KRANGGAN",
      },
      {
        id: "3323060",
        regency_id: "3323",
        name: "PRINGSURAT",
      },
      {
        id: "3323070",
        regency_id: "3323",
        name: "KALORAN",
      },
      {
        id: "3323080",
        regency_id: "3323",
        name: "KANDANGAN",
      },
      {
        id: "3323090",
        regency_id: "3323",
        name: "KEDU",
      },
      {
        id: "3323100",
        regency_id: "3323",
        name: "NGADIREJO",
      },
      {
        id: "3323110",
        regency_id: "3323",
        name: "JUMO",
      },
      {
        id: "3323111",
        regency_id: "3323",
        name: "GEMAWANG",
      },
      {
        id: "3323120",
        regency_id: "3323",
        name: "CANDIROTO",
      },
      {
        id: "3323121",
        regency_id: "3323",
        name: "BEJEN",
      },
      {
        id: "3323130",
        regency_id: "3323",
        name: "TRETEP",
      },
      {
        id: "3323131",
        regency_id: "3323",
        name: "WONOBOYO",
      },
      {
        id: "3324010",
        regency_id: "3324",
        name: "PLANTUNGAN",
      },
      {
        id: "3324020",
        regency_id: "3324",
        name: "SUKOREJO",
      },
      {
        id: "3324030",
        regency_id: "3324",
        name: "PAGERRUYUNG",
      },
      {
        id: "3324040",
        regency_id: "3324",
        name: "PATEAN",
      },
      {
        id: "3324050",
        regency_id: "3324",
        name: "SINGOROJO",
      },
      {
        id: "3324060",
        regency_id: "3324",
        name: "LIMBANGAN",
      },
      {
        id: "3324070",
        regency_id: "3324",
        name: "BOJA",
      },
      {
        id: "3324080",
        regency_id: "3324",
        name: "KALIWUNGU",
      },
      {
        id: "3324081",
        regency_id: "3324",
        name: "KALIWUNGU SELATAN",
      },
      {
        id: "3324090",
        regency_id: "3324",
        name: "BRANGSONG",
      },
      {
        id: "3324100",
        regency_id: "3324",
        name: "PEGANDON",
      },
      {
        id: "3324101",
        regency_id: "3324",
        name: "NGAMPEL",
      },
      {
        id: "3324110",
        regency_id: "3324",
        name: "GEMUH",
      },
      {
        id: "3324111",
        regency_id: "3324",
        name: "RINGINARUM",
      },
      {
        id: "3324120",
        regency_id: "3324",
        name: "WELERI",
      },
      {
        id: "3324130",
        regency_id: "3324",
        name: "ROWOSARI",
      },
      {
        id: "3324140",
        regency_id: "3324",
        name: "KANGKUNG",
      },
      {
        id: "3324150",
        regency_id: "3324",
        name: "CEPIRING",
      },
      {
        id: "3324160",
        regency_id: "3324",
        name: "PATEBON",
      },
      {
        id: "3324170",
        regency_id: "3324",
        name: "KOTA KENDAL",
      },
      {
        id: "3325010",
        regency_id: "3325",
        name: "WONOTUNGGAL",
      },
      {
        id: "3325020",
        regency_id: "3325",
        name: "BANDAR",
      },
      {
        id: "3325030",
        regency_id: "3325",
        name: "BLADO",
      },
      {
        id: "3325040",
        regency_id: "3325",
        name: "REBAN",
      },
      {
        id: "3325050",
        regency_id: "3325",
        name: "BAWANG",
      },
      {
        id: "3325060",
        regency_id: "3325",
        name: "TERSONO",
      },
      {
        id: "3325070",
        regency_id: "3325",
        name: "GRINGSING",
      },
      {
        id: "3325080",
        regency_id: "3325",
        name: "LIMPUNG",
      },
      {
        id: "3325081",
        regency_id: "3325",
        name: "BANYUPUTIH",
      },
      {
        id: "3325090",
        regency_id: "3325",
        name: "SUBAH",
      },
      {
        id: "3325091",
        regency_id: "3325",
        name: "PECALUNGAN",
      },
      {
        id: "3325100",
        regency_id: "3325",
        name: "TULIS",
      },
      {
        id: "3325101",
        regency_id: "3325",
        name: "KANDEMAN",
      },
      {
        id: "3325110",
        regency_id: "3325",
        name: "BATANG",
      },
      {
        id: "3325120",
        regency_id: "3325",
        name: "WARUNG ASEM",
      },
      {
        id: "3326010",
        regency_id: "3326",
        name: "KANDANGSERANG",
      },
      {
        id: "3326020",
        regency_id: "3326",
        name: "PANINGGARAN",
      },
      {
        id: "3326030",
        regency_id: "3326",
        name: "LEBAKBARANG",
      },
      {
        id: "3326040",
        regency_id: "3326",
        name: "PETUNGKRIONO",
      },
      {
        id: "3326050",
        regency_id: "3326",
        name: "TALUN",
      },
      {
        id: "3326060",
        regency_id: "3326",
        name: "DORO",
      },
      {
        id: "3326070",
        regency_id: "3326",
        name: "KARANGANYAR",
      },
      {
        id: "3326080",
        regency_id: "3326",
        name: "KAJEN",
      },
      {
        id: "3326090",
        regency_id: "3326",
        name: "KESESI",
      },
      {
        id: "3326100",
        regency_id: "3326",
        name: "SRAGI",
      },
      {
        id: "3326101",
        regency_id: "3326",
        name: "SIWALAN",
      },
      {
        id: "3326110",
        regency_id: "3326",
        name: "BOJONG",
      },
      {
        id: "3326120",
        regency_id: "3326",
        name: "WONOPRINGGO",
      },
      {
        id: "3326130",
        regency_id: "3326",
        name: "KEDUNGWUNI",
      },
      {
        id: "3326131",
        regency_id: "3326",
        name: "KARANGDADAP",
      },
      {
        id: "3326140",
        regency_id: "3326",
        name: "BUARAN",
      },
      {
        id: "3326150",
        regency_id: "3326",
        name: "TIRTO",
      },
      {
        id: "3326160",
        regency_id: "3326",
        name: "WIRADESA",
      },
      {
        id: "3326161",
        regency_id: "3326",
        name: "WONOKERTO",
      },
      {
        id: "3327010",
        regency_id: "3327",
        name: "MOGA",
      },
      {
        id: "3327011",
        regency_id: "3327",
        name: "WARUNGPRING",
      },
      {
        id: "3327020",
        regency_id: "3327",
        name: "PULOSARI",
      },
      {
        id: "3327030",
        regency_id: "3327",
        name: "BELIK",
      },
      {
        id: "3327040",
        regency_id: "3327",
        name: "WATUKUMPUL",
      },
      {
        id: "3327050",
        regency_id: "3327",
        name: "BODEH",
      },
      {
        id: "3327060",
        regency_id: "3327",
        name: "BANTARBOLANG",
      },
      {
        id: "3327070",
        regency_id: "3327",
        name: "RANDUDONGKAL",
      },
      {
        id: "3327080",
        regency_id: "3327",
        name: "PEMALANG",
      },
      {
        id: "3327090",
        regency_id: "3327",
        name: "TAMAN",
      },
      {
        id: "3327100",
        regency_id: "3327",
        name: "PETARUKAN",
      },
      {
        id: "3327110",
        regency_id: "3327",
        name: "AMPELGADING",
      },
      {
        id: "3327120",
        regency_id: "3327",
        name: "COMAL",
      },
      {
        id: "3327130",
        regency_id: "3327",
        name: "ULUJAMI",
      },
      {
        id: "3328010",
        regency_id: "3328",
        name: "MARGASARI",
      },
      {
        id: "3328020",
        regency_id: "3328",
        name: "BUMIJAWA",
      },
      {
        id: "3328030",
        regency_id: "3328",
        name: "BOJONG",
      },
      {
        id: "3328040",
        regency_id: "3328",
        name: "BALAPULANG",
      },
      {
        id: "3328050",
        regency_id: "3328",
        name: "PAGERBARANG",
      },
      {
        id: "3328060",
        regency_id: "3328",
        name: "LEBAKSIU",
      },
      {
        id: "3328070",
        regency_id: "3328",
        name: "JATINEGARA",
      },
      {
        id: "3328080",
        regency_id: "3328",
        name: "KEDUNG BANTENG",
      },
      {
        id: "3328090",
        regency_id: "3328",
        name: "PANGKAH",
      },
      {
        id: "3328100",
        regency_id: "3328",
        name: "SLAWI",
      },
      {
        id: "3328110",
        regency_id: "3328",
        name: "DUKUHWARU",
      },
      {
        id: "3328120",
        regency_id: "3328",
        name: "ADIWERNA",
      },
      {
        id: "3328130",
        regency_id: "3328",
        name: "DUKUHTURI",
      },
      {
        id: "3328140",
        regency_id: "3328",
        name: "TALANG",
      },
      {
        id: "3328150",
        regency_id: "3328",
        name: "TARUB",
      },
      {
        id: "3328160",
        regency_id: "3328",
        name: "KRAMAT",
      },
      {
        id: "3328170",
        regency_id: "3328",
        name: "SURADADI",
      },
      {
        id: "3328180",
        regency_id: "3328",
        name: "WARUREJA",
      },
      {
        id: "3329010",
        regency_id: "3329",
        name: "SALEM",
      },
      {
        id: "3329020",
        regency_id: "3329",
        name: "BANTARKAWUNG",
      },
      {
        id: "3329030",
        regency_id: "3329",
        name: "BUMIAYU",
      },
      {
        id: "3329040",
        regency_id: "3329",
        name: "PAGUYANGAN",
      },
      {
        id: "3329050",
        regency_id: "3329",
        name: "SIRAMPOG",
      },
      {
        id: "3329060",
        regency_id: "3329",
        name: "TONJONG",
      },
      {
        id: "3329070",
        regency_id: "3329",
        name: "LARANGAN",
      },
      {
        id: "3329080",
        regency_id: "3329",
        name: "KETANGGUNGAN",
      },
      {
        id: "3329090",
        regency_id: "3329",
        name: "BANJARHARJO",
      },
      {
        id: "3329100",
        regency_id: "3329",
        name: "LOSARI",
      },
      {
        id: "3329110",
        regency_id: "3329",
        name: "TANJUNG",
      },
      {
        id: "3329120",
        regency_id: "3329",
        name: "KERSANA",
      },
      {
        id: "3329130",
        regency_id: "3329",
        name: "BULAKAMBA",
      },
      {
        id: "3329140",
        regency_id: "3329",
        name: "WANASARI",
      },
      {
        id: "3329150",
        regency_id: "3329",
        name: "SONGGOM",
      },
      {
        id: "3329160",
        regency_id: "3329",
        name: "JATIBARANG",
      },
      {
        id: "3329170",
        regency_id: "3329",
        name: "BREBES",
      },
      {
        id: "3371010",
        regency_id: "3371",
        name: "MAGELANG SELATAN",
      },
      {
        id: "3371011",
        regency_id: "3371",
        name: "MAGELANG TENGAH",
      },
      {
        id: "3371020",
        regency_id: "3371",
        name: "MAGELANG UTARA",
      },
      {
        id: "3372010",
        regency_id: "3372",
        name: "LAWEYAN",
      },
      {
        id: "3372020",
        regency_id: "3372",
        name: "SERENGAN",
      },
      {
        id: "3372030",
        regency_id: "3372",
        name: "PASAR KLIWON",
      },
      {
        id: "3372040",
        regency_id: "3372",
        name: "JEBRES",
      },
      {
        id: "3372050",
        regency_id: "3372",
        name: "BANJARSARI",
      },
      {
        id: "3373010",
        regency_id: "3373",
        name: "ARGOMULYO",
      },
      {
        id: "3373020",
        regency_id: "3373",
        name: "TINGKIR",
      },
      {
        id: "3373030",
        regency_id: "3373",
        name: "SIDOMUKTI",
      },
      {
        id: "3373040",
        regency_id: "3373",
        name: "SIDOREJO",
      },
      {
        id: "3374010",
        regency_id: "3374",
        name: "MIJEN",
      },
      {
        id: "3374020",
        regency_id: "3374",
        name: "GUNUNG PATI",
      },
      {
        id: "3374030",
        regency_id: "3374",
        name: "BANYUMANIK",
      },
      {
        id: "3374040",
        regency_id: "3374",
        name: "GAJAH MUNGKUR",
      },
      {
        id: "3374050",
        regency_id: "3374",
        name: "SEMARANG SELATAN",
      },
      {
        id: "3374060",
        regency_id: "3374",
        name: "CANDISARI",
      },
      {
        id: "3374070",
        regency_id: "3374",
        name: "TEMBALANG",
      },
      {
        id: "3374080",
        regency_id: "3374",
        name: "PEDURUNGAN",
      },
      {
        id: "3374090",
        regency_id: "3374",
        name: "GENUK",
      },
      {
        id: "3374100",
        regency_id: "3374",
        name: "GAYAMSARI",
      },
      {
        id: "3374110",
        regency_id: "3374",
        name: "SEMARANG TIMUR",
      },
      {
        id: "3374120",
        regency_id: "3374",
        name: "SEMARANG UTARA",
      },
      {
        id: "3374130",
        regency_id: "3374",
        name: "SEMARANG TENGAH",
      },
      {
        id: "3374140",
        regency_id: "3374",
        name: "SEMARANG BARAT",
      },
      {
        id: "3374150",
        regency_id: "3374",
        name: "TUGU",
      },
      {
        id: "3374160",
        regency_id: "3374",
        name: "NGALIYAN",
      },
      {
        id: "3375010",
        regency_id: "3375",
        name: "PEKALONGAN BARAT",
      },
      {
        id: "3375020",
        regency_id: "3375",
        name: "PEKALONGAN TIMUR",
      },
      {
        id: "3375030",
        regency_id: "3375",
        name: "PEKALONGAN SELATAN",
      },
      {
        id: "3375040",
        regency_id: "3375",
        name: "PEKALONGAN UTARA",
      },
      {
        id: "3376010",
        regency_id: "3376",
        name: "TEGAL SELATAN",
      },
      {
        id: "3376020",
        regency_id: "3376",
        name: "TEGAL TIMUR",
      },
      {
        id: "3376030",
        regency_id: "3376",
        name: "TEGAL BARAT",
      },
      {
        id: "3376040",
        regency_id: "3376",
        name: "MARGADANA",
      },
      {
        id: "3401010",
        regency_id: "3401",
        name: "TEMON",
      },
      {
        id: "3401020",
        regency_id: "3401",
        name: "WATES",
      },
      {
        id: "3401030",
        regency_id: "3401",
        name: "PANJATAN",
      },
      {
        id: "3401040",
        regency_id: "3401",
        name: "GALUR",
      },
      {
        id: "3401050",
        regency_id: "3401",
        name: "LENDAH",
      },
      {
        id: "3401060",
        regency_id: "3401",
        name: "SENTOLO",
      },
      {
        id: "3401070",
        regency_id: "3401",
        name: "PENGASIH",
      },
      {
        id: "3401080",
        regency_id: "3401",
        name: "KOKAP",
      },
      {
        id: "3401090",
        regency_id: "3401",
        name: "GIRIMULYO",
      },
      {
        id: "3401100",
        regency_id: "3401",
        name: "NANGGULAN",
      },
      {
        id: "3401110",
        regency_id: "3401",
        name: "KALIBAWANG",
      },
      {
        id: "3401120",
        regency_id: "3401",
        name: "SAMIGALUH",
      },
      {
        id: "3402010",
        regency_id: "3402",
        name: "SRANDAKAN",
      },
      {
        id: "3402020",
        regency_id: "3402",
        name: "SANDEN",
      },
      {
        id: "3402030",
        regency_id: "3402",
        name: "KRETEK",
      },
      {
        id: "3402040",
        regency_id: "3402",
        name: "PUNDONG",
      },
      {
        id: "3402050",
        regency_id: "3402",
        name: "BAMBANG LIPURO",
      },
      {
        id: "3402060",
        regency_id: "3402",
        name: "PANDAK",
      },
      {
        id: "3402070",
        regency_id: "3402",
        name: "BANTUL",
      },
      {
        id: "3402080",
        regency_id: "3402",
        name: "JETIS",
      },
      {
        id: "3402090",
        regency_id: "3402",
        name: "IMOGIRI",
      },
      {
        id: "3402100",
        regency_id: "3402",
        name: "DLINGO",
      },
      {
        id: "3402110",
        regency_id: "3402",
        name: "PLERET",
      },
      {
        id: "3402120",
        regency_id: "3402",
        name: "PIYUNGAN",
      },
      {
        id: "3402130",
        regency_id: "3402",
        name: "BANGUNTAPAN",
      },
      {
        id: "3402140",
        regency_id: "3402",
        name: "SEWON",
      },
      {
        id: "3402150",
        regency_id: "3402",
        name: "KASIHAN",
      },
      {
        id: "3402160",
        regency_id: "3402",
        name: "PAJANGAN",
      },
      {
        id: "3402170",
        regency_id: "3402",
        name: "SEDAYU",
      },
      {
        id: "3403010",
        regency_id: "3403",
        name: "PANGGANG",
      },
      {
        id: "3403011",
        regency_id: "3403",
        name: "PURWOSARI",
      },
      {
        id: "3403020",
        regency_id: "3403",
        name: "PALIYAN",
      },
      {
        id: "3403030",
        regency_id: "3403",
        name: "SAPTO SARI",
      },
      {
        id: "3403040",
        regency_id: "3403",
        name: "TEPUS",
      },
      {
        id: "3403041",
        regency_id: "3403",
        name: "TANJUNGSARI",
      },
      {
        id: "3403050",
        regency_id: "3403",
        name: "RONGKOP",
      },
      {
        id: "3403051",
        regency_id: "3403",
        name: "GIRISUBO",
      },
      {
        id: "3403060",
        regency_id: "3403",
        name: "SEMANU",
      },
      {
        id: "3403070",
        regency_id: "3403",
        name: "PONJONG",
      },
      {
        id: "3403080",
        regency_id: "3403",
        name: "KARANGMOJO",
      },
      {
        id: "3403090",
        regency_id: "3403",
        name: "WONOSARI",
      },
      {
        id: "3403100",
        regency_id: "3403",
        name: "PLAYEN",
      },
      {
        id: "3403110",
        regency_id: "3403",
        name: "PATUK",
      },
      {
        id: "3403120",
        regency_id: "3403",
        name: "GEDANG SARI",
      },
      {
        id: "3403130",
        regency_id: "3403",
        name: "NGLIPAR",
      },
      {
        id: "3403140",
        regency_id: "3403",
        name: "NGAWEN",
      },
      {
        id: "3403150",
        regency_id: "3403",
        name: "SEMIN",
      },
      {
        id: "3404010",
        regency_id: "3404",
        name: "MOYUDAN",
      },
      {
        id: "3404020",
        regency_id: "3404",
        name: "MINGGIR",
      },
      {
        id: "3404030",
        regency_id: "3404",
        name: "SEYEGAN",
      },
      {
        id: "3404040",
        regency_id: "3404",
        name: "GODEAN",
      },
      {
        id: "3404050",
        regency_id: "3404",
        name: "GAMPING",
      },
      {
        id: "3404060",
        regency_id: "3404",
        name: "MLATI",
      },
      {
        id: "3404070",
        regency_id: "3404",
        name: "DEPOK",
      },
      {
        id: "3404080",
        regency_id: "3404",
        name: "BERBAH",
      },
      {
        id: "3404090",
        regency_id: "3404",
        name: "PRAMBANAN",
      },
      {
        id: "3404100",
        regency_id: "3404",
        name: "KALASAN",
      },
      {
        id: "3404110",
        regency_id: "3404",
        name: "NGEMPLAK",
      },
      {
        id: "3404120",
        regency_id: "3404",
        name: "NGAGLIK",
      },
      {
        id: "3404130",
        regency_id: "3404",
        name: "SLEMAN",
      },
      {
        id: "3404140",
        regency_id: "3404",
        name: "TEMPEL",
      },
      {
        id: "3404150",
        regency_id: "3404",
        name: "TURI",
      },
      {
        id: "3404160",
        regency_id: "3404",
        name: "PAKEM",
      },
      {
        id: "3404170",
        regency_id: "3404",
        name: "CANGKRINGAN",
      },
      {
        id: "3471010",
        regency_id: "3471",
        name: "MANTRIJERON",
      },
      {
        id: "3471020",
        regency_id: "3471",
        name: "KRATON",
      },
      {
        id: "3471030",
        regency_id: "3471",
        name: "MERGANGSAN",
      },
      {
        id: "3471040",
        regency_id: "3471",
        name: "UMBULHARJO",
      },
      {
        id: "3471050",
        regency_id: "3471",
        name: "KOTAGEDE",
      },
      {
        id: "3471060",
        regency_id: "3471",
        name: "GONDOKUSUMAN",
      },
      {
        id: "3471070",
        regency_id: "3471",
        name: "DANUREJAN",
      },
      {
        id: "3471080",
        regency_id: "3471",
        name: "PAKUALAMAN",
      },
      {
        id: "3471090",
        regency_id: "3471",
        name: "GONDOMANAN",
      },
      {
        id: "3471100",
        regency_id: "3471",
        name: "NGAMPILAN",
      },
      {
        id: "3471110",
        regency_id: "3471",
        name: "WIROBRAJAN",
      },
      {
        id: "3471120",
        regency_id: "3471",
        name: "GEDONG TENGEN",
      },
      {
        id: "3471130",
        regency_id: "3471",
        name: "JETIS",
      },
      {
        id: "3471140",
        regency_id: "3471",
        name: "TEGALREJO",
      },
      {
        id: "3501010",
        regency_id: "3501",
        name: "DONOROJO",
      },
      {
        id: "3501020",
        regency_id: "3501",
        name: "PUNUNG",
      },
      {
        id: "3501030",
        regency_id: "3501",
        name: "PRINGKUKU",
      },
      {
        id: "3501040",
        regency_id: "3501",
        name: "PACITAN",
      },
      {
        id: "3501050",
        regency_id: "3501",
        name: "KEBONAGUNG",
      },
      {
        id: "3501060",
        regency_id: "3501",
        name: "ARJOSARI",
      },
      {
        id: "3501070",
        regency_id: "3501",
        name: "NAWANGAN",
      },
      {
        id: "3501080",
        regency_id: "3501",
        name: "BANDAR",
      },
      {
        id: "3501090",
        regency_id: "3501",
        name: "TEGALOMBO",
      },
      {
        id: "3501100",
        regency_id: "3501",
        name: "TULAKAN",
      },
      {
        id: "3501110",
        regency_id: "3501",
        name: "NGADIROJO",
      },
      {
        id: "3501120",
        regency_id: "3501",
        name: "SUDIMORO",
      },
      {
        id: "3502010",
        regency_id: "3502",
        name: "NGRAYUN",
      },
      {
        id: "3502020",
        regency_id: "3502",
        name: "SLAHUNG",
      },
      {
        id: "3502030",
        regency_id: "3502",
        name: "BUNGKAL",
      },
      {
        id: "3502040",
        regency_id: "3502",
        name: "SAMBIT",
      },
      {
        id: "3502050",
        regency_id: "3502",
        name: "SAWOO",
      },
      {
        id: "3502060",
        regency_id: "3502",
        name: "SOOKO",
      },
      {
        id: "3502061",
        regency_id: "3502",
        name: "PUDAK",
      },
      {
        id: "3502070",
        regency_id: "3502",
        name: "PULUNG",
      },
      {
        id: "3502080",
        regency_id: "3502",
        name: "MLARAK",
      },
      {
        id: "3502090",
        regency_id: "3502",
        name: "SIMAN",
      },
      {
        id: "3502100",
        regency_id: "3502",
        name: "JETIS",
      },
      {
        id: "3502110",
        regency_id: "3502",
        name: "BALONG",
      },
      {
        id: "3502120",
        regency_id: "3502",
        name: "KAUMAN",
      },
      {
        id: "3502130",
        regency_id: "3502",
        name: "JAMBON",
      },
      {
        id: "3502140",
        regency_id: "3502",
        name: "BADEGAN",
      },
      {
        id: "3502150",
        regency_id: "3502",
        name: "SAMPUNG",
      },
      {
        id: "3502160",
        regency_id: "3502",
        name: "SUKOREJO",
      },
      {
        id: "3502170",
        regency_id: "3502",
        name: "PONOROGO",
      },
      {
        id: "3502180",
        regency_id: "3502",
        name: "BABADAN",
      },
      {
        id: "3502190",
        regency_id: "3502",
        name: "JENANGAN",
      },
      {
        id: "3502200",
        regency_id: "3502",
        name: "NGEBEL",
      },
      {
        id: "3503010",
        regency_id: "3503",
        name: "PANGGUL",
      },
      {
        id: "3503020",
        regency_id: "3503",
        name: "MUNJUNGAN",
      },
      {
        id: "3503030",
        regency_id: "3503",
        name: "WATULIMO",
      },
      {
        id: "3503040",
        regency_id: "3503",
        name: "KAMPAK",
      },
      {
        id: "3503050",
        regency_id: "3503",
        name: "DONGKO",
      },
      {
        id: "3503060",
        regency_id: "3503",
        name: "PULE",
      },
      {
        id: "3503070",
        regency_id: "3503",
        name: "KARANGAN",
      },
      {
        id: "3503071",
        regency_id: "3503",
        name: "SURUH",
      },
      {
        id: "3503080",
        regency_id: "3503",
        name: "GANDUSARI",
      },
      {
        id: "3503090",
        regency_id: "3503",
        name: "DURENAN",
      },
      {
        id: "3503100",
        regency_id: "3503",
        name: "POGALAN",
      },
      {
        id: "3503110",
        regency_id: "3503",
        name: "TRENGGALEK",
      },
      {
        id: "3503120",
        regency_id: "3503",
        name: "TUGU",
      },
      {
        id: "3503130",
        regency_id: "3503",
        name: "BENDUNGAN",
      },
      {
        id: "3504010",
        regency_id: "3504",
        name: "BESUKI",
      },
      {
        id: "3504020",
        regency_id: "3504",
        name: "BANDUNG",
      },
      {
        id: "3504030",
        regency_id: "3504",
        name: "PAKEL",
      },
      {
        id: "3504040",
        regency_id: "3504",
        name: "CAMPUR DARAT",
      },
      {
        id: "3504050",
        regency_id: "3504",
        name: "TANGGUNG GUNUNG",
      },
      {
        id: "3504060",
        regency_id: "3504",
        name: "KALIDAWIR",
      },
      {
        id: "3504070",
        regency_id: "3504",
        name: "PUCANG LABAN",
      },
      {
        id: "3504080",
        regency_id: "3504",
        name: "REJOTANGAN",
      },
      {
        id: "3504090",
        regency_id: "3504",
        name: "NGUNUT",
      },
      {
        id: "3504100",
        regency_id: "3504",
        name: "SUMBERGEMPOL",
      },
      {
        id: "3504110",
        regency_id: "3504",
        name: "BOYOLANGU",
      },
      {
        id: "3504120",
        regency_id: "3504",
        name: "TULUNGAGUNG",
      },
      {
        id: "3504130",
        regency_id: "3504",
        name: "KEDUNGWARU",
      },
      {
        id: "3504140",
        regency_id: "3504",
        name: "NGANTRU",
      },
      {
        id: "3504150",
        regency_id: "3504",
        name: "KARANGREJO",
      },
      {
        id: "3504160",
        regency_id: "3504",
        name: "KAUMAN",
      },
      {
        id: "3504170",
        regency_id: "3504",
        name: "GONDANG",
      },
      {
        id: "3504180",
        regency_id: "3504",
        name: "PAGER WOJO",
      },
      {
        id: "3504190",
        regency_id: "3504",
        name: "SENDANG",
      },
      {
        id: "3505010",
        regency_id: "3505",
        name: "BAKUNG",
      },
      {
        id: "3505020",
        regency_id: "3505",
        name: "WONOTIRTO",
      },
      {
        id: "3505030",
        regency_id: "3505",
        name: "PANGGUNGREJO",
      },
      {
        id: "3505040",
        regency_id: "3505",
        name: "WATES",
      },
      {
        id: "3505050",
        regency_id: "3505",
        name: "BINANGUN",
      },
      {
        id: "3505060",
        regency_id: "3505",
        name: "SUTOJAYAN",
      },
      {
        id: "3505070",
        regency_id: "3505",
        name: "KADEMANGAN",
      },
      {
        id: "3505080",
        regency_id: "3505",
        name: "KANIGORO",
      },
      {
        id: "3505090",
        regency_id: "3505",
        name: "TALUN",
      },
      {
        id: "3505100",
        regency_id: "3505",
        name: "SELOPURO",
      },
      {
        id: "3505110",
        regency_id: "3505",
        name: "KESAMBEN",
      },
      {
        id: "3505120",
        regency_id: "3505",
        name: "SELOREJO",
      },
      {
        id: "3505130",
        regency_id: "3505",
        name: "DOKO",
      },
      {
        id: "3505140",
        regency_id: "3505",
        name: "WLINGI",
      },
      {
        id: "3505150",
        regency_id: "3505",
        name: "GANDUSARI",
      },
      {
        id: "3505160",
        regency_id: "3505",
        name: "GARUM",
      },
      {
        id: "3505170",
        regency_id: "3505",
        name: "NGLEGOK",
      },
      {
        id: "3505180",
        regency_id: "3505",
        name: "SANANKULON",
      },
      {
        id: "3505190",
        regency_id: "3505",
        name: "PONGGOK",
      },
      {
        id: "3505200",
        regency_id: "3505",
        name: "SRENGAT",
      },
      {
        id: "3505210",
        regency_id: "3505",
        name: "WONODADI",
      },
      {
        id: "3505220",
        regency_id: "3505",
        name: "UDANAWU",
      },
      {
        id: "3506010",
        regency_id: "3506",
        name: "MOJO",
      },
      {
        id: "3506020",
        regency_id: "3506",
        name: "SEMEN",
      },
      {
        id: "3506030",
        regency_id: "3506",
        name: "NGADILUWIH",
      },
      {
        id: "3506040",
        regency_id: "3506",
        name: "KRAS",
      },
      {
        id: "3506050",
        regency_id: "3506",
        name: "RINGINREJO",
      },
      {
        id: "3506060",
        regency_id: "3506",
        name: "KANDAT",
      },
      {
        id: "3506070",
        regency_id: "3506",
        name: "WATES",
      },
      {
        id: "3506080",
        regency_id: "3506",
        name: "NGANCAR",
      },
      {
        id: "3506090",
        regency_id: "3506",
        name: "PLOSOKLATEN",
      },
      {
        id: "3506100",
        regency_id: "3506",
        name: "GURAH",
      },
      {
        id: "3506110",
        regency_id: "3506",
        name: "PUNCU",
      },
      {
        id: "3506120",
        regency_id: "3506",
        name: "KEPUNG",
      },
      {
        id: "3506130",
        regency_id: "3506",
        name: "KANDANGAN",
      },
      {
        id: "3506140",
        regency_id: "3506",
        name: "PARE",
      },
      {
        id: "3506141",
        regency_id: "3506",
        name: "BADAS",
      },
      {
        id: "3506150",
        regency_id: "3506",
        name: "KUNJANG",
      },
      {
        id: "3506160",
        regency_id: "3506",
        name: "PLEMAHAN",
      },
      {
        id: "3506170",
        regency_id: "3506",
        name: "PURWOASRI",
      },
      {
        id: "3506180",
        regency_id: "3506",
        name: "PAPAR",
      },
      {
        id: "3506190",
        regency_id: "3506",
        name: "PAGU",
      },
      {
        id: "3506191",
        regency_id: "3506",
        name: "KAYEN KIDUL",
      },
      {
        id: "3506200",
        regency_id: "3506",
        name: "GAMPENGREJO",
      },
      {
        id: "3506201",
        regency_id: "3506",
        name: "NGASEM",
      },
      {
        id: "3506210",
        regency_id: "3506",
        name: "BANYAKAN",
      },
      {
        id: "3506220",
        regency_id: "3506",
        name: "GROGOL",
      },
      {
        id: "3506230",
        regency_id: "3506",
        name: "TAROKAN",
      },
      {
        id: "3507010",
        regency_id: "3507",
        name: "DONOMULYO",
      },
      {
        id: "3507020",
        regency_id: "3507",
        name: "KALIPARE",
      },
      {
        id: "3507030",
        regency_id: "3507",
        name: "PAGAK",
      },
      {
        id: "3507040",
        regency_id: "3507",
        name: "BANTUR",
      },
      {
        id: "3507050",
        regency_id: "3507",
        name: "GEDANGAN",
      },
      {
        id: "3507060",
        regency_id: "3507",
        name: "SUMBERMANJING",
      },
      {
        id: "3507070",
        regency_id: "3507",
        name: "DAMPIT",
      },
      {
        id: "3507080",
        regency_id: "3507",
        name: "TIRTO YUDO",
      },
      {
        id: "3507090",
        regency_id: "3507",
        name: "AMPELGADING",
      },
      {
        id: "3507100",
        regency_id: "3507",
        name: "PONCOKUSUMO",
      },
      {
        id: "3507110",
        regency_id: "3507",
        name: "WAJAK",
      },
      {
        id: "3507120",
        regency_id: "3507",
        name: "TUREN",
      },
      {
        id: "3507130",
        regency_id: "3507",
        name: "BULULAWANG",
      },
      {
        id: "3507140",
        regency_id: "3507",
        name: "GONDANGLEGI",
      },
      {
        id: "3507150",
        regency_id: "3507",
        name: "PAGELARAN",
      },
      {
        id: "3507160",
        regency_id: "3507",
        name: "KEPANJEN",
      },
      {
        id: "3507170",
        regency_id: "3507",
        name: "SUMBER PUCUNG",
      },
      {
        id: "3507180",
        regency_id: "3507",
        name: "KROMENGAN",
      },
      {
        id: "3507190",
        regency_id: "3507",
        name: "NGAJUM",
      },
      {
        id: "3507200",
        regency_id: "3507",
        name: "WONOSARI",
      },
      {
        id: "3507210",
        regency_id: "3507",
        name: "WAGIR",
      },
      {
        id: "3507220",
        regency_id: "3507",
        name: "PAKISAJI",
      },
      {
        id: "3507230",
        regency_id: "3507",
        name: "TAJINAN",
      },
      {
        id: "3507240",
        regency_id: "3507",
        name: "TUMPANG",
      },
      {
        id: "3507250",
        regency_id: "3507",
        name: "PAKIS",
      },
      {
        id: "3507260",
        regency_id: "3507",
        name: "JABUNG",
      },
      {
        id: "3507270",
        regency_id: "3507",
        name: "LAWANG",
      },
      {
        id: "3507280",
        regency_id: "3507",
        name: "SINGOSARI",
      },
      {
        id: "3507290",
        regency_id: "3507",
        name: "KARANGPLOSO",
      },
      {
        id: "3507300",
        regency_id: "3507",
        name: "DAU",
      },
      {
        id: "3507310",
        regency_id: "3507",
        name: "PUJON",
      },
      {
        id: "3507320",
        regency_id: "3507",
        name: "NGANTANG",
      },
      {
        id: "3507330",
        regency_id: "3507",
        name: "KASEMBON",
      },
      {
        id: "3508010",
        regency_id: "3508",
        name: "TEMPURSARI",
      },
      {
        id: "3508020",
        regency_id: "3508",
        name: "PRONOJIWO",
      },
      {
        id: "3508030",
        regency_id: "3508",
        name: "CANDIPURO",
      },
      {
        id: "3508040",
        regency_id: "3508",
        name: "PASIRIAN",
      },
      {
        id: "3508050",
        regency_id: "3508",
        name: "TEMPEH",
      },
      {
        id: "3508060",
        regency_id: "3508",
        name: "LUMAJANG",
      },
      {
        id: "3508061",
        regency_id: "3508",
        name: "SUMBERSUKO",
      },
      {
        id: "3508070",
        regency_id: "3508",
        name: "TEKUNG",
      },
      {
        id: "3508080",
        regency_id: "3508",
        name: "KUNIR",
      },
      {
        id: "3508090",
        regency_id: "3508",
        name: "YOSOWILANGUN",
      },
      {
        id: "3508100",
        regency_id: "3508",
        name: "ROWOKANGKUNG",
      },
      {
        id: "3508110",
        regency_id: "3508",
        name: "JATIROTO",
      },
      {
        id: "3508120",
        regency_id: "3508",
        name: "RANDUAGUNG",
      },
      {
        id: "3508130",
        regency_id: "3508",
        name: "SUKODONO",
      },
      {
        id: "3508140",
        regency_id: "3508",
        name: "PADANG",
      },
      {
        id: "3508150",
        regency_id: "3508",
        name: "PASRUJAMBE",
      },
      {
        id: "3508160",
        regency_id: "3508",
        name: "SENDURO",
      },
      {
        id: "3508170",
        regency_id: "3508",
        name: "GUCIALIT",
      },
      {
        id: "3508180",
        regency_id: "3508",
        name: "KEDUNGJAJANG",
      },
      {
        id: "3508190",
        regency_id: "3508",
        name: "KLAKAH",
      },
      {
        id: "3508200",
        regency_id: "3508",
        name: "RANUYOSO",
      },
      {
        id: "3509010",
        regency_id: "3509",
        name: "KENCONG",
      },
      {
        id: "3509020",
        regency_id: "3509",
        name: "GUMUK MAS",
      },
      {
        id: "3509030",
        regency_id: "3509",
        name: "PUGER",
      },
      {
        id: "3509040",
        regency_id: "3509",
        name: "WULUHAN",
      },
      {
        id: "3509050",
        regency_id: "3509",
        name: "AMBULU",
      },
      {
        id: "3509060",
        regency_id: "3509",
        name: "TEMPUREJO",
      },
      {
        id: "3509070",
        regency_id: "3509",
        name: "SILO",
      },
      {
        id: "3509080",
        regency_id: "3509",
        name: "MAYANG",
      },
      {
        id: "3509090",
        regency_id: "3509",
        name: "MUMBULSARI",
      },
      {
        id: "3509100",
        regency_id: "3509",
        name: "JENGGAWAH",
      },
      {
        id: "3509110",
        regency_id: "3509",
        name: "AJUNG",
      },
      {
        id: "3509120",
        regency_id: "3509",
        name: "RAMBIPUJI",
      },
      {
        id: "3509130",
        regency_id: "3509",
        name: "BALUNG",
      },
      {
        id: "3509140",
        regency_id: "3509",
        name: "UMBULSARI",
      },
      {
        id: "3509150",
        regency_id: "3509",
        name: "SEMBORO",
      },
      {
        id: "3509160",
        regency_id: "3509",
        name: "JOMBANG",
      },
      {
        id: "3509170",
        regency_id: "3509",
        name: "SUMBER BARU",
      },
      {
        id: "3509180",
        regency_id: "3509",
        name: "TANGGUL",
      },
      {
        id: "3509190",
        regency_id: "3509",
        name: "BANGSALSARI",
      },
      {
        id: "3509200",
        regency_id: "3509",
        name: "PANTI",
      },
      {
        id: "3509210",
        regency_id: "3509",
        name: "SUKORAMBI",
      },
      {
        id: "3509220",
        regency_id: "3509",
        name: "ARJASA",
      },
      {
        id: "3509230",
        regency_id: "3509",
        name: "PAKUSARI",
      },
      {
        id: "3509240",
        regency_id: "3509",
        name: "KALISAT",
      },
      {
        id: "3509250",
        regency_id: "3509",
        name: "LEDOKOMBO",
      },
      {
        id: "3509260",
        regency_id: "3509",
        name: "SUMBERJAMBE",
      },
      {
        id: "3509270",
        regency_id: "3509",
        name: "SUKOWONO",
      },
      {
        id: "3509280",
        regency_id: "3509",
        name: "JELBUK",
      },
      {
        id: "3509710",
        regency_id: "3509",
        name: "KALIWATES",
      },
      {
        id: "3509720",
        regency_id: "3509",
        name: "SUMBERSARI",
      },
      {
        id: "3509730",
        regency_id: "3509",
        name: "PATRANG",
      },
      {
        id: "3510010",
        regency_id: "3510",
        name: "PESANGGARAN",
      },
      {
        id: "3510011",
        regency_id: "3510",
        name: "SILIRAGUNG",
      },
      {
        id: "3510020",
        regency_id: "3510",
        name: "BANGOREJO",
      },
      {
        id: "3510030",
        regency_id: "3510",
        name: "PURWOHARJO",
      },
      {
        id: "3510040",
        regency_id: "3510",
        name: "TEGALDLIMO",
      },
      {
        id: "3510050",
        regency_id: "3510",
        name: "MUNCAR",
      },
      {
        id: "3510060",
        regency_id: "3510",
        name: "CLURING",
      },
      {
        id: "3510070",
        regency_id: "3510",
        name: "GAMBIRAN",
      },
      {
        id: "3510071",
        regency_id: "3510",
        name: "TEGALSARI",
      },
      {
        id: "3510080",
        regency_id: "3510",
        name: "GLENMORE",
      },
      {
        id: "3510090",
        regency_id: "3510",
        name: "KALIBARU",
      },
      {
        id: "3510100",
        regency_id: "3510",
        name: "GENTENG",
      },
      {
        id: "3510110",
        regency_id: "3510",
        name: "SRONO",
      },
      {
        id: "3510120",
        regency_id: "3510",
        name: "ROGOJAMPI",
      },
      {
        id: "3510121",
        regency_id: "3510",
        name: "BLIMBINGSARI",
      },
      {
        id: "3510130",
        regency_id: "3510",
        name: "KABAT",
      },
      {
        id: "3510140",
        regency_id: "3510",
        name: "SINGOJURUH",
      },
      {
        id: "3510150",
        regency_id: "3510",
        name: "SEMPU",
      },
      {
        id: "3510160",
        regency_id: "3510",
        name: "SONGGON",
      },
      {
        id: "3510170",
        regency_id: "3510",
        name: "GLAGAH",
      },
      {
        id: "3510171",
        regency_id: "3510",
        name: "LICIN",
      },
      {
        id: "3510180",
        regency_id: "3510",
        name: "BANYUWANGI",
      },
      {
        id: "3510190",
        regency_id: "3510",
        name: "GIRI",
      },
      {
        id: "3510200",
        regency_id: "3510",
        name: "KALIPURO",
      },
      {
        id: "3510210",
        regency_id: "3510",
        name: "WONGSOREJO",
      },
      {
        id: "3511010",
        regency_id: "3511",
        name: "MAESAN",
      },
      {
        id: "3511020",
        regency_id: "3511",
        name: "GRUJUGAN",
      },
      {
        id: "3511030",
        regency_id: "3511",
        name: "TAMANAN",
      },
      {
        id: "3511031",
        regency_id: "3511",
        name: "JAMBESARI DARUS SHOLAH",
      },
      {
        id: "3511040",
        regency_id: "3511",
        name: "PUJER",
      },
      {
        id: "3511050",
        regency_id: "3511",
        name: "TLOGOSARI",
      },
      {
        id: "3511060",
        regency_id: "3511",
        name: "SUKOSARI",
      },
      {
        id: "3511061",
        regency_id: "3511",
        name: "SUMBER WRINGIN",
      },
      {
        id: "3511070",
        regency_id: "3511",
        name: "TAPEN",
      },
      {
        id: "3511080",
        regency_id: "3511",
        name: "WONOSARI",
      },
      {
        id: "3511090",
        regency_id: "3511",
        name: "TENGGARANG",
      },
      {
        id: "3511100",
        regency_id: "3511",
        name: "BONDOWOSO",
      },
      {
        id: "3511110",
        regency_id: "3511",
        name: "CURAH DAMI",
      },
      {
        id: "3511111",
        regency_id: "3511",
        name: "BINAKAL",
      },
      {
        id: "3511120",
        regency_id: "3511",
        name: "PAKEM",
      },
      {
        id: "3511130",
        regency_id: "3511",
        name: "WRINGIN",
      },
      {
        id: "3511140",
        regency_id: "3511",
        name: "TEGALAMPEL",
      },
      {
        id: "3511141",
        regency_id: "3511",
        name: "TAMAN KROCOK",
      },
      {
        id: "3511150",
        regency_id: "3511",
        name: "KLABANG",
      },
      {
        id: "3511151",
        regency_id: "3511",
        name: "IJEN",
      },
      {
        id: "3511152",
        regency_id: "3511",
        name: "BOTOLINGGO",
      },
      {
        id: "3511160",
        regency_id: "3511",
        name: "PRAJEKAN",
      },
      {
        id: "3511170",
        regency_id: "3511",
        name: "CERMEE",
      },
      {
        id: "3512010",
        regency_id: "3512",
        name: "SUMBERMALANG",
      },
      {
        id: "3512020",
        regency_id: "3512",
        name: "JATIBANTENG",
      },
      {
        id: "3512030",
        regency_id: "3512",
        name: "BANYUGLUGUR",
      },
      {
        id: "3512040",
        regency_id: "3512",
        name: "BESUKI",
      },
      {
        id: "3512050",
        regency_id: "3512",
        name: "SUBOH",
      },
      {
        id: "3512060",
        regency_id: "3512",
        name: "MLANDINGAN",
      },
      {
        id: "3512070",
        regency_id: "3512",
        name: "BUNGATAN",
      },
      {
        id: "3512080",
        regency_id: "3512",
        name: "KENDIT",
      },
      {
        id: "3512090",
        regency_id: "3512",
        name: "PANARUKAN",
      },
      {
        id: "3512100",
        regency_id: "3512",
        name: "SITUBONDO",
      },
      {
        id: "3512110",
        regency_id: "3512",
        name: "MANGARAN",
      },
      {
        id: "3512120",
        regency_id: "3512",
        name: "PANJI",
      },
      {
        id: "3512130",
        regency_id: "3512",
        name: "KAPONGAN",
      },
      {
        id: "3512140",
        regency_id: "3512",
        name: "ARJASA",
      },
      {
        id: "3512150",
        regency_id: "3512",
        name: "JANGKAR",
      },
      {
        id: "3512160",
        regency_id: "3512",
        name: "ASEMBAGUS",
      },
      {
        id: "3512170",
        regency_id: "3512",
        name: "BANYUPUTIH",
      },
      {
        id: "3513010",
        regency_id: "3513",
        name: "SUKAPURA",
      },
      {
        id: "3513020",
        regency_id: "3513",
        name: "SUMBER",
      },
      {
        id: "3513030",
        regency_id: "3513",
        name: "KURIPAN",
      },
      {
        id: "3513040",
        regency_id: "3513",
        name: "BANTARAN",
      },
      {
        id: "3513050",
        regency_id: "3513",
        name: "LECES",
      },
      {
        id: "3513060",
        regency_id: "3513",
        name: "TEGALSIWALAN",
      },
      {
        id: "3513070",
        regency_id: "3513",
        name: "BANYUANYAR",
      },
      {
        id: "3513080",
        regency_id: "3513",
        name: "TIRIS",
      },
      {
        id: "3513090",
        regency_id: "3513",
        name: "KRUCIL",
      },
      {
        id: "3513100",
        regency_id: "3513",
        name: "GADING",
      },
      {
        id: "3513110",
        regency_id: "3513",
        name: "PAKUNIRAN",
      },
      {
        id: "3513120",
        regency_id: "3513",
        name: "KOTAANYAR",
      },
      {
        id: "3513130",
        regency_id: "3513",
        name: "PAITON",
      },
      {
        id: "3513140",
        regency_id: "3513",
        name: "BESUK",
      },
      {
        id: "3513150",
        regency_id: "3513",
        name: "KRAKSAAN",
      },
      {
        id: "3513160",
        regency_id: "3513",
        name: "KREJENGAN",
      },
      {
        id: "3513170",
        regency_id: "3513",
        name: "PAJARAKAN",
      },
      {
        id: "3513180",
        regency_id: "3513",
        name: "MARON",
      },
      {
        id: "3513190",
        regency_id: "3513",
        name: "GENDING",
      },
      {
        id: "3513200",
        regency_id: "3513",
        name: "DRINGU",
      },
      {
        id: "3513210",
        regency_id: "3513",
        name: "WONOMERTO",
      },
      {
        id: "3513220",
        regency_id: "3513",
        name: "LUMBANG",
      },
      {
        id: "3513230",
        regency_id: "3513",
        name: "TONGAS",
      },
      {
        id: "3513240",
        regency_id: "3513",
        name: "SUMBERASIH",
      },
      {
        id: "3514010",
        regency_id: "3514",
        name: "PURWODADI",
      },
      {
        id: "3514020",
        regency_id: "3514",
        name: "TUTUR",
      },
      {
        id: "3514030",
        regency_id: "3514",
        name: "PUSPO",
      },
      {
        id: "3514040",
        regency_id: "3514",
        name: "TOSARI",
      },
      {
        id: "3514050",
        regency_id: "3514",
        name: "LUMBANG",
      },
      {
        id: "3514060",
        regency_id: "3514",
        name: "PASREPAN",
      },
      {
        id: "3514070",
        regency_id: "3514",
        name: "KEJAYAN",
      },
      {
        id: "3514080",
        regency_id: "3514",
        name: "WONOREJO",
      },
      {
        id: "3514090",
        regency_id: "3514",
        name: "PURWOSARI",
      },
      {
        id: "3514100",
        regency_id: "3514",
        name: "PRIGEN",
      },
      {
        id: "3514110",
        regency_id: "3514",
        name: "SUKOREJO",
      },
      {
        id: "3514120",
        regency_id: "3514",
        name: "PANDAAN",
      },
      {
        id: "3514130",
        regency_id: "3514",
        name: "GEMPOL",
      },
      {
        id: "3514140",
        regency_id: "3514",
        name: "BEJI",
      },
      {
        id: "3514150",
        regency_id: "3514",
        name: "BANGIL",
      },
      {
        id: "3514160",
        regency_id: "3514",
        name: "REMBANG",
      },
      {
        id: "3514170",
        regency_id: "3514",
        name: "KRATON",
      },
      {
        id: "3514180",
        regency_id: "3514",
        name: "POHJENTREK",
      },
      {
        id: "3514190",
        regency_id: "3514",
        name: "GONDANG WETAN",
      },
      {
        id: "3514200",
        regency_id: "3514",
        name: "REJOSO",
      },
      {
        id: "3514210",
        regency_id: "3514",
        name: "WINONGAN",
      },
      {
        id: "3514220",
        regency_id: "3514",
        name: "GRATI",
      },
      {
        id: "3514230",
        regency_id: "3514",
        name: "LEKOK",
      },
      {
        id: "3514240",
        regency_id: "3514",
        name: "NGULING",
      },
      {
        id: "3515010",
        regency_id: "3515",
        name: "TARIK",
      },
      {
        id: "3515020",
        regency_id: "3515",
        name: "PRAMBON",
      },
      {
        id: "3515030",
        regency_id: "3515",
        name: "KREMBUNG",
      },
      {
        id: "3515040",
        regency_id: "3515",
        name: "PORONG",
      },
      {
        id: "3515050",
        regency_id: "3515",
        name: "JABON",
      },
      {
        id: "3515060",
        regency_id: "3515",
        name: "TANGGULANGIN",
      },
      {
        id: "3515070",
        regency_id: "3515",
        name: "CANDI",
      },
      {
        id: "3515080",
        regency_id: "3515",
        name: "TULANGAN",
      },
      {
        id: "3515090",
        regency_id: "3515",
        name: "WONOAYU",
      },
      {
        id: "3515100",
        regency_id: "3515",
        name: "SUKODONO",
      },
      {
        id: "3515110",
        regency_id: "3515",
        name: "SIDOARJO",
      },
      {
        id: "3515120",
        regency_id: "3515",
        name: "BUDURAN",
      },
      {
        id: "3515130",
        regency_id: "3515",
        name: "SEDATI",
      },
      {
        id: "3515140",
        regency_id: "3515",
        name: "WARU",
      },
      {
        id: "3515150",
        regency_id: "3515",
        name: "GEDANGAN",
      },
      {
        id: "3515160",
        regency_id: "3515",
        name: "TAMAN",
      },
      {
        id: "3515170",
        regency_id: "3515",
        name: "KRIAN",
      },
      {
        id: "3515180",
        regency_id: "3515",
        name: "BALONG BENDO",
      },
      {
        id: "3516010",
        regency_id: "3516",
        name: "JATIREJO",
      },
      {
        id: "3516020",
        regency_id: "3516",
        name: "GONDANG",
      },
      {
        id: "3516030",
        regency_id: "3516",
        name: "PACET",
      },
      {
        id: "3516040",
        regency_id: "3516",
        name: "TRAWAS",
      },
      {
        id: "3516050",
        regency_id: "3516",
        name: "NGORO",
      },
      {
        id: "3516060",
        regency_id: "3516",
        name: "PUNGGING",
      },
      {
        id: "3516070",
        regency_id: "3516",
        name: "KUTOREJO",
      },
      {
        id: "3516080",
        regency_id: "3516",
        name: "MOJOSARI",
      },
      {
        id: "3516090",
        regency_id: "3516",
        name: "BANGSAL",
      },
      {
        id: "3516091",
        regency_id: "3516",
        name: "MOJOANYAR",
      },
      {
        id: "3516100",
        regency_id: "3516",
        name: "DLANGGU",
      },
      {
        id: "3516110",
        regency_id: "3516",
        name: "PURI",
      },
      {
        id: "3516120",
        regency_id: "3516",
        name: "TROWULAN",
      },
      {
        id: "3516130",
        regency_id: "3516",
        name: "SOOKO",
      },
      {
        id: "3516140",
        regency_id: "3516",
        name: "GEDEK",
      },
      {
        id: "3516150",
        regency_id: "3516",
        name: "KEMLAGI",
      },
      {
        id: "3516160",
        regency_id: "3516",
        name: "JETIS",
      },
      {
        id: "3516170",
        regency_id: "3516",
        name: "DAWAR BLANDONG",
      },
      {
        id: "3517010",
        regency_id: "3517",
        name: "BANDAR KEDUNG MULYO",
      },
      {
        id: "3517020",
        regency_id: "3517",
        name: "PERAK",
      },
      {
        id: "3517030",
        regency_id: "3517",
        name: "GUDO",
      },
      {
        id: "3517040",
        regency_id: "3517",
        name: "DIWEK",
      },
      {
        id: "3517050",
        regency_id: "3517",
        name: "NGORO",
      },
      {
        id: "3517060",
        regency_id: "3517",
        name: "MOJOWARNO",
      },
      {
        id: "3517070",
        regency_id: "3517",
        name: "BARENG",
      },
      {
        id: "3517080",
        regency_id: "3517",
        name: "WONOSALAM",
      },
      {
        id: "3517090",
        regency_id: "3517",
        name: "MOJOAGUNG",
      },
      {
        id: "3517100",
        regency_id: "3517",
        name: "SUMOBITO",
      },
      {
        id: "3517110",
        regency_id: "3517",
        name: "JOGO ROTO",
      },
      {
        id: "3517120",
        regency_id: "3517",
        name: "PETERONGAN",
      },
      {
        id: "3517130",
        regency_id: "3517",
        name: "JOMBANG",
      },
      {
        id: "3517140",
        regency_id: "3517",
        name: "MEGALUH",
      },
      {
        id: "3517150",
        regency_id: "3517",
        name: "TEMBELANG",
      },
      {
        id: "3517160",
        regency_id: "3517",
        name: "KESAMBEN",
      },
      {
        id: "3517170",
        regency_id: "3517",
        name: "KUDU",
      },
      {
        id: "3517171",
        regency_id: "3517",
        name: "NGUSIKAN",
      },
      {
        id: "3517180",
        regency_id: "3517",
        name: "PLOSO",
      },
      {
        id: "3517190",
        regency_id: "3517",
        name: "KABUH",
      },
      {
        id: "3517200",
        regency_id: "3517",
        name: "PLANDAAN",
      },
      {
        id: "3518010",
        regency_id: "3518",
        name: "SAWAHAN",
      },
      {
        id: "3518020",
        regency_id: "3518",
        name: "NGETOS",
      },
      {
        id: "3518030",
        regency_id: "3518",
        name: "BERBEK",
      },
      {
        id: "3518040",
        regency_id: "3518",
        name: "LOCERET",
      },
      {
        id: "3518050",
        regency_id: "3518",
        name: "PACE",
      },
      {
        id: "3518060",
        regency_id: "3518",
        name: "TANJUNGANOM",
      },
      {
        id: "3518070",
        regency_id: "3518",
        name: "PRAMBON",
      },
      {
        id: "3518080",
        regency_id: "3518",
        name: "NGRONGGOT",
      },
      {
        id: "3518090",
        regency_id: "3518",
        name: "KERTOSONO",
      },
      {
        id: "3518100",
        regency_id: "3518",
        name: "PATIANROWO",
      },
      {
        id: "3518110",
        regency_id: "3518",
        name: "BARON",
      },
      {
        id: "3518120",
        regency_id: "3518",
        name: "GONDANG",
      },
      {
        id: "3518130",
        regency_id: "3518",
        name: "SUKOMORO",
      },
      {
        id: "3518140",
        regency_id: "3518",
        name: "NGANJUK",
      },
      {
        id: "3518150",
        regency_id: "3518",
        name: "BAGOR",
      },
      {
        id: "3518160",
        regency_id: "3518",
        name: "WILANGAN",
      },
      {
        id: "3518170",
        regency_id: "3518",
        name: "REJOSO",
      },
      {
        id: "3518180",
        regency_id: "3518",
        name: "NGLUYU",
      },
      {
        id: "3518190",
        regency_id: "3518",
        name: "LENGKONG",
      },
      {
        id: "3518200",
        regency_id: "3518",
        name: "JATIKALEN",
      },
      {
        id: "3519010",
        regency_id: "3519",
        name: "KEBONSARI",
      },
      {
        id: "3519020",
        regency_id: "3519",
        name: "GEGER",
      },
      {
        id: "3519030",
        regency_id: "3519",
        name: "DOLOPO",
      },
      {
        id: "3519040",
        regency_id: "3519",
        name: "DAGANGAN",
      },
      {
        id: "3519050",
        regency_id: "3519",
        name: "WUNGU",
      },
      {
        id: "3519060",
        regency_id: "3519",
        name: "KARE",
      },
      {
        id: "3519070",
        regency_id: "3519",
        name: "GEMARANG",
      },
      {
        id: "3519080",
        regency_id: "3519",
        name: "SARADAN",
      },
      {
        id: "3519090",
        regency_id: "3519",
        name: "PILANGKENCENG",
      },
      {
        id: "3519100",
        regency_id: "3519",
        name: "MEJAYAN",
      },
      {
        id: "3519110",
        regency_id: "3519",
        name: "WONOASRI",
      },
      {
        id: "3519120",
        regency_id: "3519",
        name: "BALEREJO",
      },
      {
        id: "3519130",
        regency_id: "3519",
        name: "MADIUN",
      },
      {
        id: "3519140",
        regency_id: "3519",
        name: "SAWAHAN",
      },
      {
        id: "3519150",
        regency_id: "3519",
        name: "JIWAN",
      },
      {
        id: "3520010",
        regency_id: "3520",
        name: "PONCOL",
      },
      {
        id: "3520020",
        regency_id: "3520",
        name: "PARANG",
      },
      {
        id: "3520030",
        regency_id: "3520",
        name: "LEMBEYAN",
      },
      {
        id: "3520040",
        regency_id: "3520",
        name: "TAKERAN",
      },
      {
        id: "3520041",
        regency_id: "3520",
        name: "NGUNTORONADI",
      },
      {
        id: "3520050",
        regency_id: "3520",
        name: "KAWEDANAN",
      },
      {
        id: "3520060",
        regency_id: "3520",
        name: "MAGETAN",
      },
      {
        id: "3520061",
        regency_id: "3520",
        name: "NGARIBOYO",
      },
      {
        id: "3520070",
        regency_id: "3520",
        name: "PLAOSAN",
      },
      {
        id: "3520071",
        regency_id: "3520",
        name: "SIDOREJO",
      },
      {
        id: "3520080",
        regency_id: "3520",
        name: "PANEKAN",
      },
      {
        id: "3520090",
        regency_id: "3520",
        name: "SUKOMORO",
      },
      {
        id: "3520100",
        regency_id: "3520",
        name: "BENDO",
      },
      {
        id: "3520110",
        regency_id: "3520",
        name: "MAOSPATI",
      },
      {
        id: "3520120",
        regency_id: "3520",
        name: "KARANGREJO",
      },
      {
        id: "3520121",
        regency_id: "3520",
        name: "KARAS",
      },
      {
        id: "3520130",
        regency_id: "3520",
        name: "BARAT",
      },
      {
        id: "3520131",
        regency_id: "3520",
        name: "KARTOHARJO",
      },
      {
        id: "3521010",
        regency_id: "3521",
        name: "SINE",
      },
      {
        id: "3521020",
        regency_id: "3521",
        name: "NGRAMBE",
      },
      {
        id: "3521030",
        regency_id: "3521",
        name: "JOGOROGO",
      },
      {
        id: "3521040",
        regency_id: "3521",
        name: "KENDAL",
      },
      {
        id: "3521050",
        regency_id: "3521",
        name: "GENENG",
      },
      {
        id: "3521051",
        regency_id: "3521",
        name: "GERIH",
      },
      {
        id: "3521060",
        regency_id: "3521",
        name: "KWADUNGAN",
      },
      {
        id: "3521070",
        regency_id: "3521",
        name: "PANGKUR",
      },
      {
        id: "3521080",
        regency_id: "3521",
        name: "KARANGJATI",
      },
      {
        id: "3521090",
        regency_id: "3521",
        name: "BRINGIN",
      },
      {
        id: "3521100",
        regency_id: "3521",
        name: "PADAS",
      },
      {
        id: "3521101",
        regency_id: "3521",
        name: "KASREMAN",
      },
      {
        id: "3521110",
        regency_id: "3521",
        name: "NGAWI",
      },
      {
        id: "3521120",
        regency_id: "3521",
        name: "PARON",
      },
      {
        id: "3521130",
        regency_id: "3521",
        name: "KEDUNGGALAR",
      },
      {
        id: "3521140",
        regency_id: "3521",
        name: "PITU",
      },
      {
        id: "3521150",
        regency_id: "3521",
        name: "WIDODAREN",
      },
      {
        id: "3521160",
        regency_id: "3521",
        name: "MANTINGAN",
      },
      {
        id: "3521170",
        regency_id: "3521",
        name: "KARANGANYAR",
      },
      {
        id: "3522010",
        regency_id: "3522",
        name: "MARGOMULYO",
      },
      {
        id: "3522020",
        regency_id: "3522",
        name: "NGRAHO",
      },
      {
        id: "3522030",
        regency_id: "3522",
        name: "TAMBAKREJO",
      },
      {
        id: "3522040",
        regency_id: "3522",
        name: "NGAMBON",
      },
      {
        id: "3522041",
        regency_id: "3522",
        name: "SEKAR",
      },
      {
        id: "3522050",
        regency_id: "3522",
        name: "BUBULAN",
      },
      {
        id: "3522051",
        regency_id: "3522",
        name: "GONDANG",
      },
      {
        id: "3522060",
        regency_id: "3522",
        name: "TEMAYANG",
      },
      {
        id: "3522070",
        regency_id: "3522",
        name: "SUGIHWARAS",
      },
      {
        id: "3522080",
        regency_id: "3522",
        name: "KEDUNGADEM",
      },
      {
        id: "3522090",
        regency_id: "3522",
        name: "KEPOH BARU",
      },
      {
        id: "3522100",
        regency_id: "3522",
        name: "BAURENO",
      },
      {
        id: "3522110",
        regency_id: "3522",
        name: "KANOR",
      },
      {
        id: "3522120",
        regency_id: "3522",
        name: "SUMBEREJO",
      },
      {
        id: "3522130",
        regency_id: "3522",
        name: "BALEN",
      },
      {
        id: "3522140",
        regency_id: "3522",
        name: "SUKOSEWU",
      },
      {
        id: "3522150",
        regency_id: "3522",
        name: "KAPAS",
      },
      {
        id: "3522160",
        regency_id: "3522",
        name: "BOJONEGORO",
      },
      {
        id: "3522170",
        regency_id: "3522",
        name: "TRUCUK",
      },
      {
        id: "3522180",
        regency_id: "3522",
        name: "DANDER",
      },
      {
        id: "3522190",
        regency_id: "3522",
        name: "NGASEM",
      },
      {
        id: "3522191",
        regency_id: "3522",
        name: "GAYAM",
      },
      {
        id: "3522200",
        regency_id: "3522",
        name: "KALITIDU",
      },
      {
        id: "3522210",
        regency_id: "3522",
        name: "MALO",
      },
      {
        id: "3522220",
        regency_id: "3522",
        name: "PURWOSARI",
      },
      {
        id: "3522230",
        regency_id: "3522",
        name: "PADANGAN",
      },
      {
        id: "3522240",
        regency_id: "3522",
        name: "KASIMAN",
      },
      {
        id: "3522241",
        regency_id: "3522",
        name: "KEDEWAN",
      },
      {
        id: "3523010",
        regency_id: "3523",
        name: "KENDURUAN",
      },
      {
        id: "3523020",
        regency_id: "3523",
        name: "BANGILAN",
      },
      {
        id: "3523030",
        regency_id: "3523",
        name: "SENORI",
      },
      {
        id: "3523040",
        regency_id: "3523",
        name: "SINGGAHAN",
      },
      {
        id: "3523050",
        regency_id: "3523",
        name: "MONTONG",
      },
      {
        id: "3523060",
        regency_id: "3523",
        name: "PARENGAN",
      },
      {
        id: "3523070",
        regency_id: "3523",
        name: "SOKO",
      },
      {
        id: "3523080",
        regency_id: "3523",
        name: "RENGEL",
      },
      {
        id: "3523081",
        regency_id: "3523",
        name: "GRABAGAN",
      },
      {
        id: "3523090",
        regency_id: "3523",
        name: "PLUMPANG",
      },
      {
        id: "3523100",
        regency_id: "3523",
        name: "WIDANG",
      },
      {
        id: "3523110",
        regency_id: "3523",
        name: "PALANG",
      },
      {
        id: "3523120",
        regency_id: "3523",
        name: "SEMANDING",
      },
      {
        id: "3523130",
        regency_id: "3523",
        name: "TUBAN",
      },
      {
        id: "3523140",
        regency_id: "3523",
        name: "JENU",
      },
      {
        id: "3523150",
        regency_id: "3523",
        name: "MERAKURAK",
      },
      {
        id: "3523160",
        regency_id: "3523",
        name: "KEREK",
      },
      {
        id: "3523170",
        regency_id: "3523",
        name: "TAMBAKBOYO",
      },
      {
        id: "3523180",
        regency_id: "3523",
        name: "JATIROGO",
      },
      {
        id: "3523190",
        regency_id: "3523",
        name: "BANCAR",
      },
      {
        id: "3524010",
        regency_id: "3524",
        name: "SUKORAME",
      },
      {
        id: "3524020",
        regency_id: "3524",
        name: "BLULUK",
      },
      {
        id: "3524030",
        regency_id: "3524",
        name: "NGIMBANG",
      },
      {
        id: "3524040",
        regency_id: "3524",
        name: "SAMBENG",
      },
      {
        id: "3524050",
        regency_id: "3524",
        name: "MANTUP",
      },
      {
        id: "3524060",
        regency_id: "3524",
        name: "KEMBANGBAHU",
      },
      {
        id: "3524070",
        regency_id: "3524",
        name: "SUGIO",
      },
      {
        id: "3524080",
        regency_id: "3524",
        name: "KEDUNGPRING",
      },
      {
        id: "3524090",
        regency_id: "3524",
        name: "MODO",
      },
      {
        id: "3524100",
        regency_id: "3524",
        name: "BABAT",
      },
      {
        id: "3524110",
        regency_id: "3524",
        name: "PUCUK",
      },
      {
        id: "3524120",
        regency_id: "3524",
        name: "SUKODADI",
      },
      {
        id: "3524130",
        regency_id: "3524",
        name: "LAMONGAN",
      },
      {
        id: "3524140",
        regency_id: "3524",
        name: "TIKUNG",
      },
      {
        id: "3524141",
        regency_id: "3524",
        name: "SARIREJO",
      },
      {
        id: "3524150",
        regency_id: "3524",
        name: "DEKET",
      },
      {
        id: "3524160",
        regency_id: "3524",
        name: "GLAGAH",
      },
      {
        id: "3524170",
        regency_id: "3524",
        name: "KARANGBINANGUN",
      },
      {
        id: "3524180",
        regency_id: "3524",
        name: "TURI",
      },
      {
        id: "3524190",
        regency_id: "3524",
        name: "KALITENGAH",
      },
      {
        id: "3524200",
        regency_id: "3524",
        name: "KARANG GENENG",
      },
      {
        id: "3524210",
        regency_id: "3524",
        name: "SEKARAN",
      },
      {
        id: "3524220",
        regency_id: "3524",
        name: "MADURAN",
      },
      {
        id: "3524230",
        regency_id: "3524",
        name: "LAREN",
      },
      {
        id: "3524240",
        regency_id: "3524",
        name: "SOLOKURO",
      },
      {
        id: "3524250",
        regency_id: "3524",
        name: "PACIRAN",
      },
      {
        id: "3524260",
        regency_id: "3524",
        name: "BRONDONG",
      },
      {
        id: "3525010",
        regency_id: "3525",
        name: "WRINGINANOM",
      },
      {
        id: "3525020",
        regency_id: "3525",
        name: "DRIYOREJO",
      },
      {
        id: "3525030",
        regency_id: "3525",
        name: "KEDAMEAN",
      },
      {
        id: "3525040",
        regency_id: "3525",
        name: "MENGANTI",
      },
      {
        id: "3525050",
        regency_id: "3525",
        name: "CERME",
      },
      {
        id: "3525060",
        regency_id: "3525",
        name: "BENJENG",
      },
      {
        id: "3525070",
        regency_id: "3525",
        name: "BALONGPANGGANG",
      },
      {
        id: "3525080",
        regency_id: "3525",
        name: "DUDUKSAMPEYAN",
      },
      {
        id: "3525090",
        regency_id: "3525",
        name: "KEBOMAS",
      },
      {
        id: "3525100",
        regency_id: "3525",
        name: "GRESIK",
      },
      {
        id: "3525110",
        regency_id: "3525",
        name: "MANYAR",
      },
      {
        id: "3525120",
        regency_id: "3525",
        name: "BUNGAH",
      },
      {
        id: "3525130",
        regency_id: "3525",
        name: "SIDAYU",
      },
      {
        id: "3525140",
        regency_id: "3525",
        name: "DUKUN",
      },
      {
        id: "3525150",
        regency_id: "3525",
        name: "PANCENG",
      },
      {
        id: "3525160",
        regency_id: "3525",
        name: "UJUNGPANGKAH",
      },
      {
        id: "3525170",
        regency_id: "3525",
        name: "SANGKAPURA",
      },
      {
        id: "3525180",
        regency_id: "3525",
        name: "TAMBAK",
      },
      {
        id: "3526010",
        regency_id: "3526",
        name: "KAMAL",
      },
      {
        id: "3526020",
        regency_id: "3526",
        name: "LABANG",
      },
      {
        id: "3526030",
        regency_id: "3526",
        name: "KWANYAR",
      },
      {
        id: "3526040",
        regency_id: "3526",
        name: "MODUNG",
      },
      {
        id: "3526050",
        regency_id: "3526",
        name: "BLEGA",
      },
      {
        id: "3526060",
        regency_id: "3526",
        name: "KONANG",
      },
      {
        id: "3526070",
        regency_id: "3526",
        name: "GALIS",
      },
      {
        id: "3526080",
        regency_id: "3526",
        name: "TANAH MERAH",
      },
      {
        id: "3526090",
        regency_id: "3526",
        name: "TRAGAH",
      },
      {
        id: "3526100",
        regency_id: "3526",
        name: "SOCAH",
      },
      {
        id: "3526110",
        regency_id: "3526",
        name: "BANGKALAN",
      },
      {
        id: "3526120",
        regency_id: "3526",
        name: "BURNEH",
      },
      {
        id: "3526130",
        regency_id: "3526",
        name: "AROSBAYA",
      },
      {
        id: "3526140",
        regency_id: "3526",
        name: "GEGER",
      },
      {
        id: "3526150",
        regency_id: "3526",
        name: "KOKOP",
      },
      {
        id: "3526160",
        regency_id: "3526",
        name: "TANJUNGBUMI",
      },
      {
        id: "3526170",
        regency_id: "3526",
        name: "SEPULU",
      },
      {
        id: "3526180",
        regency_id: "3526",
        name: "KLAMPIS",
      },
      {
        id: "3527010",
        regency_id: "3527",
        name: "SRESEH",
      },
      {
        id: "3527020",
        regency_id: "3527",
        name: "TORJUN",
      },
      {
        id: "3527021",
        regency_id: "3527",
        name: "PANGARENGAN",
      },
      {
        id: "3527030",
        regency_id: "3527",
        name: "SAMPANG",
      },
      {
        id: "3527040",
        regency_id: "3527",
        name: "CAMPLONG",
      },
      {
        id: "3527050",
        regency_id: "3527",
        name: "OMBEN",
      },
      {
        id: "3527060",
        regency_id: "3527",
        name: "KEDUNGDUNG",
      },
      {
        id: "3527070",
        regency_id: "3527",
        name: "JRENGIK",
      },
      {
        id: "3527080",
        regency_id: "3527",
        name: "TAMBELANGAN",
      },
      {
        id: "3527090",
        regency_id: "3527",
        name: "BANYUATES",
      },
      {
        id: "3527100",
        regency_id: "3527",
        name: "ROBATAL",
      },
      {
        id: "3527101",
        regency_id: "3527",
        name: "KARANG PENANG",
      },
      {
        id: "3527110",
        regency_id: "3527",
        name: "KETAPANG",
      },
      {
        id: "3527120",
        regency_id: "3527",
        name: "SOKOBANAH",
      },
      {
        id: "3528010",
        regency_id: "3528",
        name: "TLANAKAN",
      },
      {
        id: "3528020",
        regency_id: "3528",
        name: "PADEMAWU",
      },
      {
        id: "3528030",
        regency_id: "3528",
        name: "GALIS",
      },
      {
        id: "3528040",
        regency_id: "3528",
        name: "LARANGAN",
      },
      {
        id: "3528050",
        regency_id: "3528",
        name: "PAMEKASAN",
      },
      {
        id: "3528060",
        regency_id: "3528",
        name: "PROPPO",
      },
      {
        id: "3528070",
        regency_id: "3528",
        name: "PALENGAAN",
      },
      {
        id: "3528080",
        regency_id: "3528",
        name: "PEGANTENAN",
      },
      {
        id: "3528090",
        regency_id: "3528",
        name: "KADUR",
      },
      {
        id: "3528100",
        regency_id: "3528",
        name: "PAKONG",
      },
      {
        id: "3528110",
        regency_id: "3528",
        name: "WARU",
      },
      {
        id: "3528120",
        regency_id: "3528",
        name: "BATU MARMAR",
      },
      {
        id: "3528130",
        regency_id: "3528",
        name: "PASEAN",
      },
      {
        id: "3529010",
        regency_id: "3529",
        name: "PRAGAAN",
      },
      {
        id: "3529020",
        regency_id: "3529",
        name: "BLUTO",
      },
      {
        id: "3529030",
        regency_id: "3529",
        name: "SARONGGI",
      },
      {
        id: "3529040",
        regency_id: "3529",
        name: "GILIGENTENG",
      },
      {
        id: "3529050",
        regency_id: "3529",
        name: "TALANGO",
      },
      {
        id: "3529060",
        regency_id: "3529",
        name: "KALIANGET",
      },
      {
        id: "3529070",
        regency_id: "3529",
        name: "KOTA SUMENEP",
      },
      {
        id: "3529071",
        regency_id: "3529",
        name: "BATUAN",
      },
      {
        id: "3529080",
        regency_id: "3529",
        name: "LENTENG",
      },
      {
        id: "3529090",
        regency_id: "3529",
        name: "GANDING",
      },
      {
        id: "3529100",
        regency_id: "3529",
        name: "GULUK GULUK",
      },
      {
        id: "3529110",
        regency_id: "3529",
        name: "PASONGSONGAN",
      },
      {
        id: "3529120",
        regency_id: "3529",
        name: "AMBUNTEN",
      },
      {
        id: "3529130",
        regency_id: "3529",
        name: "RUBARU",
      },
      {
        id: "3529140",
        regency_id: "3529",
        name: "DASUK",
      },
      {
        id: "3529150",
        regency_id: "3529",
        name: "MANDING",
      },
      {
        id: "3529160",
        regency_id: "3529",
        name: "BATUPUTIH",
      },
      {
        id: "3529170",
        regency_id: "3529",
        name: "GAPURA",
      },
      {
        id: "3529180",
        regency_id: "3529",
        name: "BATANG BATANG",
      },
      {
        id: "3529190",
        regency_id: "3529",
        name: "DUNGKEK",
      },
      {
        id: "3529200",
        regency_id: "3529",
        name: "NONGGUNONG",
      },
      {
        id: "3529210",
        regency_id: "3529",
        name: "GAYAM",
      },
      {
        id: "3529220",
        regency_id: "3529",
        name: "RAAS",
      },
      {
        id: "3529230",
        regency_id: "3529",
        name: "SAPEKEN",
      },
      {
        id: "3529240",
        regency_id: "3529",
        name: "ARJASA",
      },
      {
        id: "3529241",
        regency_id: "3529",
        name: "KANGAYAN",
      },
      {
        id: "3529250",
        regency_id: "3529",
        name: "MASALEMBU",
      },
      {
        id: "3571010",
        regency_id: "3571",
        name: "MOJOROTO",
      },
      {
        id: "3571020",
        regency_id: "3571",
        name: "KOTA KEDIRI",
      },
      {
        id: "3571030",
        regency_id: "3571",
        name: "PESANTREN",
      },
      {
        id: "3572010",
        regency_id: "3572",
        name: "SUKOREJO",
      },
      {
        id: "3572020",
        regency_id: "3572",
        name: "KEPANJENKIDUL",
      },
      {
        id: "3572030",
        regency_id: "3572",
        name: "SANANWETAN",
      },
      {
        id: "3573010",
        regency_id: "3573",
        name: "KEDUNGKANDANG",
      },
      {
        id: "3573020",
        regency_id: "3573",
        name: "SUKUN",
      },
      {
        id: "3573030",
        regency_id: "3573",
        name: "KLOJEN",
      },
      {
        id: "3573040",
        regency_id: "3573",
        name: "BLIMBING",
      },
      {
        id: "3573050",
        regency_id: "3573",
        name: "LOWOKWARU",
      },
      {
        id: "3574010",
        regency_id: "3574",
        name: "KADEMANGAN",
      },
      {
        id: "3574011",
        regency_id: "3574",
        name: "KEDOPOK",
      },
      {
        id: "3574020",
        regency_id: "3574",
        name: "WONOASIH",
      },
      {
        id: "3574030",
        regency_id: "3574",
        name: "MAYANGAN",
      },
      {
        id: "3574031",
        regency_id: "3574",
        name: "KANIGARAN",
      },
      {
        id: "3575010",
        regency_id: "3575",
        name: "GADINGREJO",
      },
      {
        id: "3575020",
        regency_id: "3575",
        name: "PURWOREJO",
      },
      {
        id: "3575030",
        regency_id: "3575",
        name: "BUGULKIDUL",
      },
      {
        id: "3575031",
        regency_id: "3575",
        name: "PANGGUNGREJO",
      },
      {
        id: "3576010",
        regency_id: "3576",
        name: "PRAJURIT KULON",
      },
      {
        id: "3576020",
        regency_id: "3576",
        name: "MAGERSARI",
      },
      {
        id: "3576021",
        regency_id: "3576",
        name: "KRANGGAN",
      },
      {
        id: "3577010",
        regency_id: "3577",
        name: "MANGU HARJO",
      },
      {
        id: "3577020",
        regency_id: "3577",
        name: "TAMAN",
      },
      {
        id: "3577030",
        regency_id: "3577",
        name: "KARTOHARJO",
      },
      {
        id: "3578010",
        regency_id: "3578",
        name: "KARANG PILANG",
      },
      {
        id: "3578020",
        regency_id: "3578",
        name: "JAMBANGAN",
      },
      {
        id: "3578030",
        regency_id: "3578",
        name: "GAYUNGAN",
      },
      {
        id: "3578040",
        regency_id: "3578",
        name: "WONOCOLO",
      },
      {
        id: "3578050",
        regency_id: "3578",
        name: "TENGGILIS MEJOYO",
      },
      {
        id: "3578060",
        regency_id: "3578",
        name: "GUNUNG ANYAR",
      },
      {
        id: "3578070",
        regency_id: "3578",
        name: "RUNGKUT",
      },
      {
        id: "3578080",
        regency_id: "3578",
        name: "SUKOLILO",
      },
      {
        id: "3578090",
        regency_id: "3578",
        name: "MULYOREJO",
      },
      {
        id: "3578100",
        regency_id: "3578",
        name: "GUBENG",
      },
      {
        id: "3578110",
        regency_id: "3578",
        name: "WONOKROMO",
      },
      {
        id: "3578120",
        regency_id: "3578",
        name: "DUKUH PAKIS",
      },
      {
        id: "3578130",
        regency_id: "3578",
        name: "WIYUNG",
      },
      {
        id: "3578140",
        regency_id: "3578",
        name: "LAKARSANTRI",
      },
      {
        id: "3578141",
        regency_id: "3578",
        name: "SAMBIKEREP",
      },
      {
        id: "3578150",
        regency_id: "3578",
        name: "TANDES",
      },
      {
        id: "3578160",
        regency_id: "3578",
        name: "SUKO MANUNGGAL",
      },
      {
        id: "3578170",
        regency_id: "3578",
        name: "SAWAHAN",
      },
      {
        id: "3578180",
        regency_id: "3578",
        name: "TEGALSARI",
      },
      {
        id: "3578190",
        regency_id: "3578",
        name: "GENTENG",
      },
      {
        id: "3578200",
        regency_id: "3578",
        name: "TAMBAKSARI",
      },
      {
        id: "3578210",
        regency_id: "3578",
        name: "KENJERAN",
      },
      {
        id: "3578211",
        regency_id: "3578",
        name: "BULAK",
      },
      {
        id: "3578220",
        regency_id: "3578",
        name: "SIMOKERTO",
      },
      {
        id: "3578230",
        regency_id: "3578",
        name: "SEMAMPIR",
      },
      {
        id: "3578240",
        regency_id: "3578",
        name: "PABEAN CANTIAN",
      },
      {
        id: "3578250",
        regency_id: "3578",
        name: "BUBUTAN",
      },
      {
        id: "3578260",
        regency_id: "3578",
        name: "KREMBANGAN",
      },
      {
        id: "3578270",
        regency_id: "3578",
        name: "ASEMROWO",
      },
      {
        id: "3578280",
        regency_id: "3578",
        name: "BENOWO",
      },
      {
        id: "3578281",
        regency_id: "3578",
        name: "PAKAL",
      },
      {
        id: "3579010",
        regency_id: "3579",
        name: "BATU",
      },
      {
        id: "3579020",
        regency_id: "3579",
        name: "JUNREJO",
      },
      {
        id: "3579030",
        regency_id: "3579",
        name: "BUMIAJI",
      },
      {
        id: "3601010",
        regency_id: "3601",
        name: "SUMUR",
      },
      {
        id: "3601020",
        regency_id: "3601",
        name: "CIMANGGU",
      },
      {
        id: "3601030",
        regency_id: "3601",
        name: "CIBALIUNG",
      },
      {
        id: "3601031",
        regency_id: "3601",
        name: "CIBITUNG",
      },
      {
        id: "3601040",
        regency_id: "3601",
        name: "CIKEUSIK",
      },
      {
        id: "3601050",
        regency_id: "3601",
        name: "CIGEULIS",
      },
      {
        id: "3601060",
        regency_id: "3601",
        name: "PANIMBANG",
      },
      {
        id: "3601061",
        regency_id: "3601",
        name: "SOBANG",
      },
      {
        id: "3601070",
        regency_id: "3601",
        name: "MUNJUL",
      },
      {
        id: "3601071",
        regency_id: "3601",
        name: "ANGSANA",
      },
      {
        id: "3601072",
        regency_id: "3601",
        name: "SINDANGRESMI",
      },
      {
        id: "3601080",
        regency_id: "3601",
        name: "PICUNG",
      },
      {
        id: "3601090",
        regency_id: "3601",
        name: "BOJONG",
      },
      {
        id: "3601100",
        regency_id: "3601",
        name: "SAKETI",
      },
      {
        id: "3601101",
        regency_id: "3601",
        name: "CISATA",
      },
      {
        id: "3601110",
        regency_id: "3601",
        name: "PAGELARAN",
      },
      {
        id: "3601111",
        regency_id: "3601",
        name: "PATIA",
      },
      {
        id: "3601112",
        regency_id: "3601",
        name: "SUKARESMI",
      },
      {
        id: "3601120",
        regency_id: "3601",
        name: "LABUAN",
      },
      {
        id: "3601121",
        regency_id: "3601",
        name: "CARITA",
      },
      {
        id: "3601130",
        regency_id: "3601",
        name: "JIPUT",
      },
      {
        id: "3601131",
        regency_id: "3601",
        name: "CIKEDAL",
      },
      {
        id: "3601140",
        regency_id: "3601",
        name: "MENES",
      },
      {
        id: "3601141",
        regency_id: "3601",
        name: "PULOSARI",
      },
      {
        id: "3601150",
        regency_id: "3601",
        name: "MANDALAWANGI",
      },
      {
        id: "3601160",
        regency_id: "3601",
        name: "CIMANUK",
      },
      {
        id: "3601161",
        regency_id: "3601",
        name: "CIPEUCANG",
      },
      {
        id: "3601170",
        regency_id: "3601",
        name: "BANJAR",
      },
      {
        id: "3601171",
        regency_id: "3601",
        name: "KADUHEJO",
      },
      {
        id: "3601172",
        regency_id: "3601",
        name: "MEKARJAYA",
      },
      {
        id: "3601180",
        regency_id: "3601",
        name: "PANDEGLANG",
      },
      {
        id: "3601181",
        regency_id: "3601",
        name: "MAJASARI",
      },
      {
        id: "3601190",
        regency_id: "3601",
        name: "CADASARI",
      },
      {
        id: "3601191",
        regency_id: "3601",
        name: "KARANGTANJUNG",
      },
      {
        id: "3601192",
        regency_id: "3601",
        name: "KORONCONG",
      },
      {
        id: "3602010",
        regency_id: "3602",
        name: "MALINGPING",
      },
      {
        id: "3602011",
        regency_id: "3602",
        name: "WANASALAM",
      },
      {
        id: "3602020",
        regency_id: "3602",
        name: "PANGGARANGAN",
      },
      {
        id: "3602021",
        regency_id: "3602",
        name: "CIHARA",
      },
      {
        id: "3602030",
        regency_id: "3602",
        name: "BAYAH",
      },
      {
        id: "3602031",
        regency_id: "3602",
        name: "CILOGRANG",
      },
      {
        id: "3602040",
        regency_id: "3602",
        name: "CIBEBER",
      },
      {
        id: "3602050",
        regency_id: "3602",
        name: "CIJAKU",
      },
      {
        id: "3602051",
        regency_id: "3602",
        name: "CIGEMBLONG",
      },
      {
        id: "3602060",
        regency_id: "3602",
        name: "BANJARSARI",
      },
      {
        id: "3602070",
        regency_id: "3602",
        name: "CILELES",
      },
      {
        id: "3602080",
        regency_id: "3602",
        name: "GUNUNG KENCANA",
      },
      {
        id: "3602090",
        regency_id: "3602",
        name: "BOJONGMANIK",
      },
      {
        id: "3602091",
        regency_id: "3602",
        name: "CIRINTEN",
      },
      {
        id: "3602100",
        regency_id: "3602",
        name: "LEUWIDAMAR",
      },
      {
        id: "3602110",
        regency_id: "3602",
        name: "MUNCANG",
      },
      {
        id: "3602111",
        regency_id: "3602",
        name: "SOBANG",
      },
      {
        id: "3602120",
        regency_id: "3602",
        name: "CIPANAS",
      },
      {
        id: "3602121",
        regency_id: "3602",
        name: "LEBAKGEDONG",
      },
      {
        id: "3602130",
        regency_id: "3602",
        name: "SAJIRA",
      },
      {
        id: "3602140",
        regency_id: "3602",
        name: "CIMARGA",
      },
      {
        id: "3602150",
        regency_id: "3602",
        name: "CIKULUR",
      },
      {
        id: "3602160",
        regency_id: "3602",
        name: "WARUNGGUNUNG",
      },
      {
        id: "3602170",
        regency_id: "3602",
        name: "CIBADAK",
      },
      {
        id: "3602180",
        regency_id: "3602",
        name: "RANGKASBITUNG",
      },
      {
        id: "3602181",
        regency_id: "3602",
        name: "KALANGANYAR",
      },
      {
        id: "3602190",
        regency_id: "3602",
        name: "MAJA",
      },
      {
        id: "3602191",
        regency_id: "3602",
        name: "CURUGBITUNG",
      },
      {
        id: "3603010",
        regency_id: "3603",
        name: "CISOKA",
      },
      {
        id: "3603011",
        regency_id: "3603",
        name: "SOLEAR",
      },
      {
        id: "3603020",
        regency_id: "3603",
        name: "TIGARAKSA",
      },
      {
        id: "3603021",
        regency_id: "3603",
        name: "JAMBE",
      },
      {
        id: "3603030",
        regency_id: "3603",
        name: "CIKUPA",
      },
      {
        id: "3603040",
        regency_id: "3603",
        name: "PANONGAN",
      },
      {
        id: "3603050",
        regency_id: "3603",
        name: "CURUG",
      },
      {
        id: "3603051",
        regency_id: "3603",
        name: "KELAPA DUA",
      },
      {
        id: "3603060",
        regency_id: "3603",
        name: "LEGOK",
      },
      {
        id: "3603070",
        regency_id: "3603",
        name: "PAGEDANGAN",
      },
      {
        id: "3603081",
        regency_id: "3603",
        name: "CISAUK",
      },
      {
        id: "3603120",
        regency_id: "3603",
        name: "PASARKEMIS",
      },
      {
        id: "3603121",
        regency_id: "3603",
        name: "SINDANG JAYA",
      },
      {
        id: "3603130",
        regency_id: "3603",
        name: "BALARAJA",
      },
      {
        id: "3603131",
        regency_id: "3603",
        name: "JAYANTI",
      },
      {
        id: "3603132",
        regency_id: "3603",
        name: "SUKAMULYA",
      },
      {
        id: "3603140",
        regency_id: "3603",
        name: "KRESEK",
      },
      {
        id: "3603141",
        regency_id: "3603",
        name: "GUNUNG KALER",
      },
      {
        id: "3603150",
        regency_id: "3603",
        name: "KRONJO",
      },
      {
        id: "3603151",
        regency_id: "3603",
        name: "MEKAR BARU",
      },
      {
        id: "3603160",
        regency_id: "3603",
        name: "MAUK",
      },
      {
        id: "3603161",
        regency_id: "3603",
        name: "KEMIRI",
      },
      {
        id: "3603162",
        regency_id: "3603",
        name: "SUKADIRI",
      },
      {
        id: "3603170",
        regency_id: "3603",
        name: "RAJEG",
      },
      {
        id: "3603180",
        regency_id: "3603",
        name: "SEPATAN",
      },
      {
        id: "3603181",
        regency_id: "3603",
        name: "SEPATAN TIMUR",
      },
      {
        id: "3603190",
        regency_id: "3603",
        name: "PAKUHAJI",
      },
      {
        id: "3603200",
        regency_id: "3603",
        name: "TELUKNAGA",
      },
      {
        id: "3603210",
        regency_id: "3603",
        name: "KOSAMBI",
      },
      {
        id: "3604010",
        regency_id: "3604",
        name: "CINANGKA",
      },
      {
        id: "3604020",
        regency_id: "3604",
        name: "PADARINCANG",
      },
      {
        id: "3604030",
        regency_id: "3604",
        name: "CIOMAS",
      },
      {
        id: "3604040",
        regency_id: "3604",
        name: "PABUARAN",
      },
      {
        id: "3604041",
        regency_id: "3604",
        name: "GUNUNG SARI",
      },
      {
        id: "3604050",
        regency_id: "3604",
        name: "BAROS",
      },
      {
        id: "3604060",
        regency_id: "3604",
        name: "PETIR",
      },
      {
        id: "3604061",
        regency_id: "3604",
        name: "TUNJUNG TEJA",
      },
      {
        id: "3604080",
        regency_id: "3604",
        name: "CIKEUSAL",
      },
      {
        id: "3604090",
        regency_id: "3604",
        name: "PAMARAYAN",
      },
      {
        id: "3604091",
        regency_id: "3604",
        name: "BANDUNG",
      },
      {
        id: "3604100",
        regency_id: "3604",
        name: "JAWILAN",
      },
      {
        id: "3604110",
        regency_id: "3604",
        name: "KOPO",
      },
      {
        id: "3604120",
        regency_id: "3604",
        name: "CIKANDE",
      },
      {
        id: "3604121",
        regency_id: "3604",
        name: "KIBIN",
      },
      {
        id: "3604130",
        regency_id: "3604",
        name: "KRAGILAN",
      },
      {
        id: "3604180",
        regency_id: "3604",
        name: "WARINGINKURUNG",
      },
      {
        id: "3604190",
        regency_id: "3604",
        name: "MANCAK",
      },
      {
        id: "3604200",
        regency_id: "3604",
        name: "ANYAR",
      },
      {
        id: "3604210",
        regency_id: "3604",
        name: "BOJONEGARA",
      },
      {
        id: "3604211",
        regency_id: "3604",
        name: "PULO AMPEL",
      },
      {
        id: "3604220",
        regency_id: "3604",
        name: "KRAMATWATU",
      },
      {
        id: "3604240",
        regency_id: "3604",
        name: "CIRUAS",
      },
      {
        id: "3604250",
        regency_id: "3604",
        name: "PONTANG",
      },
      {
        id: "3604251",
        regency_id: "3604",
        name: "LEBAK WANGI",
      },
      {
        id: "3604260",
        regency_id: "3604",
        name: "CARENANG",
      },
      {
        id: "3604261",
        regency_id: "3604",
        name: "BINUANG",
      },
      {
        id: "3604270",
        regency_id: "3604",
        name: "TIRTAYASA",
      },
      {
        id: "3604271",
        regency_id: "3604",
        name: "TANARA",
      },
      {
        id: "3671010",
        regency_id: "3671",
        name: "CILEDUG",
      },
      {
        id: "3671011",
        regency_id: "3671",
        name: "LARANGAN",
      },
      {
        id: "3671012",
        regency_id: "3671",
        name: "KARANG TENGAH",
      },
      {
        id: "3671020",
        regency_id: "3671",
        name: "CIPONDOH",
      },
      {
        id: "3671021",
        regency_id: "3671",
        name: "PINANG",
      },
      {
        id: "3671030",
        regency_id: "3671",
        name: "TANGERANG",
      },
      {
        id: "3671031",
        regency_id: "3671",
        name: "KARAWACI",
      },
      {
        id: "3671040",
        regency_id: "3671",
        name: "JATI UWUNG",
      },
      {
        id: "3671041",
        regency_id: "3671",
        name: "CIBODAS",
      },
      {
        id: "3671042",
        regency_id: "3671",
        name: "PERIUK",
      },
      {
        id: "3671050",
        regency_id: "3671",
        name: "BATUCEPER",
      },
      {
        id: "3671051",
        regency_id: "3671",
        name: "NEGLASARI",
      },
      {
        id: "3671060",
        regency_id: "3671",
        name: "BENDA",
      },
      {
        id: "3672010",
        regency_id: "3672",
        name: "CIWANDAN",
      },
      {
        id: "3672011",
        regency_id: "3672",
        name: "CITANGKIL",
      },
      {
        id: "3672020",
        regency_id: "3672",
        name: "PULOMERAK",
      },
      {
        id: "3672021",
        regency_id: "3672",
        name: "PURWAKARTA",
      },
      {
        id: "3672022",
        regency_id: "3672",
        name: "GROGOL",
      },
      {
        id: "3672030",
        regency_id: "3672",
        name: "CILEGON",
      },
      {
        id: "3672031",
        regency_id: "3672",
        name: "JOMBANG",
      },
      {
        id: "3672040",
        regency_id: "3672",
        name: "CIBEBER",
      },
      {
        id: "3673010",
        regency_id: "3673",
        name: "CURUG",
      },
      {
        id: "3673020",
        regency_id: "3673",
        name: "WALANTAKA",
      },
      {
        id: "3673030",
        regency_id: "3673",
        name: "CIPOCOK JAYA",
      },
      {
        id: "3673040",
        regency_id: "3673",
        name: "SERANG",
      },
      {
        id: "3673050",
        regency_id: "3673",
        name: "TAKTAKAN",
      },
      {
        id: "3673060",
        regency_id: "3673",
        name: "KASEMEN",
      },
      {
        id: "3674010",
        regency_id: "3674",
        name: "SETU",
      },
      {
        id: "3674020",
        regency_id: "3674",
        name: "SERPONG",
      },
      {
        id: "3674030",
        regency_id: "3674",
        name: "PAMULANG",
      },
      {
        id: "3674040",
        regency_id: "3674",
        name: "CIPUTAT",
      },
      {
        id: "3674050",
        regency_id: "3674",
        name: "CIPUTAT TIMUR",
      },
      {
        id: "3674060",
        regency_id: "3674",
        name: "PONDOK AREN",
      },
      {
        id: "3674070",
        regency_id: "3674",
        name: "SERPONG UTARA",
      },
      {
        id: "5101010",
        regency_id: "5101",
        name: "MELAYA",
      },
      {
        id: "5101020",
        regency_id: "5101",
        name: "NEGARA",
      },
      {
        id: "5101021",
        regency_id: "5101",
        name: "JEMBRANA",
      },
      {
        id: "5101030",
        regency_id: "5101",
        name: "MENDOYO",
      },
      {
        id: "5101040",
        regency_id: "5101",
        name: "PEKUTATAN",
      },
      {
        id: "5102010",
        regency_id: "5102",
        name: "SELEMADEG",
      },
      {
        id: "5102011",
        regency_id: "5102",
        name: "SELEMADEG TIMUR",
      },
      {
        id: "5102012",
        regency_id: "5102",
        name: "SELEMADEG BARAT",
      },
      {
        id: "5102020",
        regency_id: "5102",
        name: "KERAMBITAN",
      },
      {
        id: "5102030",
        regency_id: "5102",
        name: "TABANAN",
      },
      {
        id: "5102040",
        regency_id: "5102",
        name: "KEDIRI",
      },
      {
        id: "5102050",
        regency_id: "5102",
        name: "MARGA",
      },
      {
        id: "5102060",
        regency_id: "5102",
        name: "BATURITI",
      },
      {
        id: "5102070",
        regency_id: "5102",
        name: "PENEBEL",
      },
      {
        id: "5102080",
        regency_id: "5102",
        name: "PUPUAN",
      },
      {
        id: "5103010",
        regency_id: "5103",
        name: "KUTA SELATAN",
      },
      {
        id: "5103020",
        regency_id: "5103",
        name: "KUTA",
      },
      {
        id: "5103030",
        regency_id: "5103",
        name: "KUTA UTARA",
      },
      {
        id: "5103040",
        regency_id: "5103",
        name: "MENGWI",
      },
      {
        id: "5103050",
        regency_id: "5103",
        name: "ABIANSEMAL",
      },
      {
        id: "5103060",
        regency_id: "5103",
        name: "PETANG",
      },
      {
        id: "5104010",
        regency_id: "5104",
        name: "SUKAWATI",
      },
      {
        id: "5104020",
        regency_id: "5104",
        name: "BLAHBATUH",
      },
      {
        id: "5104030",
        regency_id: "5104",
        name: "GIANYAR",
      },
      {
        id: "5104040",
        regency_id: "5104",
        name: "TAMPAKSIRING",
      },
      {
        id: "5104050",
        regency_id: "5104",
        name: "UBUD",
      },
      {
        id: "5104060",
        regency_id: "5104",
        name: "TEGALLALANG",
      },
      {
        id: "5104070",
        regency_id: "5104",
        name: "PAYANGAN",
      },
      {
        id: "5105010",
        regency_id: "5105",
        name: "NUSAPENIDA",
      },
      {
        id: "5105020",
        regency_id: "5105",
        name: "BANJARANGKAN",
      },
      {
        id: "5105030",
        regency_id: "5105",
        name: "KLUNGKUNG",
      },
      {
        id: "5105040",
        regency_id: "5105",
        name: "DAWAN",
      },
      {
        id: "5106010",
        regency_id: "5106",
        name: "SUSUT",
      },
      {
        id: "5106020",
        regency_id: "5106",
        name: "BANGLI",
      },
      {
        id: "5106030",
        regency_id: "5106",
        name: "TEMBUKU",
      },
      {
        id: "5106040",
        regency_id: "5106",
        name: "KINTAMANI",
      },
      {
        id: "5107010",
        regency_id: "5107",
        name: "RENDANG",
      },
      {
        id: "5107020",
        regency_id: "5107",
        name: "SIDEMEN",
      },
      {
        id: "5107030",
        regency_id: "5107",
        name: "MANGGIS",
      },
      {
        id: "5107040",
        regency_id: "5107",
        name: "KARANGASEM",
      },
      {
        id: "5107050",
        regency_id: "5107",
        name: "ABANG",
      },
      {
        id: "5107060",
        regency_id: "5107",
        name: "BEBANDEM",
      },
      {
        id: "5107070",
        regency_id: "5107",
        name: "SELAT",
      },
      {
        id: "5107080",
        regency_id: "5107",
        name: "KUBU",
      },
      {
        id: "5108010",
        regency_id: "5108",
        name: "GEROKGAK",
      },
      {
        id: "5108020",
        regency_id: "5108",
        name: "SERIRIT",
      },
      {
        id: "5108030",
        regency_id: "5108",
        name: "BUSUNGBIU",
      },
      {
        id: "5108040",
        regency_id: "5108",
        name: "BANJAR",
      },
      {
        id: "5108050",
        regency_id: "5108",
        name: "SUKASADA",
      },
      {
        id: "5108060",
        regency_id: "5108",
        name: "BULELENG",
      },
      {
        id: "5108070",
        regency_id: "5108",
        name: "SAWAN",
      },
      {
        id: "5108080",
        regency_id: "5108",
        name: "KUBUTAMBAHAN",
      },
      {
        id: "5108090",
        regency_id: "5108",
        name: "TEJAKULA",
      },
      {
        id: "5171010",
        regency_id: "5171",
        name: "DENPASAR SELATAN",
      },
      {
        id: "5171020",
        regency_id: "5171",
        name: "DENPASAR TIMUR",
      },
      {
        id: "5171030",
        regency_id: "5171",
        name: "DENPASAR BARAT",
      },
      {
        id: "5171031",
        regency_id: "5171",
        name: "DENPASAR UTARA",
      },
      {
        id: "5201010",
        regency_id: "5201",
        name: "SEKOTONG",
      },
      {
        id: "5201011",
        regency_id: "5201",
        name: "LEMBAR",
      },
      {
        id: "5201020",
        regency_id: "5201",
        name: "GERUNG",
      },
      {
        id: "5201030",
        regency_id: "5201",
        name: "LABU API",
      },
      {
        id: "5201040",
        regency_id: "5201",
        name: "KEDIRI",
      },
      {
        id: "5201041",
        regency_id: "5201",
        name: "KURIPAN",
      },
      {
        id: "5201050",
        regency_id: "5201",
        name: "NARMADA",
      },
      {
        id: "5201051",
        regency_id: "5201",
        name: "LINGSAR",
      },
      {
        id: "5201060",
        regency_id: "5201",
        name: "GUNUNG SARI",
      },
      {
        id: "5201061",
        regency_id: "5201",
        name: "BATU LAYAR",
      },
      {
        id: "5202010",
        regency_id: "5202",
        name: "PRAYA BARAT",
      },
      {
        id: "5202011",
        regency_id: "5202",
        name: "PRAYA BARAT DAYA",
      },
      {
        id: "5202020",
        regency_id: "5202",
        name: "PUJUT",
      },
      {
        id: "5202030",
        regency_id: "5202",
        name: "PRAYA TIMUR",
      },
      {
        id: "5202040",
        regency_id: "5202",
        name: "JANAPRIA",
      },
      {
        id: "5202050",
        regency_id: "5202",
        name: "KOPANG",
      },
      {
        id: "5202060",
        regency_id: "5202",
        name: "PRAYA",
      },
      {
        id: "5202061",
        regency_id: "5202",
        name: "PRAYA TENGAH",
      },
      {
        id: "5202070",
        regency_id: "5202",
        name: "JONGGAT",
      },
      {
        id: "5202080",
        regency_id: "5202",
        name: "PRINGGARATA",
      },
      {
        id: "5202090",
        regency_id: "5202",
        name: "BATUKLIANG",
      },
      {
        id: "5202091",
        regency_id: "5202",
        name: "BATUKLIANG UTARA",
      },
      {
        id: "5203010",
        regency_id: "5203",
        name: "KERUAK",
      },
      {
        id: "5203011",
        regency_id: "5203",
        name: "JEROWARU",
      },
      {
        id: "5203020",
        regency_id: "5203",
        name: "SAKRA",
      },
      {
        id: "5203021",
        regency_id: "5203",
        name: "SAKRA BARAT",
      },
      {
        id: "5203022",
        regency_id: "5203",
        name: "SAKRA TIMUR",
      },
      {
        id: "5203030",
        regency_id: "5203",
        name: "TERARA",
      },
      {
        id: "5203031",
        regency_id: "5203",
        name: "MONTONG GADING",
      },
      {
        id: "5203040",
        regency_id: "5203",
        name: "SIKUR",
      },
      {
        id: "5203050",
        regency_id: "5203",
        name: "MASBAGIK",
      },
      {
        id: "5203051",
        regency_id: "5203",
        name: "PRINGGASELA",
      },
      {
        id: "5203060",
        regency_id: "5203",
        name: "SUKAMULIA",
      },
      {
        id: "5203061",
        regency_id: "5203",
        name: "SURALAGA",
      },
      {
        id: "5203070",
        regency_id: "5203",
        name: "SELONG",
      },
      {
        id: "5203071",
        regency_id: "5203",
        name: "LABUHAN HAJI",
      },
      {
        id: "5203080",
        regency_id: "5203",
        name: "PRINGGABAYA",
      },
      {
        id: "5203081",
        regency_id: "5203",
        name: "SUELA",
      },
      {
        id: "5203090",
        regency_id: "5203",
        name: "AIKMEL",
      },
      {
        id: "5203091",
        regency_id: "5203",
        name: "WANASABA",
      },
      {
        id: "5203092",
        regency_id: "5203",
        name: "SEMBALUN",
      },
      {
        id: "5203100",
        regency_id: "5203",
        name: "SAMBELIA",
      },
      {
        id: "5204020",
        regency_id: "5204",
        name: "LUNYUK",
      },
      {
        id: "5204021",
        regency_id: "5204",
        name: "ORONG TELU",
      },
      {
        id: "5204050",
        regency_id: "5204",
        name: "ALAS",
      },
      {
        id: "5204051",
        regency_id: "5204",
        name: "ALAS BARAT",
      },
      {
        id: "5204052",
        regency_id: "5204",
        name: "BUER",
      },
      {
        id: "5204061",
        regency_id: "5204",
        name: "UTAN",
      },
      {
        id: "5204062",
        regency_id: "5204",
        name: "RHEE",
      },
      {
        id: "5204070",
        regency_id: "5204",
        name: "BATULANTEH",
      },
      {
        id: "5204080",
        regency_id: "5204",
        name: "SUMBAWA",
      },
      {
        id: "5204081",
        regency_id: "5204",
        name: "LABUHAN BADAS",
      },
      {
        id: "5204082",
        regency_id: "5204",
        name: "UNTER IWES",
      },
      {
        id: "5204090",
        regency_id: "5204",
        name: "MOYOHILIR",
      },
      {
        id: "5204091",
        regency_id: "5204",
        name: "MOYO UTARA",
      },
      {
        id: "5204100",
        regency_id: "5204",
        name: "MOYOHULU",
      },
      {
        id: "5204110",
        regency_id: "5204",
        name: "ROPANG",
      },
      {
        id: "5204111",
        regency_id: "5204",
        name: "LENANGGUAR",
      },
      {
        id: "5204112",
        regency_id: "5204",
        name: "LANTUNG",
      },
      {
        id: "5204121",
        regency_id: "5204",
        name: "LAPE",
      },
      {
        id: "5204122",
        regency_id: "5204",
        name: "LOPOK",
      },
      {
        id: "5204130",
        regency_id: "5204",
        name: "PLAMPANG",
      },
      {
        id: "5204131",
        regency_id: "5204",
        name: "LABANGKA",
      },
      {
        id: "5204132",
        regency_id: "5204",
        name: "MARONGE",
      },
      {
        id: "5204140",
        regency_id: "5204",
        name: "EMPANG",
      },
      {
        id: "5204141",
        regency_id: "5204",
        name: "TARANO",
      },
      {
        id: "5205010",
        regency_id: "5205",
        name: "HU'U",
      },
      {
        id: "5205011",
        regency_id: "5205",
        name: "PAJO",
      },
      {
        id: "5205020",
        regency_id: "5205",
        name: "DOMPU",
      },
      {
        id: "5205030",
        regency_id: "5205",
        name: "WOJA",
      },
      {
        id: "5205040",
        regency_id: "5205",
        name: "KILO",
      },
      {
        id: "5205050",
        regency_id: "5205",
        name: "KEMPO",
      },
      {
        id: "5205051",
        regency_id: "5205",
        name: "MANGGALEWA",
      },
      {
        id: "5205060",
        regency_id: "5205",
        name: "PEKAT",
      },
      {
        id: "5206010",
        regency_id: "5206",
        name: "MONTA",
      },
      {
        id: "5206011",
        regency_id: "5206",
        name: "PARADO",
      },
      {
        id: "5206020",
        regency_id: "5206",
        name: "BOLO",
      },
      {
        id: "5206021",
        regency_id: "5206",
        name: "MADA PANGGA",
      },
      {
        id: "5206030",
        regency_id: "5206",
        name: "WOHA",
      },
      {
        id: "5206040",
        regency_id: "5206",
        name: "BELO",
      },
      {
        id: "5206041",
        regency_id: "5206",
        name: "PALIBELO",
      },
      {
        id: "5206050",
        regency_id: "5206",
        name: "WAWO",
      },
      {
        id: "5206051",
        regency_id: "5206",
        name: "LANGGUDU",
      },
      {
        id: "5206052",
        regency_id: "5206",
        name: "LAMBITU",
      },
      {
        id: "5206060",
        regency_id: "5206",
        name: "SAPE",
      },
      {
        id: "5206061",
        regency_id: "5206",
        name: "LAMBU",
      },
      {
        id: "5206070",
        regency_id: "5206",
        name: "WERA",
      },
      {
        id: "5206071",
        regency_id: "5206",
        name: "AMBALAWI",
      },
      {
        id: "5206080",
        regency_id: "5206",
        name: "DONGGO",
      },
      {
        id: "5206081",
        regency_id: "5206",
        name: "SOROMANDI",
      },
      {
        id: "5206090",
        regency_id: "5206",
        name: "SANGGAR",
      },
      {
        id: "5206091",
        regency_id: "5206",
        name: "TAMBORA",
      },
      {
        id: "5207010",
        regency_id: "5207",
        name: "SEKONGKANG",
      },
      {
        id: "5207020",
        regency_id: "5207",
        name: "JEREWEH",
      },
      {
        id: "5207021",
        regency_id: "5207",
        name: "MALUK",
      },
      {
        id: "5207030",
        regency_id: "5207",
        name: "TALIWANG",
      },
      {
        id: "5207031",
        regency_id: "5207",
        name: "BRANG ENE",
      },
      {
        id: "5207040",
        regency_id: "5207",
        name: "BRANG REA",
      },
      {
        id: "5207050",
        regency_id: "5207",
        name: "SETELUK",
      },
      {
        id: "5207051",
        regency_id: "5207",
        name: "POTO TANO",
      },
      {
        id: "5208010",
        regency_id: "5208",
        name: "PEMENANG",
      },
      {
        id: "5208020",
        regency_id: "5208",
        name: "TANJUNG",
      },
      {
        id: "5208030",
        regency_id: "5208",
        name: "GANGGA",
      },
      {
        id: "5208040",
        regency_id: "5208",
        name: "KAYANGAN",
      },
      {
        id: "5208050",
        regency_id: "5208",
        name: "BAYAN",
      },
      {
        id: "5271010",
        regency_id: "5271",
        name: "AMPENAN",
      },
      {
        id: "5271011",
        regency_id: "5271",
        name: "SEKARBELA",
      },
      {
        id: "5271020",
        regency_id: "5271",
        name: "MATARAM",
      },
      {
        id: "5271021",
        regency_id: "5271",
        name: "SELAPARANG",
      },
      {
        id: "5271030",
        regency_id: "5271",
        name: "CAKRANEGARA",
      },
      {
        id: "5271031",
        regency_id: "5271",
        name: "SANDUBAYA",
      },
      {
        id: "5272010",
        regency_id: "5272",
        name: "RASANAE BARAT",
      },
      {
        id: "5272011",
        regency_id: "5272",
        name: "MPUNDA",
      },
      {
        id: "5272020",
        regency_id: "5272",
        name: "RASANAE TIMUR",
      },
      {
        id: "5272021",
        regency_id: "5272",
        name: "RABA",
      },
      {
        id: "5272030",
        regency_id: "5272",
        name: "ASAKOTA",
      },
      {
        id: "5301021",
        regency_id: "5301",
        name: "LAMBOYA",
      },
      {
        id: "5301022",
        regency_id: "5301",
        name: "WANOKAKA",
      },
      {
        id: "5301023",
        regency_id: "5301",
        name: "LABOYA BARAT",
      },
      {
        id: "5301050",
        regency_id: "5301",
        name: "LOLI",
      },
      {
        id: "5301060",
        regency_id: "5301",
        name: "KOTA WAIKABUBAK",
      },
      {
        id: "5301072",
        regency_id: "5301",
        name: "TANA RIGHU",
      },
      {
        id: "5302010",
        regency_id: "5302",
        name: "LEWA",
      },
      {
        id: "5302011",
        regency_id: "5302",
        name: "NGGAHA ORIANGU",
      },
      {
        id: "5302012",
        regency_id: "5302",
        name: "LEWA TIDAHU",
      },
      {
        id: "5302013",
        regency_id: "5302",
        name: "KATALA HAMU LINGU",
      },
      {
        id: "5302020",
        regency_id: "5302",
        name: "TABUNDUNG",
      },
      {
        id: "5302021",
        regency_id: "5302",
        name: "PINUPAHAR",
      },
      {
        id: "5302030",
        regency_id: "5302",
        name: "PABERIWAI",
      },
      {
        id: "5302031",
        regency_id: "5302",
        name: "KARERA",
      },
      {
        id: "5302032",
        regency_id: "5302",
        name: "MATAWAI LA PAWU",
      },
      {
        id: "5302033",
        regency_id: "5302",
        name: "KAHAUNGU ETI",
      },
      {
        id: "5302034",
        regency_id: "5302",
        name: "MAHU",
      },
      {
        id: "5302035",
        regency_id: "5302",
        name: "NGADU NGALA",
      },
      {
        id: "5302040",
        regency_id: "5302",
        name: "PAHUNGA LODU",
      },
      {
        id: "5302041",
        regency_id: "5302",
        name: "WULA WAIJELU",
      },
      {
        id: "5302051",
        regency_id: "5302",
        name: "RINDI",
      },
      {
        id: "5302052",
        regency_id: "5302",
        name: "UMALULU",
      },
      {
        id: "5302060",
        regency_id: "5302",
        name: "PANDAWAI",
      },
      {
        id: "5302061",
        regency_id: "5302",
        name: "KAMBATA MAPAMBUHANG",
      },
      {
        id: "5302070",
        regency_id: "5302",
        name: "KOTA WAINGAPU",
      },
      {
        id: "5302071",
        regency_id: "5302",
        name: "KAMBERA",
      },
      {
        id: "5302080",
        regency_id: "5302",
        name: "HAHARU",
      },
      {
        id: "5302081",
        regency_id: "5302",
        name: "KANATANG",
      },
      {
        id: "5303100",
        regency_id: "5303",
        name: "SEMAU",
      },
      {
        id: "5303101",
        regency_id: "5303",
        name: "SEMAU SELATAN",
      },
      {
        id: "5303110",
        regency_id: "5303",
        name: "KUPANG BARAT",
      },
      {
        id: "5303111",
        regency_id: "5303",
        name: "NEKAMESE",
      },
      {
        id: "5303120",
        regency_id: "5303",
        name: "KUPANG TENGAH",
      },
      {
        id: "5303121",
        regency_id: "5303",
        name: "TAEBENU",
      },
      {
        id: "5303130",
        regency_id: "5303",
        name: "AMARASI",
      },
      {
        id: "5303131",
        regency_id: "5303",
        name: "AMARASI BARAT",
      },
      {
        id: "5303132",
        regency_id: "5303",
        name: "AMARASI SELATAN",
      },
      {
        id: "5303133",
        regency_id: "5303",
        name: "AMARASI TIMUR",
      },
      {
        id: "5303140",
        regency_id: "5303",
        name: "KUPANG TIMUR",
      },
      {
        id: "5303141",
        regency_id: "5303",
        name: "AMABI OEFETO TIMUR",
      },
      {
        id: "5303142",
        regency_id: "5303",
        name: "AMABI OEFETO",
      },
      {
        id: "5303150",
        regency_id: "5303",
        name: "SULAMU",
      },
      {
        id: "5303160",
        regency_id: "5303",
        name: "FATULEU",
      },
      {
        id: "5303161",
        regency_id: "5303",
        name: "FATULEU TENGAH",
      },
      {
        id: "5303162",
        regency_id: "5303",
        name: "FATULEU BARAT",
      },
      {
        id: "5303170",
        regency_id: "5303",
        name: "TAKARI",
      },
      {
        id: "5303180",
        regency_id: "5303",
        name: "AMFOANG SELATAN",
      },
      {
        id: "5303181",
        regency_id: "5303",
        name: "AMFOANG BARAT DAYA",
      },
      {
        id: "5303182",
        regency_id: "5303",
        name: "AMFOANG TENGAH",
      },
      {
        id: "5303190",
        regency_id: "5303",
        name: "AMFOANG UTARA",
      },
      {
        id: "5303191",
        regency_id: "5303",
        name: "AMFOANG BARAT LAUT",
      },
      {
        id: "5303192",
        regency_id: "5303",
        name: "AMFOANG TIMUR",
      },
      {
        id: "5304010",
        regency_id: "5304",
        name: "MOLLO UTARA",
      },
      {
        id: "5304011",
        regency_id: "5304",
        name: "FATUMNASI",
      },
      {
        id: "5304012",
        regency_id: "5304",
        name: "TOBU",
      },
      {
        id: "5304013",
        regency_id: "5304",
        name: "NUNBENA",
      },
      {
        id: "5304020",
        regency_id: "5304",
        name: "MOLLO SELATAN",
      },
      {
        id: "5304021",
        regency_id: "5304",
        name: "POLEN",
      },
      {
        id: "5304022",
        regency_id: "5304",
        name: "MOLLO BARAT",
      },
      {
        id: "5304023",
        regency_id: "5304",
        name: "MOLLO TENGAH",
      },
      {
        id: "5304030",
        regency_id: "5304",
        name: "KOTA SOE",
      },
      {
        id: "5304040",
        regency_id: "5304",
        name: "AMANUBAN BARAT",
      },
      {
        id: "5304041",
        regency_id: "5304",
        name: "BATU PUTIH",
      },
      {
        id: "5304042",
        regency_id: "5304",
        name: "KUATNANA",
      },
      {
        id: "5304050",
        regency_id: "5304",
        name: "AMANUBAN SELATAN",
      },
      {
        id: "5304051",
        regency_id: "5304",
        name: "NOEBEBA",
      },
      {
        id: "5304060",
        regency_id: "5304",
        name: "KUAN FATU",
      },
      {
        id: "5304061",
        regency_id: "5304",
        name: "KUALIN",
      },
      {
        id: "5304070",
        regency_id: "5304",
        name: "AMANUBAN TENGAH",
      },
      {
        id: "5304071",
        regency_id: "5304",
        name: "KOLBANO",
      },
      {
        id: "5304072",
        regency_id: "5304",
        name: "OENINO",
      },
      {
        id: "5304080",
        regency_id: "5304",
        name: "AMANUBAN TIMUR",
      },
      {
        id: "5304081",
        regency_id: "5304",
        name: "FAUTMOLO",
      },
      {
        id: "5304082",
        regency_id: "5304",
        name: "FATUKOPA",
      },
      {
        id: "5304090",
        regency_id: "5304",
        name: "KIE",
      },
      {
        id: "5304091",
        regency_id: "5304",
        name: "KOT'OLIN",
      },
      {
        id: "5304100",
        regency_id: "5304",
        name: "AMANATUN SELATAN",
      },
      {
        id: "5304101",
        regency_id: "5304",
        name: "BOKING",
      },
      {
        id: "5304102",
        regency_id: "5304",
        name: "NUNKOLO",
      },
      {
        id: "5304103",
        regency_id: "5304",
        name: "NOEBANA",
      },
      {
        id: "5304104",
        regency_id: "5304",
        name: "SANTIAN",
      },
      {
        id: "5304110",
        regency_id: "5304",
        name: "AMANATUN UTARA",
      },
      {
        id: "5304111",
        regency_id: "5304",
        name: "TOIANAS",
      },
      {
        id: "5304112",
        regency_id: "5304",
        name: "KOKBAUN",
      },
      {
        id: "5305010",
        regency_id: "5305",
        name: "MIOMAFFO BARAT",
      },
      {
        id: "5305011",
        regency_id: "5305",
        name: "MIOMAFFO TENGAH",
      },
      {
        id: "5305012",
        regency_id: "5305",
        name: "MUSI",
      },
      {
        id: "5305013",
        regency_id: "5305",
        name: "MUTIS",
      },
      {
        id: "5305020",
        regency_id: "5305",
        name: "MIOMAFFO TIMUR",
      },
      {
        id: "5305021",
        regency_id: "5305",
        name: "NOEMUTI",
      },
      {
        id: "5305022",
        regency_id: "5305",
        name: "BIKOMI SELATAN",
      },
      {
        id: "5305023",
        regency_id: "5305",
        name: "BIKOMI TENGAH",
      },
      {
        id: "5305024",
        regency_id: "5305",
        name: "BIKOMI NILULAT",
      },
      {
        id: "5305025",
        regency_id: "5305",
        name: "BIKOMI UTARA",
      },
      {
        id: "5305026",
        regency_id: "5305",
        name: "NAIBENU",
      },
      {
        id: "5305027",
        regency_id: "5305",
        name: "NOEMUTI TIMUR",
      },
      {
        id: "5305030",
        regency_id: "5305",
        name: "KOTA KEFAMENANU",
      },
      {
        id: "5305040",
        regency_id: "5305",
        name: "INSANA",
      },
      {
        id: "5305041",
        regency_id: "5305",
        name: "INSANA UTARA",
      },
      {
        id: "5305042",
        regency_id: "5305",
        name: "INSANA BARAT",
      },
      {
        id: "5305043",
        regency_id: "5305",
        name: "INSANA TENGAH",
      },
      {
        id: "5305044",
        regency_id: "5305",
        name: "INSANA FAFINESU",
      },
      {
        id: "5305050",
        regency_id: "5305",
        name: "BIBOKI SELATAN",
      },
      {
        id: "5305051",
        regency_id: "5305",
        name: "BIBOKI TANPAH",
      },
      {
        id: "5305052",
        regency_id: "5305",
        name: "BIBOKI MOENLEU",
      },
      {
        id: "5305060",
        regency_id: "5305",
        name: "BIBOKI UTARA",
      },
      {
        id: "5305061",
        regency_id: "5305",
        name: "BIBOKI ANLEU",
      },
      {
        id: "5305062",
        regency_id: "5305",
        name: "BIBOKI FEOTLEU",
      },
      {
        id: "5306032",
        regency_id: "5306",
        name: "RAI MANUK",
      },
      {
        id: "5306050",
        regency_id: "5306",
        name: "TASIFETO BARAT",
      },
      {
        id: "5306051",
        regency_id: "5306",
        name: "KAKULUK MESAK",
      },
      {
        id: "5306052",
        regency_id: "5306",
        name: "NANAET DUBESI",
      },
      {
        id: "5306060",
        regency_id: "5306",
        name: "ATAMBUA",
      },
      {
        id: "5306061",
        regency_id: "5306",
        name: "ATAMBUA BARAT",
      },
      {
        id: "5306062",
        regency_id: "5306",
        name: "ATAMBUA SELATAN",
      },
      {
        id: "5306070",
        regency_id: "5306",
        name: "TASIFETO TIMUR",
      },
      {
        id: "5306071",
        regency_id: "5306",
        name: "RAIHAT",
      },
      {
        id: "5306072",
        regency_id: "5306",
        name: "LASIOLAT",
      },
      {
        id: "5306080",
        regency_id: "5306",
        name: "LAMAKNEN",
      },
      {
        id: "5306081",
        regency_id: "5306",
        name: "LAMAKNEN SELATAN",
      },
      {
        id: "5307010",
        regency_id: "5307",
        name: "PANTAR",
      },
      {
        id: "5307011",
        regency_id: "5307",
        name: "PANTAR BARAT",
      },
      {
        id: "5307012",
        regency_id: "5307",
        name: "PANTAR TIMUR",
      },
      {
        id: "5307013",
        regency_id: "5307",
        name: "PANTAR BARAT LAUT",
      },
      {
        id: "5307014",
        regency_id: "5307",
        name: "PANTAR TENGAH",
      },
      {
        id: "5307020",
        regency_id: "5307",
        name: "ALOR BARAT DAYA",
      },
      {
        id: "5307021",
        regency_id: "5307",
        name: "MATARU",
      },
      {
        id: "5307030",
        regency_id: "5307",
        name: "ALOR SELATAN",
      },
      {
        id: "5307040",
        regency_id: "5307",
        name: "ALOR TIMUR",
      },
      {
        id: "5307041",
        regency_id: "5307",
        name: "ALOR TIMUR LAUT",
      },
      {
        id: "5307042",
        regency_id: "5307",
        name: "PUREMAN",
      },
      {
        id: "5307050",
        regency_id: "5307",
        name: "TELUK MUTIARA",
      },
      {
        id: "5307051",
        regency_id: "5307",
        name: "KABOLA",
      },
      {
        id: "5307060",
        regency_id: "5307",
        name: "ALOR BARAT LAUT",
      },
      {
        id: "5307061",
        regency_id: "5307",
        name: "ALOR TENGAH UTARA",
      },
      {
        id: "5307062",
        regency_id: "5307",
        name: "PULAU PURA",
      },
      {
        id: "5307063",
        regency_id: "5307",
        name: "LEMBUR",
      },
      {
        id: "5308010",
        regency_id: "5308",
        name: "NAGAWUTUNG",
      },
      {
        id: "5308011",
        regency_id: "5308",
        name: "WULANDONI",
      },
      {
        id: "5308020",
        regency_id: "5308",
        name: "ATADEI",
      },
      {
        id: "5308030",
        regency_id: "5308",
        name: "ILE APE",
      },
      {
        id: "5308031",
        regency_id: "5308",
        name: "ILE APE TIMUR",
      },
      {
        id: "5308040",
        regency_id: "5308",
        name: "LEBATUKAN",
      },
      {
        id: "5308050",
        regency_id: "5308",
        name: "NUBATUKAN",
      },
      {
        id: "5308060",
        regency_id: "5308",
        name: "OMESURI",
      },
      {
        id: "5308070",
        regency_id: "5308",
        name: "BUYASARI",
      },
      {
        id: "5309010",
        regency_id: "5309",
        name: "WULANGGITANG",
      },
      {
        id: "5309011",
        regency_id: "5309",
        name: "TITEHENA",
      },
      {
        id: "5309012",
        regency_id: "5309",
        name: "ILEBURA",
      },
      {
        id: "5309020",
        regency_id: "5309",
        name: "TANJUNG BUNGA",
      },
      {
        id: "5309021",
        regency_id: "5309",
        name: "LEWO LEMA",
      },
      {
        id: "5309030",
        regency_id: "5309",
        name: "LARANTUKA",
      },
      {
        id: "5309031",
        regency_id: "5309",
        name: "ILE MANDIRI",
      },
      {
        id: "5309032",
        regency_id: "5309",
        name: "DEMON PAGONG",
      },
      {
        id: "5309040",
        regency_id: "5309",
        name: "SOLOR BARAT",
      },
      {
        id: "5309041",
        regency_id: "5309",
        name: "SOLOR SELATAN",
      },
      {
        id: "5309050",
        regency_id: "5309",
        name: "SOLOR TIMUR",
      },
      {
        id: "5309060",
        regency_id: "5309",
        name: "ADONARA BARAT",
      },
      {
        id: "5309061",
        regency_id: "5309",
        name: "WOTAN ULU MADO",
      },
      {
        id: "5309062",
        regency_id: "5309",
        name: "ADONARA TENGAH",
      },
      {
        id: "5309070",
        regency_id: "5309",
        name: "ADONARA TIMUR",
      },
      {
        id: "5309071",
        regency_id: "5309",
        name: "ILE BOLENG",
      },
      {
        id: "5309072",
        regency_id: "5309",
        name: "WITIHAMA",
      },
      {
        id: "5309073",
        regency_id: "5309",
        name: "KELUBAGOLIT",
      },
      {
        id: "5309074",
        regency_id: "5309",
        name: "ADONARA",
      },
      {
        id: "5310010",
        regency_id: "5310",
        name: "PAGA",
      },
      {
        id: "5310011",
        regency_id: "5310",
        name: "MEGO",
      },
      {
        id: "5310012",
        regency_id: "5310",
        name: "TANA WAWO",
      },
      {
        id: "5310020",
        regency_id: "5310",
        name: "LELA",
      },
      {
        id: "5310030",
        regency_id: "5310",
        name: "BOLA",
      },
      {
        id: "5310031",
        regency_id: "5310",
        name: "DORENG",
      },
      {
        id: "5310032",
        regency_id: "5310",
        name: "MAPITARA",
      },
      {
        id: "5310040",
        regency_id: "5310",
        name: "TALIBURA",
      },
      {
        id: "5310041",
        regency_id: "5310",
        name: "WAIGETE",
      },
      {
        id: "5310042",
        regency_id: "5310",
        name: "WAIBLAMA",
      },
      {
        id: "5310050",
        regency_id: "5310",
        name: "KEWAPANTE",
      },
      {
        id: "5310051",
        regency_id: "5310",
        name: "HEWOKLOANG",
      },
      {
        id: "5310052",
        regency_id: "5310",
        name: "KANGAE",
      },
      {
        id: "5310061",
        regency_id: "5310",
        name: "PALUE",
      },
      {
        id: "5310062",
        regency_id: "5310",
        name: "KOTING",
      },
      {
        id: "5310063",
        regency_id: "5310",
        name: "NELLE",
      },
      {
        id: "5310070",
        regency_id: "5310",
        name: "NITA",
      },
      {
        id: "5310071",
        regency_id: "5310",
        name: "MAGEPANDA",
      },
      {
        id: "5310080",
        regency_id: "5310",
        name: "ALOK",
      },
      {
        id: "5310081",
        regency_id: "5310",
        name: "ALOK BARAT",
      },
      {
        id: "5310082",
        regency_id: "5310",
        name: "ALOK TIMUR",
      },
      {
        id: "5311010",
        regency_id: "5311",
        name: "NANGAPANDA",
      },
      {
        id: "5311011",
        regency_id: "5311",
        name: "PULAU ENDE",
      },
      {
        id: "5311012",
        regency_id: "5311",
        name: "MAUKARO",
      },
      {
        id: "5311020",
        regency_id: "5311",
        name: "ENDE",
      },
      {
        id: "5311030",
        regency_id: "5311",
        name: "ENDE SELATAN",
      },
      {
        id: "5311031",
        regency_id: "5311",
        name: "ENDE TIMUR",
      },
      {
        id: "5311032",
        regency_id: "5311",
        name: "ENDE TENGAH",
      },
      {
        id: "5311033",
        regency_id: "5311",
        name: "ENDE UTARA",
      },
      {
        id: "5311040",
        regency_id: "5311",
        name: "NDONA",
      },
      {
        id: "5311041",
        regency_id: "5311",
        name: "NDONA TIMUR",
      },
      {
        id: "5311050",
        regency_id: "5311",
        name: "WOLOWARU",
      },
      {
        id: "5311051",
        regency_id: "5311",
        name: "WOLOJITA",
      },
      {
        id: "5311052",
        regency_id: "5311",
        name: "LIO TIMUR",
      },
      {
        id: "5311053",
        regency_id: "5311",
        name: "KELIMUTU",
      },
      {
        id: "5311054",
        regency_id: "5311",
        name: "NDORI",
      },
      {
        id: "5311060",
        regency_id: "5311",
        name: "MAUROLE",
      },
      {
        id: "5311061",
        regency_id: "5311",
        name: "KOTABARU",
      },
      {
        id: "5311062",
        regency_id: "5311",
        name: "DETUKELI",
      },
      {
        id: "5311063",
        regency_id: "5311",
        name: "LEPEMBUSU KELISOKE",
      },
      {
        id: "5311070",
        regency_id: "5311",
        name: "DETUSOKO",
      },
      {
        id: "5311071",
        regency_id: "5311",
        name: "WEWARIA",
      },
      {
        id: "5312010",
        regency_id: "5312",
        name: "AIMERE",
      },
      {
        id: "5312011",
        regency_id: "5312",
        name: "JEREBUU",
      },
      {
        id: "5312012",
        regency_id: "5312",
        name: "INERIE",
      },
      {
        id: "5312020",
        regency_id: "5312",
        name: "BAJAWA",
      },
      {
        id: "5312030",
        regency_id: "5312",
        name: "GOLEWA",
      },
      {
        id: "5312031",
        regency_id: "5312",
        name: "GOLEWA SELATAN",
      },
      {
        id: "5312032",
        regency_id: "5312",
        name: "GOLEWA BARAT",
      },
      {
        id: "5312070",
        regency_id: "5312",
        name: "BAJAWA UTARA",
      },
      {
        id: "5312071",
        regency_id: "5312",
        name: "SOA",
      },
      {
        id: "5312080",
        regency_id: "5312",
        name: "RIUNG",
      },
      {
        id: "5312081",
        regency_id: "5312",
        name: "RIUNG BARAT",
      },
      {
        id: "5312082",
        regency_id: "5312",
        name: "WOLOMEZE",
      },
      {
        id: "5313040",
        regency_id: "5313",
        name: "SATAR MESE",
      },
      {
        id: "5313041",
        regency_id: "5313",
        name: "SATAR MESE BARAT",
      },
      {
        id: "5313042",
        regency_id: "5313",
        name: "SATAR MESE UTARA",
      },
      {
        id: "5313110",
        regency_id: "5313",
        name: "LANGKE REMBONG",
      },
      {
        id: "5313120",
        regency_id: "5313",
        name: "RUTENG",
      },
      {
        id: "5313121",
        regency_id: "5313",
        name: "WAE RII",
      },
      {
        id: "5313122",
        regency_id: "5313",
        name: "LELAK",
      },
      {
        id: "5313123",
        regency_id: "5313",
        name: "RAHONG UTARA",
      },
      {
        id: "5313130",
        regency_id: "5313",
        name: "CIBAL",
      },
      {
        id: "5313131",
        regency_id: "5313",
        name: "CIBAL BARAT",
      },
      {
        id: "5313140",
        regency_id: "5313",
        name: "REOK",
      },
      {
        id: "5313141",
        regency_id: "5313",
        name: "REOK BARAT",
      },
      {
        id: "5314010",
        regency_id: "5314",
        name: "ROTE BARAT DAYA",
      },
      {
        id: "5314020",
        regency_id: "5314",
        name: "ROTE BARAT LAUT",
      },
      {
        id: "5314030",
        regency_id: "5314",
        name: "LOBALAIN",
      },
      {
        id: "5314040",
        regency_id: "5314",
        name: "ROTE TENGAH",
      },
      {
        id: "5314041",
        regency_id: "5314",
        name: "ROTE SELATAN",
      },
      {
        id: "5314050",
        regency_id: "5314",
        name: "PANTAI BARU",
      },
      {
        id: "5314060",
        regency_id: "5314",
        name: "ROTE TIMUR",
      },
      {
        id: "5314061",
        regency_id: "5314",
        name: "LANDU LEKO",
      },
      {
        id: "5314070",
        regency_id: "5314",
        name: "ROTE BARAT",
      },
      {
        id: "5314071",
        regency_id: "5314",
        name: "NDAO NUSE",
      },
      {
        id: "5315010",
        regency_id: "5315",
        name: "KOMODO",
      },
      {
        id: "5315011",
        regency_id: "5315",
        name: "BOLENG",
      },
      {
        id: "5315020",
        regency_id: "5315",
        name: "SANO NGGOANG",
      },
      {
        id: "5315021",
        regency_id: "5315",
        name: "MBELILING",
      },
      {
        id: "5315030",
        regency_id: "5315",
        name: "LEMBOR",
      },
      {
        id: "5315031",
        regency_id: "5315",
        name: "WELAK",
      },
      {
        id: "5315032",
        regency_id: "5315",
        name: "LEMBOR SELATAN",
      },
      {
        id: "5315040",
        regency_id: "5315",
        name: "KUWUS",
      },
      {
        id: "5315041",
        regency_id: "5315",
        name: "NDOSO",
      },
      {
        id: "5315050",
        regency_id: "5315",
        name: "MACANG PACAR",
      },
      {
        id: "5316010",
        regency_id: "5316",
        name: "KATIKUTANA",
      },
      {
        id: "5316011",
        regency_id: "5316",
        name: "KATIKUTANA SELATAN",
      },
      {
        id: "5316020",
        regency_id: "5316",
        name: "UMBU RATU NGGAY BARAT",
      },
      {
        id: "5316030",
        regency_id: "5316",
        name: "UMBU RATU NGGAY",
      },
      {
        id: "5316040",
        regency_id: "5316",
        name: "MAMBORO",
      },
      {
        id: "5317010",
        regency_id: "5317",
        name: "KODI BANGEDO",
      },
      {
        id: "5317011",
        regency_id: "5317",
        name: "KODI BALAGHAR",
      },
      {
        id: "5317020",
        regency_id: "5317",
        name: "KODI",
      },
      {
        id: "5317030",
        regency_id: "5317",
        name: "KODI UTARA",
      },
      {
        id: "5317040",
        regency_id: "5317",
        name: "WEWEWA SELATAN",
      },
      {
        id: "5317050",
        regency_id: "5317",
        name: "WEWEWA BARAT",
      },
      {
        id: "5317060",
        regency_id: "5317",
        name: "WEWEWA TIMUR",
      },
      {
        id: "5317061",
        regency_id: "5317",
        name: "WEWEWA TENGAH",
      },
      {
        id: "5317070",
        regency_id: "5317",
        name: "WEWEWA UTARA",
      },
      {
        id: "5317080",
        regency_id: "5317",
        name: "LOURA",
      },
      {
        id: "5317081",
        regency_id: "5317",
        name: "KOTA TAMBOLAKA",
      },
      {
        id: "5318010",
        regency_id: "5318",
        name: "MAUPONGGO",
      },
      {
        id: "5318020",
        regency_id: "5318",
        name: "KEO TENGAH",
      },
      {
        id: "5318030",
        regency_id: "5318",
        name: "NANGARORO",
      },
      {
        id: "5318040",
        regency_id: "5318",
        name: "BOAWAE",
      },
      {
        id: "5318050",
        regency_id: "5318",
        name: "AESESA SELATAN",
      },
      {
        id: "5318060",
        regency_id: "5318",
        name: "AESESA",
      },
      {
        id: "5318070",
        regency_id: "5318",
        name: "WOLOWAE",
      },
      {
        id: "5319010",
        regency_id: "5319",
        name: "BORONG",
      },
      {
        id: "5319011",
        regency_id: "5319",
        name: "RANA MESE",
      },
      {
        id: "5319020",
        regency_id: "5319",
        name: "KOTA KOMBA",
      },
      {
        id: "5319030",
        regency_id: "5319",
        name: "ELAR",
      },
      {
        id: "5319031",
        regency_id: "5319",
        name: "ELAR SELATAN",
      },
      {
        id: "5319040",
        regency_id: "5319",
        name: "SAMBI RAMPAS",
      },
      {
        id: "5319050",
        regency_id: "5319",
        name: "POCO RANAKA",
      },
      {
        id: "5319051",
        regency_id: "5319",
        name: "POCO RANAKA TIMUR",
      },
      {
        id: "5319060",
        regency_id: "5319",
        name: "LAMBA LEDA",
      },
      {
        id: "5320010",
        regency_id: "5320",
        name: "RAIJUA",
      },
      {
        id: "5320020",
        regency_id: "5320",
        name: "HAWU MEHARA",
      },
      {
        id: "5320030",
        regency_id: "5320",
        name: "SABU LIAE",
      },
      {
        id: "5320040",
        regency_id: "5320",
        name: "SABU BARAT",
      },
      {
        id: "5320050",
        regency_id: "5320",
        name: "SABU TENGAH",
      },
      {
        id: "5320060",
        regency_id: "5320",
        name: "SABU TIMUR",
      },
      {
        id: "5321010",
        regency_id: "5321",
        name: "WEWIKU",
      },
      {
        id: "5321020",
        regency_id: "5321",
        name: "MALAKA BARAT",
      },
      {
        id: "5321030",
        regency_id: "5321",
        name: "WELIMAN",
      },
      {
        id: "5321040",
        regency_id: "5321",
        name: "RINHAT",
      },
      {
        id: "5321050",
        regency_id: "5321",
        name: "IO KUFEU",
      },
      {
        id: "5321060",
        regency_id: "5321",
        name: "SASITA MEAN",
      },
      {
        id: "5321070",
        regency_id: "5321",
        name: "MALAKA TENGAH",
      },
      {
        id: "5321080",
        regency_id: "5321",
        name: "BOTIN LEOBELE",
      },
      {
        id: "5321090",
        regency_id: "5321",
        name: "LAEN MANEN",
      },
      {
        id: "5321100",
        regency_id: "5321",
        name: "MALAKA TIMUR",
      },
      {
        id: "5321110",
        regency_id: "5321",
        name: "KOBALIMA",
      },
      {
        id: "5321120",
        regency_id: "5321",
        name: "KOBALIMA TIMUR",
      },
      {
        id: "5371010",
        regency_id: "5371",
        name: "ALAK",
      },
      {
        id: "5371020",
        regency_id: "5371",
        name: "MAULAFA",
      },
      {
        id: "5371030",
        regency_id: "5371",
        name: "OEBOBO",
      },
      {
        id: "5371031",
        regency_id: "5371",
        name: "KOTA RAJA",
      },
      {
        id: "5371040",
        regency_id: "5371",
        name: "KELAPA LIMA",
      },
      {
        id: "5371041",
        regency_id: "5371",
        name: "KOTA LAMA",
      },
      {
        id: "6101010",
        regency_id: "6101",
        name: "SELAKAU",
      },
      {
        id: "6101011",
        regency_id: "6101",
        name: "SELAKAU TIMUR",
      },
      {
        id: "6101020",
        regency_id: "6101",
        name: "PEMANGKAT",
      },
      {
        id: "6101021",
        regency_id: "6101",
        name: "SEMPARUK",
      },
      {
        id: "6101022",
        regency_id: "6101",
        name: "SALATIGA",
      },
      {
        id: "6101030",
        regency_id: "6101",
        name: "TEBAS",
      },
      {
        id: "6101031",
        regency_id: "6101",
        name: "TEKARANG",
      },
      {
        id: "6101040",
        regency_id: "6101",
        name: "SAMBAS",
      },
      {
        id: "6101041",
        regency_id: "6101",
        name: "SUBAH",
      },
      {
        id: "6101042",
        regency_id: "6101",
        name: "SEBAWI",
      },
      {
        id: "6101043",
        regency_id: "6101",
        name: "SAJAD",
      },
      {
        id: "6101050",
        regency_id: "6101",
        name: "JAWAI",
      },
      {
        id: "6101051",
        regency_id: "6101",
        name: "JAWAI SELATAN",
      },
      {
        id: "6101060",
        regency_id: "6101",
        name: "TELUK KERAMAT",
      },
      {
        id: "6101061",
        regency_id: "6101",
        name: "GALING",
      },
      {
        id: "6101062",
        regency_id: "6101",
        name: "TANGARAN",
      },
      {
        id: "6101070",
        regency_id: "6101",
        name: "SEJANGKUNG",
      },
      {
        id: "6101080",
        regency_id: "6101",
        name: "SAJINGAN BESAR",
      },
      {
        id: "6101090",
        regency_id: "6101",
        name: "PALOH",
      },
      {
        id: "6102010",
        regency_id: "6102",
        name: "SUNGAI RAYA",
      },
      {
        id: "6102011",
        regency_id: "6102",
        name: "CAPKALA",
      },
      {
        id: "6102012",
        regency_id: "6102",
        name: "SUNGAI RAYA KEPULAUAN",
      },
      {
        id: "6102030",
        regency_id: "6102",
        name: "SAMALANTAN",
      },
      {
        id: "6102031",
        regency_id: "6102",
        name: "MONTERADO",
      },
      {
        id: "6102032",
        regency_id: "6102",
        name: "LEMBAH BAWANG",
      },
      {
        id: "6102040",
        regency_id: "6102",
        name: "BENGKAYANG",
      },
      {
        id: "6102041",
        regency_id: "6102",
        name: "TERIAK",
      },
      {
        id: "6102042",
        regency_id: "6102",
        name: "SUNGAI BETUNG",
      },
      {
        id: "6102050",
        regency_id: "6102",
        name: "LEDO",
      },
      {
        id: "6102051",
        regency_id: "6102",
        name: "SUTI SEMARANG",
      },
      {
        id: "6102052",
        regency_id: "6102",
        name: "LUMAR",
      },
      {
        id: "6102060",
        regency_id: "6102",
        name: "SANGGAU LEDO",
      },
      {
        id: "6102061",
        regency_id: "6102",
        name: "TUJUHBELAS",
      },
      {
        id: "6102070",
        regency_id: "6102",
        name: "SELUAS",
      },
      {
        id: "6102080",
        regency_id: "6102",
        name: "JAGOI BABANG",
      },
      {
        id: "6102081",
        regency_id: "6102",
        name: "SIDING",
      },
      {
        id: "6103020",
        regency_id: "6103",
        name: "SEBANGKI",
      },
      {
        id: "6103030",
        regency_id: "6103",
        name: "NGABANG",
      },
      {
        id: "6103031",
        regency_id: "6103",
        name: "JELIMPO",
      },
      {
        id: "6103040",
        regency_id: "6103",
        name: "SENGAH TEMILA",
      },
      {
        id: "6103050",
        regency_id: "6103",
        name: "MANDOR",
      },
      {
        id: "6103060",
        regency_id: "6103",
        name: "MENJALIN",
      },
      {
        id: "6103070",
        regency_id: "6103",
        name: "MEMPAWAH HULU",
      },
      {
        id: "6103071",
        regency_id: "6103",
        name: "SOMPAK",
      },
      {
        id: "6103080",
        regency_id: "6103",
        name: "MENYUKE",
      },
      {
        id: "6103081",
        regency_id: "6103",
        name: "BANYUKE HULU",
      },
      {
        id: "6103090",
        regency_id: "6103",
        name: "MERANTI",
      },
      {
        id: "6103100",
        regency_id: "6103",
        name: "KUALA BEHE",
      },
      {
        id: "6103110",
        regency_id: "6103",
        name: "AIR BESAR",
      },
      {
        id: "6104080",
        regency_id: "6104",
        name: "SIANTAN",
      },
      {
        id: "6104081",
        regency_id: "6104",
        name: "SEGEDONG",
      },
      {
        id: "6104090",
        regency_id: "6104",
        name: "SUNGAI PINYUH",
      },
      {
        id: "6104091",
        regency_id: "6104",
        name: "ANJONGAN",
      },
      {
        id: "6104100",
        regency_id: "6104",
        name: "MEMPAWAH HILIR",
      },
      {
        id: "6104101",
        regency_id: "6104",
        name: "MEMPAWAH TIMUR",
      },
      {
        id: "6104110",
        regency_id: "6104",
        name: "SUNGAI KUNYIT",
      },
      {
        id: "6104120",
        regency_id: "6104",
        name: "TOHO",
      },
      {
        id: "6104121",
        regency_id: "6104",
        name: "SADANIANG",
      },
      {
        id: "6105010",
        regency_id: "6105",
        name: "TOBA",
      },
      {
        id: "6105020",
        regency_id: "6105",
        name: "MELIAU",
      },
      {
        id: "6105060",
        regency_id: "6105",
        name: "KAPUAS",
      },
      {
        id: "6105070",
        regency_id: "6105",
        name: "MUKOK",
      },
      {
        id: "6105120",
        regency_id: "6105",
        name: "JANGKANG",
      },
      {
        id: "6105130",
        regency_id: "6105",
        name: "BONTI",
      },
      {
        id: "6105140",
        regency_id: "6105",
        name: "PARINDU",
      },
      {
        id: "6105150",
        regency_id: "6105",
        name: "TAYAN HILIR",
      },
      {
        id: "6105160",
        regency_id: "6105",
        name: "BALAI",
      },
      {
        id: "6105170",
        regency_id: "6105",
        name: "TAYAN HULU",
      },
      {
        id: "6105180",
        regency_id: "6105",
        name: "KEMBAYAN",
      },
      {
        id: "6105190",
        regency_id: "6105",
        name: "BEDUWAI",
      },
      {
        id: "6105200",
        regency_id: "6105",
        name: "NOYAN",
      },
      {
        id: "6105210",
        regency_id: "6105",
        name: "SEKAYAM",
      },
      {
        id: "6105220",
        regency_id: "6105",
        name: "ENTIKONG",
      },
      {
        id: "6106010",
        regency_id: "6106",
        name: "KENDAWANGAN",
      },
      {
        id: "6106020",
        regency_id: "6106",
        name: "MANIS MATA",
      },
      {
        id: "6106030",
        regency_id: "6106",
        name: "MARAU",
      },
      {
        id: "6106031",
        regency_id: "6106",
        name: "SINGKUP",
      },
      {
        id: "6106032",
        regency_id: "6106",
        name: "AIR UPAS",
      },
      {
        id: "6106040",
        regency_id: "6106",
        name: "JELAI HULU",
      },
      {
        id: "6106050",
        regency_id: "6106",
        name: "TUMBANG TITI",
      },
      {
        id: "6106051",
        regency_id: "6106",
        name: "PEMAHAN",
      },
      {
        id: "6106052",
        regency_id: "6106",
        name: "SUNGAI MELAYU RAYAK",
      },
      {
        id: "6106060",
        regency_id: "6106",
        name: "MATAN HILIR SELATAN",
      },
      {
        id: "6106061",
        regency_id: "6106",
        name: "BENUA KAYONG",
      },
      {
        id: "6106070",
        regency_id: "6106",
        name: "MATAN HILIR UTARA",
      },
      {
        id: "6106071",
        regency_id: "6106",
        name: "DELTA PAWAN",
      },
      {
        id: "6106072",
        regency_id: "6106",
        name: "MUARA PAWAN",
      },
      {
        id: "6106090",
        regency_id: "6106",
        name: "NANGA TAYAP",
      },
      {
        id: "6106100",
        regency_id: "6106",
        name: "SANDAI",
      },
      {
        id: "6106101",
        regency_id: "6106",
        name: "HULU SUNGAI",
      },
      {
        id: "6106110",
        regency_id: "6106",
        name: "SUNGAI LAUR",
      },
      {
        id: "6106120",
        regency_id: "6106",
        name: "SIMPANG HULU",
      },
      {
        id: "6106121",
        regency_id: "6106",
        name: "SIMPANG DUA",
      },
      {
        id: "6107060",
        regency_id: "6107",
        name: "SERAWAI",
      },
      {
        id: "6107070",
        regency_id: "6107",
        name: "AMBALAU",
      },
      {
        id: "6107080",
        regency_id: "6107",
        name: "KAYAN HULU",
      },
      {
        id: "6107110",
        regency_id: "6107",
        name: "SEPAUK",
      },
      {
        id: "6107120",
        regency_id: "6107",
        name: "TEMPUNAK",
      },
      {
        id: "6107130",
        regency_id: "6107",
        name: "SUNGAI TEBELIAN",
      },
      {
        id: "6107140",
        regency_id: "6107",
        name: "SINTANG",
      },
      {
        id: "6107150",
        regency_id: "6107",
        name: "DEDAI",
      },
      {
        id: "6107160",
        regency_id: "6107",
        name: "KAYAN HILIR",
      },
      {
        id: "6107170",
        regency_id: "6107",
        name: "KELAM PERMAI",
      },
      {
        id: "6107180",
        regency_id: "6107",
        name: "BINJAI HULU",
      },
      {
        id: "6107190",
        regency_id: "6107",
        name: "KETUNGAU HILIR",
      },
      {
        id: "6107200",
        regency_id: "6107",
        name: "KETUNGAU TENGAH",
      },
      {
        id: "6107210",
        regency_id: "6107",
        name: "KETUNGAU HULU",
      },
      {
        id: "6108010",
        regency_id: "6108",
        name: "SILAT HILIR",
      },
      {
        id: "6108020",
        regency_id: "6108",
        name: "SILAT HULU",
      },
      {
        id: "6108030",
        regency_id: "6108",
        name: "HULU GURUNG",
      },
      {
        id: "6108040",
        regency_id: "6108",
        name: "BUNUT HULU",
      },
      {
        id: "6108050",
        regency_id: "6108",
        name: "MENTEBAH",
      },
      {
        id: "6108060",
        regency_id: "6108",
        name: "BIKA",
      },
      {
        id: "6108070",
        regency_id: "6108",
        name: "KALIS",
      },
      {
        id: "6108080",
        regency_id: "6108",
        name: "PUTUSSIBAU SELATAN",
      },
      {
        id: "6108090",
        regency_id: "6108",
        name: "EMBALOH HILIR",
      },
      {
        id: "6108100",
        regency_id: "6108",
        name: "BUNUT HILIR",
      },
      {
        id: "6108110",
        regency_id: "6108",
        name: "BOYAN TANJUNG",
      },
      {
        id: "6108120",
        regency_id: "6108",
        name: "PENGKADAN",
      },
      {
        id: "6108130",
        regency_id: "6108",
        name: "JONGKONG",
      },
      {
        id: "6108140",
        regency_id: "6108",
        name: "SELIMBAU",
      },
      {
        id: "6108150",
        regency_id: "6108",
        name: "SUHAID",
      },
      {
        id: "6108160",
        regency_id: "6108",
        name: "SEBERUANG",
      },
      {
        id: "6108170",
        regency_id: "6108",
        name: "SEMITAU",
      },
      {
        id: "6108180",
        regency_id: "6108",
        name: "EMPANANG",
      },
      {
        id: "6108190",
        regency_id: "6108",
        name: "PURING KENCANA",
      },
      {
        id: "6108200",
        regency_id: "6108",
        name: "BADAU",
      },
      {
        id: "6108210",
        regency_id: "6108",
        name: "BATANG LUPAR",
      },
      {
        id: "6108220",
        regency_id: "6108",
        name: "EMBALOH HULU",
      },
      {
        id: "6108230",
        regency_id: "6108",
        name: "PUTUSSIBAU UTARA",
      },
      {
        id: "6109010",
        regency_id: "6109",
        name: "NANGA MAHAP",
      },
      {
        id: "6109020",
        regency_id: "6109",
        name: "NANGA TAMAN",
      },
      {
        id: "6109030",
        regency_id: "6109",
        name: "SEKADAU HULU",
      },
      {
        id: "6109040",
        regency_id: "6109",
        name: "SEKADAU HILIR",
      },
      {
        id: "6109050",
        regency_id: "6109",
        name: "BELITANG HILIR",
      },
      {
        id: "6109060",
        regency_id: "6109",
        name: "BELITANG",
      },
      {
        id: "6109070",
        regency_id: "6109",
        name: "BELITANG HULU",
      },
      {
        id: "6110010",
        regency_id: "6110",
        name: "SOKAN",
      },
      {
        id: "6110020",
        regency_id: "6110",
        name: "TANAH PINOH",
      },
      {
        id: "6110021",
        regency_id: "6110",
        name: "TANAH PINOH BARAT",
      },
      {
        id: "6110030",
        regency_id: "6110",
        name: "SAYAN",
      },
      {
        id: "6110040",
        regency_id: "6110",
        name: "BELIMBING",
      },
      {
        id: "6110041",
        regency_id: "6110",
        name: "BELIMBING HULU",
      },
      {
        id: "6110050",
        regency_id: "6110",
        name: "NANGA PINOH",
      },
      {
        id: "6110051",
        regency_id: "6110",
        name: "PINOH SELATAN",
      },
      {
        id: "6110052",
        regency_id: "6110",
        name: "PINOH UTARA",
      },
      {
        id: "6110060",
        regency_id: "6110",
        name: "ELLA HILIR",
      },
      {
        id: "6110070",
        regency_id: "6110",
        name: "MENUKUNG",
      },
      {
        id: "6111010",
        regency_id: "6111",
        name: "PULAU MAYA",
      },
      {
        id: "6111011",
        regency_id: "6111",
        name: "KEPULAUAN KARIMATA",
      },
      {
        id: "6111020",
        regency_id: "6111",
        name: "SUKADANA",
      },
      {
        id: "6111030",
        regency_id: "6111",
        name: "SIMPANG HILIR",
      },
      {
        id: "6111040",
        regency_id: "6111",
        name: "TELUK BATANG",
      },
      {
        id: "6111050",
        regency_id: "6111",
        name: "SEPONTI",
      },
      {
        id: "6112010",
        regency_id: "6112",
        name: "BATU AMPAR",
      },
      {
        id: "6112020",
        regency_id: "6112",
        name: "TERENTANG",
      },
      {
        id: "6112030",
        regency_id: "6112",
        name: "KUBU",
      },
      {
        id: "6112040",
        regency_id: "6112",
        name: "TELOK PA'KEDAI",
      },
      {
        id: "6112050",
        regency_id: "6112",
        name: "SUNGAI KAKAP",
      },
      {
        id: "6112060",
        regency_id: "6112",
        name: "RASAU JAYA",
      },
      {
        id: "6112070",
        regency_id: "6112",
        name: "SUNGAI RAYA",
      },
      {
        id: "6112080",
        regency_id: "6112",
        name: "SUNGAI AMBAWANG",
      },
      {
        id: "6112090",
        regency_id: "6112",
        name: "KUALA MANDOR-B",
      },
      {
        id: "6171010",
        regency_id: "6171",
        name: "PONTIANAK SELATAN",
      },
      {
        id: "6171011",
        regency_id: "6171",
        name: "PONTIANAK TENGGARA",
      },
      {
        id: "6171020",
        regency_id: "6171",
        name: "PONTIANAK TIMUR",
      },
      {
        id: "6171030",
        regency_id: "6171",
        name: "PONTIANAK BARAT",
      },
      {
        id: "6171031",
        regency_id: "6171",
        name: "PONTIANAK KOTA",
      },
      {
        id: "6171040",
        regency_id: "6171",
        name: "PONTIANAK UTARA",
      },
      {
        id: "6172010",
        regency_id: "6172",
        name: "SINGKAWANG SELATAN",
      },
      {
        id: "6172020",
        regency_id: "6172",
        name: "SINGKAWANG TIMUR",
      },
      {
        id: "6172030",
        regency_id: "6172",
        name: "SINGKAWANG UTARA",
      },
      {
        id: "6172040",
        regency_id: "6172",
        name: "SINGKAWANG BARAT",
      },
      {
        id: "6172050",
        regency_id: "6172",
        name: "SINGKAWANG TENGAH",
      },
      {
        id: "6201040",
        regency_id: "6201",
        name: "KOTAWARINGIN LAMA",
      },
      {
        id: "6201050",
        regency_id: "6201",
        name: "ARUT SELATAN",
      },
      {
        id: "6201060",
        regency_id: "6201",
        name: "KUMAI",
      },
      {
        id: "6201061",
        regency_id: "6201",
        name: "PANGKALAN BANTENG",
      },
      {
        id: "6201062",
        regency_id: "6201",
        name: "PANGKALAN LADA",
      },
      {
        id: "6201070",
        regency_id: "6201",
        name: "ARUT UTARA",
      },
      {
        id: "6202020",
        regency_id: "6202",
        name: "MENTAYA HILIR SELATAN",
      },
      {
        id: "6202021",
        regency_id: "6202",
        name: "TELUK SAMPIT",
      },
      {
        id: "6202050",
        regency_id: "6202",
        name: "PULAU HANAUT",
      },
      {
        id: "6202060",
        regency_id: "6202",
        name: "MENTAWA BARU/KETAPANG",
      },
      {
        id: "6202061",
        regency_id: "6202",
        name: "SERANAU",
      },
      {
        id: "6202070",
        regency_id: "6202",
        name: "MENTAYA HILIR UTARA",
      },
      {
        id: "6202110",
        regency_id: "6202",
        name: "KOTA BESI",
      },
      {
        id: "6202111",
        regency_id: "6202",
        name: "TELAWANG",
      },
      {
        id: "6202120",
        regency_id: "6202",
        name: "BAAMANG",
      },
      {
        id: "6202190",
        regency_id: "6202",
        name: "CEMPAGA",
      },
      {
        id: "6202191",
        regency_id: "6202",
        name: "CEMPAGA HULU",
      },
      {
        id: "6202200",
        regency_id: "6202",
        name: "PARENGGEAN",
      },
      {
        id: "6202201",
        regency_id: "6202",
        name: "TUALAN HULU",
      },
      {
        id: "6202210",
        regency_id: "6202",
        name: "MENTAYA HULU",
      },
      {
        id: "6202211",
        regency_id: "6202",
        name: "BUKIT SANTUAI",
      },
      {
        id: "6202230",
        regency_id: "6202",
        name: "ANTANG KALANG",
      },
      {
        id: "6202231",
        regency_id: "6202",
        name: "TELAGA ANTANG",
      },
      {
        id: "6203020",
        regency_id: "6203",
        name: "KAPUAS KUALA",
      },
      {
        id: "6203021",
        regency_id: "6203",
        name: "TAMBAN CATUR",
      },
      {
        id: "6203030",
        regency_id: "6203",
        name: "KAPUAS TIMUR",
      },
      {
        id: "6203040",
        regency_id: "6203",
        name: "SELAT",
      },
      {
        id: "6203041",
        regency_id: "6203",
        name: "BATAGUH",
      },
      {
        id: "6203070",
        regency_id: "6203",
        name: "BASARANG",
      },
      {
        id: "6203080",
        regency_id: "6203",
        name: "KAPUAS HILIR",
      },
      {
        id: "6203090",
        regency_id: "6203",
        name: "PULAU PETAK",
      },
      {
        id: "6203100",
        regency_id: "6203",
        name: "KAPUAS MURUNG",
      },
      {
        id: "6203101",
        regency_id: "6203",
        name: "DADAHUP",
      },
      {
        id: "6203110",
        regency_id: "6203",
        name: "KAPUAS BARAT",
      },
      {
        id: "6203150",
        regency_id: "6203",
        name: "MANTANGAI",
      },
      {
        id: "6203160",
        regency_id: "6203",
        name: "TIMPAH",
      },
      {
        id: "6203170",
        regency_id: "6203",
        name: "KAPUAS TENGAH",
      },
      {
        id: "6203171",
        regency_id: "6203",
        name: "PASAK TALAWANG",
      },
      {
        id: "6203180",
        regency_id: "6203",
        name: "KAPUAS HULU",
      },
      {
        id: "6203181",
        regency_id: "6203",
        name: "MANDAU TALAWANG",
      },
      {
        id: "6204010",
        regency_id: "6204",
        name: "JENAMAS",
      },
      {
        id: "6204020",
        regency_id: "6204",
        name: "DUSUN HILIR",
      },
      {
        id: "6204030",
        regency_id: "6204",
        name: "KARAU KUALA",
      },
      {
        id: "6204040",
        regency_id: "6204",
        name: "DUSUN SELATAN",
      },
      {
        id: "6204050",
        regency_id: "6204",
        name: "DUSUN UTARA",
      },
      {
        id: "6204060",
        regency_id: "6204",
        name: "GUNUNG BINTANG AWAI",
      },
      {
        id: "6205010",
        regency_id: "6205",
        name: "MONTALLAT",
      },
      {
        id: "6205020",
        regency_id: "6205",
        name: "GUNUNG TIMANG",
      },
      {
        id: "6205030",
        regency_id: "6205",
        name: "GUNUNG PUREI",
      },
      {
        id: "6205040",
        regency_id: "6205",
        name: "TEWEH TIMUR",
      },
      {
        id: "6205050",
        regency_id: "6205",
        name: "TEWEH TENGAH",
      },
      {
        id: "6205051",
        regency_id: "6205",
        name: "TEWEH  BARU",
      },
      {
        id: "6205052",
        regency_id: "6205",
        name: "TEWEH SELATAN",
      },
      {
        id: "6205060",
        regency_id: "6205",
        name: "LAHEI",
      },
      {
        id: "6205061",
        regency_id: "6205",
        name: "LAHEI BARAT",
      },
      {
        id: "6206010",
        regency_id: "6206",
        name: "JELAI",
      },
      {
        id: "6206011",
        regency_id: "6206",
        name: "PANTAI LUNCI",
      },
      {
        id: "6206020",
        regency_id: "6206",
        name: "SUKAMARA",
      },
      {
        id: "6206030",
        regency_id: "6206",
        name: "BALAI RIAM",
      },
      {
        id: "6206031",
        regency_id: "6206",
        name: "PERMATA KECUBUNG",
      },
      {
        id: "6207010",
        regency_id: "6207",
        name: "BULIK",
      },
      {
        id: "6207011",
        regency_id: "6207",
        name: "SEMATU JAYA",
      },
      {
        id: "6207012",
        regency_id: "6207",
        name: "MENTHOBI RAYA",
      },
      {
        id: "6207013",
        regency_id: "6207",
        name: "BULIK TIMUR",
      },
      {
        id: "6207020",
        regency_id: "6207",
        name: "LAMANDAU",
      },
      {
        id: "6207021",
        regency_id: "6207",
        name: "BELANTIKAN RAYA",
      },
      {
        id: "6207030",
        regency_id: "6207",
        name: "DELANG",
      },
      {
        id: "6207031",
        regency_id: "6207",
        name: "BATANGKAWA",
      },
      {
        id: "6208010",
        regency_id: "6208",
        name: "SERUYAN HILIR",
      },
      {
        id: "6208011",
        regency_id: "6208",
        name: "SERUYAN HILIR TIMUR",
      },
      {
        id: "6208020",
        regency_id: "6208",
        name: "DANAU SEMBULUH",
      },
      {
        id: "6208021",
        regency_id: "6208",
        name: "SERUYAN RAYA",
      },
      {
        id: "6208030",
        regency_id: "6208",
        name: "HANAU",
      },
      {
        id: "6208031",
        regency_id: "6208",
        name: "DANAU SELULUK",
      },
      {
        id: "6208040",
        regency_id: "6208",
        name: "SERUYAN TENGAH",
      },
      {
        id: "6208041",
        regency_id: "6208",
        name: "BATU AMPAR",
      },
      {
        id: "6208050",
        regency_id: "6208",
        name: "SERUYAN HULU",
      },
      {
        id: "6208051",
        regency_id: "6208",
        name: "SULING TAMBUN",
      },
      {
        id: "6209010",
        regency_id: "6209",
        name: "KATINGAN KUALA",
      },
      {
        id: "6209020",
        regency_id: "6209",
        name: "MENDAWAI",
      },
      {
        id: "6209030",
        regency_id: "6209",
        name: "KAMIPANG",
      },
      {
        id: "6209040",
        regency_id: "6209",
        name: "TASIK PAYAWAN",
      },
      {
        id: "6209050",
        regency_id: "6209",
        name: "KATINGAN HILIR",
      },
      {
        id: "6209060",
        regency_id: "6209",
        name: "TEWANG SANGALANG GARING",
      },
      {
        id: "6209070",
        regency_id: "6209",
        name: "PULAU MALAN",
      },
      {
        id: "6209080",
        regency_id: "6209",
        name: "KATINGAN TENGAH",
      },
      {
        id: "6209090",
        regency_id: "6209",
        name: "SANAMAN MANTIKEI",
      },
      {
        id: "6209091",
        regency_id: "6209",
        name: "PETAK MALAI",
      },
      {
        id: "6209100",
        regency_id: "6209",
        name: "MARIKIT",
      },
      {
        id: "6209110",
        regency_id: "6209",
        name: "KATINGAN HULU",
      },
      {
        id: "6209111",
        regency_id: "6209",
        name: "BUKIT RAYA",
      },
      {
        id: "6210010",
        regency_id: "6210",
        name: "KAHAYAN KUALA",
      },
      {
        id: "6210011",
        regency_id: "6210",
        name: "SEBANGAU KUALA",
      },
      {
        id: "6210020",
        regency_id: "6210",
        name: "PANDIH BATU",
      },
      {
        id: "6210030",
        regency_id: "6210",
        name: "MALIKU",
      },
      {
        id: "6210040",
        regency_id: "6210",
        name: "KAHAYAN HILIR",
      },
      {
        id: "6210041",
        regency_id: "6210",
        name: "JABIREN RAYA",
      },
      {
        id: "6210050",
        regency_id: "6210",
        name: "KAHAYAN TENGAH",
      },
      {
        id: "6210060",
        regency_id: "6210",
        name: "BANAMA TINGANG",
      },
      {
        id: "6211010",
        regency_id: "6211",
        name: "MANUHING",
      },
      {
        id: "6211011",
        regency_id: "6211",
        name: "MANUHING RAYA",
      },
      {
        id: "6211020",
        regency_id: "6211",
        name: "RUNGAN",
      },
      {
        id: "6211021",
        regency_id: "6211",
        name: "RUNGAN HULU",
      },
      {
        id: "6211022",
        regency_id: "6211",
        name: "RUNGAN BARAT",
      },
      {
        id: "6211030",
        regency_id: "6211",
        name: "SEPANG",
      },
      {
        id: "6211031",
        regency_id: "6211",
        name: "MIHING RAYA",
      },
      {
        id: "6211040",
        regency_id: "6211",
        name: "KURUN",
      },
      {
        id: "6211050",
        regency_id: "6211",
        name: "TEWAH",
      },
      {
        id: "6211060",
        regency_id: "6211",
        name: "KAHAYAN HULU UTARA",
      },
      {
        id: "6211061",
        regency_id: "6211",
        name: "DAMANG BATU",
      },
      {
        id: "6211062",
        regency_id: "6211",
        name: "MIRI MANASA",
      },
      {
        id: "6212010",
        regency_id: "6212",
        name: "BENUA LIMA",
      },
      {
        id: "6212020",
        regency_id: "6212",
        name: "DUSUN TIMUR",
      },
      {
        id: "6212021",
        regency_id: "6212",
        name: "PAJU EPAT",
      },
      {
        id: "6212030",
        regency_id: "6212",
        name: "AWANG",
      },
      {
        id: "6212040",
        regency_id: "6212",
        name: "PATANGKEP TUTUI",
      },
      {
        id: "6212050",
        regency_id: "6212",
        name: "DUSUN TENGAH",
      },
      {
        id: "6212051",
        regency_id: "6212",
        name: "RAREN BATUAH",
      },
      {
        id: "6212052",
        regency_id: "6212",
        name: "PAKU",
      },
      {
        id: "6212053",
        regency_id: "6212",
        name: "KARUSEN JANANG",
      },
      {
        id: "6212060",
        regency_id: "6212",
        name: "PEMATANG KARAU",
      },
      {
        id: "6213010",
        regency_id: "6213",
        name: "PERMATA INTAN",
      },
      {
        id: "6213011",
        regency_id: "6213",
        name: "SUNGAI BABUAT",
      },
      {
        id: "6213020",
        regency_id: "6213",
        name: "MURUNG",
      },
      {
        id: "6213030",
        regency_id: "6213",
        name: "LAUNG TUHUP",
      },
      {
        id: "6213031",
        regency_id: "6213",
        name: "BARITO TUHUP RAYA",
      },
      {
        id: "6213040",
        regency_id: "6213",
        name: "TANAH SIANG",
      },
      {
        id: "6213041",
        regency_id: "6213",
        name: "TANAH SIANG SELATAN",
      },
      {
        id: "6213050",
        regency_id: "6213",
        name: "SUMBER BARITO",
      },
      {
        id: "6213051",
        regency_id: "6213",
        name: "SERIBU RIAM",
      },
      {
        id: "6213052",
        regency_id: "6213",
        name: "UUT MURUNG",
      },
      {
        id: "6271010",
        regency_id: "6271",
        name: "PAHANDUT",
      },
      {
        id: "6271011",
        regency_id: "6271",
        name: "SABANGAU",
      },
      {
        id: "6271012",
        regency_id: "6271",
        name: "JEKAN RAYA",
      },
      {
        id: "6271020",
        regency_id: "6271",
        name: "BUKIT BATU",
      },
      {
        id: "6271021",
        regency_id: "6271",
        name: "RAKUMPIT",
      },
      {
        id: "6301010",
        regency_id: "6301",
        name: "PANYIPATAN",
      },
      {
        id: "6301020",
        regency_id: "6301",
        name: "TAKISUNG",
      },
      {
        id: "6301030",
        regency_id: "6301",
        name: "KURAU",
      },
      {
        id: "6301031",
        regency_id: "6301",
        name: "BUMI MAKMUR",
      },
      {
        id: "6301040",
        regency_id: "6301",
        name: "BATI - BATI",
      },
      {
        id: "6301050",
        regency_id: "6301",
        name: "TAMBANG ULANG",
      },
      {
        id: "6301060",
        regency_id: "6301",
        name: "PELAIHARI",
      },
      {
        id: "6301061",
        regency_id: "6301",
        name: "BAJUIN",
      },
      {
        id: "6301070",
        regency_id: "6301",
        name: "BATU AMPAR",
      },
      {
        id: "6301080",
        regency_id: "6301",
        name: "JORONG",
      },
      {
        id: "6301090",
        regency_id: "6301",
        name: "KINTAP",
      },
      {
        id: "6302010",
        regency_id: "6302",
        name: "PULAU SEMBILAN",
      },
      {
        id: "6302020",
        regency_id: "6302",
        name: "PULAU LAUT BARAT",
      },
      {
        id: "6302021",
        regency_id: "6302",
        name: "PULAU LAUT TANJUNG SELAYAR",
      },
      {
        id: "6302030",
        regency_id: "6302",
        name: "PULAU LAUT SELATAN",
      },
      {
        id: "6302031",
        regency_id: "6302",
        name: "PULAU LAUT KEPULAUAN",
      },
      {
        id: "6302040",
        regency_id: "6302",
        name: "PULAU LAUT TIMUR",
      },
      {
        id: "6302050",
        regency_id: "6302",
        name: "PULAU SEBUKU",
      },
      {
        id: "6302060",
        regency_id: "6302",
        name: "PULAU LAUT UTARA",
      },
      {
        id: "6302061",
        regency_id: "6302",
        name: "PULAU LAUT TENGAH",
      },
      {
        id: "6302120",
        regency_id: "6302",
        name: "KELUMPANG SELATAN",
      },
      {
        id: "6302121",
        regency_id: "6302",
        name: "KELUMPANG HILIR",
      },
      {
        id: "6302130",
        regency_id: "6302",
        name: "KELUMPANG HULU",
      },
      {
        id: "6302140",
        regency_id: "6302",
        name: "HAMPANG",
      },
      {
        id: "6302150",
        regency_id: "6302",
        name: "SUNGAI DURIAN",
      },
      {
        id: "6302160",
        regency_id: "6302",
        name: "KELUMPANG TENGAH",
      },
      {
        id: "6302161",
        regency_id: "6302",
        name: "KELUMPANG BARAT",
      },
      {
        id: "6302170",
        regency_id: "6302",
        name: "KELUMPANG UTARA",
      },
      {
        id: "6302180",
        regency_id: "6302",
        name: "PAMUKAN SELATAN",
      },
      {
        id: "6302190",
        regency_id: "6302",
        name: "SAMPANAHAN",
      },
      {
        id: "6302200",
        regency_id: "6302",
        name: "PAMUKAN UTARA",
      },
      {
        id: "6302201",
        regency_id: "6302",
        name: "PAMUKAN BARAT",
      },
      {
        id: "6303010",
        regency_id: "6303",
        name: "ALUH - ALUH",
      },
      {
        id: "6303011",
        regency_id: "6303",
        name: "BERUNTUNG BARU",
      },
      {
        id: "6303020",
        regency_id: "6303",
        name: "GAMBUT",
      },
      {
        id: "6303030",
        regency_id: "6303",
        name: "KERTAK HANYAR",
      },
      {
        id: "6303031",
        regency_id: "6303",
        name: "TATAH MAKMUR",
      },
      {
        id: "6303040",
        regency_id: "6303",
        name: "SUNGAI TABUK",
      },
      {
        id: "6303050",
        regency_id: "6303",
        name: "MARTAPURA",
      },
      {
        id: "6303051",
        regency_id: "6303",
        name: "MARTAPURA TIMUR",
      },
      {
        id: "6303052",
        regency_id: "6303",
        name: "MARTAPURA BARAT",
      },
      {
        id: "6303060",
        regency_id: "6303",
        name: "ASTAMBUL",
      },
      {
        id: "6303070",
        regency_id: "6303",
        name: "KARANG INTAN",
      },
      {
        id: "6303080",
        regency_id: "6303",
        name: "ARANIO",
      },
      {
        id: "6303090",
        regency_id: "6303",
        name: "SUNGAI PINANG",
      },
      {
        id: "6303091",
        regency_id: "6303",
        name: "PARAMASAN",
      },
      {
        id: "6303100",
        regency_id: "6303",
        name: "PENGARON",
      },
      {
        id: "6303101",
        regency_id: "6303",
        name: "SAMBUNG MAKMUR",
      },
      {
        id: "6303110",
        regency_id: "6303",
        name: "MATARAMAN",
      },
      {
        id: "6303120",
        regency_id: "6303",
        name: "SIMPANG EMPAT",
      },
      {
        id: "6303121",
        regency_id: "6303",
        name: "TELAGA BAUNTUNG",
      },
      {
        id: "6304010",
        regency_id: "6304",
        name: "TABUNGANEN",
      },
      {
        id: "6304020",
        regency_id: "6304",
        name: "TAMBAN",
      },
      {
        id: "6304030",
        regency_id: "6304",
        name: "MEKAR SARI",
      },
      {
        id: "6304040",
        regency_id: "6304",
        name: "ANJIR PASAR",
      },
      {
        id: "6304050",
        regency_id: "6304",
        name: "ANJIR MUARA",
      },
      {
        id: "6304060",
        regency_id: "6304",
        name: "ALALAK",
      },
      {
        id: "6304070",
        regency_id: "6304",
        name: "MANDASTANA",
      },
      {
        id: "6304071",
        regency_id: "6304",
        name: "JEJANGKIT",
      },
      {
        id: "6304080",
        regency_id: "6304",
        name: "BELAWANG",
      },
      {
        id: "6304090",
        regency_id: "6304",
        name: "WANARAYA",
      },
      {
        id: "6304100",
        regency_id: "6304",
        name: "BARAMBAI",
      },
      {
        id: "6304110",
        regency_id: "6304",
        name: "RANTAU BADAUH",
      },
      {
        id: "6304120",
        regency_id: "6304",
        name: "CERBON",
      },
      {
        id: "6304130",
        regency_id: "6304",
        name: "BAKUMPAI",
      },
      {
        id: "6304140",
        regency_id: "6304",
        name: "MARABAHAN",
      },
      {
        id: "6304150",
        regency_id: "6304",
        name: "TABUKAN",
      },
      {
        id: "6304160",
        regency_id: "6304",
        name: "KURIPAN",
      },
      {
        id: "6305010",
        regency_id: "6305",
        name: "BINUANG",
      },
      {
        id: "6305011",
        regency_id: "6305",
        name: "HATUNGUN",
      },
      {
        id: "6305020",
        regency_id: "6305",
        name: "TAPIN SELATAN",
      },
      {
        id: "6305021",
        regency_id: "6305",
        name: "SALAM BABARIS",
      },
      {
        id: "6305030",
        regency_id: "6305",
        name: "TAPIN TENGAH",
      },
      {
        id: "6305040",
        regency_id: "6305",
        name: "BUNGUR",
      },
      {
        id: "6305050",
        regency_id: "6305",
        name: "PIANI",
      },
      {
        id: "6305060",
        regency_id: "6305",
        name: "LOKPAIKAT",
      },
      {
        id: "6305070",
        regency_id: "6305",
        name: "TAPIN UTARA",
      },
      {
        id: "6305080",
        regency_id: "6305",
        name: "BAKARANGAN",
      },
      {
        id: "6305090",
        regency_id: "6305",
        name: "CANDI LARAS SELATAN",
      },
      {
        id: "6305100",
        regency_id: "6305",
        name: "CANDI LARAS UTARA",
      },
      {
        id: "6306010",
        regency_id: "6306",
        name: "PADANG BATUNG",
      },
      {
        id: "6306020",
        regency_id: "6306",
        name: "LOKSADO",
      },
      {
        id: "6306030",
        regency_id: "6306",
        name: "TELAGA LANGSAT",
      },
      {
        id: "6306040",
        regency_id: "6306",
        name: "ANGKINANG",
      },
      {
        id: "6306050",
        regency_id: "6306",
        name: "KANDANGAN",
      },
      {
        id: "6306060",
        regency_id: "6306",
        name: "SUNGAI RAYA",
      },
      {
        id: "6306070",
        regency_id: "6306",
        name: "SIMPUR",
      },
      {
        id: "6306080",
        regency_id: "6306",
        name: "KALUMPANG",
      },
      {
        id: "6306090",
        regency_id: "6306",
        name: "DAHA SELATAN",
      },
      {
        id: "6306091",
        regency_id: "6306",
        name: "DAHA BARAT",
      },
      {
        id: "6306100",
        regency_id: "6306",
        name: "DAHA UTARA",
      },
      {
        id: "6307010",
        regency_id: "6307",
        name: "HARUYAN",
      },
      {
        id: "6307020",
        regency_id: "6307",
        name: "BATU BENAWA",
      },
      {
        id: "6307030",
        regency_id: "6307",
        name: "HANTAKAN",
      },
      {
        id: "6307040",
        regency_id: "6307",
        name: "BATANG ALAI SELATAN",
      },
      {
        id: "6307041",
        regency_id: "6307",
        name: "BATANG ALAI TIMUR",
      },
      {
        id: "6307050",
        regency_id: "6307",
        name: "BARABAI",
      },
      {
        id: "6307060",
        regency_id: "6307",
        name: "LABUAN AMAS SELATAN",
      },
      {
        id: "6307070",
        regency_id: "6307",
        name: "LABUAN AMAS UTARA",
      },
      {
        id: "6307080",
        regency_id: "6307",
        name: "PANDAWAN",
      },
      {
        id: "6307090",
        regency_id: "6307",
        name: "BATANG ALAI UTARA",
      },
      {
        id: "6307091",
        regency_id: "6307",
        name: "LIMPASU",
      },
      {
        id: "6308010",
        regency_id: "6308",
        name: "DANAU PANGGANG",
      },
      {
        id: "6308011",
        regency_id: "6308",
        name: "PAMINGGIR",
      },
      {
        id: "6308020",
        regency_id: "6308",
        name: "BABIRIK",
      },
      {
        id: "6308030",
        regency_id: "6308",
        name: "SUNGAI PANDAN",
      },
      {
        id: "6308031",
        regency_id: "6308",
        name: "SUNGAI TABUKAN",
      },
      {
        id: "6308040",
        regency_id: "6308",
        name: "AMUNTAI SELATAN",
      },
      {
        id: "6308050",
        regency_id: "6308",
        name: "AMUNTAI TENGAH",
      },
      {
        id: "6308060",
        regency_id: "6308",
        name: "BANJANG",
      },
      {
        id: "6308070",
        regency_id: "6308",
        name: "AMUNTAI UTARA",
      },
      {
        id: "6308071",
        regency_id: "6308",
        name: "HAUR GADING",
      },
      {
        id: "6309010",
        regency_id: "6309",
        name: "BANUA LAWAS",
      },
      {
        id: "6309020",
        regency_id: "6309",
        name: "PUGAAN",
      },
      {
        id: "6309030",
        regency_id: "6309",
        name: "KELUA",
      },
      {
        id: "6309040",
        regency_id: "6309",
        name: "MUARA HARUS",
      },
      {
        id: "6309050",
        regency_id: "6309",
        name: "TANTA",
      },
      {
        id: "6309060",
        regency_id: "6309",
        name: "TANJUNG",
      },
      {
        id: "6309070",
        regency_id: "6309",
        name: "MURUNG PUDAK",
      },
      {
        id: "6309080",
        regency_id: "6309",
        name: "HARUAI",
      },
      {
        id: "6309081",
        regency_id: "6309",
        name: "BINTANG ARA",
      },
      {
        id: "6309090",
        regency_id: "6309",
        name: "UPAU",
      },
      {
        id: "6309100",
        regency_id: "6309",
        name: "MUARA UYA",
      },
      {
        id: "6309110",
        regency_id: "6309",
        name: "JARO",
      },
      {
        id: "6310010",
        regency_id: "6310",
        name: "KUSAN HILIR",
      },
      {
        id: "6310020",
        regency_id: "6310",
        name: "SUNGAI LOBAN",
      },
      {
        id: "6310030",
        regency_id: "6310",
        name: "SATUI",
      },
      {
        id: "6310031",
        regency_id: "6310",
        name: "ANGSANA",
      },
      {
        id: "6310040",
        regency_id: "6310",
        name: "KUSAN HULU",
      },
      {
        id: "6310041",
        regency_id: "6310",
        name: "KURANJI",
      },
      {
        id: "6310050",
        regency_id: "6310",
        name: "BATU LICIN",
      },
      {
        id: "6310051",
        regency_id: "6310",
        name: "KARANG BINTANG",
      },
      {
        id: "6310052",
        regency_id: "6310",
        name: "SIMPANG EMPAT",
      },
      {
        id: "6310053",
        regency_id: "6310",
        name: "MANTEWE",
      },
      {
        id: "6311010",
        regency_id: "6311",
        name: "LAMPIHONG",
      },
      {
        id: "6311020",
        regency_id: "6311",
        name: "BATU MANDI",
      },
      {
        id: "6311030",
        regency_id: "6311",
        name: "AWAYAN",
      },
      {
        id: "6311031",
        regency_id: "6311",
        name: "TEBING TINGGI",
      },
      {
        id: "6311040",
        regency_id: "6311",
        name: "PARINGIN",
      },
      {
        id: "6311041",
        regency_id: "6311",
        name: "PARINGIN SELATAN",
      },
      {
        id: "6311050",
        regency_id: "6311",
        name: "JUAI",
      },
      {
        id: "6311060",
        regency_id: "6311",
        name: "HALONG",
      },
      {
        id: "6371010",
        regency_id: "6371",
        name: "BANJARMASIN SELATAN",
      },
      {
        id: "6371020",
        regency_id: "6371",
        name: "BANJARMASIN TIMUR",
      },
      {
        id: "6371030",
        regency_id: "6371",
        name: "BANJARMASIN BARAT",
      },
      {
        id: "6371031",
        regency_id: "6371",
        name: "BANJARMASIN TENGAH",
      },
      {
        id: "6371040",
        regency_id: "6371",
        name: "BANJARMASIN UTARA",
      },
      {
        id: "6372010",
        regency_id: "6372",
        name: "LANDASAN ULIN",
      },
      {
        id: "6372011",
        regency_id: "6372",
        name: "LIANG ANGGANG",
      },
      {
        id: "6372020",
        regency_id: "6372",
        name: "CEMPAKA",
      },
      {
        id: "6372031",
        regency_id: "6372",
        name: "BANJAR BARU UTARA",
      },
      {
        id: "6372032",
        regency_id: "6372",
        name: "BANJAR BARU SELATAN",
      },
      {
        id: "6401010",
        regency_id: "6401",
        name: "BATU SOPANG",
      },
      {
        id: "6401011",
        regency_id: "6401",
        name: "MUARA SAMU",
      },
      {
        id: "6401021",
        regency_id: "6401",
        name: "BATU ENGAU",
      },
      {
        id: "6401022",
        regency_id: "6401",
        name: "TANJUNG HARAPAN",
      },
      {
        id: "6401030",
        regency_id: "6401",
        name: "PASIR BELENGKONG",
      },
      {
        id: "6401040",
        regency_id: "6401",
        name: "TANAH GROGOT",
      },
      {
        id: "6401050",
        regency_id: "6401",
        name: "KUARO",
      },
      {
        id: "6401060",
        regency_id: "6401",
        name: "LONG IKIS",
      },
      {
        id: "6401070",
        regency_id: "6401",
        name: "MUARA KOMAM",
      },
      {
        id: "6401080",
        regency_id: "6401",
        name: "LONG KALI",
      },
      {
        id: "6402010",
        regency_id: "6402",
        name: "BONGAN",
      },
      {
        id: "6402020",
        regency_id: "6402",
        name: "JEMPANG",
      },
      {
        id: "6402030",
        regency_id: "6402",
        name: "PENYINGGAHAN",
      },
      {
        id: "6402040",
        regency_id: "6402",
        name: "MUARA PAHU",
      },
      {
        id: "6402041",
        regency_id: "6402",
        name: "SILUQ NGURAI",
      },
      {
        id: "6402050",
        regency_id: "6402",
        name: "MUARA LAWA",
      },
      {
        id: "6402051",
        regency_id: "6402",
        name: "BENTIAN BESAR",
      },
      {
        id: "6402060",
        regency_id: "6402",
        name: "DAMAI",
      },
      {
        id: "6402061",
        regency_id: "6402",
        name: "NYUATAN",
      },
      {
        id: "6402070",
        regency_id: "6402",
        name: "BARONG TONGKOK",
      },
      {
        id: "6402071",
        regency_id: "6402",
        name: "LINGGANG BIGUNG",
      },
      {
        id: "6402080",
        regency_id: "6402",
        name: "MELAK",
      },
      {
        id: "6402081",
        regency_id: "6402",
        name: "SEKOLAQ DARAT",
      },
      {
        id: "6402082",
        regency_id: "6402",
        name: "MANOR BULATN",
      },
      {
        id: "6402090",
        regency_id: "6402",
        name: "LONG IRAM",
      },
      {
        id: "6402091",
        regency_id: "6402",
        name: "TERING",
      },
      {
        id: "6403010",
        regency_id: "6403",
        name: "SEMBOJA",
      },
      {
        id: "6403020",
        regency_id: "6403",
        name: "MUARA JAWA",
      },
      {
        id: "6403030",
        regency_id: "6403",
        name: "SANGA-SANGA",
      },
      {
        id: "6403040",
        regency_id: "6403",
        name: "LOA JANAN",
      },
      {
        id: "6403050",
        regency_id: "6403",
        name: "LOA KULU",
      },
      {
        id: "6403060",
        regency_id: "6403",
        name: "MUARA MUNTAI",
      },
      {
        id: "6403070",
        regency_id: "6403",
        name: "MUARA WIS",
      },
      {
        id: "6403080",
        regency_id: "6403",
        name: "KOTABANGUN",
      },
      {
        id: "6403090",
        regency_id: "6403",
        name: "TENGGARONG",
      },
      {
        id: "6403100",
        regency_id: "6403",
        name: "SEBULU",
      },
      {
        id: "6403110",
        regency_id: "6403",
        name: "TENGGARONG SEBERANG",
      },
      {
        id: "6403120",
        regency_id: "6403",
        name: "ANGGANA",
      },
      {
        id: "6403130",
        regency_id: "6403",
        name: "MUARA BADAK",
      },
      {
        id: "6403140",
        regency_id: "6403",
        name: "MARANG KAYU",
      },
      {
        id: "6403150",
        regency_id: "6403",
        name: "MUARA KAMAN",
      },
      {
        id: "6403160",
        regency_id: "6403",
        name: "KENOHAN",
      },
      {
        id: "6403170",
        regency_id: "6403",
        name: "KEMBANG JANGGUT",
      },
      {
        id: "6403180",
        regency_id: "6403",
        name: "TABANG",
      },
      {
        id: "6404010",
        regency_id: "6404",
        name: "MUARA ANCALONG",
      },
      {
        id: "6404011",
        regency_id: "6404",
        name: "BUSANG",
      },
      {
        id: "6404012",
        regency_id: "6404",
        name: "LONG MESANGAT",
      },
      {
        id: "6404020",
        regency_id: "6404",
        name: "MUARA WAHAU",
      },
      {
        id: "6404021",
        regency_id: "6404",
        name: "TELEN",
      },
      {
        id: "6404022",
        regency_id: "6404",
        name: "KONGBENG",
      },
      {
        id: "6404030",
        regency_id: "6404",
        name: "MUARA BENGKAL",
      },
      {
        id: "6404031",
        regency_id: "6404",
        name: "BATU AMPAR",
      },
      {
        id: "6404040",
        regency_id: "6404",
        name: "SANGATTA UTARA",
      },
      {
        id: "6404041",
        regency_id: "6404",
        name: "BENGALON",
      },
      {
        id: "6404042",
        regency_id: "6404",
        name: "TELUK PANDAN",
      },
      {
        id: "6404043",
        regency_id: "6404",
        name: "SANGATTA SELATAN",
      },
      {
        id: "6404044",
        regency_id: "6404",
        name: "RANTAU PULUNG",
      },
      {
        id: "6404050",
        regency_id: "6404",
        name: "SANGKULIRANG",
      },
      {
        id: "6404051",
        regency_id: "6404",
        name: "KALIORANG",
      },
      {
        id: "6404052",
        regency_id: "6404",
        name: "SANDARAN",
      },
      {
        id: "6404053",
        regency_id: "6404",
        name: "KAUBUN",
      },
      {
        id: "6404054",
        regency_id: "6404",
        name: "KARANGAN",
      },
      {
        id: "6405010",
        regency_id: "6405",
        name: "KELAY",
      },
      {
        id: "6405020",
        regency_id: "6405",
        name: "TALISAYAN",
      },
      {
        id: "6405021",
        regency_id: "6405",
        name: "TABALAR",
      },
      {
        id: "6405030",
        regency_id: "6405",
        name: "BIDUK BIDUK",
      },
      {
        id: "6405040",
        regency_id: "6405",
        name: "PULAU DERAWAN",
      },
      {
        id: "6405041",
        regency_id: "6405",
        name: "MARATUA",
      },
      {
        id: "6405050",
        regency_id: "6405",
        name: "SAMBALIUNG",
      },
      {
        id: "6405060",
        regency_id: "6405",
        name: "TANJUNG REDEB",
      },
      {
        id: "6405070",
        regency_id: "6405",
        name: "GUNUNG TABUR",
      },
      {
        id: "6405080",
        regency_id: "6405",
        name: "SEGAH",
      },
      {
        id: "6405090",
        regency_id: "6405",
        name: "TELUK BAYUR",
      },
      {
        id: "6405100",
        regency_id: "6405",
        name: "BATU PUTIH",
      },
      {
        id: "6405110",
        regency_id: "6405",
        name: "BIATAN",
      },
      {
        id: "6409010",
        regency_id: "6409",
        name: "BABULU",
      },
      {
        id: "6409020",
        regency_id: "6409",
        name: "WARU",
      },
      {
        id: "6409030",
        regency_id: "6409",
        name: "PENAJAM",
      },
      {
        id: "6409040",
        regency_id: "6409",
        name: "SEPAKU",
      },
      {
        id: "6411010",
        regency_id: "6411",
        name: "LAHAM",
      },
      {
        id: "6411020",
        regency_id: "6411",
        name: "LONG HUBUNG",
      },
      {
        id: "6411030",
        regency_id: "6411",
        name: "LONG BAGUN",
      },
      {
        id: "6411040",
        regency_id: "6411",
        name: "LONG PAHANGAI",
      },
      {
        id: "6411050",
        regency_id: "6411",
        name: "LONG APARI",
      },
      {
        id: "6471010",
        regency_id: "6471",
        name: "BALIKPAPAN SELATAN",
      },
      {
        id: "6471011",
        regency_id: "6471",
        name: "BALIKPAPAN KOTA",
      },
      {
        id: "6471020",
        regency_id: "6471",
        name: "BALIKPAPAN TIMUR",
      },
      {
        id: "6471030",
        regency_id: "6471",
        name: "BALIKPAPAN UTARA",
      },
      {
        id: "6471040",
        regency_id: "6471",
        name: "BALIKPAPAN TENGAH",
      },
      {
        id: "6471050",
        regency_id: "6471",
        name: "BALIKPAPAN BARAT",
      },
      {
        id: "6472010",
        regency_id: "6472",
        name: "PALARAN",
      },
      {
        id: "6472020",
        regency_id: "6472",
        name: "SAMARINDA ILIR",
      },
      {
        id: "6472021",
        regency_id: "6472",
        name: "SAMARINDA KOTA",
      },
      {
        id: "6472022",
        regency_id: "6472",
        name: "SAMBUTAN",
      },
      {
        id: "6472030",
        regency_id: "6472",
        name: "SAMARINDA SEBERANG",
      },
      {
        id: "6472031",
        regency_id: "6472",
        name: "LOA JANAN ILIR",
      },
      {
        id: "6472040",
        regency_id: "6472",
        name: "SUNGAI KUNJANG",
      },
      {
        id: "6472050",
        regency_id: "6472",
        name: "SAMARINDA ULU",
      },
      {
        id: "6472060",
        regency_id: "6472",
        name: "SAMARINDA UTARA",
      },
      {
        id: "6472061",
        regency_id: "6472",
        name: "SUNGAI PINANG",
      },
      {
        id: "6474010",
        regency_id: "6474",
        name: "BONTANG SELATAN",
      },
      {
        id: "6474020",
        regency_id: "6474",
        name: "BONTANG UTARA",
      },
      {
        id: "6474030",
        regency_id: "6474",
        name: "BONTANG BARAT",
      },
      {
        id: "6501010",
        regency_id: "6501",
        name: "SUNGAI BOH",
      },
      {
        id: "6501020",
        regency_id: "6501",
        name: "KAYAN SELATAN",
      },
      {
        id: "6501030",
        regency_id: "6501",
        name: "KAYAN HULU",
      },
      {
        id: "6501040",
        regency_id: "6501",
        name: "KAYAN HILIR",
      },
      {
        id: "6501050",
        regency_id: "6501",
        name: "PUJUNGAN",
      },
      {
        id: "6501060",
        regency_id: "6501",
        name: "BAHAU HULU",
      },
      {
        id: "6501070",
        regency_id: "6501",
        name: "SUNGAI TUBU",
      },
      {
        id: "6501080",
        regency_id: "6501",
        name: "MALINAU SELATAN HULU",
      },
      {
        id: "6501090",
        regency_id: "6501",
        name: "MALINAU SELATAN",
      },
      {
        id: "6501100",
        regency_id: "6501",
        name: "MALINAU SELATAN HILIR",
      },
      {
        id: "6501110",
        regency_id: "6501",
        name: "MENTARANG",
      },
      {
        id: "6501120",
        regency_id: "6501",
        name: "MENTARANG HULU",
      },
      {
        id: "6501130",
        regency_id: "6501",
        name: "MALINAU UTARA",
      },
      {
        id: "6501140",
        regency_id: "6501",
        name: "MALINAU BARAT",
      },
      {
        id: "6501150",
        regency_id: "6501",
        name: "MALINAU KOTA",
      },
      {
        id: "6502010",
        regency_id: "6502",
        name: "PESO",
      },
      {
        id: "6502020",
        regency_id: "6502",
        name: "PESO HILIR",
      },
      {
        id: "6502030",
        regency_id: "6502",
        name: "TANJUNG PALAS BARAT",
      },
      {
        id: "6502040",
        regency_id: "6502",
        name: "TANJUNG PALAS",
      },
      {
        id: "6502050",
        regency_id: "6502",
        name: "TANJUNG SELOR",
      },
      {
        id: "6502060",
        regency_id: "6502",
        name: "TANJUNG PALAS TIMUR",
      },
      {
        id: "6502070",
        regency_id: "6502",
        name: "TANJUNG PALAS TENGAH",
      },
      {
        id: "6502080",
        regency_id: "6502",
        name: "TANJUNG PALAS UTARA",
      },
      {
        id: "6502090",
        regency_id: "6502",
        name: "SEKATAK",
      },
      {
        id: "6502100",
        regency_id: "6502",
        name: "BUNYU",
      },
      {
        id: "6503010",
        regency_id: "6503",
        name: "MURUK RIAN",
      },
      {
        id: "6503020",
        regency_id: "6503",
        name: "SESAYAP",
      },
      {
        id: "6503030",
        regency_id: "6503",
        name: "BETAYAU",
      },
      {
        id: "6503040",
        regency_id: "6503",
        name: "SESAYAP HILIR",
      },
      {
        id: "6503050",
        regency_id: "6503",
        name: "TANA LIA",
      },
      {
        id: "6504010",
        regency_id: "6504",
        name: "KRAYAN SELATAN",
      },
      {
        id: "6504011",
        regency_id: "6504",
        name: "KRAYAN TENGAH",
      },
      {
        id: "6504020",
        regency_id: "6504",
        name: "KRAYAN",
      },
      {
        id: "6504021",
        regency_id: "6504",
        name: "KRAYAN TIMUR",
      },
      {
        id: "6504022",
        regency_id: "6504",
        name: "KRAYAN BARAT",
      },
      {
        id: "6504030",
        regency_id: "6504",
        name: "LUMBIS OGONG",
      },
      {
        id: "6504040",
        regency_id: "6504",
        name: "LUMBIS",
      },
      {
        id: "6504050",
        regency_id: "6504",
        name: "SEMBAKUNG ATULAI",
      },
      {
        id: "6504060",
        regency_id: "6504",
        name: "SEMBAKUNG",
      },
      {
        id: "6504070",
        regency_id: "6504",
        name: "SEBUKU",
      },
      {
        id: "6504080",
        regency_id: "6504",
        name: "TULIN ONSOI",
      },
      {
        id: "6504090",
        regency_id: "6504",
        name: "SEI MENGGARIS",
      },
      {
        id: "6504100",
        regency_id: "6504",
        name: "NUNUKAN",
      },
      {
        id: "6504110",
        regency_id: "6504",
        name: "NUNUKAN SELATAN",
      },
      {
        id: "6504120",
        regency_id: "6504",
        name: "SEBATIK BARAT",
      },
      {
        id: "6504130",
        regency_id: "6504",
        name: "SEBATIK",
      },
      {
        id: "6504140",
        regency_id: "6504",
        name: "SEBATIK TIMUR",
      },
      {
        id: "6504150",
        regency_id: "6504",
        name: "SEBATIK TENGAH",
      },
      {
        id: "6504160",
        regency_id: "6504",
        name: "SEBATIK UTARA",
      },
      {
        id: "6571010",
        regency_id: "6571",
        name: "TARAKAN TIMUR",
      },
      {
        id: "6571020",
        regency_id: "6571",
        name: "TARAKAN TENGAH",
      },
      {
        id: "6571030",
        regency_id: "6571",
        name: "TARAKAN BARAT",
      },
      {
        id: "6571040",
        regency_id: "6571",
        name: "TARAKAN UTARA",
      },
      {
        id: "7101021",
        regency_id: "7101",
        name: "DUMOGA BARAT",
      },
      {
        id: "7101022",
        regency_id: "7101",
        name: "DUMOGA UTARA",
      },
      {
        id: "7101023",
        regency_id: "7101",
        name: "DUMOGA TIMUR",
      },
      {
        id: "7101024",
        regency_id: "7101",
        name: "DUMOGA TENGAH",
      },
      {
        id: "7101025",
        regency_id: "7101",
        name: "DUMOGA TENGGARA",
      },
      {
        id: "7101026",
        regency_id: "7101",
        name: "DUMOGA",
      },
      {
        id: "7101060",
        regency_id: "7101",
        name: "LOLAYAN",
      },
      {
        id: "7101081",
        regency_id: "7101",
        name: "PASSI BARAT",
      },
      {
        id: "7101082",
        regency_id: "7101",
        name: "PASSI TIMUR",
      },
      {
        id: "7101083",
        regency_id: "7101",
        name: "BILALANG",
      },
      {
        id: "7101090",
        regency_id: "7101",
        name: "POIGAR",
      },
      {
        id: "7101100",
        regency_id: "7101",
        name: "BOLAANG",
      },
      {
        id: "7101101",
        regency_id: "7101",
        name: "BOLAANG TIMUR",
      },
      {
        id: "7101110",
        regency_id: "7101",
        name: "LOLAK",
      },
      {
        id: "7101120",
        regency_id: "7101",
        name: "SANGTOMBOLANG",
      },
      {
        id: "7102091",
        regency_id: "7102",
        name: "LANGOWAN TIMUR",
      },
      {
        id: "7102092",
        regency_id: "7102",
        name: "LANGOWAN BARAT",
      },
      {
        id: "7102093",
        regency_id: "7102",
        name: "LANGOWAN SELATAN",
      },
      {
        id: "7102094",
        regency_id: "7102",
        name: "LANGOWAN UTARA",
      },
      {
        id: "7102110",
        regency_id: "7102",
        name: "TOMPASO",
      },
      {
        id: "7102111",
        regency_id: "7102",
        name: "TOMPASO BARAT",
      },
      {
        id: "7102120",
        regency_id: "7102",
        name: "KAWANGKOAN",
      },
      {
        id: "7102121",
        regency_id: "7102",
        name: "KAWANGKOAN BARAT",
      },
      {
        id: "7102122",
        regency_id: "7102",
        name: "KAWANGKOAN UTARA",
      },
      {
        id: "7102130",
        regency_id: "7102",
        name: "SONDER",
      },
      {
        id: "7102160",
        regency_id: "7102",
        name: "TOMBARIRI",
      },
      {
        id: "7102161",
        regency_id: "7102",
        name: "TOMBARIRI TIMUR",
      },
      {
        id: "7102170",
        regency_id: "7102",
        name: "PINELENG",
      },
      {
        id: "7102171",
        regency_id: "7102",
        name: "TOMBULU",
      },
      {
        id: "7102172",
        regency_id: "7102",
        name: "MANDOLANG",
      },
      {
        id: "7102190",
        regency_id: "7102",
        name: "TONDANO BARAT",
      },
      {
        id: "7102191",
        regency_id: "7102",
        name: "TONDANO SELATAN",
      },
      {
        id: "7102200",
        regency_id: "7102",
        name: "REMBOKEN",
      },
      {
        id: "7102210",
        regency_id: "7102",
        name: "KAKAS",
      },
      {
        id: "7102211",
        regency_id: "7102",
        name: "KAKAS BARAT",
      },
      {
        id: "7102220",
        regency_id: "7102",
        name: "LEMBEAN TIMUR",
      },
      {
        id: "7102230",
        regency_id: "7102",
        name: "ERIS",
      },
      {
        id: "7102240",
        regency_id: "7102",
        name: "KOMBI",
      },
      {
        id: "7102250",
        regency_id: "7102",
        name: "TONDANO TIMUR",
      },
      {
        id: "7102251",
        regency_id: "7102",
        name: "TONDANO UTARA",
      },
      {
        id: "7103040",
        regency_id: "7103",
        name: "MANGANITU SELATAN",
      },
      {
        id: "7103041",
        regency_id: "7103",
        name: "TATOARENG",
      },
      {
        id: "7103050",
        regency_id: "7103",
        name: "TAMAKO",
      },
      {
        id: "7103060",
        regency_id: "7103",
        name: "TABUKAN SELATAN",
      },
      {
        id: "7103061",
        regency_id: "7103",
        name: "TABUKAN SELATAN TENGAH",
      },
      {
        id: "7103062",
        regency_id: "7103",
        name: "TABUKAN SELATAN TENGGARA",
      },
      {
        id: "7103070",
        regency_id: "7103",
        name: "TABUKAN TENGAH",
      },
      {
        id: "7103080",
        regency_id: "7103",
        name: "MANGANITU",
      },
      {
        id: "7103090",
        regency_id: "7103",
        name: "TAHUNA",
      },
      {
        id: "7103091",
        regency_id: "7103",
        name: "TAHUNA TIMUR",
      },
      {
        id: "7103092",
        regency_id: "7103",
        name: "TAHUNA BARAT",
      },
      {
        id: "7103100",
        regency_id: "7103",
        name: "TABUKAN UTARA",
      },
      {
        id: "7103101",
        regency_id: "7103",
        name: "NUSA TABUKAN",
      },
      {
        id: "7103102",
        regency_id: "7103",
        name: "KEPULAUAN MARORE",
      },
      {
        id: "7103110",
        regency_id: "7103",
        name: "KENDAHE",
      },
      {
        id: "7104010",
        regency_id: "7104",
        name: "KABARUAN",
      },
      {
        id: "7104011",
        regency_id: "7104",
        name: "DAMAU",
      },
      {
        id: "7104020",
        regency_id: "7104",
        name: "LIRUNG",
      },
      {
        id: "7104021",
        regency_id: "7104",
        name: "SALIBABU",
      },
      {
        id: "7104022",
        regency_id: "7104",
        name: "KALONGAN",
      },
      {
        id: "7104023",
        regency_id: "7104",
        name: "MORONGE",
      },
      {
        id: "7104030",
        regency_id: "7104",
        name: "MELONGUANE",
      },
      {
        id: "7104031",
        regency_id: "7104",
        name: "MELONGUANE TIMUR",
      },
      {
        id: "7104040",
        regency_id: "7104",
        name: "BEO",
      },
      {
        id: "7104041",
        regency_id: "7104",
        name: "BEO UTARA",
      },
      {
        id: "7104042",
        regency_id: "7104",
        name: "BEO SELATAN",
      },
      {
        id: "7104050",
        regency_id: "7104",
        name: "RAINIS",
      },
      {
        id: "7104051",
        regency_id: "7104",
        name: "TAMPA NA'MMA",
      },
      {
        id: "7104052",
        regency_id: "7104",
        name: "PULUTAN",
      },
      {
        id: "7104060",
        regency_id: "7104",
        name: "ESSANG",
      },
      {
        id: "7104061",
        regency_id: "7104",
        name: "ESSANG SELATAN",
      },
      {
        id: "7104070",
        regency_id: "7104",
        name: "GEMEH",
      },
      {
        id: "7104080",
        regency_id: "7104",
        name: "NANUSA",
      },
      {
        id: "7104081",
        regency_id: "7104",
        name: "MIANGAS",
      },
      {
        id: "7105010",
        regency_id: "7105",
        name: "MODOINDING",
      },
      {
        id: "7105020",
        regency_id: "7105",
        name: "TOMPASO BARU",
      },
      {
        id: "7105021",
        regency_id: "7105",
        name: "MAESAAN",
      },
      {
        id: "7105070",
        regency_id: "7105",
        name: "RANOYAPO",
      },
      {
        id: "7105080",
        regency_id: "7105",
        name: "MOTOLING",
      },
      {
        id: "7105081",
        regency_id: "7105",
        name: "KUMELEMBUAI",
      },
      {
        id: "7105082",
        regency_id: "7105",
        name: "MOTOLING BARAT",
      },
      {
        id: "7105083",
        regency_id: "7105",
        name: "MOTOLING TIMUR",
      },
      {
        id: "7105090",
        regency_id: "7105",
        name: "SINONSAYANG",
      },
      {
        id: "7105100",
        regency_id: "7105",
        name: "TENGA",
      },
      {
        id: "7105111",
        regency_id: "7105",
        name: "AMURANG",
      },
      {
        id: "7105112",
        regency_id: "7105",
        name: "AMURANG BARAT",
      },
      {
        id: "7105113",
        regency_id: "7105",
        name: "AMURANG TIMUR",
      },
      {
        id: "7105120",
        regency_id: "7105",
        name: "TARERAN",
      },
      {
        id: "7105121",
        regency_id: "7105",
        name: "SULTA",
      },
      {
        id: "7105130",
        regency_id: "7105",
        name: "TUMPAAN",
      },
      {
        id: "7105131",
        regency_id: "7105",
        name: "TATAPAAN",
      },
      {
        id: "7106010",
        regency_id: "7106",
        name: "KEMA",
      },
      {
        id: "7106020",
        regency_id: "7106",
        name: "KAUDITAN",
      },
      {
        id: "7106030",
        regency_id: "7106",
        name: "AIRMADIDI",
      },
      {
        id: "7106040",
        regency_id: "7106",
        name: "KALAWAT",
      },
      {
        id: "7106050",
        regency_id: "7106",
        name: "DIMEMBE",
      },
      {
        id: "7106051",
        regency_id: "7106",
        name: "TALAWAAN",
      },
      {
        id: "7106060",
        regency_id: "7106",
        name: "WORI",
      },
      {
        id: "7106070",
        regency_id: "7106",
        name: "LIKUPANG BARAT",
      },
      {
        id: "7106080",
        regency_id: "7106",
        name: "LIKUPANG TIMUR",
      },
      {
        id: "7106081",
        regency_id: "7106",
        name: "LIKUPANG SELATAN",
      },
      {
        id: "7107010",
        regency_id: "7107",
        name: "SANGKUB",
      },
      {
        id: "7107020",
        regency_id: "7107",
        name: "BINTAUNA",
      },
      {
        id: "7107030",
        regency_id: "7107",
        name: "BOLANG ITANG TIMUR",
      },
      {
        id: "7107040",
        regency_id: "7107",
        name: "BOLANG ITANG BARAT",
      },
      {
        id: "7107050",
        regency_id: "7107",
        name: "KAIDIPANG",
      },
      {
        id: "7107060",
        regency_id: "7107",
        name: "PINOGALUMAN",
      },
      {
        id: "7108010",
        regency_id: "7108",
        name: "BIARO",
      },
      {
        id: "7108020",
        regency_id: "7108",
        name: "TAGULANDANG SELATAN",
      },
      {
        id: "7108030",
        regency_id: "7108",
        name: "TAGULANDANG",
      },
      {
        id: "7108040",
        regency_id: "7108",
        name: "TAGULANDANG UTARA",
      },
      {
        id: "7108050",
        regency_id: "7108",
        name: "SIAU BARAT SELATAN",
      },
      {
        id: "7108060",
        regency_id: "7108",
        name: "SIAU TIMUR SELATAN",
      },
      {
        id: "7108070",
        regency_id: "7108",
        name: "SIAU BARAT",
      },
      {
        id: "7108080",
        regency_id: "7108",
        name: "SIAU TENGAH",
      },
      {
        id: "7108090",
        regency_id: "7108",
        name: "SIAU TIMUR",
      },
      {
        id: "7108100",
        regency_id: "7108",
        name: "SIAU BARAT UTARA",
      },
      {
        id: "7109010",
        regency_id: "7109",
        name: "RATATOTOK",
      },
      {
        id: "7109020",
        regency_id: "7109",
        name: "PUSOMAEN",
      },
      {
        id: "7109030",
        regency_id: "7109",
        name: "BELANG",
      },
      {
        id: "7109040",
        regency_id: "7109",
        name: "RATAHAN",
      },
      {
        id: "7109041",
        regency_id: "7109",
        name: "PASAN",
      },
      {
        id: "7109042",
        regency_id: "7109",
        name: "RATAHAN TIMUR",
      },
      {
        id: "7109050",
        regency_id: "7109",
        name: "TOMBATU",
      },
      {
        id: "7109051",
        regency_id: "7109",
        name: "TOMBATU TIMUR",
      },
      {
        id: "7109052",
        regency_id: "7109",
        name: "TOMBATU UTARA",
      },
      {
        id: "7109060",
        regency_id: "7109",
        name: "TOULUAAN",
      },
      {
        id: "7109061",
        regency_id: "7109",
        name: "TOULUAAN SELATAN",
      },
      {
        id: "7109062",
        regency_id: "7109",
        name: "SILIAN RAYA",
      },
      {
        id: "7110010",
        regency_id: "7110",
        name: "POSIGADAN",
      },
      {
        id: "7110011",
        regency_id: "7110",
        name: "TOMINI",
      },
      {
        id: "7110020",
        regency_id: "7110",
        name: "BOLANG UKI",
      },
      {
        id: "7110021",
        regency_id: "7110",
        name: "HELUMO",
      },
      {
        id: "7110030",
        regency_id: "7110",
        name: "PINOLOSIAN",
      },
      {
        id: "7110040",
        regency_id: "7110",
        name: "PINOLOSIAN TENGAH",
      },
      {
        id: "7110050",
        regency_id: "7110",
        name: "PINOLOSIAN TIMUR",
      },
      {
        id: "7111010",
        regency_id: "7111",
        name: "NUANGAN",
      },
      {
        id: "7111011",
        regency_id: "7111",
        name: "MOTONGKAD",
      },
      {
        id: "7111020",
        regency_id: "7111",
        name: "TUTUYAN",
      },
      {
        id: "7111030",
        regency_id: "7111",
        name: "KOTABUNAN",
      },
      {
        id: "7111040",
        regency_id: "7111",
        name: "MODAYAG",
      },
      {
        id: "7111041",
        regency_id: "7111",
        name: "MOOAT",
      },
      {
        id: "7111050",
        regency_id: "7111",
        name: "MODAYAG BARAT",
      },
      {
        id: "7171010",
        regency_id: "7171",
        name: "MALALAYANG",
      },
      {
        id: "7171020",
        regency_id: "7171",
        name: "SARIO",
      },
      {
        id: "7171021",
        regency_id: "7171",
        name: "WANEA",
      },
      {
        id: "7171030",
        regency_id: "7171",
        name: "WENANG",
      },
      {
        id: "7171031",
        regency_id: "7171",
        name: "TIKALA",
      },
      {
        id: "7171032",
        regency_id: "7171",
        name: "PAAL DUA",
      },
      {
        id: "7171040",
        regency_id: "7171",
        name: "MAPANGET",
      },
      {
        id: "7171051",
        regency_id: "7171",
        name: "SINGKIL",
      },
      {
        id: "7171052",
        regency_id: "7171",
        name: "TUMINTING",
      },
      {
        id: "7171053",
        regency_id: "7171",
        name: "BUNAKEN",
      },
      {
        id: "7171054",
        regency_id: "7171",
        name: "BUNAKEN KEPULAUAN",
      },
      {
        id: "7172010",
        regency_id: "7172",
        name: "MADIDIR",
      },
      {
        id: "7172011",
        regency_id: "7172",
        name: "MATUARI",
      },
      {
        id: "7172012",
        regency_id: "7172",
        name: "GIRIAN",
      },
      {
        id: "7172021",
        regency_id: "7172",
        name: "LEMBEH SELATAN",
      },
      {
        id: "7172022",
        regency_id: "7172",
        name: "LEMBEH UTARA",
      },
      {
        id: "7172030",
        regency_id: "7172",
        name: "AERTEMBAGA",
      },
      {
        id: "7172031",
        regency_id: "7172",
        name: "MAESA",
      },
      {
        id: "7172040",
        regency_id: "7172",
        name: "RANOWULU",
      },
      {
        id: "7173010",
        regency_id: "7173",
        name: "TOMOHON SELATAN",
      },
      {
        id: "7173020",
        regency_id: "7173",
        name: "TOMOHON TENGAH",
      },
      {
        id: "7173021",
        regency_id: "7173",
        name: "TOMOHON TIMUR",
      },
      {
        id: "7173022",
        regency_id: "7173",
        name: "TOMOHON BARAT",
      },
      {
        id: "7173030",
        regency_id: "7173",
        name: "TOMOHON UTARA",
      },
      {
        id: "7174010",
        regency_id: "7174",
        name: "KOTAMOBAGU SELATAN",
      },
      {
        id: "7174020",
        regency_id: "7174",
        name: "KOTAMOBAGU TIMUR",
      },
      {
        id: "7174030",
        regency_id: "7174",
        name: "KOTAMOBAGU BARAT",
      },
      {
        id: "7174040",
        regency_id: "7174",
        name: "KOTAMOBAGU UTARA",
      },
      {
        id: "7201030",
        regency_id: "7201",
        name: "TOTIKUM",
      },
      {
        id: "7201031",
        regency_id: "7201",
        name: "TOTIKUM SELATAN",
      },
      {
        id: "7201040",
        regency_id: "7201",
        name: "TINANGKUNG",
      },
      {
        id: "7201041",
        regency_id: "7201",
        name: "TINANGKUNG SELATAN",
      },
      {
        id: "7201042",
        regency_id: "7201",
        name: "TINANGKUNG UTARA",
      },
      {
        id: "7201050",
        regency_id: "7201",
        name: "LIANG",
      },
      {
        id: "7201051",
        regency_id: "7201",
        name: "PELING TENGAH",
      },
      {
        id: "7201060",
        regency_id: "7201",
        name: "BULAGI",
      },
      {
        id: "7201061",
        regency_id: "7201",
        name: "BULAGI SELATAN",
      },
      {
        id: "7201062",
        regency_id: "7201",
        name: "BULAGI UTARA",
      },
      {
        id: "7201070",
        regency_id: "7201",
        name: "BUKO",
      },
      {
        id: "7201071",
        regency_id: "7201",
        name: "BUKO SELATAN",
      },
      {
        id: "7202010",
        regency_id: "7202",
        name: "TOILI",
      },
      {
        id: "7202011",
        regency_id: "7202",
        name: "TOILI BARAT",
      },
      {
        id: "7202012",
        regency_id: "7202",
        name: "MOILONG",
      },
      {
        id: "7202020",
        regency_id: "7202",
        name: "BATUI",
      },
      {
        id: "7202021",
        regency_id: "7202",
        name: "BATUI SELATAN",
      },
      {
        id: "7202030",
        regency_id: "7202",
        name: "BUNTA",
      },
      {
        id: "7202031",
        regency_id: "7202",
        name: "NUHON",
      },
      {
        id: "7202032",
        regency_id: "7202",
        name: "SIMPANG RAYA",
      },
      {
        id: "7202040",
        regency_id: "7202",
        name: "KINTOM",
      },
      {
        id: "7202050",
        regency_id: "7202",
        name: "LUWUK",
      },
      {
        id: "7202051",
        regency_id: "7202",
        name: "LUWUK TIMUR",
      },
      {
        id: "7202052",
        regency_id: "7202",
        name: "LUWUK UTARA",
      },
      {
        id: "7202053",
        regency_id: "7202",
        name: "LUWUK SELATAN",
      },
      {
        id: "7202054",
        regency_id: "7202",
        name: "NAMBO",
      },
      {
        id: "7202060",
        regency_id: "7202",
        name: "PAGIMANA",
      },
      {
        id: "7202061",
        regency_id: "7202",
        name: "BUALEMO",
      },
      {
        id: "7202062",
        regency_id: "7202",
        name: "LOBU",
      },
      {
        id: "7202070",
        regency_id: "7202",
        name: "LAMALA",
      },
      {
        id: "7202071",
        regency_id: "7202",
        name: "MASAMA",
      },
      {
        id: "7202072",
        regency_id: "7202",
        name: "MANTOH",
      },
      {
        id: "7202080",
        regency_id: "7202",
        name: "BALANTAK",
      },
      {
        id: "7202081",
        regency_id: "7202",
        name: "BALANTAK SELATAN",
      },
      {
        id: "7202082",
        regency_id: "7202",
        name: "BALANTAK UTARA",
      },
      {
        id: "7203010",
        regency_id: "7203",
        name: "MENUI KEPULAUAN",
      },
      {
        id: "7203020",
        regency_id: "7203",
        name: "BUNGKU SELATAN",
      },
      {
        id: "7203021",
        regency_id: "7203",
        name: "BAHODOPI",
      },
      {
        id: "7203022",
        regency_id: "7203",
        name: "BUNGKU PESISIR",
      },
      {
        id: "7203030",
        regency_id: "7203",
        name: "BUNGKU TENGAH",
      },
      {
        id: "7203031",
        regency_id: "7203",
        name: "BUNGKU TIMUR",
      },
      {
        id: "7203040",
        regency_id: "7203",
        name: "BUNGKU BARAT",
      },
      {
        id: "7203041",
        regency_id: "7203",
        name: "BUMI RAYA",
      },
      {
        id: "7203042",
        regency_id: "7203",
        name: "WITA PONDA",
      },
      {
        id: "7204010",
        regency_id: "7204",
        name: "PAMONA SELATAN",
      },
      {
        id: "7204011",
        regency_id: "7204",
        name: "PAMONA BARAT",
      },
      {
        id: "7204012",
        regency_id: "7204",
        name: "PAMONA TENGGARA",
      },
      {
        id: "7204020",
        regency_id: "7204",
        name: "LORE SELATAN",
      },
      {
        id: "7204021",
        regency_id: "7204",
        name: "LORE BARAT",
      },
      {
        id: "7204030",
        regency_id: "7204",
        name: "PAMONA PUSALEMBA",
      },
      {
        id: "7204031",
        regency_id: "7204",
        name: "PAMONA TIMUR",
      },
      {
        id: "7204032",
        regency_id: "7204",
        name: "PAMONA UTARA",
      },
      {
        id: "7204040",
        regency_id: "7204",
        name: "LORE UTARA",
      },
      {
        id: "7204041",
        regency_id: "7204",
        name: "LORE TENGAH",
      },
      {
        id: "7204042",
        regency_id: "7204",
        name: "LORE TIMUR",
      },
      {
        id: "7204043",
        regency_id: "7204",
        name: "LORE PEORE",
      },
      {
        id: "7204050",
        regency_id: "7204",
        name: "POSO PESISIR",
      },
      {
        id: "7204051",
        regency_id: "7204",
        name: "POSO PESISIR SELATAN",
      },
      {
        id: "7204052",
        regency_id: "7204",
        name: "POSO PESISIR UTARA",
      },
      {
        id: "7204060",
        regency_id: "7204",
        name: "LAGE",
      },
      {
        id: "7204070",
        regency_id: "7204",
        name: "POSO KOTA",
      },
      {
        id: "7204071",
        regency_id: "7204",
        name: "POSO KOTA UTARA",
      },
      {
        id: "7204072",
        regency_id: "7204",
        name: "POSO KOTA SELATAN",
      },
      {
        id: "7205041",
        regency_id: "7205",
        name: "RIO PAKAVA",
      },
      {
        id: "7205051",
        regency_id: "7205",
        name: "PINEMBANI",
      },
      {
        id: "7205080",
        regency_id: "7205",
        name: "BANAWA",
      },
      {
        id: "7205081",
        regency_id: "7205",
        name: "BANAWA SELATAN",
      },
      {
        id: "7205082",
        regency_id: "7205",
        name: "BANAWA TENGAH",
      },
      {
        id: "7205090",
        regency_id: "7205",
        name: "LABUAN",
      },
      {
        id: "7205091",
        regency_id: "7205",
        name: "TANANTOVEA",
      },
      {
        id: "7205100",
        regency_id: "7205",
        name: "SINDUE",
      },
      {
        id: "7205101",
        regency_id: "7205",
        name: "SINDUE TOMBUSABORA",
      },
      {
        id: "7205102",
        regency_id: "7205",
        name: "SINDUE TOBATA",
      },
      {
        id: "7205120",
        regency_id: "7205",
        name: "SIRENJA",
      },
      {
        id: "7205130",
        regency_id: "7205",
        name: "BALAESANG",
      },
      {
        id: "7205131",
        regency_id: "7205",
        name: "BALAESANG TANJUNG",
      },
      {
        id: "7205140",
        regency_id: "7205",
        name: "DAMPELAS",
      },
      {
        id: "7205160",
        regency_id: "7205",
        name: "SOJOL",
      },
      {
        id: "7205161",
        regency_id: "7205",
        name: "SOJOL UTARA",
      },
      {
        id: "7206010",
        regency_id: "7206",
        name: "DAMPAL SELATAN",
      },
      {
        id: "7206020",
        regency_id: "7206",
        name: "DAMPAL UTARA",
      },
      {
        id: "7206030",
        regency_id: "7206",
        name: "DONDO",
      },
      {
        id: "7206031",
        regency_id: "7206",
        name: "OGODEIDE",
      },
      {
        id: "7206032",
        regency_id: "7206",
        name: "BASIDONDO",
      },
      {
        id: "7206040",
        regency_id: "7206",
        name: "BAOLAN",
      },
      {
        id: "7206041",
        regency_id: "7206",
        name: "LAMPASIO",
      },
      {
        id: "7206050",
        regency_id: "7206",
        name: "GALANG",
      },
      {
        id: "7206060",
        regency_id: "7206",
        name: "TOLITOLI UTARA",
      },
      {
        id: "7206061",
        regency_id: "7206",
        name: "DAKO PAMEAN",
      },
      {
        id: "7207010",
        regency_id: "7207",
        name: "LAKEA",
      },
      {
        id: "7207011",
        regency_id: "7207",
        name: "BIAU",
      },
      {
        id: "7207012",
        regency_id: "7207",
        name: "KARAMAT",
      },
      {
        id: "7207020",
        regency_id: "7207",
        name: "MOMUNU",
      },
      {
        id: "7207021",
        regency_id: "7207",
        name: "TILOAN",
      },
      {
        id: "7207030",
        regency_id: "7207",
        name: "BOKAT",
      },
      {
        id: "7207031",
        regency_id: "7207",
        name: "BUKAL",
      },
      {
        id: "7207040",
        regency_id: "7207",
        name: "BUNOBOGU",
      },
      {
        id: "7207041",
        regency_id: "7207",
        name: "GADUNG",
      },
      {
        id: "7207050",
        regency_id: "7207",
        name: "PALELEH",
      },
      {
        id: "7207051",
        regency_id: "7207",
        name: "PALELEH BARAT",
      },
      {
        id: "7208010",
        regency_id: "7208",
        name: "SAUSU",
      },
      {
        id: "7208011",
        regency_id: "7208",
        name: "TORUE",
      },
      {
        id: "7208012",
        regency_id: "7208",
        name: "BALINGGI",
      },
      {
        id: "7208020",
        regency_id: "7208",
        name: "PARIGI",
      },
      {
        id: "7208021",
        regency_id: "7208",
        name: "PARIGI SELATAN",
      },
      {
        id: "7208022",
        regency_id: "7208",
        name: "PARIGI BARAT",
      },
      {
        id: "7208023",
        regency_id: "7208",
        name: "PARIGI UTARA",
      },
      {
        id: "7208024",
        regency_id: "7208",
        name: "PARIGI TENGAH",
      },
      {
        id: "7208030",
        regency_id: "7208",
        name: "AMPIBABO",
      },
      {
        id: "7208031",
        regency_id: "7208",
        name: "KASIMBAR",
      },
      {
        id: "7208032",
        regency_id: "7208",
        name: "TORIBULU",
      },
      {
        id: "7208033",
        regency_id: "7208",
        name: "SINIU",
      },
      {
        id: "7208040",
        regency_id: "7208",
        name: "TINOMBO",
      },
      {
        id: "7208041",
        regency_id: "7208",
        name: "TINOMBO SELATAN",
      },
      {
        id: "7208042",
        regency_id: "7208",
        name: "SIDOAN",
      },
      {
        id: "7208050",
        regency_id: "7208",
        name: "TOMINI",
      },
      {
        id: "7208051",
        regency_id: "7208",
        name: "MEPANGA",
      },
      {
        id: "7208052",
        regency_id: "7208",
        name: "PALASA",
      },
      {
        id: "7208060",
        regency_id: "7208",
        name: "MOUTONG",
      },
      {
        id: "7208061",
        regency_id: "7208",
        name: "BOLANO LAMBUNU",
      },
      {
        id: "7208062",
        regency_id: "7208",
        name: "TAOPA",
      },
      {
        id: "7208063",
        regency_id: "7208",
        name: "BOLANO",
      },
      {
        id: "7208064",
        regency_id: "7208",
        name: "ONGKA MALINO",
      },
      {
        id: "7209010",
        regency_id: "7209",
        name: "TOJO BARAT",
      },
      {
        id: "7209020",
        regency_id: "7209",
        name: "TOJO",
      },
      {
        id: "7209030",
        regency_id: "7209",
        name: "ULUBONGKA",
      },
      {
        id: "7209040",
        regency_id: "7209",
        name: "AMPANA TETE",
      },
      {
        id: "7209050",
        regency_id: "7209",
        name: "AMPANA KOTA",
      },
      {
        id: "7209051",
        regency_id: "7209",
        name: "RATOLINDO",
      },
      {
        id: "7209060",
        regency_id: "7209",
        name: "UNA - UNA",
      },
      {
        id: "7209061",
        regency_id: "7209",
        name: "BATUDAKA",
      },
      {
        id: "7209070",
        regency_id: "7209",
        name: "TOGEAN",
      },
      {
        id: "7209080",
        regency_id: "7209",
        name: "WALEA KEPULAUAN",
      },
      {
        id: "7209081",
        regency_id: "7209",
        name: "WALEA BESAR",
      },
      {
        id: "7209082",
        regency_id: "7209",
        name: "TALATAKO",
      },
      {
        id: "7210010",
        regency_id: "7210",
        name: "PIPIKORO",
      },
      {
        id: "7210020",
        regency_id: "7210",
        name: "KULAWI SELATAN",
      },
      {
        id: "7210030",
        regency_id: "7210",
        name: "KULAWI",
      },
      {
        id: "7210040",
        regency_id: "7210",
        name: "LINDU",
      },
      {
        id: "7210050",
        regency_id: "7210",
        name: "NOKILALAKI",
      },
      {
        id: "7210060",
        regency_id: "7210",
        name: "PALOLO",
      },
      {
        id: "7210070",
        regency_id: "7210",
        name: "GUMBASA",
      },
      {
        id: "7210080",
        regency_id: "7210",
        name: "DOLO SELATAN",
      },
      {
        id: "7210090",
        regency_id: "7210",
        name: "DOLO BARAT",
      },
      {
        id: "7210100",
        regency_id: "7210",
        name: "TANAMBULAVA",
      },
      {
        id: "7210110",
        regency_id: "7210",
        name: "DOLO",
      },
      {
        id: "7210120",
        regency_id: "7210",
        name: "SIGI BIROMARU",
      },
      {
        id: "7210130",
        regency_id: "7210",
        name: "MARAWOLA",
      },
      {
        id: "7210140",
        regency_id: "7210",
        name: "MARAWOLA BARAT",
      },
      {
        id: "7210150",
        regency_id: "7210",
        name: "KINOVARO",
      },
      {
        id: "7211010",
        regency_id: "7211",
        name: "BANGKURUNG",
      },
      {
        id: "7211020",
        regency_id: "7211",
        name: "LABOBO",
      },
      {
        id: "7211030",
        regency_id: "7211",
        name: "BANGGAI UTARA",
      },
      {
        id: "7211040",
        regency_id: "7211",
        name: "BANGGAI",
      },
      {
        id: "7211050",
        regency_id: "7211",
        name: "BANGGAI TENGAH",
      },
      {
        id: "7211060",
        regency_id: "7211",
        name: "BANGGAI SELATAN",
      },
      {
        id: "7211070",
        regency_id: "7211",
        name: "BOKAN KEPULAUAN",
      },
      {
        id: "7212010",
        regency_id: "7212",
        name: "MORI ATAS",
      },
      {
        id: "7212020",
        regency_id: "7212",
        name: "LEMBO",
      },
      {
        id: "7212030",
        regency_id: "7212",
        name: "LEMBO RAYA",
      },
      {
        id: "7212040",
        regency_id: "7212",
        name: "PETASIA TIMUR",
      },
      {
        id: "7212050",
        regency_id: "7212",
        name: "PETASIA",
      },
      {
        id: "7212060",
        regency_id: "7212",
        name: "PETASIA BARAT",
      },
      {
        id: "7212070",
        regency_id: "7212",
        name: "MORI UTARA",
      },
      {
        id: "7212080",
        regency_id: "7212",
        name: "SOYO JAYA",
      },
      {
        id: "7212090",
        regency_id: "7212",
        name: "BUNGKU UTARA",
      },
      {
        id: "7212100",
        regency_id: "7212",
        name: "MAMOSALATO",
      },
      {
        id: "7271010",
        regency_id: "7271",
        name: "PALU BARAT",
      },
      {
        id: "7271011",
        regency_id: "7271",
        name: "TATANGA",
      },
      {
        id: "7271012",
        regency_id: "7271",
        name: "ULUJADI",
      },
      {
        id: "7271020",
        regency_id: "7271",
        name: "PALU SELATAN",
      },
      {
        id: "7271030",
        regency_id: "7271",
        name: "PALU TIMUR",
      },
      {
        id: "7271031",
        regency_id: "7271",
        name: "MANTIKULORE",
      },
      {
        id: "7271040",
        regency_id: "7271",
        name: "PALU UTARA",
      },
      {
        id: "7271041",
        regency_id: "7271",
        name: "TAWAELI",
      },
      {
        id: "7301010",
        regency_id: "7301",
        name: "PASIMARANNU",
      },
      {
        id: "7301011",
        regency_id: "7301",
        name: "PASILAMBENA",
      },
      {
        id: "7301020",
        regency_id: "7301",
        name: "PASIMASSUNGGU",
      },
      {
        id: "7301021",
        regency_id: "7301",
        name: "TAKABONERATE",
      },
      {
        id: "7301022",
        regency_id: "7301",
        name: "PASIMASSUNGGU TIMUR",
      },
      {
        id: "7301030",
        regency_id: "7301",
        name: "BONTOSIKUYU",
      },
      {
        id: "7301040",
        regency_id: "7301",
        name: "BONTOHARU",
      },
      {
        id: "7301041",
        regency_id: "7301",
        name: "BENTENG",
      },
      {
        id: "7301042",
        regency_id: "7301",
        name: "BONTOMANAI",
      },
      {
        id: "7301050",
        regency_id: "7301",
        name: "BONTOMATENE",
      },
      {
        id: "7301051",
        regency_id: "7301",
        name: "BUKI",
      },
      {
        id: "7302010",
        regency_id: "7302",
        name: "GANTARANG",
      },
      {
        id: "7302020",
        regency_id: "7302",
        name: "UJUNG BULU",
      },
      {
        id: "7302021",
        regency_id: "7302",
        name: "UJUNG LOE",
      },
      {
        id: "7302030",
        regency_id: "7302",
        name: "BONTO BAHARI",
      },
      {
        id: "7302040",
        regency_id: "7302",
        name: "BONTOTIRO",
      },
      {
        id: "7302050",
        regency_id: "7302",
        name: "HERO LANGE-LANGE",
      },
      {
        id: "7302060",
        regency_id: "7302",
        name: "KAJANG",
      },
      {
        id: "7302070",
        regency_id: "7302",
        name: "BULUKUMPA",
      },
      {
        id: "7302080",
        regency_id: "7302",
        name: "RILAU ALE",
      },
      {
        id: "7302090",
        regency_id: "7302",
        name: "KINDANG",
      },
      {
        id: "7303010",
        regency_id: "7303",
        name: "BISSAPPU",
      },
      {
        id: "7303011",
        regency_id: "7303",
        name: "ULUERE",
      },
      {
        id: "7303012",
        regency_id: "7303",
        name: "SINOA",
      },
      {
        id: "7303020",
        regency_id: "7303",
        name: "BANTAENG",
      },
      {
        id: "7303021",
        regency_id: "7303",
        name: "EREMERASA",
      },
      {
        id: "7303030",
        regency_id: "7303",
        name: "TOMPOBULU",
      },
      {
        id: "7303031",
        regency_id: "7303",
        name: "PA'JUKUKANG",
      },
      {
        id: "7303032",
        regency_id: "7303",
        name: "GANTARANGKEKE",
      },
      {
        id: "7304010",
        regency_id: "7304",
        name: "BANGKALA",
      },
      {
        id: "7304011",
        regency_id: "7304",
        name: "BANGKALA BARAT",
      },
      {
        id: "7304020",
        regency_id: "7304",
        name: "TAMALATEA",
      },
      {
        id: "7304021",
        regency_id: "7304",
        name: "BONTORAMBA",
      },
      {
        id: "7304030",
        regency_id: "7304",
        name: "BINAMU",
      },
      {
        id: "7304031",
        regency_id: "7304",
        name: "TURATEA",
      },
      {
        id: "7304040",
        regency_id: "7304",
        name: "BATANG",
      },
      {
        id: "7304041",
        regency_id: "7304",
        name: "ARUNGKEKE",
      },
      {
        id: "7304042",
        regency_id: "7304",
        name: "TAROWANG",
      },
      {
        id: "7304050",
        regency_id: "7304",
        name: "KELARA",
      },
      {
        id: "7304051",
        regency_id: "7304",
        name: "RUMBIA",
      },
      {
        id: "7305010",
        regency_id: "7305",
        name: "MANGARA BOMBANG",
      },
      {
        id: "7305020",
        regency_id: "7305",
        name: "MAPPAKASUNGGU",
      },
      {
        id: "7305021",
        regency_id: "7305",
        name: "SANROBONE",
      },
      {
        id: "7305030",
        regency_id: "7305",
        name: "POLOMBANGKENG SELATAN",
      },
      {
        id: "7305031",
        regency_id: "7305",
        name: "PATTALLASSANG",
      },
      {
        id: "7305040",
        regency_id: "7305",
        name: "POLOMBANGKENG UTARA",
      },
      {
        id: "7305050",
        regency_id: "7305",
        name: "GALESONG SELATAN",
      },
      {
        id: "7305051",
        regency_id: "7305",
        name: "GALESONG",
      },
      {
        id: "7305060",
        regency_id: "7305",
        name: "GALESONG UTARA",
      },
      {
        id: "7306010",
        regency_id: "7306",
        name: "BONTONOMPO",
      },
      {
        id: "7306011",
        regency_id: "7306",
        name: "BONTONOMPO SELATAN",
      },
      {
        id: "7306020",
        regency_id: "7306",
        name: "BAJENG",
      },
      {
        id: "7306021",
        regency_id: "7306",
        name: "BAJENG BARAT",
      },
      {
        id: "7306030",
        regency_id: "7306",
        name: "PALLANGGA",
      },
      {
        id: "7306031",
        regency_id: "7306",
        name: "BAROMBONG",
      },
      {
        id: "7306040",
        regency_id: "7306",
        name: "SOMBA OPU",
      },
      {
        id: "7306050",
        regency_id: "7306",
        name: "BONTOMARANNU",
      },
      {
        id: "7306051",
        regency_id: "7306",
        name: "PATTALLASSANG",
      },
      {
        id: "7306060",
        regency_id: "7306",
        name: "PARANGLOE",
      },
      {
        id: "7306061",
        regency_id: "7306",
        name: "MANUJU",
      },
      {
        id: "7306070",
        regency_id: "7306",
        name: "TINGGIMONCONG",
      },
      {
        id: "7306071",
        regency_id: "7306",
        name: "TOMBOLO PAO",
      },
      {
        id: "7306072",
        regency_id: "7306",
        name: "PARIGI",
      },
      {
        id: "7306080",
        regency_id: "7306",
        name: "BUNGAYA",
      },
      {
        id: "7306081",
        regency_id: "7306",
        name: "BONTOLEMPANGAN",
      },
      {
        id: "7306090",
        regency_id: "7306",
        name: "TOMPOBULU",
      },
      {
        id: "7306091",
        regency_id: "7306",
        name: "BIRINGBULU",
      },
      {
        id: "7307010",
        regency_id: "7307",
        name: "SINJAI BARAT",
      },
      {
        id: "7307020",
        regency_id: "7307",
        name: "SINJAI BORONG",
      },
      {
        id: "7307030",
        regency_id: "7307",
        name: "SINJAI SELATAN",
      },
      {
        id: "7307040",
        regency_id: "7307",
        name: "TELLU LIMPOE",
      },
      {
        id: "7307050",
        regency_id: "7307",
        name: "SINJAI TIMUR",
      },
      {
        id: "7307060",
        regency_id: "7307",
        name: "SINJAI TENGAH",
      },
      {
        id: "7307070",
        regency_id: "7307",
        name: "SINJAI UTARA",
      },
      {
        id: "7307080",
        regency_id: "7307",
        name: "BULUPODDO",
      },
      {
        id: "7307090",
        regency_id: "7307",
        name: "PULAU SEMBILAN",
      },
      {
        id: "7308010",
        regency_id: "7308",
        name: "MANDAI",
      },
      {
        id: "7308011",
        regency_id: "7308",
        name: "MONCONGLOE",
      },
      {
        id: "7308020",
        regency_id: "7308",
        name: "MAROS BARU",
      },
      {
        id: "7308021",
        regency_id: "7308",
        name: "MARUSU",
      },
      {
        id: "7308022",
        regency_id: "7308",
        name: "TURIKALE",
      },
      {
        id: "7308023",
        regency_id: "7308",
        name: "LAU",
      },
      {
        id: "7308030",
        regency_id: "7308",
        name: "BONTOA",
      },
      {
        id: "7308040",
        regency_id: "7308",
        name: "BANTIMURUNG",
      },
      {
        id: "7308041",
        regency_id: "7308",
        name: "SIMBANG",
      },
      {
        id: "7308050",
        regency_id: "7308",
        name: "TANRALILI",
      },
      {
        id: "7308051",
        regency_id: "7308",
        name: "TOMPU BULU",
      },
      {
        id: "7308060",
        regency_id: "7308",
        name: "CAMBA",
      },
      {
        id: "7308061",
        regency_id: "7308",
        name: "CENRANA",
      },
      {
        id: "7308070",
        regency_id: "7308",
        name: "MALLAWA",
      },
      {
        id: "7309010",
        regency_id: "7309",
        name: "LIUKANG TANGAYA",
      },
      {
        id: "7309020",
        regency_id: "7309",
        name: "LIUKANG KALMAS",
      },
      {
        id: "7309030",
        regency_id: "7309",
        name: "LIUKANG TUPABBIRING",
      },
      {
        id: "7309031",
        regency_id: "7309",
        name: "LIUKANG TUPABBIRING UTARA",
      },
      {
        id: "7309040",
        regency_id: "7309",
        name: "PANGKAJENE",
      },
      {
        id: "7309041",
        regency_id: "7309",
        name: "MINASATENE",
      },
      {
        id: "7309050",
        regency_id: "7309",
        name: "BALOCCI",
      },
      {
        id: "7309051",
        regency_id: "7309",
        name: "TONDONG TALLASA",
      },
      {
        id: "7309060",
        regency_id: "7309",
        name: "BUNGORO",
      },
      {
        id: "7309070",
        regency_id: "7309",
        name: "LABAKKANG",
      },
      {
        id: "7309080",
        regency_id: "7309",
        name: "MA'RANG",
      },
      {
        id: "7309091",
        regency_id: "7309",
        name: "SEGERI",
      },
      {
        id: "7309092",
        regency_id: "7309",
        name: "MANDALLE",
      },
      {
        id: "7310010",
        regency_id: "7310",
        name: "TANETE RIAJA",
      },
      {
        id: "7310011",
        regency_id: "7310",
        name: "PUJANANTING",
      },
      {
        id: "7310020",
        regency_id: "7310",
        name: "TANETE RILAU",
      },
      {
        id: "7310030",
        regency_id: "7310",
        name: "BARRU",
      },
      {
        id: "7310040",
        regency_id: "7310",
        name: "SOPPENG RIAJA",
      },
      {
        id: "7310041",
        regency_id: "7310",
        name: "BALUSU",
      },
      {
        id: "7310050",
        regency_id: "7310",
        name: "MALLUSETASI",
      },
      {
        id: "7311010",
        regency_id: "7311",
        name: "BONTOCANI",
      },
      {
        id: "7311020",
        regency_id: "7311",
        name: "KAHU",
      },
      {
        id: "7311030",
        regency_id: "7311",
        name: "KAJUARA",
      },
      {
        id: "7311040",
        regency_id: "7311",
        name: "SALOMEKKO",
      },
      {
        id: "7311050",
        regency_id: "7311",
        name: "TONRA",
      },
      {
        id: "7311060",
        regency_id: "7311",
        name: "PATIMPENG",
      },
      {
        id: "7311070",
        regency_id: "7311",
        name: "LIBURENG",
      },
      {
        id: "7311080",
        regency_id: "7311",
        name: "MARE",
      },
      {
        id: "7311090",
        regency_id: "7311",
        name: "SIBULUE",
      },
      {
        id: "7311100",
        regency_id: "7311",
        name: "CINA",
      },
      {
        id: "7311110",
        regency_id: "7311",
        name: "BAREBBO",
      },
      {
        id: "7311120",
        regency_id: "7311",
        name: "PONRE",
      },
      {
        id: "7311130",
        regency_id: "7311",
        name: "LAPPARIAJA",
      },
      {
        id: "7311140",
        regency_id: "7311",
        name: "LAMURU",
      },
      {
        id: "7311141",
        regency_id: "7311",
        name: "TELLU LIMPOE",
      },
      {
        id: "7311150",
        regency_id: "7311",
        name: "BENGO",
      },
      {
        id: "7311160",
        regency_id: "7311",
        name: "ULAWENG",
      },
      {
        id: "7311170",
        regency_id: "7311",
        name: "PALAKKA",
      },
      {
        id: "7311180",
        regency_id: "7311",
        name: "AWANGPONE",
      },
      {
        id: "7311190",
        regency_id: "7311",
        name: "TELLU SIATTINGE",
      },
      {
        id: "7311200",
        regency_id: "7311",
        name: "AMALI",
      },
      {
        id: "7311210",
        regency_id: "7311",
        name: "AJANGALE",
      },
      {
        id: "7311220",
        regency_id: "7311",
        name: "DUA BOCCOE",
      },
      {
        id: "7311230",
        regency_id: "7311",
        name: "CENRANA",
      },
      {
        id: "7311710",
        regency_id: "7311",
        name: "TANETE RIATTANG BARAT",
      },
      {
        id: "7311720",
        regency_id: "7311",
        name: "TANETE RIATTANG",
      },
      {
        id: "7311730",
        regency_id: "7311",
        name: "TANETE RIATTANG TIMUR",
      },
      {
        id: "7312010",
        regency_id: "7312",
        name: "MARIO RIWAWO",
      },
      {
        id: "7312020",
        regency_id: "7312",
        name: "LALABATA",
      },
      {
        id: "7312030",
        regency_id: "7312",
        name: "LILI RIAJA",
      },
      {
        id: "7312031",
        regency_id: "7312",
        name: "GANRA",
      },
      {
        id: "7312032",
        regency_id: "7312",
        name: "CITTA",
      },
      {
        id: "7312040",
        regency_id: "7312",
        name: "LILI RILAU",
      },
      {
        id: "7312050",
        regency_id: "7312",
        name: "DONRI DONRI",
      },
      {
        id: "7312060",
        regency_id: "7312",
        name: "MARIO RIAWA",
      },
      {
        id: "7313010",
        regency_id: "7313",
        name: "SABBANG PARU",
      },
      {
        id: "7313020",
        regency_id: "7313",
        name: "TEMPE",
      },
      {
        id: "7313030",
        regency_id: "7313",
        name: "PAMMANA",
      },
      {
        id: "7313040",
        regency_id: "7313",
        name: "BOLA",
      },
      {
        id: "7313050",
        regency_id: "7313",
        name: "TAKKALALLA",
      },
      {
        id: "7313060",
        regency_id: "7313",
        name: "SAJOANGING",
      },
      {
        id: "7313061",
        regency_id: "7313",
        name: "PENRANG",
      },
      {
        id: "7313070",
        regency_id: "7313",
        name: "MAJAULENG",
      },
      {
        id: "7313080",
        regency_id: "7313",
        name: "TANA SITOLO",
      },
      {
        id: "7313090",
        regency_id: "7313",
        name: "BELAWA",
      },
      {
        id: "7313100",
        regency_id: "7313",
        name: "MANIANG PAJO",
      },
      {
        id: "7313101",
        regency_id: "7313",
        name: "GILIRENG",
      },
      {
        id: "7313110",
        regency_id: "7313",
        name: "KEERA",
      },
      {
        id: "7313120",
        regency_id: "7313",
        name: "PITUMPANUA",
      },
      {
        id: "7314010",
        regency_id: "7314",
        name: "PANCA LAUTANG",
      },
      {
        id: "7314020",
        regency_id: "7314",
        name: "TELLULIMPO E",
      },
      {
        id: "7314030",
        regency_id: "7314",
        name: "WATANG PULU",
      },
      {
        id: "7314040",
        regency_id: "7314",
        name: "BARANTI",
      },
      {
        id: "7314050",
        regency_id: "7314",
        name: "PANCA RIJANG",
      },
      {
        id: "7314051",
        regency_id: "7314",
        name: "KULO",
      },
      {
        id: "7314060",
        regency_id: "7314",
        name: "MARITENGNGAE",
      },
      {
        id: "7314061",
        regency_id: "7314",
        name: "WATANG SIDENRENG",
      },
      {
        id: "7314070",
        regency_id: "7314",
        name: "PITU RIAWA",
      },
      {
        id: "7314080",
        regency_id: "7314",
        name: "DUAPITUE",
      },
      {
        id: "7314081",
        regency_id: "7314",
        name: "PITU RIASE",
      },
      {
        id: "7315010",
        regency_id: "7315",
        name: "SUPPA",
      },
      {
        id: "7315020",
        regency_id: "7315",
        name: "MATTIROSOMPE",
      },
      {
        id: "7315021",
        regency_id: "7315",
        name: "LANRISANG",
      },
      {
        id: "7315030",
        regency_id: "7315",
        name: "MATTIRO BULU",
      },
      {
        id: "7315040",
        regency_id: "7315",
        name: "WATANG SAWITTO",
      },
      {
        id: "7315041",
        regency_id: "7315",
        name: "PALETEANG",
      },
      {
        id: "7315042",
        regency_id: "7315",
        name: "TIROANG",
      },
      {
        id: "7315050",
        regency_id: "7315",
        name: "PATAMPANUA",
      },
      {
        id: "7315060",
        regency_id: "7315",
        name: "CEMPA",
      },
      {
        id: "7315070",
        regency_id: "7315",
        name: "DUAMPANUA",
      },
      {
        id: "7315071",
        regency_id: "7315",
        name: "BATULAPPA",
      },
      {
        id: "7315080",
        regency_id: "7315",
        name: "LEMBANG",
      },
      {
        id: "7316010",
        regency_id: "7316",
        name: "MAIWA",
      },
      {
        id: "7316011",
        regency_id: "7316",
        name: "BUNGIN",
      },
      {
        id: "7316020",
        regency_id: "7316",
        name: "ENREKANG",
      },
      {
        id: "7316021",
        regency_id: "7316",
        name: "CENDANA",
      },
      {
        id: "7316030",
        regency_id: "7316",
        name: "BARAKA",
      },
      {
        id: "7316031",
        regency_id: "7316",
        name: "BUNTU BATU",
      },
      {
        id: "7316040",
        regency_id: "7316",
        name: "ANGGERAJA",
      },
      {
        id: "7316041",
        regency_id: "7316",
        name: "MALUA",
      },
      {
        id: "7316050",
        regency_id: "7316",
        name: "ALLA",
      },
      {
        id: "7316051",
        regency_id: "7316",
        name: "CURIO",
      },
      {
        id: "7316052",
        regency_id: "7316",
        name: "MASALLE",
      },
      {
        id: "7316053",
        regency_id: "7316",
        name: "BAROKO",
      },
      {
        id: "7317010",
        regency_id: "7317",
        name: "LAROMPONG",
      },
      {
        id: "7317011",
        regency_id: "7317",
        name: "LAROMPONG SELATAN",
      },
      {
        id: "7317020",
        regency_id: "7317",
        name: "SULI",
      },
      {
        id: "7317021",
        regency_id: "7317",
        name: "SULI BARAT",
      },
      {
        id: "7317030",
        regency_id: "7317",
        name: "BELOPA",
      },
      {
        id: "7317031",
        regency_id: "7317",
        name: "KAMANRE",
      },
      {
        id: "7317032",
        regency_id: "7317",
        name: "BELOPA UTARA",
      },
      {
        id: "7317040",
        regency_id: "7317",
        name: "BAJO",
      },
      {
        id: "7317041",
        regency_id: "7317",
        name: "BAJO BARAT",
      },
      {
        id: "7317050",
        regency_id: "7317",
        name: "BASSESANGTEMPE",
      },
      {
        id: "7317051",
        regency_id: "7317",
        name: "LATIMOJONG",
      },
      {
        id: "7317052",
        regency_id: "7317",
        name: "BASSESANGTEMPE UTARA",
      },
      {
        id: "7317060",
        regency_id: "7317",
        name: "BUPON",
      },
      {
        id: "7317061",
        regency_id: "7317",
        name: "PONRANG",
      },
      {
        id: "7317062",
        regency_id: "7317",
        name: "PONRANG SELATAN",
      },
      {
        id: "7317070",
        regency_id: "7317",
        name: "BUA",
      },
      {
        id: "7317080",
        regency_id: "7317",
        name: "WALENRANG",
      },
      {
        id: "7317081",
        regency_id: "7317",
        name: "WALENRANG TIMUR",
      },
      {
        id: "7317090",
        regency_id: "7317",
        name: "LAMASI",
      },
      {
        id: "7317091",
        regency_id: "7317",
        name: "WALENRANG UTARA",
      },
      {
        id: "7317092",
        regency_id: "7317",
        name: "WALENRANG BARAT",
      },
      {
        id: "7317093",
        regency_id: "7317",
        name: "LAMASI TIMUR",
      },
      {
        id: "7318010",
        regency_id: "7318",
        name: "BONGGAKARADENG",
      },
      {
        id: "7318011",
        regency_id: "7318",
        name: "SIMBUANG",
      },
      {
        id: "7318012",
        regency_id: "7318",
        name: "RANO",
      },
      {
        id: "7318013",
        regency_id: "7318",
        name: "MAPPAK",
      },
      {
        id: "7318020",
        regency_id: "7318",
        name: "MENGKENDEK",
      },
      {
        id: "7318021",
        regency_id: "7318",
        name: "GANDANG BATU SILANAN",
      },
      {
        id: "7318030",
        regency_id: "7318",
        name: "SANGALLA",
      },
      {
        id: "7318031",
        regency_id: "7318",
        name: "SANGALA SELATAN",
      },
      {
        id: "7318032",
        regency_id: "7318",
        name: "SANGALLA UTARA",
      },
      {
        id: "7318040",
        regency_id: "7318",
        name: "MAKALE",
      },
      {
        id: "7318041",
        regency_id: "7318",
        name: "MAKALE SELATAN",
      },
      {
        id: "7318042",
        regency_id: "7318",
        name: "MAKALE UTARA",
      },
      {
        id: "7318050",
        regency_id: "7318",
        name: "SALUPUTTI",
      },
      {
        id: "7318051",
        regency_id: "7318",
        name: "BITTUANG",
      },
      {
        id: "7318052",
        regency_id: "7318",
        name: "REMBON",
      },
      {
        id: "7318053",
        regency_id: "7318",
        name: "MASANDA",
      },
      {
        id: "7318054",
        regency_id: "7318",
        name: "MALIMBONG BALEPE",
      },
      {
        id: "7318061",
        regency_id: "7318",
        name: "RANTETAYO",
      },
      {
        id: "7318067",
        regency_id: "7318",
        name: "KURRA",
      },
      {
        id: "7322010",
        regency_id: "7322",
        name: "SABBANG",
      },
      {
        id: "7322020",
        regency_id: "7322",
        name: "BAEBUNTA",
      },
      {
        id: "7322030",
        regency_id: "7322",
        name: "MALANGKE",
      },
      {
        id: "7322031",
        regency_id: "7322",
        name: "MALANGKE BARAT",
      },
      {
        id: "7322040",
        regency_id: "7322",
        name: "SUKAMAJU",
      },
      {
        id: "7322050",
        regency_id: "7322",
        name: "BONE-BONE",
      },
      {
        id: "7322051",
        regency_id: "7322",
        name: "TANA LILI",
      },
      {
        id: "7322120",
        regency_id: "7322",
        name: "MASAMBA",
      },
      {
        id: "7322121",
        regency_id: "7322",
        name: "MAPPEDECENG",
      },
      {
        id: "7322122",
        regency_id: "7322",
        name: "RAMPI",
      },
      {
        id: "7322130",
        regency_id: "7322",
        name: "LIMBONG",
      },
      {
        id: "7322131",
        regency_id: "7322",
        name: "SEKO",
      },
      {
        id: "7325010",
        regency_id: "7325",
        name: "BURAU",
      },
      {
        id: "7325020",
        regency_id: "7325",
        name: "WOTU",
      },
      {
        id: "7325030",
        regency_id: "7325",
        name: "TOMONI",
      },
      {
        id: "7325031",
        regency_id: "7325",
        name: "TOMONI TIMUR",
      },
      {
        id: "7325040",
        regency_id: "7325",
        name: "ANGKONA",
      },
      {
        id: "7325050",
        regency_id: "7325",
        name: "MALILI",
      },
      {
        id: "7325060",
        regency_id: "7325",
        name: "TOWUTI",
      },
      {
        id: "7325070",
        regency_id: "7325",
        name: "NUHA",
      },
      {
        id: "7325071",
        regency_id: "7325",
        name: "WASUPONDA",
      },
      {
        id: "7325080",
        regency_id: "7325",
        name: "MANGKUTANA",
      },
      {
        id: "7325081",
        regency_id: "7325",
        name: "KALAENA",
      },
      {
        id: "7326010",
        regency_id: "7326",
        name: "SOPAI",
      },
      {
        id: "7326020",
        regency_id: "7326",
        name: "KESU",
      },
      {
        id: "7326030",
        regency_id: "7326",
        name: "SANGGALANGI",
      },
      {
        id: "7326040",
        regency_id: "7326",
        name: "BUNTAO",
      },
      {
        id: "7326050",
        regency_id: "7326",
        name: "RANTEBUA",
      },
      {
        id: "7326060",
        regency_id: "7326",
        name: "NANGGALA",
      },
      {
        id: "7326070",
        regency_id: "7326",
        name: "TONDON",
      },
      {
        id: "7326080",
        regency_id: "7326",
        name: "TALLUNGLIPU",
      },
      {
        id: "7326090",
        regency_id: "7326",
        name: "RANTEPAO",
      },
      {
        id: "7326100",
        regency_id: "7326",
        name: "TIKALA",
      },
      {
        id: "7326110",
        regency_id: "7326",
        name: "SESEAN",
      },
      {
        id: "7326120",
        regency_id: "7326",
        name: "BALUSU",
      },
      {
        id: "7326130",
        regency_id: "7326",
        name: "SA'DAN",
      },
      {
        id: "7326140",
        regency_id: "7326",
        name: "BENGKELEKILA",
      },
      {
        id: "7326150",
        regency_id: "7326",
        name: "SESEAN SULOARA",
      },
      {
        id: "7326160",
        regency_id: "7326",
        name: "KAPALA PITU",
      },
      {
        id: "7326170",
        regency_id: "7326",
        name: "DENDE PIONGAN NAPO",
      },
      {
        id: "7326180",
        regency_id: "7326",
        name: "AWAN RANTE KARUA",
      },
      {
        id: "7326190",
        regency_id: "7326",
        name: "RINDINGALO",
      },
      {
        id: "7326200",
        regency_id: "7326",
        name: "BUNTU PEPASAN",
      },
      {
        id: "7326210",
        regency_id: "7326",
        name: "BARUPPU",
      },
      {
        id: "7371010",
        regency_id: "7371",
        name: "MARISO",
      },
      {
        id: "7371020",
        regency_id: "7371",
        name: "MAMAJANG",
      },
      {
        id: "7371030",
        regency_id: "7371",
        name: "TAMALATE",
      },
      {
        id: "7371031",
        regency_id: "7371",
        name: "RAPPOCINI",
      },
      {
        id: "7371040",
        regency_id: "7371",
        name: "MAKASSAR",
      },
      {
        id: "7371050",
        regency_id: "7371",
        name: "UJUNG PANDANG",
      },
      {
        id: "7371060",
        regency_id: "7371",
        name: "WAJO",
      },
      {
        id: "7371070",
        regency_id: "7371",
        name: "BONTOALA",
      },
      {
        id: "7371080",
        regency_id: "7371",
        name: "UJUNG TANAH",
      },
      {
        id: "7371081",
        regency_id: "7371",
        name: "KEPULAUAN SANGKARRANG",
      },
      {
        id: "7371090",
        regency_id: "7371",
        name: "TALLO",
      },
      {
        id: "7371100",
        regency_id: "7371",
        name: "PANAKKUKANG",
      },
      {
        id: "7371101",
        regency_id: "7371",
        name: "MANGGALA",
      },
      {
        id: "7371110",
        regency_id: "7371",
        name: "BIRING KANAYA",
      },
      {
        id: "7371111",
        regency_id: "7371",
        name: "TAMALANREA",
      },
      {
        id: "7372010",
        regency_id: "7372",
        name: "BACUKIKI",
      },
      {
        id: "7372011",
        regency_id: "7372",
        name: "BACUKIKI BARAT",
      },
      {
        id: "7372020",
        regency_id: "7372",
        name: "UJUNG",
      },
      {
        id: "7372030",
        regency_id: "7372",
        name: "SOREANG",
      },
      {
        id: "7373010",
        regency_id: "7373",
        name: "WARA SELATAN",
      },
      {
        id: "7373011",
        regency_id: "7373",
        name: "SENDANA",
      },
      {
        id: "7373020",
        regency_id: "7373",
        name: "WARA",
      },
      {
        id: "7373021",
        regency_id: "7373",
        name: "WARA TIMUR",
      },
      {
        id: "7373022",
        regency_id: "7373",
        name: "MUNGKAJANG",
      },
      {
        id: "7373030",
        regency_id: "7373",
        name: "WARA UTARA",
      },
      {
        id: "7373031",
        regency_id: "7373",
        name: "BARA",
      },
      {
        id: "7373040",
        regency_id: "7373",
        name: "TELLUWANUA",
      },
      {
        id: "7373041",
        regency_id: "7373",
        name: "WARA BARAT",
      },
      {
        id: "7401050",
        regency_id: "7401",
        name: "LASALIMU",
      },
      {
        id: "7401051",
        regency_id: "7401",
        name: "LASALIMU SELATAN",
      },
      {
        id: "7401052",
        regency_id: "7401",
        name: "SIONTAPINA",
      },
      {
        id: "7401060",
        regency_id: "7401",
        name: "PASAR WAJO",
      },
      {
        id: "7401061",
        regency_id: "7401",
        name: "WOLOWA",
      },
      {
        id: "7401062",
        regency_id: "7401",
        name: "WABULA",
      },
      {
        id: "7401110",
        regency_id: "7401",
        name: "KAPONTORI",
      },
      {
        id: "7402010",
        regency_id: "7402",
        name: "TONGKUNO",
      },
      {
        id: "7402011",
        regency_id: "7402",
        name: "TONGKUNO SELATAN",
      },
      {
        id: "7402020",
        regency_id: "7402",
        name: "PARIGI",
      },
      {
        id: "7402021",
        regency_id: "7402",
        name: "BONE",
      },
      {
        id: "7402022",
        regency_id: "7402",
        name: "MAROBO",
      },
      {
        id: "7402030",
        regency_id: "7402",
        name: "KABAWO",
      },
      {
        id: "7402031",
        regency_id: "7402",
        name: "KABANGKA",
      },
      {
        id: "7402032",
        regency_id: "7402",
        name: "KONTUKOWUNA",
      },
      {
        id: "7402061",
        regency_id: "7402",
        name: "KONTUNAGA",
      },
      {
        id: "7402062",
        regency_id: "7402",
        name: "WATOPUTE",
      },
      {
        id: "7402070",
        regency_id: "7402",
        name: "KATOBU",
      },
      {
        id: "7402071",
        regency_id: "7402",
        name: "LOHIA",
      },
      {
        id: "7402072",
        regency_id: "7402",
        name: "DURUKA",
      },
      {
        id: "7402073",
        regency_id: "7402",
        name: "BATALAIWORU",
      },
      {
        id: "7402080",
        regency_id: "7402",
        name: "NAPABALANO",
      },
      {
        id: "7402081",
        regency_id: "7402",
        name: "LASALEPA",
      },
      {
        id: "7402083",
        regency_id: "7402",
        name: "TOWEA",
      },
      {
        id: "7402090",
        regency_id: "7402",
        name: "WAKORUMBA SELATAN",
      },
      {
        id: "7402091",
        regency_id: "7402",
        name: "PASIR PUTIH",
      },
      {
        id: "7402092",
        regency_id: "7402",
        name: "PASI KOLAGA",
      },
      {
        id: "7402111",
        regency_id: "7402",
        name: "MALIGANO",
      },
      {
        id: "7402112",
        regency_id: "7402",
        name: "BATUKARA",
      },
      {
        id: "7403090",
        regency_id: "7403",
        name: "SOROPIA",
      },
      {
        id: "7403091",
        regency_id: "7403",
        name: "LALONGGASUMEETO",
      },
      {
        id: "7403100",
        regency_id: "7403",
        name: "SAMPARA",
      },
      {
        id: "7403101",
        regency_id: "7403",
        name: "BONDOALA",
      },
      {
        id: "7403102",
        regency_id: "7403",
        name: "BESULUTU",
      },
      {
        id: "7403103",
        regency_id: "7403",
        name: "KAPOIALA",
      },
      {
        id: "7403104",
        regency_id: "7403",
        name: "ANGGALOMOARE",
      },
      {
        id: "7403105",
        regency_id: "7403",
        name: "MOROSI",
      },
      {
        id: "7403130",
        regency_id: "7403",
        name: "LAMBUYA",
      },
      {
        id: "7403131",
        regency_id: "7403",
        name: "UEPAI",
      },
      {
        id: "7403132",
        regency_id: "7403",
        name: "PURIALA",
      },
      {
        id: "7403133",
        regency_id: "7403",
        name: "ONEMBUTE",
      },
      {
        id: "7403140",
        regency_id: "7403",
        name: "PONDIDAHA",
      },
      {
        id: "7403141",
        regency_id: "7403",
        name: "WONGGEDUKU",
      },
      {
        id: "7403142",
        regency_id: "7403",
        name: "AMONGGEDO",
      },
      {
        id: "7403143",
        regency_id: "7403",
        name: "WONGGEDUKU BARAT",
      },
      {
        id: "7403150",
        regency_id: "7403",
        name: "WAWOTOBI",
      },
      {
        id: "7403151",
        regency_id: "7403",
        name: "MELUHU",
      },
      {
        id: "7403152",
        regency_id: "7403",
        name: "KONAWE",
      },
      {
        id: "7403153",
        regency_id: "7403",
        name: "ANGGOTOA",
      },
      {
        id: "7403170",
        regency_id: "7403",
        name: "UNAAHA",
      },
      {
        id: "7403171",
        regency_id: "7403",
        name: "ANGGABERI",
      },
      {
        id: "7403180",
        regency_id: "7403",
        name: "ABUKI",
      },
      {
        id: "7403181",
        regency_id: "7403",
        name: "LATOMA",
      },
      {
        id: "7403182",
        regency_id: "7403",
        name: "TONGAUNA",
      },
      {
        id: "7403183",
        regency_id: "7403",
        name: "ASINUA",
      },
      {
        id: "7403184",
        regency_id: "7403",
        name: "PADANGGUNI",
      },
      {
        id: "7403185",
        regency_id: "7403",
        name: "TONGAUNA UTARA",
      },
      {
        id: "7403193",
        regency_id: "7403",
        name: "ROUTA",
      },
      {
        id: "7404010",
        regency_id: "7404",
        name: "WATUBANGGA",
      },
      {
        id: "7404011",
        regency_id: "7404",
        name: "TANGGETADA",
      },
      {
        id: "7404012",
        regency_id: "7404",
        name: "TOARI",
      },
      {
        id: "7404013",
        regency_id: "7404",
        name: "POLINGGONA",
      },
      {
        id: "7404020",
        regency_id: "7404",
        name: "POMALAA",
      },
      {
        id: "7404030",
        regency_id: "7404",
        name: "WUNDULAKO",
      },
      {
        id: "7404031",
        regency_id: "7404",
        name: "BAULA",
      },
      {
        id: "7404060",
        regency_id: "7404",
        name: "KOLAKA",
      },
      {
        id: "7404061",
        regency_id: "7404",
        name: "LATAMBAGA",
      },
      {
        id: "7404070",
        regency_id: "7404",
        name: "WOLO",
      },
      {
        id: "7404071",
        regency_id: "7404",
        name: "SAMATURU",
      },
      {
        id: "7404072",
        regency_id: "7404",
        name: "IWOIMENDAA",
      },
      {
        id: "7405010",
        regency_id: "7405",
        name: "TINANGGEA",
      },
      {
        id: "7405011",
        regency_id: "7405",
        name: "LALEMBUU",
      },
      {
        id: "7405020",
        regency_id: "7405",
        name: "ANDOOLO",
      },
      {
        id: "7405021",
        regency_id: "7405",
        name: "BUKE",
      },
      {
        id: "7405022",
        regency_id: "7405",
        name: "ANDOOLO BARAT",
      },
      {
        id: "7405030",
        regency_id: "7405",
        name: "PALANGGA",
      },
      {
        id: "7405031",
        regency_id: "7405",
        name: "PALANGGA SELATAN",
      },
      {
        id: "7405032",
        regency_id: "7405",
        name: "BAITO",
      },
      {
        id: "7405040",
        regency_id: "7405",
        name: "LAINEA",
      },
      {
        id: "7405041",
        regency_id: "7405",
        name: "LAEYA",
      },
      {
        id: "7405050",
        regency_id: "7405",
        name: "KOLONO",
      },
      {
        id: "7405051",
        regency_id: "7405",
        name: "KOLONO TIMUR",
      },
      {
        id: "7405060",
        regency_id: "7405",
        name: "LAONTI",
      },
      {
        id: "7405070",
        regency_id: "7405",
        name: "MORAMO",
      },
      {
        id: "7405071",
        regency_id: "7405",
        name: "MORAMO UTARA",
      },
      {
        id: "7405080",
        regency_id: "7405",
        name: "KONDA",
      },
      {
        id: "7405081",
        regency_id: "7405",
        name: "WOLASI",
      },
      {
        id: "7405090",
        regency_id: "7405",
        name: "RANOMEETO",
      },
      {
        id: "7405091",
        regency_id: "7405",
        name: "RANOMEETO BARAT",
      },
      {
        id: "7405100",
        regency_id: "7405",
        name: "LANDONO",
      },
      {
        id: "7405101",
        regency_id: "7405",
        name: "MOWILA",
      },
      {
        id: "7405102",
        regency_id: "7405",
        name: "SABULAKOA",
      },
      {
        id: "7405110",
        regency_id: "7405",
        name: "ANGATA",
      },
      {
        id: "7405111",
        regency_id: "7405",
        name: "BENUA",
      },
      {
        id: "7405112",
        regency_id: "7405",
        name: "BASALA",
      },
      {
        id: "7406010",
        regency_id: "7406",
        name: "KABAENA",
      },
      {
        id: "7406011",
        regency_id: "7406",
        name: "KABAENA UTARA",
      },
      {
        id: "7406012",
        regency_id: "7406",
        name: "KABAENA SELATAN",
      },
      {
        id: "7406013",
        regency_id: "7406",
        name: "KABAENA BARAT",
      },
      {
        id: "7406020",
        regency_id: "7406",
        name: "KABAENA TIMUR",
      },
      {
        id: "7406021",
        regency_id: "7406",
        name: "KABAENA TENGAH",
      },
      {
        id: "7406030",
        regency_id: "7406",
        name: "RUMBIA",
      },
      {
        id: "7406031",
        regency_id: "7406",
        name: "MATA OLEO",
      },
      {
        id: "7406032",
        regency_id: "7406",
        name: "KEP. MASALOKA RAYA",
      },
      {
        id: "7406033",
        regency_id: "7406",
        name: "RUMBIA TENGAH",
      },
      {
        id: "7406040",
        regency_id: "7406",
        name: "RAROWATU",
      },
      {
        id: "7406041",
        regency_id: "7406",
        name: "RAROWATU UTARA",
      },
      {
        id: "7406042",
        regency_id: "7406",
        name: "MATA USU",
      },
      {
        id: "7406043",
        regency_id: "7406",
        name: "LANTARI JAYA",
      },
      {
        id: "7406050",
        regency_id: "7406",
        name: "POLEANG TIMUR",
      },
      {
        id: "7406051",
        regency_id: "7406",
        name: "POLEANG UTARA",
      },
      {
        id: "7406052",
        regency_id: "7406",
        name: "POLEANG SELATAN",
      },
      {
        id: "7406053",
        regency_id: "7406",
        name: "POLEANG TENGGARA",
      },
      {
        id: "7406060",
        regency_id: "7406",
        name: "POLEANG",
      },
      {
        id: "7406061",
        regency_id: "7406",
        name: "POLEANG BARAT",
      },
      {
        id: "7406062",
        regency_id: "7406",
        name: "TONTONUNU",
      },
      {
        id: "7406063",
        regency_id: "7406",
        name: "POLEANG TENGAH",
      },
      {
        id: "7407010",
        regency_id: "7407",
        name: "BINONGKO",
      },
      {
        id: "7407011",
        regency_id: "7407",
        name: "TOGO BINONGKO",
      },
      {
        id: "7407020",
        regency_id: "7407",
        name: "TOMIA",
      },
      {
        id: "7407021",
        regency_id: "7407",
        name: "TOMIA TIMUR",
      },
      {
        id: "7407030",
        regency_id: "7407",
        name: "KALEDUPA",
      },
      {
        id: "7407031",
        regency_id: "7407",
        name: "KALEDUPA SELATAN",
      },
      {
        id: "7407040",
        regency_id: "7407",
        name: "WANGI-WANGI",
      },
      {
        id: "7407050",
        regency_id: "7407",
        name: "WANGI-WANGI SELATAN",
      },
      {
        id: "7408010",
        regency_id: "7408",
        name: "RANTEANGIN",
      },
      {
        id: "7408011",
        regency_id: "7408",
        name: "LAMBAI",
      },
      {
        id: "7408012",
        regency_id: "7408",
        name: "WAWO",
      },
      {
        id: "7408020",
        regency_id: "7408",
        name: "LASUSUA",
      },
      {
        id: "7408021",
        regency_id: "7408",
        name: "KATOI",
      },
      {
        id: "7408030",
        regency_id: "7408",
        name: "KODEOHA",
      },
      {
        id: "7408031",
        regency_id: "7408",
        name: "TIWU",
      },
      {
        id: "7408040",
        regency_id: "7408",
        name: "NGAPA",
      },
      {
        id: "7408041",
        regency_id: "7408",
        name: "WATUNOHU",
      },
      {
        id: "7408050",
        regency_id: "7408",
        name: "PAKUE",
      },
      {
        id: "7408051",
        regency_id: "7408",
        name: "PAKUE UTARA",
      },
      {
        id: "7408052",
        regency_id: "7408",
        name: "PAKUE TENGAH",
      },
      {
        id: "7408060",
        regency_id: "7408",
        name: "BATU PUTIH",
      },
      {
        id: "7408061",
        regency_id: "7408",
        name: "POREHU",
      },
      {
        id: "7408062",
        regency_id: "7408",
        name: "TOLALA",
      },
      {
        id: "7409100",
        regency_id: "7409",
        name: "BONEGUNU",
      },
      {
        id: "7409101",
        regency_id: "7409",
        name: "KAMBOWA",
      },
      {
        id: "7409110",
        regency_id: "7409",
        name: "WAKORUMBA",
      },
      {
        id: "7409120",
        regency_id: "7409",
        name: "KULISUSU",
      },
      {
        id: "7409121",
        regency_id: "7409",
        name: "KULISUSU BARAT",
      },
      {
        id: "7409122",
        regency_id: "7409",
        name: "KULISUSU UTARA",
      },
      {
        id: "7410010",
        regency_id: "7410",
        name: "SAWA",
      },
      {
        id: "7410011",
        regency_id: "7410",
        name: "MOTUI",
      },
      {
        id: "7410020",
        regency_id: "7410",
        name: "LEMBO",
      },
      {
        id: "7410030",
        regency_id: "7410",
        name: "LASOLO",
      },
      {
        id: "7410031",
        regency_id: "7410",
        name: "WAWOLESEA",
      },
      {
        id: "7410032",
        regency_id: "7410",
        name: "LASOLO KEPULAUAN",
      },
      {
        id: "7410040",
        regency_id: "7410",
        name: "MOLAWE",
      },
      {
        id: "7410050",
        regency_id: "7410",
        name: "ASERA",
      },
      {
        id: "7410051",
        regency_id: "7410",
        name: "ANDOWIA",
      },
      {
        id: "7410052",
        regency_id: "7410",
        name: "OHEO",
      },
      {
        id: "7410060",
        regency_id: "7410",
        name: "LANGGIKIMA",
      },
      {
        id: "7410070",
        regency_id: "7410",
        name: "WIWIRANO",
      },
      {
        id: "7410071",
        regency_id: "7410",
        name: "LANDAWE",
      },
      {
        id: "7411010",
        regency_id: "7411",
        name: "AERE",
      },
      {
        id: "7411020",
        regency_id: "7411",
        name: "LAMBANDIA",
      },
      {
        id: "7411030",
        regency_id: "7411",
        name: "POLI-POLIA",
      },
      {
        id: "7411040",
        regency_id: "7411",
        name: "DANGIA",
      },
      {
        id: "7411050",
        regency_id: "7411",
        name: "LADONGI",
      },
      {
        id: "7411060",
        regency_id: "7411",
        name: "LOEA",
      },
      {
        id: "7411070",
        regency_id: "7411",
        name: "TIRAWUTA",
      },
      {
        id: "7411080",
        regency_id: "7411",
        name: "LALOLAE",
      },
      {
        id: "7411090",
        regency_id: "7411",
        name: "MOWEWE",
      },
      {
        id: "7411100",
        regency_id: "7411",
        name: "TINONDO",
      },
      {
        id: "7411110",
        regency_id: "7411",
        name: "ULUIWOI",
      },
      {
        id: "7411120",
        regency_id: "7411",
        name: "UEESI",
      },
      {
        id: "7412010",
        regency_id: "7412",
        name: "WAWONII TENGGARA",
      },
      {
        id: "7412020",
        regency_id: "7412",
        name: "WAWONII TIMUR",
      },
      {
        id: "7412030",
        regency_id: "7412",
        name: "WAWONII TIMUR LAUT",
      },
      {
        id: "7412040",
        regency_id: "7412",
        name: "WAWONII UTARA",
      },
      {
        id: "7412050",
        regency_id: "7412",
        name: "WAWONII SELATAN",
      },
      {
        id: "7412060",
        regency_id: "7412",
        name: "WAWONII TENGAH",
      },
      {
        id: "7412070",
        regency_id: "7412",
        name: "WAWONII BARAT",
      },
      {
        id: "7413010",
        regency_id: "7413",
        name: "TIWORO KEPULAUAN",
      },
      {
        id: "7413020",
        regency_id: "7413",
        name: "MAGINTI",
      },
      {
        id: "7413030",
        regency_id: "7413",
        name: "TIWORO TENGAH",
      },
      {
        id: "7413040",
        regency_id: "7413",
        name: "TIWORO SELATAN",
      },
      {
        id: "7413050",
        regency_id: "7413",
        name: "TIWORO UTARA",
      },
      {
        id: "7413060",
        regency_id: "7413",
        name: "LAWA",
      },
      {
        id: "7413070",
        regency_id: "7413",
        name: "SAWERIGADI",
      },
      {
        id: "7413080",
        regency_id: "7413",
        name: "BARANGKA",
      },
      {
        id: "7413090",
        regency_id: "7413",
        name: "WA DAGA",
      },
      {
        id: "7413100",
        regency_id: "7413",
        name: "KUSAMBI",
      },
      {
        id: "7413110",
        regency_id: "7413",
        name: "NAPANO KUSAMBI",
      },
      {
        id: "7414010",
        regency_id: "7414",
        name: "TALAGA RAYA",
      },
      {
        id: "7414020",
        regency_id: "7414",
        name: "MAWASANGKA",
      },
      {
        id: "7414030",
        regency_id: "7414",
        name: "MAWASANGKA TENGAH",
      },
      {
        id: "7414040",
        regency_id: "7414",
        name: "MAWASANGKA TIMUR",
      },
      {
        id: "7414050",
        regency_id: "7414",
        name: "LAKUDO",
      },
      {
        id: "7414060",
        regency_id: "7414",
        name: "GU",
      },
      {
        id: "7414070",
        regency_id: "7414",
        name: "SANGIA WAMBULU",
      },
      {
        id: "7415010",
        regency_id: "7415",
        name: "BATU ATAS",
      },
      {
        id: "7415020",
        regency_id: "7415",
        name: "LAPANDEWA",
      },
      {
        id: "7415030",
        regency_id: "7415",
        name: "SAMPOLAWA",
      },
      {
        id: "7415040",
        regency_id: "7415",
        name: "BATAUGA",
      },
      {
        id: "7415050",
        regency_id: "7415",
        name: "SIOMPU BARAT",
      },
      {
        id: "7415060",
        regency_id: "7415",
        name: "SIOMPU",
      },
      {
        id: "7415070",
        regency_id: "7415",
        name: "KADATUA",
      },
      {
        id: "7471010",
        regency_id: "7471",
        name: "MANDONGA",
      },
      {
        id: "7471011",
        regency_id: "7471",
        name: "BARUGA",
      },
      {
        id: "7471012",
        regency_id: "7471",
        name: "PUUWATU",
      },
      {
        id: "7471013",
        regency_id: "7471",
        name: "KADIA",
      },
      {
        id: "7471014",
        regency_id: "7471",
        name: "WUA-WUA",
      },
      {
        id: "7471020",
        regency_id: "7471",
        name: "POASIA",
      },
      {
        id: "7471021",
        regency_id: "7471",
        name: "ABELI",
      },
      {
        id: "7471022",
        regency_id: "7471",
        name: "KAMBU",
      },
      {
        id: "7471023",
        regency_id: "7471",
        name: "NAMBO",
      },
      {
        id: "7471030",
        regency_id: "7471",
        name: "KENDARI",
      },
      {
        id: "7471031",
        regency_id: "7471",
        name: "KENDARI BARAT",
      },
      {
        id: "7472010",
        regency_id: "7472",
        name: "BETOAMBARI",
      },
      {
        id: "7472011",
        regency_id: "7472",
        name: "MURHUM",
      },
      {
        id: "7472012",
        regency_id: "7472",
        name: "BATUPOARO",
      },
      {
        id: "7472020",
        regency_id: "7472",
        name: "WOLIO",
      },
      {
        id: "7472021",
        regency_id: "7472",
        name: "KOKALUKUNA",
      },
      {
        id: "7472030",
        regency_id: "7472",
        name: "SORAWOLIO",
      },
      {
        id: "7472040",
        regency_id: "7472",
        name: "BUNGI",
      },
      {
        id: "7472041",
        regency_id: "7472",
        name: "LEA-LEA",
      },
      {
        id: "7501031",
        regency_id: "7501",
        name: "MANANGGU",
      },
      {
        id: "7501040",
        regency_id: "7501",
        name: "TILAMUTA",
      },
      {
        id: "7501041",
        regency_id: "7501",
        name: "DULUPI",
      },
      {
        id: "7501042",
        regency_id: "7501",
        name: "BOTUMOITO",
      },
      {
        id: "7501050",
        regency_id: "7501",
        name: "PAGUYAMAN",
      },
      {
        id: "7501051",
        regency_id: "7501",
        name: "WONOSARI",
      },
      {
        id: "7501052",
        regency_id: "7501",
        name: "PAGUYAMAN PANTAI",
      },
      {
        id: "7502010",
        regency_id: "7502",
        name: "BATUDAA PANTAI",
      },
      {
        id: "7502011",
        regency_id: "7502",
        name: "BILUHU",
      },
      {
        id: "7502020",
        regency_id: "7502",
        name: "BATUDAA",
      },
      {
        id: "7502021",
        regency_id: "7502",
        name: "BONGOMEME",
      },
      {
        id: "7502022",
        regency_id: "7502",
        name: "TABONGO",
      },
      {
        id: "7502023",
        regency_id: "7502",
        name: "DUNGALIYO",
      },
      {
        id: "7502030",
        regency_id: "7502",
        name: "TIBAWA",
      },
      {
        id: "7502031",
        regency_id: "7502",
        name: "PULUBALA",
      },
      {
        id: "7502040",
        regency_id: "7502",
        name: "BOLIYOHUTO",
      },
      {
        id: "7502041",
        regency_id: "7502",
        name: "MOOTILANGO",
      },
      {
        id: "7502042",
        regency_id: "7502",
        name: "TOLANGOHULA",
      },
      {
        id: "7502043",
        regency_id: "7502",
        name: "ASPARAGA",
      },
      {
        id: "7502044",
        regency_id: "7502",
        name: "BILATO",
      },
      {
        id: "7502070",
        regency_id: "7502",
        name: "LIMBOTO",
      },
      {
        id: "7502071",
        regency_id: "7502",
        name: "LIMBOTO BARAT",
      },
      {
        id: "7502080",
        regency_id: "7502",
        name: "TELAGA",
      },
      {
        id: "7502081",
        regency_id: "7502",
        name: "TELAGA BIRU",
      },
      {
        id: "7502082",
        regency_id: "7502",
        name: "TILANGO",
      },
      {
        id: "7502083",
        regency_id: "7502",
        name: "TELAGA JAYA",
      },
      {
        id: "7503010",
        regency_id: "7503",
        name: "POPAYATO",
      },
      {
        id: "7503011",
        regency_id: "7503",
        name: "POPAYATO BARAT",
      },
      {
        id: "7503012",
        regency_id: "7503",
        name: "POPAYATO TIMUR",
      },
      {
        id: "7503020",
        regency_id: "7503",
        name: "LEMITO",
      },
      {
        id: "7503021",
        regency_id: "7503",
        name: "WANGGARASI",
      },
      {
        id: "7503030",
        regency_id: "7503",
        name: "MARISA",
      },
      {
        id: "7503031",
        regency_id: "7503",
        name: "PATILANGGIO",
      },
      {
        id: "7503032",
        regency_id: "7503",
        name: "BUNTULIA",
      },
      {
        id: "7503033",
        regency_id: "7503",
        name: "DUHIADAA",
      },
      {
        id: "7503040",
        regency_id: "7503",
        name: "RANDANGAN",
      },
      {
        id: "7503041",
        regency_id: "7503",
        name: "TALUDITI",
      },
      {
        id: "7503050",
        regency_id: "7503",
        name: "PAGUAT",
      },
      {
        id: "7503051",
        regency_id: "7503",
        name: "DENGILO",
      },
      {
        id: "7504010",
        regency_id: "7504",
        name: "TAPA",
      },
      {
        id: "7504011",
        regency_id: "7504",
        name: "BULANGO UTARA",
      },
      {
        id: "7504012",
        regency_id: "7504",
        name: "BULANGO SELATAN",
      },
      {
        id: "7504013",
        regency_id: "7504",
        name: "BULANGO TIMUR",
      },
      {
        id: "7504014",
        regency_id: "7504",
        name: "BULANGO ULU",
      },
      {
        id: "7504020",
        regency_id: "7504",
        name: "KABILA",
      },
      {
        id: "7504021",
        regency_id: "7504",
        name: "BOTU PINGGE",
      },
      {
        id: "7504022",
        regency_id: "7504",
        name: "TILONGKABILA",
      },
      {
        id: "7504030",
        regency_id: "7504",
        name: "SUWAWA",
      },
      {
        id: "7504031",
        regency_id: "7504",
        name: "SUWAWA SELATAN",
      },
      {
        id: "7504032",
        regency_id: "7504",
        name: "SUWAWA TIMUR",
      },
      {
        id: "7504033",
        regency_id: "7504",
        name: "SUWAWA TENGAH",
      },
      {
        id: "7504034",
        regency_id: "7504",
        name: "PINOGU",
      },
      {
        id: "7504040",
        regency_id: "7504",
        name: "BONEPANTAI",
      },
      {
        id: "7504041",
        regency_id: "7504",
        name: "KABILA BONE",
      },
      {
        id: "7504042",
        regency_id: "7504",
        name: "BONE RAYA",
      },
      {
        id: "7504043",
        regency_id: "7504",
        name: "BONE",
      },
      {
        id: "7504044",
        regency_id: "7504",
        name: "BULAWA",
      },
      {
        id: "7505010",
        regency_id: "7505",
        name: "ATINGGOLA",
      },
      {
        id: "7505011",
        regency_id: "7505",
        name: "GENTUMA RAYA",
      },
      {
        id: "7505020",
        regency_id: "7505",
        name: "KWANDANG",
      },
      {
        id: "7505021",
        regency_id: "7505",
        name: "TOMILITO",
      },
      {
        id: "7505022",
        regency_id: "7505",
        name: "PONELO KEPULAUAN",
      },
      {
        id: "7505030",
        regency_id: "7505",
        name: "ANGGREK",
      },
      {
        id: "7505031",
        regency_id: "7505",
        name: "MONANO",
      },
      {
        id: "7505040",
        regency_id: "7505",
        name: "SUMALATA",
      },
      {
        id: "7505041",
        regency_id: "7505",
        name: "SUMALATA TIMUR",
      },
      {
        id: "7505050",
        regency_id: "7505",
        name: "TOLINGGULA",
      },
      {
        id: "7505051",
        regency_id: "7505",
        name: "BIAU",
      },
      {
        id: "7571010",
        regency_id: "7571",
        name: "KOTA BARAT",
      },
      {
        id: "7571011",
        regency_id: "7571",
        name: "DUNGINGI",
      },
      {
        id: "7571020",
        regency_id: "7571",
        name: "KOTA SELATAN",
      },
      {
        id: "7571021",
        regency_id: "7571",
        name: "KOTA TIMUR",
      },
      {
        id: "7571022",
        regency_id: "7571",
        name: "HULONTHALANGI",
      },
      {
        id: "7571023",
        regency_id: "7571",
        name: "DUMBO RAYA",
      },
      {
        id: "7571030",
        regency_id: "7571",
        name: "KOTA UTARA",
      },
      {
        id: "7571031",
        regency_id: "7571",
        name: "KOTA TENGAH",
      },
      {
        id: "7571032",
        regency_id: "7571",
        name: "SIPATANA",
      },
      {
        id: "7601010",
        regency_id: "7601",
        name: "BANGGAE",
      },
      {
        id: "7601011",
        regency_id: "7601",
        name: "BANGGAE TIMUR",
      },
      {
        id: "7601020",
        regency_id: "7601",
        name: "PAMBOANG",
      },
      {
        id: "7601030",
        regency_id: "7601",
        name: "SENDANA",
      },
      {
        id: "7601031",
        regency_id: "7601",
        name: "TAMMERODO",
      },
      {
        id: "7601033",
        regency_id: "7601",
        name: "TUBO SENDANA",
      },
      {
        id: "7601040",
        regency_id: "7601",
        name: "MALUNDA",
      },
      {
        id: "7601041",
        regency_id: "7601",
        name: "ULUMANDA",
      },
      {
        id: "7602010",
        regency_id: "7602",
        name: "TINAMBUNG",
      },
      {
        id: "7602011",
        regency_id: "7602",
        name: "BALANIPA",
      },
      {
        id: "7602012",
        regency_id: "7602",
        name: "LIMBORO",
      },
      {
        id: "7602020",
        regency_id: "7602",
        name: "TUBBI TARAMANU",
      },
      {
        id: "7602021",
        regency_id: "7602",
        name: "ALU",
      },
      {
        id: "7602030",
        regency_id: "7602",
        name: "CAMPALAGIAN",
      },
      {
        id: "7602031",
        regency_id: "7602",
        name: "LUYO",
      },
      {
        id: "7602040",
        regency_id: "7602",
        name: "WONOMULYO",
      },
      {
        id: "7602041",
        regency_id: "7602",
        name: "MAPILLI",
      },
      {
        id: "7602042",
        regency_id: "7602",
        name: "TAPANGO",
      },
      {
        id: "7602043",
        regency_id: "7602",
        name: "MATAKALI",
      },
      {
        id: "7602044",
        regency_id: "7602",
        name: "B U L O",
      },
      {
        id: "7602050",
        regency_id: "7602",
        name: "POLEWALI",
      },
      {
        id: "7602051",
        regency_id: "7602",
        name: "BINUANG",
      },
      {
        id: "7602052",
        regency_id: "7602",
        name: "ANREAPI",
      },
      {
        id: "7602061",
        regency_id: "7602",
        name: "MATANGNGA",
      },
      {
        id: "7603010",
        regency_id: "7603",
        name: "SUMARORONG",
      },
      {
        id: "7603020",
        regency_id: "7603",
        name: "MESSAWA",
      },
      {
        id: "7603030",
        regency_id: "7603",
        name: "PANA",
      },
      {
        id: "7603031",
        regency_id: "7603",
        name: "NOSU",
      },
      {
        id: "7603040",
        regency_id: "7603",
        name: "TABANG",
      },
      {
        id: "7603050",
        regency_id: "7603",
        name: "MAMASA",
      },
      {
        id: "7603060",
        regency_id: "7603",
        name: "TANDUK KALUA",
      },
      {
        id: "7603061",
        regency_id: "7603",
        name: "BALLA",
      },
      {
        id: "7603070",
        regency_id: "7603",
        name: "SESENAPADANG",
      },
      {
        id: "7603071",
        regency_id: "7603",
        name: "TAWALIAN",
      },
      {
        id: "7603080",
        regency_id: "7603",
        name: "MAMBI",
      },
      {
        id: "7603081",
        regency_id: "7603",
        name: "BAMBANG",
      },
      {
        id: "7603082",
        regency_id: "7603",
        name: "RANTEBULAHAN TIMUR",
      },
      {
        id: "7603083",
        regency_id: "7603",
        name: "MEHALAAN",
      },
      {
        id: "7603090",
        regency_id: "7603",
        name: "ARALLE",
      },
      {
        id: "7603091",
        regency_id: "7603",
        name: "BUNTU MALANGKA",
      },
      {
        id: "7603100",
        regency_id: "7603",
        name: "TABULAHAN",
      },
      {
        id: "7604010",
        regency_id: "7604",
        name: "TAPALANG",
      },
      {
        id: "7604011",
        regency_id: "7604",
        name: "TAPALANG BARAT",
      },
      {
        id: "7604020",
        regency_id: "7604",
        name: "MAMUJU",
      },
      {
        id: "7604022",
        regency_id: "7604",
        name: "SIMBORO",
      },
      {
        id: "7604023",
        regency_id: "7604",
        name: "BALABALAKANG",
      },
      {
        id: "7604030",
        regency_id: "7604",
        name: "KALUKKU",
      },
      {
        id: "7604031",
        regency_id: "7604",
        name: "PAPALANG",
      },
      {
        id: "7604032",
        regency_id: "7604",
        name: "SAMPAGA",
      },
      {
        id: "7604033",
        regency_id: "7604",
        name: "TOMMO",
      },
      {
        id: "7604040",
        regency_id: "7604",
        name: "KALUMPANG",
      },
      {
        id: "7604041",
        regency_id: "7604",
        name: "BONEHAU",
      },
      {
        id: "7605010",
        regency_id: "7605",
        name: "SARUDU",
      },
      {
        id: "7605011",
        regency_id: "7605",
        name: "DAPURANG",
      },
      {
        id: "7605012",
        regency_id: "7605",
        name: "DURIPOKU",
      },
      {
        id: "7605020",
        regency_id: "7605",
        name: "BARAS",
      },
      {
        id: "7605021",
        regency_id: "7605",
        name: "BULU TABA",
      },
      {
        id: "7605022",
        regency_id: "7605",
        name: "LARIANG",
      },
      {
        id: "7605030",
        regency_id: "7605",
        name: "PASANGKAYU",
      },
      {
        id: "7605031",
        regency_id: "7605",
        name: "TIKKE RAYA",
      },
      {
        id: "7605032",
        regency_id: "7605",
        name: "PEDONGGA",
      },
      {
        id: "7605040",
        regency_id: "7605",
        name: "BAMBALAMOTU",
      },
      {
        id: "7605041",
        regency_id: "7605",
        name: "BAMBAIRA",
      },
      {
        id: "7605042",
        regency_id: "7605",
        name: "SARJO",
      },
      {
        id: "7606010",
        regency_id: "7606",
        name: "PANGALE",
      },
      {
        id: "7606020",
        regency_id: "7606",
        name: "BUDONG-BUDONG",
      },
      {
        id: "7606030",
        regency_id: "7606",
        name: "TOBADAK",
      },
      {
        id: "7606040",
        regency_id: "7606",
        name: "TOPOYO",
      },
      {
        id: "7606050",
        regency_id: "7606",
        name: "KAROSSA",
      },
      {
        id: "8101040",
        regency_id: "8101",
        name: "TANIMBAR SELATAN",
      },
      {
        id: "8101041",
        regency_id: "8101",
        name: "WER TAMRIAN",
      },
      {
        id: "8101042",
        regency_id: "8101",
        name: "WER MAKTIAN",
      },
      {
        id: "8101043",
        regency_id: "8101",
        name: "SELARU",
      },
      {
        id: "8101050",
        regency_id: "8101",
        name: "TANIMBAR UTARA",
      },
      {
        id: "8101051",
        regency_id: "8101",
        name: "YARU",
      },
      {
        id: "8101052",
        regency_id: "8101",
        name: "WUAR LABOBAR",
      },
      {
        id: "8101053",
        regency_id: "8101",
        name: "NIRUNMAS",
      },
      {
        id: "8101054",
        regency_id: "8101",
        name: "KORMOMOLIN",
      },
      {
        id: "8101055",
        regency_id: "8101",
        name: "MOLU MARU",
      },
      {
        id: "8102010",
        regency_id: "8102",
        name: "KEI KECIL",
      },
      {
        id: "8102012",
        regency_id: "8102",
        name: "KEI KECIL BARAT",
      },
      {
        id: "8102013",
        regency_id: "8102",
        name: "KEI KECIL TIMUR",
      },
      {
        id: "8102014",
        regency_id: "8102",
        name: "HOAT SORBAY",
      },
      {
        id: "8102015",
        regency_id: "8102",
        name: "MANYEUW",
      },
      {
        id: "8102016",
        regency_id: "8102",
        name: "KEI KECIL TIMUR SELATAN",
      },
      {
        id: "8102020",
        regency_id: "8102",
        name: "KEI BESAR",
      },
      {
        id: "8102021",
        regency_id: "8102",
        name: "KEI BESAR UTARA TIMUR",
      },
      {
        id: "8102022",
        regency_id: "8102",
        name: "KEI BESAR SELATAN",
      },
      {
        id: "8102023",
        regency_id: "8102",
        name: "KEI BESAR UTARA BARAT",
      },
      {
        id: "8102024",
        regency_id: "8102",
        name: "KEI BESAR SELATAN BARAT",
      },
      {
        id: "8103010",
        regency_id: "8103",
        name: "BANDA",
      },
      {
        id: "8103040",
        regency_id: "8103",
        name: "TEHORU",
      },
      {
        id: "8103041",
        regency_id: "8103",
        name: "TELUTIH",
      },
      {
        id: "8103050",
        regency_id: "8103",
        name: "AMAHAI",
      },
      {
        id: "8103051",
        regency_id: "8103",
        name: "KOTA MASOHI",
      },
      {
        id: "8103052",
        regency_id: "8103",
        name: "TELUK ELPAPUTIH",
      },
      {
        id: "8103060",
        regency_id: "8103",
        name: "TEON NILA SERUA",
      },
      {
        id: "8103080",
        regency_id: "8103",
        name: "SAPARUA",
      },
      {
        id: "8103081",
        regency_id: "8103",
        name: "NUSALAUT",
      },
      {
        id: "8103082",
        regency_id: "8103",
        name: "SAPARUA TIMUR",
      },
      {
        id: "8103090",
        regency_id: "8103",
        name: "P. HARUKU",
      },
      {
        id: "8103100",
        regency_id: "8103",
        name: "SALAHUTU",
      },
      {
        id: "8103110",
        regency_id: "8103",
        name: "LEIHITU",
      },
      {
        id: "8103111",
        regency_id: "8103",
        name: "LEIHITU BARAT",
      },
      {
        id: "8103140",
        regency_id: "8103",
        name: "SERAM UTARA",
      },
      {
        id: "8103141",
        regency_id: "8103",
        name: "SERAM UTARA BARAT",
      },
      {
        id: "8103142",
        regency_id: "8103",
        name: "SERAM UTARA TIMUR KOBI",
      },
      {
        id: "8103143",
        regency_id: "8103",
        name: "SERAM UTARA TIMUR SETI",
      },
      {
        id: "8104020",
        regency_id: "8104",
        name: "NAMLEA",
      },
      {
        id: "8104021",
        regency_id: "8104",
        name: "WAEAPO",
      },
      {
        id: "8104022",
        regency_id: "8104",
        name: "WAPLAU",
      },
      {
        id: "8104023",
        regency_id: "8104",
        name: "BATA BUAL",
      },
      {
        id: "8104024",
        regency_id: "8104",
        name: "TELUK KAIELY",
      },
      {
        id: "8104025",
        regency_id: "8104",
        name: "WAELATA",
      },
      {
        id: "8104026",
        regency_id: "8104",
        name: "LOLONG GUBA",
      },
      {
        id: "8104027",
        regency_id: "8104",
        name: "LILIALY",
      },
      {
        id: "8104030",
        regency_id: "8104",
        name: "AIR BUAYA",
      },
      {
        id: "8104031",
        regency_id: "8104",
        name: "FENA LEISELA",
      },
      {
        id: "8105010",
        regency_id: "8105",
        name: "ARU SELATAN",
      },
      {
        id: "8105011",
        regency_id: "8105",
        name: "ARU SELATAN TIMUR",
      },
      {
        id: "8105012",
        regency_id: "8105",
        name: "ARU SELATAN UTARA",
      },
      {
        id: "8105020",
        regency_id: "8105",
        name: "ARU TENGAH",
      },
      {
        id: "8105021",
        regency_id: "8105",
        name: "ARU TENGAH TIMUR",
      },
      {
        id: "8105022",
        regency_id: "8105",
        name: "ARU TENGAH SELATAN",
      },
      {
        id: "8105030",
        regency_id: "8105",
        name: "PULAU-PULAU ARU",
      },
      {
        id: "8105031",
        regency_id: "8105",
        name: "ARU UTARA",
      },
      {
        id: "8105032",
        regency_id: "8105",
        name: "ARU UTARA TIMUR BATULEY",
      },
      {
        id: "8105033",
        regency_id: "8105",
        name: "SIR-SIR",
      },
      {
        id: "8106010",
        regency_id: "8106",
        name: "HUAMUAL BELAKANG",
      },
      {
        id: "8106011",
        regency_id: "8106",
        name: "KEPULAUAN MANIPA",
      },
      {
        id: "8106020",
        regency_id: "8106",
        name: "SERAM BARAT",
      },
      {
        id: "8106021",
        regency_id: "8106",
        name: "HUAMUAL",
      },
      {
        id: "8106030",
        regency_id: "8106",
        name: "KAIRATU",
      },
      {
        id: "8106031",
        regency_id: "8106",
        name: "KAIRATU BARAT",
      },
      {
        id: "8106032",
        regency_id: "8106",
        name: "INAMOSOL",
      },
      {
        id: "8106033",
        regency_id: "8106",
        name: "AMALATU",
      },
      {
        id: "8106034",
        regency_id: "8106",
        name: "ELPAPUTIH",
      },
      {
        id: "8106040",
        regency_id: "8106",
        name: "TANIWEL",
      },
      {
        id: "8106041",
        regency_id: "8106",
        name: "TANIWEL TIMUR",
      },
      {
        id: "8107010",
        regency_id: "8107",
        name: "PULAU GOROM",
      },
      {
        id: "8107011",
        regency_id: "8107",
        name: "WAKATE",
      },
      {
        id: "8107012",
        regency_id: "8107",
        name: "TEOR",
      },
      {
        id: "8107013",
        regency_id: "8107",
        name: "GOROM TIMUR",
      },
      {
        id: "8107014",
        regency_id: "8107",
        name: "PULAU PANJANG",
      },
      {
        id: "8107020",
        regency_id: "8107",
        name: "SERAM TIMUR",
      },
      {
        id: "8107021",
        regency_id: "8107",
        name: "TUTUK TOLU",
      },
      {
        id: "8107022",
        regency_id: "8107",
        name: "KILMURY",
      },
      {
        id: "8107023",
        regency_id: "8107",
        name: "LIAN VITU",
      },
      {
        id: "8107024",
        regency_id: "8107",
        name: "KIAN DARAT",
      },
      {
        id: "8107030",
        regency_id: "8107",
        name: "WERINAMA",
      },
      {
        id: "8107031",
        regency_id: "8107",
        name: "SIWALALAT",
      },
      {
        id: "8107040",
        regency_id: "8107",
        name: "BULA",
      },
      {
        id: "8107041",
        regency_id: "8107",
        name: "BULA BARAT",
      },
      {
        id: "8107042",
        regency_id: "8107",
        name: "TELUK WARU",
      },
      {
        id: "8108010",
        regency_id: "8108",
        name: "WETAR",
      },
      {
        id: "8108011",
        regency_id: "8108",
        name: "WETAR BARAT",
      },
      {
        id: "8108012",
        regency_id: "8108",
        name: "WETAR UTARA",
      },
      {
        id: "8108013",
        regency_id: "8108",
        name: "WETAR TIMUR",
      },
      {
        id: "8108020",
        regency_id: "8108",
        name: "PP. TERSELATAN",
      },
      {
        id: "8108021",
        regency_id: "8108",
        name: "KISAR UTARA",
      },
      {
        id: "8108022",
        regency_id: "8108",
        name: "KEPULAUAN ROMANG",
      },
      {
        id: "8108030",
        regency_id: "8108",
        name: "LETTI",
      },
      {
        id: "8108041",
        regency_id: "8108",
        name: "MOA",
      },
      {
        id: "8108042",
        regency_id: "8108",
        name: "LAKOR",
      },
      {
        id: "8108050",
        regency_id: "8108",
        name: "DAMER",
      },
      {
        id: "8108060",
        regency_id: "8108",
        name: "MDONA HIERA",
      },
      {
        id: "8108070",
        regency_id: "8108",
        name: "PP. BABAR",
      },
      {
        id: "8108071",
        regency_id: "8108",
        name: "PULAU WETANG",
      },
      {
        id: "8108080",
        regency_id: "8108",
        name: "BABAR TIMUR",
      },
      {
        id: "8108081",
        regency_id: "8108",
        name: "PULAU MASELA",
      },
      {
        id: "8108082",
        regency_id: "8108",
        name: "DAWELOR DAWERA",
      },
      {
        id: "8109010",
        regency_id: "8109",
        name: "KEPALA MADAN",
      },
      {
        id: "8109020",
        regency_id: "8109",
        name: "LEKSULA",
      },
      {
        id: "8109021",
        regency_id: "8109",
        name: "FENA FAFAN",
      },
      {
        id: "8109030",
        regency_id: "8109",
        name: "NAMROLE",
      },
      {
        id: "8109040",
        regency_id: "8109",
        name: "WAISAMA",
      },
      {
        id: "8109050",
        regency_id: "8109",
        name: "AMBALAU",
      },
      {
        id: "8171010",
        regency_id: "8171",
        name: "NUSANIWE",
      },
      {
        id: "8171020",
        regency_id: "8171",
        name: "SIRIMAU",
      },
      {
        id: "8171021",
        regency_id: "8171",
        name: "LEITIMUR SELATAN",
      },
      {
        id: "8171030",
        regency_id: "8171",
        name: "TELUK AMBON BAGUALA",
      },
      {
        id: "8171031",
        regency_id: "8171",
        name: "TELUK AMBON",
      },
      {
        id: "8172010",
        regency_id: "8172",
        name: "PP. KUR",
      },
      {
        id: "8172011",
        regency_id: "8172",
        name: "KUR SELATAN",
      },
      {
        id: "8172020",
        regency_id: "8172",
        name: "TAYANDO TAM",
      },
      {
        id: "8172030",
        regency_id: "8172",
        name: "PULAU DULLAH UTARA",
      },
      {
        id: "8172040",
        regency_id: "8172",
        name: "PULAU DULLAH SELATAN",
      },
      {
        id: "8201090",
        regency_id: "8201",
        name: "JAILOLO",
      },
      {
        id: "8201091",
        regency_id: "8201",
        name: "JAILOLO SELATAN",
      },
      {
        id: "8201100",
        regency_id: "8201",
        name: "SAHU",
      },
      {
        id: "8201101",
        regency_id: "8201",
        name: "SAHU TIMUR",
      },
      {
        id: "8201130",
        regency_id: "8201",
        name: "IBU",
      },
      {
        id: "8201131",
        regency_id: "8201",
        name: "IBU SELATAN",
      },
      {
        id: "8201132",
        regency_id: "8201",
        name: "TABARU",
      },
      {
        id: "8201140",
        regency_id: "8201",
        name: "LOLODA",
      },
      {
        id: "8202030",
        regency_id: "8202",
        name: "WEDA",
      },
      {
        id: "8202031",
        regency_id: "8202",
        name: "WEDA SELATAN",
      },
      {
        id: "8202032",
        regency_id: "8202",
        name: "WEDA UTARA",
      },
      {
        id: "8202033",
        regency_id: "8202",
        name: "WEDA TENGAH",
      },
      {
        id: "8202034",
        regency_id: "8202",
        name: "WEDA TIMUR",
      },
      {
        id: "8202041",
        regency_id: "8202",
        name: "PULAU GEBE",
      },
      {
        id: "8202042",
        regency_id: "8202",
        name: "PATANI",
      },
      {
        id: "8202043",
        regency_id: "8202",
        name: "PATANI UTARA",
      },
      {
        id: "8202044",
        regency_id: "8202",
        name: "PATANI BARAT",
      },
      {
        id: "8202045",
        regency_id: "8202",
        name: "PATANI TIMUR",
      },
      {
        id: "8203010",
        regency_id: "8203",
        name: "SULA BESI BARAT",
      },
      {
        id: "8203011",
        regency_id: "8203",
        name: "SULABESI SELATAN",
      },
      {
        id: "8203020",
        regency_id: "8203",
        name: "SANANA",
      },
      {
        id: "8203021",
        regency_id: "8203",
        name: "SULA BESI TENGAH",
      },
      {
        id: "8203022",
        regency_id: "8203",
        name: "SULABESI TIMUR",
      },
      {
        id: "8203023",
        regency_id: "8203",
        name: "SANANA UTARA",
      },
      {
        id: "8203030",
        regency_id: "8203",
        name: "MANGOLI TIMUR",
      },
      {
        id: "8203031",
        regency_id: "8203",
        name: "MANGOLI TENGAH",
      },
      {
        id: "8203032",
        regency_id: "8203",
        name: "MANGOLI UTARA TIMUR",
      },
      {
        id: "8203040",
        regency_id: "8203",
        name: "MANGOLI BARAT",
      },
      {
        id: "8203041",
        regency_id: "8203",
        name: "MANGOLI UTARA",
      },
      {
        id: "8203042",
        regency_id: "8203",
        name: "MANGOLI SELATAN",
      },
      {
        id: "8204010",
        regency_id: "8204",
        name: "OBI SELATAN",
      },
      {
        id: "8204020",
        regency_id: "8204",
        name: "OBI",
      },
      {
        id: "8204021",
        regency_id: "8204",
        name: "OBI BARAT",
      },
      {
        id: "8204022",
        regency_id: "8204",
        name: "OBI TIMUR",
      },
      {
        id: "8204023",
        regency_id: "8204",
        name: "OBI UTARA",
      },
      {
        id: "8204030",
        regency_id: "8204",
        name: "BACAN",
      },
      {
        id: "8204031",
        regency_id: "8204",
        name: "MANDIOLI SELATAN",
      },
      {
        id: "8204032",
        regency_id: "8204",
        name: "MANDIOLI UTARA",
      },
      {
        id: "8204033",
        regency_id: "8204",
        name: "BACAN SELATAN",
      },
      {
        id: "8204034",
        regency_id: "8204",
        name: "BATANG LOMANG",
      },
      {
        id: "8204040",
        regency_id: "8204",
        name: "BACAN TIMUR",
      },
      {
        id: "8204041",
        regency_id: "8204",
        name: "BACAN TIMUR SELATAN",
      },
      {
        id: "8204042",
        regency_id: "8204",
        name: "BACAN TIMUR TENGAH",
      },
      {
        id: "8204050",
        regency_id: "8204",
        name: "BACAN BARAT",
      },
      {
        id: "8204051",
        regency_id: "8204",
        name: "KASIRUTA BARAT",
      },
      {
        id: "8204052",
        regency_id: "8204",
        name: "KASIRUTA TIMUR",
      },
      {
        id: "8204053",
        regency_id: "8204",
        name: "BACAN BARAT UTARA",
      },
      {
        id: "8204060",
        regency_id: "8204",
        name: "KAYOA",
      },
      {
        id: "8204061",
        regency_id: "8204",
        name: "KAYOA BARAT",
      },
      {
        id: "8204062",
        regency_id: "8204",
        name: "KAYOA SELATAN",
      },
      {
        id: "8204063",
        regency_id: "8204",
        name: "KAYOA UTARA",
      },
      {
        id: "8204070",
        regency_id: "8204",
        name: "PULAU MAKIAN",
      },
      {
        id: "8204071",
        regency_id: "8204",
        name: "MAKIAN BARAT",
      },
      {
        id: "8204080",
        regency_id: "8204",
        name: "GANE BARAT",
      },
      {
        id: "8204081",
        regency_id: "8204",
        name: "GANE BARAT SELATAN",
      },
      {
        id: "8204082",
        regency_id: "8204",
        name: "GANE BARAT UTARA",
      },
      {
        id: "8204083",
        regency_id: "8204",
        name: "KEPULAUAN JORONGA",
      },
      {
        id: "8204090",
        regency_id: "8204",
        name: "GANE TIMUR",
      },
      {
        id: "8204091",
        regency_id: "8204",
        name: "GANE TIMUR TENGAH",
      },
      {
        id: "8204092",
        regency_id: "8204",
        name: "GANE TIMUR SELATAN",
      },
      {
        id: "8205010",
        regency_id: "8205",
        name: "MALIFUT",
      },
      {
        id: "8205011",
        regency_id: "8205",
        name: "KAO TELUK",
      },
      {
        id: "8205020",
        regency_id: "8205",
        name: "KAO",
      },
      {
        id: "8205021",
        regency_id: "8205",
        name: "KAO BARAT",
      },
      {
        id: "8205022",
        regency_id: "8205",
        name: "KAO UTARA",
      },
      {
        id: "8205030",
        regency_id: "8205",
        name: "TOBELO SELATAN",
      },
      {
        id: "8205031",
        regency_id: "8205",
        name: "TOBELO BARAT",
      },
      {
        id: "8205032",
        regency_id: "8205",
        name: "TOBELO TIMUR",
      },
      {
        id: "8205040",
        regency_id: "8205",
        name: "TOBELO",
      },
      {
        id: "8205041",
        regency_id: "8205",
        name: "TOBELO TENGAH",
      },
      {
        id: "8205042",
        regency_id: "8205",
        name: "TOBELO UTARA",
      },
      {
        id: "8205050",
        regency_id: "8205",
        name: "GALELA",
      },
      {
        id: "8205051",
        regency_id: "8205",
        name: "GALELA SELATAN",
      },
      {
        id: "8205052",
        regency_id: "8205",
        name: "GALELA BARAT",
      },
      {
        id: "8205053",
        regency_id: "8205",
        name: "GALELA UTARA",
      },
      {
        id: "8205060",
        regency_id: "8205",
        name: "LOLODA UTARA",
      },
      {
        id: "8205061",
        regency_id: "8205",
        name: "LOLODA KEPULAUAN",
      },
      {
        id: "8206010",
        regency_id: "8206",
        name: "MABA SELATAN",
      },
      {
        id: "8206011",
        regency_id: "8206",
        name: "KOTA MABA",
      },
      {
        id: "8206020",
        regency_id: "8206",
        name: "WASILE SELATAN",
      },
      {
        id: "8206030",
        regency_id: "8206",
        name: "WASILE",
      },
      {
        id: "8206031",
        regency_id: "8206",
        name: "WASILE TIMUR",
      },
      {
        id: "8206032",
        regency_id: "8206",
        name: "WASILE TENGAH",
      },
      {
        id: "8206033",
        regency_id: "8206",
        name: "WASILE UTARA",
      },
      {
        id: "8206040",
        regency_id: "8206",
        name: "MABA",
      },
      {
        id: "8206041",
        regency_id: "8206",
        name: "MABA TENGAH",
      },
      {
        id: "8206042",
        regency_id: "8206",
        name: "MABA UTARA",
      },
      {
        id: "8207010",
        regency_id: "8207",
        name: "MOROTAI SELATAN",
      },
      {
        id: "8207020",
        regency_id: "8207",
        name: "MOROTAI TIMUR",
      },
      {
        id: "8207030",
        regency_id: "8207",
        name: "MOROTAI SELATAN BARAT",
      },
      {
        id: "8207040",
        regency_id: "8207",
        name: "MOROTAI JAYA",
      },
      {
        id: "8207050",
        regency_id: "8207",
        name: "MOROTAI UTARA",
      },
      {
        id: "8208010",
        regency_id: "8208",
        name: "TALIABU BARAT",
      },
      {
        id: "8208020",
        regency_id: "8208",
        name: "TALIABU SELATAN",
      },
      {
        id: "8208030",
        regency_id: "8208",
        name: "TABONA",
      },
      {
        id: "8208040",
        regency_id: "8208",
        name: "TALIABU TIMUR SELATAN",
      },
      {
        id: "8208050",
        regency_id: "8208",
        name: "TALIABU TIMUR",
      },
      {
        id: "8208060",
        regency_id: "8208",
        name: "TALIABU UTARA",
      },
      {
        id: "8208070",
        regency_id: "8208",
        name: "LEDE",
      },
      {
        id: "8208080",
        regency_id: "8208",
        name: "TALIABU BARAT LAUT",
      },
      {
        id: "8271010",
        regency_id: "8271",
        name: "PULAU TERNATE",
      },
      {
        id: "8271011",
        regency_id: "8271",
        name: "MOTI",
      },
      {
        id: "8271012",
        regency_id: "8271",
        name: "PULAU BATANG DUA",
      },
      {
        id: "8271013",
        regency_id: "8271",
        name: "PULAU HIRI",
      },
      {
        id: "8271014",
        regency_id: "8271",
        name: "TERNATE BARAT",
      },
      {
        id: "8271020",
        regency_id: "8271",
        name: "TERNATE SELATAN",
      },
      {
        id: "8271021",
        regency_id: "8271",
        name: "TERNATE TENGAH",
      },
      {
        id: "8271030",
        regency_id: "8271",
        name: "TERNATE UTARA",
      },
      {
        id: "8272010",
        regency_id: "8272",
        name: "TIDORE SELATAN",
      },
      {
        id: "8272020",
        regency_id: "8272",
        name: "TIDORE UTARA",
      },
      {
        id: "8272030",
        regency_id: "8272",
        name: "TIDORE",
      },
      {
        id: "8272031",
        regency_id: "8272",
        name: "TIDORE TIMUR",
      },
      {
        id: "8272040",
        regency_id: "8272",
        name: "OBA",
      },
      {
        id: "8272041",
        regency_id: "8272",
        name: "OBA SELATAN",
      },
      {
        id: "8272050",
        regency_id: "8272",
        name: "OBA UTARA",
      },
      {
        id: "8272051",
        regency_id: "8272",
        name: "OBA TENGAH",
      },
      {
        id: "9101050",
        regency_id: "9101",
        name: "FAKFAK TIMUR",
      },
      {
        id: "9101051",
        regency_id: "9101",
        name: "KARAS",
      },
      {
        id: "9101052",
        regency_id: "9101",
        name: "FAKFAK TIMUR TENGAH",
      },
      {
        id: "9101060",
        regency_id: "9101",
        name: "FAKFAK",
      },
      {
        id: "9101061",
        regency_id: "9101",
        name: "FAKFAK TENGAH",
      },
      {
        id: "9101062",
        regency_id: "9101",
        name: "PARIWARI",
      },
      {
        id: "9101070",
        regency_id: "9101",
        name: "FAKFAK BARAT",
      },
      {
        id: "9101071",
        regency_id: "9101",
        name: "WARTUTIN",
      },
      {
        id: "9101080",
        regency_id: "9101",
        name: "KOKAS",
      },
      {
        id: "9101081",
        regency_id: "9101",
        name: "TELUK PATIPI",
      },
      {
        id: "9101082",
        regency_id: "9101",
        name: "KRAMONGMONGGA",
      },
      {
        id: "9101083",
        regency_id: "9101",
        name: "BOMBERAY",
      },
      {
        id: "9101084",
        regency_id: "9101",
        name: "ARGUNI",
      },
      {
        id: "9101085",
        regency_id: "9101",
        name: "MBAHAMDANDARA",
      },
      {
        id: "9101086",
        regency_id: "9101",
        name: "FURWAGI",
      },
      {
        id: "9101087",
        regency_id: "9101",
        name: "KAYAUNI",
      },
      {
        id: "9101088",
        regency_id: "9101",
        name: "TOMAGE",
      },
      {
        id: "9102010",
        regency_id: "9102",
        name: "BURUWAY",
      },
      {
        id: "9102020",
        regency_id: "9102",
        name: "TELUK ARGUNI",
      },
      {
        id: "9102021",
        regency_id: "9102",
        name: "TELUK ARGUNI BAWAH",
      },
      {
        id: "9102030",
        regency_id: "9102",
        name: "KAIMANA",
      },
      {
        id: "9102031",
        regency_id: "9102",
        name: "KAMBRAU",
      },
      {
        id: "9102040",
        regency_id: "9102",
        name: "TELUK ETNA",
      },
      {
        id: "9102041",
        regency_id: "9102",
        name: "YAMOR",
      },
      {
        id: "9103010",
        regency_id: "9103",
        name: "NAIKERE",
      },
      {
        id: "9103020",
        regency_id: "9103",
        name: "WONDIBOY",
      },
      {
        id: "9103021",
        regency_id: "9103",
        name: "RASIEY",
      },
      {
        id: "9103022",
        regency_id: "9103",
        name: "KURI WAMESA",
      },
      {
        id: "9103030",
        regency_id: "9103",
        name: "WASIOR",
      },
      {
        id: "9103040",
        regency_id: "9103",
        name: "DUAIRI",
      },
      {
        id: "9103041",
        regency_id: "9103",
        name: "ROON",
      },
      {
        id: "9103050",
        regency_id: "9103",
        name: "WINDESI",
      },
      {
        id: "9103051",
        regency_id: "9103",
        name: "NIKIWAR",
      },
      {
        id: "9103060",
        regency_id: "9103",
        name: "WAMESA",
      },
      {
        id: "9103061",
        regency_id: "9103",
        name: "ROSWAR",
      },
      {
        id: "9103070",
        regency_id: "9103",
        name: "RUMBERPON",
      },
      {
        id: "9103071",
        regency_id: "9103",
        name: "SOUG JAYA",
      },
      {
        id: "9104010",
        regency_id: "9104",
        name: "FAFURWAR",
      },
      {
        id: "9104020",
        regency_id: "9104",
        name: "BABO",
      },
      {
        id: "9104021",
        regency_id: "9104",
        name: "SUMURI",
      },
      {
        id: "9104022",
        regency_id: "9104",
        name: "AROBA",
      },
      {
        id: "9104023",
        regency_id: "9104",
        name: "KAITARO",
      },
      {
        id: "9104030",
        regency_id: "9104",
        name: "KURI",
      },
      {
        id: "9104040",
        regency_id: "9104",
        name: "WAMESA",
      },
      {
        id: "9104050",
        regency_id: "9104",
        name: "BINTUNI",
      },
      {
        id: "9104051",
        regency_id: "9104",
        name: "MANIMERI",
      },
      {
        id: "9104052",
        regency_id: "9104",
        name: "TUHIBA",
      },
      {
        id: "9104053",
        regency_id: "9104",
        name: "DATARAN BEIMES",
      },
      {
        id: "9104060",
        regency_id: "9104",
        name: "TEMBUNI",
      },
      {
        id: "9104070",
        regency_id: "9104",
        name: "ARANDAY",
      },
      {
        id: "9104071",
        regency_id: "9104",
        name: "KAMUNDAN",
      },
      {
        id: "9104072",
        regency_id: "9104",
        name: "TOMU",
      },
      {
        id: "9104073",
        regency_id: "9104",
        name: "WERIAGAR",
      },
      {
        id: "9104080",
        regency_id: "9104",
        name: "MOSKONA SELATAN",
      },
      {
        id: "9104081",
        regency_id: "9104",
        name: "MEYADO",
      },
      {
        id: "9104082",
        regency_id: "9104",
        name: "MOSKONA BARAT",
      },
      {
        id: "9104090",
        regency_id: "9104",
        name: "MERDEY",
      },
      {
        id: "9104091",
        regency_id: "9104",
        name: "BISCOOP",
      },
      {
        id: "9104092",
        regency_id: "9104",
        name: "MASYETA",
      },
      {
        id: "9104100",
        regency_id: "9104",
        name: "MOSKONA UTARA",
      },
      {
        id: "9104101",
        regency_id: "9104",
        name: "MOSKONA TIMUR",
      },
      {
        id: "9105110",
        regency_id: "9105",
        name: "WARMARE",
      },
      {
        id: "9105120",
        regency_id: "9105",
        name: "PRAFI",
      },
      {
        id: "9105141",
        regency_id: "9105",
        name: "MANOKWARI BARAT",
      },
      {
        id: "9105142",
        regency_id: "9105",
        name: "MANOKWARI TIMUR",
      },
      {
        id: "9105143",
        regency_id: "9105",
        name: "MANOKWARI UTARA",
      },
      {
        id: "9105144",
        regency_id: "9105",
        name: "MANOKWARI SELATAN",
      },
      {
        id: "9105146",
        regency_id: "9105",
        name: "TANAH RUBU",
      },
      {
        id: "9105170",
        regency_id: "9105",
        name: "MASNI",
      },
      {
        id: "9105171",
        regency_id: "9105",
        name: "SIDEY",
      },
      {
        id: "9106010",
        regency_id: "9106",
        name: "INANWATAN",
      },
      {
        id: "9106011",
        regency_id: "9106",
        name: "METEMANI",
      },
      {
        id: "9106020",
        regency_id: "9106",
        name: "KOKODA",
      },
      {
        id: "9106021",
        regency_id: "9106",
        name: "KAIS",
      },
      {
        id: "9106022",
        regency_id: "9106",
        name: "KOKODA UTARA",
      },
      {
        id: "9106023",
        regency_id: "9106",
        name: "KAIS DARAT",
      },
      {
        id: "9106060",
        regency_id: "9106",
        name: "MOSWAREN",
      },
      {
        id: "9106070",
        regency_id: "9106",
        name: "TEMINABUAN",
      },
      {
        id: "9106071",
        regency_id: "9106",
        name: "SEREMUK",
      },
      {
        id: "9106072",
        regency_id: "9106",
        name: "WAYER",
      },
      {
        id: "9106073",
        regency_id: "9106",
        name: "KONDA",
      },
      {
        id: "9106074",
        regency_id: "9106",
        name: "SAIFI",
      },
      {
        id: "9106080",
        regency_id: "9106",
        name: "SAWIAT",
      },
      {
        id: "9106081",
        regency_id: "9106",
        name: "FOKOUR",
      },
      {
        id: "9106082",
        regency_id: "9106",
        name: "SALKMA",
      },
      {
        id: "9107061",
        regency_id: "9107",
        name: "KLASO",
      },
      {
        id: "9107062",
        regency_id: "9107",
        name: "SAENGKEDUK",
      },
      {
        id: "9107100",
        regency_id: "9107",
        name: "MAKBON",
      },
      {
        id: "9107101",
        regency_id: "9107",
        name: "KLAYILI",
      },
      {
        id: "9107110",
        regency_id: "9107",
        name: "BERAUR",
      },
      {
        id: "9107111",
        regency_id: "9107",
        name: "KLAMONO",
      },
      {
        id: "9107112",
        regency_id: "9107",
        name: "KLABOT",
      },
      {
        id: "9107113",
        regency_id: "9107",
        name: "KLAWAK",
      },
      {
        id: "9107114",
        regency_id: "9107",
        name: "BAGUN",
      },
      {
        id: "9107115",
        regency_id: "9107",
        name: "KLASAFET",
      },
      {
        id: "9107116",
        regency_id: "9107",
        name: "MALABOTOM",
      },
      {
        id: "9107118",
        regency_id: "9107",
        name: "BOTAIN",
      },
      {
        id: "9107119",
        regency_id: "9107",
        name: "KONHIR",
      },
      {
        id: "9107120",
        regency_id: "9107",
        name: "SALAWATI",
      },
      {
        id: "9107121",
        regency_id: "9107",
        name: "MAYAMUK",
      },
      {
        id: "9107122",
        regency_id: "9107",
        name: "SALAWATI TIMUR",
      },
      {
        id: "9107123",
        regency_id: "9107",
        name: "HOBARD",
      },
      {
        id: "9107124",
        regency_id: "9107",
        name: "BUK",
      },
      {
        id: "9107130",
        regency_id: "9107",
        name: "SEGET",
      },
      {
        id: "9107131",
        regency_id: "9107",
        name: "SEGUN",
      },
      {
        id: "9107132",
        regency_id: "9107",
        name: "SALAWATI SELATAN",
      },
      {
        id: "9107133",
        regency_id: "9107",
        name: "SALAWATI TENGAH",
      },
      {
        id: "9107170",
        regency_id: "9107",
        name: "AIMAS",
      },
      {
        id: "9107171",
        regency_id: "9107",
        name: "MARIAT",
      },
      {
        id: "9107172",
        regency_id: "9107",
        name: "SORONG",
      },
      {
        id: "9107180",
        regency_id: "9107",
        name: "SAYOSA",
      },
      {
        id: "9107181",
        regency_id: "9107",
        name: "MAUDUS",
      },
      {
        id: "9107182",
        regency_id: "9107",
        name: "WEMAK",
      },
      {
        id: "9107183",
        regency_id: "9107",
        name: "SAYOSA TIMUR",
      },
      {
        id: "9107184",
        regency_id: "9107",
        name: "SUNOOK",
      },
      {
        id: "9108011",
        regency_id: "9108",
        name: "MISOOL SELATAN",
      },
      {
        id: "9108012",
        regency_id: "9108",
        name: "MISOOL BARAT",
      },
      {
        id: "9108020",
        regency_id: "9108",
        name: "MISOOL",
      },
      {
        id: "9108021",
        regency_id: "9108",
        name: "KOFIAU",
      },
      {
        id: "9108022",
        regency_id: "9108",
        name: "MISOOL TIMUR",
      },
      {
        id: "9108023",
        regency_id: "9108",
        name: "KEPULAUAN SEMBILAN",
      },
      {
        id: "9108031",
        regency_id: "9108",
        name: "SALAWATI UTARA",
      },
      {
        id: "9108033",
        regency_id: "9108",
        name: "SALAWATI TENGAH",
      },
      {
        id: "9108034",
        regency_id: "9108",
        name: "SALAWATI BARAT",
      },
      {
        id: "9108035",
        regency_id: "9108",
        name: "BATANTA SELATAN",
      },
      {
        id: "9108036",
        regency_id: "9108",
        name: "BATANTA UTARA",
      },
      {
        id: "9108040",
        regency_id: "9108",
        name: "WAIGEO SELATAN",
      },
      {
        id: "9108041",
        regency_id: "9108",
        name: "TELUK MAYALIBIT",
      },
      {
        id: "9108042",
        regency_id: "9108",
        name: "MEOS MANSAR",
      },
      {
        id: "9108043",
        regency_id: "9108",
        name: "KOTA WAISAI",
      },
      {
        id: "9108044",
        regency_id: "9108",
        name: "TIPLOL MAYALIBIT",
      },
      {
        id: "9108050",
        regency_id: "9108",
        name: "WAIGEO BARAT",
      },
      {
        id: "9108051",
        regency_id: "9108",
        name: "WAIGEO BARAT KEPULAUAN",
      },
      {
        id: "9108060",
        regency_id: "9108",
        name: "WAIGEO UTARA",
      },
      {
        id: "9108061",
        regency_id: "9108",
        name: "WARWARBOMI",
      },
      {
        id: "9108062",
        regency_id: "9108",
        name: "SUPNIN",
      },
      {
        id: "9108070",
        regency_id: "9108",
        name: "KEPULAUAN AYAU",
      },
      {
        id: "9108071",
        regency_id: "9108",
        name: "AYAU",
      },
      {
        id: "9108080",
        regency_id: "9108",
        name: "WAIGEO TIMUR",
      },
      {
        id: "9109010",
        regency_id: "9109",
        name: "FEF",
      },
      {
        id: "9109011",
        regency_id: "9109",
        name: "SYUJAK",
      },
      {
        id: "9109012",
        regency_id: "9109",
        name: "ASES",
      },
      {
        id: "9109013",
        regency_id: "9109",
        name: "TINGGOUW",
      },
      {
        id: "9109020",
        regency_id: "9109",
        name: "MIYAH",
      },
      {
        id: "9109021",
        regency_id: "9109",
        name: "MIYAH SELATAN",
      },
      {
        id: "9109022",
        regency_id: "9109",
        name: "IRERES",
      },
      {
        id: "9109023",
        regency_id: "9109",
        name: "WILHEM ROUMBOUTS",
      },
      {
        id: "9109030",
        regency_id: "9109",
        name: "ABUN",
      },
      {
        id: "9109040",
        regency_id: "9109",
        name: "KWOOR",
      },
      {
        id: "9109041",
        regency_id: "9109",
        name: "TOBOUW",
      },
      {
        id: "9109042",
        regency_id: "9109",
        name: "KWESEFO",
      },
      {
        id: "9109050",
        regency_id: "9109",
        name: "SAUSAPOR",
      },
      {
        id: "9109051",
        regency_id: "9109",
        name: "BIKAR",
      },
      {
        id: "9109060",
        regency_id: "9109",
        name: "YEMBUN",
      },
      {
        id: "9109061",
        regency_id: "9109",
        name: "BAMUSBAMA",
      },
      {
        id: "9109070",
        regency_id: "9109",
        name: "KEBAR",
      },
      {
        id: "9109071",
        regency_id: "9109",
        name: "KEBAR TIMUR",
      },
      {
        id: "9109072",
        regency_id: "9109",
        name: "KEBAR SELATAN",
      },
      {
        id: "9109073",
        regency_id: "9109",
        name: "MANEKAR",
      },
      {
        id: "9109080",
        regency_id: "9109",
        name: "SENOPI",
      },
      {
        id: "9109081",
        regency_id: "9109",
        name: "MAWABUAN",
      },
      {
        id: "9109090",
        regency_id: "9109",
        name: "AMBERBAKEN",
      },
      {
        id: "9109091",
        regency_id: "9109",
        name: "MPUR",
      },
      {
        id: "9109092",
        regency_id: "9109",
        name: "AMBERBAKEN BARAT",
      },
      {
        id: "9109100",
        regency_id: "9109",
        name: "MUBARNI / ARFU",
      },
      {
        id: "9109110",
        regency_id: "9109",
        name: "MORAID",
      },
      {
        id: "9109111",
        regency_id: "9109",
        name: "SELEMKAI",
      },
      {
        id: "9110010",
        regency_id: "9110",
        name: "AITINYO BARAT/ATHABU",
      },
      {
        id: "9110011",
        regency_id: "9110",
        name: "AYAMARU SELATAN JAYA",
      },
      {
        id: "9110020",
        regency_id: "9110",
        name: "AITINYO",
      },
      {
        id: "9110021",
        regency_id: "9110",
        name: "AITINYO TENGAH",
      },
      {
        id: "9110030",
        regency_id: "9110",
        name: "AIFAT SELATAN",
      },
      {
        id: "9110031",
        regency_id: "9110",
        name: "AIFAT TIMUR SELATAN",
      },
      {
        id: "9110040",
        regency_id: "9110",
        name: "AIFAT",
      },
      {
        id: "9110050",
        regency_id: "9110",
        name: "AITINYO UTARA",
      },
      {
        id: "9110051",
        regency_id: "9110",
        name: "AITINYO RAYA",
      },
      {
        id: "9110060",
        regency_id: "9110",
        name: "AYAMARU TIMUR",
      },
      {
        id: "9110061",
        regency_id: "9110",
        name: "AYAMARU TIMUR SELATAN",
      },
      {
        id: "9110070",
        regency_id: "9110",
        name: "AYAMARU",
      },
      {
        id: "9110071",
        regency_id: "9110",
        name: "AYAMARU SELATAN",
      },
      {
        id: "9110072",
        regency_id: "9110",
        name: "AYAMARU JAYA",
      },
      {
        id: "9110073",
        regency_id: "9110",
        name: "AYAMARU TENGAH",
      },
      {
        id: "9110074",
        regency_id: "9110",
        name: "AYAMARU BARAT",
      },
      {
        id: "9110080",
        regency_id: "9110",
        name: "AYAMARU UTARA",
      },
      {
        id: "9110081",
        regency_id: "9110",
        name: "AYAMARU UTARA TIMUR",
      },
      {
        id: "9110090",
        regency_id: "9110",
        name: "MARE",
      },
      {
        id: "9110091",
        regency_id: "9110",
        name: "MARE SELATAN",
      },
      {
        id: "9110100",
        regency_id: "9110",
        name: "AIFAT UTARA",
      },
      {
        id: "9110110",
        regency_id: "9110",
        name: "AIFAT TIMUR",
      },
      {
        id: "9110111",
        regency_id: "9110",
        name: "AIFAT TIMUR TENGAH",
      },
      {
        id: "9110112",
        regency_id: "9110",
        name: "AIFAT TIMUR JAUH",
      },
      {
        id: "9111010",
        regency_id: "9111",
        name: "TAHOTA",
      },
      {
        id: "9111020",
        regency_id: "9111",
        name: "DATARAN ISIM",
      },
      {
        id: "9111030",
        regency_id: "9111",
        name: "NENEI",
      },
      {
        id: "9111040",
        regency_id: "9111",
        name: "MOMI WAREN",
      },
      {
        id: "9111050",
        regency_id: "9111",
        name: "RANSIKI",
      },
      {
        id: "9111060",
        regency_id: "9111",
        name: "ORANSBARI",
      },
      {
        id: "9112010",
        regency_id: "9112",
        name: "DIDOHU",
      },
      {
        id: "9112020",
        regency_id: "9112",
        name: "SURUREY",
      },
      {
        id: "9112030",
        regency_id: "9112",
        name: "ANGGI GIDA",
      },
      {
        id: "9112040",
        regency_id: "9112",
        name: "MEMBEY",
      },
      {
        id: "9112050",
        regency_id: "9112",
        name: "ANGGI",
      },
      {
        id: "9112060",
        regency_id: "9112",
        name: "TAIGE",
      },
      {
        id: "9112070",
        regency_id: "9112",
        name: "HINGK",
      },
      {
        id: "9112080",
        regency_id: "9112",
        name: "MENYAMBOUW",
      },
      {
        id: "9112090",
        regency_id: "9112",
        name: "CATUBOUW",
      },
      {
        id: "9112100",
        regency_id: "9112",
        name: "TESTEGA",
      },
      {
        id: "9171010",
        regency_id: "9171",
        name: "SORONG BARAT",
      },
      {
        id: "9171011",
        regency_id: "9171",
        name: "SORONG KEPULAUAN",
      },
      {
        id: "9171012",
        regency_id: "9171",
        name: "MALADUM MES",
      },
      {
        id: "9171020",
        regency_id: "9171",
        name: "SORONG TIMUR",
      },
      {
        id: "9171021",
        regency_id: "9171",
        name: "SORONG UTARA",
      },
      {
        id: "9171022",
        regency_id: "9171",
        name: "SORONG",
      },
      {
        id: "9171023",
        regency_id: "9171",
        name: "SORONG MANOI",
      },
      {
        id: "9171024",
        regency_id: "9171",
        name: "KLAURUNG",
      },
      {
        id: "9171025",
        regency_id: "9171",
        name: "MALAIMSIMSA",
      },
      {
        id: "9171026",
        regency_id: "9171",
        name: "SORONG KOTA",
      },
      {
        id: "9401010",
        regency_id: "9401",
        name: "KIMAAM",
      },
      {
        id: "9401011",
        regency_id: "9401",
        name: "WAAN",
      },
      {
        id: "9401012",
        regency_id: "9401",
        name: "TABONJI",
      },
      {
        id: "9401013",
        regency_id: "9401",
        name: "ILWAYAB",
      },
      {
        id: "9401020",
        regency_id: "9401",
        name: "OKABA",
      },
      {
        id: "9401021",
        regency_id: "9401",
        name: "TUBANG",
      },
      {
        id: "9401022",
        regency_id: "9401",
        name: "NGGUTI",
      },
      {
        id: "9401023",
        regency_id: "9401",
        name: "KAPTEL",
      },
      {
        id: "9401030",
        regency_id: "9401",
        name: "KURIK",
      },
      {
        id: "9401031",
        regency_id: "9401",
        name: "MALIND",
      },
      {
        id: "9401032",
        regency_id: "9401",
        name: "ANIMHA",
      },
      {
        id: "9401040",
        regency_id: "9401",
        name: "MERAUKE",
      },
      {
        id: "9401041",
        regency_id: "9401",
        name: "SEMANGGA",
      },
      {
        id: "9401042",
        regency_id: "9401",
        name: "TANAH MIRING",
      },
      {
        id: "9401043",
        regency_id: "9401",
        name: "JAGEBOB",
      },
      {
        id: "9401044",
        regency_id: "9401",
        name: "SOTA",
      },
      {
        id: "9401045",
        regency_id: "9401",
        name: "NAUKENJERAI",
      },
      {
        id: "9401050",
        regency_id: "9401",
        name: "MUTING",
      },
      {
        id: "9401051",
        regency_id: "9401",
        name: "ELIGOBEL",
      },
      {
        id: "9401052",
        regency_id: "9401",
        name: "ULILIN",
      },
      {
        id: "9402110",
        regency_id: "9402",
        name: "WAMENA",
      },
      {
        id: "9402111",
        regency_id: "9402",
        name: "ASOLOKOBAL",
      },
      {
        id: "9402112",
        regency_id: "9402",
        name: "WALELAGAMA",
      },
      {
        id: "9402113",
        regency_id: "9402",
        name: "TRIKORA",
      },
      {
        id: "9402114",
        regency_id: "9402",
        name: "NAPUA",
      },
      {
        id: "9402115",
        regency_id: "9402",
        name: "WALAIK",
      },
      {
        id: "9402116",
        regency_id: "9402",
        name: "WOUMA",
      },
      {
        id: "9402117",
        regency_id: "9402",
        name: "WALESI",
      },
      {
        id: "9402118",
        regency_id: "9402",
        name: "ASOTIPO",
      },
      {
        id: "9402119",
        regency_id: "9402",
        name: "MAIMA",
      },
      {
        id: "9402120",
        regency_id: "9402",
        name: "HUBIKOSI",
      },
      {
        id: "9402121",
        regency_id: "9402",
        name: "PELEBAGA",
      },
      {
        id: "9402122",
        regency_id: "9402",
        name: "IBELE",
      },
      {
        id: "9402123",
        regency_id: "9402",
        name: "TAILAREK",
      },
      {
        id: "9402124",
        regency_id: "9402",
        name: "HUBIKIAK",
      },
      {
        id: "9402180",
        regency_id: "9402",
        name: "ASOLOGAIMA",
      },
      {
        id: "9402181",
        regency_id: "9402",
        name: "MUSATFAK",
      },
      {
        id: "9402182",
        regency_id: "9402",
        name: "SILO KARNO DOGA",
      },
      {
        id: "9402183",
        regency_id: "9402",
        name: "PYRAMID",
      },
      {
        id: "9402184",
        regency_id: "9402",
        name: "MULIAMA",
      },
      {
        id: "9402185",
        regency_id: "9402",
        name: "WAME",
      },
      {
        id: "9402190",
        regency_id: "9402",
        name: "KURULU",
      },
      {
        id: "9402191",
        regency_id: "9402",
        name: "USILIMO",
      },
      {
        id: "9402192",
        regency_id: "9402",
        name: "WITA WAYA",
      },
      {
        id: "9402193",
        regency_id: "9402",
        name: "LIBAREK",
      },
      {
        id: "9402194",
        regency_id: "9402",
        name: "WADANGKU",
      },
      {
        id: "9402195",
        regency_id: "9402",
        name: "PISUGI",
      },
      {
        id: "9402220",
        regency_id: "9402",
        name: "BOLAKME",
      },
      {
        id: "9402221",
        regency_id: "9402",
        name: "WOLLO",
      },
      {
        id: "9402222",
        regency_id: "9402",
        name: "YALENGGA",
      },
      {
        id: "9402223",
        regency_id: "9402",
        name: "TAGIME",
      },
      {
        id: "9402224",
        regency_id: "9402",
        name: "MOLAGALOME",
      },
      {
        id: "9402225",
        regency_id: "9402",
        name: "TAGINERI",
      },
      {
        id: "9402226",
        regency_id: "9402",
        name: "BUGI",
      },
      {
        id: "9402227",
        regency_id: "9402",
        name: "BPIRI",
      },
      {
        id: "9402228",
        regency_id: "9402",
        name: "KORAGI",
      },
      {
        id: "9402611",
        regency_id: "9402",
        name: "ITLAY HASIGE",
      },
      {
        id: "9402612",
        regency_id: "9402",
        name: "SIEPKOSI",
      },
      {
        id: "9402614",
        regency_id: "9402",
        name: "POPUGOBA",
      },
      {
        id: "9403080",
        regency_id: "9403",
        name: "KAUREH",
      },
      {
        id: "9403081",
        regency_id: "9403",
        name: "AIRU",
      },
      {
        id: "9403082",
        regency_id: "9403",
        name: "YAPSI",
      },
      {
        id: "9403140",
        regency_id: "9403",
        name: "KEMTUK",
      },
      {
        id: "9403150",
        regency_id: "9403",
        name: "KEMTUK GRESI",
      },
      {
        id: "9403151",
        regency_id: "9403",
        name: "GRESI SELATAN",
      },
      {
        id: "9403160",
        regency_id: "9403",
        name: "NIMBORAN",
      },
      {
        id: "9403161",
        regency_id: "9403",
        name: "NIMBORAN TIMUR / NAMBLONG",
      },
      {
        id: "9403170",
        regency_id: "9403",
        name: "NIMBOKRANG",
      },
      {
        id: "9403180",
        regency_id: "9403",
        name: "UNURUM GUAY",
      },
      {
        id: "9403200",
        regency_id: "9403",
        name: "DEMTA",
      },
      {
        id: "9403201",
        regency_id: "9403",
        name: "YOKARI",
      },
      {
        id: "9403210",
        regency_id: "9403",
        name: "DEPAPRE",
      },
      {
        id: "9403211",
        regency_id: "9403",
        name: "RAVENIRARA",
      },
      {
        id: "9403220",
        regency_id: "9403",
        name: "SENTANI BARAT",
      },
      {
        id: "9403221",
        regency_id: "9403",
        name: "WAIBU",
      },
      {
        id: "9403230",
        regency_id: "9403",
        name: "SENTANI",
      },
      {
        id: "9403231",
        regency_id: "9403",
        name: "EBUNGFAU",
      },
      {
        id: "9403240",
        regency_id: "9403",
        name: "SENTANI TIMUR",
      },
      {
        id: "9404050",
        regency_id: "9404",
        name: "UWAPA",
      },
      {
        id: "9404051",
        regency_id: "9404",
        name: "MENOU",
      },
      {
        id: "9404052",
        regency_id: "9404",
        name: "DIPA",
      },
      {
        id: "9404060",
        regency_id: "9404",
        name: "YAUR",
      },
      {
        id: "9404061",
        regency_id: "9404",
        name: "TELUK UMAR",
      },
      {
        id: "9404070",
        regency_id: "9404",
        name: "WANGGAR",
      },
      {
        id: "9404071",
        regency_id: "9404",
        name: "NABIRE BARAT",
      },
      {
        id: "9404080",
        regency_id: "9404",
        name: "NABIRE",
      },
      {
        id: "9404081",
        regency_id: "9404",
        name: "TELUK KIMI",
      },
      {
        id: "9404090",
        regency_id: "9404",
        name: "NAPAN",
      },
      {
        id: "9404091",
        regency_id: "9404",
        name: "MAKIMI",
      },
      {
        id: "9404092",
        regency_id: "9404",
        name: "WAPOGA",
      },
      {
        id: "9404093",
        regency_id: "9404",
        name: "KEPULAUAN MOORA",
      },
      {
        id: "9404100",
        regency_id: "9404",
        name: "SIRIWO",
      },
      {
        id: "9404110",
        regency_id: "9404",
        name: "YARO",
      },
      {
        id: "9408040",
        regency_id: "9408",
        name: "YAPEN TIMUR",
      },
      {
        id: "9408041",
        regency_id: "9408",
        name: "PANTURA YAPEN",
      },
      {
        id: "9408042",
        regency_id: "9408",
        name: "TELUK AMPIMOI",
      },
      {
        id: "9408043",
        regency_id: "9408",
        name: "RAIMBAWI",
      },
      {
        id: "9408044",
        regency_id: "9408",
        name: "PULAU KURUDU",
      },
      {
        id: "9408050",
        regency_id: "9408",
        name: "ANGKAISERA",
      },
      {
        id: "9408051",
        regency_id: "9408",
        name: "KEP. AMBAI",
      },
      {
        id: "9408052",
        regency_id: "9408",
        name: "YAWAKUKAT",
      },
      {
        id: "9408060",
        regency_id: "9408",
        name: "YAPEN SELATAN",
      },
      {
        id: "9408061",
        regency_id: "9408",
        name: "KOSIWO",
      },
      {
        id: "9408062",
        regency_id: "9408",
        name: "ANATAUREI",
      },
      {
        id: "9408070",
        regency_id: "9408",
        name: "YAPEN BARAT",
      },
      {
        id: "9408071",
        regency_id: "9408",
        name: "WONAWA",
      },
      {
        id: "9408072",
        regency_id: "9408",
        name: "PULAU YERUI",
      },
      {
        id: "9408080",
        regency_id: "9408",
        name: "POOM",
      },
      {
        id: "9408081",
        regency_id: "9408",
        name: "WINDESI",
      },
      {
        id: "9409010",
        regency_id: "9409",
        name: "NUMFOR BARAT",
      },
      {
        id: "9409011",
        regency_id: "9409",
        name: "ORKERI",
      },
      {
        id: "9409020",
        regency_id: "9409",
        name: "NUMFOR TIMUR",
      },
      {
        id: "9409021",
        regency_id: "9409",
        name: "BRUYADORI",
      },
      {
        id: "9409022",
        regency_id: "9409",
        name: "POIRU",
      },
      {
        id: "9409030",
        regency_id: "9409",
        name: "PADAIDO",
      },
      {
        id: "9409031",
        regency_id: "9409",
        name: "AIMANDO PADAIDO",
      },
      {
        id: "9409040",
        regency_id: "9409",
        name: "BIAK TIMUR",
      },
      {
        id: "9409041",
        regency_id: "9409",
        name: "ORIDEK",
      },
      {
        id: "9409050",
        regency_id: "9409",
        name: "BIAK KOTA",
      },
      {
        id: "9409060",
        regency_id: "9409",
        name: "SAMOFA",
      },
      {
        id: "9409070",
        regency_id: "9409",
        name: "YENDIDORI",
      },
      {
        id: "9409080",
        regency_id: "9409",
        name: "BIAK UTARA",
      },
      {
        id: "9409081",
        regency_id: "9409",
        name: "ANDEY",
      },
      {
        id: "9409090",
        regency_id: "9409",
        name: "WARSA",
      },
      {
        id: "9409091",
        regency_id: "9409",
        name: "YAWOSI",
      },
      {
        id: "9409092",
        regency_id: "9409",
        name: "BONDIFUAR",
      },
      {
        id: "9409100",
        regency_id: "9409",
        name: "BIAK BARAT",
      },
      {
        id: "9409101",
        regency_id: "9409",
        name: "SWANDIWE",
      },
      {
        id: "9410030",
        regency_id: "9410",
        name: "PANIAI TIMUR",
      },
      {
        id: "9410031",
        regency_id: "9410",
        name: "YATAMO",
      },
      {
        id: "9410032",
        regency_id: "9410",
        name: "KEBO",
      },
      {
        id: "9410033",
        regency_id: "9410",
        name: "PUGO DAGI",
      },
      {
        id: "9410034",
        regency_id: "9410",
        name: "WEGE MUKA",
      },
      {
        id: "9410035",
        regency_id: "9410",
        name: "WEGEE BINO",
      },
      {
        id: "9410036",
        regency_id: "9410",
        name: "YAGAI",
      },
      {
        id: "9410040",
        regency_id: "9410",
        name: "BIBIDA",
      },
      {
        id: "9410041",
        regency_id: "9410",
        name: "DUMADAMA",
      },
      {
        id: "9410070",
        regency_id: "9410",
        name: "ARADIDE",
      },
      {
        id: "9410071",
        regency_id: "9410",
        name: "EKADIDE",
      },
      {
        id: "9410072",
        regency_id: "9410",
        name: "AWEIDA",
      },
      {
        id: "9410073",
        regency_id: "9410",
        name: "FAJAR TIMUR",
      },
      {
        id: "9410074",
        regency_id: "9410",
        name: "TOPIYAI",
      },
      {
        id: "9410080",
        regency_id: "9410",
        name: "PANIAI BARAT",
      },
      {
        id: "9410081",
        regency_id: "9410",
        name: "SIRIWO",
      },
      {
        id: "9410082",
        regency_id: "9410",
        name: "MUYE",
      },
      {
        id: "9410083",
        regency_id: "9410",
        name: "NAKAMA",
      },
      {
        id: "9410084",
        regency_id: "9410",
        name: "TELUK DEYA",
      },
      {
        id: "9410090",
        regency_id: "9410",
        name: "BOGOBAIDA",
      },
      {
        id: "9411040",
        regency_id: "9411",
        name: "FAWI",
      },
      {
        id: "9411041",
        regency_id: "9411",
        name: "DAGAI",
      },
      {
        id: "9411042",
        regency_id: "9411",
        name: "KIYAGE",
      },
      {
        id: "9411050",
        regency_id: "9411",
        name: "MULIA",
      },
      {
        id: "9411053",
        regency_id: "9411",
        name: "YAMBI",
      },
      {
        id: "9411054",
        regency_id: "9411",
        name: "ILAMBURAWI",
      },
      {
        id: "9411055",
        regency_id: "9411",
        name: "MUARA",
      },
      {
        id: "9411056",
        regency_id: "9411",
        name: "PAGALEME",
      },
      {
        id: "9411057",
        regency_id: "9411",
        name: "GURAGE",
      },
      {
        id: "9411058",
        regency_id: "9411",
        name: "IRIMULI",
      },
      {
        id: "9411060",
        regency_id: "9411",
        name: "ILU",
      },
      {
        id: "9411061",
        regency_id: "9411",
        name: "TORERE",
      },
      {
        id: "9411063",
        regency_id: "9411",
        name: "YAMONERI",
      },
      {
        id: "9411064",
        regency_id: "9411",
        name: "WAEGI",
      },
      {
        id: "9411065",
        regency_id: "9411",
        name: "NUME",
      },
      {
        id: "9411066",
        regency_id: "9411",
        name: "NIOGA",
      },
      {
        id: "9411067",
        regency_id: "9411",
        name: "GUBUME",
      },
      {
        id: "9411068",
        regency_id: "9411",
        name: "TAGANOMBAK",
      },
      {
        id: "9411070",
        regency_id: "9411",
        name: "TINGGINAMBUT",
      },
      {
        id: "9411071",
        regency_id: "9411",
        name: "KALOME",
      },
      {
        id: "9411072",
        regency_id: "9411",
        name: "WANWI",
      },
      {
        id: "9411080",
        regency_id: "9411",
        name: "MEWOLUK",
      },
      {
        id: "9411081",
        regency_id: "9411",
        name: "LUMO",
      },
      {
        id: "9411082",
        regency_id: "9411",
        name: "MOLANIKIME",
      },
      {
        id: "9411090",
        regency_id: "9411",
        name: "YAMO",
      },
      {
        id: "9411091",
        regency_id: "9411",
        name: "DOKOME",
      },
      {
        id: "9412010",
        regency_id: "9412",
        name: "MIMIKA BARAT",
      },
      {
        id: "9412011",
        regency_id: "9412",
        name: "MIMIKA BARAT JAUH",
      },
      {
        id: "9412012",
        regency_id: "9412",
        name: "MIMIKA BARAT TENGAH",
      },
      {
        id: "9412013",
        regency_id: "9412",
        name: "AMAR",
      },
      {
        id: "9412020",
        regency_id: "9412",
        name: "MIMIKA TIMUR",
      },
      {
        id: "9412021",
        regency_id: "9412",
        name: "MIMIKA TENGAH",
      },
      {
        id: "9412022",
        regency_id: "9412",
        name: "MIMIKA TIMUR JAUH",
      },
      {
        id: "9412030",
        regency_id: "9412",
        name: "MIMIKA BARU",
      },
      {
        id: "9412031",
        regency_id: "9412",
        name: "KUALA KENCANA",
      },
      {
        id: "9412032",
        regency_id: "9412",
        name: "TEMBAGAPURA",
      },
      {
        id: "9412033",
        regency_id: "9412",
        name: "WANIA",
      },
      {
        id: "9412034",
        regency_id: "9412",
        name: "IWAKA",
      },
      {
        id: "9412035",
        regency_id: "9412",
        name: "KWAMKI NARAMA",
      },
      {
        id: "9412040",
        regency_id: "9412",
        name: "AGIMUGA",
      },
      {
        id: "9412041",
        regency_id: "9412",
        name: "JILA",
      },
      {
        id: "9412042",
        regency_id: "9412",
        name: "JITA",
      },
      {
        id: "9412043",
        regency_id: "9412",
        name: "ALAMA",
      },
      {
        id: "9412044",
        regency_id: "9412",
        name: "HOYA",
      },
      {
        id: "9413010",
        regency_id: "9413",
        name: "JAIR",
      },
      {
        id: "9413011",
        regency_id: "9413",
        name: "SUBUR",
      },
      {
        id: "9413013",
        regency_id: "9413",
        name: "KIA",
      },
      {
        id: "9413020",
        regency_id: "9413",
        name: "MINDIPTANA",
      },
      {
        id: "9413021",
        regency_id: "9413",
        name: "INIYANDIT",
      },
      {
        id: "9413022",
        regency_id: "9413",
        name: "KOMBUT",
      },
      {
        id: "9413023",
        regency_id: "9413",
        name: "SESNUK",
      },
      {
        id: "9413030",
        regency_id: "9413",
        name: "MANDOBO",
      },
      {
        id: "9413031",
        regency_id: "9413",
        name: "FOFI",
      },
      {
        id: "9413032",
        regency_id: "9413",
        name: "ARIMOP",
      },
      {
        id: "9413040",
        regency_id: "9413",
        name: "KOUH",
      },
      {
        id: "9413041",
        regency_id: "9413",
        name: "BOMAKIA",
      },
      {
        id: "9413042",
        regency_id: "9413",
        name: "FIRIWAGE",
      },
      {
        id: "9413043",
        regency_id: "9413",
        name: "MANGGELUM",
      },
      {
        id: "9413044",
        regency_id: "9413",
        name: "YANIRUMA",
      },
      {
        id: "9413045",
        regency_id: "9413",
        name: "KAWAGIT",
      },
      {
        id: "9413046",
        regency_id: "9413",
        name: "KOMBAY",
      },
      {
        id: "9413050",
        regency_id: "9413",
        name: "WAROPKO",
      },
      {
        id: "9413051",
        regency_id: "9413",
        name: "AMBATKWI",
      },
      {
        id: "9413052",
        regency_id: "9413",
        name: "NINATI",
      },
      {
        id: "9414010",
        regency_id: "9414",
        name: "NAMBIOMAN BAPAI",
      },
      {
        id: "9414011",
        regency_id: "9414",
        name: "MINYAMUR",
      },
      {
        id: "9414020",
        regency_id: "9414",
        name: "EDERA",
      },
      {
        id: "9414021",
        regency_id: "9414",
        name: "VENAHA",
      },
      {
        id: "9414022",
        regency_id: "9414",
        name: "SYAHCAME",
      },
      {
        id: "9414023",
        regency_id: "9414",
        name: "BAMGI",
      },
      {
        id: "9414024",
        regency_id: "9414",
        name: "YAKOMI",
      },
      {
        id: "9414030",
        regency_id: "9414",
        name: "OBAA",
      },
      {
        id: "9414031",
        regency_id: "9414",
        name: "PASSUE",
      },
      {
        id: "9414040",
        regency_id: "9414",
        name: "HAJU",
      },
      {
        id: "9414050",
        regency_id: "9414",
        name: "ASSUE",
      },
      {
        id: "9414060",
        regency_id: "9414",
        name: "CITAKMITAK",
      },
      {
        id: "9414061",
        regency_id: "9414",
        name: "KAIBAR",
      },
      {
        id: "9414062",
        regency_id: "9414",
        name: "PASSUE BAWAH",
      },
      {
        id: "9414063",
        regency_id: "9414",
        name: "TI-ZAIN",
      },
      {
        id: "9415010",
        regency_id: "9415",
        name: "PANTAI KASUARI",
      },
      {
        id: "9415011",
        regency_id: "9415",
        name: "KOPAY",
      },
      {
        id: "9415012",
        regency_id: "9415",
        name: "DER KOUMUR",
      },
      {
        id: "9415013",
        regency_id: "9415",
        name: "SAFAN",
      },
      {
        id: "9415014",
        regency_id: "9415",
        name: "AWYU",
      },
      {
        id: "9415020",
        regency_id: "9415",
        name: "FAYIT",
      },
      {
        id: "9415021",
        regency_id: "9415",
        name: "ASWI",
      },
      {
        id: "9415030",
        regency_id: "9415",
        name: "ATSY",
      },
      {
        id: "9415031",
        regency_id: "9415",
        name: "SIRETS",
      },
      {
        id: "9415032",
        regency_id: "9415",
        name: "AYIP",
      },
      {
        id: "9415033",
        regency_id: "9415",
        name: "BECTBAMU",
      },
      {
        id: "9415040",
        regency_id: "9415",
        name: "SUATOR",
      },
      {
        id: "9415041",
        regency_id: "9415",
        name: "KOLF BRAZA",
      },
      {
        id: "9415042",
        regency_id: "9415",
        name: "JOUTU",
      },
      {
        id: "9415043",
        regency_id: "9415",
        name: "KOROWAY BULUANOP",
      },
      {
        id: "9415050",
        regency_id: "9415",
        name: "AKAT",
      },
      {
        id: "9415051",
        regency_id: "9415",
        name: "JETSY",
      },
      {
        id: "9415060",
        regency_id: "9415",
        name: "AGATS",
      },
      {
        id: "9415070",
        regency_id: "9415",
        name: "SAWA ERMA",
      },
      {
        id: "9415071",
        regency_id: "9415",
        name: "SURU-SURU",
      },
      {
        id: "9415072",
        regency_id: "9415",
        name: "UNIR SIRAU",
      },
      {
        id: "9415073",
        regency_id: "9415",
        name: "JOERAT",
      },
      {
        id: "9415074",
        regency_id: "9415",
        name: "PULAU TIGA",
      },
      {
        id: "9416010",
        regency_id: "9416",
        name: "KURIMA",
      },
      {
        id: "9416011",
        regency_id: "9416",
        name: "MUSAIK",
      },
      {
        id: "9416013",
        regency_id: "9416",
        name: "DEKAI",
      },
      {
        id: "9416014",
        regency_id: "9416",
        name: "OBIO",
      },
      {
        id: "9416015",
        regency_id: "9416",
        name: "PASEMA",
      },
      {
        id: "9416016",
        regency_id: "9416",
        name: "AMUMA",
      },
      {
        id: "9416017",
        regency_id: "9416",
        name: "SURU-SURU",
      },
      {
        id: "9416018",
        regency_id: "9416",
        name: "WUSAMA",
      },
      {
        id: "9416019",
        regency_id: "9416",
        name: "SILIMO",
      },
      {
        id: "9416020",
        regency_id: "9416",
        name: "NINIA",
      },
      {
        id: "9416021",
        regency_id: "9416",
        name: "HOLUWON",
      },
      {
        id: "9416022",
        regency_id: "9416",
        name: "LOLAT",
      },
      {
        id: "9416023",
        regency_id: "9416",
        name: "LANGDA",
      },
      {
        id: "9416024",
        regency_id: "9416",
        name: "BOMELA",
      },
      {
        id: "9416025",
        regency_id: "9416",
        name: "SUNTAMON",
      },
      {
        id: "9416026",
        regency_id: "9416",
        name: "SOBAHAM",
      },
      {
        id: "9416027",
        regency_id: "9416",
        name: "KORUPUN",
      },
      {
        id: "9416028",
        regency_id: "9416",
        name: "SELA",
      },
      {
        id: "9416029",
        regency_id: "9416",
        name: "KWELAMDUA",
      },
      {
        id: "9416030",
        regency_id: "9416",
        name: "ANGGRUK",
      },
      {
        id: "9416031",
        regency_id: "9416",
        name: "PANGGEMA",
      },
      {
        id: "9416032",
        regency_id: "9416",
        name: "WALMA",
      },
      {
        id: "9416033",
        regency_id: "9416",
        name: "KOSAREK",
      },
      {
        id: "9416034",
        regency_id: "9416",
        name: "UBAHAK",
      },
      {
        id: "9416035",
        regency_id: "9416",
        name: "NALCA",
      },
      {
        id: "9416036",
        regency_id: "9416",
        name: "PULDAMA",
      },
      {
        id: "9416037",
        regency_id: "9416",
        name: "NIPSAN",
      },
      {
        id: "9416041",
        regency_id: "9416",
        name: "SAMENAGE",
      },
      {
        id: "9416042",
        regency_id: "9416",
        name: "TANGMA",
      },
      {
        id: "9416043",
        regency_id: "9416",
        name: "SOBA",
      },
      {
        id: "9416044",
        regency_id: "9416",
        name: "MUGI",
      },
      {
        id: "9416045",
        regency_id: "9416",
        name: "YOGOSEM",
      },
      {
        id: "9416046",
        regency_id: "9416",
        name: "KAYO",
      },
      {
        id: "9416047",
        regency_id: "9416",
        name: "SUMO",
      },
      {
        id: "9416048",
        regency_id: "9416",
        name: "HOGIO",
      },
      {
        id: "9416049",
        regency_id: "9416",
        name: "UKHA",
      },
      {
        id: "9416051",
        regency_id: "9416",
        name: "WERIMA",
      },
      {
        id: "9416052",
        regency_id: "9416",
        name: "SOLOIKMA",
      },
      {
        id: "9416053",
        regency_id: "9416",
        name: "SERADALA",
      },
      {
        id: "9416054",
        regency_id: "9416",
        name: "KABIANGGAMA",
      },
      {
        id: "9416055",
        regency_id: "9416",
        name: "KWIKMA",
      },
      {
        id: "9416056",
        regency_id: "9416",
        name: "HILIPUK",
      },
      {
        id: "9416057",
        regency_id: "9416",
        name: "YAHULIAMBUT",
      },
      {
        id: "9416058",
        regency_id: "9416",
        name: "HEREAPINI",
      },
      {
        id: "9416059",
        regency_id: "9416",
        name: "UBALIHI",
      },
      {
        id: "9416061",
        regency_id: "9416",
        name: "TALAMBO",
      },
      {
        id: "9416062",
        regency_id: "9416",
        name: "PRONGGOLI",
      },
      {
        id: "9416063",
        regency_id: "9416",
        name: "ENDOMEN",
      },
      {
        id: "9416065",
        regency_id: "9416",
        name: "KONA",
      },
      {
        id: "9416066",
        regency_id: "9416",
        name: "DURAM",
      },
      {
        id: "9416067",
        regency_id: "9416",
        name: "DIRWEMNA",
      },
      {
        id: "9417010",
        regency_id: "9417",
        name: "IWUR",
      },
      {
        id: "9417011",
        regency_id: "9417",
        name: "KAWOR",
      },
      {
        id: "9417012",
        regency_id: "9417",
        name: "TARUP",
      },
      {
        id: "9417013",
        regency_id: "9417",
        name: "AWINBON",
      },
      {
        id: "9417020",
        regency_id: "9417",
        name: "OKSIBIL",
      },
      {
        id: "9417021",
        regency_id: "9417",
        name: "PEPERA",
      },
      {
        id: "9417022",
        regency_id: "9417",
        name: "ALEMSOM",
      },
      {
        id: "9417023",
        regency_id: "9417",
        name: "SERAMBAKON",
      },
      {
        id: "9417024",
        regency_id: "9417",
        name: "KOLOMDOL",
      },
      {
        id: "9417025",
        regency_id: "9417",
        name: "OKSOP",
      },
      {
        id: "9417026",
        regency_id: "9417",
        name: "OK BAPE",
      },
      {
        id: "9417027",
        regency_id: "9417",
        name: "OK AON",
      },
      {
        id: "9417030",
        regency_id: "9417",
        name: "BORME",
      },
      {
        id: "9417031",
        regency_id: "9417",
        name: "BIME",
      },
      {
        id: "9417032",
        regency_id: "9417",
        name: "EPUMEK",
      },
      {
        id: "9417033",
        regency_id: "9417",
        name: "WEIME",
      },
      {
        id: "9417034",
        regency_id: "9417",
        name: "PAMEK",
      },
      {
        id: "9417035",
        regency_id: "9417",
        name: "NONGME",
      },
      {
        id: "9417036",
        regency_id: "9417",
        name: "BATANI",
      },
      {
        id: "9417040",
        regency_id: "9417",
        name: "OKBI",
      },
      {
        id: "9417041",
        regency_id: "9417",
        name: "ABOY",
      },
      {
        id: "9417042",
        regency_id: "9417",
        name: "OKBAB",
      },
      {
        id: "9417043",
        regency_id: "9417",
        name: "TEIRAPLU",
      },
      {
        id: "9417044",
        regency_id: "9417",
        name: "YEFTA",
      },
      {
        id: "9417050",
        regency_id: "9417",
        name: "KIWIROK",
      },
      {
        id: "9417051",
        regency_id: "9417",
        name: "KIWIROK TIMUR",
      },
      {
        id: "9417052",
        regency_id: "9417",
        name: "OKSEBANG",
      },
      {
        id: "9417053",
        regency_id: "9417",
        name: "OKHIKA",
      },
      {
        id: "9417054",
        regency_id: "9417",
        name: "OKLIP",
      },
      {
        id: "9417055",
        regency_id: "9417",
        name: "OKSAMOL",
      },
      {
        id: "9417056",
        regency_id: "9417",
        name: "OKBEMTA",
      },
      {
        id: "9417060",
        regency_id: "9417",
        name: "BATOM",
      },
      {
        id: "9417061",
        regency_id: "9417",
        name: "MURKIM",
      },
      {
        id: "9417062",
        regency_id: "9417",
        name: "MOFINOP",
      },
      {
        id: "9418010",
        regency_id: "9418",
        name: "KANGGIME",
      },
      {
        id: "9418011",
        regency_id: "9418",
        name: "WONIKI",
      },
      {
        id: "9418012",
        regency_id: "9418",
        name: "NABUNAGE",
      },
      {
        id: "9418013",
        regency_id: "9418",
        name: "GILUBANDU",
      },
      {
        id: "9418014",
        regency_id: "9418",
        name: "WAKUO",
      },
      {
        id: "9418015",
        regency_id: "9418",
        name: "AWEKU",
      },
      {
        id: "9418016",
        regency_id: "9418",
        name: "BOGONUK",
      },
      {
        id: "9418020",
        regency_id: "9418",
        name: "KARUBAGA",
      },
      {
        id: "9418021",
        regency_id: "9418",
        name: "GOYAGE",
      },
      {
        id: "9418022",
        regency_id: "9418",
        name: "WUNIN",
      },
      {
        id: "9418023",
        regency_id: "9418",
        name: "KONDAGA",
      },
      {
        id: "9418024",
        regency_id: "9418",
        name: "NELAWI",
      },
      {
        id: "9418025",
        regency_id: "9418",
        name: "KUARI",
      },
      {
        id: "9418026",
        regency_id: "9418",
        name: "LIANOGOMA",
      },
      {
        id: "9418027",
        regency_id: "9418",
        name: "BIUK",
      },
      {
        id: "9418030",
        regency_id: "9418",
        name: "BOKONDINI",
      },
      {
        id: "9418031",
        regency_id: "9418",
        name: "BOKONERI",
      },
      {
        id: "9418032",
        regency_id: "9418",
        name: "BEWANI",
      },
      {
        id: "9418040",
        regency_id: "9418",
        name: "KEMBU",
      },
      {
        id: "9418041",
        regency_id: "9418",
        name: "WINA",
      },
      {
        id: "9418042",
        regency_id: "9418",
        name: "UMAGI",
      },
      {
        id: "9418043",
        regency_id: "9418",
        name: "PANAGA",
      },
      {
        id: "9418044",
        regency_id: "9418",
        name: "POGANERI",
      },
      {
        id: "9418045",
        regency_id: "9418",
        name: "KAMBONERI",
      },
      {
        id: "9418046",
        regency_id: "9418",
        name: "AIR GARAM",
      },
      {
        id: "9418047",
        regency_id: "9418",
        name: "DOW",
      },
      {
        id: "9418048",
        regency_id: "9418",
        name: "WARI / TAIYEVE",
      },
      {
        id: "9418049",
        regency_id: "9418",
        name: "EGIAM",
      },
      {
        id: "9418051",
        regency_id: "9418",
        name: "NUNGGAWI",
      },
      {
        id: "9418060",
        regency_id: "9418",
        name: "KUBU",
      },
      {
        id: "9418061",
        regency_id: "9418",
        name: "ANAWI",
      },
      {
        id: "9418062",
        regency_id: "9418",
        name: "WUGI",
      },
      {
        id: "9418070",
        regency_id: "9418",
        name: "GEYA",
      },
      {
        id: "9418071",
        regency_id: "9418",
        name: "WENAM",
      },
      {
        id: "9418080",
        regency_id: "9418",
        name: "NUMBA",
      },
      {
        id: "9418081",
        regency_id: "9418",
        name: "KAI",
      },
      {
        id: "9418090",
        regency_id: "9418",
        name: "DUNDU",
      },
      {
        id: "9418100",
        regency_id: "9418",
        name: "GUNDAGI",
      },
      {
        id: "9418110",
        regency_id: "9418",
        name: "TIMORI",
      },
      {
        id: "9418121",
        regency_id: "9418",
        name: "YUNERI",
      },
      {
        id: "9418125",
        regency_id: "9418",
        name: "TAGIME",
      },
      {
        id: "9418126",
        regency_id: "9418",
        name: "DANIME",
      },
      {
        id: "9418127",
        regency_id: "9418",
        name: "YUKO",
      },
      {
        id: "9418541",
        regency_id: "9418",
        name: "TELENGGEME",
      },
      {
        id: "9418542",
        regency_id: "9418",
        name: "GIKA",
      },
      {
        id: "9418543",
        regency_id: "9418",
        name: "TAGINERI",
      },
      {
        id: "9419021",
        regency_id: "9419",
        name: "PANTAI TIMUR BAGIAN BARAT",
      },
      {
        id: "9419022",
        regency_id: "9419",
        name: "PANTAI TIMUR",
      },
      {
        id: "9419024",
        regency_id: "9419",
        name: "SUNGAI BIRI",
      },
      {
        id: "9419025",
        regency_id: "9419",
        name: "VEEN",
      },
      {
        id: "9419031",
        regency_id: "9419",
        name: "BONGGO",
      },
      {
        id: "9419032",
        regency_id: "9419",
        name: "BONGGO TIMUR",
      },
      {
        id: "9419033",
        regency_id: "9419",
        name: "BONGGO BARAT",
      },
      {
        id: "9419040",
        regency_id: "9419",
        name: "TOR ATAS",
      },
      {
        id: "9419041",
        regency_id: "9419",
        name: "ISMARI",
      },
      {
        id: "9419050",
        regency_id: "9419",
        name: "SARMI",
      },
      {
        id: "9419051",
        regency_id: "9419",
        name: "SARMI TIMUR",
      },
      {
        id: "9419052",
        regency_id: "9419",
        name: "SARMI SELATAN",
      },
      {
        id: "9419053",
        regency_id: "9419",
        name: "SOBEY",
      },
      {
        id: "9419054",
        regency_id: "9419",
        name: "MUARA TOR",
      },
      {
        id: "9419055",
        regency_id: "9419",
        name: "VERKAM",
      },
      {
        id: "9419060",
        regency_id: "9419",
        name: "PANTAI BARAT",
      },
      {
        id: "9419061",
        regency_id: "9419",
        name: "APAWER HULU",
      },
      {
        id: "9419062",
        regency_id: "9419",
        name: "APAWER HILIR",
      },
      {
        id: "9419063",
        regency_id: "9419",
        name: "APAWER TENGAH",
      },
      {
        id: "9420010",
        regency_id: "9420",
        name: "WEB",
      },
      {
        id: "9420011",
        regency_id: "9420",
        name: "TOWE",
      },
      {
        id: "9420012",
        regency_id: "9420",
        name: "YAFFI",
      },
      {
        id: "9420020",
        regency_id: "9420",
        name: "SENGGI",
      },
      {
        id: "9420021",
        regency_id: "9420",
        name: "KAISENAR",
      },
      {
        id: "9420030",
        regency_id: "9420",
        name: "WARIS",
      },
      {
        id: "9420040",
        regency_id: "9420",
        name: "ARSO",
      },
      {
        id: "9420041",
        regency_id: "9420",
        name: "ARSO TIMUR",
      },
      {
        id: "9420042",
        regency_id: "9420",
        name: "ARSO BARAT",
      },
      {
        id: "9420043",
        regency_id: "9420",
        name: "MANNEM",
      },
      {
        id: "9420050",
        regency_id: "9420",
        name: "SKANTO",
      },
      {
        id: "9426010",
        regency_id: "9426",
        name: "WAROPEN BAWAH",
      },
      {
        id: "9426011",
        regency_id: "9426",
        name: "INGGERUS",
      },
      {
        id: "9426012",
        regency_id: "9426",
        name: "UREI FAISEI",
      },
      {
        id: "9426013",
        regency_id: "9426",
        name: "OUDATE",
      },
      {
        id: "9426014",
        regency_id: "9426",
        name: "WAPOGA",
      },
      {
        id: "9426020",
        regency_id: "9426",
        name: "MASIREI",
      },
      {
        id: "9426021",
        regency_id: "9426",
        name: "RISEI SAYATI",
      },
      {
        id: "9426022",
        regency_id: "9426",
        name: "DEMBA",
      },
      {
        id: "9426023",
        regency_id: "9426",
        name: "SOYOI MAMBAI",
      },
      {
        id: "9426024",
        regency_id: "9426",
        name: "WONTI",
      },
      {
        id: "9426030",
        regency_id: "9426",
        name: "WALANI",
      },
      {
        id: "9426040",
        regency_id: "9426",
        name: "KIRIHI",
      },
      {
        id: "9427010",
        regency_id: "9427",
        name: "SUPIORI SELATAN",
      },
      {
        id: "9427011",
        regency_id: "9427",
        name: "KEPULAUAN ARURI",
      },
      {
        id: "9427020",
        regency_id: "9427",
        name: "SUPIORI UTARA",
      },
      {
        id: "9427021",
        regency_id: "9427",
        name: "SUPIORI BARAT",
      },
      {
        id: "9427030",
        regency_id: "9427",
        name: "SUPIORI TIMUR",
      },
      {
        id: "9428030",
        regency_id: "9428",
        name: "WAROPEN ATAS",
      },
      {
        id: "9428031",
        regency_id: "9428",
        name: "BENUKI",
      },
      {
        id: "9428032",
        regency_id: "9428",
        name: "SAWAI",
      },
      {
        id: "9428040",
        regency_id: "9428",
        name: "MAMBERAMO ILIR",
      },
      {
        id: "9428050",
        regency_id: "9428",
        name: "MAMBERAMO TENGAH",
      },
      {
        id: "9428051",
        regency_id: "9428",
        name: "IWASO",
      },
      {
        id: "9428060",
        regency_id: "9428",
        name: "MAMBERAMO TENGAH TIMUR",
      },
      {
        id: "9428070",
        regency_id: "9428",
        name: "ROFAER",
      },
      {
        id: "9428080",
        regency_id: "9428",
        name: "MAMBERAMO ULU",
      },
      {
        id: "9429010",
        regency_id: "9429",
        name: "WOSAK",
      },
      {
        id: "9429011",
        regency_id: "9429",
        name: "MOBA",
      },
      {
        id: "9429012",
        regency_id: "9429",
        name: "PIJA",
      },
      {
        id: "9429013",
        regency_id: "9429",
        name: "KORA",
      },
      {
        id: "9429020",
        regency_id: "9429",
        name: "KENYAM",
      },
      {
        id: "9429021",
        regency_id: "9429",
        name: "MBUWA TENGAH",
      },
      {
        id: "9429022",
        regency_id: "9429",
        name: "KREPKURI",
      },
      {
        id: "9429023",
        regency_id: "9429",
        name: "EMBETPEM",
      },
      {
        id: "9429030",
        regency_id: "9429",
        name: "GESELMA",
      },
      {
        id: "9429031",
        regency_id: "9429",
        name: "KILMID",
      },
      {
        id: "9429032",
        regency_id: "9429",
        name: "YENGGELO",
      },
      {
        id: "9429033",
        regency_id: "9429",
        name: "ALAMA",
      },
      {
        id: "9429034",
        regency_id: "9429",
        name: "MEBOROK",
      },
      {
        id: "9429040",
        regency_id: "9429",
        name: "MAPENDUMA",
      },
      {
        id: "9429041",
        regency_id: "9429",
        name: "KROPTAK",
      },
      {
        id: "9429042",
        regency_id: "9429",
        name: "PARO",
      },
      {
        id: "9429043",
        regency_id: "9429",
        name: "KEGAYEM",
      },
      {
        id: "9429050",
        regency_id: "9429",
        name: "MUGI",
      },
      {
        id: "9429051",
        regency_id: "9429",
        name: "YAL",
      },
      {
        id: "9429052",
        regency_id: "9429",
        name: "MAM",
      },
      {
        id: "9429060",
        regency_id: "9429",
        name: "YIGI",
      },
      {
        id: "9429061",
        regency_id: "9429",
        name: "DAL",
      },
      {
        id: "9429062",
        regency_id: "9429",
        name: "NIRKURI",
      },
      {
        id: "9429063",
        regency_id: "9429",
        name: "INIKGAL",
      },
      {
        id: "9429070",
        regency_id: "9429",
        name: "MBUWA",
      },
      {
        id: "9429071",
        regency_id: "9429",
        name: "INIYE",
      },
      {
        id: "9429072",
        regency_id: "9429",
        name: "WUTPAGA",
      },
      {
        id: "9429073",
        regency_id: "9429",
        name: "NENGGEANGIN",
      },
      {
        id: "9429074",
        regency_id: "9429",
        name: "MBULMU YALMA",
      },
      {
        id: "9429080",
        regency_id: "9429",
        name: "GEAREK",
      },
      {
        id: "9429081",
        regency_id: "9429",
        name: "PASIR PUTIH",
      },
      {
        id: "9429082",
        regency_id: "9429",
        name: "WUSI",
      },
      {
        id: "9430010",
        regency_id: "9430",
        name: "MAKKI",
      },
      {
        id: "9430011",
        regency_id: "9430",
        name: "GUPURA",
      },
      {
        id: "9430012",
        regency_id: "9430",
        name: "KOLAWA",
      },
      {
        id: "9430013",
        regency_id: "9430",
        name: "GELOK BEAM",
      },
      {
        id: "9430014",
        regency_id: "9430",
        name: "AWINA",
      },
      {
        id: "9430020",
        regency_id: "9430",
        name: "PIRIME",
      },
      {
        id: "9430021",
        regency_id: "9430",
        name: "BUGUK GONA",
      },
      {
        id: "9430022",
        regency_id: "9430",
        name: "MILIMBO",
      },
      {
        id: "9430023",
        regency_id: "9430",
        name: "GOLLO",
      },
      {
        id: "9430024",
        regency_id: "9430",
        name: "WIRINGGABUT",
      },
      {
        id: "9430030",
        regency_id: "9430",
        name: "TIOM",
      },
      {
        id: "9430031",
        regency_id: "9430",
        name: "NOGI",
      },
      {
        id: "9430032",
        regency_id: "9430",
        name: "MOKONI",
      },
      {
        id: "9430033",
        regency_id: "9430",
        name: "NINAME",
      },
      {
        id: "9430034",
        regency_id: "9430",
        name: "YIGINUA",
      },
      {
        id: "9430035",
        regency_id: "9430",
        name: "TIOM OLLO",
      },
      {
        id: "9430036",
        regency_id: "9430",
        name: "YUGUNWI",
      },
      {
        id: "9430037",
        regency_id: "9430",
        name: "LANNYNA",
      },
      {
        id: "9430040",
        regency_id: "9430",
        name: "BALINGGA",
      },
      {
        id: "9430041",
        regency_id: "9430",
        name: "BALINGGA BARAT",
      },
      {
        id: "9430042",
        regency_id: "9430",
        name: "BRUWA",
      },
      {
        id: "9430043",
        regency_id: "9430",
        name: "AYUMNATI",
      },
      {
        id: "9430050",
        regency_id: "9430",
        name: "KUYAWAGE",
      },
      {
        id: "9430051",
        regency_id: "9430",
        name: "WANO BARAT",
      },
      {
        id: "9430060",
        regency_id: "9430",
        name: "MALAGAINERI",
      },
      {
        id: "9430061",
        regency_id: "9430",
        name: "MELAGAI",
      },
      {
        id: "9430070",
        regency_id: "9430",
        name: "TIOMNERI",
      },
      {
        id: "9430071",
        regency_id: "9430",
        name: "WEREKA",
      },
      {
        id: "9430080",
        regency_id: "9430",
        name: "DIMBA",
      },
      {
        id: "9430081",
        regency_id: "9430",
        name: "KELULOME",
      },
      {
        id: "9430082",
        regency_id: "9430",
        name: "NIKOGWE",
      },
      {
        id: "9430090",
        regency_id: "9430",
        name: "GAMELIA",
      },
      {
        id: "9430091",
        regency_id: "9430",
        name: "KARU",
      },
      {
        id: "9430092",
        regency_id: "9430",
        name: "YILUK",
      },
      {
        id: "9430093",
        regency_id: "9430",
        name: "GUNA",
      },
      {
        id: "9430100",
        regency_id: "9430",
        name: "POGA",
      },
      {
        id: "9430101",
        regency_id: "9430",
        name: "MUARA",
      },
      {
        id: "9431010",
        regency_id: "9431",
        name: "KOBAKMA",
      },
      {
        id: "9431020",
        regency_id: "9431",
        name: "ILUGWA",
      },
      {
        id: "9431030",
        regency_id: "9431",
        name: "KELILA",
      },
      {
        id: "9431040",
        regency_id: "9431",
        name: "ERAGAYAM",
      },
      {
        id: "9431050",
        regency_id: "9431",
        name: "MEGAMBILIS",
      },
      {
        id: "9432010",
        regency_id: "9432",
        name: "WELAREK",
      },
      {
        id: "9432020",
        regency_id: "9432",
        name: "APALAPSILI",
      },
      {
        id: "9432030",
        regency_id: "9432",
        name: "ABENAHO",
      },
      {
        id: "9432040",
        regency_id: "9432",
        name: "ELELIM",
      },
      {
        id: "9432050",
        regency_id: "9432",
        name: "BENAWA",
      },
      {
        id: "9433010",
        regency_id: "9433",
        name: "AGADUGUME",
      },
      {
        id: "9433011",
        regency_id: "9433",
        name: "LAMBEWI",
      },
      {
        id: "9433012",
        regency_id: "9433",
        name: "ONERI",
      },
      {
        id: "9433020",
        regency_id: "9433",
        name: "GOME",
      },
      {
        id: "9433021",
        regency_id: "9433",
        name: "AMUNGKALPIA",
      },
      {
        id: "9433022",
        regency_id: "9433",
        name: "GOME UTARA",
      },
      {
        id: "9433023",
        regency_id: "9433",
        name: "ERELMAKAWIA",
      },
      {
        id: "9433030",
        regency_id: "9433",
        name: "ILAGA",
      },
      {
        id: "9433031",
        regency_id: "9433",
        name: "ILAGA UTARA",
      },
      {
        id: "9433032",
        regency_id: "9433",
        name: "MABUGI",
      },
      {
        id: "9433033",
        regency_id: "9433",
        name: "OMUKIA",
      },
      {
        id: "9433040",
        regency_id: "9433",
        name: "SINAK",
      },
      {
        id: "9433041",
        regency_id: "9433",
        name: "SINAK BARAT",
      },
      {
        id: "9433042",
        regency_id: "9433",
        name: "MAGEÁBUME",
      },
      {
        id: "9433043",
        regency_id: "9433",
        name: "YUGUMUAK",
      },
      {
        id: "9433050",
        regency_id: "9433",
        name: "POGOMA",
      },
      {
        id: "9433051",
        regency_id: "9433",
        name: "KEMBRU",
      },
      {
        id: "9433052",
        regency_id: "9433",
        name: "BINA",
      },
      {
        id: "9433060",
        regency_id: "9433",
        name: "WANGBE",
      },
      {
        id: "9433061",
        regency_id: "9433",
        name: "OGAMANIM",
      },
      {
        id: "9433070",
        regency_id: "9433",
        name: "BEOGA",
      },
      {
        id: "9433071",
        regency_id: "9433",
        name: "BEOGA BARAT",
      },
      {
        id: "9433072",
        regency_id: "9433",
        name: "BEOGA TIMUR",
      },
      {
        id: "9433080",
        regency_id: "9433",
        name: "DOUFO",
      },
      {
        id: "9433081",
        regency_id: "9433",
        name: "DERVOS",
      },
      {
        id: "9434010",
        regency_id: "9434",
        name: "SUKIKAI SELATAN",
      },
      {
        id: "9434020",
        regency_id: "9434",
        name: "PIYAIYE",
      },
      {
        id: "9434030",
        regency_id: "9434",
        name: "MAPIA BARAT",
      },
      {
        id: "9434040",
        regency_id: "9434",
        name: "MAPIA TENGAH",
      },
      {
        id: "9434050",
        regency_id: "9434",
        name: "MAPIA",
      },
      {
        id: "9434060",
        regency_id: "9434",
        name: "DOGIYAI",
      },
      {
        id: "9434070",
        regency_id: "9434",
        name: "KAMU SELATAN",
      },
      {
        id: "9434080",
        regency_id: "9434",
        name: "KAMU",
      },
      {
        id: "9434090",
        regency_id: "9434",
        name: "KAMU TIMUR",
      },
      {
        id: "9434100",
        regency_id: "9434",
        name: "KAMU UTARA",
      },
      {
        id: "9435010",
        regency_id: "9435",
        name: "HOMEYO",
      },
      {
        id: "9435020",
        regency_id: "9435",
        name: "SUGAPA",
      },
      {
        id: "9435030",
        regency_id: "9435",
        name: "HITADIPA",
      },
      {
        id: "9435040",
        regency_id: "9435",
        name: "AGISIGA",
      },
      {
        id: "9435050",
        regency_id: "9435",
        name: "BIANDOGA",
      },
      {
        id: "9435060",
        regency_id: "9435",
        name: "WANDAI",
      },
      {
        id: "9436010",
        regency_id: "9436",
        name: "KAPIRAYA",
      },
      {
        id: "9436020",
        regency_id: "9436",
        name: "TIGI BARAT",
      },
      {
        id: "9436030",
        regency_id: "9436",
        name: "TIGI",
      },
      {
        id: "9436040",
        regency_id: "9436",
        name: "TIGI TIMUR",
      },
      {
        id: "9436050",
        regency_id: "9436",
        name: "BOWOBADO",
      },
      {
        id: "9471010",
        regency_id: "9471",
        name: "MUARA TAMI",
      },
      {
        id: "9471020",
        regency_id: "9471",
        name: "ABEPURA",
      },
      {
        id: "9471021",
        regency_id: "9471",
        name: "HERAM",
      },
      {
        id: "9471030",
        regency_id: "9471",
        name: "JAYAPURA SELATAN",
      },
      {
        id: "9471040",
        regency_id: "9471",
        name: "JAYAPURA UTARA",
      },
    ]);
  }
}

module.exports = DistrictSeeder;
