import React from 'react'
import './register.css'
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function Login() {

    // toastify
    const notify = () => toast.success('Account Created Succesfully', {
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
        <div className='register'>

            <div className="register-container">
                <div className="register-header">
                    Si<span>g</span>n Up
                </div>

                <div className="register-body">

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '90%' }} >
                        <TextField id="outlined-basic" label="First Name" variant="outlined" sx={{ marginBottom: '1rem', fontSize: '10px', width: '50%' }} size='small' />
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" sx={{ marginBottom: '1rem', fontSize: '10px', width: '50%' }} size='small' />
                    </Box>
                    <TextField id="outlined-basic" label="Email" variant="outlined" sx={{ marginBottom: '1rem', fontSize: '10px', width: '90%' }} size='small' />

                    <TextField
                        variant="outlined"
                        select
                        size='small'
                        label="Role"
                        sx={{ width: '90%', marginBottom: '1rem' }}
                    >
                        <MenuItem value='MVD'>MVD</MenuItem>
                        <MenuItem value='Police'>Police</MenuItem>
                        <MenuItem value='Coperation'>Coperation</MenuItem>
                    </TextField>
                    <TextField id="outlined-basic" label="User Name" variant="outlined" sx={{ marginBottom: '1rem', fontSize: '10px', width: '90%' }} size='small' />
                    <TextField id="outlined-basic" label="Password" variant="outlined" sx={{ marginBottom: '1rem', fontSize: '10px', width: '90%' }} size='small' />

                    <div className="register-button">
                        <Link to='/login'><button onClick={notify}>Create Account</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login