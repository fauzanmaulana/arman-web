import React from 'react'
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
