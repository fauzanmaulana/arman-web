import React, { useEffect, useState } from 'react'
import Item from './Item'

function BookmarkList() {

    const [data, setData] = useState([])
    const [nextHref, setNextHref] = useState('')
    const [hasMoreItems, setHasMoreItems] = useState('')

    const loadContent = async () => {
        let page = 1
        let url = `${window.baseUrl}/api/contents?page=${page}`
        nextHref && (url = nextHref)
        const response = await fetch(url, {
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            })
        })
        const result = await response.json()
    }

    useEffect(() => {
        
    }, [])

    return (
        <div className="mt-4">
            <InfiniteScroll
                pageStart={0}
                loadMore={loadContent}
                hasMore={true || false}
                loader={<div className="loader" key={0}>Loading ...</div>}
            >
                <Item data={data} />
            </InfiniteScroll>
        </div>
    )
}

export default BookmarkList
