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
    const [liked, setLiked] = useState(false)

    const getDetailContent = async (id) => {
        const response = await fetch(`${window.baseUrl}/api/contents/${id}`,{
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            })
        })
        const result = await response.json()
        console.log(result)
        setArticles(result.data)
        setLiked(result.data.liked)
    }

    const likeUnlikeArticle = async (id, bool) => {
        switch (id) {
            case 'like-btn':
                if(bool){
                    setLiked(bool)
                    const response = await fetch(`${window.baseUrl}/api/contents/${props.match.params.id}/like`, {
                        method: 'post',
                        headers: new Headers({
                            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                        })
                    })
                    const result = await response.json()
                    console.log(result)
                }else{
                    setLiked(bool)
                    const response = await fetch(`${window.baseUrl}/api/contents/${props.match.params.id}/unlike`, {
                        method: 'post',
                        headers: new Headers({
                            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                        })
                    })
                    const result = await response.json()
                    console.log(result)
                }
                break;
        
            case 'bookmark-btn':
                console.log('bookmark code!')
                break;
        }
    }

    useEffect(() => {
        getDetailContent(props.match.params.id)

        document.querySelector('#header-box').childNodes.forEach(item => {
            item.addEventListener('click', e => {
                if(e.target.classList.contains('fa-liked')){
                    likeUnlikeArticle(e.target.id, !e.target.classList.contains('fa-liked'))
                    e.target.classList.remove('fa-liked')
                }else{
                    likeUnlikeArticle(e.target.id, !e.target.classList.contains('fa-liked'))
                    e.target.classList.add('fa-liked')
                }
            })
        })
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
                                    <i className={`fa fa-heart fa-2x my-3 ${liked && 'fa-liked'}`} id="like-btn"/>
                                    <i className="fa fa-bookmark fa-2x" id="bookmark-btn"/>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-center align-items-center flex-column" id="header-box">
                                    <i className="fa fa-share-alt fa-2x"/>
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
