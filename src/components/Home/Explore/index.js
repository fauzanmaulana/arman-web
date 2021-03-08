import React, {useContext} from 'react'
import { BookmarkContext } from '../../../context/BookmarkContext'
import Trending from './Trending/index'
import Article from './Article'
import './style.css'

function Explore() {

    const {bookmark} = useContext(BookmarkContext)

    return (
        <div>
            <Trending />
            <Article bookmark={bookmark} />
        </div>
    )
}

export default Explore
