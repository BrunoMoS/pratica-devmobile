import styles from './ListFormstyles'

import React, { useEffect, useState } from 'react'

import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/AntDesign'

import Message from '../layout/Message'

export default function ListForm({handleOnChange, itemData}) {
    const [itemMessage, setItemMessage] = useState('')
    const [title, setTitle] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [place, setPlace] = useState('')
    const [item, setItem] = useState(itemData || {})
    
    useEffect(() => {
        setItem(itemData)
    }, [itemData])

    function handleChange() {
        let newItem
        if(!item) {
                newItem = {
                title: title,
                quantity: quantity,
                price: price,
                place: place,
            }
            handleOnChange(newItem)
            setTitle('')
            setQuantity('')
            setPrice('')
            setPlace('')
        } else {
                newItem = {
                title: title?title:item.title,
                quantity: quantity?quantity:item.quantity,
                price: price?price:item.price,
                place: place?place:item.place,
            }
            handleOnChange(newItem)
        }
        setItemMessage('vai dar certo quando der certo!')
    }
    
    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                onChangeText={setTitle}
                defaultValue={!item?title:item.title}
                placeholder='Informe o item'
                placeholderTextColor={'#9fb409'}
            />
            <TextInput
                style={styles.input}
                keyboardType={'numeric'}
                onChangeText={setQuantity}
                defaultValue={!item?quantity:item.quantity}
                placeholder='Informe a quantidade'
                placeholderTextColor={'#9fb409'}
            />
            <TextInput
                style={styles.input}
                keyboardType={'numeric'}
                onChangeText={setPrice}
                defaultValue={!item?price:item.price}
                placeholder='Informe o preço'
                placeholderTextColor={'#9fb409'}
            />
            <TextInput
                style={styles.input}
                onChangeText={setPlace}
                defaultValue={!item?place:item.place}
                placeholder='Informe o local'
                placeholderTextColor={'#9fb409'}
            />
            <TouchableOpacity style={styles.btn} onPress={handleChange}>
                <Text style={styles.btnText}>Salvar</Text>
            </TouchableOpacity>
            <Text style={styles.text}>
                {itemMessage && <Message msg={<Icon name='checkcircle' size={40} color='#3A4E48'/>}/>}
            </Text>
        </View>
    )
}