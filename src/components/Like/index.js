import React, { useState, useEffect } from 'react'
import Title from '../Common/Title'
import ContentList from '../Common/Content/List'
import LikeDummyData from '../../data/Dummy/index'

function Like() {

    const [like, setLike] = useState([])

    useEffect(() => {
        setLike(LikeDummyData)
    }, [])

    return (
        <div>
            <Title title={'Like'} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <ContentList item={like} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Like
