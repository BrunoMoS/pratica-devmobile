import { useEffect, useState } from 'react'

import React from 'react'
import { Text } from 'react-native'

export default function Message({msg}) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if(!msg) {
            setVisible(false)
            return
        }
        setVisible(true)
        const timer = setTimeout(() => {
            setVisible(false)
        }, 1000)
        return () => clearTimeout(timer)
    }, [msg])
    
    return (
        <>
            {visible && (
                <Text>{msg}</Text>
            )}
        </>
    )
}
