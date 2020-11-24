import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'

function HeaderTwo({logo}) {
    return (
        <header>
            <div className="header-area" id="wrapper-header">
                <div id="sticky-header" className="main-header-area">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-2">
                            <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="arman" />
                            </Link>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-10">
                            <nav>
                            <div className="text-right">

                                {/* has login */}
                                {!localStorage.getItem('credential_token') ? 
                                    <li className="dropdown">
                                        <a href=":;" className="dropdown-toggle text-white" data-toggle="dropdown" role="button" aria-expanded="false">
                                            <img src={`https://randomuser.me/api/portraits/men/80.jpg`} alt="profile" width="50" className="rounded-circle" id="profile-img" />
                                            <span className="caret"></span>
                                        </a>
                                        <ul className="dropdown-menu py-2 px-3" role="menu" id="navigation">
                                            <li>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <img src={`https://randomuser.me/api/portraits/men/80.jpg`} alt="profile" width="50" className="rounded-circle" />
                                                    <div className="flex-column ml-3 mt-3">
                                                        <a href=":;"><span style={{color:'#4E71FD'}}>Hi!</span>  Fauzan Maulana</a>
                                                        <p href=":;" style={{fontSize:'9pt'}}>fauzanfm735@gmail.com</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <hr className="my-0"/>
                                            <li>
                                                <Link to="/history">
                                                    History
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/like">
                                                    Like
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/bookmark">
                                                    Bookmark
                                                </Link>
                                            </li>
                                            <hr className="my-1"/>
                                            <li>
                                                <Link to="#">
                                                    Sign Out
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    :
                                    <li className="dropdown">
                                        <a href=":;" className="dropdown-toggle text-white" data-toggle="dropdown" role="button" aria-expanded="false">
                                            Login
                                            <span className="caret"></span>
                                        </a>
                                        <ul className="dropdown-menu p-2" role="menu" id="navigation">
                                            <li>
                                                <Link to="#">
                                                    <span className="mr-2"><i className="fa custom-fa fa-google"></i></span>
                                                    Google
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <span className="mr-2"><i className="fa custom-fa fa-heart"></i></span>
                                                    Facebook
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                }
                            </div>
                            </nav>
                        </div>
                        {/* <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                            <div className="Appointment">
                                <div className="book_btn d-none d-lg-block">
                                    <a href="https://bit.ly/get-arman">Download</a>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderTwo
