import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ResponseMessage from "./ResponseMessage";
import TheatreSeats from "./TheatreSeats";
import { useNavigate } from "react-router-dom";

export default function ChooseSit(props) {
  const [show, setShow] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const [pricePerSit, setPricePerSit] = useState(0);
  const location = useLocation();
  const [sitsChosen, setSitsChosen] = useState([]);
  const [responseStatus, setResponseStatus] = useState({});
  const nav = useNavigate();

  useEffect(() => {
    showDetail(location.state.showId);
  }, []);

  function showDetail(sid) {
    fetch(props.host + "/shows/" + sid)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setPricePerSit(json.show.price);
        setShow(json);
      });
  }

  function gotToPayment() {
    nav("/buystep2", {
      state: {
        showId: show?.show.id,
        seats: sitsChosen,
        total: totalPrice,
      },
    });
  }

  function handleCloseResponseStatus() {
    setResponseStatus({});
  }

  function handleReservation(e) {
    e.preventDefault();
    fetch(props.host + "/shows/" + show?.show.id + "/reserve", {
      method: "POST",
      body: JSON.stringify({
        seats: sitsChosen.map((s) => s.id),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setResponseStatus(json);
      });
  }

  function handleSitChosen(id, number) {
    setTotalPrice((current) => current + pricePerSit);
    setSitsChosen((current) => [...current, { id: id, number: number }]);
  }

  function handleSitRemoved(id) {
    setTotalPrice((current) => current - pricePerSit);
    let arr = sitsChosen;
    const index = arr.findIndex((item) => item.id === id);
    arr.splice(index, 1);
    setSitsChosen([...arr]);
  }

  return (
    <div>
      <div className="place-form-area">
        <section className="container">
          <div className="order-container">
            <div className="order">
              <p className="order__title">
                Book a ticket <br />
                <span className="order__descript">
                  <strong>for</strong> {show?.show.movieName}{" "}
                  <strong>at</strong> {show?.show.startDayTime}
                </span>
              </p>
              <div className="order__control"></div>
            </div>
          </div>
          <div className="choose-sits">
            <div className="choose-sits__info choose-sits__info--first">
              <ul>
                <li className="sits-price">
                  <strong>Price</strong>
                  {"  "}${show?.show.price}
                </li>
              </ul>
            </div>
            <div className="choose-sits__info">
              <ul>
                <li className="sits-state sits-state--not">Not available</li>
                <li className="sits-state sits-state--your">Your choice</li>
              </ul>
            </div>
            <div className="col-sm-12 col-lg-6 col-lg-offset-3">
              <div className="sits-area hidden-xs">
                <div className="sits-anchor">screen</div>
                <div className="sits">
                  <aside class="sits__line">
                    <span class="sits__indecator">A</span>
                    <span class="sits__indecator">B</span>
                    <span class="sits__indecator">C</span>
                    <span class="sits__indecator">D</span>
                    <span class="sits__indecator">E</span>
                    <span class="sits__indecator">F</span>
                    <span class="sits__indecator">G</span>
                    <span class="sits__indecator">I</span>
                  </aside>
                  {show && (
                    <>
                      <TheatreSeats
                        seats={show.show.seats.slice(0, 50)}
                        seatsPerRow={10}
                        seatsColor={"sits-price--middle"}
                        sitChosen={handleSitChosen}
                        sitRemoved={handleSitRemoved}
                      />
                      <TheatreSeats
                        seats={show.show.seats.slice(50, 70)}
                        seatsPerRow={8}
                        seatsColor={"sits-price--expensive"}
                        sitChosen={handleSitChosen}
                        sitRemoved={handleSitRemoved}
                      />
                    </>
                  )}
                  <aside className="sits__checked">
                    <div className="checked-place">
                      {sitsChosen.map((item) => (
                        <span className="choosen-place">{item.number}</span>
                      ))}
                    </div>
                    <div className="checked-result">${totalPrice}</div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="clearfix" />
      <ResponseMessage
        resp={responseStatus}
        handleClose={handleCloseResponseStatus}
        onSuccess={gotToPayment}
      />
      <div className="booking-pagination booking-pagination--margin">
        <a
          href="#"
          onClick={handleReservation}
          className="booking-pagination__next"
        >
          <p className="arrow__text arrow--next">next step</p>
          <span className="arrow__info">Payment</span>
        </a>
      </div>

      {/*       <div className="booking-pagination booking-pagination--margin">
        <a
          href="book-final.html"
          className="btn btn-md btn--warning btn--wide"
          onClick={handleReservation}
        >
          Confirm Reservation
        </a>
      </div> */}
    </div>
  );
}
