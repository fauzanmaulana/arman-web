import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom'

function Article(props) {

    const [id] = useState(props.match.params.id)

    useEffect(() => {
        console.log(id)
    }, [id])

    return (
        <div>
            <h1>ini detail</h1>
        </div>
    )
}

export default withRouter(Article)
