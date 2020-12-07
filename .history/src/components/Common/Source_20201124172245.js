import React from 'react'

function Source({data}) {
    return (
        <h6>
            <span className="mr-3">
                <img src={data.url_image} alt="profile" width="30" className="rounded-circle" />
            </span>
            {data.domain_source}
        </h6>
    )
}

export default Source
