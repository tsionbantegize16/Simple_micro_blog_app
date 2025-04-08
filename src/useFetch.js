import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const [blogs, setBlogs] = useState(null); // State to store the blogs data
  const [isPending, setIsPending] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for errors

  // Using custom hook `useFetch` to fetch blogs data
  const { data: blogsFromFetch, isPending: isPendingFetch, error: errorFetch } = useFetch('http://localhost:8000/blogs');

  useEffect(() => {
    // Legacy approach with useEffect for fetching data (not necessary when using `useFetch`)
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          if (!res.ok) { // Handle error if response is not OK
            throw new Error('Could not fetch the data for that resource');
          }
          return res.json();
        })
        .then(data => {
          setIsPending(false);
          setBlogs(data);
          setError(null);
        })
        .catch(err => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  // Prioritize fetching from custom `useFetch` hook if it's available
  const dataToDisplay = blogsFromFetch || blogs;
  const isLoading = isPendingFetch || isPending;
  const displayError = errorFetch || error;

  return (
    <div className="home">
      {displayError && <div className="error">{displayError}</div>} {/* Display error message if any */}
      {isLoading && <div>Loading...</div>} {/* Display loading message while fetching */}
      {dataToDisplay && <BlogList blogs={dataToDisplay} title="All Blogs" />} {/* Display blogs once fetched */}
    </div>
  );
};

export default Home;
