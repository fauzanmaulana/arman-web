import React, {createContext, useState, useEffect} from 'react'
import DummyDataBookmark from '../data/Dummy/index'

export const BookmarkContext = createContext()

export const BookmarkProvider = (props) => {

    const [bookmark, setBookmark] = useState([])
    const [bookmarkUpdate, setBookmarkUpdate] = useState(false)
    
    const getBookmark = async () => {
        setBookmarkUpdate(false)
        const response = await fetch(`${window.baseUrl}/api/contents/bookmarks`, {
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            })
        })
        const result = await response.json()
        setBookmark(result.data)
    }

    useEffect(() => {
        getBookmark()
    }, [bookmarkUpdate && bookmark])

    return(
        <BookmarkContext.Provider value={{bookmark, setBookmark, setBookmarkUpdate}}>
            {props.children}
        </BookmarkContext.Provider>
    )
}
