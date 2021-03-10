import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Team from "../Team/Team";
import "./Home.css";

const Home = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4335`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);

  return (
    <main className="bg-light">
      <section className="hero">
        <h1>Dream League Soccer</h1>
      </section>
      <section className="py-5">
        <Container>
          <Row>
            {teams.map((team) => (
              <Team team={team}></Team>
            ))}
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Home;
