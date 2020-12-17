import React from 'react'
import { withRouter } from 'react-router-dom'
import Title from '../Common/Title'
import ContentList from '../Common/Content/List'

function Search(props) {

    return (
        <div>
            <Title title={`Result for ${props.location.state.keyword}`} />

            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <ContentList item={props.location.state.result} />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default withRouter(Search)
