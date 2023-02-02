import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowDropDown, MdErrorOutline, MdModeEditOutline } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { useEffect } from 'react';
import { useState } from 'react';
import Post from '../../../../shared/Post';

const CategoryMenu = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('posts.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <section>
            <div className='container'>
                <div className="align-items-center border-bottom d-flex d-md-flex d-none d-sm-none justify-content-between pb-2">
                    <div className="menu-part">
                        <Link className='text-decoration-none px-2 fw-bold text-black' to="">All Posts</Link>
                        <Link className='text-decoration-none px-2 fw-bold text-black' to="">Article</Link>
                        <Link className='text-decoration-none px-2 fw-bold text-black' to="">Events</Link>
                        <Link className='text-decoration-none px-2 fw-bold text-black' to="">Jobs</Link>
                        <Link className='text-decoration-none px-2 fw-bold text-black' to="">Education</Link>
                    </div>
                    <div className="post-part">
                        <button className='px-3 fw-bolder py-2 rounded border-0' style={{ background: '#EDEEF0' }}>Write a Post <MdArrowDropDown></MdArrowDropDown></button>
                        <button className='px-3 bg-primary text-white fw-bolder py-2 rounded border-0 ms-4'><FaUsers></FaUsers> Join group </button>
                    </div>
                </div>
            </div>
            <div className="container position-relative">
                <div style={{ top: '8px' }} className="d-flex d-sm-flex d-md-none  position-absolute w-100  px-4 justify-content-between">
                    <p className="mb-0 fw-bold fs-4">
                        Posts ({posts?.length})
                    </p>
                    <select style={{ background: ' #F1F3F5' }} className='me-3 fw-bolder border-0 px-2 py-2 fw-bold' name="" id="">
                        <option value="">All</option>
                        <option value="">Article</option>
                        <option value="">Education</option>
                        <option value="">MeetUp</option>
                        <option value="">Jobs</option>
                    </select>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        {posts?.map(singlePost => <Post post={singlePost}></Post>)}
                    </div>
                    <div className="col-md-4 d-none d-sm-none d-md-block pt-5 offset-md-1">
                        <div className="d-flex border-bottom">
                            <MdLocationOn className='fs-3'></MdLocationOn>
                            <form className='w-100'>
                                <input type="email" className="form-control border-0" id="searchinput" />
                            </form>
                            <MdModeEditOutline className="fs-3"></MdModeEditOutline>

                        </div>
                        <div className="mt-4 d-flex gap-3 text-muted">
                            <MdErrorOutline className='fs-3'></MdErrorOutline>
                            <p className="mb-0">
                                Your location will help us serve better and extend a personalised experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoryMenu;