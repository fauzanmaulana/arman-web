import React from 'react'

function Testimony() {
    return (
        <div id="testmony" className="testmonial_area">
            <div className="text-center" style={{marginTop:'15px'}}>
            <h2 style={{fontSize:'50pt', color:'white'}}>Testimony</h2>
            </div>
            <div className="container">
            <div className="col-xl-12">
                <div className="testmonial_active owl-carousel">
                <div className="single_testmonial text-center wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".3s">
                    <p style={{padding: '0 100px'}}>
                    Arman merupakan aplikasi artikel tentang dunia islam yang sangat membantu para pembaca termasuk saya dalam meningkatkan pemahaman keislaman. <br/>Para pembaca bisa memilih topik artikel yang ingin dipelajari. <br/>Dan juga akan ada notifikasi tentang artikel baru yang akan selalu mengingat kan pembaca untuk membaca artikel-artikel menarik tentang islam
                    </p>
                    <div className="rating_author">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <span>
                                - Candini Ardiyanah
                        </span>
                    </div>
                    <div className="single_testmonial text-center wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".3s">
                        <p>
                        Setelah saya mencoba app arman <br/>saya jadi tau info-info islami yang sangat bermanfaat <br/>dan  recommended banget app ini untuk di install <br/>karena ada akses artikel kurang lebih sampai 21.000 sangat cocok untuk di baca 
                        </p>
                        <div className="rating_author">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <span>
                                    - Roby Irhamni
                            </span>
                        </div>
                    </div>
                    <div className="single_testmonial text-center wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".3s">
                        <p>Ini Aplikasi yang bagus<br/> sangat membantu sekali menemukan referensi yang dibutuhkan. <br/>dan di sini ada banyak jenis artikel yang sangat berguna <br/>untuk menambah pengetahuan yang dapat meningkatkan keimanan.
                        </p>
                        <div className="rating_author">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <span>
                                    - Wiwit Sujarwo
                            </span>
                        </div>
                    </div>                    
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Testimony
