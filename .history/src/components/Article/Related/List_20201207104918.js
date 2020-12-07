import React from 'react'
import Item from './Item'

function index({data}) {
    return (
        <div className="row">
            {data.map((item, i) => (
                <div className="col" key={i}>
                    <Item item={item} />
                </div>
            ))}
        </div>
    )
}

export default index