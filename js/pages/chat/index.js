import React, { Component } from 'react'

import {
    StyleSheet,
    View,
    Alert,
    Dimensions,
    Button,
    Platform,
    TouchableOpacity,
    Image
} from 'react-native'
import MyHeader from '../../component/header'
import GlobalStyles from '../../utils/GlobalStyles'
import RNFS from 'react-native-fs'
import IMUI from 'aurora-imui-react-native'
import moment from 'moment'
var InputView = IMUI.ChatInput
var MessageListView = IMUI.MessageList
const AuroraIController = IMUI.AuroraIMUIController
const window = Dimensions.get('window')


var themsgid = 1

function constructNormalMessage() {

    var message = {}
    message.msgId = themsgid.toString()
    themsgid += 1
    message.status = "send_succeed"
    message.isOutgoing = true
    message.timeString = moment().format('HH:mm:ss')
    var user = {
        userId: "1",
        displayName: "nothing",
        avatarPath: "https://picsum.photos/id/1038/80/80"
    }
    if (Platform.OS === "ios") {
        user.avatarPath = "https://picsum.photos/id/1038/80/80"
    }
    message.fromUser = user

    return message
}

var imageUrlArray = [
    "https://picsum.photos/id/10/120/120",
    "https://picsum.photos/id/14/120/120",
    "https://picsum.photos/id/19/120/120",
]

export default class Chat extends Component {
    constructor(props) {
        super(props);
        let initHeight;
        if (Platform.OS === "ios") {
            initHeight = 46
        } else {
            initHeight = 100
        }
        this.state = {
            inputLayoutHeight: initHeight,
            messageListLayout: { flex: 1, width: window.width, margin: 0 },
            inputViewLayout: { width: window.width, height: initHeight, },
            isAllowPullToRefresh: true,
            navigationBar: {},
        }


        this.updateLayout = this.updateLayout.bind(this);
        this.onMsgClick = this.onMsgClick.bind(this);
        this.messageListDidLoadEvent = this.messageListDidLoadEvent.bind(this);
    }

    componentDidMount() {
        /**
         * Android only
         * Must set menu height once, the height should be equals with the soft keyboard height so that the widget won't flash.
         * 在别的界面计算一次软键盘的高度，然后初始化一次菜单栏高度，如果用户唤起了软键盘，则之后会自动计算高度。
         */
        if (Platform.OS === "android") {
            this.refs["ChatInput"].setMenuContainerHeight(316)
        }
        this.resetMenu()
        AuroraIController.addMessageListDidLoadListener(this.messageListDidLoadEvent);
    }

    messageListDidLoadEvent() {
        this.getHistoryMessage()
    }

    getHistoryMessage() {
        var messages = []
        for (var index in imageUrlArray) {
            var message = constructNormalMessage()
            message.fromUser.avatarUrl = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534926548887&di=f107f4f8bd50fada6c5770ef27535277&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F11%2F67%2F23%2F69i58PICP37.jpg",//1
                message.msgType = 'image'
            message.mediaPath = imageUrlArray[index]
            message.contentSize = { 'height': 100, 'width': 200 }
            message.extras = { "extras": "fdfsf" }
            messages.push(message)
            // AuroraIController.appendMessages([message])
            // AuroraIController.scrollToBottom(true)
        }
        AuroraIController.appendMessages(messages)
        AuroraIController.scrollToBottom(true)
    }

    onInputViewSizeChange = (size) => {
        console.log("onInputViewSizeChange height: " + size.height + " width: " + size.width)
        if (this.state.inputLayoutHeight != size.height) {
            this.setState({
                inputLayoutHeight: size.height,
                inputViewLayout: { width: window.width, height: size.height },
                messageListLayout: { flex: 1, width: window.width, margin: 0 }
            })
        }
    }

    componentWillUnmount() {
        AuroraIController.removeMessageListDidLoadListener(this.messageListDidLoadEvent)
    }

    resetMenu() {
        if (Platform.OS === "android") {
            this.refs["ChatInput"].showMenu(false)
            this.setState({
                messageListLayout: { flex: 1, width: window.width, margin: 0 },
                navigationBar: { height: 64, justifyContent: 'center' },
            })
            this.forceUpdate();
        } else {
            AuroraIController.hidenFeatureView(true)
        }
    }

    /**
     * Android need this event to invoke onSizeChanged 
     */
    onTouchEditText = () => {
        this.refs["ChatInput"].showMenu(false)
    }

    onFullScreen = () => {
        console.log("on full screen")
        this.setState({
            messageListLayout: { flex: 0, width: 0, height: 0 },
            inputViewLayout: { flex: 1, width: window.width, height: window.height },
            navigationBar: { height: 0 }
        })
    }

    onRecoverScreen = () => {
        // this.setState({
        //   inputLayoutHeight: 100,
        //   messageListLayout: { flex: 1, width: window.width, margin: 0 },
        //   inputViewLayout: { flex: 0, width: window.width, height: 100 },
        //   navigationBar: { height: 64, justifyContent: 'center' }
        // })
    }

    onAvatarClick = (message) => {

    }

    onMsgClick(message) {
        console.log(message)
        Alert.alert("message", JSON.stringify(message))
    }

    onMsgLongClick = (message) => {
        Alert.alert('message bubble on long press', 'message bubble on long press')
    }

    onStatusViewClick = (message) => {
        message.status = 'send_succeed'
        AuroraIController.updateMessage(message)
    }

    onBeginDragMessageList = () => {
        this.resetMenu()
        AuroraIController.hidenFeatureView(true)
    }

    onTouchMsgList = () => {
        AuroraIController.hidenFeatureView(true)
    }

    onPullToRefresh = () => {
        console.log("on pull to refresh")
        var messages = []
        for (var i = 0; i < 14; i++) {
            var message = constructNormalMessage()
            // if (index%2 == 0) {
            message.msgType = "text"
            message.text = "" + i
            // }

            if (i % 3 == 0) {
                message.msgType = "video"
                message.text = "" + i
                message.mediaPath = "/storage/emulated/0/ScreenRecorder/screenrecorder.20180323101705.mp4"
                message.duration = 12
            }
            messages.push(message)
        }
        AuroraIController.insertMessagesToTop(messages)
        if (Platform.OS === 'android') {
            this.refs["MessageList"].refreshComplete()
        }

    }

    onSendText = (text) => {
        var message = constructNormalMessage()
        var evenmessage = constructNormalMessage()

        message.msgType = 'text'
        message.text = text

        AuroraIController.appendMessages([message])
    }

    onTakePicture = (media) => {
        console.log("media " + JSON.stringify(media))
        var message = constructNormalMessage()
        message.msgType = 'image'
        message.mediaPath = media.mediaPath
        AuroraIController.appendMessages([message])
        this.resetMenu()
        AuroraIController.scrollToBottom(true)
    }

    onStartRecordVoice = (e) => {
        console.log("on start record voice")
    }

    onFinishRecordVoice = (mediaPath, duration) => {
        var message = constructNormalMessage()
        message.msgType = "voice"
        message.mediaPath = mediaPath
        message.timeString = "safsdfa"
        message.duration = duration
        AuroraIController.appendMessages([message])
        console.log("on finish record voice")
    }

    onCancelRecordVoice = () => {
        console.log("on cancel record voice")
    }

    onStartRecordVideo = () => {
        console.log("on start record video")
    }

    onFinishRecordVideo = (video) => {
        // var message = constructNormalMessage()

        // message.msgType = "video"
        // message.mediaPath = video.mediaPath
        // message.duration = video.duration
        // AuroraIController.appendMessages([message])
    }

    onSendGalleryFiles = (mediaFiles) => {
        /**
         * WARN: This callback will return original image, 
         * if insert it directly will high memory usage and blocking UI。
         * You should crop the picture before insert to messageList。
         * 
         * WARN: 这里返回的是原图，直接插入大会话列表会很大且耗内存.
         * 应该做裁剪操作后再插入到 messageListView 中，
         * 一般的 IM SDK 会提供裁剪操作，或者开发者手动进行裁剪。
         * 
         * 代码用例不做裁剪操作。
         */
        Alert.alert('fas', JSON.stringify(mediaFiles))
        for (index in mediaFiles) {
            var message = constructNormalMessage()
            if (mediaFiles[index].mediaType == "image") {
                message.msgType = "image"
            } else {
                message.msgType = "video"
                message.duration = mediaFiles[index].duration
            }

            message.mediaPath = mediaFiles[index].mediaPath
            message.timeString = "8:00"
            message.status = "send_going"
            AuroraIController.appendMessages([message])
            AuroraIController.scrollToBottom(true)
        }

        this.resetMenu()
    }

    onSwitchToMicrophoneMode = () => {
        AuroraIController.scrollToBottom(true)
    }

    onSwitchToEmojiMode = () => {
        AuroraIController.scrollToBottom(true)
    }
    onSwitchToGalleryMode = () => {
        AuroraIController.scrollToBottom(true)
    }

    onSwitchToCameraMode = () => {
        AuroraIController.scrollToBottom(true)
    }

    onShowKeyboard = (keyboard_height) => {
    }

    updateLayout(layout) {
        this.setState({ inputViewLayout: layout })
    }

    onInitPress() {
        console.log('on click init push ');
        this.updateAction();
    }

    onClickSelectAlbum = () => {
        console.log("on click select album")
    }

    onCloseCamera = () => {
        console.log("On close camera event")
        this.setState({
            inputLayoutHeight: 100,
            messageListLayout: { flex: 1, width: window.width, margin: 0 },
            inputViewLayout: { flex: 0, width: window.width, height: 100 },
            navigationBar: { height: 64, justifyContent: 'center' }
        })
    }

    /**
     * Switch to record video mode or not
     */
    switchCameraMode = (isRecordVideoMode) => {
        console.log("Switching camera mode: isRecordVideoMode: " + isRecordVideoMode)
        // If record video mode, then set to full screen.
        if (isRecordVideoMode) {
            this.setState({
                messageListLayout: { flex: 0, width: 0, height: 0 },
                inputViewLayout: { flex: 1, width: window.width, height: window.height },
                navigationBar: { height: 0 }
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <MyHeader
                    title='聊天界面'
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
                    right={
                        <TouchableOpacity

                        >
                            <Image
                                source={require('../../assets/icon/pages/common/more.png')}
                                style={GlobalStyles.headerIcon}
                            />
                        </TouchableOpacity>
                    }
                />
                <MessageListView style={this.state.messageListLayout}
                    ref="MessageList"
                    isAllowPullToRefresh={true}
                    onAvatarClick={this.onAvatarClick}
                    onMsgClick={this.onMsgClick}
                    onStatusViewClick={this.onStatusViewClick}
                    onTouchMsgList={this.onTouchMsgList}
                    onTapMessageCell={this.onTapMessageCell}
                    onBeginDragMessageList={this.onBeginDragMessageList}
                    onPullToRefresh={this.onPullToRefresh}
                    avatarSize={{ width: 50, height: 50 }}
                    avatarCornerRadius={25}
                    messageListBackgroundColor={"#f5f5f5"}
                    sendBubbleTextSize={18}
                    sendBubbleTextColor={"#333333"}
                    sendBubblePadding={{ left: 10, top: 10, right: 15, bottom: 10 }}
                    datePadding={{ left: 5, top: 5, right: 5, bottom: 5 }}
                    dateBackgroundColor={"#f5f5f5"}
                    photoMessageRadius={5}
                    maxBubbleWidth={0.7}
                    videoDurationTextColor={"#ffffff"}
                    isShowDisplayName={true}
                />
                <InputView style={this.state.inputViewLayout}
                    ref="ChatInput"
                    onSendText={this.onSendText}
                    onTakePicture={this.onTakePicture}
                    onStartRecordVoice={this.onStartRecordVoice}
                    onFinishRecordVoice={this.onFinishRecordVoice}
                    onCancelRecordVoice={this.onCancelRecordVoice}
                    onStartRecordVideo={this.onStartRecordVideo}
                    onFinishRecordVideo={this.onFinishRecordVideo}
                    onSendGalleryFiles={this.onSendGalleryFiles}
                    onSwitchToEmojiMode={this.onSwitchToEmojiMode}
                    onSwitchToMicrophoneMode={this.onSwitchToMicrophoneMode}
                    onSwitchToGalleryMode={this.onSwitchToGalleryMode}
                    onSwitchToCameraMode={this.onSwitchToCameraMode}
                    onShowKeyboard={this.onShowKeyboard}
                    onTouchEditText={this.onTouchEditText}
                    onFullScreen={this.onFullScreen}
                    onRecoverScreen={this.onRecoverScreen}
                    onSizeChange={this.onInputViewSizeChange}
                    closeCamera={this.onCloseCamera}
                    switchCameraMode={this.switchCameraMode}
                    showSelectAlbumBtn={true}
                    showRecordVideoBtn={false}
                    onClickSelectAlbum={this.onClickSelectAlbum}
                    inputPadding={{ left: 30, top: 10, right: 10, bottom: 10 }}
                    galleryScale={0.6}//default = 0.5
                    compressionQuality={0.6}
                    cameraQuality={0.7}//default = 0.5
                    customLayoutItems={{
                        left: [],
                        right: ['send'],
                        bottom: ['voice', 'gallery', 'emoji', 'camera']
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    inputView: {
        backgroundColor: 'green',
        width: window.width,
        height: 100,
    },
    btnStyle: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#3e83d7',
        borderRadius: 8,
        backgroundColor: '#3e83d7'
    }
});



// import React, { Component } from 'react'
// import { View, Text, TouchableOpacity, Image, } from 'react-native'
// import MyHeader from '../../component/header'
// import GlobalStyles from '../../utils/GlobalStyles'
// import { GiftedChat, Bubble, InputToolbar } from 'react-native-gifted-chat'
// export default class Chat extends Component {
//     constructor(props) {
//         super(props)
//     }
//     initstate() {
//         this.state = {
//             message: []
//         }
//     }
//     componentWillMount() {
//         this.setState({
//             messages: [
//                 {
//                     _id: 1,
//                     text: 'Hello developer',
//                     createdAt: new Date(),
//                     user: {
//                         _id: 2,
//                         name: 'test',
//                         avatar: 'https://picsum.photos/60/60/?222',
//                     },
//                 },
//             ],
//         })
//     }
//     onSend(messages = []) {
//         this.setState(previousState => ({
//             messages: GiftedChat.append(previousState.messages, messages),
//         }))
//     }
//     _renderBubble = (props) => {
//         return (
//             <Bubble
//                 {...props}
//                 textStyle={{
//                     right: {
//                         color: '#333',
//                     },
//                     left: {
//                         color: '#333'
//                     }
//                 }}
//                 wrapperStyle={{
//                     left: {
//                         backgroundColor: '#fff',
//                     },
//                     right: {
//                         backgroundColor: '#91ED61'
//                     }
//                 }}
//             />
//         )
//     }
//     __renderInputToolbar = (props) => {
//         return (
//             <InputToolbar
//                 {...props}
//             />
//         )
//     }
//     render() {
//         return (
//             <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
//                 <MyHeader
//                     title='聊天界面'
//                     left={
//                         <TouchableOpacity
//                             onPress={() => this.props.navigation.goBack()}
//                         >
//                             <Image
//                                 source={require('../../assets/icon/pages/common/back.png')}
//                                 style={GlobalStyles.headerIcon}
//                             />
//                         </TouchableOpacity>
//                     }
//                     right={
//                         <TouchableOpacity

//                         >
//                             <Image
//                                 source={require('../../assets/icon/pages/common/more.png')}
//                                 style={GlobalStyles.headerIcon}
//                             />
//                         </TouchableOpacity>
//                     }
//                 />
//                 <GiftedChat
//                     showUserAvatar={true}
//                     renderUsernameOnMessage={true}
//                     showAvatarForEveryMessage={true}
//                     messages={this.state.messages}
//                     onSend={messages => this.onSend(messages)}
//                     user={{
//                         _id: 1,
//                         name: 'nothing',
//                         avatar: 'https://picsum.photos/60/60/?666',
//                     }}
//                     renderBubble={this._renderBubble}
//                     renderInputToolbar={this._renderInputToolbar}
//                     placeholder=''

//                 />
//             </View>
//         )
//     }
// }