import React, { useState, useEffect } from 'react';



const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //Simulating fetching blog posts from an API
        fetch('https://api.example.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setIsLoading(false);
            });
    }, []);

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(error) {
        return <div>Error: {error} </div>
    }



    return(
        <div>
          <h1>Blog</h1>
          {posts.map(post => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      );
    }

    export default BlogPage;