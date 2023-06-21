import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import useMessageStore from '../controller/messagesController';

const MessageSection = () => {

  const { isOpen, close } = useMessageStore();

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'John Doe',
      message: 'Hey, how are you?',
      timestamp: '10:30am',
    },
    {
      id: 2,
      sender: 'Jane Doe',
      message: "I'm doing well, thanks for asking! How about you?",
      timestamp: '10:32am',
    },
    {
      id: 3,
      sender: 'John Doe',
      message: "I'm good too, thanks! Do you have any plans for the weekend?",
      timestamp: '10:35am',
    },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') {
      return;
    }

    const newId = messages.length + 1;

    const newMessageObj = {
      id: newId,
      sender: 'You',
      message: newMessage,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, newMessageObj]);
    setNewMessage('');
  };




  return (
    <>

      {isOpen ?

        <div className="  bg-white rounded-lg shadow-md p-6 mb-6 flex flex-col fixed h-2/3 w-1/4 bottom-0 right-5  ">
          <span className='flex flex-row items-start justify-between '>
            <h2 className="text-lg font-medium text-gray-800 mb-4">Messages</h2>

            <button onClick={close}>close</button>
          </span>
          <div className="flex flex-col  overflow-y-auto">
            {messages.map((message) => (
              <div key={message.id} className="flex flex-col mb-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-medium text-gray-800">{message.sender}</div>
                  <div className="text-xs text-gray-500">{message.timestamp}</div>
                </div>
                <div className="bg-gray-100 rounded-md p-2">{message.message}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center mt-4">
            <input
              type="text"
              placeholder="Type your message here"
              className="px-4 py-2 rounded-lg border border-gray-300 w-full"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              className="ml-4 bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 focus:outline-none"
              onClick={handleSendMessage}

            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>

        : ''
      }




    </>



  );
};

export default MessageSection;