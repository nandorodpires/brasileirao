import React, { useState, useEffect } from "react";
import GlobalStyles from "./styles/global";
import api from "./services/api";

function App() {
  const key =
    "9c94aa956e878e6a858c368803663f2cd8a6172edf82e4289050a0b3b14a5a48";
  const date = new Date();
  const from = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  const to = `${date.getFullYear()}-${date.getMonth() + 2}-${date.getDate()}`;

  const [league, setLeague] = useState(68);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches();
  }, [league]);

  async function getMatches() {

    try {
      const response = await api.get(
        `?action=get_events&APIkey=${key}&from=${from}&to=${to}&league_id=${league}`
      );
      setMatches(response.data);  
    } catch (error) {
      alert(error.message)
    }

  }

  return (
    <>
      <header>
        <div className="title">Brasileirão 2020</div>
        <div className="subtitle">
          Todos os jogos dos clubes da séries A, B, C e D do Brasileirão 2020
        </div>
      </header>
      <div className="container">
        <ul>
          <li className={league == 68 ? 'active' : ''} onClick={() => setLeague(68)}>Série A</li>
          <li className={league == 69 ? 'active' : ''} onClick={() => setLeague(69)}>Série B</li>
          <li className={league == 70 ? 'active' : ''} onClick={() => setLeague(70)}>Série C</li>
          <li className={league == 71 ? 'active' : ''} onClick={() => setLeague(71)}>Série D</li>
        </ul>
        <div className="cards">
          {(matches.length > 0) ? matches.map((match) => (
            <div className="card" key={match.match_id}>
              <div className="card-header">
                {match.match_date} - {match.match_time}h
              </div>
              <div className="card-body">
                <p>{match.match_hometeam_name}</p>
                <p>X</p>
                <p>{match.match_awayteam_name}</p>
              </div>
            </div>
          )) : <p>Nenhuma partida encontrada.</p>}
        </div>
      </div>
      <GlobalStyles />
    </>
  );
}

export default App;
