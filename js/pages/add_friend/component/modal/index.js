import React from 'react'
import { View, TouchableWithoutFeedback, Dimensions, StyleSheet } from 'react-native'
import Modal from 'react-native-modal'
export default MyModal = (props) => {
    return (
        <Modal
            style={styles.container}
            animationIn="zoomInDown"
            animationOut="zoomOutUp"
            animationInTiming={1000}
            animationOutTiming={1000}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={1000}
            isVisible={props.isVisible}
            onBackdropPress={() => {
                props.closeModal()
            }}>
            <TouchableWithoutFeedback
                onPress={() => {
                    props.closeModal()
                }}
            >
                <View style={styles.content}>

                </View>
            </TouchableWithoutFeedback>

        </Modal>
    )
}
const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        width: width - 60,
        height: 400,
        backgroundColor: '#fff'
    }
})