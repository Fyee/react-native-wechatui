import _ from 'lodash'
const data = [
    {
        id: '1111',
        title: '放学小卖部见',
        subtitle: '法拉马',
        msgCount: 16,
        time: '20:10',
        avatar: 'https://picsum.photos/60/60/?' + _.random(1, 999)
    },
    {
        id: '2',
        title: '订阅号消息',
        subtitle: 'AI科技大本营',
        msgCount: 2,
        time: '14:22',
        avatar: 'https://picsum.photos/60/60/?' + _.random(1, 999)
    },
    {
        id: '3',
        title: '德邦快递',
        subtitle: '儿童节，孩子最怕收到什么礼物？',
        msgCount: 3,
        time: '9:18',
        avatar: 'https://picsum.photos/60/60/?' + _.random(1, 999)
    }
]
export default data