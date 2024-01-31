import {
  faArrowLeftLong,
  faFilm,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export default function PageDetails() {
  // To Get ID From Route
  const param = useParams();

  // To save Details Data
  const [details, setDetails] = useState([]);
  console.log(details);

  // Get All Details Page
  async function getDetailsPage() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=28e584eedc258bf428a09c96339843d9&language=en-US`
    );
    setDetails(res.data);
  }

  // To Run Code On Load Page
  useEffect(() => {
    getDetailsPage();
  }, []);

  return (
    <div style={{ minHeight: "calc(100vh - 112px)" }}>
      <Row>
        <Col className="d-flex flex-row-reverse my-3 p-3 justify-content-between align-items-center bg-body-secondary text-info-emphasis rounded">
          <img
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            alt={details.original_title}
            style={{ width: "250px", borderRadius: "6px" }}
          />

          <ul className="fw-bold px-5">
            <li className="p-3 pb-2 fs-4 w-100 border-bottom border-black">
              Name: {details.original_title}
            </li>
            <li className="p-3 pb-2 fs-4 w-100 border-bottom border-black">
              Type: {details.genres ? `${details.genres[0].name}` : `UnKnown`}
            </li>
            <li className="d-flex justify-content-between gap-3 p-3 pb-2 fs-4 w-100 border-bottom border-black">
              Votes: {details.vote_count}
              <div>
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />{" "}
                {Math.round(details.vote_average * 10) / 10}
              </div>
            </li>
            <li className="p-3 pb-2 fs-4 w-100 border-bottom border-black">
              Language: {details.original_language}
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="my-3 p-5 bg-body-secondary text-info-emphasis rounded">
          <h3>About Story:</h3>
          <p className="lh-lg">{details.overview}</p>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex gap-3 my-3 p-3 justify-content-center align-items-center ">
          <Link to="../Movies">
            <Button variant="danger" className=" fw-bold p-2 px-3">
              <FontAwesomeIcon icon={faArrowLeftLong} /> Go Back
            </Button>
          </Link>
          <a href={details.homepage} target="_blank">
            <Button variant="info" className="text-light fw-bold p-2 px-3">
              Watch <FontAwesomeIcon icon={faFilm} size="lg" className="ms-2" />
            </Button>
          </a>
        </Col>
      </Row>
    </div>
  );
}
