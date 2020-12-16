import React, { useState } from 'react'
import Source from './Source'
import SourceDummyData from '../../../../../../data/Dummy/index'
import Topic from './Topics'
import './style.css'

function Topics({all}) {

    return (
        <div className="wow fadeIn">
            <Source item={SourceDummyData} />
            <Topic all={all} />
        </div>
    )
}

export default Topics
