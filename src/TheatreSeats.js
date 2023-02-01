import React, { useState } from "react";

export default function TheatreSeats(props) {
  const [chosen, setChosen] = useState([]);

  function handleChosen(e, id, number, isAvailable) {
    if (!isAvailable) {
      return;
    }
    if (chosen.includes(id)) {
      let arr = chosen;
      const index = arr.indexOf(id);
      arr.splice(index, 1);
      setChosen([...arr]);
      props.sitRemoved(id);
    } else {
      setChosen((current) => [...current, id]);
      props.sitChosen(id, number);
    }
  }

  return props.seats
    .map((s, index) => {
      let available = props.seatsColor;
      if (!s.available) {
        available = "sits-state--not";
      }
      return (
        <span
          key={s.id}
          className={
            chosen.includes(s.id)
              ? "sits__place " + available + " sits-state--your"
              : "sits__place " + available
          }
          data-place={s.id}
          onClick={(e) => handleChosen(e, s.id, s.seatNumber, s.available)}
        >
          {s.seatNumber}
        </span>
      );
    })
    .reduce(function (r, element, index) {
      index % props.seatsPerRow === 0 && r.push([]);
      r[r.length - 1].push(element);
      return r;
    }, [])
    .map(function (rowContent, ind) {
      return (
        <div key={ind} className="sits__row">
          {rowContent}
        </div>
      );
    });
}
