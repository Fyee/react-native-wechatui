import React, { Component } from 'react'
import { View, Image, StyleSheet, ScrollView, PixelRatio } from 'react-native'
import MyHeader from '../../component/header'
import { ListItem } from 'react-native-elements'
export default class FindScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <MyHeader
                    title='发现'
                />
                <ScrollView>
                    <ListItem
                        leftAvatar={
                            <Image
                                source={require('../../assets/icon/pages/find/friend_cricle.png')}
                                style={styles.leftIcon}
                            />
                        }
                        title='朋友圈'
                        titleStyle={styles.title}
                        rightAvatar={
                            <Image
                                source={require('../../assets/icon/pages/common/right.png')}
                                style={styles.rightIcon}
                            />
                        }
                    />
                    <View
                        style={styles.line}
                    />
                    <ListItem
                        leftAvatar={
                            <Image
                                source={require('../../assets/icon/pages/find/saoyisao.png')}
                                style={styles.leftIcon}
                            />
                        }
                        title='扫一扫'
                        titleStyle={styles.title}
                        rightAvatar={
                            <Image
                                source={require('../../assets/icon/pages/common/right.png')}
                                style={styles.rightIcon}
                            />
                        }
                    />
                    <View style={{ backgroundColor: '#fff' }}>
                        <View style={styles.line2} />
                    </View>
                    <ListItem
                        leftAvatar={
                            <Image
                                source={require('../../assets/icon/pages/find/yaoyiyao.png')}
                                style={styles.leftIcon}
                            />
                        }
                        title='摇一摇'
                        titleStyle={styles.title}
                        rightAvatar={
                            <Image
                                source={require('../../assets/icon/pages/common/right.png')}
                                style={styles.rightIcon}
                            />
                        }
                    />
                    <View
                        style={styles.line}
                    />
                    <ListItem
                        leftAvatar={
                            <Image
                                source={require('../../assets/icon/pages/find/kanyikan.png')}
                                style={styles.leftIcon}
                            />
                        }
                        title='看一看'
                        titleStyle={styles.title}
                        rightAvatar={
                            <Image
                                source={require('../../assets/icon/pages/common/right.png')}
                                style={styles.rightIcon}
                            />
                        }
                    />
                    <View style={{ backgroundColor: '#fff' }}>
                        <View style={styles.line2} />
                    </View>
                    <ListItem
                        leftAvatar={
                            <Image
                                source={require('../../assets/icon/pages/find/souyisou.png')}
                                style={styles.leftIcon}
                            />
                        }
                        title='搜一搜'
                        titleStyle={styles.title}
                        rightAvatar={
                            <Image
                                source={require('../../assets/icon/pages/common/right.png')}
                                style={styles.rightIcon}
                            />
                        }
                    />
                    <View
                        style={styles.line}
                    />
                    <ListItem
                        leftAvatar={
                            <Image
                                source={require('../../assets/icon/pages/find/people.png')}
                                style={styles.leftIcon}
                            />
                        }
                        title='附近的人'
                        titleStyle={styles.title}
                        rightAvatar={
                            <Image
                                source={require('../../assets/icon/pages/common/right.png')}
                                style={styles.rightIcon}
                            />
                        }
                    />
                    <View
                        style={styles.line}
                    />
                    <ListItem
                        leftAvatar={
                            <Image
                                source={require('../../assets/icon/pages/find/shopping.png')}
                                style={styles.leftIcon}
                            />
                        }
                        title='购物'
                        titleStyle={styles.title}
                        rightAvatar={
                            <Image
                                source={require('../../assets/icon/pages/common/right.png')}
                                style={styles.rightIcon}
                            />
                        }
                    />
                    <View style={{ backgroundColor: '#fff' }}>
                        <View style={styles.line2} />
                    </View>
                    <ListItem
                        leftAvatar={
                            <Image
                                source={require('../../assets/icon/pages/find/game.png')}
                                style={styles.leftIcon}
                            />
                        }
                        title='游戏'
                        titleStyle={styles.title}
                        rightAvatar={
                            <Image
                                source={require('../../assets/icon/pages/common/right.png')}
                                style={styles.rightIcon}
                            />
                        }
                    />
                    <View
                        style={styles.line}
                    />
                    <ListItem
                        leftAvatar={
                            <Image
                                source={require('../../assets/icon/pages/find/prog.png')}
                                style={styles.leftIcon}
                            />
                        }
                        title='小程序'
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
        backgroundColor: '#f5f5f5'
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
    line: {
        borderTopWidth: 1 / PixelRatio.get(),
        borderBottomWidth: 1 / PixelRatio.get(),
        borderTopColor: '#f1f1f1',
        borderBottomColor: '#f1f1f1',
        height: 10,
    },
    line2: {
        height: 1 / PixelRatio.get(),
        backgroundColor: '#f1f1f1',
        marginLeft: 50
    }
})