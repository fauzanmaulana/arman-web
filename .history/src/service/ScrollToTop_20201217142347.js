import React from 'react'
import { withRouter } from 'react-router-dom'

function ScrollToTop(props) {
    return(
        <>
            {props.children}
        </>
    )
}

export default withRouter(ScrollToTop)
