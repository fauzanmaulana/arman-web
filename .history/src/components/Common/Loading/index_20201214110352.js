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
                <div className="row mb-3">
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
                    <div className="col-lg-4 mb-3">
                        <Skeleton style={{borderRadius:'100px'}} height={32} />
                    </div>
                    <div className="col-lg-4 mb-3">
                        <Skeleton style={{borderRadius:'100px'}} height={32} />
                    </div>
                    <div className="col-lg-4 mb-3">
                        <Skeleton style={{borderRadius:'100px'}} height={32} />
                    </div>
                    <div className="col-lg-4 mb-3">
                        <Skeleton style={{borderRadius:'100px'}} height={32} />
                    </div>
                    <div className="col-lg-4 mb-3">
                        <Skeleton style={{borderRadius:'100px'}} height={32} />
                    </div>
                    <div className="col-lg-4 mb-3">
                        <Skeleton style={{borderRadius:'100px'}} height={32} />
                    </div>
                    <div className="col-lg-4 mb-3">
                        <Skeleton style={{borderRadius:'100px'}} height={32} />
                    </div>
                    <div className="col-lg-4 mb-3">
                        <Skeleton style={{borderRadius:'100px'}} height={32} />
                    </div>
                    <div className="col-lg-4 mb-3">
                        <Skeleton style={{borderRadius:'100px'}} height={32} />
                    </div>
                    <div className="col-lg-4 mb-3">
                        <Skeleton style={{borderRadius:'100px'}} height={32} />
                    </div>
                    <div className="col-lg-4 mb-3">
                        <Skeleton style={{borderRadius:'100px'}} height={32} />
                    </div>
                </div>
            </>
        }
        </>
    )
}
