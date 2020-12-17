import React, { useState } from 'react'
import dummySearchData from '../../../data/Dummy/index'

function Jumbotron(props) {

    const [page, setPage] = useState(1)

    const hendleSearch = async e => {
        if(e.keyCode === 13){
            const response = await fetch(`${window.baseUrl}/api/contents/search?keyword=${e.target.value}&page=${page}`)
            const result = await response.json()

            if(result.success){
                props.history.push({
                    pathname: `/search/${e.target.value.replace(' ', '-')}`,
                    state: {
                        keyword: e.target.value,
                        result : result.data
                    }
                })
            }
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
                                <input className="jumbotron-input wow fadeInDown mt-3" placeholder="search article.." onKeyDown={e => hendleSearch(e)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron
