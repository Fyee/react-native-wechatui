import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, PixelRatio } from 'react-native'
import MyHeader from '../../component/header'
import ChatItem from './component/chatItem'
import data from '../../data/ChatListData'
export default class MyMessage extends Component {
    constructor(props) {
        super(props)
        this.initState()
    }
    initState() {
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.setState({
            data
        })
    }
    _keyExtractor = (item, index) => item.id;
    _line = () => {
        return (
            <View style={{ backgroundColor: '#fff' }}>
                <View style={styles.separator} />
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <MyHeader
                    title='微信'
                />
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => <ChatItem data={item} navigation={this.props.navigation} />}
                    keyExtractor={this._keyExtractor}
                    ItemSeparatorComponent={
                        this._line
                    }
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    separator: {
        borderTopWidth: 1 / PixelRatio.get(),
        marginLeft: 80,
        borderColor: '#eee',
    }

})