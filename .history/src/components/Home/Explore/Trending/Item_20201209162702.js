import React from 'react'
import Source from '../../../Common/Source'

function Item({data}) {
    return (
        <>
            {data.map((item, i) => (
                <div className="col-lg-4" key={i}>
                    {i < 6 && 
                        <div className="p-3" id="trending-card" key={i}>
                            {/* profile image and from */}
                            <Source data={item}/>

                            {/* title */}
                            <p>{item.title}</p>

                            {/* timestamp */}
                            <div className="footer-trending-card">
                                <p className="mb-0"><span>{new Date(data.content_date).toLocaleDateString('en-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span> . 3 min read</p>
                            </div>
                        </div>
                    }
                </div>
            ))}
        </>
    )
}

export default Item