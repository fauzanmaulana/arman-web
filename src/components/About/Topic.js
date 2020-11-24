import React from 'react'

function Topic({topik}) {
    return (
        <div id="topic" className="features_area ">
            <div className="container">
                <div className="features_main_wrap ">
                    <div className="row  align-items-center">
                    <div className="col-xl-5 col-lg-5 col-md-7">
                        <div className="features_info2">
                            <h3>Topik Lengkap</h3>
                            <p>Tersedia beragam topik dan pembahasan yang dapat Anda baca setiap saat</p>
                            <div className="about_btn">
                                <a className="boxed-btn4" href="https://bit.ly/get-arman">Download Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 offset-xl-1 offset-lg-1 col-md-5 ">
                        <div className="about_draw wow fadeInUp" data-wow-duration=".7s" data-wow-delay=".5s">
                            <img src={topik} alt="topik" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topic
