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
    title: title,
    description: description,
    author: author,
    date: date,
    image: img,
    img_caption: img_caption,
    body: body,
  };
  axios
    .post("http://localhost:3000/records", dataSet)
    .then((res) => {
      console.log(res.data);
      alert("Blog data save!!");
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
                value={title}
                onChange={handleTitleChange}
              />
              <h4>Description</h4>
              <input
                type="text"
                name="description"
                className="text-input"
                placeholder=""
                value={description}
                onChange={handleDescChange}
              />
              <h4>Author</h4>
              <input
                type="text"
                name="author"
                className="text-input"
                placeholder=""
                value={author}
                onChange={handleAuthorChange}
              />
              <h4>Date</h4>
              <input
                type="date"
                name="date"
                className="text-input"
                value={date}
                onChange={handleDateChange}
              />
              <h4>Image</h4>
              <label htmlFor="file-input" className="file-label">
                Upload
              </label>
              <input
                type="file"
                id="file-input"
                name="img"
                accept="image/*"
                className="file-input"
                defaultValue={img}
                onChange={handleImgInputChange}
                style={{ display: "none" }}
              />
              <br />
              <br />
              {img && <img src={img} alt="Selected" />}
              <h4>Image Caption</h4>
              <input
                type="text"
                className="text-input"
                name="img_caption"
                value={img_caption}
                onChange={handleImgCaptionChange}
              />
              <h4>Body</h4>
              <textarea
                type="text"
                className="text-area"
                name="body"
                value={body}
                cols={20}
                rows={2} // Reduced rows for better visibility in this example
                onChange={handleBodyChange}
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