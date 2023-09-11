import React, { useContext, useState, useEffect } from "react";
import { ArticleDataContext } from "../main";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";


const ReadMorePage = () => {
  const [ArticleData, setArticleData] = useState([]);
  const { articleId } = useParams(); // Get the articleId from the URL parameters
  const navigate = useNavigate();

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/records/${articleId}`
      );
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
      console.log(ArticleFromSever);
    };

    getArticleFromSever();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/records/${articleId}`);
      setArticleData((prevData) => prevData.filter((a) => a.id !== articleId));
      window.alert("Record deleted");
      navigate("/");
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  //end of f018 code
  // "title": "ghg",
  // "description": "fg",
  // "author": "gfh",
  // "date": "2023-09-07",
  // "image":
  return (
    <>
    <Navbar />
      <div className="readMore">
        <h1>Title: {ArticleData.title}</h1>
        <h1>Description: {ArticleData.description}</h1>
        <h1>Author: {ArticleData.author}</h1>
        <h1>Date: {ArticleData.date}</h1>
        <h1>
          <img src={ArticleData.image} alt="" />
        </h1>
        <h1>Body: {ArticleData.body}</h1>
        <h1><button onClick={handleDelete}>Delete</button></h1>
        <h1>
          <NavLink
          to={{
            pathname: `/editPage/${ArticleData.id}`,
            state: { Article: ArticleData },
          }}
          className={"articles__button"}
        >
          <span>Edit</span></NavLink>
          </h1> 
          
        
        
      </div>
    </>
  );
};

export default ReadMorePage;
