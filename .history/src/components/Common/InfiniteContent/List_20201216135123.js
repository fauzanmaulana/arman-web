import React, { useEffect, useState } from 'react'
import Item from './Item'
import {LoadingList} from '../../Common/Loading'
import InfiniteScroll from 'react-infinite-scroller'


function List() {

    const [content, setContent] = useState([])
    const [hasMoreItems, setMoreItems] = useState(true)
    const [page, setPage] = useState(1)
    const [noData, setNoData] = useState(false);
    const windowHeight = Math.round(document.documentElement.scrollTop + (window.innerHeight / 4))

    window.onscroll = () => {
        console.log(document.documentElement.offsetHeight, windowHeight)
        if (windowHeight + document.documentElement.scrollTop == document.documentElement.offsetHeight){
            window.alert('dfsdssadf')
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
