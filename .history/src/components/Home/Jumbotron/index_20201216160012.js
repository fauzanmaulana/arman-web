import React, { useState } from 'react'
import dummySearchData from '../../../data/Dummy/index'

function Jumbotron(props) {

    const [page, setPage] = useState(1)
    const [keyword, setKeyword] = useState('')

    const hendleSearch = async e => {
        if(e.keyCode === 13){
            props.history.push({
                pathname: `/search/${keyword.replace(' ', '-')}`,
                state: {
                    keyword: keyword,
                }
            })
        }
    }

    return (
        <div id="home" className="slider_area">
            <div className="single_slider d-flex align-items-center slider_bg_1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-md-11">
                            <div className="slider_text">
                                <h3 className="wow fadeInUp text-center" data-wow-duration="1s" data-wow-delay=".1s">Ahlan Wasahlan</h3>
                                <p className="wow fadeInLeft text-center" data-wow-duration="1s" data-wow-delay=".1s">
                                    Akses <span style={{color:'#00D363'}}>21.000+</span> artikel islam bermanfaat dalam 1 aplikasi 
                                </p>
                                <input className="jumbotron-input wow fadeInDown mt-3" placeholder="search article.." onKeyDown={e => hendleSearch(e)} onChange={e => setKeyword(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron
