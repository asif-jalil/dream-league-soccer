import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import maleTeam from "../../images/male.png";
import feMaleTeam from "../../images/female.png";
import "./TeamDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import banner from "../../images/stadium.jpg";

const TeamDetail = () => {
  const { teamId } = useParams();
  const [team, setTeam] = useState({});
  const { strTeamBadge, strTeam, strCountry, strGender, intFormedYear, strSport, strFacebook, strTwitter, strInstagram, strYoutube, strDescriptionEN, strStadiumDescription, strTeamBanner } = team;

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeam(data.teams[0]));
  }, [teamId]);

  let teamBanner;
  if (strTeamBanner) {
    teamBanner = strTeamBanner;
  } else {
    teamBanner = banner;
  }

  const heroBannerStyle = {
    backgroundImage: `url(${teamBanner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
  };

  return (
    <main className="bg-light">
      <section className="hero" style={heroBannerStyle}>
        <div className="hero-logo">
          <img src={strTeamBadge} alt={strTeam} />
        </div>
      </section>
      <section className="team-detail py-5">
        <Container>
          <Card className="bg-primary team-detail-item">
            <Card.Body>
              <Row>
                <Col lg={7} md={6}>
                  <div className="team-info">
                    <Card.Title className="text-light mb-4">{strTeam}</Card.Title>
                    <Card.Text>
                      <FontAwesomeIcon className="fa-fw" icon={["fas", "thumbtack"]} /> Founded: {intFormedYear}
                    </Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon className="fa-fw" icon={["fas", "flag"]} /> Country: {strCountry}
                    </Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon className="fa-fw" icon={["fas", "futbol"]} /> Sports Type: {strSport}
                    </Card.Text>
                    <Card.Text>
                      <FontAwesomeIcon className="fa-fw" icon={["fas", "mars"]} /> Gender: {strGender}
                    </Card.Text>
                  </div>
                </Col>
                <Col lg={5} md={6}>
                  <div className="team-img">
                    {strGender === "Male" && <img src={maleTeam} alt={strTeam} className="img-fluid" />}
                    {strGender === "Female" && <img src={feMaleTeam} alt={strTeam} className="img-fluid" />}
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <div className="desc my-5">
            <p className="text-muted">{strDescriptionEN}</p>
            <p className="text-muted">{strStadiumDescription}</p>
          </div>

          <div className="social text-center">
            <a className="icon fb" href={strFacebook ? `https://${strFacebook}` : `https://www.facebook.com/`} rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </a>
            <a className="icon twitter" href={strTwitter ? `https://${strTwitter}` : `https://twitter.com/`} rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
            <a className="icon insta" href={strInstagram ? `https://${strInstagram}` : `https://www.instagram.com/`} rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a className="icon yt" href={strYoutube ? `https://${strYoutube}` : `https://www.youtube.com/`} rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={["fab", "youtube"]} />
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default TeamDetail;
