import React from "react"
import Page from '../components/Page'

const Home = () => (
    <Page />
)

export async function getStaticProps() {
    // Fetch data from API
    const res = await fetch(`http://localhost:3000/api/search-result`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: {
        initialReduxState: {
            searchResult: data,
        },
    } }
}

export default Home
