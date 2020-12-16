import React from 'react'

function Header({source}) {
    return (
        <div id="home" className="slider_area">
            <div className="single_slider_two d-flex align-items-center slider_bg_1">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-8 d-flex justify-content-between">
                            <h3 className="wow fadeInUp text-white" data-wow-duration="1s" data-wow-delay=".1s">{source || 'loading..'}</h3>
                            <button className="btn btn-sm btn-outline-success px-3 py-2">
                                follow
                            </button>
                            {/* <button className="btn btn-sm btn-success px-3 py-2">
                                unfollow
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
