import { useEffect, useState } from "react";
import usePostStore from "../store/usePostStore";
import formatTime from "../../global/formatTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faThumbsUp } from "@fortawesome/free-regular-svg-icons";

const Posts = () => {

    const { handleGettingGeneralPosts, posts, isLoading, error } = usePostStore(
        (state) => ({
            handleGettingGeneralPosts: state.handleGettingGeneralPosts,
            posts: state.posts,
            isLoading: state.isLoading,
            error: state.error,
        })
    );

    useEffect(() => {
        handleGettingGeneralPosts();
    }, [handleGettingGeneralPosts]);

    return (
        <div>
            {posts?.map((post) => (
                <Post post={post} key={post._id} />

            ))}
        </div>
    );
};

export default Posts;


const Post = ({ post }) => {

    const [readMore, setreadMore] = useState(false);

    return (

        <div className="bg-white rounded-lg shadow-md p-4 m-4 w-96">
            < div className="flex items-center" >
                <img
                    src={`assets/images/portrait-08.jpg`}
                    alt="User Profile"
                    className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                    <h2 className="text-xl font-bold">{`${post.user.first_name} ${post.user.last_name}`}</h2>
                    <p className="text-gray-700">{post.user.username}</p>
                    <p className="text-gray-500 text-sm">{formatTime(post.createdAt)}</p>
                </div>
            </div >
            <p className={`mt-4 ${readMore ? "line-clamp-none" : "line-clamp-4"} `}>{post.content}</p>
            <p onClick={() => setreadMore(!readMore)} className="text-sky-500 cursor-pointer">{readMore ? "Read less" : "Read More"}</p>

            {
                post.image && (
                    <img
                        src={`https://your-image-api.com/${post.image}`}
                        alt="Post Image"
                        className="mt-4 rounded"
                    />
                )
            }
            <div className="flex   justify-evenly  items-center mt-4">
                <button className="flex  gap-2 items-center text-gray-500 hover:text-blue-500 focus:outline-none ml-6">
                    <p>Comment</p>
                    <FontAwesomeIcon icon={faComment} />
                </button>
                <button className="flex    gap-2 items-center text-gray-500 hover:text-blue-500 focus:outline-none">

                    <p>
                        Like

                    </p>
                    <FontAwesomeIcon icon={faThumbsUp} />
                </button>
            </div>
        </div >

    );
}

