import React from 'react'

function Source({sumber}) {
    return (
        <div id="source" className="features_area">
            <div className="container">
                <div className="features_main_wrap">
                <div className="row  align-items-center">
                    <div className="col-xl-5 col-lg-5 offset-xl-1 offset-lg-1 col-md-6">
                        <div className="about_image wow fadeInLeft" data-wow-duration=".4s" data-wow-delay=".3s">
                            <img src={sumber} alt="sumber" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="features_info">
                            <h3 className="wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".3s" >Sumber Terpercaya</h3>
                            <p className="wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".4s"  >Semua artikel disarikan dari berbagai macam sumber terpercaya</p>

                            <div className="about_btn wow fadeInUp" data-wow-duration=".10s" data-wow-delay=".8s" >
                                <a className="boxed-btn4" href="https://bit.ly/get-arman">Download Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Source
