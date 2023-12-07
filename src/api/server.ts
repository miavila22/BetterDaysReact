let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMTkwNDQ4OCwianRpIjoiY2FmYjUxOGQtNThkNi00ZWFjLWEwMjUtM2U2ZWY5YTlkZTY0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Ik1pZ3VlbCIsIm5iZiI6MTcwMTkwNDQ4OCwiZXhwIjoxNzMzNDQwNDg4fQ.rxx71gi2xtY_lFl_-hF6TYb9QGzgN74BhDnlzJRNHtA,"
let userId = localStorage.getItem('uuid')

export const serverCalls = {

    getShop: async () => {
     
        const response = await fetch(`https://better-dayshw.onrender.com//api/shop`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status 
        }

        return await response.json()

    }
}