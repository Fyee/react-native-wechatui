import React from 'react'
import { View, StyleSheet, PixelRatio } from 'react-native'
export default ListLine = (props) => {
    return (
        <View style={{ backgroundColor: '#fff' }}>
            <View style={styles.line} />
        </View>
    )
}
const styles = StyleSheet.create({
    line: {
        height: 1 / PixelRatio.get(),
        backgroundColor: '#f1f1f1',
        marginLeft: 50
    }
})