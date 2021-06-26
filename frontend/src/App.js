import React from "react";
import PostCreate from "./Posts/PostCreate";
import PostList from "./Posts/PostList";

const App = () => {
    return (
        <div className="container">
            <h1>Create Post</h1>
            <PostCreate />
            <hr />
            <PostList />
        </div>
    );
};

export default App;