import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import CardDetails from "./CardDetails";

const Card = ({ results }) => {
  let display;
  //console.log(results);

  if (results) {
    display = results.map((x) => {
      let { id, name, username, email } = x;
    
        return (
          <div
            key={id}
            className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
          >
            <div
  className={`${styles.card} d-flex flex-column justify-content-center`}
>
  {/* <img className={`${styles.img} img-fluid`} src={image} alt="" /> */}
  <div className={`${styles.content}`}>
    <div className="fs-5 fw-bold mb-4">{name}</div>
    <div className="">
      <div className="fs-6 fw-normal">Last Location</div>
      <div className="fs-5">{username}</div>
      <div className="fs-6 fw-normal">Emails
      </div>
      <div className="fs-5">{email}</div>
    </div>
  </div>
</div>
          </div>
      );
    });
  }
  else{
    display = "No Characters Found :/";
  }

  return <>{display}</>;
}

export default Card;
