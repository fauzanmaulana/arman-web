import React, { useEffect, useState } from 'react'
import Item from './Item'
import {LoadingList} from '../../Common/Loading'
import InfiniteScroll from 'react-infinite-scroller'


function List() {

    const [content, setContent] = useState([])
    const [hasMoreItems, setMoreItems] = useState(true)
    const [nextHref, setNextHref] = useState(null)
    const [page, setPage] = useState(1)
    const [isInfinite, setInfinite] = useState(false)

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
        console.log(result

        if(result.success){
            console.log('ada page lagi')
            setPage(page+1)
            setContent(current => {
                return([...current, ...result.data])
            })
            setNextHref(`https://app.arman.id/api/contents?page=${page}`)
            setMoreItems(true)
            // setInfinite(false)
        }else{
            console.log('gada page lagi')
            setNextHref(null)
            setContent(current => {
                return([...current])
            })
            setMoreItems(false)
        }
        setInfinite(true)
    }

    useEffect(() => {
        loadContent()
    }, [])

    return (
        <>
            {/* <LoadingList/> */}
            {/* <Item data={content}/> */}
            {isInfinite && <InfiniteScroll
                pageStart={2}
                loadMore={() => loadContent()}
                hasMore={hasMoreItems}
            >
                <Item data={content}/>
            </InfiniteScroll>}
        </>
    )
}

export default List
