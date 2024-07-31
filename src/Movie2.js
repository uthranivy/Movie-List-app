// Run json after start npm

import React, { useState, useEffect } from "react";
import axios from "axios";

const Movie2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3004/movies").then((res) => setData(res.data));
  }, []);

  return (
    <React.Fragment>
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
          </tr>
        </thead>
        <tbody>
          {data.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Movie2;
