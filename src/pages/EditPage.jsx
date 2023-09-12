import React, { useContext, useState, useEffect } from "react";
import { ArticleDataContext } from "../main";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Navbar from '../components/Navbar'
// import PropTypes from 'prop-types'

const EditPage = () => {
  const [records, setRecords] = useState("");
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [author, setAuthor] = useState("");
const [date, setDate] = useState(new Date());
const [img, setImg] = useState("");
const [img_caption, setImgCaption] = useState("");
const [body, setBody] = useState("");

const [ArticleData, setArticleData] = useState([]);
  const { articleId } = useParams(); // Get the articleId from the URL parameters
  const navigate = useNavigate();


function handleTitleChange(e) {
  setTitle(e.target.value);
}
function handleDescChange(e) {
  setDescription(e.target.value);
}

function handleAuthorChange(e) {
  setAuthor(e.target.value);
}
function handleDateChange(e) {
  setDate(e.target.value);
}

function handleImgInputChange(e) {
  const localImg = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(localImg);
  reader.onload = () => {
    setImg(reader.result);
  };
}
function handleImgCaptionChange(e) {
  setImgCaption(e.target.value);
}
function handleBodyChange(e) {
  setBody(e.target.value);
}

function handleChange(e) {
  const value = e.target.value;
  setRecords({
    ...records,
    [e.target.value]: value,
  });
}
const handleAdd = async (e) => {
  e.preventDefault();
  const dataSet = {
    // id: Math.random(),
    title: ArticleData.title,
    description: ArticleData.description,
    author: ArticleData.author,
    date: ArticleData.date,
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
    setTitle("");
    setDescription("");
    setAuthor("");
    setDate("");
    setImg("");
    setImgCaption("");
    setBody("");
};



  const handleChange2 = (e) => {
    const { name, value, type } = e.target;
    setArticleData({ ...ArticleData, 
      [name]: type === "file" ?  URL.createObjectURL(e.target.files[0])  : value });
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
      console.log(ArticleFromSever);
    };

    getArticleFromSever();
  }, []);



    return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="center-x">Updating a Blog</h1>
        <div className="container-2">
          <div className="form-container">
            <form onSubmit={handleAdd} id="create-form">
              <h4>Title</h4>
              <input
                type="text"
                name="title"
                className="text-input"
                placeholder=""
                value={ArticleData.title|| ''}
                onChange={handleChange2}
              />
              <h4>Description</h4>
              <input
                type="text"
                name="description"
                className="text-input"
                placeholder=""
                value={ArticleData.description|| ''}
                onChange={handleChange2}
              />
              <h4>Author</h4>
              <input
                type="text"
                name="author"
                className="text-input"
                placeholder=""
                value={ArticleData.author|| ''}
                onChange={handleChange2}
              />
              <h4>Date</h4>
              <input
                type="date"
                name="date"
                className="text-input"
                // value={ArticleData.date}
                onChange={handleDateChange}
              />
              <h4>Image</h4>
              <label htmlFor="file-input" className="file-label">
                Upload
              </label>
              <input
                type="file"
                id="file-input"
                name="image"
                accept="image/*"
                defaultValue={ArticleData.image}
                onChange={handleChange2}
                style={{ display: "none" }}
              />
              <br />
              <br />
              {ArticleData.image && <img src={ArticleData.image} alt="Selected" />}
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
                cols={20}
                rows={2} // Reduced rows for better visibility in this example
                onChange={handleChange2}
              />

              <div>
                <br />
                <button type="submit">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};


export default EditPage