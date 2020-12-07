import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom'
import ArticleData from '../../data/Dummy/index'
import Title from '../Common/Title'
import Source from '../Common/Source'
import './style.css'

function Article(props) {

    const [id] = useState(props.match.params.id)
    const [articles, setArticles] = useState({
        id: '',
        url_image: '',
        content_image: '',
        domain_source: '',
        title: '',
        content: '',
        writed_at : ''
    })

    useEffect(() => {
        const result = ArticleData.filter(result => result.id == id)
        setArticles(result[0])
    }, [id])

    return (
        <div>
            <Title title={articles.title} />

            <div className="mt-5">
                <div className="row">
                    <>
                        <div className="col-lg-3 px-5" id="sidelist-wrapper">
                            <div className="sticky-top sidelist mb-5">
                                <div className="d-flex justify-content-center align-items-center flex-column" id="header-box">
                                    <Source data={articles}/>
                                    <hr/>
                                    <h6>icon 1</h6>
                                    <h6>icon 2</h6>
                                    <h6>icon 3</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 bg-dark">
                            <h1>sadsdasda</h1>
                            <h1>sadsdasda</h1>
                            <h1>sadsdasda</h1>
                            <h1>sadsdasda</h1>
                            <h1>sadsdasda</h1>
                            <h1>sadsdasda</h1>
                            <h1>sadsdasda</h1>
                            <h1>sadsdasda</h1>
                            <h1>sadsdasda</h1>
                        </div>
                    </>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Article)
