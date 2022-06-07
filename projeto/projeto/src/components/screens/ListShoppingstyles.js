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
        color: '#3A4E48',
        fontSize: 18,
        fontWeight: 'bold'
    },
    listInsideBox: {
        marginHorizontal: 20,
        marginBottom: 5,
        borderRadius: 3,
        padding: 5,
        flexDirection: 'row',
        backgroundColor: '#f9fafb'
    },
    listInsideBox1: {
        color: '#09E01B',
        fontSize: 14,
        marginLeft: 2
    },
    listInsideBox2: {
        color: '#3A4E48',
        fontSize: 14,
        marginLeft: 2
    },
    listInsideBox2A: {
        color: '#3A4E48',
        fontSize: 14,
        marginLeft: 2,
        textDecorationLine: 'line-through'
    },
    listInsideBox3: {
        color: '#09E01B',
        fontSize: 14,
        marginLeft: 2
    },
    listInsideBox4: {
        position: 'absolute',
        right: 40
    },
    listInsideBox5: {
        position: 'absolute',
        right: 5
    }
})

export default styles