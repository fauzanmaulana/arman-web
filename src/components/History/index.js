import React, { useState, useEffect } from 'react'
import Title from '../Common/Title'
import ContentList from '../Common/Content/List'
import HistoryDummyData from '../../data/Dummy/index'

function History() {

    const [history, setHistory] = useState([])

    useEffect(() => {
        setHistory(HistoryDummyData)
    }, [])

    return (
        <div>
            <Title title={'History'} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <ContentList item={history} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History
