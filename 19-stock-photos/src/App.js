import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    console.log("HELLO");
  }
  async function fetchImages() {
    setLoading(true);
    let url;
    url = `${mainUrl}${clientID}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    console.log(
      !loading &&
        window.innerHeight + window.screenY >= document.body.scrollHeight - 2
    );
    const event = window.addEventListener("scroll", () => {
      if (
        !loading &&
        window.innerHeight + window.screenY >= document.body.scrollHeight - 2
      ) {
        console.log("it worked");
      }
    });
  }, []);
  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input type="text" className="form-input" placeholder="search" />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((photo, index) => {
            return <Photo key={photo.id} {...photo} />;
          })}
        </div>
        {loading && <h2 className="loading">Loading</h2>}
      </section>
    </main>
  );
}

export default App;
