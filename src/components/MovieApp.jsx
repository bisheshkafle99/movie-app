import React from "react";
import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";

const MovieApp = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    let fetchedMovies = await fetch(
      "https://raw.githubusercontent.com/erik-sytnyk/movies-list/master/db.json"
    );

    fetchedMovies = await fetchedMovies.json();

    setMovies(fetchedMovies.movies);
    setAllMovies(fetchedMovies.movies);
  };

  const changeQuery = (e) => {
    console.log(allMovies);
    let newQuery = e.target.value;
    setQuery(newQuery);
    setMovies(
      allMovies.filter((movie) => {
        if (movie.title.toLowerCase().includes(newQuery.toLowerCase())) {
          return movie;
        }
      })
    );
  };

  return (
    <div>
      <h1>Movies</h1>
      <input type="search" onChange={(e) => changeQuery(e)} value={query} />
      <h2>{query.length ? `Search Result: ${movies.length}` : ""}</h2>
      {movies.length ? "" : "loading....."}
      <Row>
        {movies.map((movie) => {
          return (
            <Col>
              <MovieCard {...movie} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default MovieApp;
