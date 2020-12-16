import React, { useEffect, useState } from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import { Modal } from 'react-responsive-modal'
import "react-responsive-modal/styles.css"
import './modal-header.css'
import MainLogo from '../../../../image/arman.png'
import GoogleLogo from '../../../../image/google.svg'
import FacebookLogo from '../../../../image/facebook.svg'
import Loader from '../../../../image/spinner.gif'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

function Header({logo}) {

    const [modalAuth, setModalAuth] = useState(false)
    const [currentUser, setCurrentUser] = useState({})
    const [token, setToken] = useState(false)

    if (!firebase.apps.length) {
        firebase.initializeApp({
            apiKey: 'AIzaSyAxfj06b4z2ypft9LGHkhQ6ppYo4udGCK0',
            authDomain: 'arman-7c7cd.firebaseapp.com'
        })
    }

    const uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => setModalAuth(false),
            uiShown: () => document.getElementById('loader').style.display = 'none'
        }
    }

    const authStateChange = async () => {
        await firebase.auth().onAuthStateChanged(user => {
            setCurrentUser(user)
            if(user){
                user.getIdToken(true).then(idToken => console.log(idToken))
                setToken(true)
            }
        })
    }

    useEffect(() => {
        authStateChange()
    })

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
                                {token ? 
                                    <li className="dropdown">
                                        <a href=":;" className="dropdown-toggle text-white" data-toggle="dropdown" role="button" aria-expanded="false">
                                            <img src={currentUser.photoURL} alt="profile" width="50" className="rounded-circle" id="profile-img" />
                                            <span className="caret"></span>
                                        </a>
                                        <ul className="dropdown-menu py-2 px-3" role="menu" id="navigation">
                                            <li>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <img src={currentUser.photoURL} alt="profile" width="50" className="rounded-circle" />
                                                    <div className="flex-column ml-3 mt-3">
                                                        <a href=":;"><span style={{color:'#00D363'}}>Hi!</span>  {currentUser.displayName}</a>
                                                        <p href=":;" style={{fontSize:'9pt', fontWeight:'bold'}}>{currentUser.email}</p>
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
                                            <li style={{cursor:'pointer'}} onClick={ async () => {
                                                sessionStorage.removeItem('creadentialToken')
                                                setCurrentUser({})
                                                setToken(false)
                                                await firebase.auth().signOut()
                                            }}>Sign Out</li>
                                        </ul>
                                    </li>
                                    :
                                    <p onClick={() => setModalAuth(true)} className="text-white" style={{cursor:'pointer'}}>login / register</p>
                                }
                            </div>
                            </nav>
                        </div>
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                open={modalAuth}
                onClose={() => setModalAuth(false)}
                showCloseIcon={false}
                classNames={{
                    modalAnimationIn: 'customEnterModalAnimationAuth',
                    modalAnimationOut: 'customLeaveModalAnimationAuth',
                    modal: 'modal-auth',
                }}
                animationDuration={600}
            >
                <div className="container">
                    <div className="title-modal d-flex justify-content-center align-items-center">
                        <img src={MainLogo} alt="arman" width="100" />
                        <h2 className="my-0 ml-2 text-dark">Arman</h2>
                    </div>

                    <div className="body-modal">
                        <StyledFirebaseAuth 
                            uiConfig={uiConfig}
                            firebaseAuth={firebase.auth()}
                        />
                        <div className="text-center" id="loader">
                            <img src={Loader} alt="loader" width="100" />
                        </div>
                    </div>
                </div>
            </Modal>
        </header>
    )
}

export default Header
