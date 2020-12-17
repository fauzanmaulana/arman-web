import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import Title from '../Common/Title'
import Item from '../Common/InfiniteContent/Item'
import { LoadingList } from '../Common/Loading'
import NoResult from '../../image/no_result.png'

function Search(props) {

    const [page, setPage] = useState(1)
    const [content, setContent] = useState([])
    const [hasMoreItems, setMoreItems] = useState(false)
    const [searchMode, setSearchMode] = useState(false)

    const getSearchResult = async (page) => {
        setMoreItems(true)
        const response = await fetch(`${window.baseUrl}/api/contents/search?keyword=${props.location.state.keyword}&page=${page}`, {
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            })
        })
        const result = await response.json()
        if(result.success){
            if(page > 1){
                setContent(current => {
                    return([...current, ...result.data])
                })
            }else{
                setContent(result.data)
            }
            setMoreItems(false)
        }
    }

    useEffect(() => {
        if(props.location.state){
            getSearchResult(page)
        }
    }, [page, props])

    return (
        <div>
            <Title title={`Result for ${props.location.state.keyword}`} />

            <div className="container">
                <div className="row mt-5">
                    <LoadingList data={hasMoreItems} count={15} />
                    {!hasMoreItems && <div className="col-lg-9">
                        {content.length > 0 ? <>
                            <Item data={content} />
                            <button onClick={() => setPage(page+1)} className="btn btn-primary my-3" disabled={hasMoreItems}>{!hasMoreItems ? 'load more' : 'wait..'}</button>
                        </> : 
                            <div className="mx-auto text-center">
                                <img src={NoResult} alt="no result" />
                                <h2 className="mb-5">article {props.location.state.keyword} not found</h2>
                            </div>
                        }
                    </div>}
                </div>
            </div>
            
        </div>
    )
}

export default withRouter(Search)
