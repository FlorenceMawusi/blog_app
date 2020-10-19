import React from 'react'

const CreateNewPost = props => {
    return (
        <>
        <center style ={{marginLeft:"10em", marginRight:"10em"}}>
           <form onSubmit = {props.savePost}>
                <h1>Create A New Post</h1>
                <input
                    className="form-control"
                    type="text"
                    onChange={props.savePostTitleToState}
                    placeholder="Title"
                    size= "39"
                    required
                    ref = {props.getTitle}
                />
                <br/>
                <br/>

                <textarea 
                    className="form-control"
                    onChange={props.savePostContentToState}
                    placeholder="Contents"
                    rows="8"
                    cols="41"
                    required
                    ref = {props.getContent}
                />
                <br />
                <br />
                <button className= "btn btn-secondary">Save Post</button>
            </form>
        </center>  
        </>
    )
}

export default CreateNewPost;
