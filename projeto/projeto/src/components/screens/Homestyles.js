import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    home: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#9fb409'
    },
    homeShopp1: {
        marginTop: 5,
        paddingLeft: 20,
        position: 'absolute',
        left: 0
    },
    homeShopp2: {
        marginTop: 5,
        alignSelf: 'center'
    },
    homeShopp3: {
        marginTop: 5,
        paddingRight: 20,
        position: 'absolute',
        right: 0
    },
    homeShopp4: {
        marginTop: 150, 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    }, 
    homeShoop5: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#3A4E48'
    },  
    homeShoop6: {
        fontSize: 15,
        color: '#f9fafb'
    }
})

export default styles