import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Item from './Item'
import Dummy from '../../../data/Dummy/index'

function List() {
    return (
        <>
        {Dummy.map((item, i) => (
            <Item data={item} i={i} />
        ))}
        </>
    )
}

export default List
