import React from 'react'
import {Link} from 'react-router-dom'
import List from './List'

function BookmarkSide({item}) {

    return (
        <div className="wow fadeIn">
            <div className="list-content">
                <List item={item} />
            </div>

            <div className="footer-box">
                <hr/>
                <Link to="/bookmark">
                    <h6 className="m-0 text-center">All Bookmark</h6>
                </Link>
            </div>
        </div>
    )
}

export default BookmarkSide
