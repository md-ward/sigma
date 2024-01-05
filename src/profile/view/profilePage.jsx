import Posts from "../../home/widget/posts";

const ProfilePage = () => {
    return (
        <div>
            <div className="bg-gray-800">
                <img
                    src="/assets/images/22.jpg"
                    alt="Cover"
                    className="w-full h-48 object-cover"
                />
            </div>
            <div className="flex w-full ">
                <div className="max-w-3xl    bg-slate-300  px-4 py-8">
                    <div className="flex items-center space-x-4">
                        <div className="w-24 h-24">
                            <img
                                src="/assets/images/portrait-08.jpg"
                                alt="Profile"
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold">John Doe</h2>
                            <p className="text-gray-600">Bio: Software Developer</p>
                            <p className="text-gray-600">Location: New York, USA</p>
                            <p className="text-gray-600">Birthday: January 1, 1990</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-2xl font-bold mb-4">Friends</h3>
                        <ul className="flex space-x-4">
                            <li className="bg-gray-200 px-4 py-2 rounded-full">Friend 1</li>
                            <li className="bg-gray-200 px-4 py-2 rounded-full">Friend 2</li>
                            <li className="bg-gray-200 px-4 py-2 rounded-full">Friend 3</li>
                        </ul>
                    </div>
                </div>

                <Posts />
            </div>

        </div>
    );
};

export default ProfilePage;