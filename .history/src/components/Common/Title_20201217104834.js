import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

function Title(props) {

    const [searchMode, setSearchMode] = useState(false)
    const [keyword, setKeyword] = useState('')

    const hendleSearch = async e => {
        if(e.keyCode === 13){
            props.history.push({
                pathname: `/search/${keyword.replace(' ', '-')}`,
                state: {
                    keyword: keyword,
                }
            })
            setSearchMode(!searchMode)
        }
    }

    return (
        <div id="home" className="slider_area">
            <div className="single_slider_two d-flex align-items-center slider_bg_1">
                <div className="container">
                    {!searchMode 
                        ? 
                        <h3 className="wow fadeInUp text-white mt-5" data-wow-duration="1s" data-wow-delay=".1s">{props.title} {props.location.state && <span className="ml-3"><i className="fa fa-search" onClick={() => setSearchMode(!searchMode)} /></span>}</h3>
                        :
                        <div className="row mt-5 wow fadeInUp">
                            <div className="col-lg-4">
                                <input className="form-control" onChange={e => setKeyword(e.target.value)} onKeyDown={e => hendleSearch(e)} />
                            </div>
                            {props.location.state && <div className="col-lg-2">
                                <h3 className="text-white" data-wow-duration="1s" data-wow-delay=".1s">{props.location.state && <i className="fa fa-search" onClick={() => setSearchMode(!searchMode)} />}</h3>
                            </div>}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default withRouter(Title)
