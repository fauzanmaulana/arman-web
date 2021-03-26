import React from 'react'

function Header({source, setSource, isLoading, type}) {

    const followSource = async type => {
        const response = await fetch(`${window.baseUrl}/api/${type}/${source.id}/follow`, {
            method:'post',
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            })
        })
        const result = await response.json()
        console.log(result)
        setSource({
            id: source.id,
            source: source.source,
            source_logo: source.source_logo,
            has_interest: 1
        })
    }

    const unfollowSource = async type => {
        const response = await fetch(`${window.baseUrl}/api/${type}/${source.id}/unfollow`, {
            method:'post',
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            })
        })
        const result = await response.json()
        console.log(result)
        setSource({
            id: source.id,
            source: source.source,
            source_logo: source.source_logo,
            has_interest: 0
        })
    }

    return (
        <div id="home" className="slider_area mb-4">
            <div className="single_slider_two d-flex align-items-center slider_bg_1">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-8 d-flex justify-content-between">
                            <h3 className="wow fadeInUp text-white" data-wow-duration="1s" data-wow-delay=".1s">{source.source || 'loading..'}</h3>
                            {!isLoading ? 
                                // <>
                                //     {source.has_interest === 1 ? 
                                //     <button className="btn btn-sm btn-success px-3 py-2" onClick={() => unfollowSource(type)}>unfollow</button> : 
                                //     <button className="btn btn-sm btn-outline-success px-3 py-2" onClick={() => followSource(type)}>follow</button> }
                                // </>
                                <>
                                    {source.has_interest === 1 ? 
                                    <button className="btn btn-sm btn-success px-3 py-2" disabled={true} >followed</button> : 
                                    <button className="btn btn-sm btn-outline-success px-3 py-2" onClick={() => followSource(type)}>follow</button> }
                                </>
                                :
                                <button className="btn btn-sm btn-outline-secondary px-3 py-2" disabled={true}>wait</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
