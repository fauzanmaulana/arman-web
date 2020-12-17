import React, { useState } from 'react'
import iconClose from '../../../../../../image/cancel.svg'
import { Modal } from 'react-responsive-modal'
import "react-responsive-modal/styles.css"
import './modal-topic.css'


function Topic({item}) {

    const [moreTopic, seMoreTopic] = useState(false)

    const followTopics = async (id) => {
        console.log(id)
    }

    const pickChoice = e => {
        // api/user_interests?topic_ids=136
        if(!e.target.classList.value){
            if(!e.target.parentElement.classList.contains('chip--active')){
                e.target.parentElement.classList.add('chip--active')
                followTopics(e.target.value)
            }else{
                e.target.parentElement.classList.remove('chip--active')
                console.log('kesono')
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
                {item.map((topic, i) => {
                    if(i < 10){
                        return(
                            <div className={topic.has_interest === 0 ? "chip" : "chip chip--active"} onClick={e => pickChoice(e)} key={i}>
                                <span className="icon icon--leadind chip--check">
                                    <i className="fa fa-check"></i>
                                </span>
                                <span>{topic.name}</span>
                            </div>
                        )
                    }
                })}
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
                        {item.map((topic, i) => (
                            <div className={topic.has_interest === 0 ? "chip" : "chip chip--active"} onClick={e => pickChoice(e)} key={i} id={topic.id}>
                                <span className="icon icon--leadind chip--check" id={topic.id}>
                                    <i className="fa fa-check"></i>
                                </span>
                                <span id={topic.id}>{topic.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Topic
