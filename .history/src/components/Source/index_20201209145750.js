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

    const getDetailSource = async id => {
        setIsLoading(true)
        const response = await fetch(`${window.baseUrl}/api/contents?source_id=${id}`,{
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            })
        })
        const result = await response.json()
        getSource(result.data[0], id)
        setContent(result.data)
        setIsLoading(false)
    }

    const getSource = async (source, id) => {
        const response = await fetch(`${window.baseUrl}/api/contents/explore`,{
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            })
        })
        const result = await response.json()
        const hasInterest = result.data.sources.filter(data => data.name === source.source)
        setSource({
            id: id,
            source: source.source,
            source_logo: source.source_logo,
            has_interest: hasInterest
        })
    }

    useEffect(() => {
        getDetailSource(props.match.params.id)
    }, [props])

    return (
        <div>
            <Header source={source} isLoading={isLoading} type={'sources'} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        {!isLoading ? 
                            <ContentList item={content} />
                            :
                            <div className="mt-2">
                                <Skeleton width={630} height={200} className="mb-2" />
                                <Skeleton width={630} height={200} className="mb-2" />
                                <Skeleton width={630} height={200} className="mb-2" />
                                <Skeleton width={630} height={200} className="mb-2" />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Source)
