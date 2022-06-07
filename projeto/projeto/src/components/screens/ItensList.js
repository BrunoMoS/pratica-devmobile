import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './ItensListstyles'

import React, { useState, useCallback } from 'react'

import { View, Text, TextInput, Alert, FlatList, TouchableOpacity } from 'react-native'

import { useFocusEffect } from '@react-navigation/native'

import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import List from '@react-native-async-storage/async-storage'

export default function ItensList({navigation}) {
    const {getItem, setItem} = useAsyncStorage('@itenssaves:itens')
    const [infoData, setInfoData] = useState('')
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

    let total = 0
    for(let i=0; i<itensList.length; i++) {
        let {cost: costTotal} = itensList[i]
        total += Number(costTotal) 
    }
    
    async function handleFetchNewData(id) {
        const response = await getItem()
        const data = response? JSON.parse(response): []
        for(let i=0; i<data.length; i++) {
            let {id: idData} = data[i]
            if(idData === id) {
                setItemList(data[i])
            }
        }
        setInfoData(id)
    }

    async function handleFetchNewDataList(id) {
        const response = await List.getItem('@listsaves:itens')
        const previousData = response?JSON.parse(response):[]
        let info = false
        if(previousData.length > 0) {
            for(let i=0; i<previousData.length; i++) {
                let {id: idData} = previousData[i]
                if(idData === id) {
                    Alert.alert('Por favor!', 'Item já existe no carrinho, remova o item no carrinho antes de adicionar.')
                    info = true
                } 
            }
            if(info !== true) {
                const data = [...previousData, itemList]
                await List.setItem('@listsaves:itens', JSON.stringify(data))
            }
        } else {
            const data = [...previousData, itemList]
            await List.setItem('@listsaves:itens', JSON.stringify(data))
        }
        setInfoData('')
    }

    if(infoData) {
        handleFetchNewDataList(infoData)
    }

    async function removeItem(id) {
        const response = await getItem()
        const previousData = response? JSON.parse(response): []
        const data = previousData.filter((item) => item.id !== id)
        await setItem(JSON.stringify(data))
        handleFetchData()
    }

    async function handleSearchItem() {
        let info = []
        const response = await getItem()
        const data = response? JSON.parse(response): []
        if(search === '') {
            Alert.alert('Atenção!', 'Informe o item ou o local!')
        }
        for(let i=0; i<data.length; i++) {
            let{title: titleSearch, place: placeSearch} = data[i]
            if(titleSearch === search || placeSearch === search) {
                info.push(data[i])
            }
        }
        setItensList(info)
        setSearch('')
    }

    function listItens({item: item}) {
        return (
            <View style={styles.listInsideBox}>
                <Text style={styles.insideBox1}>{item.quantity?item.quantity.slice(0,2):''}</Text>
                <Text style={styles.insideBox2}>{item.title?item.title.slice(0,13):''}</Text>
                <Text style={styles.insideBox1}>{item.price?item.price.slice(0,5):''}</Text>
                <Text style={styles.insideBox2}>{item.place?item.place.slice(0,10):''}</Text>
                <Text style={styles.insideBox1}>{item.cost > 0?item.cost.slice(0,6):''}</Text>
                <Icon
                    style={styles.insideBox3}  
                    name='square-edit-outline' 
                    size={25} 
                    color='#EB0927' 
                    onPress={()=> {navigation.navigate('Item', item.id)}}
                />
                <Icon 
                    style={styles.insideBox4} 
                    name='cart-plus' 
                    size={25} 
                    color='#09E01B' 
                    onPress={()=> {handleFetchNewData(item.id)}}
                />
                <Icon
                    style={styles.insideBox5}  
                    name='delete-forever' 
                    size={25} 
                    color='#EB0927' 
                    onPress={()=> {removeItem(item.id)}}
                />
            </View>
        )
    }

    return (
        <View style={styles.list}>
            <Icon 
                style={styles.listInsideIcon}
                name='playlist-plus' 
                size={40} 
                color='#3A4E48' 
                onPress={()=> {navigation.navigate('List')}}
            />
            <Icon 
                style={styles.listInsideIcon1}
                name='playlist-check' 
                size={40} 
                color='#3A4E48' 
                onPress={()=> {navigation.navigate('ListShopping')}}
            />
            <Text style={styles.listInsideTitle}>{itensList.length > 0 && <Text>Minha lista</Text>}</Text>
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
            <View style={styles.listInside1}>
                <Text>{itensList.length === 0 && <Text>Lista vazia</Text>}</Text>
            </View>
            <View style={styles.listInside2}>
                <Text>{itensList.length > 0 && total > 0 && <Text style={styles.listInside2Text}>R$ {total.toFixed(2)}</Text>}</Text>
            </View>
            <FlatList  
                data={itensList}
                keyExtractor={item => String(item.id)}
                renderItem={listItens}
            />
        </View>
    )
}