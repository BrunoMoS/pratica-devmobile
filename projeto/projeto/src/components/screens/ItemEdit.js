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
    const [infoData, setInfoData] = useState('')
    const [infoDataList, setInfoDataList] = useState('')
    const [shopp, setShopp] = useState([])
    
    async function handleFetchData() {
        const response = await getItem()
        const data = response? JSON.parse(response): []
        const info = []
        for(let i=0; i<data.length; i++) {
            let {id: id} = data[i]
            if(id === props.route.params) {
                setShopp(data[i])
            } else {
                info.push(data[i]) 
            }
        }
        if(info.length >= 0) {
            await setItem(JSON.stringify(info))
        } 
    }
      
    useEffect(() => {
        handleFetchData()
    }, [])
    
    async function editPost(shopp) {
        let priceShopp
        let price
        let quantity
        if(shopp.price && shopp.quantity) {
            quantity = shopp.quantity.replace(',','.')
            price = shopp.price.replace(',','.')  
            priceShopp = price*quantity 
        } else {
            priceShopp = shopp.price*shopp.quantity
        }
        shopp.cost = priceShopp.toFixed(2) 
        shopp.id = uuid.v4()

        const response = await getItem()
        const previousData = response? JSON.parse(response): []
        const data = [...previousData, shopp]
        await setItem(JSON.stringify(data))  
        setInfoData(shopp)
    }

    async function handleFetchDataList(shopp) {
        const response = await List.getItem('@listsaves:itens')
        const data = response? JSON.parse(response): []
        const info = []
        if(data.length > 0) {
            for(let i=0; i<data.length; i++) {
                let {id: id} = data[i]
                if(id === props.route.params) {
                    setInfoDataList(shopp)
                } else {
                    info.push(data[i]) 
                }
            }
            await List.setItem('@listsaves:itens', JSON.stringify(info)) 
        }
    }

    if(infoData) {
        handleFetchDataList(infoData)
    }
    
    async function editPostList(shopp) {
        const response = await List.getItem('@listsaves:itens')
        const previousData = response? JSON.parse(response): []
        const data = [...previousData, shopp]
        await List.setItem('@listsaves:itens', JSON.stringify(data))  
    }
    
    if(infoDataList) {
        editPostList(infoDataList)
    }

    return (
        <View style={styles.item}>
            <ListForm handleOnChange={editPost} shoppData={shopp}/>
        </View>
    )
}