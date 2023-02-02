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
                        <input type="password" className="form-control rounded-5" id="exampleInputPassword1" />
                    </div>


                </form>
                <div>
                    Create account. It’s free!
                </div>
            </div>

        </header>
    );
};

export default Header;