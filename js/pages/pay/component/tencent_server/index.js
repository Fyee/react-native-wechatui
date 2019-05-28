import React from 'react'
import { View, Image, Text, Dimensions, StyleSheet, PixelRatio } from 'react-native'

export default TencentServer = (props) => {
    return (
        <View
            style={styles.container}>
            <View style={styles.content}>
                <View style={styles.title}>
                    <Text style={styles.text}>腾讯服务</Text>
                </View>
                <View style={styles.squareWrapper}>
                    <View style={{ ...styles.square, borderRightWidth: 1 / PixelRatio.get(), borderBottomWidth: 1 / PixelRatio.get(), }}>
                        <Image source={require('../../../../assets/icon/pages/pay/huankuan.png')} style={styles.icon} />
                        <Text style={styles.iconText}>信用卡还款</Text>
                    </View>
                    <View style={{ ...styles.square, borderBottomWidth: 1 / PixelRatio.get() }}>
                        <Image source={require('../../../../assets/icon/pages/pay/jieqian.png')} style={styles.icon} />
                        <Text style={styles.iconText}>微粒贷借钱</Text>
                    </View>
                    <View style={{ ...styles.square, borderBottomWidth: 1 / PixelRatio.get(), borderLeftWidth: 1 / PixelRatio.get() }}>
                        <Image source={require('../../../../assets/icon/pages/pay/shouji.png')} style={styles.icon} />
                        <Text style={styles.iconText}>手机充值</Text>
                    </View>
                    <View style={{ ...styles.square, borderRightWidth: 1 / PixelRatio.get(), borderBottomWidth: 1 / PixelRatio.get() }}>
                        <Image source={require('../../../../assets/icon/pages/pay/licai.png')} style={styles.icon} />
                        <Text style={styles.iconText}>理财通</Text>
                    </View>
                    <View style={{ ...styles.square, borderBottomWidth: 1 / PixelRatio.get() }}>
                        <Image source={require('../../../../assets/icon/pages/pay/shenghuo.png')} style={styles.icon} />
                        <Text style={styles.iconText}>生活缴费</Text>
                    </View>
                    <View style={{ ...styles.square, borderBottomWidth: 1 / PixelRatio.get(), borderLeftWidth: 1 / PixelRatio.get() }}>
                        <Image source={require('../../../../assets/icon/pages/pay/QQ.png')} style={styles.icon} />
                        <Text style={styles.iconText}>Q币充值</Text>
                    </View>
                    <View style={{ ...styles.square, borderRightWidth: 1 / PixelRatio.get() }}>
                        <Image source={require('../../../../assets/icon/pages/pay/chengshi.png')} style={styles.icon} />
                        <Text style={styles.iconText}>城市服务</Text>
                    </View>
                    <View style={{ ...styles.square }}>
                        <Image source={require('../../../../assets/icon/pages/pay/gongyi.png')} style={styles.icon} />
                        <Text style={styles.iconText}>腾讯公益</Text>
                    </View>
                    <View style={{ ...styles.square, borderLeftWidth: 1 / PixelRatio.get() }}>
                        <Image source={require('../../../../assets/icon/pages/pay/baoxian.png')} style={styles.icon} />
                        <Text style={styles.iconText}>保险服务</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const { width } = Dimensions.get('window');
const squareWidth = (width - 20) / 3
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    content: {
        height: squareWidth * 3 + 40,
        width: width - 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 10
    },
    title: {
        height: 40,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#ddd',
        justifyContent: 'center'
    },
    text: {
        fontSize: 13,
        color: '#666',
        marginLeft: 10
    },
    squareWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        display: 'flex',
    },
    square: {
        width: squareWidth,
        height: squareWidth,
        borderColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconText: {
        fontSize: 14,
        color: '#333',
        marginTop: 15
    },
    icon: {
        width: 30,
        height: 30
    }
})