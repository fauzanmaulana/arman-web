import React, {useEffect} from 'react'
import {withRouter} from 'react-router-dom'

function Article(props) {

    useEffect(() => {
        console.log(props)
    })

    return (
        <div>
            
        </div>
    )
}

export default withRouter(Article)
