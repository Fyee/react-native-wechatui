import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Header from './component/header'
import FriendList from './component/friend_list'
export default class ContactScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation} />
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