import React from 'react'
import Title from '../Common/Title'
import InfiniteContent from '../Common/InfiniteContent/List'

function History() {

    return (
        <div>
            <Title title={'History'} />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-9">
                        <InfiniteContent endpoint="api/contents/histories" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History
