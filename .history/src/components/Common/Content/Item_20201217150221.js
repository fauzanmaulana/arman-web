import React from 'react'
import Source from '../../Common/Source'
import {Link} from 'react-router-dom'
import NoThumbnail from '../../../image/no_thumbnail.jpeg'

function Item({data, i}) {

    // const toogleBookmark = e => {
    //     if(!e.target.classList.contains('bookmarked')){
    //         e.target.parentElement.classList.add('fadeIn')
    //         e.target.classList.add('bookmarked')
    //     }else{
    //         e.target.parentElement.classList.remove('fadeIn')
    //         e.target.classList.remove('bookmarked')
    //     }
    // }

    return (
        <div id="content" key={i} className="mb-5">
            <Source data={data}/>
            <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-4">
                    <Link to={`/article/${data.id}`}>
                    <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                    </Link>
                    <div dangerouslySetInnerHTML={{ __html: data.description }} />
                    <div className="footer-trending-card d-flex justify-content-between">
                        <p className="mb-0"><span>{new Date(data.content_date).toLocaleDateString('en-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span></p>
                        <p className="mb-0 wow">
                            {/* <i className="fa fa-bookmark fa-2x" id={data.id} onClick={e => toogleBookmark(e)} /> */}
                            icon
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="wrapper-thumbnail">
                        <img src={data.thumbnail || NoThumbnail} alt="article-thumbnail" className="rounded" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
