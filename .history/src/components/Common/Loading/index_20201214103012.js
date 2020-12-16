import React from 'react'
import Skeleton from 'react-loading-skeleton'

export const rowCol3 = (data) => {
    return (
        <div>
            {data.length < 1 && <>
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
            </>}
        </div>
    )
}
