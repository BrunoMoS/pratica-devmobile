import styles from './Homestyles'

import React from 'react'
import { View, Text } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Home({navigation}) {
    return (
        <View style={styles.home}>
                <Icon 
                    style={styles.homeIcon1}
                    name='playlist-plus' 
                    size={40} 
                    color='#3A4E48' 
                    onPress={()=> {navigation.navigate('ItemList')}}
                />
                <Icon
                    style={styles.homeIcon2}
                    name='playlist-star'
                    size={40}
                    color='#3A4E48'
                    onPress={()=> {navigation.navigate('ItensList')}}
                />
                <Icon
                    style={styles.homeIcon3} 
                    name='playlist-check' 
                    size={40} 
                    color='#3A4E48' 
                    onPress={()=> {navigation.navigate('ListShopping')}}
                />
            <View style={styles.homeView}>
                <Text style={styles.homeText1}>Bem vindo</Text>
                <Text style={styles.homeText2}>Lembrar apenas quando chegar em casa, nunca mais!</Text>
            </View>
        </View>
    )
}