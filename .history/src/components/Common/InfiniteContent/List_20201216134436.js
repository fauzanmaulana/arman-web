import React, { useEffect, useState } from 'react'
import Item from './Item'
import {LoadingList} from '../../Common/Loading'
import InfiniteScroll from 'react-infinite-scroller'


function List() {

    const [content, setContent] = useState([])
    const [hasMoreItems, setMoreItems] = useState(true)
    const [page, setPage] = useState(1)
    const [noData, setNoData] = useState(false);
    const windowHeight = Math.round((document.documentElement.offsetHeight * 80) / 100)

    window.onscroll = () => {
        console.log(window.innerHeight + document.documentElement.scrollTop)
        if (window.innerHeight + document.documentElement.scrollTop === windowHeight) {
            console.log('loaded content')
        }
    }

    return (
        <>
            {/* <LoadingList/> */}
            {/* <Item data={content}/> */}
            {/* {isInfinite && <InfiniteScroll
                pageStart={2}
                loadMore={() => loadContent()}
                hasMore={hasMoreItems}
            >
                <Item data={content}/>
            </InfiniteScroll>} */}
        </>
    )
}

export default List
