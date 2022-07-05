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
        alignSelf: 'center',
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
    listViewInside1: {
        marginHorizontal: 20,
        marginBottom: 10,
        backgroundColor: '#f9fafb',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    listViewText: {
        marginLeft: 2,
        paddingLeft: 8,
        paddingBottom: 4,
        backgroundColor: '#9fb409',
        borderBottomLeftRadius: 5
    },
    listTextInside: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3A4E48'
    },
    listViewInside2: {
        padding: 3,
        flexDirection: 'row',
        justifyContent: 'flex-end'    
    },  
    listIconInside: {
         marginStart: 15
    }
})

export default styles