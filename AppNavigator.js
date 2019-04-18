import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { createBottomTabNavigator, createStackNavigator, } from 'react-navigation'
import Message from './js/navigator/tab/Message'
import Contact from './js/navigator/tab/Contact'
import Find from './js/navigator/tab/Find'
import My from './js/navigator/tab/My'
import AddFriend from './js/pages/add_friend'
const Tabs = {
    Message: {
        screen: Message,
        navigationOptions: {
            tabBarLabel: '微信',
        }
    },
    Contact: {
        screen: Contact,
        navigationOptions: {
            tabBarLabel: '联系人',
        }
    },
    Find: {
        screen: Find,
        navigationOptions: {
            tabBarLabel: '发现',
        }
    },
    My: {
        screen: My,
        navigationOptions: {
            tabBarLabel: '我',
        }
    }
}
const BottomTabs = createBottomTabNavigator(Tabs, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor, focused }) => {
            const { routeName } = navigation.state
            if (routeName === 'Message') {
                if (focused) {
                    return <Image source={require('./js/assets/icon/navigator/message_fill.png')} style={{ ...styles.icon, tintColor }} />
                }
                return <Image source={require('./js/assets/icon/navigator/message.png')} style={{ ...styles.icon, tintColor }} />
            } else if (routeName === 'Contact') {
                if (focused) {
                    return <Image source={require('./js/assets/icon/navigator/contact_fill.png')} style={{ ...styles.icon, tintColor }} />
                }
                return <Image source={require('./js/assets/icon/navigator/contact.png')} style={{ ...styles.icon, tintColor }} />
            } else if (routeName === 'Find') {
                if (focused) {
                    return <Image source={require('./js/assets/icon/navigator/find_fill.png')} style={{ ...styles.icon, tintColor }} />
                }
                return <Image source={require('./js/assets/icon/navigator/find.png')} style={{ ...styles.icon, tintColor }} />
            } else if (routeName === 'My') {
                if (focused) {
                    return <Image source={require('./js/assets/icon/navigator/my_fill.png')} style={{ ...styles.icon, tintColor }} />
                }
                return <Image source={require('./js/assets/icon/navigator/my.png')} style={{ ...styles.icon, tintColor }} />
            }
        }
    }),
    tabBarOptions: {
        activeTintColor: '#1AAD19',
        inactiveTintColor: '#010101',
        style: { backgroundColor: '#F1F1F1', height: 50, justifyContent: 'center', paddingBottom: 5 },
        labelStyle: {
            fontSize: 10,
            fontWeight: '400'
        }
    }
})
const styles = StyleSheet.create({
    icon: {
        width: 25,
        height: 25
    }
})
const HomeStack = createStackNavigator(
    {
        BottomTabs,
        AddFriend
    }, {
        defaultNavigationOptions: {
            header: null
        }
    }

)
export default HomeStack