import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, PanResponder } from "react-native";
import _ from 'lodash'
const AlphaHeight = 20
export default class Alphabet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            compareIndex: -1,
            selectAlphabet: ''
        }
    }
    getStartHeight = () => {
        //计算 字母表的整体高度 20为每个字母view的height
        const alphabetHeight = this.props.alphabet.length * AlphaHeight
        //计算字母表开始的字母,距离屏幕顶部的距离
        const startHeight = (height - alphabetHeight) / 2 + 10
        return startHeight
    }
    componentWillMount() {

        this._panResponder = PanResponder.create({
            // 要求成为响应者：
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

            onPanResponderGrant: (evt, gestureState) => {
                // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
                // gestureState.{x,y} 现在会被设置为0
                //获取触摸开始时点击的高度
                const touchHeight = gestureState.y0;
                //获取字母表下标 (触摸点的高度 - 距离屏幕顶部的高度/每个字母的高度)
                const index = _.floor((touchHeight - this.getStartHeight()) / AlphaHeight)
                //触发滚动到指定位置的方法
                const alphabetLength = this.props.alphabet.length
                let compareIndex = this.state.compareIndex
                if (index >= 0 && index < alphabetLength) {
                    if (index != compareIndex) {
                        this.props.handlerClick(index)
                        // if (compareIndex !== -1) {
                        //     this[`item-${compareIndex}`].setNativeProps({ style: { backgroundColor: 'transparent' } });
                        //     this[`text-${compareIndex}`].setNativeProps({ style: { color: '#333' } });
                        // }
                        // this[`item-${index}`].setNativeProps({ style: { backgroundColor: '#1AAD19' } });
                        // this[`text-${index}`].setNativeProps({ style: { color: '#fff' } });
                        this.setState({
                            selectAlphabet: this.props.alphabet[index]
                        })
                    }
                    this.setState({
                        compareIndex: index
                    })
                }
            },
            onPanResponderMove: (evt, gestureState) => {
                // 最近一次的移动距离为gestureState.move{X,Y}
                const moveHeight = gestureState.moveY
                const index = _.floor((moveHeight - this.getStartHeight()) / AlphaHeight)
                const alphabetLength = this.props.alphabet.length
                let compareIndex = this.state.compareIndex
                if (index >= 0 && index < alphabetLength) {
                    if (index != compareIndex) {
                        this.props.handlerClick(index)
                        // if (compareIndex !== -1) {
                        //     this[`item-${compareIndex}`].setNativeProps({ style: { backgroundColor: 'transparent' } });
                        //     this[`text-${compareIndex}`].setNativeProps({ style: { color: '#333' } });
                        // }
                        // this[`item-${index}`].setNativeProps({ style: { backgroundColor: '#1AAD19' } });
                        // this[`text-${index}`].setNativeProps({ style: { color: '#fff' } });
                        this.setState({
                            selectAlphabet: this.props.alphabet[index]
                        })
                    }
                    this.setState({
                        compareIndex: index
                    })
                }
                // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
            },
            //设置为false 防止滑动时终止滑动事件
            onPanResponderTerminationRequest: (evt, gestureState) => false,
            onPanResponderRelease: (evt, gestureState) => {
                // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
                // 一般来说这意味着一个手势操作已经成功完成。
                this.setState({
                    selectAlphabet: ''
                })
            },
            onPanResponderTerminate: (evt, gestureState) => {
                // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
                console.log(gestureState)
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
                // 默认返回true。目前暂时只支持android。
                return true;
            },
        });
    }
    renderAlphabetStyle(newIndex, oldIndex) {
        if (oldIndex >= 0) {
            this[`item-${oldIndex}`].setNativeProps({ style: { backgroundColor: 'transparent' } });
            this[`text-${oldIndex}`].setNativeProps({ style: { color: '#333' } });
        }
        if (newIndex >= 0) {
            this[`item-${newIndex}`].setNativeProps({ style: { backgroundColor: '#1AAD19' } });
            this[`text-${newIndex}`].setNativeProps({ style: { color: '#fff' } });
        }

    }
    render() {
        return (
            <View style={styles.container} pointerEvents='box-none'
                {...this._panResponder.panHandlers}
            >
                <View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                    pointerEvents='box-none'
                >
                    {this.state.selectAlphabet ? <View style={{
                        width: 80, height: 80, backgroundColor: '#ccc',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 20,
                    }}
                        pointerEvents='box-none'
                    >
                        <Text style={{ fontSize: 36, fontWeight: '700', color: '#fff' }}>{this.state.selectAlphabet}</Text>
                    </View> : <View />}
                </View>
                {this.props.alphabet.map((item, index) => {
                    return (
                        <View
                            ref={(thisItem) => this[`item-${index}`] = thisItem}
                            key={item}
                            style={styles.alphabet}>
                            <Text style={styles.text} ref={(thistext) => this[`text-${index}`] = thistext}>{item}</Text>
                        </View>
                    );
                })}
            </View>
        );
    }
}
const { height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    alphabet: {
        width: 20,
        height: AlphaHeight,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'transparent',
    },
    text: {
        color: '#333',
        fontSize: 10,
        fontWeight: '600'
    }
});
