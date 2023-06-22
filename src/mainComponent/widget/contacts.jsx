import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import useMessageStore from '../controller/messagesController';
import contacts from '../model/contacts_model';
import handleStatusColor from '../controller/status_color_controller';
const ContactSection = () => {
  const { open } = useMessageStore();


  return (
    <div className="w-1/5 bg-white rounded-lg shadow-md p-6 mb-6 fixed right-5 h-96 mt-6 md:block hidden">
      <h2 className="text-lg font-medium text-gray-800 mb-4">
        <FontAwesomeIcon icon={faUser} className="mr-2" />
        Contacts
      </h2>
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="flex items-center mb-4 cursor-pointer"
          onClick={() => open(contact.id)}
        >
          <span className='relative flex flex-col'>
            <img
              src={contact.avatarUrl}
              alt="Contact avatar"
              className="w-16 h-16 rounded-full mr-4 shadow-md shadow-dark-blue-2"
            />
            <span className={`w-4  h-4 rounded-full z-40  absolute  shadow-md  bottom-0 right-4   ${handleStatusColor(contact.status)} `}></span>

          </span>
          <div>
            <h3 className="text-base font-medium text-gray-800">
              {contact.name}
            </h3>
            <p className="text-sm text-gray-500">{contact.status}</p>
          </div>
        </div>
      ))}
      <a
        href="#"
        className="text-blue-500 hover:underline text-sm mt-4 block text-center"
      >
        View All Contacts
      </a>
    </div>
  );
};

export default ContactSection;