import React, { useEffect, useState } from 'react'
import Item from './Item'
import {LoadingList} from '../../Common/Loading'
import { data } from 'jquery'


function List({endpoint}) {

    const [content, setContent] = useState([])
    const [hasMoreItems, setMoreItems] = useState(false)
    const [page, setPage] = useState(1)

    const loadContent = async (page) => {
        setMoreItems(true)
        let params = '?'
        if(endpoint.includes('?')){
            params = '&'
        }
        const response = await fetch(`${window.baseUrl}/${endpoint}${params}page=${page}`, {
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            })
        })
        const result = await response.json()

        const uniqueArray = Array.from(new Set(result.data.map(item => item.id))).map(id => {
            return result.data.find(item => item.id === id)
        })

        if(result.success){
            if(page > 1){
                setContent(current => {
                    return([...current, ...uniqueArray])
                })
            }else{
                setContent(uniqueArray)
            }
            setMoreItems(false)
        }
    }

    useEffect(() => {
        loadContent(page)
    }, [page])

    return (
        <>
            <LoadingList data={hasMoreItems} count={15} />
            <Item data={content}/>
            <button onClick={() => setPage(page+1)} className="btn btn-primary mt-1 mb-3" disabled={hasMoreItems}>{!hasMoreItems ? 'load more' : 'wait..'}</button>
        </>
    )
}

export default List
