import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom'
import ArticleData from '../../data/Dummy/index'
import Title from '../Common/Title'
import Source from '../Common/Source'
import Related from './Related/List'
import NoThumbnail from '../../image/no_thumbnail.jpeg'
import BookmarkOutline from '../../image/bookmark-outline.svg'
import BookmarkBold from '../../image/bookmark-bold.svg'
import './style.css'

function Article(props) {
    
    const [articles, setArticles] = useState({
        id: '',
        thumbnail: '',
        source: '',
        title: '',
        content: '',
        related_articles: [],
        liked: '',
        origin_url: '',
        content_date: ''
    })

    const getDetailContent = async (id) => {
        const response = await fetch(`${window.baseUrl}/api/contents/${id}`,{
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            })
        })
        const result = await response.json()
        console.log(result)
        setArticles(result.data)
    }

    useEffect(() => {
        getDetailContent(props.match.params.id)
    }, [props])

    return (
        <div>
            <Title title={`Read articles from ${articles.source || '...'}`} />

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
                            <img src={articles.thumbnail || NoThumbnail} className="img-fluid mt-3 mb-4" alt="article"/>
                            <div dangerouslySetInnerHTML={{ __html: articles.content }} />
                            
                            <div className="d-flex justify-content-between mt-5">
                                <a href={`${articles.origin_url}`} style={{color:'#00D363', fontWeight:'bold'}}>baca article asli</a>

                                <span style={{fontWeight: 'bold'}}>{articles.content_date}</span>
                            </div>
                        </div>

                        <div className="col-lg-12 px-5">
                            <hr/>
                            <h3 className="mb-3" style={{fontWeight:'100'}}>Related Article</h3>
                            <Related data={articles.related_articles} />
                        </div>
                    </>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Article)
