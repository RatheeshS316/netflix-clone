
import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "../../helpers/axios";
import requests from "../../helpers/request";
import playButton1 from "../../assets/play-icon-black.png";
import playButton2 from "../../assets/play-icon-white.png";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(requests.fetchNetflixOriginals);
        const results = data.data.results;
        setMovies(results);
        setMovie(results[Math.floor(Math.random() * results.length)]);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    fetchData();
  }, []);

  // Automatically change banner every 5 seconds
  useEffect(() => {
    if (movies.length > 0) {
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * movies.length);
        setMovie(movies[randomIndex]);
      }, 5000); // change every 5 sec

      return () => clearInterval(interval);
    }
  }, [movies]);

  function truncate(string, n = 150) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
         {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button"> <img src={playButton1} alt="play" />Play</button>
          <button className="banner_button"><img src={playButton2} /> My List </button>
        </div>

        <h1 className="banner_description">{truncate(movie?.overview)}</h1>
      </div>

      {/* fade effect inside the banner */}
      <div className="banner_fadeBottom"></div>
    </div>
  );
};

export default Banner;
