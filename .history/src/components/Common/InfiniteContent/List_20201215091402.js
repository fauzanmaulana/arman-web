import React, { useEffect, useState } from 'react'
import Item from './Item'
import {LoadingList} from '../../Common/Loading'
import InfiniteScroll from 'react-infinite-scroller'


function List() {

    const [content, setContent] = useState([])
    const [hasMoreItems, setMoreItems] = useState(true)
    const [nextHref, setNextHref] = useState(null)
    let page = 1
    // const [page, setPage] = useState(1)

    const loadContent = async () => {
        let url = `https://app.arman.id/api/contents?page=${page}`
        if(nextHref){
            url = nextHref
        }
        const response = await fetch(url, {
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            })
        })
        const result = await response.json()

        if(result.success){
            setContent(current => {
                return([...current, ...result.data])
            })
            setNextHref(`https://app.arman.id/api/contents?page=${page}`)
            setMoreItems(true)
            page = page + 1
        }else{
            setNextHref(null)
            setContent(current => {
                return([...current])
            })
            setMoreItems(false)
        }
    }

    return (
        <>
            <LoadingList data={content} count={5} />
            <InfiniteScroll
                pageStart={1}
                loadMore={() => loadContent()}
                hasMore={hasMoreItems}
            >
                <Item data={content}/>
            </InfiniteScroll>
        </>
    )
}

export default List
