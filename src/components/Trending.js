import { useEffect, useState } from "react";
import { Row, Card, Col, Container, Image } from "react-bootstrap";
import axios from "axios";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);

  return (
    <div>
      <Container>
        <br />
        <br />
        <h1 className="text-white">Film Trending</h1>
        <Row>
          {movies.map((result, index) => {
            return (
              <Col md={4} className="movieWrapper" id="trending" key={index}>
                <Card className=" movieImage">
                  <Image
                    src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`}
                    className="images"
                    alt="testing"
                    quality="high"
                  />
                  <div className="bg-dark ">
                    <div className="p-2 m-1 text-white">
                      <Card.Title className="text-center">
                        {result.title}
                      </Card.Title>
                      <Card.Text className="text-left">
                        {result.overview}
                      </Card.Text>
                      <Card.Text>{result.release_date}</Card.Text>
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
