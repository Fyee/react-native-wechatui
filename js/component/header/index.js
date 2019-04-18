import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { Header, Body, Title, Right, Left } from 'native-base'
import GlobalStyles from '../../utils/GlobalStyles'
export default MyHeader = (props) => {
    return (
        <Header style={{ borderBottomWidth: 0, backgroundColor: '#F1F1F1' }}>
            <Left>
                {
                    props.left
                }
            </Left>
            <Body>
                <Title style={GlobalStyles.headerTitle}>{props.title}</Title>
            </Body>
            <Right>
                {
                    props.right
                }
            </Right>
        </Header>
    )
}

