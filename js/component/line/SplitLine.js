import React from 'react'
import { View, StyleSheet, PixelRatio } from 'react-native'
export default SplitLine = (props) => {
    return (
        <View
            style={styles.line}
        />
    )
}
const styles = StyleSheet.create({
    line: {
        borderTopWidth: 1 / PixelRatio.get(),
        borderBottomWidth: 1 / PixelRatio.get(),
        borderTopColor: '#f1f1f1',
        borderBottomColor: '#f1f1f1',
        backgroundColor: '#f2f2f2',
        height: 10,
    }
})