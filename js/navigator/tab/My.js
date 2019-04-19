import React from 'react'
import { View, Text } from 'react-native'
import MyScreen from '../../pages/my'
export default My = (props) => {
    return (
        <MyScreen
            navigation={props.navigation}
        />
    )
}