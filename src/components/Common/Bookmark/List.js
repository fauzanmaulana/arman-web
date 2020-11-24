import React from 'react'
import Item from './Item'

function BookmarkList({item}) {

    const each = item.splice(0,1)

    return (
        <div className="mt-4">
            {each.map((data, i) => (
                <Item data={data} i={i} key={i} />
            ))}
        </div>
    )
}

export default BookmarkList
