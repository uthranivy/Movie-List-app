import React from "react";

function Table(props) {
  let clickME = (movie) => {
    console.log(movie);
    props.clickME(movie);
  };

  return (
    <div>
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {props.movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <button
                  type="button"
                  onClick={() => clickME(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
