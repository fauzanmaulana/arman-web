import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import Title from '../Common/Title'
import Item from '../Common/InfiniteContent/Item'
import { LoadingList } from '../Common/Loading'
import NoResult from '../../image/no_result.png'

function Search(props) {

    const [content, setContent] = useState([])
    const [hasMoreItems, setMoreItems] = useState(false)

    const getSearchResult = async () => {
        setMoreItems(true)
        const response = await fetch(`${window.baseUrl}/api/contents/search?keyword=${props.location.state.keyword}`, {
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            })
        })
        const result = await response.json()
        if(result.success){
            setContent(result.data)
            setMoreItems(false)
        }
    }

    useEffect(() => {
        if(props.location.state){
            getSearchResult()
        }
    }, [props])

    return (
        <div>
            <Title title={hasMoreItems ? 'loading..' : `Result for ${props.location.state.keyword}`} />

            <div className="container">
                <div className="row mt-5">
                    <LoadingList data={hasMoreItems} count={15} />
                    {!hasMoreItems && <div className="col-lg-9">
                        {content.length > 0 ? <>
                            <Item data={content} />
                        </> : 
                            <div className="mx-auto text-center">
                                <img src={NoResult} alt="no result" />
                                <h2 className="mb-5">artikel {props.location.state.keyword} tidak ditemukan</h2>
                            </div>
                        }
                    </div>}
                </div>
            </div>
            
        </div>
    )
}

export default withRouter(Search)
