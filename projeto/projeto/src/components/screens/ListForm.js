import styles from './ListFormstyles'

import React, { useEffect, useState } from 'react'

import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/AntDesign'

import Message from '../layout/Message'

export default function ListForm({handleOnChange, shoppData}) {
    const [itemMessage, setItemMessage] = useState('')
    const [title, setTitle] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [place, setPlace] = useState('')
    const [shopp, setShopp] = useState(shoppData || {})
    
    useEffect(() => {
        setShopp(shoppData)
    }, [shoppData])

    function handleChange() {
        if(shopp === undefined) {
            const item = {
                title: title,
                quantity: quantity,
                price: price,
                place: place,
            }
            handleOnChange(item)
        } else {
            const item = {
                title: title?title:shopp.title,
                quantity: quantity?quantity:shopp.quantity,
                price: price?price:shopp.price,
                place: place?place:shopp.place,
            }
            handleOnChange(item)
        }
        setItemMessage('vai dar certo quando der certo!')
    }
    
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setTitle}
                defaultValue={shopp===undefined?title:shopp.title}
                placeholder='Informe o item'
                placeholderTextColor={'#9fb409'}
            />
            <TextInput
                style={styles.input}
                keyboardType={'numeric'}
                onChangeText={setQuantity}
                defaultValue={shopp===undefined?quantity:shopp.quantity}
                placeholder='Informe a quantidade'
                placeholderTextColor={'#9fb409'}
            />
            <TextInput
                style={styles.input}
                keyboardType={'numeric'}
                onChangeText={setPrice}
                defaultValue={shopp===undefined?price:shopp.price}
                placeholder='Informe o preço'
                placeholderTextColor={'#9fb409'}
            />
            <TextInput
                style={styles.input}
                onChangeText={setPlace}
                defaultValue={shopp===undefined?place:shopp.place}
                placeholder='Informe o local'
                placeholderTextColor={'#9fb409'}
            />
            <TouchableOpacity style={styles.btn} onPress={handleChange}>
                <Text style={styles.btnText}>Salvar</Text>
            </TouchableOpacity>
            <Text style={styles.listBuy}>
                {itemMessage && <Message msg={<Icon name='checkcircle' size={40} color='#3A4E48'/>}/>}
            </Text>
        </View>
    )
}