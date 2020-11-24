import React from 'react'

function About({icon1, icon2, icon3}) {
    return (
        <div id="about" className="service_area">
            <div className="container">
                <div className="row">
                <div className="col-xl-12">
                    <div className="section_title text-center  wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".3s">
                        <h3>Punya Pertanyaan Seputar Agama?<br/> Temukan jawabannya di Aplikasi Arman</h3>
                    </div>
                </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                    <div className="single_service text-center wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".4s">
                        <div className="thumb">
                                <img src={icon2} alt="icon2" />
                        </div>
                        <h3>Disarikan dari berbagai <br/>macam sumber terpercaya</h3>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                    <div className="single_service text-center wow fadeInUp" data-wow-duration=".7s" data-wow-delay=".5s">
                        <div className="thumb">
                            <img src={icon1} alt="icon1" />
                        </div>
                        <h3>Terdiri dari banyak <br/>topik dan bahasan</h3>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                    <div className="single_service text-center wow fadeInUp " data-wow-duration=".8s" data-wow-delay=".6s">
                        <div className="thumb">
                                <img src={icon3} alt="icon3" />
                        </div>
                        <h3>Mudah Menemukan Artikel<br/> Yang Anda Cari</h3>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
