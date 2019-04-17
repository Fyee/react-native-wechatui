import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { Header, Body, Title, Right, Left } from 'native-base'
import GlobalStyles from '../../../../common/utils/GlobalStyles'
export default MyHeader = (props) => {
    return (
        <Header style={{ borderBottomWidth: 0, backgroundColor: '#F1F1F1' }}>
            <Left></Left>
            <Body>
                <Title style={GlobalStyles.headerTitle}>通讯录</Title>
            </Body>
            <Right>
                <TouchableOpacity>
                    <Image
                        source={require('../../../../assets/icon/pages/contact/add_friend.png')}
                        style={GlobalStyles.headerIcon}
                    />
                </TouchableOpacity>
            </Right>
        </Header>
    )
}
