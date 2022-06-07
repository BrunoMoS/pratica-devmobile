import React from 'react'
import { View, Text} from 'react-native'

import { useAsyncStorage } from '@react-native-async-storage/async-storage'

import { useState, useEffect } from 'react'
import uuid from 'react-native-uuid'

import Loading from '../layout/Loading'
import ListForm from './ListForm'

import styles from './Itemstyles'

export default function Item(props) {
    const {getItem, setItem} = useAsyncStorage('@itenssaves:itens')
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
        if(shopp.price !== undefined) {
            let price
            price = shopp.price.replace(',','.')  
            priceShopp = price*shopp.quantity 
        } else {
            priceShopp = shopp.price*shopp.quantity
        }
        shopp.cost = priceShopp.toFixed(2) 
        shopp.id = uuid.v4()

        const response = await getItem()
        const previousData = response? JSON.parse(response): []
        const data = [...previousData, shopp]
        await setItem(JSON.stringify(data))  
    }

    return (
        <>
            {shopp ? ( 
                <View style={styles.item}>
                    <View>
                        <View style={styles.itemInside}>
                            <Text>
                                <Text>Item:</Text><Text style={styles.itemText}> {shopp.title} </Text>
                            </Text>
                            <Text>
                                <Text>Quantidade:</Text><Text style={styles.itemText}> {shopp.quantity} </Text>
                            </Text>
                            <Text>
                                <Text>Preço:</Text><Text style={styles.itemText}> R${shopp.price} </Text>
                            </Text>
                            <Text>
                                <Text>Local:</Text><Text style={styles.itemText}> {shopp.place} </Text>
                            </Text>
                            <Text>
                                <Text>Total:</Text><Text style={styles.itemText}> R${shopp.cost}</Text>
                            </Text>
                        </View>
                        <View>
                            <ListForm handleOnChange={editPost}/>
                        </View>
                    </View>
                </View>
            ) : (
                <Loading/>
            )}
        </>
    )
}