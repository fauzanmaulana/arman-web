import React from 'react'
import { withRouter } from 'react-router-dom'

// component
import Jumbotron from './Jumbotron/index'
import Explore from './Explore'

function Home(props) {
    return (
        <>
            <Jumbotron {...props} />
            <Explore />
        </>
    )
}

export default withRouter(Home)
