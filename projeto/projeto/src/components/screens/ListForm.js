import styles from './ListFormstyles'

import React, { useEffect, useState } from 'react'

import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/AntDesign'

import Message from '../layout/Message'

export default function ListForm({handlesubmit, oldItemData}) {
    const [itemMessage, setItemMessage] = useState('')
    const [title, setTitle] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [place, setPlace] = useState('')
    const [oldItem, setOldItem] = useState('')
    
    useEffect(() => {
        setOldItem(oldItemData)
    }, [oldItemData])
    
    function handleChange() {
        let newItem
        if(!oldItem) {
                newItem = {
                title: title,
                quantity: quantity,
                price: price,
                place: place,
            }
            handlesubmit(newItem)
            setTitle('')
            setQuantity('')
            setPrice('')
            setPlace('')
        } else {
                newItem = {
                title: title?title:oldItem.title,
                quantity: quantity?quantity:oldItem.quantity,
                price: price?price:oldItem.price,
                place: place?place:oldItem.place,
            }
            handlesubmit(newItem)
        }
        setItemMessage('vai dar certo quando der certo!')
    }
    
    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                onChangeText={setTitle}
                defaultValue={!oldItem?title:oldItem.title}
                placeholder='Informe o item'
                placeholderTextColor={'#9fb409'}
            />
            <TextInput
                style={styles.input}
                keyboardType={'numeric'}
                onChangeText={setQuantity}
                defaultValue={!oldItem?quantity:oldItem.quantity}
                placeholder='Informe a quantidade'
                placeholderTextColor={'#9fb409'}
            />
            <TextInput
                style={styles.input}
                keyboardType={'numeric'}
                onChangeText={setPrice}
                defaultValue={!oldItem?price:oldItem.price}
                placeholder='Informe o preço'
                placeholderTextColor={'#9fb409'}
            />
            <TextInput
                style={styles.input}
                onChangeText={setPlace}
                defaultValue={!oldItem?place:oldItem.place}
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