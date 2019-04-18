import React from 'react'
import { View, Text, StyleSheet, Image, PixelRatio } from 'react-native'
export default Search = (props) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/icon/pages/common/search.png')}
                style={styles.searchIcon}
            />
            <Text style={styles.text}>微信号/手机号</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 45,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 10,
        borderTopWidth: 1 / PixelRatio.get(),
        borderColor: '#f1f1f1'
    },
    searchIcon: {
        width: 15,
        height: 15,
        tintColor: '#1AAD19',
        marginHorizontal: 15
    },
    text: {
        color: '#999',
        fontSize: 14,
        fontWeight: '400'
    }
})