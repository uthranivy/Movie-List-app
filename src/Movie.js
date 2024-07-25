import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieServices";

class Movie extends Component {
  state = {
    movies: getMovies(),
  };

  // this.handleDelete = this.handleDelete.bind(this);

  handleDelete = (movie) => {
    const moviesDelete = this.state.movies.filter((m) => m._id !== movie._id);

    this.setState({
      movies: moviesDelete,
    });
  };

  render() {
    return this.state.movies.length === 0 ? (
      <p>There is no movies in the database</p>
    ) : (
      <div>
        <p> Showing {this.state.movies.length} movies in the database</p>
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
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => this.handleDelete(movie)}
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
}

export default Movie;
