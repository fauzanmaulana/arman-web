import React from 'react'
import Item from './Item'

function BookmarkList({item}) {

    return (
        <div className="mt-4">
            {item.map((data, i) => (
                <Item data={data} i={i} key={i} />
            ))}
        </div>
    )
}

export default BookmarkList
