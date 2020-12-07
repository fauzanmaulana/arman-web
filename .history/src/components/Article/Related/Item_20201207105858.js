import React from 'react'
import Source from '../../Common/Source'

function Item({item}) {
    return (
        <div className="related-article">
            <img src={item.content_image} className="img-fluid" alt="article"/>
            <Link to={`/article/${item.id}`}>
                <h3 className="my-3">{item.title}</h3>
            </Link>
            <p>{item.content.substr(0, 100)}..</p>
            <div className="row">
                <div className="col">
                    <Source data={item}/>
                </div>
                <div className="col text-right">
                    icon
                </div>
            </div>
        </div>
    )
}

export default Item
