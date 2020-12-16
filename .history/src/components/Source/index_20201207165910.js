import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom'
import Header from './Header'
import ContentList from '../Common/Content/List'
import SourceDummyData from '../../data/Dummy/index'

function Source(props) {

    const [source, setSource] = useState({
        source:'',
        source_logo:''
    })
    const [content, setContent] = useState([])

    const getDetailSource = async id => {
        const response = await fetch(`${window.baseUrl}/api/contents?source_id=${id}`,{
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            })
        })
        const result = await response.json()
        setSource({
            source: result.data[0].source,
            source_logo: result.data[0].source_logo
        })
        setContent(result.data)
    }

    useEffect(() => {
        getDetailSource(props.match.params.id)
    }, [props])

    return (
        <div>
            <Header source={source.source} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        {/* <ContentList item={content} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Source)
