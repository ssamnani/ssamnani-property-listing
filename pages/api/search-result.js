export default async (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    const data = await import('../../data/search-results-page.json')
    res.end(JSON.stringify(data))
}
