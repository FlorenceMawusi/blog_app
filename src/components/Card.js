import React from "react";
import { navigate } from "@reach/router";

export default function Card(props) {
  const { title, content, id, img, allPosts } = props;

  
  return (
    <center>
      <div
        onClick={() => {
          navigate(`/post/${id}`,{ state: { allPosts: allPosts } });
        }}
        className="card mt-5"
        style={{ width: "40rem", cursor: 'pointer'}}
      >
        <img className="card-img-top" src={`${process.env.PUBLIC_URL}/assets/${img}`} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}...</p>
        </div>
      </div>
    </center>
  );
}
