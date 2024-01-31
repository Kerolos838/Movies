import React from "react";
import Cards from "./Cards";
import { Col, Row } from "react-bootstrap";
import PaginationCom from "./PaginationCom";

export default function CardList({ movies, pageNumber, pageCountData }) {
  return (
    <Row className="my-4 mx-3">
      <Col
        className="d-flex align-items-center gap-3 flex-wrap"
        style={{ minHeight: "calc(100vh - 112px)" }}
      >
        {movies.length >= 1 ? (
          movies.map((movie) => {
            return <Cards key={movie.id} movie={movie} />;
          })
        ) : (
          <h2>None</h2>
        )}
      </Col>
      <PaginationCom pageNumber={pageNumber} pageCountData={pageCountData} />
    </Row>
  );
}
