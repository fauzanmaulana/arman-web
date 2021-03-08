import React, {useContext} from 'react'
import Title from '../Common/Title'
import InfiniteContent from '../Common/InfiniteContent/List'

function Bookmark() {

    return (
        <div>
            <Title title={'Bookmarked Article'} />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-9">
                        <InfiniteContent endpoint="api/contents/bookmarks" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bookmark
