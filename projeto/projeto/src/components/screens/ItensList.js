import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './ItensListstyles'

import React, { useState, useCallback } from 'react'

import { View, Text, TextInput, Alert, FlatList, TouchableOpacity } from 'react-native'

import { useFocusEffect } from '@react-navigation/native'

import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import List from '@react-native-async-storage/async-storage'

export default function ItensList({navigation}) {
    const {getItem, setItem} = useAsyncStorage('@itenssaves:itens')
    const [infoDataItem, setInfoDataItem] = useState('')
    const [search, setSearch] = useState('')
    const [itensList, setItensList] = useState([])
    const [itemList, setItemList] = useState([])

    async function handleFetchData() {
        const response = await getItem()
        const data = response? JSON.parse(response): []
        setItensList(data)
    }
    
    useFocusEffect(useCallback(() => {
       handleFetchData()
    }, []))

    let totalPriceItens = 0
    for(let i=0; i<itensList.length; i++) {
        let {cost: costTotal} = itensList[i]
        totalPriceItens += Number(costTotal) 
    }
    
    async function handleFetchNewData(id) {
        const response = await getItem()
        const data = response? JSON.parse(response): []
        for(let i=0; i<data.length; i++) {
            let {id: idItem} = data[i]
            if(idItem === id) {
                setItemList(data[i])
            }
        }
        setInfoDataItem(id)
    }
    
    async function handleFetchNewDataList(id) {
        const response = await List.getItem('@listsaves:itens')
        const previousData = response?JSON.parse(response):[]
        let infoCheck = false
        if(previousData.length > 0) {
            for(let i=0; i<previousData.length; i++) {
                let {id: idItem} = previousData[i]
                if(idItem === id) {
                    Alert.alert('Por favor!', 'Item já existe no carrinho, remova o item no carrinho antes de adicionar.')
                    infoCheck = true
                } 
            }
            if(infoCheck !== true) {
                const data = [...previousData, itemList]
                await List.setItem('@listsaves:itens', JSON.stringify(data))
            }
        } else {
            const data = [...previousData, itemList]
            await List.setItem('@listsaves:itens', JSON.stringify(data))
        }
        setInfoDataItem('')
    }

    if(infoDataItem) {
        handleFetchNewDataList(infoDataItem)
    }

    async function removeItem(id) {
        const response = await getItem()
        const previousData = response? JSON.parse(response): []
        const data = previousData.filter((item) => item.id !== id)
        await setItem(JSON.stringify(data))
        handleFetchData()
    }

    async function handleSearchItem() {
        let newData = []
        let newSearch 
        let newTitleItem
        let newPlaceItem
        const response = await getItem()
        const data = response? JSON.parse(response): []
        if(!search) {
            Alert.alert('Atenção!', 'Informe o item ou o local!')
        } else {
            for(let i=0; i<data.length; i++) {
                let{title: titleItem, place: placeItem} = data[i]
                newSearch = search.replace(/( )+/g, '')
                if(titleItem) {
                    newTitleItem = titleItem.replace(/( )+/g, '')
                }
                if(placeItem) {
                    newPlaceItem = placeItem.replace(/( )+/g, '')
                }
                if(newTitleItem === newSearch || newPlaceItem === newSearch) {
                    newData.push(data[i])
                }
            }
            setItensList(newData)
            setSearch('')
        }
    }

    function listItens({item: item}) {
        return (
            <View style={styles.listViewInside1}>
                <View style={styles.listViewText}>
                    <Text style={styles.listTextInside}>Item: {item.title}</Text>
                    <Text style={styles.listTextInside}>Quantidade: {item.quantity}</Text>
                    <Text style={styles.listTextInside}>Preço: {item.price}</Text>
                    <Text style={styles.listTextInside}>Local: {item.place}</Text>
                    <Text style={styles.listTextInside}>Total: {item.cost > 0 ? item.cost : ''}</Text>
                </View>
                <View style={styles.listViewInside2}>
                    <Icon
                        style={styles.listIconInside}  
                        name='square-edit-outline' 
                        size={25} 
                        color='#EB0927' 
                        onPress={()=> {navigation.navigate('ItemEdit', item.id)}}
                    />
                    <Icon 
                        style={styles.listIconInside} 
                        name='cart-plus' 
                        size={25} 
                        color='#09E01B' 
                        onPress={()=> {handleFetchNewData(item.id)}}
                    />
                    <Icon
                        style={styles.listIconInside}  
                        name='delete-forever' 
                        size={25} 
                        color='#EB0927' 
                        onPress={()=> {removeItem(item.id)}}
                    />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.list}>
            <Icon 
                style={styles.listIcon1}
                name='playlist-plus' 
                size={40} 
                color='#3A4E48' 
                onPress={()=> {navigation.navigate('ItemList')}}
            />
            <Icon 
                style={styles.listIcon2}
                name='playlist-check' 
                size={40} 
                color='#3A4E48' 
                onPress={()=> {navigation.navigate('ListShopping')}}
            />
            <Text style={styles.listText1}>{itensList.length > 0 && <Text>Minha lista</Text>}</Text>
            <View style={styles.listSearch}>
                <TextInput
                    value={search}
                    onChangeText={ (text) => setSearch(text) }
                    style={styles.listSearchInput}
                    placeholder='Informe o item ou o local'
                    placeholderTextColor={'#9fb409'}
                />
                <TouchableOpacity style={styles.listSearchBtn} onPress={handleSearchItem}>
                    <Icon
                        name='text-search'
                        size={25}
                        color='#f9fafb'
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.listView1}>
                <Text>{itensList.length === 0 && <Text>Lista vazia</Text>}</Text>
            </View>
            <View style={styles.listView2}>
                <Text>{itensList.length > 0 && totalPriceItens > 0 && <Text style={styles.listText2}>R$ {totalPriceItens.toFixed(2)}</Text>}</Text>
            </View>
            <FlatList  
                data={itensList}
                keyExtractor={item => String(item.id)}
                renderItem={listItens}
            />
        </View>
    )
}