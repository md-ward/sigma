import { faArrowLeft, faArrowRight, faArrowTurnUp, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import { Form, useNavigate } from 'react-router-dom';

const FirstTimeSetupPage = ({ completeAccount }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const navigator = useNavigate()

    const handleSubmit = (event) => {


          // Get previous data from sessionStorage
    const previousData = JSON.parse(sessionStorage.getItem('formData')) || {};

    // Merge previous data with new form data
    const data = {
        ...previousData,
        firstName,
        lastName,
        phone,
        image
    };

    // Convert the data object to a JSON string and store it in session storage
    sessionStorage.setItem('formData', JSON.stringify(data));

    // Call the completeAccount function
    completeAccount(true);
    };


    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setImage(reader.result);
            };
        }
    };
    const imgBtn = useRef(null);

    const handleClick = () => {
        if (imgBtn.current) {
            imgBtn.current.click();
        }
    };

    return (
        <Slide className='bg-white md:w-1/3 flex flex-col h-full justify-center items-center'>
            <div className="w-2/3 ">
                <div onClick={handleClick}
                    className='relative mx-auto text-white w-36 h-36 rounded-full bg-slate-400 flex flex-col justify-center items-center cursor-pointer'>
                    <FontAwesomeIcon icon={faPlusCircle} />
                    <div className='absolute'>
                        <input type="file" accept="image/*" onChange={handleImageChange} className='hidden' ref={imgBtn} />
                        {image && <img src={image} alt="preview" className='object-cover  rounded-full aspect-square justify-self-center place-items-center' />}
                    </div>
                    <p className='text-center mt-2 text-white'> profile Image</p>

                </div>
                <form className="space-y-6" >
                    <div>
                        <label
                            htmlFor="first_name"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            autoComplete="given-name"
                            className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-700"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="last_name"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            autoComplete="family-name"
                            className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-700"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="phone"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Phone Number
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            autoComplete="tel"
                            className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-700"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                handleSubmit()
                                navigator('/')}}
                            type="button"
                            className="w-full bg-indigo-600 text-white rounded py-2 px-4 hover:bg-indigo-800 "
                        >
                            Complete Account
                        </button>
                    </div>
                </form>
                <button
                    onClick={() => completeAccount(false)}
                    className='w-full flex justify-start py-10 '>
                    <FontAwesomeIcon
                        className='rounded-full bg-indigo-500 hover:ring-1 hover:shadow-md p-3 text-white'
                        icon={faArrowLeft} />
                </button>

            </div>
        </Slide>
    );
};

export default FirstTimeSetupPage;