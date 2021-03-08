import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCount, setUserInfo } from '../store/actions'
import api from '../api/api'

class Header extends Component {
  constructor(props) {
    super(props);
  }
  getInfo = () => {
    api.getUserInfo().then((res) => {
      console.log(res.data, this.props)
      this.props.setUserInfo(res.data)
    }).catch((e) => {
      console.log(e)
    })
  }
  componentDidMount() {
    console.log('header组件 didmount!', this.props);
    // this.getInfo()
  }
  changeCount = () => {
    this.props.setCount(this.props.count + 1)
  }
  render() {
    return (
      <div className="layout-header">
        <div>logo</div>
        <button onClick={this.changeCount}>change redux count +1</button>
        <div>redux's count:{this.props.count}</div>
        {
          this.props.userInfo.name
            ? (
              <div>
                {this.props.userInfo.name}
              </div>
            )
            : null
        }

      </div>
    );
  }
}

// redux中需要用的参数
function mapStateToProps(state) {
  return {
    count: state.count,
    userInfo: state.userInfo
  }
}
//redux中需要触发的行为
function mapDispatchToProps(dispatch) {
  return {
    setCount: (val) => dispatch(setCount(val)),
    setUserInfo: (val) => dispatch(setUserInfo(val))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)