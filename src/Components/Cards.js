import React from "react";
import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { Card, Button } from "react-bootstrap";

export default function Cards({ movie }) {
  return (
    <Link to={`/KK8/Details/${movie.title}/${movie.id}`}>
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="img"
        />
        <span className="overlay"></span>
        <div className="rate">
          <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />{" "}
          {Math.round(movie.vote_average * 10) / 10}
        </div>
        <ul className="info-card">
          <li>Name: {movie.original_title}</li>
          <li>Date: {movie.release_date}</li>
          <li>Votes: {movie.vote_count}</li>
          <li>Language: {movie.original_language}</li>
        </ul>
      </div>
    </Link>
  );
}
