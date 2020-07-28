import React, { useState, useEffect } from "react";
import GlobalStyles from "./styles/global";
import api from "./services/api";

function App() {
  const fromTo = (days) => {
    const date = new Date();
    date.setDate(date.getDate()+days);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };
  const key =
    "9c94aa956e878e6a858c368803663f2cd8a6172edf82e4289050a0b3b14a5a48";
  const leagues = [
    {
      id: 68,
      name: "Série A",
    },
    {
      id: 69,
      name: "Série B",
    },
    {
      id: 70,
      name: "Série C",
    },
    {
      id: 71,
      name: 'Série D'
    }
  ];
  const [league, setLeague] = useState(68);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches();
  }, [league]);

  async function getMatches() {
    try {
      const response = await api.get(
        `?action=get_events&APIkey=${key}&from=${fromTo(0)}&to=${fromTo(15)}&league_id=${league}`
      );
      setMatches(response.data);
    } catch (error) {
      alert(error.message);
    }
  }

  function formatDate(date, time) {
    const dt = new Date(`${date} ${time}`);
    return (
      dt.toLocaleDateString("pt-BR", {
        weekday: "long",
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }) + "h"
    );
  }

  return (
    <>
      <header>
        <div className="title">Brasileirão 2020</div>
        <div className="subtitle">
          Jogos dos clubes do Brasileirão 2020
        </div>
      </header>
      <div className="container">
        <ul>
          {leagues.map((l) => (
            <li
              className={l.id == league ? "active" : ""}
              onClick={() => setLeague(l.id)}
            >
              {l.name}
            </li>
          ))}
        </ul>
        <div className="cards">
          {matches.length > 0 ? (
            matches.map((match) => (
              <div className="card" key={match.match_id}>
                <div className="card-header">
                  {formatDate(match.match_date, match.match_time)}
                </div>
                <div className="card-body">
                  <p>
                    <img className="team-badge" src={match.team_home_badge} />
                    {match.match_hometeam_name}
                  </p>
                  <p>X</p>
                  <p>
                    <img className="team-badge" src={match.team_away_badge} />
                    {match.match_awayteam_name}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>Nenhuma partida encontrada.</p>
          )}
        </div>
      </div>
      <GlobalStyles />
    </>
  );
}

export default App;
