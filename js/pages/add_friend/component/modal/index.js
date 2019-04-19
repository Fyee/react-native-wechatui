import React from 'react'
import { View, Image, Text, TouchableWithoutFeedback, Dimensions, StyleSheet } from 'react-native'
import Modal from 'react-native-modal'
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
                <View style={styles.content}>
                    <View style={styles.headerContainer}>
                        <Image
                            source={{ uri: 'https://picsum.photos/60/60/?266' }}
                            style={styles.avatar}
                        />
                        <View style={styles.infoContainer}>
                            <View style={styles.nameWrapper}>
                                <Text style={styles.name}>ye</Text>
                                <Image
                                    source={require('../../../../assets/icon/pages/common/man.png')}
                                    style={styles.sexIcon}
                                />
                            </View>
                            <Text style={styles.address}>安徽 合肥</Text>
                        </View>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <View
                            style={{
                                width: width - 90,
                                height: width - 90,
                                backgroundColor: '#87c0cd',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <Text style={{ fontSize: 16, color: '#333' }}>假装这是一个二维码</Text>
                        </View>
                    </View>
                    <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 10, color: '#999' }}>扫一扫上面的二维码图案，加我微信</Text>
                </View>
            </TouchableWithoutFeedback>

        </Modal >
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
        height: (width - 60) * 1.3,
        backgroundColor: '#fff',
        borderRadius: 5,

    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15
    },
    avatar: {
        width: 55,
        height: 55,
        borderRadius: 5
    },
    infoContainer: {
        marginLeft: 10
    },
    nameWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontSize: 14,
        fontWeight: '600',
        color: '#010101'
    },
    address: {
        fontSize: 10,
        color: '#666',
        marginTop: 10
    },
    sexIcon: {
        width: 10,
        height: 10,
        tintColor: '#1296db',
        marginLeft: 5
    }
})