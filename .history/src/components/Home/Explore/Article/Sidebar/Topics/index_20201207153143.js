import React, { useState } from 'react'
import Source from './Source'
import SourceDummyData from '../../../../../../data/Dummy/index'
import Topic from './Topics'
import './style.css'

function Topics({sources, topics}) {

    return (
        <div className="wow fadeIn">
            <Source item={sources} />
            <Topic item={topics} />
        </div>
    )
}

export default Topics
