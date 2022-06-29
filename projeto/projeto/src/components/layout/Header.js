import styles from './Headerstyles'

import React from 'react'
import { View, Text, Image } from 'react-native'

export default function Header() {
    return (
        <View style={styles.header}>
            <Image source={require('../img/icon.png')} style={styles.headerImage}/>
            <Text style={styles.headerText}>Listou</Text>
        </View>
    )
}