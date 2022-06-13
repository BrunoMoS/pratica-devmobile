import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    list: {
        flex: 1,
        backgroundColor: '#9fb409'
    },
    listInsideIcon: {
        marginTop: 5,
        paddingLeft: 20,
        position: 'absolute',
        left: 0
    },
    listInsideIcon1: {
        marginTop: 5,
        paddingRight: 20,
        position: 'absolute',
        right: 0
    },
    listInsideTitle: {
        marginTop: 60,
        fontSize: 20,
        color: '#3A4E48',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    listInside1: {
        alignItems: 'center'
    },
    listInside2: {
        marginHorizontal: 20,
        marginBottom: 5
    },
    listInside2Text: {
        marginLeft: 5,
        color: '#f9fafb',
        fontSize: 18,
        fontWeight: 'bold'
    },
    listInsideBox: {
        marginHorizontal: 20,
        marginBottom: 10
    },
    listInsideBoxIcon: {
        marginTop: 3,
        padding: 3,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: '#f9fafb',
        borderBottomStartRadius: 5,
        borderBottomEndRadius: 5
    },
    listInsideBox1: {
        color: '#3A4E48',
        fontSize: 16,
        fontWeight: 'bold'
    },
    listInsideBox1A: {
        color: '#3A4E48',
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'line-through'
    },
    listInsideBox2: {
        marginStart: 15
    }
})

export default styles