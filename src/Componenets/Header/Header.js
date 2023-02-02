import React from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='container py-4'>
            <div className="d-flex justify-content-between">
                <div>
                    <img src="img/logo.png" alt="" />
                </div>

                <form>

                    <div>
                        <input placeholder='Search for your favorite groups in ATG' type="password" className="form-control rounded-5" id="exampleInputPassword1" />
                    </div>


                </form>
                <div className='fw-bold'>
                    Create account. <a className='text-decoration-none' href=''>It’s free!</a>
                </div>
            </div>

            

        </header>
    );
};

export default Header;