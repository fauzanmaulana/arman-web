import React from 'react'
import {Link} from 'react-router-dom'

function Source({data}) {
    return (
        <Link to={`/source/${data.id}`}>
            <h6>
                <span className="mr-3">
                    <img src={data.source_logo} alt="profile" width="30" className="rounded-circle" />
                </span>
                {data.source}
            </h6>
        </Link>
    )
}

export default Source
