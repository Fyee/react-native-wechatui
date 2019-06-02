import React from 'react'
import { View, Image, StyleSheet, PixelRatio } from 'react-native'
import { ListItem } from 'react-native-elements'
import ListLine from '../../../../component/line/ListLine'
export default FeatureList = (props) => {
    return (
        <View>
            <ListItem
                leftAvatar={
                    <View style={{ ...styles.iconWrapper, backgroundColor: '#8158fc' }}>
                        <Image
                            source={require('../../../../assets/icon/pages/common/radar.png')}
                            style={styles.icon}
                        />
                    </View>
                }
                title='雷达添加朋友'
                subtitle='添加身边的朋友'
                titleStyle={styles.title}
                subtitleStyle={styles.subtitle}
                rightAvatar={
                    <Image
                        source={require('../../../../assets/icon/pages/common/right.png')}
                        style={styles.rightIcon}
                    />
                }
                containerStyle={styles.container}
            />
            <ListLine />
            <ListItem
                leftAvatar={
                    <View style={{ ...styles.iconWrapper, backgroundColor: '#1AAD19' }}>
                        <Image
                            source={require('../../../../assets/icon/pages/common/group.png')}
                            style={styles.icon}
                        />
                    </View>
                }
                title='面对面建群'
                subtitle='与身边的朋友进入同一个群聊'
                titleStyle={styles.title}
                subtitleStyle={styles.subtitle}
                rightAvatar={
                    <Image
                        source={require('../../../../assets/icon/pages/common/right.png')}
                        style={styles.rightIcon}
                    />
                }
                containerStyle={styles.container}
            />
            <ListLine />
            <ListItem
                leftAvatar={
                    <View style={{ ...styles.iconWrapper, backgroundColor: '#2782D7' }}>
                        <Image
                            source={require('../../../../assets/icon/pages/common/scan.png')}
                            style={styles.icon}
                        />
                    </View>
                }
                title='扫一扫'
                subtitle='扫描二维码名片'
                titleStyle={styles.title}
                subtitleStyle={styles.subtitle}
                rightAvatar={
                    <Image
                        source={require('../../../../assets/icon/pages/common/right.png')}
                        style={styles.rightIcon}
                    />
                }
                containerStyle={styles.container}
                onPress={() => props.navigation.navigate('Scan')}
            />
            <ListLine />
            <ListItem
                leftAvatar={
                    <View style={{ ...styles.iconWrapper, backgroundColor: '#1AAD19' }}>
                        <Image
                            source={require('../../../../assets/icon/pages/common/phone.png')}
                            style={styles.icon}
                        />
                    </View>
                }
                title='手机联系人'
                subtitle='添加通讯录中的朋友'
                titleStyle={styles.title}
                subtitleStyle={styles.subtitle}
                rightAvatar={
                    <Image
                        source={require('../../../../assets/icon/pages/common/right.png')}
                        style={styles.rightIcon}
                    />
                }
                containerStyle={styles.container}
            />
            <ListLine />
            <ListItem
                leftAvatar={
                    <View style={{ ...styles.iconWrapper, backgroundColor: '#2782D7' }}>
                        <Image
                            source={require('../../../../assets/icon/pages/common/public.png')}
                            style={styles.icon}
                        />
                    </View>
                }
                title='公众号'
                subtitle='获取更多资讯和服务'
                titleStyle={styles.title}
                subtitleStyle={styles.subtitle}
                rightAvatar={
                    <Image
                        source={require('../../../../assets/icon/pages/common/right.png')}
                        style={styles.rightIcon}
                    />
                }
                containerStyle={styles.container}
            />
            <ListLine />
            <ListItem
                leftAvatar={
                    <View style={{ ...styles.iconWrapper, backgroundColor: '#2782D7' }}>
                        <Image
                            source={require('../../../../assets/icon/pages/common/wechatC.png')}
                            style={styles.icon}
                        />
                    </View>
                }
                title='企业微信联系人'
                subtitle='通过手机号搜索企业微信用户'
                titleStyle={styles.title}
                subtitleStyle={styles.subtitle}
                rightAvatar={
                    <Image
                        source={require('../../../../assets/icon/pages/common/right.png')}
                        style={styles.rightIcon}
                    />
                }
                containerStyle={styles.container}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    iconWrapper: {
        width: 22,
        height: 22,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 16,
        height: 16,
        tintColor: '#fff'
    },
    rightIcon: {
        width: 14,
        height: 14,
        tintColor: '#666'
    },
    title: {
        color: '#333',
        fontSize: 16,
        marginVertical: 5
    },
    subtitle: {
        color: '#666',
        fontSize: 13,
    },
    container: {
        height: 70
    },
    line: {
        height: 1 / PixelRatio.get(),
        backgroundColor: '#f1f1f1',
        marginLeft: 50
    }
})