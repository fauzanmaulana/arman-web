import React from 'react'
import Item from './Item'

function index({data}) {
    return (
        <div className="row">
            <div className="col">
                <Item item={data} />
            </div>
        </div>
    )
}

export default index
