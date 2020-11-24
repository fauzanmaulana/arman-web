import React from 'react'

// image
import playstore from '../../image/playstore.png'

// component
import Jumbotron from './Jumbotron'
import Explore from './Explore'

function Home() {
    return (
        <>
            <Jumbotron playstore={playstore} />
            <Explore />
        </>
    )
}

export default Home
