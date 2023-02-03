import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const Header = () => {
    const [show, setShow] = useState(false)
    return (
        <header className='container py-4'>
            <div className="d-md-flex d-none d-sm-none justify-content-between">
                <div>
                    <img src="img/logo.png" alt="" />
                </div>

                <form>

                    <div className='d-flex align-items-center rounded-5 px-3 border'>
                        <AiOutlineSearch className='fs-4'></AiOutlineSearch> <input placeholder='Search for your favorite groups in ATG' type="password" className="form-control search-input border-0 rounded-5" id="exampleInputPassword1" />
                    </div>


                </form>
                <div className='fw-bold'>
                    Create account. <span style={{cursor: 'pointer'}} className='text-success' onClick={() => setShow(!show)} id="myBtn">it's free</span>
                </div>
            </div>

            <div id="myModal" class={`modalRegis ${!show ? 'd-none' : 'd-block'} `}>

                <div class="modal-content-register position-relative">
                    <span onClick={() => setShow(false)} class="close">X</span>
                    <div className='register-title bg-success py-3 bg-opacity-25'>
                        <p className="mb-0 text-success fw-bold text-center px-3 py-2">
                            Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                        </p>
                    </div>
                    <div className="register-user pb-2 px-4 pt-4">
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
                                                <input placeholder='Email' type="email" className="form-control rounded-0 fw-bold py-3  border-bottom-none text-muted" id="emailinput" />
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
                                    Already have an account? <span style={{cursor: 'pointer'}} className='text-success fw-bold'>Sign In</span>
                                </p>
                                <img src="register.png" className='img-fluid' alt="Register user" />
                                <p className="mt-4 text-muted">
                                    By signing up, you agree to our Terms & conditions, Privacy policy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </header>
    );
};

export default Header;