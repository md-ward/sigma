import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons';
import friendsData from '../model/frindes_model';

const FriendCard = ({ friend, onAddFriend, onRemoveFriend }) => {
    const handleAddFriend = () => {
        onAddFriend(friend.id);
    };

    const handleRemoveFriend = () => {
        onRemoveFriend(friend.id);
    };

    return (
        <div className="flex sm:flex-col bg-white rounded-lg p-2 shadow-md items-center max-sm:w-full ">
            <img src={friend.profilePicture} alt={friend.name} className="object-fill sm:h-64 max-sm:rounded-full max-sm:h-36 max-sm:w-36 max-sm:order-1 " />
            <div className="flex flex-col justify-center items-center flex-1 p-4">
                <h2 className="text-lg font-medium ">{friend.name}</h2>
                <button onClick={handleAddFriend} className="mt-4 bg-blue-500 hover:bg-blue-600 w-full text-white font-bold py-2 px-4 rounded  max-sm:max-w-xs">
                    <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                    Add Friend
                </button>
                <button onClick={handleRemoveFriend} className="mt-4 bg-gray-400 hover:bg-gray-500 w-full text-white font-bold py-2 px-4  rounded  max-sm:max-w-xs">
                    <FontAwesomeIcon icon={faUserMinus} className="mr-2" />
                    Remove
                </button>
            </div>
        </div>
    );
};

const FriendsPage = () => {
    const [friends, setFriends] = useState(friendsData);

    const handleAddFriend = (friendId) => {



        const updatedFriends = friends.map((friend) => {
            if (friend.id === friendId) {
                return { ...friend, isFriend: true };
            } else {
                return friend;
            }
        });
        setFriends(updatedFriends);
    };

    const handleRemoveFriend = (friendId) => {
        const updatedFriends = friends.filter((friend) => friend.id !== friendId);
        setFriends(updatedFriends);
    };

    return (
        <div className=" bg-gray-100 pt-24">
            <div className="flex relative flex-wrap justify-center items-center px-4 sm:px-6 lg:px-8 gap-6">
                {friends.length != 0 ? friends.map((friend) => (
                    <FriendCard
                        key={friend.id}
                        friend={friend}
                        onAddFriend={handleAddFriend}
                        onRemoveFriend={handleRemoveFriend}
                    />
                )


                ) :

                    <span className="text-lg font-medium justify-center top-1/2 absolute bg-slate-200 text-dark-blue p-2 rounded-lg shadow-lg animate-bounce">No friends available</span>

                }
            </div>
        </div>
    );
};

export default FriendsPage;