
export const genres = [
    {
      _id: "5b21ca3eeb7f6fbccd471820", 
      name: "Action" 
    },
    {
      _id: "5b21ca3eeb7f6fbccd471821",
        name: "Thriller" 
    },
    {
       _id: "5b21ca3eeb7f6fbccd471822", 
       name: "Crime"  
    },
    {
       _id: "5b21ca3eeb7f6fbccd471823", 
        name: "Drama" 
    }, 
  ];
  
  export function getGenres() {
    return genres.filter(g => g);
  }
  