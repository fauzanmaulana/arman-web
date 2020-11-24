import React from 'react'
import Source from '../../../Common/Source'

function Item({data, i}) {
    return (
        <div className="col-lg-4 mb-4" key={i}>
            <div className="p-3" id="trending-card">
                {/* profile image and from */}
                <Source data={data}/>

                {/* title */}
                <p>{data.title}</p>

                {/* timestamp */}
                <div className="footer-trending-card">
                    <p className="mb-0"><span>{data.writed_at}</span> . 3 min read</p>
                </div>
            </div>
        </div>
    )
}

export default Item
