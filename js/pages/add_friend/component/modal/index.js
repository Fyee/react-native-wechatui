import React from 'react'
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import Modal from 'react-native-modal'
import MyQrCard from '../../../../component/qrcode/MyQrCard';
export default MyModal = (props) => {
    return (
        <Modal
            style={styles.container}
            animationIn="zoomInDown"
            animationOut="zoomOutUp"
            animationInTiming={500}
            animationOutTiming={500}
            backdropTransitionInTiming={500}
            backdropTransitionOutTiming={500}
            backdropOpacity={0.3}
            isVisible={props.isVisible}
            onBackdropPress={() => {
                props.closeModal()
            }}>
            <TouchableWithoutFeedback
                onPress={() => {
                    props.closeModal()
                }}
            >
                <View>
                    <MyQrCard />
                </View>
            </TouchableWithoutFeedback>
        </Modal >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})