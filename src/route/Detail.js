import React, { useEffect } from "react";
import "./Detail.css";

export default function Detail(props) {
  const { state } = props.location;
  console.log(state);
  useEffect(() => {
    if (state === undefined) {
      props.history.push("/");
    }
  });
  if (state !== undefined) {
    return (
      <section className="detail">
        <h1>{state.title}</h1>
        <img src={state.img} />
        <h4>{state.year}</h4>
        <h4 className="detail__summary">{state.summary}</h4>
        <h4>{state.rating}</h4>
        <ul className="detail__ul">
          {state.genres.map((genre, i) => (
            <li classname="detail__li" key={i}>
              {genre}
            </li>
          ))}
        </ul>
      </section>
    );
  } else {
    return null;
  }
}
