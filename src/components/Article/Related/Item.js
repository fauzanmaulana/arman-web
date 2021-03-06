import React from 'react'
import Source from '../../Common/Source'
import {Link} from 'react-router-dom'
import NoThumbnail from '../../../image/no_thumbnail.jpeg'

function Item({item}) {
    return (
        <div className="related-article">
            <img src={item.thumbnail || NoThumbnail} className="img-fluid" alt="article"/>
            <Link to={`/article/${item.id}`}>
                <h3 className="my-3" dangerouslySetInnerHTML={{ __html: item.title }} />
            </Link>
            <div dangerouslySetInnerHTML={{ __html: item.description }} />
            <div className="row">
                <div className="col">
                    <Source data={item}/>
                </div>
            </div>
        </div>
    )
}

export default Item
