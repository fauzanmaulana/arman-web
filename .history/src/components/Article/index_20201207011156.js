import React, {useEffect, useState} from 'react'
import ArticleData from '../../data/Dummy/index'
import {withRouter} from 'react-router-dom'

function Article(props) {

    const [id] = useState(props.match.params.id)
    const [Articles, setArticles] = useState({})

    useEffect(() => {
        const result = ArticleData.filter(result => result.id == id)
        setArticles(result[0])
    }, [id])

    return (
        <div>
            <h1>ini detail</h1>
        </div>
    )
}

export default withRouter(Article)
