import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="bg-dark text-light py-3">
      <Container>
        <div className="copyright text-center">
          &copy; <span className="text-info fw-bold">KK8</span> 2024
        </div>
      </Container>
    </div>
  );
}
