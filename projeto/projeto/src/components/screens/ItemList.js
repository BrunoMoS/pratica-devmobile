import React from 'react'

import { View } from 'react-native'

import uuid from 'react-native-uuid'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'

import ListForm from './ListForm'

import styles from './ItemListstyles'
 
export default function ItemList({navigation}) { 
    
    async function createItem(newItem) {
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
        
        const response = await AsyncStorage.getItem('@itenssaves:itens')
        const previousData = response?JSON.parse(response):[]
        const data = [...previousData, newItem]
        await AsyncStorage.setItem('@itenssaves:itens', JSON.stringify(data))
    }
    
    return (
        <View style={styles.list}>
            <Icon 
                style={styles.listIcon}
                name='playlist-star' 
                size={40} 
                color='#3A4E48' 
                onPress={()=> {navigation.navigate('ItensList')}}
            />
            <View>
                <ListForm handlesubmit={createItem}/>  
            </View>
        </View>
    )
}