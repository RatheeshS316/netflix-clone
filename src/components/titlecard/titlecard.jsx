

// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import "./titlecard.css";

// const Titlecard = () => {
//   const [movies, setMovies] = useState({
//     now_playing: [],
//     popular: [],
//     top_rated: [],
//     upcoming: [],
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const refs = {
//     now_playing: useRef(),
//     popular: useRef(),
//     top_rated: useRef(),
//     upcoming: useRef(),
//   };

//   const handleScroll = (ref) => (event) => {
//     event.preventDefault();
//     ref.current.scrollLeft += event.deltaY;
//   };

//   const API_OPTIONS = {
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjNmOTU1YTlkMmY4ZjI0MTE2MTM5ZTdmZWI4Mzc3MyIsIm5iZiI6MTc1NjM1OTAyMy41MjYsInN1YiI6IjY4YWZlOTZmYmY1ZGI0ZjBkZWZhOTVlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gHcQ4hb2HiIZWOFE5Ld5tRDgSIxefY_K5c2Nx08Ukmc",
//     },
//   };

//   useEffect(() => {
//     const fetchAll = async () => {
//       try {
//         const categories = ["now_playing", "popular", "top_rated", "upcoming"];

//         const responses = await Promise.all(
//           categories.map((cat) =>
//             fetch(
//               `https://api.themoviedb.org/3/movie/${cat}?language=en-US&page=1`,
//               API_OPTIONS
//             ).then((res) => res.json())
//           )
//         );

//         const seenIds = new Set();
//         const data = {};
//         categories.forEach((cat, i) => {
//           data[cat] = responses[i].results
//             .filter((m) => m.backdrop_path)
//             .filter((m) => {
//               if (seenIds.has(m.id)) return false;
//               seenIds.add(m.id);
//               return true;
//             });
//         });

//         setMovies(data);
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load movies");
//         setLoading(false);
//       }
//     };

//     fetchAll();
//   }, []);

//   useEffect(() => {
//     Object.values(refs).forEach((ref) => {
//       const el = ref.current;
//       if (el) {
//         const scrollHandler = handleScroll(ref);
//         el.addEventListener("wheel", scrollHandler);
//         return () => el.removeEventListener("wheel", scrollHandler);
//       }
//     });
//   }, []);

//   if (loading) return <div className="tc-maincontainer">Loading...</div>;
//   if (error) return <div className="tc-maincontainer">{error}</div>;

//   const sections = [
//     { title: "Trending Now", key: "now_playing" },
//     { title: "Popular on Netflix", key: "popular" },
//     { title: "Top Rated Movies", key: "top_rated" },
//     { title: "Upcoming Releases", key: "upcoming" },
//   ];

//   return (
    
//     <div className="tc-maincontainer">
//       {sections.map((section, i) => (
//         <div className="tc-container" key={i}>
//           <h2>{section.title}</h2>
//           <div className="tc-img" ref={refs[section.key]}>
//             {movies[section.key].map((movie) => (
//               <Link
//                 to={`/movie/${movie.id}`}
//                 key={movie.id}
//                 style={{ textDecoration: "none", color: "inherit" }}
//               >
//                 <div className="tc-card">
//                   <img
//                     src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
//                     alt={movie.title}
//                   />
//                   <div className="tc-overlay">
//                     <p>{movie.title}</p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Titlecard;


import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./titlecard.css";

const Titlecard = () => {
  const [movies, setMovies] = useState({
    now_playing: [],
    popular: [],
    top_rated: [],
    upcoming: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refs = {
    now_playing: useRef(null),
    popular: useRef(null),
    top_rated: useRef(null),
    upcoming: useRef(null),
  };

  const API_OPTIONS = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjNmOTU1YTlkMmY4ZjI0MTE2MTM5ZTdmZWI4Mzc3MyIsIm5iZiI6MTc1NjM1OTAyMy41MjYsInN1YiI6IjY4YWZlOTZmYmY1ZGI0ZjBkZWZhOTVlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gHcQ4hb2HiIZWOFE5Ld5tRDgSIxefY_K5c2Nx08Ukmc",
    },
  };

  // ✅ Smooth horizontal scroll
  const handleScroll = (ref) => (event) => {
    event.preventDefault();
    ref.current.scrollLeft += event.deltaY * 0.5;
  };

  // ✅ Fetch all categories
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const categories = ["now_playing", "popular", "top_rated", "upcoming"];
        const responses = await Promise.all(
          categories.map((cat) =>
            fetch(
              `https://api.themoviedb.org/3/movie/${cat}?language=en-US&page=1`,
              API_OPTIONS
            ).then((res) => res.json())
          )
        );

        const seenIds = new Set();
        const data = {};

        categories.forEach((cat, i) => {
          data[cat] = responses[i].results
            ?.filter((m) => m.backdrop_path)
            ?.filter((m) => {
              if (seenIds.has(m.id)) return false;
              seenIds.add(m.id);
              return true;
            }) || [];
        });

        setMovies(data);
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError("Failed to load movies.");
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  // ✅ Attach scroll listeners safely
  useEffect(() => {
    const scrollHandlers = [];

    Object.entries(refs).forEach(([key, ref]) => {
      const el = ref.current;
      if (el) {
        const handler = handleScroll(ref);
        el.addEventListener("wheel", handler, { passive: false });
        scrollHandlers.push({ el, handler });
      }
    });

    // Cleanup on unmount
    return () => {
      scrollHandlers.forEach(({ el, handler }) =>
        el.removeEventListener("wheel", handler)
      );
    };
  }, []);

  if (loading) return <div className="tc-maincontainer">Loading...</div>;
  if (error) return <div className="tc-maincontainer">{error}</div>;

  const sections = [
    { title: "Trending Now", key: "now_playing" },
    { title: "Popular on Netflix", key: "popular" },
    { title: "Top Rated Movies", key: "top_rated" },
    { title: "Upcoming Releases", key: "upcoming" },
  ];

  return (
    <div className="tc-maincontainer">
      {sections.map((section) => (
        <div className="tc-container" key={section.key}>
          <h2>{section.title}</h2>
          <div className="tc-img" ref={refs[section.key]}>
            {movies[section.key]?.map((movie) => (
              <Link
                to={`/movie/${movie.id}`}
                key={movie.id}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="tc-card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.title}
                  />
                  <div className="tc-overlay">
                    <p>{movie.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Titlecard;
