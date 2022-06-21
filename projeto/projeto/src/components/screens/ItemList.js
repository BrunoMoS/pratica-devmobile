import React from 'react'

import { View } from 'react-native'

import uuid from 'react-native-uuid'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'

import ListForm from './ListForm'

import styles from './ItemListstyles'
 
export default function ItemList({navigation}) { 
    
    async function createItem(shopp) {
        let priceShopp
        let price
        let quantity
        if(shopp.price !== undefined && shopp.quantity !== undefined) {
            quantity = shopp.quantity.replace(',','.')
            price = shopp.price.replace(',','.')  
            priceShopp = price*quantity 
        } else {
            priceShopp = shopp.price*shopp.quantity
        }
        shopp.cost = priceShopp.toFixed(2)     
        shopp.id = uuid.v4()
        
        const response = await AsyncStorage.getItem('@itenssaves:itens')
        const previousData = response?JSON.parse(response):[]
        const data = [...previousData, shopp]
        await AsyncStorage.setItem('@itenssaves:itens', JSON.stringify(data))
    }
    
    return (
        <View style={styles.listBuy}>
            <Icon 
                style={styles.listBuyIcon}
                name='playlist-star' 
                size={40} 
                color='#3A4E48' 
                onPress={()=> {navigation.navigate('ItensList')}}
            />
            <View>
                <ListForm handleOnChange={createItem}/>  
            </View>
        </View>
    )
}