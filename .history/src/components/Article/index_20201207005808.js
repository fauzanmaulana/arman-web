import React, {useEffect} from 'react'
import {withRouter} from 'react-router-dom'

function Article(props) {

    useEffect(() => {
        console.log(props)
    })

    return (
        <div>
            <h1>ini detail</h1>
        </div>
    )
}

export default withRouter(Article)
