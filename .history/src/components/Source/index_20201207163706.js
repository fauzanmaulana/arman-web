import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom'
import Header from './Header'
import ContentList from '../Common/Content/List'
import SourceDummyData from '../../data/Dummy/index'

function Source(props) {

    const [source, setSource] = useState({})

    const getDetailSource = id => { // lets say it is get detail from endpoint
        SourceDummyData.filter(detail => detail.id === id).map(data => setSource(data))
    }

    useEffect(() => {
        console.log(props.match.params.id)
        // getDetailSource(parseInt(props.match.params.id))
    }, [props])

    return (
        <div>
            <Header source={source.domain_source} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <ContentList item={SourceDummyData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Source)
