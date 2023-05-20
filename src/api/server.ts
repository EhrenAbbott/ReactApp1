let token = 'acd3c109964eb9a138155a77709981764b8d695c90fce99e'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://car-inventory-e2f4.onrender.com/api/cars`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://car-inventory-e2f4.onrender.com/api/cars`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://car-inventory-e2f4.onrender.com/api/cars/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://car-inventory-e2f4.onrender.com/api/cars/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}

// the headers were different in the GitHub but in the video he pulled up another GitHub file that 
// had the second header as x-access-token, but then he changes it to how it is in the github file?

// changed back to x-access-token the entrys displayed on the site BUT just the ID's an not the other fields