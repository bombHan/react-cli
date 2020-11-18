import React, { Component } from 'react';
import { Button, message } from 'antd';
import './index.scss'
import { connect } from 'react-redux';
// import { setCount } from '../../store/actions'
import WebsocketChat from './websocketChat'

class Websocket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startWebsocket: false,
    }
  }


  componentDidMount() {
    console.log()
  }
  changeData = (data) => {
    console.log('父组件中获取到的data')
  }
  changeStatus = (value) => {
    this.setState({
      startWebsocket: value
    })
  }

  render() {
    return (
      <div className="websocket">
        <Button onClick={()=> {this.websocketChat.create()}} type="primary" disabled={this.state.startWebsocket}>开始建立websocket</Button>
        <Button onClick={()=> {this.websocketChat.close()}}>关闭</Button>
        父组件111
        <div style={{ width: '380px', height: '390px',background: '#ccc' }}>
          <WebsocketChat changeData={this.changeData} ref={(el) => this.websocketChat = el} changeStatus={this.changeStatus}/>
        </div>
      </div>
    );
  }
}

// redux中需要用的参数
function mapStateToProps(state) {
  return {
    // count: state.count
  }
}
//redux中需要触发的行为
function mapDispatchToProps(dispatch) {
  return {
    // setCount: (val) => dispatch(setCount(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Websocket);
