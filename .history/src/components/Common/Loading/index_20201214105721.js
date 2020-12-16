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
        {data.length <= 0 && 
            <>
                <div className="row">
                    <div className="col">
                        <Skeleton circle={true} width={50} height={50} />
                    </div>
                    <div className="col">
                        <Skeleton circle={true} width={50} height={50} />
                    </div>
                    <div className="col">
                        <Skeleton circle={true} width={50} height={50} />
                    </div>
                    <div className="col">
                        <Skeleton circle={true} width={50} height={50} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Skeleton circle={true} width={100} height={50} />
                    </div>
                    <div className="col">
                        <Skeleton circle={true} width={100} height={50} />
                    </div>
                    <div className="col">
                        <Skeleton circle={true} width={100} height={50} />
                    </div>
                    <div className="col">
                        <Skeleton circle={true} width={100} height={50} />
                    </div>
                </div>
            </>
        }
        </>
    )
}
