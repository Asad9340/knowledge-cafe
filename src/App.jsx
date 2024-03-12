import './App.css';
import Header from './components/header/Header';
import Blogs from './components/blogs/Blogs';
import Bookmarks from './components/bookmarks/Bookmarks';
import { useState } from 'react';
function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [counter, setCounter] = useState(0)
  const [time , setTime]= useState(0)

  const handelBookmarks = (blog) => {
    const newValue = [...bookmarks, blog];
    setBookmarks(newValue);
  }
  const handelCounter = () => {
    setCounter(counter+1);
  }
  const handelMarkRead = (reading_time) => {
    setTime(time+reading_time)
  }
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-14">
      <Header></Header>
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6">
        <div className="col-span-8">
          <Blogs
            handelBookmarks={handelBookmarks}
            handelCounter={handelCounter}
            handelMarkRead={handelMarkRead}
          ></Blogs>
        </div>
        <div className="col-span-4">
          <h2 className="text-[#6047EC] bg-[#6047EC1A] py-4 px-6 text-base font-bold mb-4 rounded-xl">
            Spent time on read : {time} min
          </h2>
          <Bookmarks bookmarks={bookmarks} counter={counter}></Bookmarks>
        </div>
      </div>
    </div>
  );
}

export default App;
