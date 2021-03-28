import React from 'react'
import {Link} from 'react-router-dom'

function Source({data, isContent}) {
    return(
        <>
        {
            isContent ?
            <Link to={`/article/${data.id}`}>
                <h6>
                    {data.source_logo && <span className="mr-3">
                        <img src={data.source_logo} alt="profile" width="30" className="rounded-circle" />
                    </span>}
                    {data.source || '...'}
                </h6>
            </Link>
            :
            <h6>
                {data.source_logo && <span className="mr-3">
                    <img src={data.source_logo} alt="profile" width="30" className="rounded-circle" />
                </span>}
                {data.source || '...'}
            </h6>
        }
        </>
    )
}

export default Source
