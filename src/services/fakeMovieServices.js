const movies = [
  {
    id: "Sb21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: { id: "5b21ca3eeb7f6fbccd471820", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 4,
    publishDate: "2018-01-03T19:04:28.8092",
  },
  {
    _id: "Sb21ca3eeb7f6fbcc6471816",
    title: "Die Hard",
    genre: { id: "5b21ca3eeb7f6fbccd471821", name: "Thriller" },
    numberInStock: 7,
    dailyRentalRate: 2.5,
    publishDate: "2018-07-13T19:21:28.8092",
  },
  {
    _id: "Sb21ca3eeb7f6fbcc6471817",
    title: "The Godfather",
    genre: { id: "5b21ca3eeb7f6fbccd471822", name: "Crime" },
    numberInStock: 9,
    dailyRentalRate: 2,
    publishDate: "2018-03-21T19:21:28.8092",
  },
  {
    _id: "Sb21ca3eeb7f6fbcc6471818",
    title: "Pulp Fiction",
    genre: { id: "5b21ca3eeb7f6fbccd471823", name: "Drama" },
    numberInStock: 5,
    dailyRentalRate: 3.5,
    publishDate: "2018-04-09T19:21:28.8092",
  },
  {
    _id: "Sb21ca3eeb7f6fbcc6471819",
    title: "Forrest Gump",
    genre: { id: "5b21ca3eeb7f6fbccd471822", name: "Crime" },
    numberInStock: 8,
    dailyRentalRate: 4.5,
    publishDate: "2018-03-21T19:21:28.8092",
  },
];

export function getMovies() {
  return movies;
}

// https://freetestapi.com/api/v1/movies
