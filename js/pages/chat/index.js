import React, { Component } from 'react'
import { View, Text } from 'react-native'
export default class Chat extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Text>聊天界面</Text>
            </View>
        )
    }
}