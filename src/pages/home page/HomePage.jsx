import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import Table from '../../components/table/Table'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import './homepage.css'

function HomePage() {
    const [file, setFile] = useState('')
    const inputRef = useRef(null);

    const handleClick = () => {
        //  open file input box on click of other element
        inputRef.current.click();
    };

    const handleFileChange = event => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
            return;
        }

        console.log('fileObj is', fileObj);

        // reset file input
        event.target.value = null;

        // is now empty
        console.log(event.target.files);

        // can still access file object here
        console.log(fileObj);
        console.log(fileObj.name);
        setFile(fileObj.name)
    };

    // toast logout
    const notify = () => toast.success('Logout Succesfully', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    return (
        <div className='home-page'>
            <div className="home-page-container">
                <div className="home-page-left-sec">
                    <div className="video-upload">
                        <h4>Upload File</h4>
                        <input
                            style={{ display: 'none' }}
                            ref={inputRef}
                            type="file"
                            onChange={handleFileChange}
                        />
                        <button onClick={handleClick}>Upload Video</button>
                        <div className='fileName'>{file}</div>
                    </div>

                    <div className="analytics">
                        <p>History</p>
                        <Table />
                    </div>
                </div>


                <div className="home-page-right-sec">
                    <div className="profile">
                        <h4>Profile</h4>
                        <div className="profile-header">
                            <div className="profile-img">
                                <img src="http://minible-v-light.react.themesbrand.com/static/media/avatar-2.feb0f89d.jpg" alt="" />
                            </div>

                            <div className="profile-details">
                                <p>John Doe</p>
                                <p>MVD</p>
                                <p>johndoe2000</p>
                                <p>johndoe@gmail.com</p>
                            </div>
                        </div>
                        <Link to='/'><button onClick={notify}>Logout</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage