import { Container } from "react-bootstrap";
import MainNavbar from "./Components/MainNavbar";
import CardList from "./Components/CardList";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageDetails from "./Components/PageDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [pageCountData, setPageCountData] = useState(0);

  // Get All Data
  async function getAllData() {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=28e584eedc258bf428a09c96339843d9&language=en-US&"
    );
    setMovies(res.data.results);
    setPageCountData(res.data.total_pages);
  }

  // To Show Data When I Load A Site First Time
  useEffect(() => {
    getAllData();
  }, []);

  // Get Current Page By Pagination
  async function getPageNumber(pageN) {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=28e584eedc258bf428a09c96339843d9&language=en-US&page=${pageN}`
    );
    setMovies(res.data.results);
  }

  // Get Data By Search
  async function searchData(word) {
    if (word === "") {
      getAllData();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${word}&api_key=28e584eedc258bf428a09c96339843d9`
      );
      setMovies(res.data.results);
      setPageCountData(res.data.total_pages);
    }
  }

  return (
    <>
      <MainNavbar search={searchData} />
      <Container>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <CardList
                  movies={movies}
                  pageNumber={getPageNumber}
                  pageCountData={pageCountData}
                />
              }
            />

            <Route path="/KK8/Details/:title/:id" element={<PageDetails />} />
          </Routes>
        </Router>
      </Container>
      <Footer />
    </>
  );
}

export default App;
