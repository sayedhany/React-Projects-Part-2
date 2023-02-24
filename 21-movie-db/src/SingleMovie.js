import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";

const SingleMovie = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setloading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });

  const fetchMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    if (!data.Response) {
      setError({ show: true, msg: data.Error });
      setloading(false);
    } else {
      setMovie(data);
      setloading(false);
    }
  };
  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`);
  }, [id]);

  if (loading) {
    return <div className="loading"></div>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </div>
    );
  }
  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;
  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to="/" className="btn">
          back to home
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
