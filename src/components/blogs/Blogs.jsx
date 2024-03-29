import { useState, useEffect } from 'react';
import Blog from '../blog/Blog';
function Blogs({ handelBookmarks, handelCounter, handelMarkRead }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch('blogs.json');
      const apiData = await res.json();
      setData(apiData);
    };
    loadData();
  }, []);
  return (
    <>
      {data.map((blog, index) => (
        <Blog
          key={index}
          blog={blog}
          handelBookmarks={handelBookmarks}
          handelCounter={handelCounter}
          handelMarkRead={handelMarkRead}
        ></Blog>
      ))}
    </>
  );
}

export default Blogs;
