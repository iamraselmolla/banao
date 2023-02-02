import React from 'react';
import { GrView } from 'react-icons/gr'
import { BiShareAlt, BiShoppingBag } from 'react-icons/bi'
import { AiOutlineCalendar, AiTwotoneCalendar } from 'react-icons/ai'
import { MdLocationPin } from 'react-icons/md'
import { BsPenFill } from 'react-icons/bs'
import { GiMicroscope, GiShoppingBag } from 'react-icons/gi'
import { useState } from 'react';

const Post = ({ post }) => {
    const [show, setShow] = useState(false)
    console.log(post)
    const { img, title, description, meeting_location, meeting_date, website, category, category_id, user, user_img, view, compnay_name, company_location, timesjob } = post
    return (
        <div className='single-post border border-1 my-2 rounded'>
            {img && <img className='img-fluid' src={img} />}
            <div className="px-3 py-3">
                <span className="fw-bolder mb-3 d-block">
                    <span className='me-2'>
                        {category === "Article" && <BsPenFill></BsPenFill>}
                        {category === "Education" && <GiMicroscope></GiMicroscope>}
                        {category === "Meetup" && <AiTwotoneCalendar></AiTwotoneCalendar>}
                        {category === "Job" && <GiShoppingBag></GiShoppingBag>}
                    </span>

                    {category}
                </span>
                <div className="section_title d-flex justify-content-between">
                    <h4 className="fw-bolder">
                        {title}
                    </h4>
                    <span onClick={() => setShow(!show)} className="fw-bolder position-relative">
                        ...
                        {show && <>
                            <div style={{ top: '30px', left: '-54px', background: '#fff' }} className='position-absolute shadow-lg px-3 py-2 rounded'>
                                <div>
                                    Edit
                                </div>
                                <div>
                                    Report
                                </div>
                            </div>
                        </>}
                    </span>
                </div>
                {description && <p className="text-muted">
                    {description}
                </p>}
                {category === "Meetup" && <>
                    <div className="d-flex fw-bold my-2">
                        <div>
                            <AiOutlineCalendar></AiOutlineCalendar> {meeting_date}
                        </div>
                        <div className='ms-5'>
                            <MdLocationPin></MdLocationPin> {meeting_location}
                        </div>

                    </div>
                    <a href={website} target="_blank">
                        <button className="btn mt-2 text-danger fw-bold w-100 bg-transparent border border-1 rounded">
                            Visit Website
                        </button>
                    </a>
                </>}
                {category === "Job" && <>
                    <div className="d-flex fw-bold my-2">
                        <div>
                            <BiShoppingBag></BiShoppingBag> {compnay_name}
                        </div>
                        <div className='ms-5'>
                            <MdLocationPin></MdLocationPin> {company_location}
                        </div>

                    </div>
                    <a href={timesjob} target="_blank">
                        <button className="btn mt-2 text-success fw-bold w-100 bg-transparent border border-1 rounded">
                            Apply on timejobs
                        </button>
                    </a>
                </>}
                <div className="d-none d-sm-none d-md-block">
                    <div className="d-flex mt-3 justify-content-between">
                        <div className="user d-flex align-items-center gap-3">
                            <img src={user_img} alt="" />
                            <p className="m-0 fw-bold">
                                {user}
                            </p>
                        </div>
                        <div className="share-view d-flex">
                            <div className='fw-bold text-muted'>
                                <GrView className='me-1'></GrView>{view}
                                <BiShareAlt className='text-muted ms-4'></BiShareAlt>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex mt-3 align-items-center justify-content-between d-sm-flex d-md-none">
                    <div className="user d-flex align-items-center gap-3">
                        <img src={user_img} alt="" />
                        <p className="m-0 fw-bold d-flex flex-column">
                            {user}
                            <div>{view} Views</div>
                        </p>
                    </div>
                    <div style={{background: '#F1F3F5'}} className='px-3 py-2 rounded'>
                         <BiShareAlt className='text-muted me-2'></BiShareAlt>Share 
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Post;