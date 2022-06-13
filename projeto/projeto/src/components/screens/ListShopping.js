import React, { useState, useCallback } from "react";
import { FlatList, View, Text, Alert } from "react-native";
import { useFocusEffect } from '@react-navigation/native'

import { useAsyncStorage } from '@react-native-async-storage/async-storage'

import styles from "./ListShoppingstyles";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ListShopping({navigation}) {
    const [list, setList] = useState([])
    const [infoCheck, setInfoCheck] = useState(false)
    const {getItem, setItem, removeItem} = useAsyncStorage('@listsaves:itens')

    async function handleFetchData() {
        const response = await getItem()
        const data = response?JSON.parse(response):[]
        setList(data)
    }
    
    useFocusEffect(useCallback(() => {
        handleFetchData()
    }, []))

    let total = 0
    for(let i=0; i<list.length; i++) {
        let {cost: costTotal} = list[i]
        total += Number(costTotal) 
    }

    function removeList() {
       if(list.length>0) {
        Alert.alert('Atenção!', 'Deseja excluir todos os itens do seu carrinho?', [
            {
                text: 'Sim',
                onPress() {
                    setList([])
                    removeItem()
                }
            },
            {
                text: 'Não'
            }
        ])
       }
    }

    async function removeItemList(id) {
        const response = await getItem()
        const previousData = response? JSON.parse(response): []
        const data = previousData.filter((item) => item.id !== id)
        await setItem(JSON.stringify(data))
        handleFetchData()
    }

    function checkList(id) {
        let info = []
        for(let i=0; i<list.length; i++) {
            let{id: idData} = list[i]
            if(idData !== id) {
                info.push(list[i])
            }
        }
        for(let i=0; i<list.length; i++) {
            let{id: idData} = list[i]
            if(idData === id) {
                const listChecked = {...list[i], completed: true}
                list[i] = listChecked
                info.push(list[i])
            }
        }
        setList(info)
        setInfoCheck(true)
    }

    async function checkListData() {
        await setItem(JSON.stringify(list))
    }

    if(infoCheck === true) {
        checkListData()
    }

    function listItens({item: item}) {
        return (
            <View style={styles.listInsideBox}>
                <Text style={item.completed ? styles.listInsideBox1A : styles.listInsideBox1}>Item: {item.title}</Text>
                <Text style={styles.listInsideBox1}>Quantidade: {item.quantity}</Text>
                <Text style={styles.listInsideBox1}>Preço: {item.price}</Text>
                <Text style={styles.listInsideBox1}>Local: {item.place}</Text>
                <Text style={styles.listInsideBox1}>Total: {item.cost > 0 ? item.cost : ''}</Text>
                <View style={styles.listInsideBoxIcon}>
                    <Icon
                        style={styles.listInsideBox2}
                        name="basket-minus"
                        size={25}
                        color='#EB0927'
                        onPress={()=> removeItemList(item.id)}
                    />
                    <Icon
                        style={styles.listInsideBox2}
                        name="check-decagram"
                        size={25}
                        color='#09E01B'
                        onPress={()=> checkList(item.id)}
                    />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.list}>
            <Icon 
                style={styles.listInsideIcon}
                name="playlist-remove"
                size={40}
                color='#3A4E48'
                onPress={removeList}
            />
            <Icon
                style={styles.listInsideIcon1}
                name='playlist-star'
                size={40}
                color='#3A4E48'
                onPress={()=> {navigation.navigate('ItensList')}}
            />
            <Text style={styles.listInsideTitle}>{list.length > 0 && <Text>Meu carrinho</Text>}</Text>
            <View style={styles.listInside1}>
                <Text>{list.length === 0 && (<Text>Carrinho vazio</Text>)}</Text>
            </View>
            <View style={styles.listInside2}>
                <Text>{list.length > 0 && total > 0 && <Text style={styles.listInside2Text}>R$ {total.toFixed(2)}</Text>}</Text>
            </View>
            <FlatList  
                data={list}
                keyExtractor={item => String(item.id)}
                renderItem={listItens}
            />
        </View>
    )
}