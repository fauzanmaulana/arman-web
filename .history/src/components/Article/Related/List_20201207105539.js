import React from 'react'
import Item from './Item'

function index({data}) {
    return (
        <div className="row">
            {data.map((item, i) => (
                <div className="col-lg-4 mb-3" key={i}>
                    <Item item={item} />
                </div>
            ))}
        </div>
    )
}

export default index
