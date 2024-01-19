import { useEffect, useRef } from "react";
import useCommentStore from "../store/useCommentStore";
import PropTypes from "prop-types";
import Loader from "../../global/widgets/loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Comments = ({ postId }) => {
  const {
    comments,
    handleFetchingPostComments,
    handleAddingNewComment,
    isLoading,
  } = useCommentStore();

  useEffect(() => {
    handleFetchingPostComments(postId);
  }, [handleFetchingPostComments, postId]);
  const commentInputRef = useRef();

  async function submitNewComment(e) {
    e.preventDefault();
    await handleAddingNewComment(postId, commentInputRef.current.value);
  }

  return (
    <div className="custom-scrollbar flex max-h-96  flex-col space-y-4 overflow-y-scroll py-2">
      {isLoading && <Loader />}
      {!isLoading &&
        comments.map((comment) => (
          <div className="flex " key={comment._id}>
            {/* user image */}
            <img
              src={comment.user.profile.profileImage.originalUrl}
              alt={comment.user.first_name + " profile image"}
              className="aspect-square h-12 w-12 rounded-full object-cover"
            />

            {/* comment content */}
            <p className="whitespace-pre-wrap">{comment.comment}</p>
          </div>
        ))}
      <span className="flex rounded-md px-3">
        <input
          ref={commentInputRef}
          type="text"
          name="new_comment"
          className="w-full rounded-l-[5rem] bg-slate-50 px-3 outline-blue-500"
          placeholder="new comment"
        />
        <button
          onClick={(e) => submitNewComment(e)} // Add the arrow function and pass the event object
          className="size-10 rounded-r-[5rem] bg-blue-500 hover:bg-blue-600  "
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            size="lg"
            className="text-white"
          />
        </button>
      </span>
    </div>
  );
};

Comments.propTypes = {
  postId: PropTypes.string,
};

export default Comments;
