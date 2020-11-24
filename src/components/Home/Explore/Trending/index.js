import React from 'react'
import Item from './Item'

function Trending(props) {

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
                    {props.news.map((data, i) => (
                        <Item data={data} key={i} />
                    ))}
                </div>
            </div>
            <hr/>
        </section>
    )
}

export default Trending
