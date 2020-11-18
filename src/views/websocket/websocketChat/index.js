import React, { Component } from 'react';
import { Button, message, Radio, Input, Avatar } from 'antd';
import './index.scss'
import { createSocket, sendWSPush, closeWS } from "./websocketFunction";
import moment from 'moment'
const { TextArea } = Input;

class WebsocketChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false, // 长连是否连接
      discussRoomInput: '', // 讨论间输入框的内容
      privateChatInput: '', // 私聊输入框内容
      radio: 'discussRoom', // 讨论间或者私聊
      discussRoomList: [
        { type: 'discuss-room-message', name: '111', value: 'ssss', avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' }
      ], // 讨论间列表
      privateChatList: [], // 私聊列表
    }
  }


  componentDidMount() {
    console.log('websocketChat didmount!!!')
  }
  // 建立长连
  create = () => {
    createSocket("wss://echo.websocket.org", this.connected);
    window.addEventListener("onmessageWS", this.getData);
  }
  connected = () => {
    // 连接后回调
    console.log("wesocket建立连接");
    message.success("wesocket建立连接");
    this.setState({
      isConnected: true
    })
    this.props.changeStatus(true);
  }
  // 实时获取数据
  getData = (e) => {
    const data = JSON.parse(e.detail);
    console.log(data);
    // 讨论间消息
    if (data.type === 'discuss-room-message') {
      let newList = this.state.discussRoomList;
      newList.push(data)
      console.log('最新的讨论间列表', newList)
      this.setState({ discussRoomList: newList })
      if (this.dicussRoomRef) { // 将滚动条一直至于底部
        const scrollHeight = this.dicussRoomRef.scrollHeight;//里面div的实际高度  2000px
        const height = this.dicussRoomRef.clientHeight;  //网页可见高度  200px
        const maxScrollTop = scrollHeight - height;
        this.dicussRoomRef.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0; //如果实际高度大于可见高度，说明是有滚动条的，则直接把网页被卷去的高度设置为两个div的高度差，实际效果就是滚动到底部了。
      }
    }
  }
  // 点击发送：发送数据
  send = () => {
    if (this.state.radio === 'discussRoom') {
      if (this.state.discussRoomInput) {
        sendWSPush({
          type: "discuss-room-message",
          value: this.state.discussRoomInput,
          time: moment().format("YYYY-MM-DD HH:mm:ss"),
          identity: 'self',
          name: 'hhh'
        });
        this.setState({
          discussRoomInput: ''
        })
      }
    } else if (this.state.radio === 'privateChat') {

    }
  }
  // 关闭长连
  close = () => {
    closeWS();
    window.removeEventListener("onmessageWS", this.getData);
    this.setState({
      isConnected: false
    })
    this.props.changeStatus(false);
  }

  // 切换讨论间或者私聊
  changeRadio = (e) => {
    console.log(e)
    this.setState({
      radio: e.target.value
    })
  }

  // 输入框改变
  inputChange = (type, e) => {
    // console.log(e, type);
    this.setState({
      [type]: e.target.value
    })
  }

  componentWillUnmount() {
    this.close()
  }

  render() {
    const { radio, discussRoomInput, privateChatInput, discussRoomList, privateChatList } = this.state;
    return (
      <div className="websocket-chat">

        <Radio.Group onChange={this.changeRadio} value={radio} buttonStyle="solid">
          <Radio.Button value="discussRoom">讨论间</Radio.Button>
          <Radio.Button value="privateChat">私聊</Radio.Button>
        </Radio.Group>
        <div className="discuss-room" style={{ display: radio === 'discussRoom' ? 'flex' : 'none' }}>
          <div className="discuss-room-content" ref={(el) => { this.dicussRoomRef = el; }}>
            {(discussRoomList || []).map((item, index) => {
              if (item.type === 'discuss-room-message') {
                return (
                  <div key={index}>
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={24} />
                    {item.value}
                  </div>
                )
              } else {
                return (<div>其他消息</div>)
              }
            })}
          </div>
          <div className="discuss-room-bottom">
            <TextArea
              style={{ resize: 'none', borderRadius: 'unset', flex: 'none', height: '70px' }}
              value={discussRoomInput}
              onChange={this.inputChange.bind(this, 'discussRoomInput')}
            />
            <div className="discuss-room-tool">
              <a>111</a>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button type="primary" style={{ width: '60px', fontSize: '12px', height: '20px' }} onClick={this.send}>发送</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="private-chat" style={{ display: radio === 'privateChat' ? 'flex' : 'none' }}>
          私聊
        </div>
        {/* <Button onClick={this.create} type="primary" disabled={this.state.isConnected}>开始建立websocket</Button>
        <Button onClick={this.close}>关闭</Button> */}
      </div>
    );
  }
}

export default WebsocketChat;
