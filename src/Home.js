import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import { useEffect } from "react";
import { run as runHolder } from "holderjs/holder";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home(props) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState([]);

  useEffect(() => {
    runHolder("d-block w-100");
  });

  useEffect(() => {
    shows();
  }, []);

  function shows() {
    fetch(props.host + "/shows")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setPlaying(json.showsThisWeek);
      });
  }

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col></Col>
        <Col xs={9}>
          <h2 className="mt-3 alignCenter">Playing this week</h2>
          <Carousel
            className="mt-5"
            activeIndex={index}
            onSelect={handleSelect}
          >
            {playing.map((p) => (
              <Carousel.Item key={p.id}>
                <img
                  className="d-block w-100"
                  src={"holder.js/800x400?text=" + p.movieName + "&bg=373940"}
                  alt={p.movieName}
                />
                <Carousel.Caption>
                  <h3>{p.startDayTime}</h3>
                  <p>{p.theaterName}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
