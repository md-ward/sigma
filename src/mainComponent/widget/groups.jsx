import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import groups from '../model/groups_model';


const GroupSection = () => {

  return (
    <div className="w-1/5 bg-white rounded-lg shadow-md p-6 mt-6   fixed   left-5 md:block hidden ">
      <h2 className="text-lg font-medium text-gray-800 mb-4">
        <FontAwesomeIcon icon={faUsers} className="mr-2" />
        Groups
      </h2>
      {groups.map((group) => (
        <div key={group.id} className="flex items-center mb-4">
          <img
            src={group.avatarUrl}
            alt="Group avatar"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h3 className="text-base font-medium text-gray-800">
              {group.name}
            </h3>
            <p className="text-sm text-gray-500">{group.description}</p>
          </div>
        </div>
      ))}
      <a
        href="#"
        className="text-blue-500 hover:underline text-sm mt-4 block text-center"
      >
        View All Groups
      </a>
    </div>
  );
};

export default GroupSection;