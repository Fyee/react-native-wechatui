import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native'
export default Search = (props) => {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback>
                <View style={styles.search}>
                    <Image
                        source={require('../../../../assets/icon/pages/common/search.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>搜索</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}
const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: '#F1F1F1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    search: {
        width: width - 20,
        height: 30,
        backgroundColor: '#fff',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    icon: {
        width: 14,
        height: 14,
        tintColor: '#666',
        marginRight: 5
    },
    text: {
        fontSize: 15,
        color: '#666'
    }
})