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
  const groupDetailTitle = document.getElementById("groupDetailTitle");
  const groupTeamsHeader = document.getElementById("groupTeamsHeader");
  const matchesTableBody = document.getElementById("matchesTableBody");

const viewStandingsBtn = document.getElementById("viewStandingsBtn");
const backToTopBtn = document.getElementById("backToTopBtn");
const standingsSection = document.getElementById("standingsSection");

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
    { name: "Chequia", code: "cz" },
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

  const groupsData = {
    A: ["México", "Sudáfrica", "Corea del Sur", "Chequia"],
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

  // AQUÍ VAMOS A METER EL FIXTURE OFICIAL EN EL SIGUIENTE PASO
  const matchesByGroup = {
  A: [
    {
      date: "11/06/2026",
      time: "13:00",
      stadium: "Mexico City Stadium",
      home: "México",
      away: "Sudáfrica",
      homeGoals: 0,
      awayGoals: 0
    },
    {
      date: "11/06/2026",
      time: "20:00",
      stadium: "Guadalajara Stadium",
      home: "Corea del Sur",
      away: "Chequia",
      homeGoals: 0,
      awayGoals: 0
    },
    {
      date: "18/06/2026",
      time: "12:00",
      stadium: "Atlanta Stadium",
      home: "Chequia",
      away: "Sudáfrica",
      homeGoals: 0,
      awayGoals: 0
    },
    {
      date: "18/06/2026",
      time: "19:00",
      stadium: "Guadalajara Stadium",
      home: "México",
      away: "Corea del Sur",
      homeGoals: 0,
      awayGoals: 0
    },
    {
      date: "24/06/2026",
      time: "19:00",
      stadium: "Monterrey Stadium",
      home: "Sudáfrica",
      away: "Corea del Sur",
      homeGoals: 0,
      awayGoals: 0
    },
    {
      date: "24/06/2026",
      time: "19:00",
      stadium: "Mexico City Stadium",
      home: "Chequia",
      away: "México",
      homeGoals: 0,
      awayGoals: 0
    }
  ],
  B: [],
  C: [],
  D: [],
  E: [],
  F: [],
  G: [],
  H: [],
  I: [],
  J: [],
  K: [],
  L: []
};

  const selectedTeams = new Set();

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

      if (selectedTeams.has(team.name)) card.classList.add("selected");

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

        renderTeams();
      });

      teamsGrid.appendChild(card);
    });

    continueBtn.disabled = selectedTeams.size === 0;
  }

  function renderGroups() {
    const groupsGrid = document.getElementById("groupsGrid");
    groupsGrid.innerHTML = "";

    Object.entries(groupsData).forEach(([groupLetter, teams]) => {
      const card = document.createElement("div");
      card.className = "group-card";

      const body = teams.map(teamName => {
        const team = getTeamData(teamName);
        const isFavorite = selectedTeams.has(teamName);

return `
  <div class="group-team-row">
    <img class="group-flag" src="${flagUrl(team.code)}" alt="${teamName}">
    <span class="group-team-name">${teamName}</span>
    ${isFavorite ? '<span class="favorite-star">★</span>' : ""}
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
    return;
  }

  matchesTableBody.innerHTML = matches.map((match, idx) => `
  <div class="match-row">
    <div>
      <strong>${match.time}</strong><br>
      <small>${match.date}</small>
    </div>

    <div>${match.stadium}</div>

    <div>${match.home}</div>

    <div class="match-score-mobile">
      <input type="number" min="0" class="goal-input"
        data-group="${groupLetter}" data-match="${idx}" data-side="home"
        value="${match.homeGoals}">

      <span>-</span>

      <input type="number" min="0" class="goal-input"
        data-group="${groupLetter}" data-match="${idx}" data-side="away"
        value="${match.awayGoals}">
    </div>

    <div>${match.away}</div>
  </div>
`).join("");

  bindScoreSelectors();
const standingsTable = document.getElementById("standingsTable");

standingsTable.innerHTML = `
  <div class="match-empty">
    Aquí irá la tabla de clasificación automática del Grupo ${groupLetter}.
  </div>
`;
}

function bindScoreSelectors() {
  const inputs = document.querySelectorAll(".goal-input");

  inputs.forEach(input => {
    input.addEventListener("input", (e) => {
      const group = e.target.dataset.group;
      const matchIndex = Number(e.target.dataset.match);
      const side = e.target.dataset.side;

      let value = parseInt(e.target.value);

      if (isNaN(value) || value < 0) value = 0;

      if (side === "home") {
        matchesByGroup[group][matchIndex].homeGoals = value;
      } else {
        matchesByGroup[group][matchIndex].awayGoals = value;
      }
    });
  });
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

  continueBtn.addEventListener("click", () => {
    favoritesScreen.classList.add("hidden");
    groupDetailScreen.classList.add("hidden");
    groupsScreen.classList.remove("hidden");
    renderGroups();
  });

  backToGroupsBtn.addEventListener("click", () => {
    groupDetailScreen.classList.add("hidden");
    groupsScreen.classList.remove("hidden");
  });
});

viewStandingsBtn.addEventListener("click", () => {
  standingsSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

backToTopBtn.addEventListener("click", () => {
  groupDetailScreen.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});