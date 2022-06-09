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
        marginBottom: 5,
        borderRadius: 3,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#f9fafb'
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
    insideBox1: {
        fontSize: 14,
        color: '#09E01B',
        marginLeft: 3
    },  
    insideBox2: {
        fontSize: 14,
        color: '#3A4E48',
        marginLeft: 3
    },
    insideBox3: {
        paddingTop: 5,
        position: 'absolute',
        right: 75
    },
    insideBox4: {
        paddingTop: 5,
        position: 'absolute',
        right: 40
    },
    insideBox5: {
        paddingTop: 5,
        position: 'absolute',
        right: 5
    }
})

export default styles