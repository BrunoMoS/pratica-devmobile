import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
       marginTop: 60,
       paddingHorizontal: 20
    },
    input: {
       width: '100%',
       height: 40,
       borderRadius: 3,
       backgroundColor: '#f9fafb',
       paddingHorizontal: 10,
       marginBottom: 10,
       color: '#3A4E48'
    },
    btn: {
        backgroundColor: '#3A4E48',
        width: '100%',
        height: 50,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: '#f9fafb',
        fontWeight: 'bold',
        fontSize: 20
    },
    listBuy: {
        width: '100%',
        paddingTop: 20,
        marginLeft: '45%'
    }
})

export default styles