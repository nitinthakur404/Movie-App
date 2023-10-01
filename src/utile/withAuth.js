import fetch from 'node-fetch'
const withAuth = async ({ endPoint, method }) => {
    // let apiKey = "api_key=4e44d9029b1270a757cddc766a1bcb63"
    let options = {
        method,
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWVhNzBlNDg5ZDMzNWM2ODE4OTc4N2Q1MGY1NjBkNSIsInN1YiI6IjYwZDFmNjg1YTI3NTAyMDAyZmJlN2MwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3e1E7Jw_J1REYXt32yW_eRN4AwNqI-ThDrCVfazEgtU'
        },
    }

    try {
        const FetchRespones = await fetch(`https://api.themoviedb.org/3/${endPoint}`, options)
        const data = await FetchRespones.json();
        return data
    }
    catch (error) {
        console.warn(error)
    }


}



export default withAuth 