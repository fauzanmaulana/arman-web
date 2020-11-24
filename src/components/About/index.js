import React from 'react'

// image
import playstore from '../../image/playstore.png'
import sumber from '../../image/sumber.png'
import topik from '../../image/topik.png'

// component
import Jumbotron from './Jumbotron'
import Topic from './Topic'
import Source from './Source'
import Features from './Features'
import Testimony from './Testimony'

function About() {
    return (
        <>
            <Jumbotron playstore={playstore} />
            <Topic topik={topik}/>
            <Source sumber={sumber}/>
            <Features/>
            <Testimony/>
        </>
    )
}

export default About
