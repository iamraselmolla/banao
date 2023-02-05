import React from 'react';

import { useEffect } from 'react';
import { useState } from 'react';
import Post from '../../../../shared/Post';
import { AiFillEdit } from 'react-icons/ai';

const CategoryMenu = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('posts.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <section>

            <div className="container position-relative">
                <div className="row">
                    <div className="col-md-7">
                        <h2 className="fw-bolder mb-4">
                            All Posts (20)
                        </h2>
                        {posts?.map(singlePost => <Post post={singlePost}></Post>)}
                        <div className="post-btn d-block d-sm-block d-md-none">
                            <AiFillEdit></AiFillEdit>
                        </div>
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <h2 className="fw-bolder mb-4">
                            Write a Post <AiFillEdit></AiFillEdit>
                        </h2>
                        <form>
                            <div className="mb-3">
                            <textarea name='post-text' class="form-control" placeholder="Write your thought..." id="floatingTextarea"></textarea>
                            </div>
                            <div className="mb-3">
                                <input name='post-file' className="form-control" type="file" id="formFile"/>
                            </div>
                            <button type="submit" className="btn mt-1 py-2 w-100 rounded-5 fw-bold btn-success">Post</button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoryMenu;