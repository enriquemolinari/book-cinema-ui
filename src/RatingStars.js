import React, { useState, useEffect } from "react";

export default function RatingStars(props) {
  let initialRating = ["off", "off", "off", "off", "off"];
  const [rating, setRating] = useState(initialRating);

  useEffect(() => {
    let ra = initialRating;
    for (let i = 0; i < parseInt(props.value); i++) {
      ra[i] = "on";
    }
    setRating([...ra]);
  }, [props.random]);

  return (
    <span>
      <img src={"images/rate/star-" + rating[0] + ".svg"} />
      &nbsp;
      <img src={"images/rate/star-" + rating[1] + ".svg"} />
      &nbsp;
      <img src={"images/rate/star-" + rating[2] + ".svg"} />
      &nbsp;
      <img src={"images/rate/star-" + rating[3] + ".svg"} />
      &nbsp;
      <img src={"images/rate/star-" + rating[4] + ".svg"} />
    </span>
  );
}
