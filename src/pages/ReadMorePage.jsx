import React from "react";

const ReadMorePage = ({ ArticleData }) => {
  return (
    <>
      <div className="readMore">
        <h3> Title: {ArticleData}</h3>
        <h5>
          <b>Description: </b> <br /> {ArticleData}
        </h5>
        <h5>Author: {ArticleData}</h5>
        <h5>Date: {ArticleData}</h5>
        <h5>Post: {ArticleData}</h5>
        <img src={ArticleData} alt="image" srcset="" />
        <h5>Image Caption: {ArticleData.img_caption}</h5>
      </div>
    </>
  );
};

export default ReadMorePage;
