import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import contacts from '../model/contacts_model';

const ContactSection = () => {

  return (
    <div className={`w-1/5  rounded-lg  p-6 mb-6 fixed right-5 h-96 mt-6 md:block hidden ring ring-black `}>
      <h2 className={`text-lg font-medium mb-4`}>
        <FontAwesomeIcon icon={faUser} className="mr-2" />
        Contacts
      </h2>
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="flex items-center mb-4 cursor-pointer"
          onClick={() => open(contact.id - 1)}
        >

          <span className='relative flex flex-col'>
            <img
              src={contact.avatarUrl}
              alt="Contact avatar"
              className="w-16 h-16 rounded-full mr-4 shadow-md shadow-dark-blue-2"
            />
            <span className={`w-4 h-4 rounded-full z-40 absolute bottom-0 right-4 `}></span>
          </span>
          <div>
            <h3 className={`text-base font-medium `}>
              {contact.name}
            </h3>
            <p className={`text-sm `}>{contact.status}</p>
          </div>
        </div >
      ))}
      <a
        href="#"
        className={`text-blue-500 hover:underline text-sm mt-4 block text-center `}
      >
        View All Contacts
      </a>
    </div >
  );
};

export default ContactSection;