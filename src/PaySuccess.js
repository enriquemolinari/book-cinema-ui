import React from "react";
import { useLocation } from "react-router-dom";

export default function PaySuccess() {
  const location = useLocation();
  const movieName = location.state.movieName;
  const startDayTime = location.state.when;
  const seats = location.state.seats;

  return (
    <section className="container">
      <h2 className="page-heading heading--outcontainer">Payment Success !</h2>
      <div className="contact">
        <p className="contact__title">
          You have tickets for:
          <br />
          <span className="contact__describe">
            {movieName} on {startDayTime} <br />
            Your seats number are:{" "}
            {seats.map((s) => (
              <span>{s + " "}</span>
            ))}
          </span>
        </p>
        <span className="contact__describe">
          An email was sent to you with the details
        </span>
      </div>
    </section>
  );
}
