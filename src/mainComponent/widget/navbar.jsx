import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const links = [
  { to: '/', text: 'Home', iconSrc: 'https://img.icons8.com/ultraviolet/40/home-page.png' },
  { to: '/friends', text: 'Friends', iconSrc: 'https://img.icons8.com/ultraviolet/40/user-group-man-woman.png' },
  { to: '/register', text: 'Messages', iconSrc: 'https://img.icons8.com/ultraviolet/40/communication.png' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMenuButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-custome-color shadow fixed w-full z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-6">
            <img
              src="https://img.icons8.com/plasticine/100/sigma.png"
              alt="logo"
              className="w-full h-14 object-scale-down"
            />
            <div className="relative mr-4">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
                className="bg-gray-50 rounded-full py-2 pr-4 pl-10 text-gray-700 focus:outline-none focus:shadow-outline focus-within:bg-white"
              />
              <div className="absolute top-0 left-0 ml-3 mt-2">
                <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center ml-6 space-x-8">
              {links.map((link) => (
                <NavLink
                  to={link.to}
                  key={link.to}
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  activeClassName="border-blue-500 text-blue-500"
                >
                  <img width="20" height="20" src={link.iconSrc} alt={link.text} className="mr-1" />
                  {link.text}
                </NavLink>
              ))}
            </div>
            <div className="sm:hidden">
              <button
                onClick={handleMenuButtonClick}
                className="block text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
              >
                {isMenuOpen ? (
                  <FontAwesomeIcon icon={faTimes} className="rotate-90 duration-150 ease-in-out w-6 h-6" />
                ) : (
                  <FontAwesomeIcon icon={faBars} className="rotate-180 duration-150 ease-in-out w-6 h-6" />
                )}
              </button>
            </div>
            <div className="hidden sm:flex items-center ml-6 space-x-4">
              <button className="text-white px-4 py-2 rounded-full">
                <img width="40" height="40" src="https://img.icons8.com/ultraviolet/40/add-property.png" alt="add-property" />
              </button>
            </div>
          </div>
        </div>
        <div className={`sm:hidden ${isMenuOpen ? 'block duration-200 opacity-100 ease-in-out h-52' : 'opacity-0 duration-300 ease-out h-0'}`}>
          <div className="pt-2 pb-3">
            {links.map((link) => (
              <NavLink
                to={link.to}
                key={link.to}
                className=" flex w-full text-left px-3 py-2 text-base font-medium text-blue-500 bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:bg-gray-100 focus:text-blue-700"
                activeClassName="bg-blue-500 text-white"
             onClick={()=> setIsMenuOpen(false)}
             >
                <img width="20" height="20" src={link.iconSrc} alt={link.text} className="mr-1" />
                {link.text}
              </NavLink>
            ))}
            <div className="mt-4">
              <button className="block w-full text-left px-3 py-2 text-base font-medium text-blue-500 bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:bg-gray-100 focus:text-blue-700">
                New Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;