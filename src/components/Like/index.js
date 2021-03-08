import React from 'react'
import Title from '../Common/Title'
import InfiniteContent from '../Common/InfiniteContent/List'

function Like() {

    return (
        <div>
            <Title title={'Liked Article'} />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-9">
                        <InfiniteContent endpoint="api/contents/likes" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Like
