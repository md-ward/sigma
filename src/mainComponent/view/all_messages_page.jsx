import useThemeStore from "../controller/themeController";
import contacts from "../model/contacts_model";
import messagesData from '../model/messages_model';

const AllMessagesPage = () => {
    const { theme } = useThemeStore();



    
    return (
        <div className={` pt-16 min-h-screen w-full ${theme === 'dark' ? 'bg-gray-800 text-white' : ' text-gray-800'}`}>
            <div className="flex flex-col max-w-7xl  mx-auto">
                {contacts.map((contact) => (
                    <div key={contact.id} className="p-4 border-b border-gray-300">
                        <div className="flex items-center">
                            <img src={contact.avatarUrl} alt="" className="w-10 h-10 rounded-full mr-4" />
                            <h2 className="font-bold text-lg">{contact.name}</h2>
                        </div>
                        <p className="text-gray-500">{contact.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllMessagesPage;