import React, { useEffect } from 'react'
import withAuth from '../utile/withAuth'

function Card() {

    useEffect(() => {
        const Data = withAuth({
            endPoint: "movie/popular",
            options: {
                methods: "get"
            }
        }).then((respones) => {
            console.log(respones)
        })
    }, [])

    return (
        <div> fsfdf</div>
    )
}

export default Card