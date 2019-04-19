import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import { Header, Right } from 'native-base'
import { ListItem } from 'react-native-elements'
import SplitLine from '../../component/line/SplitLine'
import ListLine from '../../component/line/ListLine'
export default MyScreen = (props) => {
    return (
        <View style={styles.container}>
            <Header style={styles.headerWrapper}>
                <Right>
                    <Image
                        source={require('../../assets/icon/pages/my/camera.png')}
                        style={styles.headerIcon}
                    />
                </Right>
            </Header>
            <ScrollView>
                <ListItem
                    leftAvatar={
                        <Image
                            source={{
                                uri: 'https://picsum.photos/60/60/?266'
                            }}
                            style={styles.headerLeftIcon}
                        />
                    }
                    title="ye"
                    titleStyle={styles.headerTitle}
                    subtitle='微信号：ye12345679'
                    subtitleProps={{ numberOfLines: 1 }}
                    subtitleStyle={styles.headerSubTitle}
                    rightAvatar={
                        <Image
                            source={require('../../assets/icon/pages/common/right.png')}
                            style={styles.headerRightIcon}
                        />
                    }
                    rightTitle={
                        <Image
                            source={require('../../assets/icon/pages/common/qrcode.png')}
                            style={styles.headerRightTitle}
                        />
                    }
                    containerStyle={styles.headerContainer}
                />
                <SplitLine />
                <ListItem
                    leftAvatar={
                        <Image
                            source={require('../../assets/icon/pages/my/pay.png')}
                            style={styles.leftIcon}
                        />
                    }
                    title='支付'
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
                    leftAvatar={
                        <Image
                            source={require('../../assets/icon/pages/my/fav.png')}
                            style={styles.leftIcon}
                        />
                    }
                    title='收藏'
                    titleStyle={styles.title}
                    rightAvatar={
                        <Image
                            source={require('../../assets/icon/pages/common/right.png')}
                            style={styles.rightIcon}
                        />
                    }
                />
                <ListLine />
                <ListItem
                    leftAvatar={
                        <Image
                            source={require('../../assets/icon/pages/my/pic.png')}
                            style={styles.leftIcon}
                        />
                    }
                    title='相册'
                    titleStyle={styles.title}
                    rightAvatar={
                        <Image
                            source={require('../../assets/icon/pages/common/right.png')}
                            style={styles.rightIcon}
                        />
                    }
                />
                <ListLine />
                <ListItem
                    leftAvatar={
                        <Image
                            source={require('../../assets/icon/pages/my/card.png')}
                            style={styles.leftIcon}
                        />
                    }
                    title='卡包'
                    titleStyle={styles.title}
                    rightAvatar={
                        <Image
                            source={require('../../assets/icon/pages/common/right.png')}
                            style={styles.rightIcon}
                        />
                    }
                />
                <ListLine />
                <ListItem
                    leftAvatar={
                        <Image
                            source={require('../../assets/icon/pages/my/emojy.png')}
                            style={styles.leftIcon}
                        />
                    }
                    title='表情'
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
                    leftAvatar={
                        <Image
                            source={require('../../assets/icon/pages/my/setting.png')}
                            style={styles.leftIcon}
                        />
                    }
                    title='设置'
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    headerWrapper: {
        borderBottomWidth: 0,
        backgroundColor: '#fff'
    },
    headerIcon: {
        width: 23,
        height: 23,
        tintColor: '#333'
    },
    headerLeftIcon: {
        width: 60,
        height: 60,
        borderRadius: 5
    },
    headerTitle: {
        fontSize: 17, color: '#111', fontWeight: '600'
    },
    headerSubTitle: {
        fontSize: 16, color: '#666', marginTop: 10
    },
    headerRightIcon: {
        width: 15, height: 15, tintColor: '#666'

    },
    headerRightTitle: {
        width: 13, height: 13, tintColor: '#666'
    },
    headerContainer: {
        height: 120
    },
    leftIcon: {
        width: 25,
        height: 25
    },
    rightIcon: {
        width: 15,
        height: 15,
        tintColor: '#666'
    },
    title: {
        fontSize: 16,
        color: '#222'
    },
})