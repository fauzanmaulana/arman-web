import React from 'react'
import Source from '../../Common/Source'

function Item({item}) {
    return (
        <div className="related-article">
            <img src={item.content_image} className="img-fluid" alt="article"/>
            <h3 className="mt-2">{item.title}</h3>
            <p>{item.content.substr(0, 100)}..</p>
            <div className="row">
                <div className="col-lg-3">
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
