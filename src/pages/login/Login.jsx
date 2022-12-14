import React from 'react'
import './login.css'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {

    const notify = () => toast.success('Logged In Succesfully', {
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
        <div className='login'>

            <div className="login-container">
                <div className="login-header">
                    L<span>o</span>gin
                </div>

                <div className="login-body">
                    <TextField id="outlined-basic" label="User Name" variant="outlined" sx={{ marginBottom: '1rem', fontSize: '10px', width: '90%' }} size='small' />
                    <TextField id="outlined-basic" label="Password" variant="outlined" sx={{ marginBottom: '1rem', fontSize: '10px', width: '90%' }} size='small' />
                    <div className="login-button">
                        <Link to='/homepage'><button onClick={notify}>Login</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login