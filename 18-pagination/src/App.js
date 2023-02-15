import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);
  function handlePage(index) {
    setPage(index);
  }
  function handleBtn(e) {
    if (e.target.classList.contains("next-btn")) {
      if (page < followers.length - 1) {
        setPage(page + 1);
        // console.log(page + 1);
      } else {
        console.log("here");
        setPage(0);
      }
    }
    if (e.target.classList.contains("prev-btn")) {
      if (page > 0) {
        setPage(page - 1);
        // console.log(page + 1);
      } else {
        console.log("here");
        setPage(followers.length - 1);
      }
    }
    // console.log(e.target.classList);
  }
  useEffect(() => {
    // console.log(page);
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading" : "pagination"}</h1>
        <div className="underline" />
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={handleBtn}>
              prev
            </button>
            {data.map((_, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${page === index ? "active-btn" : ""}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={handleBtn}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
