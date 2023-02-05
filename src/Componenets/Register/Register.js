import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';

const Register = () => {
  const {createUser} =  useContext(AuthContext);
  const [error, setError] = useState(null)

  const handleCreateUser = (e) => {
    e.preventDefault()
        createUser(e.target.email.value, e.target.password.value)
        .then(res => {
            e.target.reset()
            toast.success('Registration successfull');
            setError(null)
        })
        .catch(err => setError(err.message))
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
                                        <button type="submit" className="btn mt-3 py-3 w-100 rounded-5 fw-bold btn-success">Create Account</button>
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
                            Already have an account? <Link to="/login"  className='text-success text-decoration-none fw-bold'>Sign In</Link>
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