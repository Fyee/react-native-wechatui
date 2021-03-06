import React, { Component } from 'react'
import { View, Text, SectionList, StyleSheet, Image, PixelRatio, } from 'react-native'
import { ListItem } from 'react-native-elements'
import Search from './Search'
import FeatureList from './FeatureList'
import FriendListData from '../../../../data/FriendListData'
import Alphabet from './Alphabet'
import _ from 'lodash'
const ITEM_HEIGHT = 60
let flagAlphabet = ''
export default class FriendList extends Component {
    constructor(props) {
        super(props)
        this.initState()
        this.calculationAlphabetHeight = this.calculationAlphabetHeight.bind(this)
        this.getAlphabetWithScrollY = this.getAlphabetWithScrollY.bind(this)
    }
    initState() {
        this.state = {
            data: [],
            alphabet: [],
            alphabetHeigthMap: {},
        }
    }
    _getListItem = ({ item }) => {
        return (
            <ListItem
                leftAvatar={
                    <Image
                        source={{ uri: item.avatar }}
                        style={styles.avatar}
                    />
                }
                title={item.name}
                titleStyle={styles.title}
                containerStyle={styles.list}
            />
        )
    }
    _sectionHeader = ({ section: { title } }) => {
        return (
            <View
                ref={(thistext) => this[`header${title}`] = thistext}
                style={styles.sectionHeader}
            >
                <Text style={styles.sectionHeaderText}
                    ref={(thistext) => this[`text${title}`] = thistext}
                >{title}</Text>
            </View>
        )
    }
    _handleScroll = (event) => {
        //1.初始第一个字母距离屏幕header为290
        let offset = 290
        //2.获取滚动的距离
        let scrollY = event.nativeEvent.contentOffset.y
        let alphabet = this.getAlphabetWithScrollY(scrollY)
        if (scrollY < 290) {
            this[`headerA`].setNativeProps({ style: { backgroundColor: '#f1f1f1' } })
            this[`textA`].setNativeProps({ style: { color: '#666' } })
            this.refs.handerAlphabetMethod.renderAlphabetStyle(-1, 0)
        }
        if (alphabet !== undefined) {
            let newIndex = _.findIndex(this.state.alphabet, (item) => { return item === alphabet })
            let oldIndex = _.findIndex(this.state.alphabet, (item) => { return item === flagAlphabet })
            console.log(oldIndex)
            this.refs.handerAlphabetMethod.renderAlphabetStyle(newIndex, oldIndex)
            if (flagAlphabet !== '' && flagAlphabet !== alphabet) {
                this[`header${flagAlphabet}`].setNativeProps({ style: { backgroundColor: '#f1f1f1' } })
                this[`text${flagAlphabet}`].setNativeProps({ style: { color: '#666' } })
            }
            this[`header${alphabet}`].setNativeProps({ style: { backgroundColor: '#fff' } })
            this[`text${alphabet}`].setNativeProps({ style: { color: '#1AAD19', fontWeight: '500' } })
            flagAlphabet = alphabet
        }


    }
    //定义一个方法在componentDidMount时计算好每个字母对应屏幕区间的高度，再定义个方法，通过传入高度获取到对应的字母，从而最小化循环次数
    calculationAlphabetHeight(alphabet, data) {
        let alphabetHeigthMap = new Map()
        //1.初始第一个字母距离屏幕header为290
        let offset = 290
        let sum = 0;
        alphabet.map((item, index) => {
            //2.获取每个分组的高度
            let sectionHeight = data[index].data.length * ITEM_HEIGHT + 30 //每个分组的Item*ITEM_HEIGHT+title的高度
            sum += sectionHeight
            //3.将每个字母和分组对应的高度存入map中
            alphabetHeigthMap.set(item, sum + offset)
        })
        this.setState({
            alphabetHeigthMap
        })
    }
    getAlphabetWithScrollY(scrollY) {
        for (let [key, value] of this.state.alphabetHeigthMap.entries()) {
            if (scrollY >= 290 && scrollY <= value) {
                return key;
            }
        }
    }
    _line = () => {
        return (
            <View style={styles.line} />
        )
    }
    componentDidMount() {
        let alphabet = []
        FriendListData.forEach((val) => {
            alphabet.push(val.title)
        })
        this.setState({
            data: FriendListData,
            alphabet
        })
        this.calculationAlphabetHeight(alphabet, FriendListData)

    }
    _scrollToIndex = (index) => {
        this.refs.scollTo.scrollToLocation({
            itemIndex: 0,
            sectionIndex: index,
            viewOffset: 0
        })
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <SectionList
                    ListHeaderComponent={
                        <View>
                            <Search />
                            <FeatureList />
                        </View>
                    }
                    sections={this.state.data}
                    renderItem={this._getListItem}
                    keyExtractor={(item, index) => item + index}
                    renderSectionHeader={this._sectionHeader}
                    onViewableItemsChanged={this._onItemsChanged}
                    ItemSeparatorComponent={this._line}
                    onScroll={this._handleScroll}
                    ref='scollTo'
                    getItemLayout={(item, index) => (
                        { length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index + 30, index }
                    )}
                />
                <Alphabet handlerClick={this._scrollToIndex} alphabet={this.state.alphabet} ref="handerAlphabetMethod" />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 3
    },
    title: {
        color: '#010101',
        fontSize: 15,
        fontWeight: '400'
    },
    line: {
        height: 1 / PixelRatio.get(),
        backgroundColor: '#f1f1f1',
        marginLeft: 70
    },
    sectionHeader: {
        height: 30,
        backgroundColor: '#F1F1F1',
        justifyContent: "center",
        borderTopWidth: 1 / PixelRatio.get(),
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: '#f1f1f1'
    },
    sectionHeaderText: {
        fontSize: 13,
        color: '#666',
        marginLeft: 20,
        fontWeight: '400'
    },
    list: {
        height: 60
    }
})