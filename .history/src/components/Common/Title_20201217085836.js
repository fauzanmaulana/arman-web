import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

function Title(props) {

    const [searchMode, setSearchMode] = useState(false)

    return (
        <div id="home" className="slider_area">
            <div className="single_slider_two d-flex align-items-center slider_bg_1">
                <div className="container">
                    <h3 className="wow fadeInUp text-white mt-5" data-wow-duration="1s" data-wow-delay=".1s">{props.title} {props.location.state && <span className="ml-3"><i className="fa fa-search" onClick={() => setSearchMode(!searchMode)} /></span>}</h3>
                    <>
                        {searchMode && <div className="row mt-5">
                            <div className="col-lg-4">
                                <input className="form-control"/>
                            </div>
                        </div>}
                    </>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Title)
