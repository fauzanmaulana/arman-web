import React from 'react'
import Source from './Source'
import Topic from './Topics'
import './style.css'

function Topics({sources, topics}) {

    return (
        <div className="wow fadeIn">
            <Source item={sources} isContent={false} />
            <Topic item={topics} />
        </div>
    )
}

export default Topics
