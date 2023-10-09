import fetch from 'node-fetch'
const withAuth = async ({ endPoint, method }) => {
    console.log(process.env.REACT_APP_AUTH_KEY)
    let options = {
        method,
        headers: {
            accept: 'application/json',
            Authorization: process.env.REACT_APP_AUTH_KEY
        },
    }

    try {
        const FetchRespones = await fetch(`${process.env.REACT_APP_BASE_URL}${endPoint}`, options)
        const data = await FetchRespones.json();
        return data
    }
    catch (error) {
        console.warn(error)
    }


}



export default withAuth 