import React from 'react'
import { Link } from 'react-router-dom'

function Source({item}) {
    return (
        <div id="wrapper-source" className="d-flex">
            {item.map((data, i) => (
                <Link to={`/source/${data.id}`} key={i}>
                    <div className="source text-center mr-3">
                        <img src={data.url_image} alt="profile" width="40" className="rounded-circle mb-1" />
                        <h6>{data.domain_source}</h6>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Source
