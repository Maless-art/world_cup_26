document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enterBtn");
  const cover = document.getElementById("cover");
  const app = document.getElementById("app");
  const sound = document.getElementById("goalSound");
  const continueBtn = document.getElementById("continueBtn");

  const favoritesScreen = document.getElementById("favoritesScreen");
  const groupsScreen = document.getElementById("groupsScreen");
  const groupDetailScreen = document.getElementById("groupDetailScreen");

  const backToGroupsBtn = document.getElementById("backToGroupsBtn");
  const viewStandingsBtn = document.getElementById("viewStandingsBtn");
  const backToTopBtn = document.getElementById("backToTopBtn");

  const groupDetailTitle = document.getElementById("groupDetailTitle");
  const groupTeamsHeader = document.getElementById("groupTeamsHeader");
  const matchesTableBody = document.getElementById("matchesTableBody");
  const standingsSection = document.getElementById("standingsSection");
const nextBtn = document.getElementById("nextRoundBtn");
const knockoutScreen = document.getElementById('knockoutScreen');
const knockoutRounds = document.getElementById('knockoutRounds');
const backToGroupsFromKnockoutBtn = document.getElementById('backToGroupsFromKnockoutBtn');


  const allTeams = [
    { name: "Canadá", code: "ca" },
    { name: "México", code: "mx" },
    { name: "Estados Unidos", code: "us" },
    { name: "Panamá", code: "pa" },
    { name: "Curazao", code: "cw" },
    { name: "Haití", code: "ht" },
    { name: "Argentina", code: "ar" },
    { name: "Brasil", code: "br" },
    { name: "Colombia", code: "co" },
    { name: "Ecuador", code: "ec" },
    { name: "Paraguay", code: "py" },
    { name: "Uruguay", code: "uy" },
    { name: "Alemania", code: "de" },
    { name: "Austria", code: "at" },
    { name: "Bélgica", code: "be" },
    { name: "Bosnia y Herzegovina", code: "ba" },
    { name: "Croacia", code: "hr" },
    { name: "Escocia", code: "gb-sct" },
    { name: "España", code: "es" },
    { name: "Francia", code: "fr" },
    { name: "Inglaterra", code: "gb-eng" },
    { name: "Noruega", code: "no" },
    { name: "Países Bajos", code: "nl" },
    { name: "Portugal", code: "pt" },
    { name: "R. Checa", code: "cz" },
    { name: "Suecia", code: "se" },
    { name: "Suiza", code: "ch" },
    { name: "Turquía", code: "tr" },
    { name: "Argelia", code: "dz" },
    { name: "Cabo Verde", code: "cv" },
    { name: "Costa de Marfil", code: "ci" },
    { name: "Egipto", code: "eg" },
    { name: "Ghana", code: "gh" },
    { name: "Marruecos", code: "ma" },
    { name: "RD Congo", code: "cd" },
    { name: "Senegal", code: "sn" },
    { name: "Sudáfrica", code: "za" },
    { name: "Túnez", code: "tn" },
    { name: "Arabia Saudí", code: "sa" },
    { name: "Australia", code: "au" },
    { name: "Irak", code: "iq" },
    { name: "Irán", code: "ir" },
    { name: "Japón", code: "jp" },
    { name: "Jordania", code: "jo" },
    { name: "Catar", code: "qa" },
    { name: "Corea del Sur", code: "kr" },
    { name: "Uzbekistán", code: "uz" },
    { name: "Nueva Zelanda", code: "nz" }
  ];

const stadiumData = {
  // MÉXICO
  "Mexico City Stadium": { city: "Ciudad de México", tz: "America/Mexico_City", label: "Estadio Azteca" },
  "Estadio Ciudad de México": { city: "Ciudad de México", tz: "America/Mexico_City", label: "Estadio Azteca" },
  "Estadio Azteca": { city: "Ciudad de México", tz: "America/Mexico_City", label: "Estadio Azteca" },

  "Guadalajara Stadium": { city: "Guadalajara", tz: "America/Mexico_City", label: "Estadio Akron" },
  "Estadio de Guadalajara": { city: "Guadalajara", tz: "America/Mexico_City", label: "Estadio Akron" },
  "Estadio Guadalajara": { city: "Guadalajara", tz: "America/Mexico_City", label: "Estadio Akron" },
  "Estadio Akron": { city: "Guadalajara", tz: "America/Mexico_City", label: "Estadio Akron" },

  "Monterrey Stadium": { city: "Monterrey", tz: "America/Monterrey", label: "Estadio Monterrey (BBVA)" },
  "Estadio de Monterrey": { city: "Monterrey", tz: "America/Monterrey", label: "Estadio Monterrey (BBVA)" },
  "Estadio Monterrey": { city: "Monterrey", tz: "America/Monterrey", label: "Estadio Monterrey (BBVA)" },
  "Estadio Monterrey (BBVA)": { city: "Monterrey", tz: "America/Monterrey", label: "Estadio Monterrey (BBVA)" },

  // CANADÁ
  "Toronto Stadium": { city: "Toronto", tz: "America/Toronto", label: "Estadio de Toronto" },
  "Estadio de Toronto": { city: "Toronto", tz: "America/Toronto", label: "Estadio de Toronto" },

  "Vancouver Stadium": { city: "Vancouver", tz: "America/Vancouver", label: "Estadio BC Place Vancouver" },
  "BC Place Vancouver Stadium": { city: "Vancouver", tz: "America/Vancouver", label: "Estadio BC Place Vancouver" },
  "Estadio BC Place Vancouver": { city: "Vancouver", tz: "America/Vancouver", label: "Estadio BC Place Vancouver" },

  // EE. UU. - EASTERN
  "Boston Stadium": { city: "Boston", tz: "America/New_York", label: "Estadio de Boston" },
  "Estadio de Boston": { city: "Boston", tz: "America/New_York", label: "Estadio de Boston" },

  "New York New Jersey Stadium": { city: "Nueva York", tz: "America/New_York", label: "Estadio Nueva York/Nueva Jersey" },
  "New York/New Jersey Stadium": { city: "Nueva York", tz: "America/New_York", label: "Estadio Nueva York/Nueva Jersey" },
  "Estadio Nueva York/Nueva Jersey": { city: "Nueva York", tz: "America/New_York", label: "Estadio Nueva York/Nueva Jersey" },

  "Philadelphia Stadium": { city: "Filadelfia", tz: "America/New_York", label: "Estadio de Filadelfia" },
  "Estadio de Filadelfia": { city: "Filadelfia", tz: "America/New_York", label: "Estadio de Filadelfia" },

  "Miami Stadium": { city: "Miami", tz: "America/New_York", label: "Estadio de Miami" },
  "Estadio de Miami": { city: "Miami", tz: "America/New_York", label: "Estadio de Miami" },

  "Atlanta Stadium": { city: "Atlanta", tz: "America/New_York", label: "Estadio de Atlanta" },
  "Estadio de Atlanta": { city: "Atlanta", tz: "America/New_York", label: "Estadio de Atlanta" },

  // EE. UU. - CENTRAL
  "Houston Stadium": { city: "Houston", tz: "America/Chicago", label: "Estadio de Houston" },
  "Estadio de Houston": { city: "Houston", tz: "America/Chicago", label: "Estadio de Houston" },

  "Dallas Stadium": { city: "Dallas", tz: "America/Chicago", label: "Estadio de Dallas" },
  "Estadio de Dallas": { city: "Dallas", tz: "America/Chicago", label: "Estadio de Dallas" },

  "Kansas City Stadium": { city: "Kansas City", tz: "America/Chicago", label: "Estadio de Kansas City" },
  "Estadio de Kansas City": { city: "Kansas City", tz: "America/Chicago", label: "Estadio de Kansas City" },

  // EE. UU. - PACIFIC
  "Seattle Stadium": { city: "Seattle", tz: "America/Los_Angeles", label: "Estadio de Seattle" },
  "Estadio de Seattle": { city: "Seattle", tz: "America/Los_Angeles", label: "Estadio de Seattle" },

  "Los Angeles Stadium": { city: "Los Ángeles", tz: "America/Los_Angeles", label: "Estadio Los Ángeles" },
  "Estadio de Los Ángeles": { city: "Los Ángeles", tz: "America/Los_Angeles", label: "Estadio Los Ángeles" },
  "Estadio Los Ángeles": { city: "Los Ángeles", tz: "America/Los_Angeles", label: "Estadio Los Ángeles" },

  "San Francisco Bay Area Stadium": { city: "San Francisco", tz: "America/Los_Angeles", label: "Estadio de la Bahía de San Francisco" },
  "Bay Area Stadium": { city: "San Francisco", tz: "America/Los_Angeles", label: "Estadio de la Bahía de San Francisco" },
  "Estadio de la Bahía de San Francisco": { city: "San Francisco", tz: "America/Los_Angeles", label: "Estadio de la Bahía de San Francisco" },
"Estadio de Nueva York/Nueva Jersey": { city: "Nueva York", tz: "America/New_York", label: "Estadio Nueva York/Nueva Jersey" },
"Estadio de Ciudad de México": { city: "Ciudad de México", tz: "America/Mexico_City", label: "Estadio Azteca" },
"Estadio de Toronto": { city: "Toronto", tz: "America/Toronto", label: "Estadio de Toronto" },
"Estadio de Vancouver": { city: "Vancouver", tz: "America/Vancouver", label: "Estadio BC Place Vancouver" }
};

  const groupsData = {
    A: ["México", "Sudáfrica", "Corea del Sur", "R. Checa"],
    B: ["Canadá", "Bosnia y Herzegovina", "Catar", "Suiza"],
    C: ["Brasil", "Marruecos", "Haití", "Escocia"],
    D: ["Estados Unidos", "Paraguay", "Australia", "Turquía"],
    E: ["Alemania", "Curazao", "Costa de Marfil", "Ecuador"],
    F: ["Países Bajos", "Japón", "Suecia", "Túnez"],
    G: ["Bélgica", "Egipto", "Irán", "Nueva Zelanda"],
    H: ["España", "Cabo Verde", "Arabia Saudí", "Uruguay"],
    I: ["Francia", "Senegal", "Irak", "Noruega"],
    J: ["Argentina", "Argelia", "Austria", "Jordania"],
    K: ["Portugal", "RD Congo", "Uzbekistán", "Colombia"],
    L: ["Inglaterra", "Croacia", "Ghana", "Panamá"]
  };

const thirdPlaceMap = {
  "BCDEGIJL": {
    "1A": "3E",
    "1B": "3G",
    "1D": "3B",
    "1E": "3C",
    "1G": "3J",
    "1I": "3D",
    "1K": "3L",
    "1L": "3I"
  }
};


  const matchesByGroup = {
A: [
  {
    date: "11/06/2026",
    time: "14:00",
    stadium: "Mexico City Stadium",
    home: "México",
    away: "Sudáfrica",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "11/06/2026",
    time: "21:00",
    stadium: "Guadalajara Stadium",
    home: "Corea del Sur",
    away: "R. Checa",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "18/06/2026",
    time: "11:00",
    stadium: "Atlanta Stadium",
    home: "R. Checa",
    away: "Sudáfrica",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "18/06/2026",
    time: "20:00",
    stadium: "Guadalajara Stadium",
    home: "México",
    away: "Corea del Sur",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "24/06/2026",
    time: "20:00",
    stadium: "Monterrey Stadium",
    home: "Sudáfrica",
    away: "Corea del Sur",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "24/06/2026",
    time: "20:00",
    stadium: "Mexico City Stadium",
    home: "R. Checa",
    away: "México",
    homeGoals: "",
    awayGoals: ""
  }
],

B: [
  {
    date: "12/06/2026",
    time: "14:00",
    stadium: "Estadio de Toronto",
    home: "Canadá",
    away: "Bosnia y Herzegovina",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "13/06/2026",
    time: "14:00",
    stadium: "Estadio de la Bahía de San Francisco",
    home: "Catar",
    away: "Suiza",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "18/06/2026",
    time: "14:00",
    stadium: "Estadio de Los Ángeles",
    home: "Suiza",
    away: "Bosnia y Herzegovina",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "18/06/2026",
    time: "17:00",
    stadium: "Estadio BC Place Vancouver",
    home: "Canadá",
    away: "Catar",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "24/06/2026",
    time: "14:00",
    stadium: "Estadio BC Place Vancouver",
    home: "Suiza",
    away: "Canadá",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "24/06/2026",
    time: "14:00",
    stadium: "Estadio de Seattle",
    home: "Bosnia y Herzegovina",
    away: "Catar",
    homeGoals: "",
    awayGoals: ""
  }
],

C: [
  {
    date: "13/06/2026",
    time: "17:00",
    stadium: "Estadio Nueva York/Nueva Jersey",
    home: "Brasil",
    away: "Marruecos",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "13/06/2026",
    time: "20:00",
    stadium: "Estadio de Boston",
    home: "Haití",
    away: "Escocia",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "19/06/2026",
    time: "17:00",
    stadium: "Estadio de Boston",
    home: "Escocia",
    away: "Marruecos",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "19/06/2026",
    time: "19:30",
    stadium: "Estadio de Filadelfia",
    home: "Brasil",
    away: "Haití",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "24/06/2026",
    time: "17:00",
    stadium: "Estadio de Miami",
    home: "Escocia",
    away: "Brasil",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "24/06/2026",
    time: "17:00",
    stadium: "Estadio de Atlanta",
    home: "Marruecos",
    away: "Haití",
    homeGoals: "",
    awayGoals: ""
  }
],

D: [
  {
    date: "12/06/2026",
    time: "20:00",
    stadium: "Estadio Los Ángeles",
    home: "Estados Unidos",
    away: "Paraguay",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "13/06/2026",
    time: "23:00",
    stadium: "Estadio BC Place Vancouver",
    home: "Australia",
    away: "Turquía",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "19/06/2026",
    time: "14:00",
    stadium: "Estadio de Seattle",
    home: "Estados Unidos",
    away: "Australia",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "19/06/2026",
    time: "22:00",
    stadium: "Estadio de la Bahía de San Francisco",
    home: "Turquía",
    away: "Paraguay",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "25/06/2026",
    time: "21:00",
    stadium: "Estadio Los Ángeles",
    home: "Turquía",
    away: "Estados Unidos",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "25/06/2026",
    time: "21:00",
    stadium: "Estadio de la Bahía de San Francisco",
    home: "Paraguay",
    away: "Australia",
    homeGoals: "",
    awayGoals: ""
  }
],
E: [
  {
    date: "2026-06-14",
    time: "12:00",
    home: "Alemania",
    away: "Curazao",
    stadium: "Estadio de Houston",
    homeGoals: "",
    awayGoals: "",
    city: "Houston",
    tz: "America/Chicago"
  },
  {
    date: "2026-06-14",
    time: "18:00",
    home: "Costa de Marfil",
    away: "Ecuador",
    stadium: "Estadio de Filadelfia",
    city: "Filadelfia",
    homeGoals: "",
    awayGoals: "",
    tz: "America/New_York"
  },
  {
    date: "2026-06-20",
    time: "15:00",
    home: "Alemania",
    away: "Costa de Marfil",
    stadium: "Estadio de Toronto",
    city: "Toronto",
    homeGoals: "",
    awayGoals: "",
    tz: "America/Toronto"
  },
  {
    date: "2026-06-20",
    time: "19:00",
    home: "Ecuador",
    away: "Curazao",
    stadium: "Estadio de Kansas City",
    city: "Kansas City",
    homeGoals: "",
    awayGoals: "",
    tz: "America/Chicago"
  },
  {
    date: "2026-06-25",
    time: "15:00",
    home: "Curazao",
    away: "Costa de Marfil",
    stadium: "Estadio de Filadelfia",
    city: "Filadelfia",
    homeGoals: "",
    awayGoals: "",
    tz: "America/New_York"
  },
  {
    date: "2026-06-25",
    time: "15:00",
    home: "Ecuador",
    away: "Alemania",
    stadium: "Estadio Nueva York/Nueva Jersey",
    city: "Nueva York",
    homeGoals: "",
    awayGoals: "",
    tz: "America/New_York"
  }
],

    F: [
  {
    date: "14/06/2026",
    time: "15:00",
    stadium: "Estadio de Dallas",
    home: "Países Bajos",
    away: "Japón",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "14/06/2026",
    time: "21:00",
    stadium: "Estadio de Monterrey",
    home: "Suecia",
    away: "Túnez",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "20/06/2026",
    time: "12:00",
    stadium: "Estadio de Houston",
    home: "Países Bajos",
    away: "Suecia",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "20/06/2026",
    time: "23:00",
    stadium: "Estadio de Monterrey",
    home: "Túnez",
    away: "Japón",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "25/06/2026",
    time: "18:00",
    stadium: "Estadio de Dallas",
    home: "Japón",
    away: "Suecia",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "25/06/2026",
    time: "18:00",
    stadium: "Estadio de Kansas City",
    home: "Túnez",
    away: "Países Bajos",
    homeGoals: "",
    awayGoals: ""
  }
],
    G: [
  {
    date: "15/06/2026",
    time: "14:00",
    stadium: "Estadio de Seattle",
    home: "Bélgica",
    away: "Egipto",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "15/06/2026",
    time: "20:00",
    stadium: "Estadio Los Ángeles",
    home: "Irán",
    away: "Nueva Zelanda",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "21/06/2026",
    time: "14:00",
    stadium: "Estadio Los Ángeles",
    home: "Bélgica",
    away: "Irán",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "21/06/2026",
    time: "20:00",
    stadium: "Estadio BC Place Vancouver",
    home: "Nueva Zelanda",
    away: "Egipto",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "26/06/2026",
    time: "22:00",
    stadium: "Estadio de Seattle",
    home: "Egipto",
    away: "Irán",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "26/06/2026",
    time: "22:00",
    stadium: "Estadio BC Place Vancouver",
    home: "Nueva Zelanda",
    away: "Bélgica",
    homeGoals: "",
    awayGoals: ""
  }
],
   H: [
  {
    date: "15/06/2026",
    time: "11:00",
    stadium: "Estadio de Atlanta",
    home: "España",
    away: "Cabo Verde",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "15/06/2026",
    time: "17:00",
    stadium: "Estadio de Miami",
    home: "Arabia Saudí",
    away: "Uruguay",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "21/06/2026",
    time: "11:00",
    stadium: "Estadio de Atlanta",
    home: "España",
    away: "Arabia Saudí",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "21/06/2026",
    time: "17:00",
    stadium: "Estadio de Miami",
    home: "Uruguay",
    away: "Cabo Verde",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "26/06/2026",
    time: "19:00",
    stadium: "Estadio de Houston",
    home: "Cabo Verde",
    away: "Arabia Saudí",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "26/06/2026",
    time: "19:00",
    stadium: "Estadio de Guadalajara",
    home: "Uruguay",
    away: "España",
    homeGoals: "",
    awayGoals: ""
  }
],
    I: [
  {
    date: "16/06/2026",
    time: "14:00",
    stadium: "Estadio Nueva York/Nueva Jersey",
    home: "Francia",
    away: "Senegal",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "16/06/2026",
    time: "17:00",
    stadium: "Estadio de Boston",
    home: "Irak",
    away: "Noruega",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "22/06/2026",
    time: "16:00",
    stadium: "Estadio de Filadelfia",
    home: "Francia",
    away: "Irak",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "22/06/2026",
    time: "19:00",
    stadium: "Estadio Nueva York/Nueva Jersey",
    home: "Noruega",
    away: "Senegal",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "26/06/2026",
    time: "14:00",
    stadium: "Estadio de Boston",
    home: "Noruega",
    away: "Francia",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "26/06/2026",
    time: "14:00",
    stadium: "Estadio de Toronto",
    home: "Senegal",
    away: "Irak",
    homeGoals: "",
    awayGoals: ""
  }
],
   J: [
  {
    date: "16/06/2026",
    time: "20:00",
    stadium: "Estadio de Kansas City",
    home: "Argentina",
    away: "Argelia",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "16/06/2026",
    time: "23:00",
    stadium: "Estadio de la Bahía de San Francisco",
    home: "Austria",
    away: "Jordania",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "22/06/2026",
    time: "12:00",
    stadium: "Estadio de Dallas",
    home: "Argentina",
    away: "Austria",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "22/06/2026",
    time: "22:00",
    stadium: "Estadio de la Bahía de San Francisco",
    home: "Jordania",
    away: "Argelia",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "27/06/2026",
    time: "21:00",
    stadium: "Estadio de Kansas City",
    home: "Argelia",
    away: "Austria",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "27/06/2026",
    time: "21:00",
    stadium: "Estadio de Dallas",
    home: "Jordania",
    away: "Argentina",
    homeGoals: "",
    awayGoals: ""
  }
],
    K: [
  {
    date: "17/06/2026",
    time: "12:00",
    stadium: "Estadio de Houston",
    home: "Portugal",
    away: "RD Congo",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "17/06/2026",
    time: "21:00",
    stadium: "Estadio Ciudad de México",
    home: "Uzbekistán",
    away: "Colombia",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "23/06/2026",
    time: "12:00",
    stadium: "Estadio de Houston",
    home: "Portugal",
    away: "Uzbekistán",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "23/06/2026",
    time: "21:00",
    stadium: "Estadio de Guadalajara",
    home: "Colombia",
    away: "RD Congo",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "27/06/2026",
    time: "18:30",
    stadium: "Estadio de Miami",
    home: "Colombia",
    away: "Portugal",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "27/06/2026",
    time: "18:30",
    stadium: "Estadio de Atlanta",
    home: "RD Congo",
    away: "Uzbekistán",
    homeGoals: "",
    awayGoals: ""
  }
],
    L: [
  {
    date: "17/06/2026",
    time: "15:00",
    stadium: "Estadio de Dallas",
    home: "Inglaterra",
    away: "Croacia",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "17/06/2026",
    time: "18:00",
    stadium: "Estadio de Toronto",
    home: "Ghana",
    away: "Panamá",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "23/06/2026",
    time: "15:00",
    stadium: "Estadio de Boston",
    home: "Inglaterra",
    away: "Ghana",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "23/06/2026",
    time: "18:00",
    stadium: "Estadio de Toronto",
    home: "Panamá",
    away: "Croacia",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "27/06/2026",
    time: "16:00",
    stadium: "Estadio Nueva York/Nueva Jersey",
    home: "Panamá",
    away: "Inglaterra",
    homeGoals: "",
    awayGoals: ""
  },
  {
    date: "27/06/2026",
    time: "16:00",
    stadium: "Estadio de Filadelfia",
    home: "Croacia",
    away: "Ghana",
    homeGoals: "",
    awayGoals: ""
  }
],
  };
const knockoutTemplate = {
  roundOf32: [
    { code: "P73", date: "28/06/2026", time: "14:00", homeRef: "2A", awayRef: "2B" },
    { code: "P74", date: "29/06/2026", time: "15:30", homeRef: "1E", awayRef: "3ABCDF" },
    { code: "P75", date: "29/06/2026", time: "20:00", homeRef: "1F", awayRef: "2C" },
    { code: "P76", date: "29/06/2026", time: "12:00", homeRef: "1C", awayRef: "2F" },
    { code: "P77", date: "30/06/2026", time: "16:00", homeRef: "1I", awayRef: "3CDFGH" },
    { code: "P78", date: "30/06/2026", time: "12:00", homeRef: "2E", awayRef: "2I" },
    { code: "P79", date: "30/06/2026", time: "20:00", homeRef: "1A", awayRef: "3CEFHI" },
    { code: "P80", date: "01/07/2026", time: "11:00", homeRef: "1L", awayRef: "3EHIJK" },
    { code: "P81", date: "01/07/2026", time: "19:00", homeRef: "1D", awayRef: "3BEFIJ" },
    { code: "P82", date: "01/07/2026", time: "15:00", homeRef: "1G", awayRef: "3AEHIJ" },
    { code: "P83", date: "02/07/2026", time: "18:00", homeRef: "2K", awayRef: "2L" },
    { code: "P84", date: "02/07/2026", time: "14:00", homeRef: "1H", awayRef: "2J" },
    { code: "P85", date: "02/07/2026", time: "22:00", homeRef: "1B", awayRef: "3EFGIJ" },
    { code: "P86", date: "03/07/2026", time: "17:00", homeRef: "1J", awayRef: "2H" },
    { code: "P87", date: "03/07/2026", time: "20:30", homeRef: "1K", awayRef: "3DEIJL" },
    { code: "P88", date: "03/07/2026", time: "13:00", homeRef: "2D", awayRef: "2G" }
  ],

  roundOf16: [
    { code: "P89",  date: "04/07/2026", time: "16:00", homeRef: "W74", awayRef: "W77" },
    { code: "P90",  date: "04/07/2026", time: "12:00", homeRef: "W73", awayRef: "W75" },
    { code: "P91",  date: "05/07/2026", time: "15:00", homeRef: "W76", awayRef: "W78" },
    { code: "P92",  date: "05/07/2026", time: "19:00", homeRef: "W79", awayRef: "W80" },
    { code: "P93",  date: "06/07/2026", time: "14:00", homeRef: "W83", awayRef: "W84" },
    { code: "P94",  date: "06/07/2026", time: "19:00", homeRef: "W81", awayRef: "W82" },
    { code: "P95",  date: "07/07/2026", time: "11:00", homeRef: "W86", awayRef: "W88" },
    { code: "P96",  date: "07/07/2026", time: "15:00", homeRef: "W85", awayRef: "W87" }
  ],

  quarterFinals: [
    { code: "P97",  date: "09/07/2026", time: "15:00", homeRef: "W89", awayRef: "W90" },
    { code: "P98",  date: "10/07/2026", time: "14:00", homeRef: "W93", awayRef: "W94" },
    { code: "P99",  date: "11/07/2026", time: "16:00", homeRef: "W91", awayRef: "W92" },
    { code: "P100", date: "11/07/2026", time: "20:00", homeRef: "W95", awayRef: "W96" }
  ],

  semiFinals: [
    { code: "P101", date: "14/07/2026", time: "14:00", homeRef: "W97", awayRef: "W98" },
    { code: "P102", date: "15/07/2026", time: "14:00", homeRef: "W99", awayRef: "W100" }
  ],

  thirdPlace: [
    { code: "P103", date: "18/07/2026", time: "16:00", homeRef: "RU101", awayRef: "RU102" }
  ],

  final: [
    { code: "P104", date: "19/07/2026", time: "14:00", homeRef: "W101", awayRef: "W102" }
  ]
};


  const selectedTeams = new Set();
const savedMatches = localStorage.getItem("worldcup_matches");
const savedFavorites = localStorage.getItem("worldcup_favorites");

if (savedMatches) {
  const parsedMatches = JSON.parse(savedMatches);

  Object.keys(matchesByGroup).forEach(group => {
    if (parsedMatches[group] && parsedMatches[group].length) {
      matchesByGroup[group] = parsedMatches[group];
    }
  });
}



if (savedFavorites) {
  const parsedFavorites = JSON.parse(savedFavorites);

  parsedFavorites.forEach(team => {
    selectedTeams.add(team);
  });
}

function validarEstadios() {
  const faltantes = [];

  Object.entries(matchesByGroup).forEach(([grupo, partidos]) => {
    partidos.forEach((match, i) => {
      if (!stadiumData[match.stadium]) {
        faltantes.push({
          grupo,
          partido: i + 1,
          estadio: match.stadium
        });
      }
    });
  });

  if (!faltantes.length) {
    console.log("✅ Todos los estadios de matchesByGroup existen en stadiumData");
  } else {
    console.table(faltantes);
  }
}
validarEstadios();




function saveFavorites() {
  localStorage.setItem("worldcup_favorites", JSON.stringify([...selectedTeams]));
}
function saveMatches() {
  localStorage.setItem("worldcup_matches", JSON.stringify(matchesByGroup));
}
  function getTeamData(teamName) {
    return allTeams.find(t => t.name === teamName);
  }

  function flagUrl(code) {
    return `https://flagcdn.com/w80/${code}.png`;
  }

  function renderTeams() {
    const teamsGrid = document.getElementById("teamsGrid");
    if (!teamsGrid) return;

    teamsGrid.innerHTML = "";

    allTeams.forEach(team => {
      const card = document.createElement("div");
      card.className = "team-card";

      if (selectedTeams.has(team.name)) {
        card.classList.add("selected");
      }

      card.innerHTML = `
        <img class="team-flag" src="${flagUrl(team.code)}" alt="${team.name}">
        <span class="team-name">${team.name}</span>
      `;

     card.addEventListener("click", () => {
  if (selectedTeams.has(team.name)) {
    selectedTeams.delete(team.name);
  } else {
    if (selectedTeams.size >= 3) return;
    selectedTeams.add(team.name);
  }

  saveFavorites();
  renderTeams();
});

      teamsGrid.appendChild(card);
    });

    if (continueBtn) {
      continueBtn.disabled = selectedTeams.size === 0;
    }
  }
function traducirEstadio(nombre) {
  return stadiumData[nombre]?.label || nombre;
}


function parseMatchDate(dateStr) {
  if (dateStr.includes("/")) {
    const [day, month, year] = dateStr.split("/").map(Number);
    return { day, month, year };
  }

  if (dateStr.includes("-")) {
    const [year, month, day] = dateStr.split("-").map(Number);
    return { day, month, year };
  }

  throw new Error("Formato de fecha no soportado: " + dateStr);
}

function getMatchZoneData(match) {
  const stadiumInfo = stadiumData[match.stadium];

  if (!stadiumInfo) {
    console.warn("Estadio no mapeado:", match.stadium);
    return {
      city: "",
      tz: "America/Panama",
      label: match.stadium
    };
  }

  return stadiumInfo;
}

function getOffsetMinutes(timeZone, date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "shortOffset",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).formatToParts(date);

  const tzName = parts.find(p => p.type === "timeZoneName")?.value || "GMT";

  if (tzName === "GMT" || tzName === "UTC") return 0;

  const m = tzName.match(/GMT([+-])(\d{1,2})(?::?(\d{2}))?/);
  if (!m) return 0;

  const sign = m[1] === "-" ? -1 : 1;
  const hours = Number(m[2] || 0);
  const minutes = Number(m[3] || 0);

  return sign * (hours * 60 + minutes);
}

function zonedLocalToUtc(year, month, day, hour, minute, timeZone) {
  const naiveUtcMs = Date.UTC(year, month - 1, day, hour, minute);

  let guess = new Date(naiveUtcMs);
  let offset = getOffsetMinutes(timeZone, guess);
  let utcMs = naiveUtcMs - offset * 60000;

  guess = new Date(utcMs);
  offset = getOffsetMinutes(timeZone, guess);
  utcMs = naiveUtcMs - offset * 60000;

  return new Date(utcMs);
}

function toPanamaDateTime(match) {
  const { tz } = getMatchZoneData(match);
  const { day, month, year } = parseMatchDate(match.date);
  const [hour, minute] = match.time.split(":").map(Number);

  const utcDate = zonedLocalToUtc(year, month, day, hour, minute, tz);

  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "America/Panama",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).formatToParts(utcDate);

  const obj = Object.fromEntries(
    parts.filter(p => p.type !== "literal").map(p => [p.type, p.value])
  );

  return {
    date: `${obj.day}/${obj.month}/${obj.year}`,
    time: `${obj.hour}:${obj.minute}`
  };
}

function renderGroups() {
  const groupsGrid = document.getElementById("groupsGrid");
  if (!groupsGrid) return;

  groupsGrid.innerHTML = "";

  Object.entries(groupsData).forEach(([groupLetter, teams]) => {
    const card = document.createElement("div");
    card.className = "group-card";

    let positionMap = new Map();

    try {
      const standings = calculateStandings(groupLetter);
      positionMap = new Map(
        standings.map((row, index) => [row.team, index + 1])
      );
    } catch (err) {
      console.warn(`No se pudo calcular posiciones del grupo ${groupLetter}`, err);
    }

    const body = teams.map(teamName => {
      const team = getTeamData(teamName);
      const isFavorite = selectedTeams.has(teamName);
      const pos = positionMap.get(teamName);

      return `
        <div class="group-team-row">
          <img class="group-flag" src="${flagUrl(team.code)}" alt="${teamName}">
        <span class="group-team-name">${teamName}</span>
${isFavorite ? '<span class="favorite-star">★</span>' : ""}
${pos ? `<span class="group-position ${pos <= 2 ? 'qualified' : ''}">${pos}</span>` : ""}
        </div>
      `;
    }).join("");

    card.innerHTML = `
      <div class="group-card-head">GRUPO ${groupLetter}</div>
      <div class="group-card-body">${body}</div>
    `;

    card.addEventListener("click", () => {
      openGroupDetail(groupLetter);
    });

    groupsGrid.appendChild(card);
  });
}

 function calculateStandings(groupLetter) {
  const teams = groupsData[groupLetter];
 const matches = matchesByGroup[groupLetter] || [];

  const table = {};

  teams.forEach(team => {
    table[team] = {
      team,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      gc: 0,
      dg: 0,
      pts: 0
    };
  });

  matches.forEach(match => {
    const hasHome = match.homeGoals !== "" && match.homeGoals !== null;
    const hasAway = match.awayGoals !== "" && match.awayGoals !== null;

    if (!hasHome || !hasAway) return;

    const home = table[match.home];
    const away = table[match.away];

    if (!home || !away) {
      console.warn("Equipo no encontrado en groupsData:", {
        grupo: groupLetter,
        home: match.home,
        away: match.away
      });
      return;
    }

    const hg = Number(match.homeGoals) || 0;
    const ag = Number(match.awayGoals) || 0;

    home.played++;
    away.played++;

    home.gf += hg;
    home.gc += ag;
    away.gf += ag;
    away.gc += hg;

    if (hg > ag) {
      home.won++;
      away.lost++;
      home.pts += 3;
    } else if (hg < ag) {
      away.won++;
      home.lost++;
      away.pts += 3;
    } else {
      home.drawn++;
      away.drawn++;
      home.pts += 1;
      away.pts += 1;
    }
  });

  Object.values(table).forEach(team => {
    team.dg = team.gf - team.gc;
  });

  return Object.values(table).sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.dg !== a.dg) return b.dg - a.dg;
    if (b.gf !== a.gf) return b.gf - a.gf;
    return a.team.localeCompare(b.team);
  });
}

function getThirdAssignments(thirdTeams) {
  const key = getThirdCombination(thirdTeams);
  return thirdPlaceMap[key] || null;
}
function getThirdTeamBySlot(ref) {
  const thirdTeams = getBestThirdPlacedTeams();
  const assignments = getThirdAssignments(thirdTeams);

  if (!assignments) return null;

  const slotOwners = {
    "3CEFHI": "1A",
    "3EFGIJ": "1B",
    "3BEFIJ": "1D",
    "3ABCDF": "1E",
    "3AEHIJ": "1G",
    "3CDFGH": "1I",
    "3DEIJL": "1K",
    "3EHIJK": "1L"
  };

  const owner = slotOwners[ref];
  if (!owner) return null;

  const assignedThirdCode = assignments[owner];
  if (!assignedThirdCode) return null;

  return thirdTeams.find(t => "3" + t.group === assignedThirdCode)?.team || null;
}

function getThirdCombination(thirdTeams) {
  return thirdTeams
    .map(t => t.group)   // A, B, C...
    .sort()
    .join("");
}


function getBestThirdPlacedTeams() {
  const thirdPlaced = [];

  Object.keys(groupsData).forEach(groupLetter => {
    const standings = calculateStandings(groupLetter);

    if (standings.length >= 3) {
      thirdPlaced.push({
        ...standings[2],
        group: groupLetter
      });
    }
  });

  thirdPlaced.sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.dg !== a.dg) return b.dg - a.dg;
    if (b.gf !== a.gf) return b.gf - a.gf;
    return a.team.localeCompare(b.team);
  });

  return thirdPlaced.slice(0, 8);
}


function debugBestThirds() {
  const bestThirds = getBestThirdPlacedTeams();

  console.log("=== MEJORES TERCEROS ===");
  bestThirds.forEach((team, index) => {
    console.log(
      `${index + 1}. ${team.team} (${team.group}) | PTS: ${team.pts} | DG: ${team.dg} | GF: ${team.gf}`
    );
  });
}

function getBestThirdGroupsKey() {
  const bestThirds = getBestThirdPlacedTeams();

  return bestThirds
    .map(team => team.group)
    .sort()
    .join("");
}

function debugBestThirdGroupsKey() {
  console.log("=== CLAVE DE MEJORES TERCEROS ===");
  console.log(getBestThirdGroupsKey());
}
function getGroupPositionTeam(ref) {
  const m = ref.match(/^([12])([A-L])$/);
  if (!m) return null;

  const position = Number(m[1]);
  const groupLetter = m[2];

  const standings = calculateStandings(groupLetter);
  return standings[position - 1]?.team || null;
}

function getBestThirdPlacedTeamsFull() {
  const thirdPlaced = [];

  Object.keys(groupsData).forEach(groupLetter => {
    const standings = calculateStandings(groupLetter);

    if (standings.length >= 3) {
      thirdPlaced.push({
        team: standings[2].team,
        group: groupLetter,
        pts: standings[2].pts,
        dg: standings[2].dg,
        gf: standings[2].gf
      });
    }
  });

  thirdPlaced.sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.dg !== a.dg) return b.dg - a.dg;
    if (b.gf !== a.gf) return b.gf - a.gf;
    return a.team.localeCompare(b.team);
  });

  return thirdPlaced.slice(0, 8);
}

function getThirdPlaceMappings() {
  const bestThirds = getBestThirdPlacedTeamsFull();
  const bestThirdGroups = bestThirds.map(t => t.group).sort().join("");

  const mapTable = {
    ABCDFH: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "D", "3EHIJK": "F", "3BEFIJ": "H", "3AEHIJ": "B", "3EFGIJ": "D", "3DEIJL": "F" },
    ABCDFI: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "D", "3EHIJK": "F", "3BEFIJ": "I", "3AEHIJ": "B", "3EFGIJ": "D", "3DEIJL": "F" },
    ABCDFJ: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "D", "3EHIJK": "F", "3BEFIJ": "J", "3AEHIJ": "B", "3EFGIJ": "D", "3DEIJL": "F" },
    ABCDFL: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "D", "3EHIJK": "F", "3BEFIJ": "L", "3AEHIJ": "B", "3EFGIJ": "D", "3DEIJL": "L" },

    ABCDGH: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "D", "3EHIJK": "G", "3BEFIJ": "H", "3AEHIJ": "B", "3EFGIJ": "G", "3DEIJL": "D" },
    ABCDGI: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "D", "3EHIJK": "G", "3BEFIJ": "I", "3AEHIJ": "B", "3EFGIJ": "G", "3DEIJL": "D" },
    ABCDGJ: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "D", "3EHIJK": "G", "3BEFIJ": "J", "3AEHIJ": "B", "3EFGIJ": "G", "3DEIJL": "D" },
    ABCDGL: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "D", "3EHIJK": "G", "3BEFIJ": "L", "3AEHIJ": "B", "3EFGIJ": "G", "3DEIJL": "L" },

    ABCDHI: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "D", "3EHIJK": "H", "3BEFIJ": "I", "3AEHIJ": "B", "3EFGIJ": "H", "3DEIJL": "D" },
    ABCDHJ: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "D", "3EHIJK": "H", "3BEFIJ": "J", "3AEHIJ": "B", "3EFGIJ": "H", "3DEIJL": "D" },
    ABCDHL: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "D", "3EHIJK": "H", "3BEFIJ": "L", "3AEHIJ": "B", "3EFGIJ": "H", "3DEIJL": "L" },
    ABCDIJ: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "D", "3EHIJK": "I", "3BEFIJ": "J", "3AEHIJ": "B", "3EFGIJ": "I", "3DEIJL": "D" },
    ABCDIL: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "D", "3EHIJK": "I", "3BEFIJ": "L", "3AEHIJ": "B", "3EFGIJ": "I", "3DEIJL": "L" },
    ABCDJL: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "D", "3EHIJK": "J", "3BEFIJ": "L", "3AEHIJ": "B", "3EFGIJ": "J", "3DEIJL": "L" },

    ABCEFG: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "E", "3EHIJK": "F", "3BEFIJ": "B", "3AEHIJ": "E", "3EFGIJ": "G", "3DEIJL": "F" },
    ABCEFH: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "E", "3EHIJK": "F", "3BEFIJ": "B", "3AEHIJ": "E", "3EFGIJ": "H", "3DEIJL": "F" },
    ABCEFI: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "E", "3EHIJK": "F", "3BEFIJ": "B", "3AEHIJ": "E", "3EFGIJ": "I", "3DEIJL": "F" },
    ABCEFJ: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "E", "3EHIJK": "F", "3BEFIJ": "B", "3AEHIJ": "E", "3EFGIJ": "J", "3DEIJL": "F" },
    ABCEFL: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "E", "3EHIJK": "F", "3BEFIJ": "B", "3AEHIJ": "E", "3EFGIJ": "L", "3DEIJL": "L" },

    ABCEGH: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "E", "3EHIJK": "G", "3BEFIJ": "B", "3AEHIJ": "E", "3EFGIJ": "H", "3DEIJL": "G" },
    ABCEGI: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "E", "3EHIJK": "G", "3BEFIJ": "B", "3AEHIJ": "E", "3EFGIJ": "I", "3DEIJL": "G" },
    ABCEGJ: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "E", "3EHIJK": "G", "3BEFIJ": "B", "3AEHIJ": "E", "3EFGIJ": "J", "3DEIJL": "G" },
    ABCEGL: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "E", "3EHIJK": "G", "3BEFIJ": "B", "3AEHIJ": "E", "3EFGIJ": "L", "3DEIJL": "L" },

    ABCEHI: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "E", "3EHIJK": "H", "3BEFIJ": "B", "3AEHIJ": "E", "3EFGIJ": "I", "3DEIJL": "H" },
    ABCEHJ: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "E", "3EHIJK": "H", "3BEFIJ": "B", "3AEHIJ": "E", "3EFGIJ": "J", "3DEIJL": "H" },
    ABCEHL: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "E", "3EHIJK": "H", "3BEFIJ": "B", "3AEHIJ": "E", "3EFGIJ": "L", "3DEIJL": "L" },
    ABCEIJ: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "E", "3EHIJK": "I", "3BEFIJ": "B", "3AEHIJ": "E", "3EFGIJ": "J", "3DEIJL": "I" },
    ABCEIL: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "E", "3EHIJK": "I", "3BEFIJ": "B", "3AEHIJ": "E", "3EFGIJ": "L", "3DEIJL": "L" },
    ABCEJL: { "3ABCDF": "A", "3CDFGH": "C", "3CEFHI": "E", "3EHIJK": "J", "3BEFIJ": "B", "3AEHIJ": "E", "3EFGIJ": "L", "3DEIJL": "L" }
  };

  return {
    bestThirds,
    bestThirdGroups,
    mapping: mapTable[bestThirdGroups] || {}
  };
}

function getThirdPlaceTeam(ref) {
  const { bestThirds, mapping } = getThirdPlaceMappings();
  const wantedGroup = mapping[ref];
  if (!wantedGroup) return null;

  return bestThirds.find(t => t.group === wantedGroup)?.team || null;
}




function getKnockoutSourceMatch(code) {
  for (const roundName of Object.keys(knockoutTemplate)) {
    const match = knockoutTemplate[roundName].find(m => m.code === code);
    if (match) return match;
  }
  return null;
}

function getKnockoutStoredResult(code) {
  const saved = JSON.parse(localStorage.getItem("worldcup_knockout") || "{}");
  return saved[code] || null;
}

function getKnockoutWinner(code) {
  const result = getKnockoutStoredResult(code);
  if (!result) return null;

  const sourceMatch = getKnockoutSourceMatch(code);
  if (!sourceMatch) return null;

  const homeTeam = resolveKnockoutRef(sourceMatch.homeRef);
  const awayTeam = resolveKnockoutRef(sourceMatch.awayRef);

  if (!homeTeam || !awayTeam) return null;
  if (result.homeGoals === "" || result.awayGoals === "") return null;

  const hg = Number(result.homeGoals);
  const ag = Number(result.awayGoals);

  if (hg > ag) return homeTeam;
  if (ag > hg) return awayTeam;

  return result.winner || null;
}
function getKnockoutLoser(code) {
  const result = getKnockoutStoredResult(code);
  if (!result) return null;

  const sourceMatch = getKnockoutSourceMatch(code);
  if (!sourceMatch) return null;

  const homeTeam = resolveKnockoutRef(sourceMatch.homeRef);
  const awayTeam = resolveKnockoutRef(sourceMatch.awayRef);

  if (!homeTeam || !awayTeam) return null;
  if (result.homeGoals === "" || result.awayGoals === "") return null;

  const hg = Number(result.homeGoals);
  const ag = Number(result.awayGoals);

  if (hg > ag) return awayTeam;
  if (ag > hg) return homeTeam;

  if (!result.winner) return null;
  return result.winner === homeTeam ? awayTeam : homeTeam;
}

function resolveKnockoutRef(ref) {
  if (/^[12][A-L]$/.test(ref)) {
    return getGroupPositionTeam(ref);
  }

 if (/^3[A-L]+$/.test(ref)) {
  return getThirdTeamBySlot(ref);
}

  if (/^W\d+$/.test(ref)) {
    return getKnockoutWinner("P" + ref.slice(1));
  }

  if (/^RU\d+$/.test(ref)) {
    return getKnockoutLoser("P" + ref.slice(2));
  }

  return null;
}

function saveKnockoutResult(code, homeGoals, awayGoals, winner = null, penalties = null) {
  const saved = JSON.parse(localStorage.getItem("worldcup_knockout") || "{}");

  saved[code] = {
    homeGoals,
    awayGoals,
    winner,
    penalties
  };

  localStorage.setItem("worldcup_knockout", JSON.stringify(saved));
}


function bindKnockoutScoreInputs() {
  document.querySelectorAll(".knockout-goal-input").forEach(input => {
    input.addEventListener("input", (e) => {
      const matchCode = e.target.dataset.match;
      const side = e.target.dataset.side;

      let value = e.target.value;
      if (value === "") value = "";
      else {
        value = parseInt(value, 10);
        if (isNaN(value) || value < 0) value = 0;
      }

      const current = getKnockoutStoredResult(matchCode) || {
        homeGoals: "",
        awayGoals: "",
        winner: null,
        penalties: null
      };

      if (side === "home") current.homeGoals = value;
      else current.awayGoals = value;

      let winner = null;

      if (current.homeGoals !== "" && current.awayGoals !== "") {
        const sourceMatch = getKnockoutSourceMatch(matchCode);
        const homeTeam = resolveKnockoutRef(sourceMatch.homeRef);
        const awayTeam = resolveKnockoutRef(sourceMatch.awayRef);

        const hg = Number(current.homeGoals);
        const ag = Number(current.awayGoals);

        if (hg > ag) winner = homeTeam;
        else if (ag > hg) winner = awayTeam;
      }

      saveKnockoutResult(
        matchCode,
        current.homeGoals,
        current.awayGoals,
        winner,
        null
      );

      nextBtn.click();
    });
  });
}

function getResolvedKnockoutMatch(match) {
  const saved = getKnockoutStoredResult(match.code) || {};

  return {
    ...match,
    homeTeam: resolveKnockoutRef(match.homeRef),
    awayTeam: resolveKnockoutRef(match.awayRef),
    homeGoals: saved.homeGoals ?? "",
    awayGoals: saved.awayGoals ?? "",
    winner: saved.winner ?? null,
    penalties: saved.penalties ?? null
  };
}







  function renderStandings(groupLetter) {
  const standingsTable = document.getElementById("standingsTable");
  if (!standingsTable) return;

  const standings = calculateStandings(groupLetter);

  if (!standings.some(t => t.played > 0)) {
    standingsTable.innerHTML = `
      <div class="standings-empty">
        Aún no se han jugado partidos en este grupo.
      </div>
    `;
    return;
  }


standingsTable.innerHTML = standings.map((row, index) => {
    const teamData = getTeamData(row.team);
    const hasMatchesPlayed = standings.some(t => t.played > 0);
    const topClass = (index < 2 && hasMatchesPlayed) ? "top-two" : "";

    return `
      <div class="standings-row ${topClass}">
        <div>${index + 1}</div>

        <div class="standings-team">
          <img src="${flagUrl(teamData.code)}" alt="${row.team}">
          <span>${row.team}</span>
        </div>

        <div>${row.played}</div>
        <div>${row.won}</div>
        <div>${row.drawn}</div>
        <div>${row.lost}</div>
        <div>${row.gf}</div>
        <div>${row.gc}</div>
        <div>${row.dg}</div>
        <div><strong>${row.pts}</strong></div>
      </div>
    `;
  }).join("");
}

  function bindScoreSelectors() {
    const inputs = document.querySelectorAll(".goal-input");

    inputs.forEach(input => {
      input.addEventListener("input", (e) => {
        const group = e.target.dataset.group;
        const matchIndex = Number(e.target.dataset.match);
        const side = e.target.dataset.side;

        
 if (e.target.value === "") {
  if (side === "home") {
    matchesByGroup[group][matchIndex].homeGoals = "";
  } else {
    matchesByGroup[group][matchIndex].awayGoals = "";
  }

  renderStandings(group);
renderGroups();
  return;
}

let value = parseInt(e.target.value, 10);

if (isNaN(value) || value < 0) value = 0;

e.target.value = value;

if (side === "home") {
  matchesByGroup[group][matchIndex].homeGoals = value;
} else {
  matchesByGroup[group][matchIndex].awayGoals = value;
}

renderStandings(group);


        if (side === "home") {
          matchesByGroup[group][matchIndex].homeGoals = value;
        } else {
          matchesByGroup[group][matchIndex].awayGoals = value;
        }
saveMatches();
        renderStandings(group);
      });
    });
  }

  function openGroupDetail(groupLetter) {
    const teams = groupsData[groupLetter];
    const matches = matchesByGroup[groupLetter];

    favoritesScreen.classList.add("hidden");
    groupsScreen.classList.add("hidden");
    groupDetailScreen.classList.remove("hidden");

    groupDetailTitle.textContent = `GRUPO ${groupLetter}`;

    groupTeamsHeader.innerHTML = teams.map(teamName => {
      const team = getTeamData(teamName);
      const isFavorite = selectedTeams.has(teamName);

      return `
        <div class="group-team-chip">
          <img class="group-flag" src="${flagUrl(team.code)}" alt="${teamName}">
          <span>${teamName}</span>
          ${isFavorite ? '<span class="favorite-star">★</span>' : ""}
        </div>
      `;
    }).join("");

    if (!matches.length) {
      matchesTableBody.innerHTML = `
        <div class="match-empty">
          Este grupo todavía no tiene partidos cargados.
        </div>
      `;
      renderStandings(groupLetter);
      return;
    }

    matchesTableBody.innerHTML = matches.map((match, idx) => `
      <div class="match-row">
        <div>
        ${(() => {
  const panamaTime = toPanamaDateTime(match);
  return `
    <strong>${panamaTime.time}</strong><br>
    <small>${panamaTime.date}</small>
  `;
})()}
        </div>

   <div>${traducirEstadio(match.stadium)}</div>

        <div>${match.home}</div>

        <div class="match-score-mobile">
          <input
            type="number"
            min="0"
            class="goal-input"
            data-group="${groupLetter}"
            data-match="${idx}"
            data-side="home"
            value="${match.homeGoals}"
          >

          <span>-</span>

          <input
            type="number"
            min="0"
            class="goal-input"
            data-group="${groupLetter}"
            data-match="${idx}"
            data-side="away"
            value="${match.awayGoals}"
          >
        </div>

        <div>${match.away}</div>
      </div>
    `).join("");

    bindScoreSelectors();
    renderStandings(groupLetter);
  }

  if (enterBtn) {
    enterBtn.addEventListener("click", () => {
      if (sound) {
        sound.currentTime = 0;
        sound.play().catch(() => {});
      }

      cover.classList.add("fade-out");

      setTimeout(() => {
        cover.style.display = "none";
        app.classList.remove("hidden");
        renderTeams();
      }, 700);
    });
  }

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    groupDetailScreen.classList.add("hidden");
    knockoutScreen.classList.remove("hidden");

    const knockoutRounds = document.getElementById("knockoutRounds");

    if (knockoutRounds) {
    

function renderKnockoutCard(match) {
  const homeTeam = resolveKnockoutRef(match.homeRef) || match.homeRef;
  const isThirdCombo = /^3[A-L]{2,}$/.test(match.awayRef);
  const awayTeam = isThirdCombo
    ? null
    : (resolveKnockoutRef(match.awayRef) || match.awayRef);
  const stored = getKnockoutStoredResult(match.code) || {};

  const awayBlock = isThirdCombo
    ? `
      <select class="third-place-picker" data-match-code="${match.code}" data-away-ref="${match.awayRef}">
        <option value="">Elegir mejor 3ro</option>
      </select>
    `
    : `<div class="knockout-team">${awayTeam}</div>`;

  return `
    <div class="knockout-card">
      <div class="knockout-meta">${match.code} · ${match.date} · ${match.time}</div>

      <div class="knockout-team-row">
        <div class="knockout-team">${homeTeam}</div>
        <input type="number" min="0" class="knockout-goal-input" data-match="${match.code}" data-side="home" placeholder="0" value="${stored.homeGoals ?? ""}">
      </div>

      <div class="knockout-vs">vs</div>

      <div class="knockout-team-row">
        ${awayBlock}
        <input type="number" min="0" class="knockout-goal-input" data-match="${match.code}" data-side="away" placeholder="0" value="${stored.awayGoals ?? ""}">
      </div>
    </div>
  `;
}
function renderSimpleRound(title, matches) {
  return `
    <div class="knockout-round-block">
      <h3>${title}</h3>
      <div class="knockout-list">
        ${matches.map(renderKnockoutCard).join("")}
      </div>
    </div>
  `;
}

const leftMatches = ["P74","P77","P73","P75","P83","P84","P81","P82"]
  .map(code => knockoutTemplate.roundOf32.find(m => m.code === code))
  .filter(Boolean);

const rightMatches = ["P76","P78","P79","P80","P86","P88","P85","P87"]
  .map(code => knockoutTemplate.roundOf32.find(m => m.code === code))
  .filter(Boolean);

const leftR16 = ["P89","P90","P93","P94"]
  .map(code => knockoutTemplate.roundOf16.find(m => m.code === code))
  .filter(Boolean);

const rightR16 = ["P91","P92","P95","P96"]
  .map(code => knockoutTemplate.roundOf16.find(m => m.code === code))
  .filter(Boolean);

const leftQF = ["P97","P98"]
  .map(code => knockoutTemplate.quarterFinals.find(m => m.code === code))
  .filter(Boolean);

const rightQF = ["P99","P100"]
  .map(code => knockoutTemplate.quarterFinals.find(m => m.code === code))
  .filter(Boolean);

const leftSF = ["P101"]
  .map(code => knockoutTemplate.semiFinals.find(m => m.code === code))
  .filter(Boolean);

const rightSF = ["P102"]
  .map(code => knockoutTemplate.semiFinals.find(m => m.code === code))
  .filter(Boolean);

const finalMatch = knockoutTemplate.final;
const thirdPlaceMatch = knockoutTemplate.thirdPlace;

knockoutRounds.innerHTML = `
  <div class="knockout-full-grid">
    <div class="knockout-col">
      ${renderSimpleRound("Dieciseisavos", leftMatches)}
    </div>

    <div class="knockout-col">
      ${renderSimpleRound("Octavos", leftR16)}
    </div>

    <div class="knockout-col">
      ${renderSimpleRound("Cuartos", leftQF)}
    </div>

    <div class="knockout-col">
      ${renderSimpleRound("Semifinal", leftSF)}
    </div>

    <div class="knockout-col">
      ${renderSimpleRound("Final", finalMatch)}
      ${renderSimpleRound("3er puesto", thirdPlaceMatch)}
    </div>

    <div class="knockout-col">
      ${renderSimpleRound("Semifinal", rightSF)}
    </div>

    <div class="knockout-col">
      ${renderSimpleRound("Cuartos", rightQF)}
    </div>

    <div class="knockout-col">
      ${renderSimpleRound("Octavos", rightR16)}
    </div>

    <div class="knockout-col">
      ${renderSimpleRound("Dieciseisavos", rightMatches)}
    </div>
  </div>
`;    

const savedThird = JSON.parse(localStorage.getItem('thirdPlaceSelections') || '{}');


document.querySelectorAll('.third-place-picker').forEach(select => {
  const matchCode = select.dataset.matchCode;
  console.log('restaurando', matchCode, 'valor guardado:', savedThird[matchCode], 'opciones:', select.innerHTML);

  if (savedThird[matchCode]) {
    select.value = savedThird[matchCode];
    console.log('valor final del select:', select.value);
  }
});


const bestThirds = getBestThirdPlacedTeams();
const thirdSelections = {};

function refreshThirdPickers() {
  const savedThird = JSON.parse(localStorage.getItem('thirdPlaceSelections') || '{}');

  document.querySelectorAll(".third-place-picker").forEach(select => {
    const matchCode = select.dataset.matchCode;
    const currentValue = thirdSelections[matchCode] || savedThird[matchCode] || "";

    select.innerHTML = `<option value="">Elegir mejor 3ro</option>`;

    const usedGroups = Object.entries(thirdSelections)
      .filter(([code, value]) => code !== matchCode && value)
      .map(([code, value]) => value);

    bestThirds.forEach(team => {
      const option = document.createElement("option");
      option.value = team.group;
      option.textContent = `3${team.group} - ${team.team}`;

      if (usedGroups.includes(team.group)) {
        option.disabled = true;
      }

      if (currentValue === team.group) {
        option.selected = true;
      }

      select.appendChild(option);
    });

    thirdSelections[matchCode] = currentValue;
  });
}

refreshThirdPickers();
bindKnockoutScoreInputs();


document.querySelectorAll(".third-place-picker").forEach(select => {
  select.addEventListener("change", () => {
    thirdSelections[select.dataset.matchCode] = select.value || "";

    localStorage.setItem(
      "thirdPlaceSelections",
      JSON.stringify(thirdSelections)
    );

    refreshThirdPickers();
  });
});

}

    window.scrollTo(0, 0);
  });
}


if (continueBtn) {
  continueBtn.addEventListener("click", () => {
    favoritesScreen.classList.add("hidden");
    groupDetailScreen.classList.add("hidden");
    groupsScreen.classList.remove("hidden");
    renderGroups();

    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  });
}
  if (backToGroupsBtn) {
  backToGroupsBtn.addEventListener("click", () => {
    groupDetailScreen.classList.add("hidden");
    groupsScreen.classList.remove("hidden");
    renderGroups();
  });
}

  if (viewStandingsBtn) {
    viewStandingsBtn.addEventListener("click", () => {
      standingsSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      groupDetailScreen.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }

if (backToGroupsFromKnockoutBtn) {
  backToGroupsFromKnockoutBtn.addEventListener("click", () => {
    knockoutScreen.classList.add("hidden");
    groupDetailScreen.classList.remove("hidden");

    requestAnimationFrame(() => {
      groupDetailScreen.scrollIntoView({
        behavior: "instant",
        block: "start"
      });
    });
  });
}


});

document.addEventListener('change', (e) => {
  if (!e.target.classList.contains('third-place-picker')) return;

  const selectedValue = e.target.value;
  const currentMatch = e.target.dataset.matchCode;

  // 🔥 eliminar ese mismo valor de otros selects
  document.querySelectorAll('.third-place-picker').forEach(select => {
    if (select.dataset.matchCode !== currentMatch && select.value === selectedValue) {
      select.value = "";
    }
  });

  // guardar normalmente
  const saved = {};
  document.querySelectorAll('.third-place-picker').forEach(s => {
    saved[s.dataset.matchCode] = s.value;
  });

  localStorage.setItem('thirdPlaceSelections', JSON.stringify(saved));
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js")
      .then(() => console.log("Service Worker registrado"))
      .catch(err => console.log("Error registrando SW:", err));


  });

}
