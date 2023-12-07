import * as _React from 'react'
import { useState, useEffect } from 'react'

import { serverCalls } from '../api'

export interface ShopProps {
    id: string,
    name: string,
    image: string,
    description: string,
    price: string, 
    prod_id: string,
    quantity: number, 
    order_id?: string
}

interface GetShopDataProps {
    shopData: ShopProps[]
    getData: () => void
}

export const useGetShop = (): GetShopDataProps => {
    // Hooks
    const [ shopData, setShopData ] = useState<ShopProps[]>([])

    const handleDataFetch = async () => {
        const result = await serverCalls.getShop() 

        setShopData(result)
    }

    useEffect(()=> {
        handleDataFetch()
    }, [])  

    return { shopData, getData: handleDataFetch }

}