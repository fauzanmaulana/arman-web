import React from 'react'

function Footer({logo, playstore}) {
    return (
        <footer id="footer" className="footer">
        <div className="footer_top">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-md-6 col-lg-4">
                      <div className="footer_widget">
                          <div className="footer_logo">
                              <a href="index.html">
                                  <img src={logo} alt="logo" />
                              </a>
                          </div>
                          <p>
                              Artikel Islam Penuh Manfaat 
                          </p>
                      </div>
                    </div>
                    <div className="col-xl-2 offset-xl-1 col-md-6 col-lg-3">
                        <div className="footer_widget text-center">
                            <h3 className="footer_title">
                                    Social
                            </h3>
                            <div className="socail_links">
                                <ul>
                                    <li>
                                        <a href="https://facebook.com/arman.app">
                                            <i className="ti-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/arman.app">
                                            <i className="ti-twitter-alt"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://instagram.com/arman.app">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-md-6 col-lg-2">
                        
                    </div>
                    <div className="col-xl-3 col-md-6 col-lg-3">
                        <div className="footer_widget text-center">
                            <h3 className="footer_title">
                                    Downloads
                            </h3>
                            <ul>
                                <li>
                                  <a href="https://bit.ly/get-arman" >
                                    <img src={playstore} width="200" alt="Arman" />
                                  </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copy-right_text">
            <div className="container">
                <div className="footer_border"></div>
                <div className="row">
                    <div className="col-xl-12">
                        <p className="copy_right text-center">
                          Copyright &copy; {new Date().getFullYear()} All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    )
}

export default Footer
