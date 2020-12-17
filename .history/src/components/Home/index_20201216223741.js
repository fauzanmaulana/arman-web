import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'

// component
import Jumbotron from './Jumbotron/index'
import Explore from './Explore'

function Home(props) {
    
    const [siswa, setSiswa] = useState([])

    const getSiswa = async () => {
        console.log('sadsadsaddsasda')
        // const response = await fetch('http://localhost:8000/api/siswa')
        // const result = await response.json()
        // console.log(result)
    }

    useEffect(() => {
        getSiswa()
    }, [])

    return (
        <>
            <Jumbotron {...props} />
            <Explore />
        </>
    )
}

export default withRouter(Home)
