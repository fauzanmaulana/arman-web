import React, { useEffect, useState } from 'react'
import Item from './Item'
import {LoadingList} from '../../Common/Loading'
import InfiniteScroll from 'react-infinite-scroller'


function List() {

    const [content, setContent] = useState([])
    const [hasMoreItems, setMoreItems] = useState(true)
    const [page, setPage] = useState(1)

    const loadContent = async (page) => {
        const response = await fetch(`${window.baseUrl}/api/contents?page=${page}`, {
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            })
        })
        const result = await response.json()
        if(result.success){
            setContent(result.data)
        }
        if(page > 1){
            setContent(current => {
                return([...current, ...result.data])
            })
        }
    }

    useEffect(() => {
        loadContent(page)
    }, [page])

    return (
        <>
            {/* <LoadingList/> */}
            <Item data={content}/>
            <button onClick={() => setPage(page+1)}>load more</button>
        </>
    )
}

export default List
