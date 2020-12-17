import React from 'react'

function Jumbotron({playstore}) {
    return (
        <div id="home" className="slider_area">
            <div className="single_slider d-flex align-items-center slider_bg_1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-md-6">
                            <div className="slider_text">
                                <h3 className="wow fadeInDown" data-wow-duration="1s" data-wow-delay=".1s">Tingkatkan Wawasan Keislaman Anda <br/> Dengan Arman</h3>
                                <p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".1s">
                                    Akses 21.000+ artikel islam bermanfaat dalam 1 aplikasi 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron
