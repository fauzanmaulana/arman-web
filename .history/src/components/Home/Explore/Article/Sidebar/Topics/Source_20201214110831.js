import React from 'react'
import { Link } from 'react-router-dom'
import { LoadingSidebarSource } from '../../../../../Common/Loading'

function Source({item}) {
    return (
        <>
        <LoadingSidebarSource data={item} count={15} />
        <div id="wrapper-source" className="d-flex">
            {item.map((data, i) => (
                <Link to={`/source/${data.id}`} key={i}>
                    <div className="source text-center mr-3">
                        {data.has_interest === 1 && <div className='isFollow'></div>}
                        <img src={data.logo} alt="profile" width="40" className="rounded-circle mb-1" />
                        <h6>{data.name}</h6>
                    </div>
                </Link>
            ))}
        </div>
        </>
    )
}

export default Source
