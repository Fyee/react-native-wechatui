import React,
{
    Component
} from 'react'
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    PixelRatio,
    ScrollView
} from 'react-native'
import MyHeader from '../../component/header'
import GlobalStyles from '../../utils/GlobalStyles'
import { ListItem } from 'react-native-elements'
import SplitLine from '../../component/line/SplitLine'
export default class MyInfo extends Component {
    render() {
        return (
            <View
                style={styles.container}
            >
                <MyHeader
                    title='个人信息'
                    left={
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Image
                                source={require('../../assets/icon/pages/common/back.png')}
                                style={GlobalStyles.headerIcon}
                            />
                        </TouchableOpacity>
                    }
                />
                <ScrollView>
                    <ListItem
                        title='头像'
                        titleStyle={styles.title}
                        rightAvatar={
                            <Image
                                source={require('../../assets/icon/pages/common/right.png')}
                                style={styles.rightIcon}
                            />
                        }
                        rightTitle={
                            <Image
                                source={{
                                    uri: 'https://picsum.photos/60/60/?266'
                                }}
                                style={styles.avatar}
                            />
                        }

                    />
                    <View style={{ backgroundColor: '#fff' }}>
                        <View style={styles.line} />
                    </View>
                    <ListItem
                        title='名字'
                        titleStyle={styles.title}
                        rightAvatar={
                            <Image
                                source={require('../../assets/icon/pages/common/right.png')}
                                style={styles.rightIcon}
                            />
                        }
                        rightTitle="ye"
                        rightTitleStyle={styles.rightTitle}
                    />
                    <View style={{ backgroundColor: '#fff' }}>
                        <View style={styles.line} />
                    </View>
                    <ListItem
                        title='微信号'
                        titleStyle={styles.title}
                        rightAvatar={
                            <Image
                                source={require('../../assets/icon/pages/common/right.png')}
                                style={styles.rightIcon}
                            />
                        }
                        rightTitle="ye123456465"
                        rightTitleStyle={styles.rightTitle}
                    />
                    <View style={{ backgroundColor: '#fff' }}>
                        <View style={styles.line} />
                    </View>
                    <ListItem
                        title='我的二维码'
                        titleStyle={styles.title}
                        rightAvatar={
                            <Image
                                source={require('../../assets/icon/pages/common/right.png')}
                                style={styles.rightIcon}
                            />
                        }
                        rightTitle={
                            <Image
                                source={require('../../assets/icon/pages/common/qrcode.png')}
                                style={styles.qrcode}
                            />
                        }
                    />
                    <View style={{ backgroundColor: '#fff' }}>
                        <View style={styles.line} />
                    </View>
                    <ListItem
                        title='更多'
                        titleStyle={styles.title}
                        rightAvatar={
                            <Image
                                source={require('../../assets/icon/pages/common/right.png')}
                                style={styles.rightIcon}
                            />
                        }
                    />
                    <SplitLine />
                    <ListItem
                        title='我的地址'
                        titleStyle={styles.title}
                        rightAvatar={
                            <Image
                                source={require('../../assets/icon/pages/common/right.png')}
                                style={styles.rightIcon}
                            />
                        }
                    />
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    title: {
        fontSize: 16,
        color: '#111'
    },
    rightIcon: {
        width: 15,
        height: 15,
        tintColor: '#666'
    },
    avatar: {
        width: 55,
        height: 55,
        borderRadius: 5
    },
    rightTitle: {
        fontSize: 15, color: '#666'
    },
    qrcode: {
        width: 20,
        height: 20,
        tintColor: '#666'
    },
    line: {
        height: 1 / PixelRatio.get(),
        backgroundColor: '#e4e4e4',
        marginLeft: 10
    }
})