import React, { useContext, useState, useEffect } from "react";
import { ArticleDataContext } from "../main";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


import Navbar from '../components/Navbar'
// import PropTypes from 'prop-types'

const EditPage = () => {
  const [records, setRecords] = useState("");


const [ArticleData, setArticleData] = useState([]);
  const { articleId } = useParams(); // Get the articleId from the URL parameters
  const navigate = useNavigate();


function handleChange(e) {
  const value = e.target.value;
  setRecords({...records,[e.target.value]: value,
  });
}


const handleChange2 = (e) => {
  const { name, value, type } = e.target;
  setArticleData({ ...ArticleData, 
    [name]: type === "file" ?  URL.createObjectURL(e.target.files[0])  : value });
};

const handleAdd = async (e) => {
  e.preventDefault();
  const dataSet = {
    // id: Math.random(),
    title: ArticleData.title,
    description: ArticleData.description,
    author: ArticleData.author,
    // date: date,
    image: ArticleData.image,
    img_caption: ArticleData.img_caption,
    body: ArticleData.body,
  };
  axios
    .put(`http://localhost:3000/records/${articleId}`, dataSet)
    .then((res) => {
      console.log(res.data);
      alert("Blog data save!!");
      navigate("/");
      if (res.ok) {
        alert("Blog data save!!");
        
      }
    })
    .catch((error) => {
      console.log(error);
    });
 
};



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
    }

    getArticleFromSever();
  }, []);




return (
  <>
    <Navbar />
    <div className="container">
      <h1 className="center-x">Creating a Blog </h1>
      <div className="container-2">
        <form onSubmit={handleAdd} id="create-form">
          <h4>Title</h4>
          <input
            type="text"
            name="title"
            className="text-input"
            placeholder=""
            value={ArticleData.title|| ''}
            onChange={handleChange2}
          ></input>
          <h4>Description</h4>
          <input
            type="text"
            name="description"
            className="text-input"
            placeholder=""
            value={ArticleData.description|| ''}
            onChange={handleChange2}
          ></input>
          <h4>Author</h4>
          <input
            type="text"
            name="author"
            className="text-input"
            placeholder=""
            value={ArticleData.author|| ''}
            onChange={handleChange2}
          ></input>
          {/* <h4>Date</h4>
          <input
            type="date"
            name="date"
            className="text-input"
            value={date}
            onChange={handleDateChange}
          ></input> */}
          <h4>image</h4>
          <input
            type="file"
            name="image"
            accept="image/*"
            defaultValue={ArticleData.image}
            onChange={handleChange2}
          />
          <br />
          <br />
          <img src={ArticleData.image} />
          <br />
          <h4>Image Caption</h4>
          <input
            type="text"
            className="text-input"
            name="img_caption"
            value={ArticleData.img_caption}
            onChange={handleChange2}
          />
          <h4>Body</h4>
          <textarea
            type="text"
            className="text-area"
            name="body"
            value={ArticleData.body}
            col={60}
            rows={30}
            onChange={handleChange2}
          />
          <NavLink to="/" />
          <div>
            <br></br>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </>
);
};


export default EditPage