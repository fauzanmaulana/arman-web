import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom'
import ArticleData from '../../data/Dummy/index'
import Title from '../Common/Title'

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
                        <div className="col-lg-3" id="sidelist-wrapper">
                            <div className="px-5">
                                <div className="sticky-top sidelist mb-5">
                                    <div className="d-flex justify-content-between" id="header-box">
                                        <h5 className="m-0">
                                            <img src={''} alt="bookmarked" className="mr-2" />
                                            Topics &
                                            <span> Source</span>
                                        </h5>

                                        <h6>reading list</h6>
                                    </div>
                                    <hr/>
                                    sdasda
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 bg-dark">
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
