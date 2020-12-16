import React, { useEffect, useState } from 'react'
import ContentList from '../../../Common/Content/List'
import BookmarkIcon from '../../../../image/bookmark-bold.svg'
import BookmarkSide from './Sidebar/Bookmark'
import Topics from './Sidebar/Topics'

function Article(props) {

    const [toogle, setToggle] = useState(false)
    const [allTopics, setAllTopics] = useState([])
    const [interestTopics, setInterestTopics] = useState([])
    const [sources, setSource] = useState([])
    
    const getExploreData = async () => {
        const response = await fetch(`${window.baseUrl}/api/contents/explore`,{
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            })
        })
        const result = await response.json()
        setSource(result.data.sources)
        setAllTopics(result.data.topics)
        setInterestTopics(result.data.topics.filter(topic => topic.has_interest === 1))
    }

    useEffect(() => {
        if(localStorage.getItem('access_token')){
            getExploreData()
        }
    }, [])

    return (
        <div className="container mt-5">
            <div className="row">
                <>
                    <div className="col-lg-8">
                        {/* <ContentList item={} /> */}
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
                            {toogle ? <BookmarkSide item={props.bookmark}/> :  <Topics sources={sources} topics={allTopics} />}
                        </div>
                    </div>
                </>
            </div>
        </div>
    )
}

export default Article
