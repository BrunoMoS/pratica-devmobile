import styles from './Loadingstyles'

import React from 'react'
import { View, Text } from 'react-native'

export default function Loading() {
    return (
        <View style={styles.loading}>
            <Text style={styles.loadingText}>Carregando...</Text>
        </View>
    )
}