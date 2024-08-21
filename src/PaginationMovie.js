 
import React, { Component } from "react";
// import Table from "./Table";
import { getGenres } from "./services/fakeGenreservice";
import { getMovies } from "./services/fakeMovieServices";
import Pagination from "./Common/pagination";
import { paginate } from "./utils/paginate";
import ListGroup from "./Common/ListGroup";

class PaginationMovie extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 3
  };

  componentDidMount(){

    const genres = [{name: 'All Genres'}, ...getGenres()]

    this.setState({
      movies:getMovies(),
      // genres: getGenres()
      genres
    })
  }

  handleGenreSelect = genre => { 
    console.log(genre)
    this.setState({
      selectedGenre:  genre,
      currentPage:1
    })
  } 
    
  handleDelete = (movie) => {
    const moviesDelete = this.state.movies.filter((m) => m._id !== movie._id);

    this.setState({
      movies: moviesDelete,
    });
  };

  handlePage = (page) =>{
        console.log(page)
        this.setState({
          currentPage:page
        })
  }

  render() {

      // Alternative for this line this.state.movies.length
      const{length: count} = this.state.movies; 

      // Alternative for this line this.state.pageSize
      const{pageSize,currentPage,movies:allMovies,selectedGenre} = this.state;

      const filtered = selectedGenre  && selectedGenre._id
                        ? allMovies.filter(m => m.genre.id === selectedGenre._id)
                        : allMovies;


      const moviesPaginate = paginate(filtered,currentPage,pageSize)
      console.log(moviesPaginate)

      
    return count === 0 ? (
      <p>There is no movies in the database</p>
    ) : (
      <div className="row">
        <div className="col-3">
            <ListGroup 
              items={this.state.genres}
              onItemSelect={this.handleGenreSelect}
              selectedItem={this.state.selectedGenre}
              textProperty = "name"
              valueProperty = "_id"
            />
        </div>
          <div className="col-9"> 
            <p> Showing {filtered.length} movies in the database</p>
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
                {moviesPaginate.map((movie) => (
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
              <Pagination 
                    itemCount = {filtered.length}
                    pageSize = {pageSize}
                    currentPage ={currentPage}
                    onPageChange ={this.handlePage}
              /> 
          </div> 
      </div>
     
    );
  }
}

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id'
}

export default PaginationMovie; 