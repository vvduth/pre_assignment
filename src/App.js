import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";

import Card from "./components/Card/Card";

import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CardDetails from "./components/Card/CardDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  
  let [fetchedData, updateFetchedData] = useState([]);
  
  let { info, results } = fetchedData;

  //let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
   //let api = `https://rickandmortyapi.com/api/character/?page=1`;
  let api = `https://jsonplaceholder.typicode.com/users`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
      console.log(data);
      console.log(results);
    })();
  }, [api]);
  return (
    <div className="App">
      <h1 className="text-center mb-3">Users</h1>
      
            <div className="row">
              <Card page="/" results={fetchedData} />
            </div>
    </div>
         
  );
};

export default App;
