import React, { Component } from 'react';
import { Button } from 'antd';
import './index.scss'
import { connect } from 'react-redux';
import { setCount } from '../../store/actions'

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state={
      data: 111
    }
  }

  componentDidMount() {
    console.log('homepage页面', this.props)
  }
  gotest= () => {
    this.props.history.push({ pathname: '/test', state: { title: '微信绑定' } })
  }
  countChange = () => {
    this.props.setCount(this.props.count - 1)
  }
	render() {
		return (
      <div className="hompage">
        <div className="title">
          {this.state.data}dsadasd
        </div>
        <Button onClick={this.gotest}>go test</Button>
        <Button type="primary" onClick={this.countChange}>redux count - 1</Button>
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

export default connect(mapStateToProps,mapDispatchToProps)(Homepage);
