import React from 'react'
import {
    View, Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native'
export default Panel = (props) => {
    return (
        <View
            style={styles.container}
        >
            <View style={styles.panel}>
                <TouchableOpacity style={styles.iconWrapper}>
                    <Image
                        source={require('../../../../assets/icon/pages/pay/shouqian.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.title}>收付款</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconWrapper}>
                    <Image
                        source={require('../../../../assets/icon/pages/pay/qianbao.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.title}>钱包</Text>
                    <Text style={styles.subtitle}>¥3.54</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        alignItems: 'center', justifyContent: 'center'
    },
    panel: {
        width: width - 20,
        height: 130,
        backgroundColor: '#4fb783',
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row'
    },
    iconWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 40,
        height: 40,
        tintColor: '#fff'
    },
    title: {
        fontSize: 14,
        color: '#fff',
        marginTop: 10,
    },
    subtitle: {
        fontSize: 12,
        color: '#b7e1b5',
        position: 'absolute',
        top: 100
    }
})