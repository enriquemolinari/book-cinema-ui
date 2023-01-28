import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TheatreSeats from "./TheatreSeats";

export default function ChooseSit(props) {
  const [show, setShow] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const [pricePerSit, setPricePerSit] = useState(0);
  const location = useLocation();
  const [sitsChosen, setSitsChosen] = useState([]);

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

  function handleSitChosen(id, number) {
    console.log("handleSitChosen " + totalPrice);
    setTotalPrice((current) => current + pricePerSit);
    setSitsChosen((current) => [...current, { id: id, number: number }]);
  }

  function handleSitRemoved(id) {
    console.log("handleSitRemoved");
    setTotalPrice((current) => current - pricePerSit);
    let arr = sitsChosen;
    //const index = arr.indexOf(id);
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
                        <span className={"choosen-place " + item.number}>
                          {item.number}
                        </span>
                      ))}
                    </div>
                    <div className="checked-result">${totalPrice}</div>
                  </aside>
                </div>
              </div>
            </div>
            <div className="col-sm-12 visible-xs">
              <div className="sits-area--mobile">
                <div className="sits-area--mobile-wrap">
                  <div className="sits-select">
                    <select
                      name="sorting_item"
                      className="sits__sort sit-row"
                      tabIndex={0}
                    >
                      <option value={1} selected="selected">
                        A
                      </option>
                      <option value={2}>B</option>
                      <option value={3}>C</option>
                      <option value={4}>D</option>
                      <option value={5}>E</option>
                      <option value={6}>F</option>
                      <option value={7}>G</option>
                      <option value={8}>I</option>
                      <option value={9}>J</option>
                      <option value={10}>K</option>
                      <option value={11}>L</option>
                    </select>
                    <select
                      name="sorting_item"
                      className="sits__sort sit-number"
                      tabIndex={1}
                    >
                      <option value={1} selected="selected">
                        1
                      </option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                    </select>
                    <a href="#" className="btn btn-md btn--warning toogle-sits">
                      Choose sit
                    </a>
                  </div>
                </div>
                <a href="#" className="watchlist add-sits-line">
                  Add new sit
                </a>
                <aside className="sits__checked">
                  <div className="checked-place">
                    <span className="choosen-place" />
                  </div>
                  <div className="checked-result">$0</div>
                </aside>
                <img alt src="images/components/sits_mobile.png" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="clearfix" />
      <form
        id="film-and-time"
        className="booking-form"
        method="get"
        action="book3-buy.html"
      >
        <input type="text" name="choosen-number" className="choosen-number" />
        <input
          type="text"
          name="choosen-number--cheap"
          className="choosen-number--cheap"
        />
        <input
          type="text"
          name="choosen-number--middle"
          className="choosen-number--middle"
        />
        <input
          type="text"
          name="choosen-number--expansive"
          className="choosen-number--expansive"
        />
        <input type="text" name="choosen-cost" className="choosen-cost" />
        <input type="text" name="choosen-sits" className="choosen-sits" />
        <div className="booking-pagination booking-pagination--margin">
          {/*           <a href="book1.html" className="booking-pagination__prev">
            <span className="arrow__text arrow--prev">prev step</span>
            <span className="arrow__info">what&amp;where&amp;when</span>
          </a> */}
          <a href="book3-buy.html" className="booking-pagination__next">
            <span className="arrow__text arrow--next">next step</span>
            <span className="arrow__info">checkout</span>
          </a>
        </div>
      </form>
    </div>
  );
}
