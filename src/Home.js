import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // eslint-disable-next-line

  const {data: blogs,isPending,error} = useFetch("http://localhost:8000/blogs");


  return (
    <div className="home">
      {!isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs}  />}
    </div>
  );
}

export default Home;