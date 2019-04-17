import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Header from './component/header'
import Search from './component/search'
export default class ContactScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation} />
                <Search />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})