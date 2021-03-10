import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Team.css";

const Team = (props) => {
  console.log(props.team);
  const { strTeamBadge, strTeam, strSport, idTeam } = props.team;
  return (
    <Col lg={3} md={4} sm={6}>
      <Card className="single-team mb-4 text-center shadow border-0">
        <Card.Body>
          <div className="text-center mb-3">
            <Card.Img variant="top" src={strTeamBadge} />
          </div>
          <Card.Title>{strTeam}</Card.Title>
          <Card.Text>Sports Type: {strSport}</Card.Text>
          <Link to={`/team/${idTeam}`}>
            <Button variant="warning">
              Explore <FontAwesomeIcon icon={["fas", "chevron-right"]} />
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Team;
