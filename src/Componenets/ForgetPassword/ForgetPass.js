import React from 'react';

const ForgetPass = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="border px-3 py-4 border-success border-2">
                        <h2 className="fw-bolder">
                            Reset Password?
                        </h2>
                        <form >
                            <input placeholder='email' type="email" className="form-control rounded-0 fw-bold py-3 text-muted" id="firstnameinput11" />
                            <button type="submit" className="btn mt-3 py-3 w-100 rounded-5 fw-bold btn-success">Create Account</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPass;