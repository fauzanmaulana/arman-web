import React from 'react'
import Source from '../../../../../Common/Source'

function List({item}) {
    return (
        <div>
            {item.map((bookmark, i) => (
                <div key={i}>
                    {i < 3 &&
                        <div className="mb-4">
                            <Source data={bookmark} />
                            <p className="mb-0" style={{fontSize:'11pt'}}>{bookmark.title.substr(0, 30)}..</p>
                            <div className="footer-trending-card">
                                <p className="mb-0" style={{fontSize:'9pt'}}><span>{new Date(bookmark.content_date).toLocaleDateString('en-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span></p>
                            </div>
                        </div>
                    }
                </div>
            ))}
        </div>
    )
}

export default List
