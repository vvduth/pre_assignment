import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, username, company, email, phone, address ,website} = fetchedData;

  let api = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  
  
  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>

        {/* <img className="img-fluid" src={image} alt="" /> */}
        
        <div className="content">
          <div className="">
            <span className="fw-bold">Name : </span>
            {name}
          </div>
          <div className="">
            <span className="fw-bold">Email: </span>
            {email}
          </div>
          <div className="">
            <span className="fw-bold">Username: </span>
            {username}
          </div>
          <div className="">
            <span className="fw-bold">Phone: </span>
            {phone}
          </div>
          <div className="">
            <span className="fw-bold">Company: </span>
            {company?.name}
          </div>
          <div className="">
            <span className="fw-bold">Website: </span>
            {website}
          </div>
          <div className="">
            <span className="fw-bold">Address: </span>
          <ul>
            <li> Street:  {address?.street}</li>
            <li> Suite:  {address?.suite}</li>
            <li> City:  {address?.city}</li>
            <li> Zipcode:  {address?.zipcode}</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
