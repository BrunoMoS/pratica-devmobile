import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    home: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#9fb409'
    },
    homeIcon1: {
        marginTop: 5,
        paddingLeft: 20,
        position: 'absolute',
        left: 0
    },
    homeIcon2: {
        marginTop: 5,
        alignSelf: 'center'
    },
    homeIcon3: {
        marginTop: 5,
        paddingRight: 20,
        position: 'absolute',
        right: 0
    },
    homeView: {
        marginTop: 150, 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    }, 
    homeText1: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#3A4E48'
    },  
    homeText2: {
        fontSize: 15,
        color: '#f9fafb'
    }
})

export default styles