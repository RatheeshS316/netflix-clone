
// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import PlayIconWhite from "../../assets/play-icon-white.png";
// import Navbar from "../../components/navbar/navbar";

// const Detail = () => {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [video, setVideo] = useState(null);

//   const options = {
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjNmOTU1YTlkMmY4ZjI0MTE2MTM5ZTdmZWI4Mzc3MyIsIm5iZiI6MTc1NjM1OTAyMy41MjYsInN1YiI6IjY4YWZlOTZmYmY1ZGI0ZjBkZWZhOTVlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gHcQ4hb2HiIZWOFE5Ld5tRDgSIxefY_K5c2Nx08Ukmc",
//     },
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const movieRes = await axios.get(
//           `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
//           options
//         );
//         setMovie(movieRes.data);

//         const videoRes = await axios.get(
//           `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
//           options
//         );
//         const trailer = videoRes.data.results.find((v) => v.type === "Trailer");
//         setVideo(trailer ? trailer.key : null);
//       } catch (err) {
//         console.error("Error fetching movie details:", err);
//       }
//     };

//     fetchData();
//   }, [id]);

//   if (!movie) return <Loading>Loading...</Loading>;

//   return (
//     <>
//       <Navbar />

//       <Container>
//         <Background>
//           <img
//             src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
//             alt={movie.title}
//           />
//           <Overlay />
//         </Background>

//         <Content>
//           <Left>
//             <MovieTitle>{movie.title}</MovieTitle>
//             <Meta>
//               <span>{movie.release_date?.split("-")[0]}</span>
//               <Rating>12+</Rating>
//               <span>{movie.runtime} min</span>
//               <span>{movie.genres?.map((g) => g.name).join(", ")}</span>
//             </Meta>

//             <Overview>{movie.overview}</Overview>

//             <Buttons>
//               <PlayButton>
//                 <img src={PlayIconWhite} alt="play" />
//                 Play
//               </PlayButton>
//               <MyListButton>+ My List</MyListButton>
//             </Buttons>
//           </Left>
//         </Content>

//         {video && (
//           <TrailerButton
//             onClick={() =>
//               window.open(`https://www.youtube.com/watch?v=${video}`, "_blank")
//             }
//           >
//             ▶ Watch Trailer
//           </TrailerButton>
//         )}
//       </Container>
//     </>
//   );
// };

// export default Detail;

// //
// // =========================
// // Styled Components (Netflix Theme)
// // =========================
// //

// const Container = styled.div`
//   position: relative;
//   color: #fff;
//   min-height: 100vh;
//   background: transparent;
//   overflow-x: hidden;
//   font-family: "Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
// `;

// const Loading = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   color: #fff;
//   font-size: 1.5rem;
// `;

// const Background = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   z-index: -1;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     filter: brightness(70%) contrast(110%);
//   }
// `;

// const Overlay = styled.div`
//   position: absolute;
//   inset: 0;
//   background: linear-gradient(
//     to right,
//     rgba(0, 0, 0, 0.27) 25%,
//     rgba(0, 0, 0, 0.07) 50%,
//     rgba(0, 0, 0, 0.1) 100%
//   );
// `;

// const Content = styled.div`
//   display: flex;
//   align-items: flex-start;
//   flex-direction: column;
//   padding: 180px 60px 60px;
//   z-index: 1;
//   position: relative;
//   animation: fadeIn 1.2s ease-in-out;

//   @keyframes fadeIn {
//     from {
//       opacity: 0;
//       transform: translateY(5%);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
// `;

// const Left = styled.div`
//   max-width: 650px;
// `;

// const MovieTitle = styled.h1`
//   font-size: 4rem;
//   font-weight: 900;
//   margin-bottom: 1rem;
//   text-shadow: 0 4px 20px rgba(0, 0, 0, 0.9);

//   @media (max-width: 768px) {
//     font-size: 2.5rem;
//   }
// `;

// const Meta = styled.div`
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
//   gap: 15px;
//   color: #b3b3b3;
//   font-size: 1rem;
//   margin-bottom: 1.5rem;

//   span:first-child {
//     color: #46d369;
//     font-weight: 600;
//   }
// `;

// const Rating = styled.span`
//   border: 1px solid #b3b3b3;
//   border-radius: 3px;
//   padding: 2px 6px;
//   font-size: 0.9rem;
// `;

// const Overview = styled.p`
//   color: #e5e5e5;
//   font-size: 1.1rem;
//   line-height: 1.6;
//   margin-bottom: 2rem;
//   max-width: 600px;
//   text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);

//   @media (max-width: 768px) {
//     font-size: 0.95rem;
//   }
// `;

// const Buttons = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin-top: 1rem;
// `;

// const PlayButton = styled.button`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   background: #ea1616ff;
//   color: #ffffffff;
//   border: none;
//   padding: 0.8rem 2rem;
//   border-radius: 4px;
//   font-size: 1.1rem;
//   font-weight: 600;
//   cursor: pointer;
//   transition: background 0.3s ease;

//   img {
//     width: 22px;
//   }

//   &:hover {
//     background: #dcdcdc;
//   }
// `;

// const MyListButton = styled.button`
//   background: rgba(0, 0, 0, 0.7);
//   color: #fff;
//   border: none;
//   padding: 0.8rem 2rem;
//   border-radius: 4px;
//   font-size: 1.1rem;
//   font-weight: 600;
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     background: rgba(109, 109, 110, 0.4);
//   }
// `;

// const TrailerButton = styled.button`
//   background: transparent;
//   color: #fff;
//   border: 1px solid #fff;
//   border-radius: 25px;
//   padding: 0.8rem 2rem;
//   margin: 2rem 4rem;
//   font-size: 1rem;
//   cursor: pointer;
//   letter-spacing: 0.5px;
//   transition: all 0.3s ease;
//   align-self: flex-start;

//   &:hover {
//     background: rgba(255, 255, 255, 0.15);
//   }
// `;



import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import PlayIconWhite from "../../assets/play-icon-white.png";
import Navbar from "../../components/navbar/navbar";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [video, setVideo] = useState(null);

  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjNmOTU1YTlkMmY4ZjI0MTE2MTM5ZTdmZWI4Mzc3MyIsIm5iZiI6MTc1NjM1OTAyMy41MjYsInN1YiI6IjY4YWZlOTZmYmY1ZGI0ZjBkZWZhOTVlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gHcQ4hb2HiIZWOFE5Ld5tRDgSIxefY_K5c2Nx08Ukmc",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [movieRes, videoRes] = await Promise.all([
          axios.get(
            `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
            options
          ),
          axios.get(
            `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
            options
          ),
        ]);

        setMovie(movieRes.data);
        const trailer = videoRes.data.results.find((v) => v.type === "Trailer");
        setVideo(trailer ? trailer.key : null);
      } catch (err) {
        console.error("Error fetching movie details:", err);
      }
    };

    fetchData();
  }, [id]);

  if (!movie)
    return <Loading>Loading movie details...</Loading>;

  return (
    <>
      <Navbar />

      <Container>
        <Background>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
          />
          <Overlay />
        </Background>

        <Content>
          <MovieTitle>{movie.title}</MovieTitle>
          <Meta>
            <span>{movie.release_date?.split("-")[0]}</span>
            <Rating>12+</Rating>
            <span>{movie.runtime} min</span>
            <span>{movie.genres?.map((g) => g.name).join(", ")}</span>
          </Meta>

          <Overview>{movie.overview}</Overview>

          <Buttons>
            <PlayButton>
              <img src={PlayIconWhite} alt="play" />
              Play
            </PlayButton>
            <MyListButton>+ My List</MyListButton>
          </Buttons>

          {video && (
            <TrailerButton
              onClick={() =>
                window.open(`https://www.youtube.com/watch?v=${video}`, "_blank")
              }
            >
              ▶ Watch Trailer
            </TrailerButton>
          )}
        </Content>
      </Container>
    </>
  );
};

export default Detail;

/* ------------------ Styled Components ------------------ */

const Container = styled.div`
  position: relative;
  color: #fff;
  min-height: 100vh;
  overflow-x: hidden;
  background: transparent;
  font-family: "Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #fff;
  font-size: 1.5rem;
`;

const Background = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(70%) contrast(110%);
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.6) 20%,
    rgba(0, 0, 0, 0.3) 60%,
    rgba(0, 0, 0, 0.1) 100%
  );
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 180px 60px 60px;
  z-index: 1;
  animation: fadeIn 1.2s ease-in-out;
  margin-top: 150px;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 120px 25px 40px;
  }
`;

const MovieTitle = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.9);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  color: #b3b3b3;
  font-size: 1rem;
  margin-bottom: 1.5rem;

  span:first-child {
    color: #46d369;
    font-weight: 600;
  }
`;

const Rating = styled.span`
  border: 1px solid #b3b3b3;
  border-radius: 3px;
  padding: 2px 6px;
  font-size: 0.9rem;
`;

const Overview = styled.p`
  color: #e5e5e5;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 600px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`;

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #e50914;
  color: #fff;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  img {
    width: 22px;
  }

  &:hover {
    background: #f40612;
  }
`;

const MyListButton = styled.button`
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(109, 109, 110, 0.4);
  }
`;

const TrailerButton = styled.button`
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 25px;
  padding: 0.8rem 2rem;
  margin-top: 2rem;
  font-size: 1rem;
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;
