export interface Rating {
    Source: string;
    Value: string;
  }
  
  export interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }
  
  export interface MovieDetails extends Movie {
    Language: string;
    Ratings: Rating[];
  }
  