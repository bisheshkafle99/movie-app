import React from "react";
import { Card, Button } from "react-bootstrap";

const MovieCard = ({
  title,
  year,
  actors,
  genres,
  director,
  plot,
  runtime,
  posterUrl,
}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={posterUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{plot}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
