import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import useThemeStore from '../controller/themeController';

const Post = ({ author, authorAvatarUrl, date, content, imageUrl, likes, comments, shares, commentsData }) => {
  const [LikeClicked, setLikeClicked] = useState({ clicked: false, likes: likes });
  const [showComments, setShowComments] = useState(false);
  const { theme } = useThemeStore();

  function handleLikeClick() {
    if (LikeClicked.clicked) {
      setLikeClicked({ clicked: false, likes: LikeClicked.likes - 1 })
    } else {
      setLikeClicked({ clicked: true, likes: LikeClicked.likes + 1 })
    }
  }

  function handleCommentsClick() {
    setShowComments(!showComments);
  }

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 mb-6 ${theme === 'dark' ? 'text-white bg-slate-600' : ''}`}>
      <div className="flex items-center gap-4">
        <img src={authorAvatarUrl} alt={author} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{author}</div>
          <div className={`text-gray-600 ${theme === 'dark' ? 'text-white' : ''}`}>{date}</div>
        </div>
      </div>
      <div className={`mt-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
        <p>{content}</p>
      </div>
      {imageUrl && (
        <div className="mt-4">
          <img src={imageUrl} alt="post" className="w-full object-cover" />
        </div>
      )}
      <div className="flex items-center gap-4 mt-4">
        <button className="focus:outline-none" onClick={handleLikeClick}>
          <FontAwesomeIcon icon={faThumbsUp} className={`mr-2 ${LikeClicked.clicked ? 'text-blue-400' : (theme === 'dark' ? 'text-white' : 'text-gray-500')}`} />
          {LikeClicked.likes} Likes
        </button>
        <button className={`${theme === 'dark' ? 'text-white' : 'text-gray-500'} hover:text-blue-500 focus:outline-none`} onClick={handleCommentsClick}>
          <FontAwesomeIcon icon={faComment} className="mr-2" />
          {comments} Comments
        </button>
        <button className={`${theme === 'dark' ? 'text-white' : 'text-gray-500'} hover:text-blue-500 focus:outline-none`}>
          <FontAwesomeIcon icon={faShare} className="mr-2" />
          {shares} Shares
        </button>
      </div>
      {showComments && (
        <div className="mt-4">
          <h3 className={`font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Comments</h3>
          <ul className="list-none stagger">
            {commentsData.map((comment, index) => (
              <li key={index} className="mb-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <img src={commentsData[index].authorAvatarUrl} alt={comment.author} className="w-8 h-8 rounded-full object-cover" />
                  <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{comment.author}</div>
                </div>
                <div className={`text-gray-600 ${theme === 'dark' ? 'text-white' : ''}`}>{comment.text}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Post;