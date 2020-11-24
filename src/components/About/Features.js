import React from 'react'

function Features() {
    return (
        <div id="features" className="service_area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section_title text-center  wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".3s">
                            <h3>Fitur Lengkap</h3>
                            <p>Semua tool yang Anda butuhkan, ada di app Arman</p>
                        </div>
                    </div>
                </div>
                <div className="row row-gutter wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".4s">
                <div className="col-md-4 col-gutter">
                    <div className="featured-item">
                        <div className="featured-icon"><i className="fa fa-search"></i></div>
                        <div className="featured-text">
                            <h4>Searching</h4>
                            <p>Anda dapat mencari Artikel berdasarkan keyword tertentu</p>
                        </div>
                    </div>
                    <div className="featured-item">
                        <div className="featured-icon"><i className="fa fa-th-list"></i></div>
                        <div className="featured-text">
                            <h4>Explore Berdasarkan Topik</h4>
                            <p>Anda dapat menjelajasih semua Artikel berdasarkan topik tertentu</p>
                        </div>
                    </div>
                    <div className="featured-item">
                        <div className="featured-icon"><i className="fa fa-wpexplorer"></i></div>
                        <div className="featured-text">
                            <h4>Explore Berdasarkan Sumber</h4>
                            <p> Anda dapat menjelajasih semua Artikel berdasarkan sumber artikel</p>
                        </div>
                    </div>
                    <div className="featured-item">
                        <div className="featured-icon"><i className="fa fa-backward"></i></div>
                        <div className="featured-text">
                            <h4>Follow Topik</h4>
                            <p>Anda dapat memfollow topik tertentu untuk mendapatkan artikel Rekomendasi terkait topik tersebut</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-gutter" >
                    <div className="featured-item">
                        <div className="featured-icon"><i className="fa fa-thumbs-up"></i></div>
                        <div className="featured-text">
                            <h4>Follow Sumber</h4>
                            <p>Anda dapat memfollow sumber tertentu untuk mendapatkan artikel Rekomendasi terkait sumber tersebut</p>
                        </div>
                    </div>
                    <div className="featured-item">
                        <div className="featured-icon"><i className="fa fa-font"></i></div>
                        <div className="featured-text">
                            <h4>Artikel Harian</h4>
                            <p>Anda akan mendapatkan notifikasi artikel harian berdasarkan artikel yang anda follow</p>
                        </div>
                    </div>
                    <div className="featured-item">
                        <div className="featured-icon"><i className="fa fa-fire"></i></div>
                        <div className="featured-text">
                            <h4>Artikel Popular</h4>
                            <p>Daftar artikel terpopular </p>
                        </div>
                    </div>
                    <div className="featured-item">
                        <div className="featured-icon"><i className="fa fa-star"></i></div>
                        <div className="featured-text">
                            <h4>Artikel Rekomendasi</h4>
                            <p>Daftar artikel Rekomendasi sesuai dengan topik dan sumber yang Anda follow</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-gutter">
                    <div className="featured-item " >
                        <div className="featured-icon"><i className="fa fa-gratipay"></i></div>
                        <div className="featured-text">
                            <h4>Favorit</h4>
                            <p>Anda dapat menyimpan artikel ke dalam folder Favorit.</p>
                        </div>
                    </div>
                    <div className="featured-item " >
                        <div className="featured-icon"><i className="fa fa-bookmark"></i></div>
                        <div className="featured-text">
                            <h4>Bookmark</h4>
                            <p>Anda dapat menandai artikel untuk dibaca kemudian</p>
                        </div>
                    </div>
                    <div className="featured-item " >
                        <div className="featured-icon"><i className="fa fa-download"></i></div>
                        <div className="featured-text">
                            <h4>Download</h4>
                            <p>Anda dapat mendownload artikel agar dapat dibaca secara offline</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Features
