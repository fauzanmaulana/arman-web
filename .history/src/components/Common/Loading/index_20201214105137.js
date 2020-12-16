import React from 'react'
import Skeleton from 'react-loading-skeleton'

export const LoadingRowCol3 = ({data}) => {
    return (
        <>
            {data.length <= 0 &&
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
            }
        </>
    )
}

export const LoadingSidebarSource = ({data}) => {
    return(
        <>
        {data.length <= 0 && <div className="row">
            <div className="col">
                <Skeleton circle={true} width={40} height={40} />
            </div>
            <div className="col">
                <Skeleton circle={true} width={40} height={40} />
            </div>
            <div className="col">
                <Skeleton circle={true} width={40} height={40} />
            </div>
            <div className="col">
                <Skeleton circle={true} width={40} height={40} />
            </div>
        </div>}
        </>
    )
}
