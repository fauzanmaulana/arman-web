import React, { useState, useEffect } from 'react'
import Item from './Item'
import DummyTrendingData from '../../../../data/Dummy/index'

function Trending() {

    const [trending, setTrending] = useState([])
    
    useEffect(() => {
        setTrending(DummyTrendingData)
    }, [])

    return (
        <section>
            <div className="container">
                <nav className="pt-5 pb-4">
                    <div>
                        <h5 className="title-explore"><i className="fa fa-bar-chart fa-lg mr-3" /> <span style={{color:'#56B32E'}}>TRENDING</span> ON ARMAN</h5>
                    </div>
                </nav>
                <div className="row">
                    {/* trending data */}
                    <Item data={trending}/>
                </div>
            </div>
            <hr/>
        </section>
    )
}

export default Trending
