import Bookmark from '../Bookmark/Bookmark';
function Bookmarks({ bookmarks }) {
  return (
    <div className="bg-[#1111110D] py-4 rounded-lg">
      {bookmarks.map((bookmark, index) => (
        <Bookmark key={index} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
}
export default Bookmarks;
