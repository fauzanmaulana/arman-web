import React, {useEffect, useState, useContext} from 'react'
import {withRouter} from 'react-router-dom'
import ArticleData from '../../data/Dummy/index'
import Title from '../Common/Title'
import Source from '../Common/Source'
import Related from './Related/List'
import NoThumbnail from '../../image/no_thumbnail.jpeg'
import BookmarkOutline from '../../image/bookmark-outline.svg'
import BookmarkBold from '../../image/bookmark-bold.svg'
import { BookmarkContext } from '../../context/BookmarkContext'
import './style.css'

function Article(props) {

    const {setBookmark, setBookmarkUpdate} = useContext(BookmarkContext)
    
    const [articles, setArticles] = useState({
        id: '',
        thumbnail: '',
        source: '',
        title: '',
        content: '',
        related_articles: [],
        liked: '',
        origin_url: '',
        content_date: '',
        bookmarked: ''
    })
    const [liked, setLiked] = useState(false)
    const [bookmarked, setBookmarked] = useState(false)
    const [hasFollow, setHasFollow]= useState(false)

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
        setBookmarked(result.data.bookmarked)
        return result.data.source
    }

    const likeUnlikeArticle = async (id, bool) => {
        switch (id) {
            case 'like-btn':
                setLiked(bool)
                if(bool){
                    const response = await fetch(`${window.baseUrl}/api/contents/${props.match.params.id}/like`, {
                        method: 'post',
                        headers: new Headers({
                            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                        })
                    })
                    const result = await response.json()
                    console.log(result)
                }else{
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
                setBookmarked(bool)
                if(bool){
                    const response = await fetch(`${window.baseUrl}/api/contents/${props.match.params.id}/bookmark`, {
                        method: 'post',
                        headers: new Headers({
                            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                        })
                    })
                    const result = await response.json()
                    console.log(result)
                }else{
                    const response = await fetch(`${window.baseUrl}/api/contents/${props.match.params.id}/unbookmark`, {
                        method: 'post',
                        headers: new Headers({
                            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                        })
                    })
                    const result = await response.json()
                    console.log(result)
                }
                break;
        }
    }

    const searchSource = async (source) => {
        const response = await fetch(`${window.baseUrl}/api/contents/explore`,{
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            })
        })
        const result = await response.json()
        const data =  result.data.sources.filter(data => data.name == source)[0]
        setHasFollow(data.has_interest)
        return data
    }

    const followSource = async (type, source_id) => {
        const source = await searchSource(source_id)
        const response = await fetch(`${window.baseUrl}/api/${type}/${source.id}/follow`, {
            method:'post',
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            })
        })
        const result = await response.json()
        console.log(result)
    }

    useEffect(() => {
        getDetailContent(props.match.params.id).then((source) => {
            searchSource(source)
        })

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
                                    {hasFollow ? 
                                        <button className="btn btn-sm btn-block btn-outline-primary" onClick={() => followSource('sources', articles.source)}>
                                            follow
                                        </button>
                                        :
                                        <button className="btn btn-sm btn-block btn-success" disabled={true}>
                                            followed
                                        </button>
                                    }
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-center align-items-center flex-column" id="header-box">
                                    <i className={`fa fa-heart fa-2x my-3 ${liked ? 'fa-liked' : ''}`} id="like-btn"/>
                                    <img src={bookmarked ? BookmarkBold : BookmarkOutline} className={bookmarked ? 'fa-liked' : ''} width="35" id="bookmark-btn"/>
                                </div>
                                <hr/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h1 dangerouslySetInnerHTML={{ __html: articles.title }} />
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
