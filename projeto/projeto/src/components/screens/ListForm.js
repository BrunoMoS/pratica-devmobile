import styles from './ListFormstyles'

import React, { useState } from 'react'

import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import { useForm, Controller } from 'react-hook-form'

import Icon from 'react-native-vector-icons/AntDesign'

import Message from '../layout/Message'

export default function ListForm({handleOnChange}) {
    const [itemMessage, setItemMessage] = useState('')
    const {control, handleSubmit} = useForm({})
    
    function handleChange(e) {
        handleOnChange(e)
        setItemMessage('vai dar certo quando der certo!')
    }

    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name='title'
                render={({ field: {onChange, value} }) => (
                    <TextInput
                        style={styles.input}
                        onChangeText={onChange}
                        value={value}
                        placeholder='Informe o item'
                        placeholderTextColor={'#9fb409'}
                    />
                )}
            />
            <Controller
                control={control}
                name='quantity'
                render={({ field: {onChange, value} }) => (
                    <TextInput
                        style={styles.input}
                        keyboardType={'numeric'}
                        onChangeText={onChange}
                        value={value}
                        placeholder='Informe a quantidade'
                        placeholderTextColor={'#9fb409'}
                    />
                )}
            />
            <Controller
                control={control}
                name='price'
                render={({ field: {onChange, value} }) => (
                    <TextInput
                        style={styles.input}
                        keyboardType={'numeric'}
                        onChangeText={onChange}
                        value={value}
                        placeholder='Informe o preço'
                        placeholderTextColor={'#9fb409'}
                    />
                )}
            />
            <Controller
                control={control}
                name='place'
                render={({ field: {onChange, value} }) => (
                    <TextInput
                        style={styles.input}
                        onChangeText={onChange}
                        value={value}
                        placeholder='Informe o local'
                        placeholderTextColor={'#9fb409'}

                    />
                )}
            />
            <TouchableOpacity style={styles.btn} onPress={handleSubmit(handleChange)}>
                <Text style={styles.btnText}>Salvar</Text>
            </TouchableOpacity>
            <Text style={styles.listBuy}>
                {itemMessage && <Message msg={<Icon name='checkcircle' size={40} color='#3A4E48'/>}/>}
            </Text>
        </View>
    )
}