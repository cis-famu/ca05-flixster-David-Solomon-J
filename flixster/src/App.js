import React from "react";
import './App.css';
import {Route, BrowserRouter as Router, Routes, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviePg from "./components/MoviePg";
import Movielist from "./components/Movielist";

function App() {

  return (
      <Router>

          <div className="container" >

              <div className="row">
                  <div className="col-12">
                      <h3 className="display-4 page-title text-center m-3">Today's Films</h3>
                      <br/>
                  </div>
              </div>

          </div>
        <Routes>
            <Route path="/" element={<Movielist />}/>
            <Route path="/:movie" element={<MoviePg />}/>

        </Routes>
      </Router>
  );
}

export default App;
