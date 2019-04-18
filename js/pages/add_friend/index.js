import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, } from 'react-native'
import MyHeader from '../../component/header'
import GlobalStyles from '../../utils/GlobalStyles'
import Search from './component/search'
import FeatureList from './component/feature_list'
import Modal from './component/modal'
export default class AddFriend extends React.Component {
    constructor(props) {
        super(props)
        this.initState()
    }
    initState() {
        this.state = {
            isVisible: false
        }
    }
    closeModal = () => {
        this.setState({
            isVisible: false
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <MyHeader
                    left={
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Image
                                source={require('../../assets/icon/pages/common/back.png')}
                                style={GlobalStyles.headerIcon}
                            />
                        </TouchableOpacity>
                    }
                    title='添加朋友'
                />
                <ScrollView>
                    <Search />
                    <View style={styles.myWechatWrapper}>
                        <Text style={styles.myWechatText}>我的微信号：yejunbo</Text>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    isVisible: true
                                })
                            }}
                        >
                            <Image
                                source={require('../../assets/icon/pages/common/qrcode.png')}
                                style={styles.myWechatIcon}
                            />
                        </TouchableOpacity>
                    </View>
                    <FeatureList />
                </ScrollView>
                <Modal isVisible={this.state.isVisible} closeModal={this.closeModal} />
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1'
    },
    myWechatWrapper: {
        height: 55,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    myWechatText: {
        fontSize: 13,
        color: '#333',
        marginTop: 8,
        fontWeight: '500'
    },
    myWechatIcon: {
        width: 13,
        height: 13,
        tintColor: 'green',
        marginLeft: 10,
        marginTop: 8
    }
})