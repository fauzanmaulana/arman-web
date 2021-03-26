import React, { useEffect, useState } from 'react'
import './style.css'
import { Link, withRouter } from 'react-router-dom'
import { Modal } from 'react-responsive-modal'
import "react-responsive-modal/styles.css"
import './modal-header.css'
import firebase from 'firebase'
import MainLogo from '../../../../image/horizontal_with_tag.png'
import oAuthOptions from '../../../../service/oAuthOptions'

function Header(props) {

    const [modalAuth, setModalAuth] = useState(false)
    const [isLogged, setIsLogged] = useState(false)
    const [currentUser, setCurrentUser] = useState({})
    let user = JSON.parse(localStorage.getItem('arman_user'))

    const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMzg5ZjY2NWNjMzUwOTI0MjIzMzdiYjQ0YmE4MDQ1NTM0NjgyMmY4YTIxZTcyMTg5MDFlNzI3OTExODg4MWUyZDllMWQ5NGJmMTZlNTk5NTEiLCJpYXQiOjE2MDcyOTY0NTQsIm5iZiI6MTYwNzI5NjQ1NCwiZXhwIjoxNjM4ODMyNDU0LCJzdWIiOiIzMyIsInNjb3BlcyI6W119.lqotgp5v7fcWD90dFtiZyhFtv5xkBPBSj6ljFBUp0kzRElHOZ-s8HOTCQO8JOgTXSnxC57-Q0raqV2mDMrHOBuq7YsFWqhj42OQfHKDdrFUFE7Qz751pcGpThyN1pwmIplxRhWmBO2nN8QvW4b-ss9LqIT6VJ2L1CMYs9ZAlIwhuom4Jz3gbKqYXhzDgyJqQ7LKQenyb0zqmjekVNYgw6AaNQjWsz7jz73YhcG1EaZvQivvHDbz8BPvt3Ej-WMPDpJ114whnpy0eGugrxNAJT-5lV_plcmeGO4HpBUvHCmGianu-dLw81BTGwfIRWxdRof1sW5cXjnqIjdTC6T42PdnhKD4G5_zr-qHcs7P_xHn_Bk0lsw0wVwxZ4Rkc_KLYR-TkXZrNThqGwmV93liDl8_3lxeRkIax3Z1b8t6NSz4NpsUVDq8DSwem7_-1GZFrJ0Ds-5QYRCo2C2g77oKYeXF6V-cY1MZsb7ESUyzHyb1Ps58YkfFhllhO0IViiXvuhOq8sRP4G0S8TGrSdxJFXu7Bga2i3NEMkBRm_yTmZz7NBvSbcbaYOMSJHKqs2xbk87aMijS4q0hWUZIJxy7SXh9nMtkR0nu0ETUsmpQLh5ndDoHlCkA8qJLESmg3VgLT2wnqzy0eaNpYMnU5sTBWwvn6PBMDI9b-tRqnLYohuh8"

    if (!firebase.apps.length) {
        firebase.initializeApp({
            apiKey: 'AIzaSyAxfj06b4z2ypft9LGHkhQ6ppYo4udGCK0',
            authDomain: 'arman-7c7cd.firebaseapp.com'
        })
    }

    const oauthAuthorization = async (type, email, token) => {
        const params = {
            "grant_type": "social",
            "client_id": "3",
            "client_secret": "dSXefk8cq1fnfvptkpnLQtVQF5B3Zo711Mefmg67",
            "provider": type,
            "email": email,
            "access_token": token,
            "platform": "Android"
        }
        const response = await fetch(`${window.baseUrl}/oauth/token`, {
            method: 'post',
            body: JSON.stringify(params)
        })
        const result = await response.json()
        console.log(result)
    }

    const oauthLogin = async (type) => {
        let provider;
        switch (type) {
            case 'google':
                provider = new firebase.auth.GoogleAuthProvider()
                break;

            case 'facebook':
                provider = new firebase.auth.FacebookAuthProvider()
                break;
        
            default:
                provider = new firebase.auth.GoogleAuthProvider()
                break;
        }
        const response = await firebase.auth().signInWithPopup(provider)
        console.log(response)

        const armanUser = {
            'username': response.user.displayName,
            'email': response.user.email,
            'photo': response.user.photoURL
        }

        // for a while till not cors-origin
        localStorage.setItem('access_token', accessToken)
        localStorage.setItem('arman_user', JSON.stringify(armanUser))
        // if reload
        window.location.reload()
        // if real-time
        // setCurrentUser(response.user)
        // setModalAuth(false)
        // setIsLogged(true)
        
        // authorization *cors-origin
        // oauthAuthorization(type, response.user.email || 'fauzanfm735@gmail.com', response.credential.accessToken)
    }

    const oauthLogout = async () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('arman_user')
        await firebase.auth().signOut()
        await props.history.push('/')
        await window.location.reload()
    }

    useEffect(() => {
        if(!localStorage.getItem('access_token')){
            setTimeout(() => {
                setModalAuth(true)
            }, 500)
        }
    }, [])

    return (
        <header>
            <div className="header-area" id="wrapper-header">
                <div id="sticky-header" className="main-header-area">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-2">
                            <div className="logo">
                            <Link to="/">
                                <img src={props.logo} alt="arman" />
                            </Link>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-10">
                            <nav>
                            <div className="text-right">

                                {/* has login */}
                                {isLogged || localStorage.getItem('arman_user') &&
                                    <li className="dropdown">
                                        <a href=":;" className="dropdown-toggle text-white" data-toggle="dropdown" role="button" aria-expanded="false">
                                            <img src={currentUser.photoURL || user.photo} alt="profile" width="50" className="rounded-circle" id="profile-img" />
                                            <span className="caret"></span>
                                        </a>
                                        <ul className="dropdown-menu py-2 px-3" role="menu" id="navigation">
                                            <li>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <img src={currentUser.photoURL || user.photo} alt="profile" width="50" className="rounded-circle" />
                                                    <div className="flex-column ml-3 mt-3">
                                                        <a href=":;"><span style={{color:'#00D363'}}>Hi!</span>  {currentUser.displayName || user.username}</a>
                                                        <p href=":;" style={{fontSize:'9pt', fontWeight:'bold'}}>{currentUser.email || user.email}</p>
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
                                            <li style={{cursor:'pointer'}} onClick={() => oauthLogout()}>Sign Out</li>
                                        </ul>
                                    </li>
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
            
            {/* modal login */}
            <Modal
                open={modalAuth}
                onClose={() => setModalAuth(false)}
                showCloseIcon={false}
                closeOnEsc={false}
                closeOnOverlayClick={false}
                classNames={{
                    modalAnimationIn: 'customEnterModalAnimationAuth',
                    modalAnimationOut: 'customLeaveModalAnimationAuth',
                    modal: 'modal-auth',
                }}
                animationDuration={600}
            >
                <div className="container">
                    <div className="title-modal d-flex justify-content-center mb-2">
                        <img src={MainLogo} alt="arman" width="300" />
                    </div>

                    <div className="body-modal">
                        {oAuthOptions.map((item, i) => (
                            <button className={item.class} onClick={() => oauthLogin(item.provider)} key={i}>
                                <span className="mr-2">
                                    <img src={item.image} width="28" alt="auth button" />
                                </span>
                                {item.provider}
                            </button>
                        ))}
                    </div>
                </div>
            </Modal>
        </header>
    )
}

export default withRouter(Header)
