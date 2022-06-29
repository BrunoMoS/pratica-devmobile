import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    list: {
        flex: 1,
        backgroundColor: '#9fb409'
    },
    listIcon1: {
        marginTop: 5,
        paddingLeft: 20,
        position: 'absolute',
        left: 0
    },
    listIcon2: {
        marginTop: 5,
        paddingRight: 20,
        position: 'absolute',
        right: 0
    },
    listText1: {
        marginTop: 60,
        fontSize: 20,
        color: '#3A4E48',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    listView1: {
        alignItems: 'center'
    },
    listView2: {
        marginHorizontal: 20,
        marginBottom: 5
    },
    listText2: {
        marginLeft: 5,
        color: '#f9fafb',
        fontSize: 18,
        fontWeight: 'bold'
    },
    listInside: {
        marginHorizontal: 20,
        marginBottom: 10
    },
    listInsideText1: {
        color: '#3A4E48',
        fontSize: 16,
        fontWeight: 'bold'
    },
    listInsideText2: {
        color: '#3A4E48',
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'line-through'
    },
    listViewInside: {
        marginTop: 3,
        padding: 3,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: '#f9fafb',
        borderBottomStartRadius: 5,
        borderBottomEndRadius: 5
    },
    listIconInside: {
        marginStart: 15
    }
})

export default styles