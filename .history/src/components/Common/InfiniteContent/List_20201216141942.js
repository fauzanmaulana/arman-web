import React, { useEffect, useState } from 'react'
import Item from './Item'
import {LoadingList} from '../../Common/Loading'
import InfiniteScroll from 'react-infinite-scroller'


function List() {

    const [content, setContent] = useState([])
    const [hasMoreItems, setMoreItems] = useState(true)
    const [page, setPage] = useState(0)

    const loadContent = async (page) => {
        console.log(page)
        // const response = await fetch(`${window.baseUrl}/api/contents?page=${page}`)
        // const result = await response.json()
        // if(result.success){
        //     setContent(current => {
        //         return([...current, result.data])
        //     })
        // }
    }

    useEffect(() => {
        console.log(page)
        loadContent(page)
    }, [page])

    return (
        <>
            {/* <LoadingList/> */}
            <Item data={content}/>
            <button>load more</button>
        </>
    )
}

export default List
