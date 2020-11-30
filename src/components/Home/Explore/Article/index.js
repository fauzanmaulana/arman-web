import React, { useState } from 'react'
import ContentList from '../../../Common/Content/List'
import BookmarkIcon from '../../../../image/bookmark-bold.svg'
import BookmarkSide from './Sidebar/Bookmark'
import Topics from './Sidebar/Topics'

function Article({bookmark}) {

    const [toogle, setToggle] = useState(false)

    return (
        <div className="container mt-5">
            <div className="row">
                <>
                    <div className="col-lg-8">
                        <ContentList item={bookmark}/>
                    </div>
                    <div className="col-lg-4" id="sidelist-wrapper">
                        <div className="sticky-top sidelist mb-5">
                            <div className="d-flex justify-content-between" id="header-box">
                                {toogle ?
                                <h5 className="m-0">
                                    <img src={BookmarkIcon} alt="bookmarked" className="mr-2" />
                                    Reading
                                    <span> List</span>
                                </h5>
                                :
                                <h5 className="m-0">
                                    <img src={BookmarkIcon} alt="bookmarked" className="mr-2" />
                                    Topics &
                                    <span> Source</span>
                                </h5>
                                }
                                <h6 onClick={() => setToggle(!toogle)}>{toogle ? 'all topics' : 'reading list'}</h6>
                            </div>
                            <hr/>
                            {toogle ? <BookmarkSide item={bookmark}/> :  <Topics />}
                        </div>
                    </div>
                </>
            </div>
        </div>
    )
}

export default Article
