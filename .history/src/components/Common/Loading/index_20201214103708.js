import React from 'react'
import Skeleton from 'react-loading-skeleton'

export const RowCol3 = ({data}) => {
    return (
        <>
            {data.length <= 0 && <>
                <div className="row">
                    <div className="col mb-3">
                        <Skeleton width={350} height={200} />
                    </div>
                    <div className="col mb-3">
                        <Skeleton width={350} height={200} />
                    </div>
                    <div className="col mb-3">
                        <Skeleton width={350} height={200} />
                    </div>
                    <div className="col mb-3">
                        <Skeleton width={350} height={200} />
                    </div>
                    <div className="col mb-3">
                        <Skeleton width={350} height={200} />
                    </div>
                    <div className="col mb-3">
                        <Skeleton width={350} height={200} />
                    </div>
                </div>
            </>}
        </>
    )
}
