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
    listInsideTitle: {
        marginTop: 60,
        fontSize: 20,
        color: '#3A4E48',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 5
    },
    listInside1: {
        alignItems: 'center'
    },
    listInside2: {
        marginHorizontal: 20,
        marginBottom: 5
    },
    listSearch: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        alignItems:'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginBottom: 5
    },
    listSearchInput: {
       width: '85%',
       height: 40,
       borderTopLeftRadius: 3,
       borderBottomLeftRadius: 3,
       backgroundColor: '#f9fafb',
       padding: 10,
       color: '#3A4E48'
    },
    listSearchBtn: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3A4E48',
        height: 40,
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3
    },
    listInside2Text: {
        marginLeft: 5,
        color: '#f9fafb',
        fontSize: 18,
        fontWeight: 'bold'
    },
    insideBox1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3A4E48'
    },  
    insideBox2: {
         marginStart: 15
    }
})

export default styles