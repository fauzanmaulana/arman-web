import React, { useEffect, useState } from 'react'
import Item from './Item'
import {LoadingList} from '../../Common/Loading'
import InfiniteScroll from 'react-infinite-scroller'


function List() {

    const [content, setContent] = useState([])
    const [hasMoreItems, setMoreItems] = useState(true)
    const [page, setPage] = useState(1)
    const [noData, setNoData] = useState(false);
    
    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight / (window.innerHeight / 4)) {
            console.log('dfsfdasfdsaadfsdfsasdfa')
            console.log('dfsfdasfdsaadfsdfsasdfa')
            console.log('dfsfdasfdsaadfsdfsasdfa')
            console.log('dfsfdasfdsaadfsdfsasdfa')
            console.log('dfsfdasfdsaadfsdfsasdfa')
            console.log('dfsfdasfdsaadfsdfsasdfa')
            console.log('dfsfdasfdsaadfsdfsasdfa')
            console.log('dfsfdasfdsaadfsdfsasdfa')
            console.log('dfsfdasfdsaadfsdfsasdfa')
            console.log('dfsfdasfdsaadfsdfsasdfa')
            console.log('dfsfdasfdsaadfsdfsasdfa')
            console.log('dfsfdasfdsaadfsdfsasdfa')
            console.log('dfsfdasfdsaadfsdfsasdfa')
            console.log('dfsfdasfdsaadfsdfsasdfa')
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
