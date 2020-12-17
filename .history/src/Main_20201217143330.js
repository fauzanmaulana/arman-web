import React from 'react'
import { withRoute } from 'react-router-dom'

function Main(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default withRoute(Main)
