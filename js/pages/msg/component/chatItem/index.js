import React from 'react'
import { View, Text, Image } from 'react-native'
import { ListItem } from 'react-native-elements'
export default ChatItem = (props) => {
    const { title, subtitle, msgCount, time, avatar } = props.data
    return (
        <ListItem
            leftAvatar={
                <Image
                    source={{ uri: avatar }}
                    style={{ width: 55, height: 55, borderRadius: 5 }}
                />
            }
            title={title}
            subtitle={`[${msgCount}条]${subtitle}`}
            titleStyle={{ fontSize: 16, color: '#333', marginBottom: 15 }}
            titleProps={{ numberOfLines: 1 }}
            subtitleStyle={{ fontSize: 12, color: '#666' }}
            subtitleProps={{ numberOfLines: 1, }}
            rightElement={
                <Text style={{ fontSize: 10, color: '#666', marginBottom: 35 }}>{time}</Text>
            }
            onPress={() => props.navigation.navigate('Chat')}
        />
    )
}