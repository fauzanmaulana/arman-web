import React from 'react'
import Skeleton from 'react-loading-skeleton'

export const LoadingRowCol3 = ({data, count}) => {
    var rows = [];
    for (var i = 0; i < count; i++) {
        rows.push(
            <div className="col mb-3" key={i}>
                <Skeleton width={350} height={200} />
            </div>
        );
    }
    return (
        <>
            {data.length <= 0 &&
                <div className="row">
                    {rows}
                </div>
            }
        </>
    )
}

export const LoadingSidebarSource = ({data,count}) => {
    var rows = [];
    for (var i = 0; i < count; i++) {
        rows.push(
            <div className="col-lg-4 mb-3" key={i}>
                <Skeleton style={{borderRadius:'100px'}} height={32} />
            </div>
        );
    }
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
                    {rows}
                </div>
            </>
        }
        </>
    )
}

export const LoadingList = ({data}) => {
    return(
        <>
            {data.length <= 0 && <>
                <div className="col-lg-8 mb-3">
                    <Skeleton width={500} height={200} />
                </div>
                <div className="col-lg-8 mb-3">
                    <Skeleton width={500} height={200} />
                </div>
                <div className="col-lg-8 mb-3">
                    <Skeleton width={500} height={200} />
                </div>
                <div className="col-lg-8 mb-3">
                    <Skeleton width={500} height={200} />
                </div>
                <div className="col-lg-8 mb-3">
                    <Skeleton width={500} height={200} />
                </div>
                <div className="col-lg-8 mb-3">
                    <Skeleton width={500} height={200} />
                </div>
                <div className="col-lg-8 mb-3">
                    <Skeleton width={500} height={200} />
                </div>
                <div className="col-lg-8 mb-3">
                    <Skeleton width={500} height={200} />
                </div>
            </>}
        </>
    )
}
