let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMTkwNDQ4OCwianRpIjoiY2FmYjUxOGQtNThkNi00ZWFjLWEwMjUtM2U2ZWY5YTlkZTY0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Ik1pZ3VlbCIsIm5iZiI6MTcwMTkwNDQ4OCwiZXhwIjoxNzMzNDQwNDg4fQ.rxx71gi2xtY_lFl_-hF6TYb9QGzgN74BhDnlzJRNHtA,"
let userId = localStorage.getItem('uuid')

export const serverCalls = {

    getShop: async () => {
        //api call consist of 1-4 things.
        //1.) URL (required)
        //2.) Methods (optional it will default to GET)
        //3.) headers (optionals but usually there)
        //4.)body (optional usually only on a POST and sometimes DELETE)
        const response = await fetch(`https://better-dayshw.onrender.com/api/shop`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            }
        
        });

        if(!response.ok) {
            throw new Error('Failed to fecth data'), response.status
        }

        return await response.json()
    },

    getOrder: async () => {
        //api call consist of 1-4 things.
        //1.) URL (required)
        //2.) Methods (optional it will default to GET)
        //3.) headers (optionals but usually there)
        //4.)body (optional usually only on a POST and sometimes DELETE)
        const response = await fetch(`https://better-dayshw.onrender.com/api/order/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            }
        
        });

        if(!response.ok) {
            throw new Error('Failed to fecth data'), response.status
        }

        return await response.json()
    },

    createOrder: async (data:any) => { //have to come back to change any
        //api call consist of 1-4 things.
        //1.) URL (required)
        //2.) Methods (optional it will default to GET)
        //3.) headers (optionals but usually there)
        //4.)body (optional usually only on a POST and sometimes DELETE)
        const response = await fetch(`https://better-dayshw.onrender.com/api/order/create/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify(data) //sending a string of our dictionary to our server
        
        });

        if(!response.ok) {
            throw new Error('Failed to create data'), response.status
        }

        return await response.json()
    },
    updateData: async (id: string, data:any) => { //change this from any
        //api call consist of 1-4 things.
        //1.) URL (required)
        //2.) Methods (optional it will default to GET)
        //3.) headers (optionals but usually there)
        //4.)body (optional usually only on a POST and sometimes DELETE)
        const response = await fetch(`https://better-dayshw.onrender.com/api/order/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(data)
        
        });

        if(!response.ok) {
            throw new Error('Failed to update data'), response.status
        }

        return await response.json()
    },
    deleteOrder: async (orderId:string, data:any) => {
        //api call consist of 1-4 things.
        //1.) URL (required)
        //2.) Methods (optional it will default to GET)
        //3.) headers (optionals but usually there)
        //4.)body (optional usually only on a POST and sometimes DELETE)
        const response = await fetch(`https://better-dayshw.onrender.com/api/order/delete/${orderId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
            body:JSON.stringify(data)
        
        });

        if(!response.ok) {
            throw new Error('Failed to delete data'), response.status
        }

        return await response.json()
    }
}
