import React, {useEffect, useState} from 'react'
import DummyNewsData from '../../../data/News'
import Trending from './Trending/index'
import Today from './Today'
import './style.css'

function Explore() {

    const [news, setNews] = useState([])

    useEffect(() => {
        setNews(DummyNewsData)
    }, [])

    return (
        <div>
            <Trending news={news} />
            <Today news={news} />
        </div>
    )
}

export default Explore
