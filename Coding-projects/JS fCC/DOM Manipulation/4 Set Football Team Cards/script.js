// The user should be able to use the dropdown menu and filter between the different players based on their positions

let footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    {
      name: "Diego Maradona",
      position: "midfielder",
      isCaptain: true,
    },
    {
      name: "Ricardo Bochini",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Claudio Borghi",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Sergio Batista",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Ricardo Giusti",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Héctor Enrique",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Carlos Tapia",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Marcelo Trobbiani",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Sergio Almirón",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Jorge Burruchaga",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Jorge Valdano",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Pedro Pasculli",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "José Luis Brown",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Daniel Passarella",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Néstor Clausen",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "José Luis Cuciuffo",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Oscar Garré",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Julio Olarticoechea",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Oscar Ruggeri",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Luis Islas",
      position: "goalkeeper",
      isCaptain: false,
    },
    {
      name: "Nery Pumpido",
      position: "goalkeeper",
      isCaptain: false,
    },
    {
      name: "Héctor Zelada",
      position: "goalkeeper",
      isCaptain: false,
    },
  ],
};

const headCoach = document.getElementById("head-coach");
const team = document.getElementById("team");
const year = document.getElementById("year");

headCoach.innerText = footballTeam.headCoach;
team.innerText = footballTeam.team;
year.innerText = footballTeam.year;

const playerCards = document.getElementById("player-cards");

function setPlayerDisplay(players) {
  const newCard = document.createElement("div");
  newCard.className = "player-card";
  newCard.innerHTML = `<h2>${players.isCaptain ? "(Captain) " : ""}${players.name}</h2>
    <p>Position: ${players.position}</p>\n`;
  playerCards.appendChild(newCard);
}

// Set default to show all players
footballTeam.players.forEach((player) => {
  setPlayerDisplay(player);
});

const playerSelection = document.getElementById("players");

playerSelection.addEventListener("change", (event) => {
  playerCards.innerHTML = ""; // refresh for new changes to the page
  let value = event.target.value;
  footballTeam.players.filter((player) => {
    if (value === "all") {
      setPlayerDisplay(player);
    }
    if (player.position === value) {
      setPlayerDisplay(player);
    }
  });
});
