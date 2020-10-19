import React, { useState, useRef } from "react";
import CreateNewPost from "./CreateNewPost";
import Blogs from "./Blogs.js";
import Card from "./Card.js";

const DisplayAllPosts = ({ changeThemeHandler, }) => {
  const getTitle = useRef();
  const getContent = useRef();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  const [allPosts, setAllPosts] = useState(Blogs);

  const savePostTitleToState = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };
  const savePostContentToState = (event) => {
    setContent(event.target.value);
    console.log(content);
  };

  const savePost = (event) => {
    event.preventDefault();
    const id = String(allPosts.length +1);
    const img = "EI1.png";
    setAllPosts([...allPosts, { title, content, id, img}]);
    getTitle.current.value = "";
    getContent.current.value = "";
    setIsCreateNewPost(false);
  };

  return (
    <div className="container">
      <div className="row mt-5 ">
        <div className="col-sm-12 ">
          <button
            className="btn btn-secondary float-left"
            onClick={() => changeThemeHandler()}
          >
            Change Theme
          </button>
          {isCreateNewPost === true ? (
            <button
              className="btn btn-secondary float-right  "
              onClick={() => {
                setIsCreateNewPost(false);
              }}
            >
              Back
            </button>
          ) : (
            <button
              className="btn btn-secondary float-right"
              onClick={() => {
                setIsCreateNewPost(true);
              }}
            >
              Create New
            </button>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 ">
          {isCreateNewPost === true && (
            <CreateNewPost
              savePostTitleToState={savePostTitleToState}
              savePostContentToState={savePostContentToState}
              getTitle={getTitle}
              getContent={getContent}
              savePost={savePost}
            />
          )}
          <div>
            <h3 className="text-center">Latest Blogs</h3>
          </div>
          {isCreateNewPost === false &&
            allPosts.map((eachPost) => {
              return (
                <Card
                  id={eachPost.id}
                  key={eachPost.id}
                  title={eachPost.title}
                  img = {eachPost.img}
                  content={eachPost.content.substring(0, 100)}
                  allPosts = {allPosts}
                />
              );
            })}


        </div>
      </div>
    </div>
  );
};

export default DisplayAllPosts;
