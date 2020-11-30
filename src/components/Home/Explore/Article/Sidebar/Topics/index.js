import React, { useState } from 'react'
import Source from './Source'
import SourceDummyData from '../../../../../../data/Dummy/index'
import Topic from './Topics'
import './style.css'

function Topics() {

    return (
        <div className="wow fadeIn">
            <Source item={SourceDummyData} />
            <Topic />
        </div>
    )
}

export default Topics
