import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom'
import ArticleData from '../../data/Dummy/index'
import Title from '../Common/Title'
import Source from '../Common/Source'
import ContentList from '../Common/Content/List'
import BookmarkOutline from '../../image/bookmark-outline.svg'
import BookmarkBold from '../../image/bookmark-bold.svg'
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
                            <div className="sticky-top mb-5" id="sidemenu">
                                <div className="px-4 text-center">
                                    <Source data={articles}/>
                                    <button className="btn btn-sm btn-block btn-outline-primary">
                                        follow
                                    </button>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-center align-items-center flex-column" id="header-box">
                                    <i className="fa fa-share-alt fa-2x"/>
                                    <i className="fa fa-heart fa-2x my-3"/>
                                    <i className="fa fa-share-alt fa-2x"/>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-center align-items-center flex-column" id="header-box">
                                    <i className="fa fa-share-alt fa-2x"/>
                                    <i className="fa fa-heart fa-2x my-3"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h1>{articles.title}</h1>
                            <img src={articles.content_image} className="img-fluid mt-3 mb-4" alt="article"/>
                            <p>{articles.content}</p>
                            <p>
                                <a href="#" style={{color:'#00D363', fontWeight:'bold'}}>baca article asli</a>
                            </p>
                        </div>
                        <div className="col-lg-12 px-5">
                            <hr/>
                            <h3 className="mb-3" style={{fontWeight:'100'}}>More From Arman</h3>
                            <div className="row">
                                <div className="col">
                                    <img src={articles.content_image} className="img-fluid" alt="article"/>
                                    <h3 className="mt-2">{articles.title}</h3>
                                    <p>{articles.content.substr(0, 100)}..</p>
                                    <Source item={articles}/>
                                </div>
                                <div className="col">
                                    <img src={articles.content_image} className="img-fluid" alt="article"/>
                                    <h3 className="mt-2">{articles.title}</h3>
                                    <p>{articles.content.substr(0, 100)}..</p>
                                    <Source item={articles}/>
                                </div>
                                <div className="col">
                                    <img src={articles.content_image} className="img-fluid" alt="article"/>
                                    <h3 className="mt-2">{articles.title}</h3>
                                    <p>{articles.content.substr(0, 100)}..</p>
                                    <Source item={articles}/>
                                </div>
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Article)