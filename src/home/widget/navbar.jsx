import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import usePostStore from '../controller/create_postController';
import profileImage from '/assets/images/portrait-08.jpg';
import SettingsCart from './settings';
import { Zoom } from 'react-awesome-reveal';
import useThemeStore from '../controller/themeController';
import useSearchStore from '../controller/searching_controller';
const links = [
  { to: '/', text: 'Home', iconSrc: 'https://img.icons8.com/ultraviolet/40/home-page.png' },
  { to: '/friends', text: 'Friends', iconSrc: 'https://img.icons8.com/ultraviolet/40/user-group-man-woman.png' },
  { to: '/messages', text: 'Messages', iconSrc: 'https://img.icons8.com/ultraviolet/40/communication.png' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSettigns, setshowSettigns] = useState(false);
  const { open } = usePostStore()

  const { theme } = useThemeStore();
  const { OpenSearch, filtering } = useSearchStore()

  const mobileNavRef = useRef(null);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);

  };

  const handleMenuButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  useEffect(() => {
    const handleTransitionEnd = () => {
      if (!isMenuOpen) {
        mobileNavRef.current.classList.add('hidden');
      }
    };
    mobileNavRef.current.addEventListener('transitionend', handleTransitionEnd);
    return () => {
      mobileNavRef.current.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [isMenuOpen]);


  const storageData = JSON.parse(sessionStorage.getItem('formData'))
  const profileImg = storageData ? storageData.image : profileImage;



  return (
    <nav className={`${theme == 'light' ? 'bg-custome-color' : 'bg-dark-blue '} shadow fixed w-full z-40`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* left section : logo ,prfoileImg and  search bar */}
        <div className="flex justify-between h-16">

          <div className="flex items-center gap-6"  >

            <img
              src="https://img.icons8.com/plasticine/100/sigma.png"
              alt="logo"
              className="aspect-square h-14 object-scale-down max-sm:hidden"
            />

            <span className='group flex justify-center'>

              <img src={profileImg}
                alt='profile image'
                className='aspect-square rounded-full object-cover ring-2 ring-offset-1  w-10 sm:w-14 cursor-pointer '
                onClick={() =>
                  setshowSettigns(!showSettigns)
                } />


              {!showSettigns && <h1 className='scale-0 transition-all group-hover:scale-100 duration-500 ease-in-out absolute top-16 bg-opacity-90 bg-slate-800 p-2 rounded-lg text-white '>menu</h1>
              }
              {
                showSettigns &&
                <Zoom cascade={true} duration={800}
                  className='absolute left-2 top-20 '>


                  <SettingsCart
                    isLightMode={theme === "light" ? true : false}
                    setshowSettigns={setshowSettigns}></SettingsCart>


                </Zoom>

              }

            </span>

            <div className="relative mr-4">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onClick={OpenSearch}
                onChange={handleSearchChange}
                className="bg-gray-50 w-full rounded-full py-2 pr-4 pl-10 text-gray-700 focus:outline-none focus:shadow-outline transition-all duration-500 ease-in-out sm:focus:w-56 focus-within:bg-white"
              />
              <div className="absolute top-0 left-0 ml-3 mt-2">
                <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
              </div>
            </div>
          </div>

          {/* right section ,nav links */}

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center ml-6 space-x-8">
              {links.map((link) => (
                <NavLink

                  to={link.to}
                  key={link.to}
                  className={`border-transparent  duration-100 ease-in-out active:scale-110 rounded-lg  ${theme === 'light' ? 'text-gray-500 hover:border-gray-300 active:bg-gradient-to-b from-blue-400 to-indigo-400 ' : 'text-white  hover:border-white hover:text-slate-300'}   inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}

                >
                  <img width="20" height="20" src={link.iconSrc} alt={link.text} className="mr-1" />
                  {link.text}
                </NavLink>
              ))}
            </div>
            <div className="sm:hidden">
              <button
                onClick={handleMenuButtonClick}
                className={`block ${theme === "light" ? 'text-gray-500 hover:text-gray-700 focus:text-gray-700' : 'hover:text-slate-50 hover:border-slate-300'} focus:outline-none`}
              >
                {isMenuOpen ? (
                  <FontAwesomeIcon icon={faTimes} className="rotate-90 duration-150 ease-in-out w-6 h-6" />
                ) : (
                  <FontAwesomeIcon icon={faBars} className="rotate-180 duration-150 ease-in-out w-6 h-6" />
                )}
              </button>
            </div>
            <div className="group hidden sm:flex items-center ml-6 space-x-4">
              <button className="text-white px-4 py-2 rounded-full " onClick={open}>
                <img width="40" height="40" src="https://img.icons8.com/ultraviolet/40/add-property.png" alt="add-property" />
              </button>
              <h1 className={`opacity-0 group-hover:opacity-100 duration-300  ease-in-out transition-opacity ${theme === 'light' ? "text-gray-700" : 'text-white'} font-medium`}>Add post</h1>

            </div>
          </div>
        </div>
        <div className={`sm:hidden ${isMenuOpen ? 'block opacity-100 duration-200 ease-in-out h-52' : 'opacity-0 duration-300 ease-out h-0 '}`}
          ref={mobileNavRef}
        >
          <div className="pt-2 pb-3 flex flex-col gap-2 ">
            {links.map((link) => (
              <NavLink
                to={link.to}
                key={link.to}
                className=" rounded-2xl flex w-full text-left px-3 py-2 text-base font-medium text-blue-500 bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:bg-gray-100 focus:text-blue-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <img width="20" height="20" src={link.iconSrc} alt={link.text} className="mr-1" />
                {link.text}
              </NavLink>
            ))}
            <div className="mt-4">
              <button onClick={open}
                className="rounded-2xl block w-full text-left px-3 py-2 text-base font-medium text-blue-500 bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:bg-gray-100 focus:text-blue-700">
                New Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;