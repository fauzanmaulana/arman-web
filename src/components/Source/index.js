import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom'
import Header from './Header'
import InfiniteContent from '../Common/InfiniteContent/List'

function Source(props) {

    const [isLoading, setIsLoading] = useState(true)
    const [source, setSource] = useState({
        id: '',
        source:'',
        source_logo:'',
        has_interest: ''
    })

    const getSource = async (id) => {
        const response = await fetch(`${window.baseUrl}/api/contents/explore`,{
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            })
        })
        const result = await response.json()
        const sources = result.data.sources.filter(data => data.id == id)[0]
        setSource({
            id: id,
            source: sources.name,
            source_logo: sources.logo,
            has_interest: sources.has_interest
        })
        setIsLoading(false)
    }

    useEffect(() => {
        getSource(props.match.params.id)
    }, [props])

    return (
        <div>
            <Header source={source} setSource={setSource} isLoading={isLoading} type={'sources'} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <InfiniteContent endpoint={`api/contents?source_id=${props.match.params.id}`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Source)
