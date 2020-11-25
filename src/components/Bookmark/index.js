import React, {useContext} from 'react'
import { BookmarkContext } from '../../context/BookmarkContext'
import Title from '../Common/Title'
import ContentList from '../Common/Content/List'

function Bookmark() {

    const bookmark = useContext(BookmarkContext)

    return (
        <div>
            <Title title={'Bookmark'} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <ContentList item={bookmark} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bookmark
