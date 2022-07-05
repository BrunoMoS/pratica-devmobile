import React from 'react'
import { View } from 'react-native'

import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import List from '@react-native-async-storage/async-storage'

import { useState, useEffect } from 'react'
import uuid from 'react-native-uuid'

import ListForm from './ListForm'

import styles from './ItemEditstyles'

export default function ItemEdit(props) {
    const {getItem, setItem} = useAsyncStorage('@itenssaves:itens')
    const [infoDataNewItem, setInfoDataNewItem] = useState('')
    const [infoAddNewItem, setInfoAddNewItem] = useState('')
    const [oldItem, setOldItem] = useState([])
    
    async function handleFetchData() {
        const response = await getItem()
        const data = response? JSON.parse(response): []
        const newData = []
        for(let i=0; i<data.length; i++) {
            let {id: idItem} = data[i]
            if(idItem === props.route.params) {
                setOldItem(data[i])
            } else {
                newData.push(data[i]) 
            }
        }
        if(newData.length >= 0) {
            await setItem(JSON.stringify(newData))
        } 
    }
      
    useEffect(() => {
        handleFetchData()
    }, [])
    
    async function editPost(newItem) {
        let totalPriceItem
        let price
        let quantity
        if(newItem.price && newItem.quantity) {
            quantity = newItem.quantity.replace(',','.')
            price = newItem.price.replace(',','.')  
            totalPriceItem = price*quantity 
        } else {
            totalPriceItem = newItem.price*newItem.quantity
        }
        newItem.cost = totalPriceItem.toFixed(2) 
        newItem.id = uuid.v4()

        const response = await getItem()
        const previousData = response? JSON.parse(response): []
        const data = [...previousData, newItem]
        await setItem(JSON.stringify(data))  
        setInfoDataNewItem(newItem)
    }

    async function handleFetchDataList(newItem) {
        const response = await List.getItem('@listsaves:itens')
        const data = response? JSON.parse(response): []
        const newData = []
        if(data.length > 0) {
            for(let i=0; i<data.length; i++) {
                let {id: idItem} = data[i]
                if(idItem === props.route.params) {
                    setInfoAddNewItem(newItem)
                } else {
                    newData.push(data[i]) 
                }
            }
            await List.setItem('@listsaves:itens', JSON.stringify(newData)) 
        }
    }

    if(infoDataNewItem) {
        handleFetchDataList(infoDataNewItem)
    }
    
    async function editPostList(newItem) {
        const response = await List.getItem('@listsaves:itens')
        const previousData = response? JSON.parse(response): []
        const data = [...previousData, newItem]
        await List.setItem('@listsaves:itens', JSON.stringify(data))  
        setInfoAddNewItem('')
    }
    
    if(infoAddNewItem) {
        editPostList(infoAddNewItem)
    }

    return (
        <View style={styles.item}>
            <ListForm handlesubmit={editPost} oldItemData={oldItem}/>
        </View>
    )
}