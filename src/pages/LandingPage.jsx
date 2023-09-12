import React from "react";
import "../css/LandingPageStyles.css";
import Navbar from "../components/Navbar";
import landingPageImg from "../assets/images/milad-fakurian-oWrRKdwi5xk-unsplash.jpg";
import DisplayPage from "./DisplayPage";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
// import ReadMorePage from "./ReadMorePage";
import { useNavigate } from "react-router-dom";
import { ArticleDataContext } from "../main";

const LandingPage = () => {
  const navigate =  useNavigate();
  // const [ArticleData, setArticleData] = useState([]);
  const { ArticleData, setArticleData } = useContext(ArticleDataContext);
  // const [readClicked, setReadClicked] = useState(false);
  const [featuredArticles, setFeaturedArticles] = useState(false);

  const fetchArticles = async () => {
    try {
      const response = await axios.get("http://localhost:3000/records");
      const data = response.data;

      return data;
    } catch (error) {
      // Handle any errors here
      console.error("Error fetching data:", error);
      throw error; // You can choose to rethrow the error or handle it differently
    }
  };

  useEffect(() => {
    const getArticleFromSever = async () => {
      const ArticleFromSever = await fetchArticles();
      setArticleData(ArticleFromSever);
    };
    getArticleFromSever();
  }, []);

  return (
    <>
      <Navbar />

      <div class="split-screen">
        {/* <!-- Left content --> */}
        <div class="split-screen__half">
          <h1 className="text-padding text-center">Welcome to my blog!</h1>
          <p className="text-padding">
            Are you a tech enthusiast, a comedy lover, a reader, a gamer, or
            just someone curious about the universe and spirituality? If yes,
            you've landed on the perfect page!
          </p>
          <p className="text-padding">
            What You'll Find Here: Tech Insights: Dive into the latest tech
            trends, programming tips, and insights from my journey to becoming a
            full stack developer. Comedy Corner: Join me in a world of laughter
            with reviews of stand-up specials, recommendations for comedic
            podcasts, and hilarious anecdotes. Book Nook: Explore the literary
            universe with book reviews, reading recommendations, and discussions
            on thought-provoking topics. Musical Notes: Get your groove on as we
            explore diverse musical genres, artists, and playlists that'll make
            your day.
          </p>
          <button
            className="split-screen-button"
            onClick={() => setFeaturedArticles(!featuredArticles)}
          >
            Featured articles
          </button>
          <button
            className="split-screen-secondary-button"
            onClick={() => navigate("/createPage")}
          >
            Create articles
          </button>
        </div>

        {/* <!-- Right content --> */}
        <div class="split-screen__half">
          <img
            src={landingPageImg}
            className="split-screen-img"
            alt="hero page"
       
          />
        </div>
      </div>

      {/* <div className="articles">
        <DisplayPage ArticleData={ArticleData} />
      </div> */}

      {/* Step 3: Conditionally render ReadMorePage based on readClicked state */}
      {featuredArticles && (
        <div className="articles">
          <DisplayPage ArticleData={ArticleData} />
        </div>
      )}
    </>
  );
};

export default LandingPage;
