import React, { useState } from 'react'
import iconClose from '../../../../../../image/cancel.svg'
import { Modal } from 'react-responsive-modal'
import "react-responsive-modal/styles.css"
import './modal-topic.css'


function Topic({interest, all}) {

    const [topics, setTopics] = useState([])
    const [moreTopic, seMoreTopic] = useState(false)

    const pickChoice = e => {
        if(!e.target.classList.value){
            if(!e.target.parentElement.classList.contains('chip--active')){
                e.target.parentElement.classList.add('chip--active')
            }else{
                e.target.parentElement.classList.remove('chip--active')
            }
        }else{
            if(!e.target.classList.contains('chip--active')){
                e.target.classList.add('chip--active')
            }else{
                e.target.classList.remove('chip--active')
            }
        }
    }

    return (
        <div>
            <div className="chips__filter mt-3">
                {all.map((topic, i) => (
                    <div key={i}>
                        {i < 15 && <div className={i % 2 ? "chip" : "chip chip--active"} onClick={e => pickChoice(e)}>
                            <span className="icon icon--leadind chip--check">
                                <i className="fa fa-check"></i>
                            </span>
                            <span>{topic.topic}</span>
                        </div>}
                    </div>
                ))}
            </div>
            <div className="footer-box">
                <hr/>
                <h6 className="m-0 text-center" onClick={() => seMoreTopic(true)}>All Topics</h6>
            </div>

            <Modal
                open={moreTopic}
                onClose={() => seMoreTopic(false)}
                center
                // closeIcon={iconClose}
                classNames={{
                    overlayAnimationIn: 'customEnterOverlayAnimationTopic',
                    overlayAnimationOut: 'customLeaveOverlayAnimationTopic',
                    modalAnimationIn: 'customEnterModalAnimationTopic',
                    modalAnimationOut: 'customLeaveModalAnimationTopic',
                    modal: 'topic-modal',
                }}
                animationDuration={800}
            >
                <div className="container">
                    <div className="chips__filter mt-3">
                        {topics.map((topic, i) => (
                            <div className={i % 2 ? "chip" : "chip chip--active"} onClick={e => pickChoice(e)} key={i}>
                                <span className="icon icon--leadind chip--check">
                                    <i className="fa fa-check"></i>
                                </span>
                                <span>{topic.topic}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Topic
