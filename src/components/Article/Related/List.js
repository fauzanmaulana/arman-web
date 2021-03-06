import React from 'react'
import Item from './Item'

function index({data}) {
    const related = data.filter(item => item.content_type !== "Header")
    return (
        <div className="row">
            {related.map((item, i) => (
                <div className="col-lg-4 mb-3" key={i}>
                    <Item item={item} />
                </div>
            ))}
        </div>
    )
}

export default index
