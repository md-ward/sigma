import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const Post = ({ author, authorAvatarUrl, date, content, imageUrl, likes, comments, shares, commentsData }) => {
  const [LikeClicked, setLikeClicked] = useState({ clicked: false, likes: likes });
  const [showComments, setShowComments] = useState(false);

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
    <div className=" bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center gap-4">
        <img src={authorAvatarUrl} alt={author} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-medium text-gray-800">{author}</div>
          <div className="text-gray-600">{date}</div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-800">{content}</p>
      </div>
      {imageUrl && (
        <div className="mt-4">
          <img src={imageUrl} alt="post" className="w-full object-cover" />
        </div>
      )}
      <div className="flex items-center gap-4 mt-4">
        <button className=" focus:outline-none" onClick={handleLikeClick} >
          <FontAwesomeIcon icon={faThumbsUp} className={`mr-2  ${LikeClicked.clicked ? 'text-blue-400' : 'text-gray-500'} `} />
          {LikeClicked.likes} Likes
        </button>
        <button className="text-gray-500 hover:text-blue-500 focus:outline-none" onClick={handleCommentsClick}>
          <FontAwesomeIcon icon={faComment} className="mr-2" />
          {comments} Comments
        </button>
        <button className="text-gray-500 hover:text-blue-500 focus:outline-none">
          <FontAwesomeIcon icon={faShare} className="mr-2" />
          {shares} Shares
        </button>
      </div>
      {showComments && (
        <div className="mt-4   ">
          <h3 className="text-gray-800 font-medium mb-2 font-mono ">Comments</h3>
          <ul className="list-none stagger">
            {commentsData.map((comment, index) => (
              <li key={index} className="mb-2  rounded-lg">
                <div className="flex items-center gap-2 ">
                  <img src={commentsData[index].authorAvatarUrl} alt={comment.author} className="w-8 h-8 rounded-full object-cover" />
                  <div className="text-gray-800 font-medium">{comment.author}</div>
                </div>
                <div className="text-gray-600">{comment.text}</div>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default Post;