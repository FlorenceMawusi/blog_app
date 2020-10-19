import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = (props) => {
  const allPosts = props.location.state.allPosts;
  console.log("allposts", allPosts);
  const { id } = props;
  console.log("id", id);
  const [blog, setBlog] = useState({});
  const [upVote, setUpVote] = useState(6);
  const [downVote, setDownVote] = useState(2);
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([
    { comment: "Nice article!", id: "1" },
    { comment: "Splendid", id: "2" },
  ]);

  const saveComment = (event) => {
    event.preventDefault();
    if (!comment) {
      alert("Please enter something");
    } else {
      const id = Date.now();
      setAllComments([...allComments, { comment, id }]);
      setComment("");
    }
  };

  useEffect(() => {
    const blog = allPosts.filter((eachBlog) => {
      return eachBlog.id === id;
    });
    console.log(blog);
    setBlog(blog[0]);
  }, [id, allPosts]);

  return (
    <div class="container">
      <div className="card mt-5" style={{ width: "60rem", padding: "5em" }}>
        <img
          className="card-img-top"
          src={`${process.env.PUBLIC_URL}/assets/${blog.img}`}
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text">{blog.content}...</p>
        </div>

        <div className="row">
          <button
            className="btn"
            onClick={() => setUpVote((prevCount) => prevCount + 1)}
          >
            <FontAwesomeIcon icon="thumbs-down" />
          </button>
          <p>{upVote}</p>
          <button
            className="btn ml-1"
            onClick={() => setDownVote((prevCount) => prevCount + 1)}
          >
            <FontAwesomeIcon icon="thumbs-up" />
          </button>
          {downVote}
        </div>
        <br />
        <h5>Anonymous Comments</h5>
        <div className="row">
          <ul className="list-group list-group-flush">
            {allComments.map((eachComment) => {
              return (
                <>
                  <li className="list-group-item" key={eachComment.id}>
                    {eachComment.comment}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <div className="row">
          <input
            className="form-control"
            placeholder="Comment"
            type="text"
            value={comment}
            onChange={(event) => {
              setComment(event.target.value);
            }}
          />
          <button className="btn btn-secondary mt-3 " onClick={saveComment}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
