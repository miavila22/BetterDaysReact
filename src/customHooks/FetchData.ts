import * as _React from 'react'
import { useState, useEffect } from 'react'

//internal imports
import { serverCalls } from '../api'

//We are creating a custom hook to make API calls every time we go to the Shop Page 

//creating our interfaces for our shop data and return of our hook

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


//create our custom hook that gets called automatically when we go to our Shop
export const useGetShop = () : GetShopDataProps => {
    //setting up some hooks
    const [ shopData, setShopData ] = useState<ShopProps[]>([])


    const handleDataFetch = async () => {
        const result = await serverCalls.getShop() //making the API call from our serverCall dict/object

        setShopData(result)
    }

    //useEffect essentailly is an event listener listening for changes to varaibles
    //takes 2 arguments. 1 is the function to run. 2nd is the variable we are watching in a []
    useEffect(() => {
        handleDataFetch()
    }, []) //[] inside list is variable we are watching/listening to for change
    return { shopData, getData: handleDataFetch }
}

interface GetOrderDataProps {
    orderData: ShopProps []
    getData: () => void
}



export const useGetOrder = (): GetOrderDataProps => {
    // setup some hooks
    const [ orderData, setShopData ] = useState<ShopProps[]>([])


    const handleDataFetch = async () => {
        const result = await serverCalls.getOrder() //making the api call from our serverCall dictionary/object

        setShopData(result)
    }

    // useEffect is essentially an event listener listening for changes to variables 
    // takes 2 arguments, 1 is the function to run, the 2nd is the variable we are watching in a []
    useEffect(()=> {
        handleDataFetch()
    }, []) //[] inside list is variable we are watching/listening to for changes 

    return { orderData, getData: handleDataFetch }

}