import styles from './HeaderCstyles'

import React from 'react'
import { View, Text, Image } from 'react-native'

export default function HeaderC() {
    return (
        <View style={styles.buyHeader}>
            <Image source={require('../img/icon.png')} style={styles.buyHeaderShoop0}/>
            <Text style={styles.buyHeaderShoop1}>Listou</Text>
        </View>
    )
}