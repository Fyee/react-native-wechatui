import React from 'react'
import { View, StyleSheet, Image, PixelRatio } from 'react-native'
import { ListItem } from 'react-native-elements'
export default FeatureList = (props) => {
    return (
        <View>
            <ListItem
                leftAvatar={
                    <View style={{ ...styles.iconWrapper, backgroundColor: '#ffb228' }}>
                        <Image
                            source={require('../../../../../../../../assets/icon/pages/common/new_friend.png')}
                            style={styles.icon}
                        />
                    </View>
                }
                title="新的朋友"
                titleStyle={styles.title}
                containerStyle={styles.listStyle}
            />
            <View style={styles.line} />
            <ListItem
                leftAvatar={
                    <View style={{ ...styles.iconWrapper, backgroundColor: '#1AAD19' }}>
                        <Image
                            source={require('../../../../../../../../assets/icon/pages/common/group.png')}
                            style={styles.icon}
                        />
                    </View>
                }
                title="群聊"
                titleStyle={styles.title}
                containerStyle={styles.listStyle}
            />
            <View style={styles.line} />
            <ListItem
                leftAvatar={
                    <View style={{ ...styles.iconWrapper, backgroundColor: '#2782D7' }}>
                        <Image
                            source={require('../../../../../../../../assets/icon/pages/common/label.png')}
                            style={styles.icon}
                        />
                    </View>
                }
                title="标签"
                titleStyle={styles.title}
                containerStyle={styles.listStyle}
            />
            <View style={styles.line} />
            <ListItem
                leftAvatar={
                    <View style={{ ...styles.iconWrapper, backgroundColor: '#2782D7' }}>
                        <Image
                            source={require('../../../../../../../../assets/icon/pages/common/public.png')}
                            style={styles.icon}
                        />
                    </View>
                }
                title="公众号"
                titleStyle={styles.title}
                containerStyle={styles.listStyle}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    iconWrapper: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 3
    },
    icon: {
        width: 25,
        height: 25,
        tintColor: '#fff'
    },
    title: {
        color: '#010101',
        fontSize: 15,
        fontWeight: '400'
    },
    listStyle: {
        height: 60
    },
    line: {
        height: 1 / PixelRatio.get(),
        backgroundColor: '#f1f1f1',
        marginLeft: 70
    }
})