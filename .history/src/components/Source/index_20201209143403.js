import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom'
import Header from './Header'
import ContentList from '../Common/Content/List'
import Skeleton from 'react-loading-skeleton'

function Source(props) {

    const [isLoading, setIsLoading] = useState(true)
    const [source, setSource] = useState({
        source:'',
        source_logo:''
    })
    const [content, setContent] = useState([])
    const [isFollow, setIsFollow] = useState(null)

    const getDetailSource = async id => {
        setIsLoading(true)
        const response = await fetch(`${window.baseUrl}/api/contents?source_id=${id}`,{
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            })
        })
        const result = await response.json()
        console.log(result.data[0].)
        getSource(result.data[0].source)
        setSource({
            source: result.data[0].source,
            source_logo: result.data[0].source_logo
        })
        setContent(result.data)
        setIsLoading(false)
    }

    const getSource = async name => {
        const response = await fetch(`${window.baseUrl}/api/contents/explore`,{
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            })
        })
        const result = await response.json()
        const source = result.data.sources.filter(data => data.name === name)
        setIsFollow(source[0].has_interest)
    }

    useEffect(() => {
        getDetailSource(props.match.params.id)
    }, [props])

    return (
        <div>
            <Header source={source.source} isFollow={isFollow} isLoading={isLoading} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        {!isLoading ? 
                            <ContentList item={content} />
                            :
                            <Skeleton width={450} height={200} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Source)
