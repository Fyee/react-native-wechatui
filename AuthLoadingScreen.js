import React, { Component } from "react";
import {
    StyleSheet,
    AsyncStorage,
    View,
    Text
} from 'react-native';
export default class AuthLoadingScreen extends Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }
    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const token = true;
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        setTimeout(() => {
            if (token) {
                this.props.navigation.navigate('HomeStack');
            } else {
                this.props.navigation.navigate('AuthStack');
            }
        }, 1000)

    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>Fyee</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#fff'
    },
    textStyle: {
        color: '#999',
        fontSize: 14,
        marginBottom: 10,
    }
})