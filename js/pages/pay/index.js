import React,
{
    Component
} from 'react'
import {
    View,
    Text,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native'
import MyHeader from '../../component/header'
import GlobalStyles from '../../utils/GlobalStyles'
import Panel from './component/panel'
export default class Pay extends Component {
    render() {
        return (
            <View
                style={styles.container}
            >
                <MyHeader
                    title='支付'
                    left={
                        < TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Image
                                source={require('../../assets/icon/pages/common/back.png')}
                                style={GlobalStyles.headerIcon}
                            />
                        </TouchableOpacity>
                    }
                    right={
                        < TouchableOpacity
                        >
                            <Image
                                source={require('../../assets/icon/pages/common/more.png')}
                                style={GlobalStyles.headerIcon}
                            />
                        </TouchableOpacity>
                    }
                />
                <ScrollView>
                    <Panel />
                </ScrollView>
            </View>
        )
    }
}
const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})