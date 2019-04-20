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
        borderTopColor: '#e4e4e4',
        borderBottomColor: '#e4e4e4',
        backgroundColor: 'transparent',
        height: 10,
    }
})