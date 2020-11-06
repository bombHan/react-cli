import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCount } from '../store/actions'

class Header extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('header组件 didmount!', this.props);
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
      </div>
    );
  }
}

// redux中需要用的参数
function mapStateToProps(state) {
  return {
    count: state.count
  }
}
//redux中需要触发的行为
function mapDispatchToProps(dispatch) {
  return {
    setCount: (val) => dispatch(setCount(val)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)