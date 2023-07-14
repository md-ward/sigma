import profilePostsData from "../model/profile_posts_data";
import Post from "../widget/posts";
import coverImage from "/assets/images/11.jpg"
import profileImage from '/assets/images/portrait-08.jpg';


import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
    const [friendImages, setFriendImages] = useState([]);
    const [isFriendSectionOpen, setIsFriendSectionOpen] = useState(false); // add state for friend section

    // Make API request to get random friend images
    useEffect(() => {
        const fetchFriendImages = async () => {
            try {
                const response = await fetch('https://randomuser.me/api/?results=8');
                const data = await response.json();
                const randomFriendImages = data.results.map(
                    (result) => result.picture.large
                );
                setFriendImages(randomFriendImages);
            } catch (error) {
                console.error(error);
            }
        };

        fetchFriendImages();
    }, []);

    const storageData = JSON.parse(sessionStorage.getItem('formData'))
    

    const personalInfo = storageData?{
        username: storageData.username,
        name: storageData.firstName + ' ' + storageData.lastName,
        profileImg: storageData.image

    }:{

        username: 'Sara@112',
        name: "Sara Adams",
        profileImg: profileImage
    }
    


    return (
        <div className="flex flex-col items-center pt-24 relative bg-white z-10" >
            {/* background */}
            <span className="w-full h-full bg-gradient-to-tr from-custome-color to-slate-200 absolute top-0 blur-sm"></span>

            {/* personal image and cover photo  */}
            <div className="relative h-72  w-11/12 sm:max-w-7xl sm:w-full ">
                {/* cover image */}
                <img
                    src={coverImage}
                    alt="Cover photo"
                    className="absolute inset-0  h-full w-full object-cover rounded-md shadow-md"
                />
                {/* profile image */}
                <img
                    src={personalInfo.profileImg}
                    alt="Profile photo"
                    className="h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 rounded-full border-4 object-cover border-white absolute bottom-0 left-0 ml-4 mb-4"
                />
                <h1 className="absolute bottom-2 left-24  sm:left-40  sm:text-2xl text-white font-bold mb-4">{personalInfo.name}</h1>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3   w-full max-w-7xl gap-4 mt-8 z-20  ">
                {/* sidebar */}
                <div className="col-span-1 bg-white  h-fit p-2   rounded-lg shadow-lg  ">
                    <h1 className="text-2xl text-dark-blue font-bold mb-4">username: {personalInfo.username}</h1>
                    <p className="text-gray-500 mb-4">Software Engineer</p>
                    <ul className="mb-4">
                        <li className="flex  items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2 text-gray-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16 2H4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zM4 4h12v7a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm0 9a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            San Francisco, CA
                        </li>
                        <li className="flex  items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2 text-gray-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8.112 16.112A6 6 0 1016 8l1.5-1.5a1 1 0 111.414 1.414L17 9a8 8 0 11-8 8l-.5-.5a1 1 0 111.414-1.414l.198.198z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Joined June 2023
                        </li>
                    </ul>

                    {/* friend section */}
                    <div className="w-full max-w-7xl mt-6 px-4 pt-7">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => setIsFriendSectionOpen(!isFriendSectionOpen)}
                        >
                            <h3 className="text-lg font-medium text-gray-900 mb-3">Friends</h3>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-5 w-5 ${isFriendSectionOpen ? 'transform rotate-180' : ''
                                    }`}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        {isFriendSectionOpen && (
                            <div className="flex flex-wrap -mx-2">
                                {friendImages.map((friendImage, index) => (
                                    <div key={index} className="">
                                        <img
                                            src={friendImage}
                                            alt="Friend"
                                            className="h-24 w-24 object-cover rounded-full border-4 border-white hover:border-custome-color transition-all duration-150"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>




                {/* posts */}
                <div className="sm:col-span-2 sm:col-start-2 overflow-y-auto">
                    {profilePostsData.map((post, index) => (
                        <Post
                            key={index}
                            author={post.author}
                            authorAvatarUrl={personalInfo.profileImg}
                            date={post.date}
                            content={post.content}
                            imageUrl={post.imageUrl}
                            likes={post.likes}
                            comments={post.comments}
                            shares={post.shares}
                            commentsData={post.commentsData}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;