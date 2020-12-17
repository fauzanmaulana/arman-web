import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import Title from '../Common/Title'
import ContentList from '../Common/Content/List'

function Search(props) {

    const [page, setPage] = useState(1)
    const [content, setContent] = useState([])

    const getSearchResult = async (page) => {
        const response = await fetch(`${window.baseUrl}/api/contents/search?keyword=${props.location.state.keyword}&page=${page}`, {
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            })
        })
        const result = await response.json()
        if(result.success){
            setContent(result.data)
        }
    }

    useEffect(() => {
        if(props.location.state){
            getSearchResult(page)
        }
    }, [page])

    return (
        <div>
            <Title title={`Result for ${props.location.state.keyword}`} />

            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <ContentList item={content} />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default withRouter(Search)
