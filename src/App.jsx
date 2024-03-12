import './App.css';
import Header from './components/header/Header';
import Blogs from './components/blogs/Blogs';
import Bookmarks from './components/bookmarks/Bookmarks';
import { useState } from 'react';
function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [counter,setCounter] = useState(0)

  const handelBookmarks = (blog) => {
    const newValue = [...bookmarks, blog];
    setBookmarks(newValue);
  }
  const handelCounter = () => {
    setCounter(counter+1);
  }
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-14">
      <Header></Header>
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6">
        <div className="col-span-8">
          <Blogs
            handelBookmarks={handelBookmarks}
            handelCounter={handelCounter}
          ></Blogs>
        </div>
        <div className="col-span-4">
          <Bookmarks bookmarks={bookmarks} counter={counter}></Bookmarks>
        </div>
      </div>
    </div>
  );
}

export default App;
