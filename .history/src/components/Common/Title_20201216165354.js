import React from 'react'

function Title({title}) {
    return (
        <div id="home" className="slider_area">
            <div className="single_slider_two d-flex align-items-center slider_bg_1">
                <div className="container">
                    <h3 className="wow fadeInUp text-white mt-5" data-wow-duration="1s" data-wow-delay=".1s">{title} <span><i className="fa fa-search"/></span></h3>
                    {/* <input className="form-control"/> */}
                </div>
            </div>
        </div>
    )
}

export default Title
