import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import FriendList from './component/friend_list'
import MyHeader from '../../component/header'
import GlobalStyles from '../../utils/GlobalStyles'
export default class ContactScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <MyHeader
                    right={
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('AddFriend')}
                        >
                            <Image
                                source={require('../../assets/icon/pages/contact/add_friend.png')}
                                style={GlobalStyles.headerIcon}
                            />
                        </TouchableOpacity>
                    }
                    title='通讯录'
                />
                <FriendList />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})