import React from 'react'
import Skeleton from 'react-loading-skeleton'

export const RowCol3 = (data) => {
    return (
        <>
            <Skeleton width={350} height={200} />
        </>
        // <div>
        //     {data.length <= 0 && <>
        //         <div className="col mb-3">
        //             <Skeleton width={350} height={200} />
        //         </div>
        //         <div className="col mb-3">
        //             <Skeleton width={350} height={200} />
        //         </div>
        //         <div className="col mb-3">
        //             <Skeleton width={350} height={200} />
        //         </div>
        //         <div className="col mb-3">
        //             <Skeleton width={350} height={200} />
        //         </div>
        //         <div className="col mb-3">
        //             <Skeleton width={350} height={200} />
        //         </div>
        //         <div className="col mb-3">
        //             <Skeleton width={350} height={200} />
        //         </div>
        //     </>}
        // </div>
    )
}
