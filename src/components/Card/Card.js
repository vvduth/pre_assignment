import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import Avatar from "react-avatar";
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
              <div className="img-fluid" alt="" >
                  {/* <Gravatar size={150} email={name} default="identicon" style = {{borderRadius: "10px"}} /> */}
                  <Avatar name = {name}  size = {150} round = {true}/>
              </div>
              <div className={`${styles.content}`}>
                <div className="fs-5 fw-bold mb-4">{name}</div>
                <div className="">
                  <div className="fs-6 fw-normal"></div>
                  <div className="fs-5">{username}</div>
                <div className="fs-6 fw-normal">Emails</div>                  
                <div className="fs-5">{email}</div>
                <Link
                    style={{ textDecoration: "none" }}
                    to={`${id}`}
                    key={id}
                    className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark">
                <button
                    className="accordion-button" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne"
                > More details </button>
                </Link>
              </div>
            </div>
            </div>
            
          </div>
        
        
      );
    });
  }
  else {
    display = "No User Found :/";
  }

  return <>{display}</>;
}

export default Card;
