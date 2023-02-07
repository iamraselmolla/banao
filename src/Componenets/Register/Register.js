import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';

const Register = () => {
    const { createUser, updateUserInfo } = useContext(AuthContext);
    const [error, setError] = useState(null)
    const [showLoading, setShowLoading] = useState(false)
    const navigate = useNavigate()

    const handleCreateUser = (e) => {
        setShowLoading(true)
        setError(null)
        e.preventDefault()
        createUser(e.target.email.value, e.target.password.value)
            .then(res => {
                console.log(res)
                updateUserInfo({ displayName: e.target.username.value })
                    .then(res => {
                       const userName = e.target.username.value;
                       const email = e.target.email.value;
                       const  userCreated = new Date().getTime();
                       const alluserInfo = {userName, email, userCreated}
                        fetch('https://atg-globe-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(alluserInfo)
                        })
                        .then(res => res.json())
                        .then(data => {
                            e.target.reset()
                            toast.success('Registration successfull');
                            setError(null)
                            setShowLoading(false)
                            navigate('/login')
                        })
                        .catch(err => console.log(err.message))
                    })
                    .catch(err => console.log(err.message))


            })
            .catch(err => {
                setError(err.message);
                setShowLoading(false)
            })
    }
    return (
        <div className="container py-5">
            <div className="register-user pb-2 px-4 pt-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-part">
                            <h3 className="fw-bold mb-3">
                                Create Account
                            </h3>
                            <div className="register-user-form">
                                <form onSubmit={handleCreateUser}>
                                    <div className="row">
                                        <input placeholder='Username' type="text" className="form-control rounded-0 fw-bold py-3 border-bottom-none text-muted" name="username" id="firstnameinput" />
                                    </div>
                                    <div className="row">
                                        <input name='email' placeholder='Email' type="email" className="form-control rounded-0 fw-bold py-3  border-bottom-none text-muted" id="emailinput" />
                                    </div>
                                    <div className="row">
                                        <input name='password' placeholder='Password' type="password" className="form-control rounded-0 fw-bold py-3 text-muted" id="passinputlogin" />
                                    </div>
                                    {error && <p className='text-danger fw-bolder'>{error}</p>}
                                    <div className="row">
                                        {!showLoading && <button type="submit" className="btn mt-3 py-2 w-100 rounded-5 fw-bold btn-success">Create Account</button>}
                                        {showLoading && <button class="btn mt-3 py-2 w-100 rounded-5 fw-bold btn-success" type="button" disabled>
                                            <span class="spinner-border me-2 spinner-border-sm" role="status" aria-hidden="true"></span>
                                            Please Wait...
                                        </button>}
                                    </div>
                                </form>
                                <button className="border fw-bold mt-4 w-100 px-3 py-2 bg-transparent border-1 rounded-0">
                                    <FaFacebook className='text-primary mr-2 fs-5'></FaFacebook>  Sign up with Facebook
                                </button>
                                <button className="border fw-bold mt-2 w-100 px-3 py-2 bg-transparent border-1 rounded-0">
                                    <FcGoogle className='mr-2 fs-5'></FcGoogle>  Sign up with Goggle
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <p className="mb-0">
                            Already have an account? <Link to="/login" className='text-success text-decoration-none fw-bold'>Sign In</Link>
                        </p>
                        <img src="register.png" className='img-fluid' alt="Register user" />
                        <p className="mt-4 text-muted">
                            By signing up, you agree to our Terms & conditions, Privacy policy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;