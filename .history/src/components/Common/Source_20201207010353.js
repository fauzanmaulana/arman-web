import React from 'react'
import {Link} from 'react-router-dom'

function Source({data}) {
    return (
        <Link to={`/source/${data.id}`}>
            <h6>
                <span className="mr-3">
                    <img src={data.url_image} alt="profile" width="30" className="rounded-circle" />
                </span>
                {data.domain_source}
            </h6>
        </Link>
    )
}

export default Source
