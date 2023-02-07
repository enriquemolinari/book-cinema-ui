import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import Timer from "./Timer";
import ResponseMessage from "./ResponseMessage";
import { useNavigate } from "react-router-dom";

export default function Pay(props) {
  const [creditCardForm, setCreditCardForm] = useState({
    name: "",
    number: "",
    code: "",
  });
  const [show, setShow] = useState();
  const [responseStatus, setResponseStatus] = useState({});
  const location = useLocation();
  const [processing, setProcessing] = useState(false);
  const nav = useNavigate();

  const seats = location.state.seats;
  const total = location.state.total;

  useEffect(() => {
    window.scrollTo(0, 0);
    showDetail(location.state.showId);
  }, []);

  function showDetail(sid) {
    fetch(props.host + "/shows/" + sid)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setShow(json);
      });
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setCreditCardForm((inputsValue) => {
      return { ...inputsValue, [name]: value };
    });
  }

  function goToSucess() {
    nav("/paysuccess", {
      state: {
        movieName: show?.show.movieName,
        when: show?.show.startDayTime,
        seats: seats.map((s) => s.number),
      },
    });
  }

  function handleCloseResponseStatus() {
    setResponseStatus({});
  }

  function handleConfirm(e) {
    e.preventDefault();
    setProcessing(true);
    fetch(props.host + "/shows/" + show?.show.id + "/pay", {
      method: "POST",
      body: JSON.stringify({
        seats: seats.map((s) => s.id),
        name: creditCardForm.name,
        number: creditCardForm.number,
        code: creditCardForm.code,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      credentials: "include",
    })
      .then((response) => {
        setProcessing(false);
        return response.json();
      })
      .then((json) => {
        setResponseStatus(json);
      });
  }

  return (
    <div>
      <section className="container">
        <div className="order-container">
          <div className="order">
            <p className="order__title">
              Book a ticket <br />
              <span className="order__descript">{<Timer />}</span>
            </p>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="checkout-wrapper">
            <h2 className="page-heading">Movie and Show Date</h2>
            <ul className="book-result">
              <li className="book-result__item">
                Movie:{" "}
                <span className="book-result__count booking-ticket">
                  {show?.show.movieName}
                </span>
              </li>
              <li className="book-result__item">
                When:{" "}
                <span className="book-result__count booking-price">
                  {show?.show.startDayTime} hs
                </span>
              </li>
              <li className="book-result__item">
                Finishing At:{" "}
                <span className="book-result__count booking-price">
                  {show?.show.finishTime} hs
                </span>
              </li>
            </ul>
            <h2 className="page-heading">price</h2>
            <ul className="book-result">
              <li className="book-result__item">
                Tickets:{" "}
                <span className="book-result__count booking-ticket">
                  {seats.length}
                </span>
              </li>
              <li className="book-result__item">
                Seat numbers:{" "}
                <span className="book-result__count booking-price">
                  {seats.map((s) => (
                    <span>{s.number + " "}</span>
                  ))}
                </span>
              </li>
              <li className="book-result__item">
                Total:{" "}
                <span className="book-result__count booking-cost">
                  $ {total}
                </span>
              </li>
            </ul>

            <p></p>
            <h2 className="page-heading">Accepted Credit Cards</h2>
            <div className="payment">
              <a href="#" className="payment__item">
                <img alt src="images/payment/pay5.png" />
              </a>
              <a href="#" className="payment__item">
                <img alt src="images/payment/pay6.png" />
              </a>
              <a href="#" className="payment__item">
                <img alt src="images/payment/pay7.png" />
              </a>
            </div>
            <h2 className="page-heading">Credir Card Information</h2>
            <form
              id="contact-info"
              method="post"
              noValidate
              className="form contact-info"
            >
              <span className="contact-info__field contact-info__field-name">
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  className="form__mail"
                />
              </span>
              <span className="contact-info__field contact-info__field-card">
                <input
                  type="text"
                  name="number"
                  onChange={handleChange}
                  placeholder="Credit Card number"
                  className="form__mail"
                />
              </span>
              <span className="contact-info__field contact-info__field-cccode">
                <input
                  type="text"
                  name="code"
                  onChange={handleChange}
                  placeholder="Security Code"
                  className="form__mail"
                />
              </span>
            </form>
          </div>
          <ResponseMessage
            resp={responseStatus}
            handleClose={handleCloseResponseStatus}
            onSuccess={goToSucess}
          />
          <div className="order">
            <a
              href="book-final.html"
              className="btn btn-md btn--warning"
              onClick={handleConfirm}
            >
              {processing && (
                <>
                  processing: <ClipLoader loading={processing} size={9} />
                </>
              )}
              {!processing && "purchase"}
            </a>
          </div>
        </div>
      </section>
      {/*       <div className="booking-pagination">
        <a href="book2.html" className="booking-pagination__prev">
          <p className="arrow__text arrow--prev">prev step</p>
          <span className="arrow__info">choose a sit</span>
        </a>
        <a href="#" className="booking-pagination__next hide--arrow">
          <p className="arrow__text arrow--next">next step</p>
          <span className="arrow__info" />
        </a>
      </div> */}
    </div>
  );
}
