import React, { useState, useContext, useEffect } from "react";
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
console.log(API_ENDPOINT);
const initState = {
  isLoading: true,
  error: {show: false, msg:''},
  movies: [],
  query: '',
}
const AppContext = React.createContext(initState);

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({show: false, msg:""});
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('batman');

  const fetchMovies = (url)=>{

  }

  useEffect(()=>{
    fetchMovies(`${API_ENDPOINT}`);
  }, [])
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
 