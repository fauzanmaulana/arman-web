import React, {createContext, useState, useEffect} from 'react'
import DummyDataBookmark from '../data/Dummy/index'

export const BookmarkContext = createContext()

export const BookmarkProvider = (props) => {

    const [bookmark, setBookmark] = useState([])

    useEffect(() => {
        setBookmark(DummyDataBookmark)
    }, [])

    return(
        <BookmarkContext.Provider value={bookmark}>
            {props.children}
        </BookmarkContext.Provider>
    )
}
