import React from 'react'
import TodayItem from './TodayItem'
import BookmarkList from '../../../Common/Bookmark/List'
import BookmarkIcon from '../../../../image/bookmark-bold.svg'
import { Link } from 'react-router-dom'

function Today(props) {

    return (
        <div className="container mt-5">
            <div className="row">
                <>
                    <div className="col-lg-8">
                        {props.news.map((data, i) => (
                            <TodayItem data={data} key={i} />
                        ))}
                    </div>
                    <div className="col-lg-4">
                        <div className="sticky-top sidelist mb-5">
                            <div className="header-box">
                                <h5>
                                    <img src={BookmarkIcon} alt="bookmarked" className="mr-2" />
                                    Reading
                                    <span style={{color:'#3673C3'}}> List</span>
                                </h5>
                                <hr/>
                            </div>

                            <div className="list-content">
                                <BookmarkList item={props.news}/>
                            </div>

                            <div className="footer-box text-right">
                                <hr/>
                                <Link to="/bookmark">
                                    <h6 className="m-0"><span>All</span> Bookmark</h6>
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            </div>
        </div>
    )
}

export default Today
