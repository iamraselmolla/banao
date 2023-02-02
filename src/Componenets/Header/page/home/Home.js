import React, { useState } from 'react';
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';

import CategoryMenu from './CategoryMenu/CategoryMenu';

const Home = () => {
    const [show, setShow] = useState(false)

    return (
        <main>

            <CategoryMenu></CategoryMenu>
            <div className="container py-5">
                <div className='register-title bg-success py-3 bg-opacity-25'>
                    <p className="mb-0 text-success fw-bold text-center">
                        Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                    </p>
                </div>
                <div className="register-user pt-4">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-part">
                                <h3 className="fw-bold mb-3">
                                    Create Account
                                </h3>
                                <div className="register-user-form">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 p-0">
                                                <input placeholder='First name' type="text" className="form-control rounded-0 fw-bold py-3 border-bottom-none text-muted" id="firstnameinput" />
                                            </div>
                                            <div className="col-md-6 p-0">
                                                <input placeholder='last name' type="text" className="form-control rounded-0 fw-bold py-3 border-bottom-none text-muted border-left-none " id="lastnameinput" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <input placeholder='First name' type="email" className="form-control rounded-0 fw-bold py-3  border-bottom-none text-muted" id="emailinput" />
                                        </div>
                                        <div className="row">
                                            <input placeholder='Password' type="password" className="form-control rounded-0 fw-bold py-3  border-bottom-none text-muted" id="passinputlogin" />
                                        </div>
                                        <div className="row">
                                            <input placeholder='Confirm Password' type="password" className="form-control rounded-0 fw-bold py-3 text-muted" id="repssinput" />
                                        </div>
                                        <div className="row">
                                            <button type="submit" className="btn mt-3 py-3 w-100 rounded-5 fw-bold btn-primary">Create Account</button>
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
                                Already have an account? Sign In
                            </p>
                            <img src="register.png" className='img-fluid' alt="Register user" />
                            <p className="mt-4 text-muted">
                                By signing up, you agree to our Terms & conditions, Privacy policy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className='register-title bg-success py-3 bg-opacity-25'>
                    <p className="mb-0 text-success fw-bold text-center">
                        Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                    </p>
                </div>
                <div className="register-user pt-4">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-part">
                                <h3 className="fw-bold mb-3">
                                    Create Account
                                </h3>
                                <div className="register-user-form">
                                    <form>

                                        <div className="row">
                                            <input placeholder='Email' type="email" className="form-control rounded-0 fw-bold py-3  border-bottom-none text-muted" id="emailinputlogin" />
                                        </div>
                                        <div className="row">
                                            <input placeholder='Password' type="password" className="form-control rounded-0 fw-bold py-3 text-muted" id="passinput" />
                                        </div>
                                        <div className="row">
                                            <button type="submit" className="btn mt-3 py-3 w-100 rounded-5 fw-bold btn-primary">Login</button>
                                        </div>
                                    </form>
                                    <button className="border fw-bold mt-4 w-100 px-3 py-2 bg-transparent border-1 rounded-0">
                                        <FaFacebook className='text-primary mr-2 fs-5'></FaFacebook>  Sign up with Facebook
                                    </button>
                                    <button className="border fw-bold mt-2 w-100 px-3 py-2 bg-transparent border-1 rounded-0">
                                        <FcGoogle className='mr-2 fs-5'></FcGoogle>  Sign up with Goggle
                                    </button>
                                    <div className="forget-pass fw-bold mt-3 text-center">
                                        Forgot Password?
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <p className="mb-0">
                                Don’t have an account yet? Create new for free!
                            </p>
                            <img src="register.png" className='img-fluid' alt="Register user" />
                            <p className="mt-4 text-muted">
                                By signing up, you agree to our Terms & conditions, Privacy policy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => setShow(!show)}  id="myBtn">Open Modal</button>
            <div id="myModal" class={`modalRegis ${!show ? 'd-none' : 'd-block'} `}>

                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p>Some text in the Modal..</p>
                </div>

            </div>
        </main>
    );
};

export default Home;