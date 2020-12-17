import React from 'react'
import { withRouter } from 'react-router-dom'

function Main(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default withRouter(Main)
