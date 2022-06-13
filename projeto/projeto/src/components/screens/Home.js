import styles from './Homestyles'

import React from 'react'
import { View, Text } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Home({navigation}) {
    return (
        <View style={styles.home}>
                <Icon 
                    style={styles.homeShopp1}
                    name='playlist-plus' 
                    size={40} 
                    color='#3A4E48' 
                    onPress={()=> {navigation.navigate('ItemList')}}
                />
                <Icon
                    style={styles.homeShopp2}
                    name='playlist-star'
                    size={40}
                    color='#3A4E48'
                    onPress={()=> {navigation.navigate('ItensList')}}
                />
                <Icon
                    style={styles.homeShopp3} 
                    name='playlist-check' 
                    size={40} 
                    color='#3A4E48' 
                    onPress={()=> {navigation.navigate('ListShopping')}}
                />
            <View style={styles.homeShopp4}>
                <Text style={styles.homeShoop5}>Bem vindo</Text>
                <Text style={styles.homeShoop6}>Lembrar apenas quando chegar em casa, nunca mais!</Text>
            </View>
        </View>
    )
}