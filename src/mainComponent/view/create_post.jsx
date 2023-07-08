import { useState ,useRef} from 'react';
import { Slide } from 'react-awesome-reveal';
import usePostStore from '../controller/create_postController';
import profileImg from "/assets/images/portrait-08.jpg"

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const { addPost,close } = usePostStore();

    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPost = {
            author: 'Sara Adams',
            authorAvatarUrl: profileImg,
            date: 'Now',
            content: body,
            imageUrl: '',
            likes: 0,
            comments: 0,
            shares: 0,
            commentsData: []
        };
    
        addPost(newPost);
        setTitle('');
        setBody('');
        // formRef.current.reset();
    };

    return (
        <section
            onClick={close}
            className="fixed inset-0 z-50 flex justify-center items-center"
        >
            <Slide direction="down" className="max-w-2xl w-full z-30 opacity-100">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 bg-slate-700">
                        <div className="flex items-center">
                            <img
                                src={profileImg}
                                alt="user avatar"
                                className="w-11 h-11 rounded-full mr-2 object-cover"
                            />
                            <span className="text-white font-bold">Sara Adams</span>
                        </div>
                        <button
                            type="button"
                            className="text-gray-400 hover:text-gray-500 focus:outline-none"
                            onClick={close}
                        >
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current rounded-full bg-white text-dark-blue hover:scale-105">
                                <path
                                    fillRule="evenodd"
                                    d="M12.707 12l4.147-4.146a.5.5 0 1 0-.708-.708L12 11.293 7.854 7.146a.5.5 0 1 0-.708.708L11.293 12l-4.147 4.146a.5.5 0 0 0 .708.708L12 12.707l4.146 4.147a.5.5 0 0 0 .708-.708L12.707 12z"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="px-4 py-3">
                        <form  ref={formRef} className="flex flex-col">
                            <label htmlFor="title" className="mb-2 font-bold text-gray-700">
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                className="border px-3 py-2 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                                onClick={(event) => event.stopPropagation()}

                            />
                            <label htmlFor="body" className="mb-2 font-bold text-gray-700">
                                Body
                            </label>
                            <textarea
                                id="body"
                                className="border px-3 py-2 mb-4 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="5"
                                value={body}
                                onChange={(event) => setBody(event.target.value)}
                                onClick={(event) => event.stopPropagation()}

                            ></textarea>
                            <button
                            onClick={handleSubmit}
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                            >
                                Post
                            </button>
                        </form>
                    </div>
                </div>
            </Slide>
            <div className="fixed inset-0 bg-blue-500 opacity-25"></div>
        </section>
    );
};

export default CreatePost;