import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons';
import friendsData from '../model/frindes_model';

const FriendCard = ({ friend, onAddFriend, onRemoveFriend }) => {
    const handleAddFriend = () => {
        onAddFriend(friend.id);
    };

    const handleRemoveFriend = () => {
        onRemoveFriend(friend.id);
    };

    return (
        <div className= " bg-white rounded-lg   shadow-md p-4 text-center flex flex-col">
            <img src={friend.profilePicture} alt={friend.name} className=" " />
            <h2 className="text-lg font-medium">{friend.name}</h2>
            {!friend.isFriend && (
                <button onClick={handleAddFriend} className="mt-4 bg-custome-color hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                    Add Friend
                </button>
            )}
            {friend.isFriend && (
                <button onClick={handleRemoveFriend} className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                    <FontAwesomeIcon icon={faUserMinus} className="mr-2" />
                    Remove Friend
                </button>
            )}
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
        const updatedFriends = friends.map((friend) => {
            if (friend.id === friendId) {
                return { ...friend, isFriend: false };
            } else {
                return friend;
            }
        });
        setFriends(updatedFriends);
    };

    return (
        <div className="bg-gray-100 pt-24">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {friends.map((friend) => (
                        <FriendCard
                            key={friend.id}
                            friend={friend}
                            onAddFriend={handleAddFriend}
                            onRemoveFriend={handleRemoveFriend}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FriendsPage;